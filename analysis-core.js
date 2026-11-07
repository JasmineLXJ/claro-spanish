/* Validate teacher-authored or generated spans; never infer syntactic roles from word endings. */
(function(root){
  'use strict';
  const ROLES={subject:'主语',verb:'谓语 / 动词',object:'直接宾语',indirect:'间接宾语',attribute:'表语',time:'时间',place:'地点',purpose:'目的 / 用途',companion:'同伴 / 工具',modifier:'修饰 / 补充',connector:'连接',nominal:'名词短语',infinitive:'不定式短语',other:'独立表达'};
  const clean=(v,n)=>typeof v==='string'?v.trim().slice(0,n):'';
  const key=v=>String(v??'').normalize('NFC').trim().toLocaleLowerCase('es').replace(/\s+/g,' ').replace(/[.,;:¡!¿?]+$/gu,'');
  function validate(value,text){
    if(!value||typeof value!=='object'||!Array.isArray(value.parts)||value.parts.length>40||!value.parts.length)return null;
    const parts=value.parts.map(p=>({text:clean(p?.text,4000),role:Object.hasOwn(ROLES,p?.role)?p.role:'other',note:clean(p?.note,1500)}));
    if(parts.some(p=>!p.text)||key(parts.map(p=>p.text).join(' ')).replace(/\s/g,'')!==key(text).replace(/\s/g,''))return null;
    const L=typeof module!=='undefined'&&module.exports?require('./lexicon.js'):root.ClaroLexicon;
    const vocabulary=(Array.isArray(value.vocabulary)?value.vocabulary:[]).slice(0,60).filter(w=>w&&clean(w.word,100)&&clean(w.meaning,300)&&key(text).includes(key(w.word))).map(w=>({word:clean(w.word,100),meaning:clean(w.meaning,300),lexical:L.sanitize(w.lexical)}));
    return {parts,vocabulary,translation:clean(value.translation,4000),implicitSubject:clean(value.implicitSubject,300),focus:clean(value.focus,3000),fragment:!!value.fragment,grammarIds:(Array.isArray(value.grammarIds)?value.grammarIds:[]).filter(x=>/^g\d+$/.test(x)).slice(0,30)};
  }
  function resolve(cue){return validate(cue.analysis,cue.text)||validate(root.ClaroAnalysisData?.[key(cue.text)],cue.text);}
  const api={ROLES,key,validate,resolve};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroAnalysis=api;
})(typeof window!=='undefined'?window:globalThis);
