(() => {
  'use strict';
  const C = ClaroCore, KEY = 'claro-personal-v1', $ = s => document.querySelector(s);
  const CLOUD = document.querySelector('meta[name="claro-hosting"]')?.content === 'static';
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const uid = () => 'u' + crypto.randomUUID().replaceAll('-','');
  const searchNorm = v => C.norm(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const paths = {
    home:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    words:'<path d="M4 4h7a3 3 0 0 1 3 3v14a4 4 0 0 0-4-3H4zM14 7a3 3 0 0 1 3-3h3v14h-3a3 3 0 0 0-3 3"/>',
    reading:'<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h5"/>',
    grammar:'<path d="M4 5h16M4 12h10M4 19h7M17 11l4 8M21 11l-4 8"/>',
    verbs:'<path d="M3 7h17l-4-4M21 17H4l4 4M20 7l-4 4M4 17l4-4"/>',
    review:'<rect x="7" y="3" width="13" height="16" rx="2"/><path d="M4 7v13a2 2 0 0 0 2 2h10M11 9l2 2 4-4"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M10 3h4l1 3 3 1 3-1 2 4-2 2v3l1 2-3 3-3-1-2 2h-4l-1-3-3-1-2 1-2-4 2-2v-3L3 7l3-3 3 1z"/>',
    arrow:'<path d="M4 12h15M14 7l5 5-5 5"/>',back:'<path d="M20 12H5M10 7l-5 5 5 5"/>',chevron:'<path d="M9 5l7 7-7 7"/>',plus:'<path d="M12 5v14M5 12h14"/>',
    sound:'<path d="M11 4 6 8H3v8h3l5 4zM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',star:'<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    check:'<path d="m5 12 4 4L19 6"/>',upload:'<path d="M12 16V3M7 8l5-5 5 5M4 15v6h16v-6"/>',download:'<path d="M12 3v13M7 11l5 5 5-5M4 16v5h16v-5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',edit:'<path d="m16 3 5 5-12 12-6 1 1-6zM13 6l5 5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',leaf:'<path d="M20 3C5 2 1 9 5 16s16 5 15-13ZM5 19 16 8"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.reading}</svg>`;
  const btn = (label, action, attrs = '', style = '') => `<button type="button" class="btn ${style}" data-action="${action}" ${attrs}>${label}</button>`;
  const go = page => { if (location.hash.slice(1) === page) render(); else location.hash = page; };
  const todayKey = (time = Date.now()) => new Date(time).toLocaleDateString('sv-SE');
  let storageIssue = '', toastTimer, pendingImport, selected = null, session = null;
  let filters = { wordQuery:'', category:'全部词汇', wordStatus:'all', articleQuery:'', articleLevel:'all', verb:'hablar' };
  let state;
  try {
    const saved = localStorage.getItem(KEY);
    state = saved ? C.validateState(JSON.parse(saved)) : freshState();
  } catch {
    state = freshState(); storageIssue = '本地数据未能读取。当前使用初始内容；可在设置中导入此前导出的备份。';
  }
  function freshState() { return { version:1, words:structuredClone(SEED_WORDS), articles:structuredClone(SEED_ARTICLES), notes:[], reviews:{}, reading:{}, events:[], settings:{accent:'es-ES',rate:0.85} }; }
  function persist(message) {
    try { localStorage.setItem(KEY,JSON.stringify(state)); storageIssue=''; if(message) toast(message); return true; }
    catch { storageIssue='浏览器未能保存数据（可能空间已满或禁用存储）。请立即在设置中导出备份；当前修改暂存于本次页面。'; toast(storageIssue); return false; }
  }
  function toast(message) { $('#toast').textContent=message; $('#toast').classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),4500); }
  const dueWords = () => state.words.filter(w => !state.reviews[w.id] || state.reviews[w.id].due <= Date.now());
  const wordStatus = w => !state.reviews[w.id] ? 'new' : state.reviews[w.id].stage >= 3 ? 'known' : 'learning';
  const statusLabel = w => ({new:'未学习',learning:'学习中',known:'较熟悉'})[wordStatus(w)];
  const categories = () => [...new Set([...CATEGORIES,...state.words.map(w=>w.category)])];
  const catOptions = (value='我的生词') => categories().map(c=>`<option ${c===value?'selected':''}>${esc(c)}</option>`).join('');
  function pageTitle(en,title,subtitle,actions='') { return `<div class="page-heading"><div><div class="eyebrow">${en}</div><h1>${title}</h1><p>${subtitle}</p></div><div class="heading-actions">${actions}</div></div>`; }
  function searchBox(id,placeholder,value) { return `<label class="search-box">${icon('search')}<input id="${id}" type="search" aria-label="${placeholder}" placeholder="${placeholder}" value="${esc(value)}"></label>`; }
  function empty(title,desc,action='') { return `<div class="empty"><h3>${title}</h3><p>${desc}</p>${action}</div>`; }
  function render() {
    const route = location.hash.slice(1) || 'home', base = route.split('/')[0];
    if (base !== 'reader') selected=null;
    if (base !== 'practice') session=null;
    if (base === 'practice' && !session) { go('review'); return; }
    const navs = [['home','学习概览'],['words','我的词库'],['reading','阅读空间'],['grammar','语法手帐'],['verbs','动词变位'],['review','复习与测试']];
    $('#nav').innerHTML=navs.map(([p,t])=>`<a href="#${p}" class="nav-item ${(base===p||(p==='reading'&&base==='reader')||(p==='review'&&base==='practice'))?'active':''}" ${base===p?'aria-current="page"':''}>${icon(p)}${t}${p==='review'&&dueWords().length?`<span class="badge">${dueWords().length}</span>`:''}</a>`).join('');
    $('#page-label').textContent = Object.fromEntries(navs)[base] || ({settings:'设置与数据',reader:'阅读空间',practice:'复习与测试'})[base] || '学习概览';
    const renderers = {home:renderHome,words:renderWords,reading:renderReading,reader:()=>renderReader(route.split('/')[1]),grammar:renderGrammar,verbs:renderVerbs,review:renderReview,practice:renderSession,settings:renderSettings};
    $('#main').innerHTML = (storageIssue?`<div class="notice" role="alert">${esc(storageIssue)}</div>`:'') + (renderers[base]||renderHome)();
    document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
    document.title=`${$('#page-label').textContent} · Claro`;
    refreshSpeechConfig();
  }
  function renderHome() {
    const n = state.events.filter(e=>todayKey(e.time)===todayKey()).length;
    const learned = state.words.filter(w=>state.reviews[w.id]).length;
    const read = state.articles.find(a=>a.level==='A1'&&!state.reading[a.id]) || state.articles[0];
    const due = dueWords().length;
    const date = new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric',weekday:'long'}).format(new Date());
    return pageTitle('UN POCO, CADA DÍA','Hola，今天也学一点西语。','从一句问候，到读懂一个小小的世界。',`<span class="tiny muted">${date}</span>`) + `
    <div class="home-grid"><div><section class="hero"><div><div class="eyebrow">TU VIAJE EMPIEZA AQUÍ</div><h2>Un poco,<br>cada día.</h2><p>每天一点点，让西语走进生活。<br>今天，从一杯咖啡和一个新单词开始。</p>${btn(`开始今日阅读 ${icon('arrow')}`,'read',`data-id="${read?.id||''}"`,'primary')}</div><div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="hola-card"><span>¡hola!</span><span>你好，新的世界。</span><span>ESPAÑOL · A1</span></div><span class="art-sun">☼</span><span class="art-label">每一个单词，都是新的开始。</span></div></section>
    <div class="stats"><div class="stat"><div class="stat-label">${icon('words')} 已开始学习</div><div class="stat-num">${learned}<small>/ ${state.words.length} 个词</small></div></div><div class="stat"><div class="stat-label">${icon('reading')} 已读文章</div><div class="stat-num">${Object.keys(state.reading).length}<small>篇</small></div></div><div class="stat"><div class="stat-label">${icon('leaf')} 今日练习</div><div class="stat-num">${n}<small>次记录</small></div></div></div>
    <div class="section-heading"><h2>今天的小目标 <span>按自己的节奏来</span></h2><span>约 10–15 分钟</span></div>
    <div class="daily-plan card"><div class="plan-row"><div class="plan-icon">${icon('review')}</div><div><h3>${due?'复习 10 个词，唤醒记忆':'今日词汇已复习，做得很好'}</h3><p>${due?`${due} 个待学 / 到期词汇 · 一次最多 10 张卡片`:'也可以去词库继续收集新词'}</p></div><button class="text-btn" data-action="start-cards">去复习 ${icon('arrow')}</button></div><div class="plan-row"><div class="plan-icon">${icon('reading')}</div><div><h3>读一篇短文，遇见新词</h3><p>${esc(read?.title||'添加一篇喜欢的文章')} · A1 入门阅读</p></div><button class="text-btn" data-action="read" data-id="${read?.id||''}">去阅读 ${icon('arrow')}</button></div><div class="plan-row"><div class="plan-icon">${icon('grammar')}</div><div><h3>弄懂一个小语法</h3><p>从 el 和 la 开始，认识名词的阴阳性</p></div><a class="text-btn" href="#grammar">去看看 ${icon('arrow')}</a></div></div></div>
    <aside class="home-right"><section class="daily-word card"><div class="eyebrow">UNA PALABRA · 今日一词</div><div class="word-title"><h2>aprender</h2><button class="icon-btn" aria-label="朗读 aprender" data-action="speak" data-text="aprender">${icon('sound')}</button></div><div class="definition">v. 学习，学会 <span class="tag level">A1</span></div><blockquote>“Aprendo una palabra<br>nueva cada día.”</blockquote><span class="tiny muted">我每天学一个新单词。</span><button class="text-btn" data-action="word-detail" data-id="w53">看看这个单词 ${icon('arrow')}</button></section>
    <section class="week-card card"><h3>把小进步，留在这一周</h3><div class="week-bars">${weekBars()}</div><p>每一次阅读与练习，都会留下记录。</p></section></aside></div>
    <div class="section-heading"><h2>为你的第一步准备 <span>A1 · 短篇阅读</span></h2><a class="text-btn" href="#reading">全部文章 ${icon('arrow')}</a></div><div class="article-grid">${state.articles.filter(a=>a.level==='A1').slice(0,3).map(articleCard).join('')}</div>`;
  }
  function weekBars() {
    const days=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return {d,n:state.events.filter(e=>todayKey(e.time)===todayKey(d.getTime())).length};});
    const max=Math.max(5,...days.map(x=>x.n));
    return days.map(({d,n},i)=>`<div class="bar-col" title="${todayKey(d.getTime())}：${n} 次"><div class="bar ${i===6?'today':''}" style="height:${Math.max(3,n/max*45)}px"></div><span>${i===6?'今天':['日','一','二','三','四','五','六'][d.getDay()]}</span></div>`).join('');
  }
  function articleCard(a) {
    const count=a.text.split(/\s+/).filter(Boolean).length;
    const coverWord={cafe:'un café',home:'en familia',city:'mi barrio',market:'el mercado',travel:'sin prisa',book:'poco a poco'}[a.cover]||'mi lectura';
    return `<article class="article-card card"><div class="article-cover ${esc(a.cover)}"><span class="cover-word">${coverWord}</span><span class="cover-symbol" aria-hidden="true">${{cafe:'☕',home:'⌂',city:'▥',market:'◒',travel:'≈',book:'¶'}[a.cover]||'¶'}</span></div><div class="article-content"><div class="article-meta"><span class="tag level">${esc(a.level)}</span><span class="tag">${esc(a.category)}</span><span>${Math.max(1,Math.ceil(count/70))} 分钟</span></div><h3>${esc(a.title)}</h3><p>${esc(a.subtitle||'一篇属于你的西语阅读')}</p><div class="article-bottom"><span>${count} 词 ${state.reading[a.id]?'· 已读 ✓':''}</span><button data-action="read" data-id="${a.id}">${state.reading[a.id]?'再读一次':'开始阅读'} ${icon('arrow')}</button></div></div></article>`;
  }
  function renderWords() {
    return pageTitle('MI VOCABULARIO','我的词库','把遇见的单词，慢慢变成自己的。',btn(`${icon('upload')} 导入词汇`,'import-csv')+btn(`${icon('plus')} 添加单词`,'add-word','','primary')) +
    `<div class="toolbar">${searchBox('word-search','搜索西语、中文或例句…',filters.wordQuery)}<select id="word-status" class="filter-select" aria-label="筛选学习状态">${[['all','全部状态'],['new','未学习'],['learning','学习中'],['known','较熟悉'],['starred','已收藏']].map(([v,t])=>`<option value="${v}" ${v===filters.wordStatus?'selected':''}>${t}</option>`).join('')}</select></div>
    <div class="vocab-layout"><aside class="category-list card"><button class="category-btn ${filters.category==='全部词汇'?'active':''}" data-action="category" data-value="全部词汇">全部词汇<span>${state.words.length}</span></button>${categories().map(c=>`<button class="category-btn ${filters.category===c?'active':''}" data-action="category" data-value="${esc(c)}">${esc(c)}<span>${state.words.filter(w=>w.category===c).length}</span></button>`).join('')}</aside><section class="vocab-table card" id="word-results">${wordResults()}</section></div>`;
  }
  function wordResults() {
    const q=searchNorm(filters.wordQuery);
    const words=state.words.filter(w=>(filters.category==='全部词汇'||w.category===filters.category)&&(!q||searchNorm([w.word,w.meaning,w.example].join(' ')).includes(q))&&(filters.wordStatus==='all'||(filters.wordStatus==='starred'?w.starred:wordStatus(w)===filters.wordStatus)));
    return `<div class="table-title">${esc(filters.category)}<span>${words.length} 个词 · 点击单词看例句</span></div>`+(words.length?words.map(w=>`<div class="word-row"><button class="word-button" data-action="word-detail" data-id="${w.id}"><strong>${esc(w.word)}</strong><small>${esc(w.pos||w.level)}</small></button><div class="word-meaning">${esc(w.meaning)}<small>${esc(w.category)}</small></div><span class="word-status ${wordStatus(w)}">${statusLabel(w)}</span><div class="word-actions"><button class="icon-btn ${w.starred?'starred':''}" aria-label="${w.starred?'取消收藏':'收藏'} ${esc(w.word)}" aria-pressed="${!!w.starred}" data-action="star" data-id="${w.id}">${icon('star')}</button><button class="icon-btn" aria-label="朗读 ${esc(w.word)}" data-action="speak" data-text="${esc(w.word)}">${icon('sound')}</button></div></div>`).join(''):empty('还没有找到这个词','换个关键词，或者添加你的第一个生词。',btn('添加单词','add-word')));
  }
  function renderReading() {
    return pageTitle('LECTURAS PARA TI','阅读空间','挑一个感兴趣的主题，让单词在故事里发生。',btn(`${icon('plus')} 添加 / 导入文章`,'add-article','','primary'))+
    `<div class="toolbar">${searchBox('article-search','搜索标题、主题或文章内容…',filters.articleQuery)}<div class="tabs" role="group" aria-label="文章难度">${[['all','全部'],['A1','A1 入门'],['A2','A2 基础'],['B1','B1 进阶']].map(([v,t])=>`<button class="tab ${filters.articleLevel===v?'active':''}" aria-pressed="${filters.articleLevel===v}" data-action="article-level" data-value="${v}">${t}</button>`).join('')}</div></div><p class="count-line">内置短文为原创示例，难度为编写估计。也可以导入自己的文章。</p><div class="article-grid" id="article-results">${articleResults()}</div>`;
  }
  function articleResults() {
    const q=searchNorm(filters.articleQuery), list=state.articles.filter(a=>(filters.articleLevel==='all'||a.level===filters.articleLevel)&&(!q||searchNorm([a.title,a.subtitle,a.category,a.text].join(' ')).includes(q)));
    return list.length?list.map(articleCard).join(''):empty('这里还没有文章','换一个难度，或把喜欢的文章粘贴进来。',btn('添加文章','add-article'));
  }
  function renderReader(id) {
    const a=state.articles.find(x=>x.id===id);
    if(!a)return empty('找不到这篇文章','返回阅读空间选择一篇文章。','<a class="btn" href="#reading">返回阅读空间</a>');
    const bare=new Set(state.words.map(w=>C.norm(w.word).replace(/^(el|la|los|las) /,'')));
    const paragraphs=a.text.split(/\n+/).filter(Boolean).map(p=>`<p>${p.split(/([\p{L}\p{M}]+(?:['’][\p{L}]+)?)/u).map((t,i)=>i%2?`<span class="reader-token ${bare.has(C.norm(t))?'saved':''}" data-token="${esc(t)}" tabindex="0" role="button" aria-label="查看词语 ${esc(t)}">${esc(t)}</span>`:esc(t)).join('')}</p>`).join('');
    return `<button class="back-btn" data-action="route" data-page="reading">${icon('back')} 返回阅读空间</button><div class="reader-layout"><article class="reader card"><div class="article-meta"><span class="tag level">${esc(a.level)}</span><span class="tag">${esc(a.category)}</span><span>${a.original?'原创分级短文':'我的文章'}</span></div><h1>${esc(a.title)}</h1><p class="reader-subtitle">${esc(a.subtitle)}</p><div class="reader-tools">${btn(`${icon('sound')} 朗读全文`,'speak-article',`data-id="${a.id}"`,'small')}${btn(`${icon('stop')} 停止`,'stop-speech','','small')}${a.translation?btn('显示 / 隐藏译文','translation','','small'):''}${btn(`${icon('edit')} 编辑文章`,'edit-article',`data-id="${a.id}"`,'small')}</div><div id="reader-content" class="reader-text" lang="es">${paragraphs}</div><div id="reader-translation" class="translation-box" hidden>${esc(a.translation)}</div>${a.source?`<p class="info-note">来源：<a href="${esc(C.safeURL(a.source))}" target="_blank" rel="noopener noreferrer">打开原文 ↗</a></p>`:''}<div class="reader-finish"><p>黄色标记表示词库中已有的词，不代表已掌握。</p>${btn(`${icon('check')} ${state.reading[a.id]?'已标记读完':'标记读完'}`,'finish-read',`data-id="${a.id}"`,state.reading[a.id]?'soft':'primary')}</div></article><aside class="reader-side card" id="reader-side">${selectionPanel(a)}</aside></div>`;
  }
  function dictionaryLookup(text) { const n=C.norm(text);return state.words.find(w=>C.norm(w.word)===n||C.norm(w.word).replace(/^(el|la|los|las) /,'')===n); }
  function selectionPanel(a) {
    if(!selected)return `<h3>${icon('words')} 遇见一个新单词</h3><p>点击正文里的单词，或拖动选中一小段短语，再把它收进你的词库。</p><div class="info">收集时会保留原句。<br>释义可从已有词库带出；新词需要你填写中文释义。<br><br>试着点一下 <span lang="es">café</span>。</div>`;
    const known=dictionaryLookup(selected.text);
    return `<h3>这次遇见</h3><div class="selected-word" lang="es">${esc(selected.text)}</div><p class="context" lang="es">${esc(selected.context)}</p>${known?`<p>${esc(known.meaning)} <span class="tag">${esc(known.category)}</span></p>${btn(`${icon('sound')} 听发音`,'speak',`data-text="${esc(selected.text)}"`)}${btn(`${icon('check')} 已在词库 · 查看`,'word-detail',`data-id="${known.id}"`,'soft')}`:
    `<form id="selection-form"><label class="field">收录词形 / 原形<input name="word" required maxlength="100" value="${esc(selected.text)}"></label><label class="field">中文释义<input name="meaning" placeholder="写下这个语境中的意思" required maxlength="300"></label><label class="field">放入分类<select name="category">${catOptions(a.category)}</select></label><button class="btn primary" type="submit">${icon('plus')} 收进词库</button><div class="form-error" role="alert"></div></form>${btn(`${icon('sound')} 听发音`,'speak',`data-text="${esc(selected.text)}"`)}`}<div class="info">变位后的词可改为原形收录，例如 vivo → vivir；原句会照常保留。新词保存后会进入待复习队列。</div>`;
  }
  function renderGrammar() {
    return pageTitle('MI CUADERNO','语法手帐','把规则放进例句里，把疑问留在笔记里。',btn(`${icon('plus')} 添加笔记`,'add-note','','primary'))+
    `<div class="grammar-layout"><section class="grammar-list">${GRAMMAR.map((g,i)=>`<details class="grammar-item card" ${i===0?'open':''}><summary><span class="grammar-mark">${['el','es','yo','hay','me','-a'][i]}</span><div><h3>${g.title}</h3><p>${g.summary}</p></div>${icon('chevron')}</summary><div class="grammar-body">${esc(g.body)}</div><div>${g.examples.map(([es,zh])=>`<div class="example-row"><div class="example-copy"><strong lang="es">${esc(es)}</strong><small>${esc(zh)}</small></div><button class="icon-btn" aria-label="朗读 ${esc(es)}" data-action="speak" data-text="${esc(es)}">${icon('sound')}</button></div>`).join('')}</div></details>`).join('')}</section><aside class="notes-side"><div class="section-heading"><h2>我的笔记 <span>${state.notes.length} 条</span></h2></div>${state.notes.length?state.notes.map(n=>`<article class="note-card card"><span class="tag">${esc(n.category)}</span><h3>${esc(n.title)}</h3><p>${esc(n.body)}</p><div class="note-tools"><button class="text-btn" data-action="edit-note" data-id="${n.id}">${icon('edit')} 编辑</button></div></article>`).join(''):`<div class="card">${empty('留一个小发现','比如：为什么 agua 前面用 el？',btn('写下第一条笔记','add-note'))}</div>`}</aside></div>`;
  }
  function renderVerbs() {
    const v=VERBS[filters.verb];
    return pageTitle('LOS VERBOS','动词变位','先熟悉最常见的现在时，再慢慢扩展。',btn('练习变位 '+icon('arrow'),'start-conj','','primary'))+`<div class="conjugation"><div class="toolbar"><span class="tag level">直陈式 · 现在时</span><span class="tiny muted">点击动词切换 · 点击喇叭听发音</span></div><div class="verb-picker">${Object.keys(VERBS).map(w=>`<button class="verb-chip ${filters.verb===w?'active':''}" aria-pressed="${filters.verb===w}" data-action="verb" data-value="${w}">${w}</button>`).join('')}</div><div class="card"><div class="verb-top"><div><h2>${filters.verb}</h2><span>${v.meaning}</span></div><span class="tag">${v.type}</span></div>${v.forms.map((f,i)=>`<div class="conj-row"><span lang="es">${PERSONS[i]}</span><strong lang="es">${f}</strong><button class="icon-btn" aria-label="朗读 ${f}" data-action="speak" data-text="${f}">${icon('sound')}</button></div>`).join('')}</div><p class="info-note">vosotros/as 主要见于西班牙；拉美地区通常以 ustedes 表示复数“你们”，对应第三人称复数变位。当前只提供上面 10 个动词的现在时，后续可加其他时态。</p><p class="info-note">还想记录其他时态或例句？可以放进 <a href="#grammar">语法手帐</a>。</p></div>`;
  }
  function renderReview() {
    const due=dueWords().length, known=state.words.filter(w=>wordStatus(w)==='known').length, learning=state.words.filter(w=>wordStatus(w)==='learning').length;
    const quizzes=state.events.filter(e=>e.type==='quiz'), correct=quizzes.filter(e=>e.correct).length, total=state.words.length;
    return pageTitle('RECORDAR Y PRACTICAR','让学过的，留下来。','从“好像认识”，到真正想得起来。')+`<div class="review-options"><article class="review-option card"><div class="option-icon">${icon('review')}</div><h2>词汇闪卡</h2><p>先回想，再翻面。按记忆情况安排下一次复习，保留词语的原句。</p>${btn('开始复习 '+icon('arrow'),'start-cards','',due?'primary':'')}<div class="tiny">${due} 个待学 / 到期 · 每组最多 10 张</div></article><article class="review-option card"><div class="option-icon">${icon('edit')}</div><h2>语境填空</h2><p>把词放回句子里，练习 A1 语法、性数一致与常用表达。</p>${btn('开始填空 '+icon('arrow'),'start-quiz')}<div class="tiny">${QUESTIONS.length} 道内置题 · 每组 6 题</div></article><article class="review-option card"><div class="option-icon">${icon('verbs')}</div><h2>变位小练习</h2><p>从现在时开始，练习常用动词在人称变化时的不同形式。</p>${btn('练习变位 '+icon('arrow'),'start-conj')}<div class="tiny">10 个常用动词 · 每组 6 题</div></article></div><section class="progress-card card"><h3>我的词汇状态 <span class="tiny muted">按闪卡自评记录</span></h3><div class="progress-track"><span style="width:${total?known/total*100:0}%;background:#789b82"></span><span style="width:${total?learning/total*100:0}%;background:#e4cf89"></span></div><div class="progress-labels"><span><i></i>较熟悉 ${known}</span><span><i style="background:#e4cf89"></i>学习中 ${learning}</span><span><i style="background:#e2e7e8"></i>未学习 ${total-known-learning}</span></div><p class="info-note">${quizzes.length?`累计填空 / 变位 ${quizzes.length} 次，正确 ${correct} 次，正确率 ${Math.round(correct/quizzes.length*100)}%。`:'还没有测试记录，完成第一组练习后会在这里显示。'} 闪卡使用简易间隔复习，连续多次记住后标记为“较熟悉”；这不是正式等级评估。</p></section>`;
  }
  const shuffled = a => {const result=[...a];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;};
  function startSession(mode) {
    let items;
    if(mode==='cards') {
      items=dueWords().sort((a,b)=>(state.reviews[a.id]?.due||0)-(state.reviews[b.id]?.due||0)).slice(0,10);
      if(!items.length){toast('当前没有到期卡片，去读一篇文章收集新词吧。');go('review');return;}
    } else if(mode==='quiz') items=shuffled(QUESTIONS).slice(0,6);
    else {const pool=Object.entries(VERBS).flatMap(([verb,v])=>v.forms.map((answer,i)=>({sentence:`${PERSONS[i]} ___`,answer,hint:`${verb} · ${v.meaning}`,explanation:`${verb} 的 ${PERSONS[i]} 形式是 ${answer}。`,topic:'直陈式现在时'})));items=shuffled(pool).slice(0,6);}
    session={mode,items,index:0,revealed:false,answered:false,correct:0,answers:[],answer:''};
    go('practice/'+mode);
  }
  function renderSession() {
    if(!session)return '';
    const s=session, done=s.index>=s.items.length, title={cards:'词汇闪卡',quiz:'语境填空',conj:'变位小练习'}[s.mode];
    if(done)return `<div class="session"><section class="result-card card"><div class="result-icon">✺</div><div class="eyebrow">UN PASO MÁS</div><h2>今天又向前了一小步。</h2><p>${s.mode==='cards'?`你完成了 ${s.items.length} 张闪卡的复习。<br>已根据你的自评安排下次出现的时间。`:`本组完成 ${s.items.length} 题，答对 ${s.correct} 题。<br>重音符号也计入拼写：例如 está 与 esta 是不同的词。`}</p>${btn('返回复习中心 '+icon('arrow'),'route','data-page="review"','primary')}</section>${s.mode!=='cards'&&s.answers.some(a=>!a.correct)?`<div class="section-heading"><h2>再看一眼这些句子</h2></div>${s.answers.filter(a=>!a.correct).map(a=>`<div class="note-card card"><h3 lang="es">${esc(a.q.sentence.replace('___',a.q.answer))}</h3><p>你的答案：${esc(a.input||'（空白）')}<br>${esc(a.q.explanation)}</p></div>`).join('')}`:''}</div>`;
    const item=s.items[s.index];
    const progress=`<div class="session-top"><h2>${title}</h2><span>${s.index+1} / ${s.items.length}</span><button class="text-btn" data-action="route" data-page="review">退出练习</button></div><div class="progress-track" style="margin-top:0"><span style="width:${s.index/s.items.length*100}%;background:#8aa2b5"></span></div>`;
    if(s.mode==='cards')return `<div class="session">${progress}<article class="flashcard card"><span class="tag">${esc(item.category)}</span><button class="icon-btn" aria-label="朗读 ${esc(item.word)}" data-action="speak" data-text="${esc(item.word)}">${icon('sound')}</button><div class="eyebrow">${s.revealed?'记住它出现的地方':'先试着回想中文意思'}</div><div class="flash-word" lang="es">${esc(item.word)}</div>${s.revealed?`<div class="meaning">${esc(item.meaning)}</div><div class="example" lang="es">${esc(item.example)}</div><div class="translation">${esc(item.translation)}</div>`:'<p class="tiny muted">想不起来也没关系，翻面再认识一次。</p>'}</article><div class="session-controls">${s.revealed?[['again','还不熟悉','10 分钟后','again'],['good','记住了',nextInterval(item,'good'),'good'],['easy','很轻松',nextInterval(item,'easy'),'soft']].map(([grade,label,when,style])=>btn(`${label}<small>${when}</small>`,'grade',`data-value="${grade}"`,style)).join(''):btn('翻面，看看答案','flip','','primary')}</div><p class="info-note" style="text-align:center">只有到期 / 新词会进入这一组；离开页面也会保留已完成的复习记录。</p></div>`;
    return `<div class="session">${progress}<article class="quiz-card card"><div class="quiz-topic">${esc(item.topic)}</div><div class="sentence" lang="es">${esc(item.sentence)}</div><p class="hint">${esc(item.hint)}</p><form id="quiz-form"><input id="quiz-answer" name="answer" aria-label="填写西语答案" lang="es" autocomplete="off" autocapitalize="off" spellcheck="false" required maxlength="100" value="${esc(s.answer)}" ${s.answered?'disabled':''}><div class="accent-keys" aria-label="西语特殊字符">${['á','é','í','ó','ú','ü','ñ'].map(x=>`<button type="button" data-action="accent" data-value="${x}" ${s.answered?'disabled':''}>${x}</button>`).join('')}</div>${s.answered?btn('下一题 '+icon('arrow'),'next-question','','primary'):'<button class="btn primary" type="submit">检查答案</button>'}</form>${s.answered?`<div class="feedback ${s.lastCorrect?'':'wrong'}" role="status"><strong>${s.lastCorrect?'答对了 ✓':`正确答案：${esc(item.answer)}`}</strong>${esc(item.explanation)}</div>`:''}</article></div>`;
  }
  const nextInterval=(w,grade)=>C.schedule(state.reviews[w.id],grade).interval+' 天后';
  function renderSettings() {
    return pageTitle('A TU MANERA','设置与数据','让学习适合你，也让积累有一份备份。')+`<div class="settings-grid"><section class="settings-card card"><h2>听你习惯的西语</h2><p>${CLOUD?'内置内容使用随网站提供的 Mónica 西班牙西语（es-ES）音频。新加内容、其他口音使用此设备已安装的相应西语声音。':'默认使用西班牙西语（es-ES）。本机优先采用 Mónica 西语音色生成音频，所有朗读都明确指定西语声音。'}</p><div id="speech-config-status" class="speech-config-status" role="status">正在检测西语声音…</div><form id="settings-form"><div class="form-grid"><label class="field">发音偏好<select name="accent"><option value="es-ES" ${state.settings.accent==='es-ES'?'selected':''}>西班牙 · es-ES</option><option value="es-MX" ${state.settings.accent==='es-MX'?'selected':''}>墨西哥 · es-MX</option></select></label><label class="field">朗读速度<select name="rate">${[[0.7,'慢速 · 0.7×'],[0.85,'适中 · 0.85×'],[1,'正常 · 1×']].map(([v,t])=>`<option value="${v}" ${v===state.settings.rate?'selected':''}>${t}</option>`).join('')}</select></label></div><div class="form-actions"><button class="btn primary" type="submit">保存偏好</button>${btn(icon('sound')+' 试听','speak','data-text="Hola. Aprendo español poco a poco."')}${btn('重新检测声音','retry-speech')}</div></form></section><section class="settings-card card"><h2>把积累好好保存</h2><p>词库、文章、笔记和复习记录保存在当前设备的浏览器中。手机与电脑暂不自动同步，可导出 JSON 备份后在另一设备恢复。清除网站数据前请先备份。</p>${btn(icon('download')+' 导出完整备份','export-backup')}${btn(icon('upload')+' 恢复备份','restore-backup')}<p class="info-note">当前：${state.words.length} 个词 · ${state.articles.length} 篇文章 · ${state.notes.length} 条笔记。恢复前可预览条目数，恢复会替换当前全部数据。</p></section><section class="settings-card card"><h2>把喜欢的内容带进来</h2><p>词汇支持 CSV；文章支持粘贴正文或导入 TXT / Markdown。网页链接可以保存为来源，当前版本不自动抓取网页、识别图片或解析 PDF。</p>${btn('导入 CSV 词汇','import-csv')}${btn('添加文章','add-article')}${btn('下载词汇 CSV 示例','sample-csv')}<p class="info-note">新词支持手动释义；当前版本没有接入在线词典或 AI 翻译。</p></section><section class="settings-card card"><h2>设计灵感与学习资源</h2><p>这个个人版本借鉴内容驱动的学习流程，独立编写。示例短文为原创，内置知识点可结合权威教材核对学习。</p><div class="reference-list"><a href="https://github.com/ZuodaoTech/everyone-can-use-english" target="_blank" rel="noopener noreferrer">Enjoy / 人人都能用英语<span>项目与学习理念 ↗</span></a><a href="https://readlang.com/" target="_blank" rel="noopener noreferrer">Readlang<span>阅读取词与闪卡 ↗</span></a><a href="https://www.lingq.com/en/learn-spanish-online/" target="_blank" rel="noopener noreferrer">LingQ<span>内容导入与语境学习 ↗</span></a><a href="https://spanish.kwiziq.com/" target="_blank" rel="noopener noreferrer">Kwiziq Spanish<span>语法与薄弱项练习 ↗</span></a><a href="https://www.spanishdict.com/guide/spanish-present-tense-forms" target="_blank" rel="noopener noreferrer">SpanishDictionary.com<span>现在时变位参考 ↗</span></a></div></section></div>`;
  }
  function openModal(title,body) { $('#modal').innerHTML=`<div class="modal-header"><h2 id="modal-title">${title}</h2><button class="icon-btn" data-action="close-modal" aria-label="关闭">${icon('close')}</button></div>${body}`; if(!$('#modal').open)$('#modal').showModal(); }
  function wordForm(id) {
    const w=state.words.find(x=>x.id===id)||{};
    openModal(id?'编辑单词':'收集一个新单词',`<form id="word-form" data-id="${id||''}"><div class="form-grid"><label class="field">西语单词 / 短语<input name="word" lang="es" required maxlength="100" placeholder="如：la ventana" value="${esc(w.word)}"></label><label class="field">中文释义<input name="meaning" required maxlength="300" placeholder="如：窗户" value="${esc(w.meaning)}"></label><label class="field">分类<input name="category" list="category-options" required maxlength="40" value="${esc(w.category||'我的生词')}"><datalist id="category-options">${catOptions()}</datalist></label><label class="field">等级<select name="level">${['A1','A2','B1','B2','C1','C2'].map(x=>`<option ${x===(w.level||'A1')?'selected':''}>${x}</option>`).join('')}</select></label><label class="field full">词性 / 阴阳性<input name="pos" maxlength="40" placeholder="如：阴性名词；动词；固定搭配" value="${esc(w.pos)}"></label><label class="field full">西语例句<textarea name="example" lang="es" maxlength="2000" placeholder="Me siento junto a la ventana.">${esc(w.example)}</textarea></label><label class="field full">例句中文<input name="translation" maxlength="2000" value="${esc(w.translation)}"></label></div><div class="form-error" role="alert"></div><div class="form-actions">${btn('取消','close-modal')}<button class="btn primary" type="submit">保存单词</button></div></form>`);
  }
  function wordDetail(id) {
    const w=state.words.find(x=>x.id===id);if(!w)return;
    openModal('单词小档案',`<div class="word-detail"><h2 lang="es">${esc(w.word)}</h2><span class="tag level">${esc(w.level)}</span> <span class="tag">${esc(w.pos||w.category)}</span><div class="detail-meaning">${esc(w.meaning)}</div>${w.example?`<blockquote lang="es">${esc(w.example)}<small lang="zh-CN">${esc(w.translation)}</small></blockquote>`:''}<p class="source-line">${esc(w.category)} · ${statusLabel(w)}${w.source?` · 来自《${esc(w.source)}》`:''}</p><div class="detail-buttons">${btn(icon('sound')+' 听发音','speak',`data-text="${esc(w.word)}"`,'primary')}${btn(icon('edit')+' 编辑词条','edit-word',`data-id="${id}"`)}</div></div>`);
  }
  function articleForm(id) {
    const a=state.articles.find(x=>x.id===id)||{};
    openModal(id?'编辑文章':'带进一篇喜欢的文章',`<p class="modal-description">粘贴西语正文，或导入 TXT / Markdown（按纯文本展示）。你可以自己指定难度，稍后随时修改。</p><form id="article-form" data-id="${id||''}"><label class="file-drop">导入本地文本<input type="file" id="article-file" accept=".txt,.md,text/plain,text/markdown"></label><div class="form-grid"><label class="field full">标题<input name="title" required maxlength="200" value="${esc(a.title)}" placeholder="文章的西语标题"></label><label class="field">难度<select name="level">${['A1','A2','B1','B2','C1','C2'].map(x=>`<option ${x===(a.level||'A1')?'selected':''}>${x}</option>`).join('')}</select></label><label class="field">主题<input name="category" required maxlength="40" value="${esc(a.category||'我的文章')}"></label><label class="field full">来源链接（可选）<input name="source" type="url" placeholder="https://…（只保存链接，不自动抓取正文）" value="${esc(a.source)}"></label><label class="field full">西语正文<textarea name="text" lang="es" required maxlength="100000" style="min-height:160px" placeholder="在这里粘贴正文…">${esc(a.text)}</textarea></label><label class="field full">中文译文（可选）<textarea name="translation" maxlength="100000">${esc(a.translation)}</textarea></label></div><div class="form-error" role="alert"></div><div class="form-actions">${btn('取消','close-modal')}<button class="btn primary" type="submit">保存文章</button></div></form>`);
  }
  function noteForm(id) {
    const n=state.notes.find(x=>x.id===id)||{};
    openModal(id?'编辑语法笔记':'留下一条语法发现',`<form id="note-form" data-id="${id||''}"><div class="form-grid"><label class="field full">标题<input name="title" required maxlength="150" placeholder="如：tener 用来表达年龄" value="${esc(n.title)}"></label><label class="field full">分类<input name="category" required maxlength="40" value="${esc(n.category||'语法笔记')}" placeholder="语法笔记 / 动词变位 / 固定搭配"></label><label class="field full">内容与例句<textarea name="body" required maxlength="10000" style="min-height:180px" placeholder="规则、例句、容易混淆的地方，都可以写下来。">${esc(n.body)}</textarea></label></div><div class="form-error" role="alert"></div><div class="form-actions">${btn('取消','close-modal')}<button class="btn primary" type="submit">保存笔记</button></div></form>`);
  }
  function importCSV() {
    pendingImport=null;
    openModal('导入一组词汇',`<p class="modal-description">CSV 使用 UTF-8 编码。必需列：word、meaning；可选列：category、example、level。相同词形会自动跳过；冠词属于词形的一部分，例如 café 和 el café 视作不同词条。</p>${btn(icon('download')+' 下载示例文件','sample-csv')}<label class="file-drop">选择 CSV 文件（最多 2 MB）<input type="file" id="csv-file" accept=".csv,text/csv"></label><div id="import-preview" role="status"></div><div class="form-error" id="import-error" role="alert"></div><div class="form-actions">${btn('取消','close-modal')}${btn('确认导入','confirm-csv','disabled','primary')}</div>`);
  }
  function restoreBackup() {
    pendingImport=null;
    openModal('从备份恢复',`<p class="modal-description">选择此前导出的 Claro JSON 备份。读取后先查看条目数，再决定是否替换当前数据。</p><label class="file-drop">选择 JSON 备份（最多 10 MB）<input type="file" id="backup-file" accept=".json,application/json"></label><div id="import-preview" role="status"></div><div class="form-error" id="import-error" role="alert"></div><div class="form-actions">${btn('取消','close-modal')}${btn('替换当前数据','confirm-restore','disabled','primary')}</div>`);
  }
  function download(filename,text,type) { const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000); }
  function speak(text) { speech.speak(text); }
  function updateSpeechPlayer(info) {
    const panel=$('#speech-player');panel.hidden=info.state==='stopped';panel.dataset.state=info.state;
    if(panel.hidden)return;
    $('#speech-title').textContent=info.text.length>65?info.text.slice(0,65)+'…':info.text;
    const progress={loading:'准备播放',playing:'正在朗读',done:'播放完毕',error:'播放提示'}[info.state];
    $('#speech-voice').textContent=info.message||[info.label,info.voice,info.lang,progress].filter(Boolean).join(' · ');
    const audio=$('#speech-audio');audio.hidden=!['native','static'].includes(info.backend);
    audio.dataset.speechLang=info.lang;audio.dataset.speechVoice=info.voice;audio.dataset.speechBackend=info.backend;
  }
  function refreshSpeechConfig() {
    const el=$('#speech-config-status');if(!el)return;
    const info=speech.describe();
    el.textContent=!info.checked?'正在检测西语声音…':info.voice?`当前音色：${info.voice.name}（${info.voice.lang}） · ${{native:'本机西语音频',static:'网站预置西语音频',browser:'设备西语声音'}[info.backend]}`:`未找到 ${info.accent} 西语声音。${CLOUD?'请在手机或电脑系统中添加西语声音。':'请通过“启动网页.command”运行。'}不会使用英语声音。`;
  }
  function finishRead(id) {
    if(!state.reading[id]){state.reading[id]=true;state.events.push({type:'read',time:Date.now()});persist('已记下这次阅读，继续保持好奇。');render();}else toast('这篇文章已经记入阅读记录。');
  }
  function chooseText(text,context) {
    const cleaned=text.trim().replace(/^[¡¿“”".,!?;:—\s]+|[“”".,!?;:—\s]+$/g,'');
    if(!cleaned||cleaned.length>100)return;
    selected={text:cleaned,context:C.clean(context,2000)};
    const a=state.articles.find(x=>x.id===location.hash.split('/')[1]);if(a&&$('#reader-side'))$('#reader-side').innerHTML=selectionPanel(a);
  }
  function captureSelection() {
    const sel=window.getSelection(), content=$('#reader-content');
    if(!sel||sel.isCollapsed||!content||!sel.rangeCount)return;
    const range=sel.getRangeAt(0);if(!content.contains(range.startContainer)||!content.contains(range.endContainer))return;
    const el=sel.anchorNode?.parentElement;chooseText(sel.toString(),el?.closest('p')?.textContent||sel.toString());
  }
  const actions = {
    route:b=>go(b.dataset.page),read:b=>go('reader/'+b.dataset.id),
    speak:b=>speak(b.dataset.text), 'speak-article':b=>{const a=state.articles.find(x=>x.id===b.dataset.id);if(a)speak(a.text);}, 'stop-speech':()=>speech.stop(),
    'retry-speech':()=>speech.refresh().then(()=>{refreshSpeechConfig();toast('西语声音已重新检测。');}),
    'add-word':()=>wordForm(), 'edit-word':b=>wordForm(b.dataset.id), 'word-detail':b=>wordDetail(b.dataset.id),
    'add-article':()=>articleForm(), 'edit-article':b=>articleForm(b.dataset.id), 'add-note':()=>noteForm(), 'edit-note':b=>noteForm(b.dataset.id),
    'close-modal':()=>$('#modal').close(), category:b=>{filters.category=b.dataset.value;render();},
    'article-level':b=>{filters.articleLevel=b.dataset.value;render();},verb:b=>{filters.verb=b.dataset.value;render();},
    star:b=>{const w=state.words.find(w=>w.id===b.dataset.id);if(w){w.starred=!w.starred;persist();$('#word-results').innerHTML=wordResults();}},
    translation:()=>{$('#reader-translation').hidden=!$('#reader-translation').hidden;},'finish-read':b=>finishRead(b.dataset.id),
    'start-cards':()=>startSession('cards'),'start-quiz':()=>startSession('quiz'),'start-conj':()=>startSession('conj'),
    flip:()=>{if(session){session.revealed=true;render();}},
    grade:b=>{if(!session||session.mode!=='cards'||!session.revealed||session.index>=session.items.length)return;const w=session.items[session.index];state.reviews[w.id]=C.schedule(state.reviews[w.id],b.dataset.value);state.events.push({type:'review',time:Date.now()});persist();session.index++;session.revealed=false;render();},
    'next-question':()=>{if(session?.answered){session.index++;session.answered=false;session.answer='';render();$('#quiz-answer')?.focus();}},
    accent:b=>{const input=$('#quiz-answer');if(input&&!input.disabled){input.focus();input.setRangeText(b.dataset.value,input.selectionStart,input.selectionEnd,'end');}},
    'import-csv':importCSV,'restore-backup':restoreBackup,
    'sample-csv':()=>download('claro-词汇导入示例.csv','\uFEFFword,meaning,category,example,level\r\nla ventana,窗户,城市与出行,Me siento junto a la ventana.,A1\r\nel cuaderno,笔记本,我的生词,Escribo en mi cuaderno.,A1\r\n','text/csv;charset=utf-8'),
    'export-backup':()=>download('claro-backup-'+todayKey()+'.json',JSON.stringify(state,null,2),'application/json'),
    'confirm-csv':()=>{if(pendingImport?.added){state.words.push(...pendingImport.added);const n=pendingImport.added.length;persist(`已导入 ${n} 个单词`);pendingImport=null;$('#modal').close();go('words');}},
    'confirm-restore':()=>{if(pendingImport?.version===1){download('claro-before-restore-'+Date.now()+'.json',JSON.stringify(state,null,2),'application/json');state=pendingImport;pendingImport=null;filters.category='全部词汇';persist('已恢复备份；替换前的数据也已导出备份。');$('#modal').close();go('home');}}
  };
  document.addEventListener('click',e=>{
    const target=e.target.closest('[data-action]');
    if(target&&!target.disabled){const action=actions[target.dataset.action];if(action)action(target);return;}
    const token=e.target.closest('[data-token]');if(token&&window.getSelection()?.isCollapsed)chooseText(token.dataset.token,token.closest('p').textContent);
  });
  document.addEventListener('pointerup',e=>{if(e.target.closest('#reader-content'))captureSelection();});
  document.addEventListener('keydown',e=>{const token=e.target.closest('[data-token]');if(token&&(e.key==='Enter'||e.key===' ')){e.preventDefault();chooseText(token.dataset.token,token.closest('p').textContent);}});
  document.addEventListener('keyup',e=>{if(e.target.closest('#reader-content'))captureSelection();});
  document.addEventListener('input',e=>{
    if(e.target.id==='word-search'){filters.wordQuery=e.target.value;$('#word-results').innerHTML=wordResults();}
    if(e.target.id==='article-search'){filters.articleQuery=e.target.value;$('#article-results').innerHTML=articleResults();}
  });
  document.addEventListener('change',async e=>{
    const t=e.target;
    if(t.id==='word-status'){filters.wordStatus=t.value;$('#word-results').innerHTML=wordResults();return;}
    if(!['csv-file','article-file','backup-file'].includes(t.id))return;
    const file=t.files[0];if(!file)return;
    try{
      if(file.size>(t.id==='backup-file'?10:2)*1024*1024)throw new Error('文件过大，请选择较小的文件。');
      const content=await file.text();
      if(t.id==='article-file') {const form=$('#article-form');form.elements.text.value=content; if(!form.elements.title.value)form.elements.title.value=file.name.replace(/\.(txt|md)$/i,'');}
      if(t.id==='csv-file') {pendingImport=C.csvWords(content,state.words,uid);$('#import-preview').innerHTML=`<div class="restore-summary">将新增 ${pendingImport.added.length} 个词；跳过 ${pendingImport.skipped} 条重复 / 无效记录。</div>`;$('[data-action="confirm-csv"]').disabled=!pendingImport.added.length;$('#import-error').textContent='';}
      if(t.id==='backup-file') {pendingImport=C.validateState(JSON.parse(content));$('#import-preview').innerHTML=`<div class="restore-summary">备份包含：${pendingImport.words.length} 个词、${pendingImport.articles.length} 篇文章、${pendingImport.notes.length} 条笔记、${pendingImport.events.length} 次学习记录。<br>恢复将替换当前数据；系统会先下载当前数据的备份。</div>`;$('[data-action="confirm-restore"]').disabled=false;$('#import-error').textContent='';}
    }catch(err){pendingImport=null;const form=$('#article-form');const error=$('#import-error')||form?.querySelector('.form-error');if(error)error.textContent=err instanceof SyntaxError?'文件不是有效的 JSON，请选择 Claro 导出的完整备份。':err.message;const confirm=$('[data-action="confirm-csv"]')||$('[data-action="confirm-restore"]');if(confirm)confirm.disabled=true;}
  });
  document.addEventListener('submit',e=>{
    const form=e.target;e.preventDefault();const data=Object.fromEntries(new FormData(form));
    try {
      if(form.id==='word-form'||form.id==='selection-form') {
        const id=form.dataset.id, word=C.clean(data.word,100), meaning=C.clean(data.meaning,300);
        if(!word||!meaning)throw new Error('请填写单词与中文释义。');
        if(state.words.some(w=>C.norm(w.word)===C.norm(word)&&w.id!==id))throw new Error('词库中已有相同词形，可以搜索后编辑原词条。');
        const old=state.words.find(w=>w.id===id);
        const record={...old,id:id||uid(),word,meaning,category:C.clean(data.category,40)||'我的生词',level:data.level||'A1',pos:C.clean(data.pos,40),example:C.clean(form.id==='selection-form'?selected.context:data.example,2000),translation:C.clean(data.translation,2000)};
        if(form.id==='selection-form')record.source=state.articles.find(a=>a.id===location.hash.split('/')[1])?.title||'';
        if(old)Object.assign(old,record);else state.words.unshift(record);
        persist('单词已保存，等待下次复习。');if(form.id==='word-form')$('#modal').close();render();
      }
      if(form.id==='article-form') {
        if(!C.clean(data.title)||!C.clean(data.text))throw new Error('请填写标题与正文。');
        if(data.source&&!C.safeURL(data.source))throw new Error('来源链接需要以 https:// 或 http:// 开头。');
        const old=state.articles.find(a=>a.id===form.dataset.id);
        const a={...old,id:old?.id||uid(),title:C.clean(data.title,200),text:C.clean(data.text,100000),translation:C.clean(data.translation,100000),level:data.level,category:C.clean(data.category,40)||'我的文章',source:C.safeURL(data.source),cover:old?.cover||'book',original:false};
        if(old)Object.assign(old,a);else state.articles.unshift(a);
        persist('文章已保存，可以开始阅读了。');$('#modal').close();go('reader/'+a.id);
      }
      if(form.id==='note-form') {
        if(!C.clean(data.title)||!C.clean(data.body))throw new Error('请填写笔记标题和内容。');
        const old=state.notes.find(n=>n.id===form.dataset.id),n={id:old?.id||uid(),title:C.clean(data.title,150),body:C.clean(data.body,10000),category:C.clean(data.category,40)};
        if(old)Object.assign(old,n);else state.notes.unshift(n);persist('这条发现已经记下。');$('#modal').close();go('grammar');
      }
      if(form.id==='settings-form'){speech.stop();state.settings={accent:data.accent,rate:Number(data.rate)};persist('朗读偏好已保存。');refreshSpeechConfig();}
      if(form.id==='quiz-form'&&session&&!session.answered){const q=session.items[session.index],answer=C.clean(data.answer,100);if(!answer)throw new Error('先试着填写一个答案。');const correct=C.norm(answer)===C.norm(q.answer);session.answer=answer;session.answered=true;session.lastCorrect=correct;if(correct)session.correct++;session.answers.push({q,input:answer,correct});state.events.push({type:'quiz',time:Date.now(),correct});persist();render();}
    }catch(err){const error=form.querySelector('.form-error');if(error)error.textContent=err.message;else toast(err.message);}
  });
  $('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){const r=$('#modal').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#modal').close();}});
  const speech=ClaroSpeech.create({audio:$('#speech-audio'),settings:()=>state.settings,notify:toast,onStatus:updateSpeechPlayer,onVoices:refreshSpeechConfig});
  window.addEventListener('hashchange',()=>{speech.stop();render();window.scrollTo(0,0);$('#main').focus({preventScroll:true});});
  window.addEventListener('pagehide',()=>speech.stop());
  render();
  speech.init();
})();
