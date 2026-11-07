(function(root){
  'use strict';
  root.ClaroSentenceMap={create};
  function create(api){
    const A=ClaroAnalysis,L=ClaroLexicon,{esc,btn,icon}=api;
    let full=true,active=-1,cueKey='',selection='';
    function tokens(text){return String(text).split(/([\p{L}\p{M}]+(?:['’][\p{L}]+)?)/u).map((t,i)=>i%2?`<button type="button" class="sentence-token" data-action="collect-listening-word" data-word="${esc(t)}" aria-label="收录词语 ${esc(t)}">${esc(t)}</button>`:esc(t)).join('');}
    function wordLine(text){return `<span class="sentence-token-line" data-collect-text lang="es">${tokens(text)}</span>`;}
    function structure(c){
      const a=A.resolve(c);if(cueKey!==c.id+'|'+c.text){full=true;active=-1;selection='';cueKey=c.id+'|'+c.text;}
      if(!a)return `<section class="insight-section sentence-map" id="sentence-map"><h3>句子怎样搭起来</h3><p class="info-note">这句还没有结构拆解。可用下方的“补充 / 编辑讲解”整理，或在本机版生成分析。</p></section>`;
      const core=new Set(['subject','verb','object','indirect','attribute','nominal','infinitive','other']),visible=a.parts.map((p,i)=>({...p,i})).filter(p=>full||core.has(p.role));
      const current=a.parts[active];
      return `<section class="insight-section sentence-map" id="sentence-map"><div class="map-heading"><h3>句子怎样搭起来</h3><span>${a.fragment?'字幕片段':'结构拆解'}</span></div><div class="map-stage" role="group" aria-label="句子结构展示"><button type="button" data-action="map-core" aria-pressed="${!full}" class="${!full?'active':''}">先看主干</button><button type="button" data-action="map-full" aria-pressed="${full}" class="${full?'active':''}">加上修饰</button></div>${a.implicitSubject?`<div class="implicit-subject"><span>省略 / 承接的主语</span><strong>${esc(a.implicitSubject)}</strong></div>`:''}<div class="sentence-blocks" aria-label="按原文顺序显示句子成分">${visible.map(p=>`<button type="button" class="sentence-block role-${p.role} ${active===p.i?'selected':''}" data-action="map-part" data-index="${p.i}" aria-pressed="${active===p.i}"><strong lang="es">${esc(p.text)}</strong><span>${A.ROLES[p.role]}</span></button>`).join('<span class="block-join" aria-hidden="true">＋</span>')}</div>${!full&&a.parts.some(p=>!core.has(p.role))?'<p class="map-stage-note">暂时收起了连接和修饰成分，语序沿用原句。点击“加上修饰”看完整表达。</p>':''}<div class="map-reading" aria-live="polite"><span>${current?A.ROLES[current.role]+' · '+esc(current.text):'怎么理解这句'}</span><p>${esc(current?.note||a.focus||'点一块，查看它在这句话里的作用。')}</p></div><p class="map-help">颜色表示句中作用，词性在生词卡中查看。句子成分的位置可以变化。</p></section>`;
    }
    function vocab(c){
      const custom=(A.resolve(c)?.vocabulary||[]).map(w=>({...w.lexical,word:w.word,meaning:w.meaning})),words=[...custom,...L.vocabulary(c.text).filter(w=>!custom.some(x=>L.norm(x.word)===L.norm(w.word)))],rich=words.map(w=>`<article class="sentence-vocab-item"><button type="button" class="sentence-vocab-word" data-action="collect-listening-word" data-word="${esc(w.word)}"><strong lang="es">${esc(w.word)}</strong><span>${esc(w.meaning)}</span></button><small>${esc(w.part==='verb'?[L.PARTS[w.part],w.lemma,L.TENSES[w.tense],...w.persons].filter(Boolean).join(' · '):[L.PARTS[w.part],w.part==='noun'?L.GENDERS[w.gender]:'',w.part==='noun'?L.NUMBERS[w.number]:''].filter(Boolean).join(' · '))}</small><button class="vocab-add" type="button" data-action="collect-listening-word" data-word="${esc(w.word)}" aria-label="添加 ${esc(w.word)} 到生词本">＋</button></article>`).join('');
      return `<section class="insight-section sentence-vocabulary"><div class="map-heading"><h3>这句里的词</h3><span>${words.length} 个已整理词</span></div>${rich||'<p class="info-note">点原句中的词，填写释义和分类后收录。</p>'}<p class="map-help">点词卡或 ＋ 可编辑后收录；词义需结合当前语境。</p></section>`;
    }
    function selectionBar(){return `<div class="sentence-collect-bar"><span id="listening-selection-label">点一个词，或拖选一段短语</span>${btn('收进生词本','collect-listening-selection','id="collect-listening-selection" disabled','small')}</div>`;}
    function capture(){
      const sel=window.getSelection();if(!sel||sel.isCollapsed||!sel.rangeCount)return;
      const r=sel.getRangeAt(0),start=r.startContainer.parentElement?.closest('[data-collect-text]'),end=r.endContainer.parentElement?.closest('[data-collect-text]');
      if(!start||start!==end)return;
      const text=sel.toString().trim().replace(/^[¡¿\s]+|[.,;:!?\s]+$/gu,'');if(!text||text.length>100||!/[\p{L}]/u.test(text))return;
      selection=text;const label=document.querySelector('#listening-selection-label'),button=document.querySelector('#collect-listening-selection');if(label)label.textContent='已选：'+text;if(button)button.disabled=false;
    }
    function draft(text){const c=api.current(),lesson=api.lesson();if(!c||!text)return;const hint=A.resolve(c)?.vocabulary.find(w=>L.norm(w.word)===L.norm(text));api.collectWord({text,meaning:hint?.meaning,lexical:hint?.lexical,context:c.text,translation:c.translation,source:lesson.title,lessonId:lesson.id,cueId:c.id,start:c.start,level:lesson.level});}
    function refresh(){const target=document.querySelector('#sentence-map');if(target)target.outerHTML=structure(api.current());}
    function row(part={text:'',role:'other',note:''}){return `<div class="map-edit-row"><label class="field">原文片段<input name="segmentText" maxlength="4000" value="${esc(part.text)}" lang="es"></label><label class="field">句中作用<select name="segmentRole">${Object.entries(A.ROLES).map(([v,t])=>`<option value="${v}" ${v===part.role?'selected':''}>${t}</option>`).join('')}</select></label><label class="field full">这一块怎么理解<textarea name="segmentNote" maxlength="1500">${esc(part.note)}</textarea></label>${btn('移除这一块','map-remove-part','','small')}</div>`;}
    function editor(c){const a=A.resolve(c);return `<details class="map-editor"><summary>编辑句子结构与分块</summary><p class="info-note">按原句顺序拆成几块。所有片段合起来应保留整条字幕，不补写原文里没有的词。</p><label class="field">省略 / 承接的主语<input name="implicitSubject" maxlength="300" value="${esc(a?.implicitSubject||'')}"></label><label class="field">整句理解<textarea name="analysisFocus" maxlength="3000">${esc(a?.focus||'')}</textarea></label><label class="lex-check"><input type="checkbox" name="fragment" ${a?.fragment?'checked':''}>这条是跨字幕片段或独立词块</label><div class="map-edit-rows">${(a?.parts||[{text:c.text,role:'other',note:''}]).map(row).join('')}</div>${btn('再加一块','map-add-part','','small')}</details>`;}
    function readEditor(form,c){const rows=[...form.querySelectorAll('.map-edit-row')].map(el=>({text:el.querySelector('[name=segmentText]').value,role:el.querySelector('[name=segmentRole]').value,note:el.querySelector('[name=segmentNote]').value})).filter(p=>p.text.trim());const value={parts:rows,focus:form.elements.analysisFocus.value,implicitSubject:form.elements.implicitSubject.value,fragment:form.elements.fragment.checked,grammarIds:new FormData(form).getAll('grammarIds')};if(!rows.length||(!A.resolve(c)&&rows.length===1&&rows[0].role==='other'&&!rows[0].note.trim()&&!value.focus.trim()&&!value.implicitSubject.trim()&&!value.fragment))return null;const a=A.validate(value,c.text);if(!a)throw new Error('分块后没有拼回整条原文，请检查是否漏词、重复或改动了标点。');return a;}
    const actions={
      'map-core':()=>{full=false;active=-1;refresh();},'map-full':()=>{full=true;active=-1;refresh();},'map-part':b=>{active=Number(b.dataset.index);refresh();},
      'collect-listening-word':b=>{if(!window.getSelection()?.isCollapsed){capture();return;}draft(b.dataset.word);},'collect-listening-selection':()=>draft(selection),
      'map-add-part':()=>document.querySelector('.map-edit-rows')?.insertAdjacentHTML('beforeend',row()),'map-remove-part':b=>b.closest('.map-edit-row').remove()
    };
    return {wordLine,structure,vocab,selectionBar,capture,actions,editor,readEditor};
  }
})(typeof window!=='undefined'?window:globalThis);
