(function(root){
  'use strict';
  const clean=(v,n=4000)=>String(v??'').trim().slice(0,n);
  const id=v=>typeof v==='string'&&/^[a-zA-Z0-9_-]{1,100}$/.test(v)&&!['__proto__','constructor','prototype'].includes(v);
  const url=v=>{try{const u=new URL(v);return ['http:','https:'].includes(u.protocol)?u.href:'';}catch{return '';}};
  function source(value={}){if(!value||typeof value!=='object')value={};return {kind:['sentence','course','general'].includes(value.kind)?value.kind:'general',lessonId:id(value.lessonId)?value.lessonId:'',cueId:id(value.cueId)?value.cueId:'',title:clean(value.title,200),text:clean(value.text,4000),translation:clean(value.translation,4000),explanation:clean(value.explanation,8000),grammarIds:(Array.isArray(value.grammarIds)?value.grammarIds:[]).filter(id).slice(0,30),url:url(value.url),returnURL:url(value.returnURL)};}
  function validate(rows=[]){
    if(!Array.isArray(rows)||rows.length>200)throw new Error('学习问答最多保存 200 个分支。');
    const seen=new Set();let count=0;
    return rows.map(b=>{if(!id(b?.id)||seen.has(b.id)||!Array.isArray(b.messages)||b.messages.length>200)throw new Error('学习问答分支格式不正确。');seen.add(b.id);count+=b.messages.length;if(count>4000)throw new Error('问答记录过多，请分开备份。');const ids=new Set();const messages=b.messages.map(m=>{if(!id(m?.id)||ids.has(m.id)||!['user','assistant'].includes(m.role)||!clean(m.text))throw new Error('问答消息格式不正确。');ids.add(m.id);return {id:m.id,role:m.role,text:clean(m.text,12000),provider:m.provider==='codex'?'codex':'user',time:Number.isFinite(m.time)?m.time:0};});return {id:b.id,parentId:id(b.parentId)?b.parentId:'',title:clean(b.title,100)||'一个西语问题',source:source(b.source),createdAt:Number.isFinite(b.createdAt)?b.createdAt:0,updatedAt:Number.isFinite(b.updatedAt)?b.updatedAt:0,messages};});
  }
  function lessonExport(lesson,format='text'){
    const stamp=n=>{const ms=Math.round(n*1000);return [Math.floor(ms/3600000),Math.floor(ms/60000)%60,Math.floor(ms/1000)%60].map(x=>String(x).padStart(2,'0')).join(':')+','+String(ms%1000).padStart(3,'0');};
    if(format==='json')return JSON.stringify({title:lesson.title,level:lesson.level,source:lesson.source,cues:lesson.cues},null,2);
    if(format==='srt')return lesson.cues.map((c,i)=>`${i+1}\n${stamp(c.start)} --> ${stamp(c.end)}\n${c.text}${c.translation?'\n'+c.translation:''}`).join('\n\n')+'\n';
    return [lesson.title,lesson.source?'来源：'+lesson.source:'',...lesson.cues.map((c,i)=>`\n${i+1}. [${stamp(c.start).slice(0,-4)}]\n${c.text}\n${c.translation||'（尚无译文）'}\n\n为什么这样说：\n${c.explanation||'（尚无讲解）'}${c.analysis?'\n\n句子结构：\n'+c.analysis.parts.map(p=>p.text+' · '+p.role+'：'+p.note).join('\n')+'\n'+c.analysis.focus:''}`)].filter(Boolean).join('\n');
  }
  const api={source,validate,lessonExport};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroQuestionsCore=api;
})(typeof window!=='undefined'?window:globalThis);
