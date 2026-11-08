(function(root){
  'use strict';
  root.ClaroTime={create};
  function create(api){
    const D=root.ClaroTimeData,C=root.ClaroCore,{esc,btn,icon,getState,persist,go,render,pageTitle}=api;
    const state=()=>getState(),data=()=>state().courseProgress.time_basics||=(D.validateProgress()),group=id=>D.groups.find(g=>g.id===id);
    const wordRecord=w=>state().words.find(x=>D.norm(x.word)===D.norm(w.word))||w;
    const shuffle=items=>items.map(x=>({x,r:Math.random()})).sort((a,b)=>a.r-b.r).map(v=>v.x);
    function controls(id){return `<div class="time-actions">${btn('记忆闪卡','time-start-cards',`data-group="${id}"`,'primary small')}${btn('做三道题','time-start-quiz',`data-group="${id}"`,'small')}</div>`;}
    function page(parts=[]){
      if(['cards','practice'].includes(parts[0]))return session();
      if(group(parts[0]))return lesson(parts[0]);
      const a=data().active;
      return `<a class="back-btn" href="#words">${icon('back')} 返回我的词库</a>`+pageTitle('LOS NÚMEROS Y EL TIEMPO','数字、星期与月份','从记得一个词，到能说清楚“我在什么时候做什么”。')+
        `${a&&a.index<a.ids.length?`<div class="notice">上次的${a.mode==='cards'?'闪卡':'练习'}还没完成：${esc(group(a.group).title)}，第 ${a.index+1} / ${a.ids.length} ${a.mode==='cards'?'张':'题'}。 <a class="btn small" href="#words/time/${a.mode==='cards'?'cards':'practice'}">继续上次</a></div>`:''}`+
        `<p class="time-intro">建议从星期开始，每次只练一组：看重点 → 遮住答案回忆 → 换词造句。新增词汇已收录到“我的词库”，也能用顶部搜索找到。</p><div class="time-group-grid">${D.groups.map(g=>`<article class="card time-group"><span class="eyebrow">${esc(g.subtitle)}</span><a href="#words/time/${g.id}"><h2>${esc(g.title)}</h2></a><p>${esc(g.tip)}</p><a class="text-btn" href="#words/time/${g.id}">查词与重点 ${icon('arrow')}</a>${controls(g.id)}</article>`).join('')}</div>`+
        dialogue()+rules()+`<p class="info-note">词条、复习时间、首次答题与提示使用记录保存在当前浏览器，可随完整备份导出。闪卡自评和一次答对都不代表已经掌握；隔天再试一次。</p>`;
    }
    function dialogue(){return `<section class="time-section"><div class="section-heading"><h2>把课文放回对话里</h2><span>空格与拼写已整理</span></div><div class="time-dialogues">${D.dialogue.map(([q,zh,a,translation])=>`<article class="card time-dialogue"><div><strong lang="es">${esc(q)}</strong><button class="icon-btn" data-action="speak" data-text="${esc(q)}" aria-label="朗读问句 ${esc(q)}">${icon('sound')}</button></div><p>${esc(zh)}</p><div><strong lang="es">${esc(a)}</strong><button class="icon-btn" data-action="speak" data-text="${esc(a)}" aria-label="朗读回答 ${esc(a)}">${icon('sound')}</button></div><p>${esc(translation)}</p></article>`).join('')}</div></section>`;}
    function rules(){return `<section class="time-section"><div class="section-heading"><h2>语法重点</h2><span>一次看一条</span></div><div class="time-rules">${D.rules.map(([title,body,example])=>`<details class="card"><summary>${esc(title)}</summary><p>${esc(body)}</p><div lang="es">${esc(example)}</div></details>`).join('')}</div></section>`;}
    function lesson(id){
      const g=group(id),rows=D.words.filter(w=>w.group===id),questions=D.exercises.filter(q=>q.group===id),attempts=data().attempts.filter(a=>questions.some(q=>q.id===a.id));
      return `<a class="back-btn" href="#words/time">${icon('back')} 返回数字、星期与月份</a>`+pageTitle('PASO A PASO',esc(g.title),esc(g.tip),controls(id))+
        `<div class="time-lesson-stats"><span>${rows.length} 条词汇与词块</span><span>${questions.length} 道回忆与应用题</span><span>${attempts.length} 次作答记录</span></div>`+
        `<section class="card time-word-list"><h2>先看，再遮住回想</h2>${rows.map(w=>`<div class="time-word-row"><div><strong lang="es">${esc(w.word)}</strong><span>${esc(w.meaning)}</span><small>${esc(w.note)}</small></div><button class="icon-btn" data-action="speak" data-text="${esc(w.word)}" aria-label="朗读 ${esc(w.word)}">${icon('sound')}</button></div>`).join('')}</section>`+
        `<section class="card time-lesson-next"><h2>让它变成你自己的话</h2><p>先试中文提示的闪卡，再做三道短题。错题会优先出现在下一轮；完整句子按参考表达核对。</p>${controls(id)}</section>${id==='phrases'?dialogue()+rules():id.startsWith('n')?`<p class="info-note">这里先练数字的独立读法。放在名词前时，uno 等可能变为 un / una；本组数量应用题使用已核对的例句。</p>`:''}`;
    }
    function start(mode,id,weak=false){
      if(!group(id))return;
      let items;
      if(mode==='cards'){
        items=shuffle(D.words.filter(w=>w.group===id)).sort((a,b)=>(state().reviews[wordRecord(a).id]?.due||0)-(state().reviews[wordRecord(b).id]?.due||0)).slice(0,10);
      }else{
        const latest=new Map(data().attempts.map(a=>[a.id,a]));
        const priority=q=>{const a=latest.get(q.id);return !a?1:!a.correct||a.usedHint||a.revealed?0:2;};
        const all=shuffle(D.exercises.filter(q=>q.group===id)).sort((a,b)=>priority(a)-priority(b));
        const pool=weak?all.filter(q=>priority(q)===0):all;
        items=(pool.length?pool:all).slice(0,3);
        // Keep a contextual application alongside numeric recall whenever this is not a weak-only round.
        if(!weak&&items.length&&!items.some(q=>q.mode==='application')){const context=all.find(q=>q.mode==='application');if(context)items[items.length-1]=context;}
      }
      data().active={mode,group:id,ids:items.map(x=>x.id),index:0,direction:'zh',revealed:false,states:items.map(()=>({input:'',checked:false,correct:false,usedHint:false,revealed:false}))};
      persist();go('words/time/'+(mode==='cards'?'cards':'practice'));
    }
    function session(){
      const a=data().active;if(!a)return `<a class="btn" href="#words/time">选择一组开始学习</a>`;
      const g=group(a.group),done=a.index>=a.ids.length;
      if(done){
        const states=a.states,independent=states.filter(s=>s.correct&&!s.usedHint&&!s.revealed).length;
        return `<div class="session"><section class="result-card card"><div class="eyebrow">POCO A POCO</div><h2>这一小组完成了。</h2><p>${a.mode==='cards'?`完成 ${a.ids.length} 张闪卡，已按自评安排下次复习。`:`${a.ids.length} 道题：独立答对 ${independent} 题；提示后答对 ${states.filter(s=>s.correct&&s.usedHint&&!s.revealed).length} 题；答错或看过答案 ${states.filter(s=>!s.correct||s.revealed).length} 题。`}</p><div class="time-actions">${btn('再练一组',a.mode==='cards'?'time-start-cards':'time-start-quiz',`data-group="${a.group}"`,'primary')}${a.mode==='quiz'?btn('先练薄弱题','time-retry',`data-group="${a.group}"`):''}<a class="btn" href="#words/time/${a.group}">返回本组词表</a></div></section>${a.mode==='quiz'?a.ids.map((id,i)=>{const s=states[i],q=D.exercises.find(x=>x.id===id);return `<article class="card time-answer-review"><span class="tag">${s.revealed?'看过答案':s.correct?(s.usedHint?'提示后答对':'独立答对'):'需要再练'}</span><h3>${esc(q.prompt)}</h3><p>你的首次答案：${esc(s.input||'（未填写）')}</p><strong lang="es">${esc(q.sentence.replace('___',q.answers[0]))}</strong><p>${esc(q.why)}</p></article>`;}).join(''):''}</div>`;
      }
      const heading=`<div class="session-top"><h2>${esc(g.title)} · ${a.mode==='cards'?'记忆闪卡':'短练习'}</h2><span>${a.index+1} / ${a.ids.length}</span><a class="text-btn" href="#words/time/${a.group}">暂时退出</a></div><p class="info-note time-saved">当前进度与草稿自动保存，可刷新续练。</p>`;
      if(a.mode==='cards'){
        const w=D.words.find(x=>x.id===a.ids[a.index]),reverse=a.direction==='zh',review=state().reviews[wordRecord(w).id];
        return `<div class="session time-session">${heading}<div class="time-directions" role="group" aria-label="闪卡方向">${btn('中文 → 西语','time-direction','data-direction="zh"',reverse?'soft small':'small')}${btn('西语 → 中文','time-direction','data-direction="es"',reverse?'small':'soft small')}</div><article class="flashcard card"><span class="tag">${esc(g.title)}</span><div class="eyebrow">${reverse?'先说出西语，再翻面核对':'先回想中文意思，再翻面核对'}</div><div class="flash-word" ${reverse?'':'lang="es"'}>${esc(reverse?w.meaning:w.word)}</div>${a.revealed?`<div class="meaning" ${reverse?'lang="es"':''}>${esc(reverse?w.word:w.meaning)}</div><button class="btn small" data-action="speak" data-text="${esc(w.word)}">${icon('sound')} 听西语发音</button><div class="example" lang="es">${esc(w.example)}</div><div class="translation">${esc(w.translation)}</div><p class="info-note">${esc(w.note)}</p>`:'<p class="tiny muted">可以先说出声，或在纸上写下来。</p>'}</article><div class="session-controls">${a.revealed?[['again','还不熟悉','10 分钟后','again'],['good','记住了',C.schedule(review,'good').interval+' 天后','good'],['easy','很轻松',C.schedule(review,'easy').interval+' 天后','soft']].map(([value,label,when,style])=>btn(`${label}<small>${when}</small>`,'time-grade',`data-value="${value}"`,style)).join(''):btn('翻面，核对答案','time-flip','','primary')}</div><p class="info-note">每组最多 10 张，优先新词与到期词；复习时间与词库共用。中文提示时，答案揭晓后才可播放发音。</p></div>`;
      }
      const q=D.exercises.find(x=>x.id===a.ids[a.index]),s=a.states[a.index],graded=D.grade(s.input,q);
      return `<div class="session time-session">${heading}<article class="quiz-card card"><span class="tag">${q.mode==='recall'?'词语回忆':'放进句子里用'}</span><h3 class="time-prompt">${esc(q.prompt)}</h3>${q.sentence!=='___'?`<div class="sentence" lang="es">${esc(q.sentence)}</div>`:''}<form id="time-answer-form"><label class="field"><span class="sr-only">填写西语答案</span><input id="time-answer" name="answer" lang="es" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="300" required value="${esc(s.input)}" ${s.checked?'disabled':''}></label><div class="accent-keys" aria-label="西语特殊字符">${['á','é','í','ó','ú','ü','ñ','¿'].map(v=>btn(v,'time-accent',`data-value="${v}" ${s.checked?'disabled':''}`)).join('')}</div><div class="time-actions">${s.checked?btn('下一题 '+icon('arrow'),'time-next','','primary'):`<button class="btn primary" type="submit">检查答案</button>${btn('给一点提示','time-hint','','small')}${btn('暂时不会，看答案','time-reveal','','small')}`}</div>${s.usedHint&&!s.checked?`<p class="info-note">提示：${esc(q.hint)}</p>`:''}${s.checked?`<div class="feedback ${s.correct?'':'wrong'}" role="status"><strong>${s.revealed?'这题看过答案，下轮再试一次':s.correct?(s.usedHint?'提示后答对了 ✓':'独立答对了 ✓'):graded.accentOnly?'词形对了，重音需要补上':'这题需要再练一次'}</strong><div lang="es">参考表达：${esc(q.sentence.replace('___',q.answers[0]))}</div><p>${esc(q.why)}</p></div>`:''}<div class="form-error" role="alert"></div></form></article><p class="info-note">重音与 ñ 计入拼写。首次答案与是否使用提示会保留；完整句子接受题库列出的表达，其他同义改写暂未自动识别。</p></div>`;
    }
    function check(input){
      const a=data().active;if(!a||a.mode!=='quiz'||a.index>=a.ids.length)return;const s=a.states[a.index];if(s.checked)return;
      const q=D.exercises.find(x=>x.id===a.ids[a.index]);s.input=input.trim().slice(0,300);s.checked=true;s.correct=D.grade(s.input,q).correct;
      data().attempts.push({id:q.id,input:s.input,correct:s.correct,usedHint:s.usedHint,revealed:s.revealed,time:Date.now()});if(data().attempts.length>3000)data().attempts.shift();
      state().events.push({type:'course',correct:s.correct,time:Date.now()});persist();render();
    }
    function submit(form){if(form.id!=='time-answer-form')return false;check(form.elements.answer.value);return true;}
    function input(t){const a=data().active;if(t.id==='time-answer'&&a?.mode==='quiz'&&a.states[a.index]&&!a.states[a.index].checked){a.states[a.index].input=t.value.slice(0,300);persist();}}
    const actions={
      'time-start-cards':b=>start('cards',b.dataset.group),'time-start-quiz':b=>start('quiz',b.dataset.group),'time-retry':b=>start('quiz',b.dataset.group,true),
      'time-direction':b=>{const a=data().active;if(a?.mode==='cards'){a.direction=b.dataset.direction==='es'?'es':'zh';a.revealed=false;persist();render();}},
      'time-flip':()=>{const a=data().active;if(a?.mode==='cards'&&a.index<a.ids.length){a.revealed=true;persist();render();}},
      'time-grade':b=>{const a=data().active;if(a?.mode!=='cards'||!a.revealed||a.index>=a.ids.length||!['again','good','easy'].includes(b.dataset.value))return;const w=wordRecord(D.words.find(x=>x.id===a.ids[a.index]));state().reviews[w.id]=C.schedule(state().reviews[w.id],b.dataset.value);state().events.push({type:'review',time:Date.now()});a.index++;a.revealed=false;persist();render();},
      'time-hint':()=>{const a=data().active;if(a?.mode==='quiz'&&a.states[a.index]&&!a.states[a.index].checked){a.states[a.index].usedHint=true;persist();render();}},
      'time-reveal':()=>{const a=data().active;if(a?.mode==='quiz'&&a.states[a.index]&&!a.states[a.index].checked){a.states[a.index].revealed=true;check(a.states[a.index].input);}},
      'time-next':()=>{const a=data().active;if(a?.mode==='quiz'&&a.states[a.index]?.checked){a.index++;persist();render();document.getElementById('time-answer')?.focus();}},
      'time-accent':b=>{const el=document.getElementById('time-answer');if(!el||el.disabled)return;el.focus();el.setRangeText(b.dataset.value,el.selectionStart,el.selectionEnd,'end');input(el);}
    };
    return {page,submit,input,actions};
  }
})(window);
