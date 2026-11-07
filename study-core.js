/* Search, subtitles and lesson validation; usable without a browser. */
(function(root){
  'use strict';
  const clean=(v,n=1000)=>String(v??'').trim().slice(0,n);
  const fold=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
  const ident=v=>typeof v==='string'&&/^[a-zA-Z0-9_-]{1,100}$/.test(v)&&!['__proto__','constructor','prototype'].includes(v);
  function youtubeId(value){
    try {const u=new URL(value);if(!['https:','http:'].includes(u.protocol))return '';const host=u.hostname.toLowerCase();let id='';if(['youtu.be','www.youtu.be'].includes(host))id=u.pathname.split('/')[1];else if(['youtube.com','www.youtube.com','m.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(host))id=u.pathname==='/watch'?u.searchParams.get('v'):u.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1];return /^[\w-]{11}$/.test(id||'')?id:'';}catch{return '';}
  }
  function timestamp(value){const p=value.trim().replace(',','.').split(':').map(Number);if(p.length<2||p.length>3||p.some(x=>!Number.isFinite(x)||x<0)||p.at(-1)>=60||p.at(-2)>=60)throw new Error('字幕时间格式不正确。');return p.reduce((n,x)=>n*60+x,0);}
  function strip(v){return clean(v,4000).replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\{\\[^}]*\}/g,'').trim();}
  function validateCues(rows){
    if(!Array.isArray(rows)||!rows.length||rows.length>3000)throw new Error('需要 1–3000 条带时间的字幕。');
    const ids=new Set();let previous=-1;
    return rows.map((x,i)=>{const start=Number(x.start),end=Number(x.end),text=clean(x.text,4000),id=x.id||'c'+i;
      if(!ident(id)||ids.has(id)||!Number.isFinite(start)||!Number.isFinite(end)||start<0||end<=start||end>21600||start<previous||!text)throw new Error('字幕需要按时间排序，每句结束时间应晚于开始时间，编号不能重复。');
      ids.add(id);previous=start;return {id,start,end,text,translation:clean(x.translation,4000),explanation:clean(x.explanation,8000),grammarIds:[...new Set((Array.isArray(x.grammarIds)?x.grammarIds:[]).filter(ident))].slice(0,30)};
    });
  }
  function parseSubtitles(raw){
    const text=String(raw).replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n').trim();
    if(!text)throw new Error('请粘贴字幕，或选择 SRT / VTT / JSON 文件。');
    if(text.startsWith('{')||text.startsWith('[')){
      let data;try{data=JSON.parse(text);}catch{throw new Error('字幕 JSON 格式不正确。');}
      if(Array.isArray(data.events)){const cues=data.events.filter(x=>x.segs?.length&&Number.isFinite(x.tStartMs)).map((x,i)=>({id:'c'+i,start:x.tStartMs/1000,end:(x.tStartMs+(x.dDurationMs||3000))/1000,text:strip(x.segs.map(s=>s.utf8||'').join(''))})).filter(x=>x.text);return validateCues(cues);}
      return validateCues(Array.isArray(data)?data:data.cues);
    }
    const cues=[];
    for(const block of text.split(/\n\s*\n/)){
      const lines=block.split('\n'),index=lines.findIndex(l=>l.includes('-->'));
      if(index<0)continue;
      const match=lines[index].match(/([\d:. ,]+?)\s*-->\s*([\d:.,]+)/);
      if(!match)throw new Error('未能读取字幕时间。请使用标准 SRT 或 VTT。');
      const body=lines.slice(index+1).map(strip).filter(Boolean),es=body.filter(s=>!/[\u3400-\u9fff]/u.test(s)),zh=body.filter(s=>/[\u3400-\u9fff]/u.test(s));
      if(body.length)cues.push({id:'c'+cues.length,start:timestamp(match[1]),end:timestamp(match[2]),text:(es.length?es:body).join(' '),translation:es.length?zh.join(' '):''});
    }
    return validateCues(cues);
  }
  function validateLessons(rows=[]){
    if(!Array.isArray(rows)||rows.length>100)throw new Error('听说素材最多保存 100 份。');
    const ids=new Set();return rows.map(x=>{if(!ident(x?.id)||ids.has(x.id)||!clean(x.title))throw new Error('听说素材的编号或标题无效。');ids.add(x.id);const source=youtubeId(x.source)?'https://www.youtube.com/watch?v='+youtubeId(x.source):'';return {id:x.id,title:clean(x.title,200),level:/^[ABC][12]$/.test(x.level)?x.level:'A1',source,youtubeId:youtubeId(source),audioKey:ident(x.audioKey)?x.audioKey:'',audioUrl:x.audioUrl==='media/a1-manana.m4a'?x.audioUrl:'',original:!!x.original,cues:validateCues(x.cues)};});
  }
  function validateProgress(value,lessons){
    return Object.fromEntries(lessons.filter(l=>value?.[l.id]).map(l=>{const v=value[l.id],ids=new Set(l.cues.map(c=>c.id));return [l.id,{index:Math.max(0,Math.min(l.cues.length-1,Math.floor(Number(v.index)||0))),completed:[...new Set((Array.isArray(v.completed)?v.completed:[]).filter(id=>ids.has(id)))],attempts:Math.max(0,Math.min(100000,Number(v.attempts)||0))}];}));
  }
  const dictationNorm=v=>String(v).normalize('NFC').toLocaleLowerCase('es').replace(/[^\p{L}\p{M}\p{N}\s]/gu,'').replace(/\s+/g,' ').trim();
  function compareDictation(answer,expected){
    const a=dictationNorm(answer).split(' ').filter(Boolean),b=dictationNorm(expected).split(' ').filter(Boolean),dp=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
    for(let i=0;i<=a.length;i++)dp[i][0]=i;for(let j=0;j<=b.length;j++)dp[0][j]=j;
    for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
    return {correct:dictationNorm(answer)===dictationNorm(expected),score:Math.round(Math.max(0,1-dp[a.length][b.length]/Math.max(b.length,1))*100),expected:b.map(word=>({word,present:a.includes(word)}))};
  }
  function suggestions(text){
    return [[/\b(?:soy|eres|somos|estoy|estás|está|están)\b/u,'g2'],[/\bhay\b/u,'g4'],[/\b(?:gusta|gustan)\b/u,'g5'],[/\b(?:me llamo|te llamas|se llama)\b/u,'g7'],[/\b(?:voy|vas|va|vamos|vais|van) a\b/u,'g8'],[/\b(?:tengo|tienes|tiene|tenemos|tenéis|tienen)\b/u,'g9']].filter(([p])=>p.test(text.toLocaleLowerCase('es'))).map(([,id])=>id);
  }
  function search(query,data){
    const terms=fold(query).split(' ').filter(Boolean);if(!terms.length)return [];
    const rows=[...data.words.map(w=>({kind:'words',id:w.id,title:w.word,body:[w.meaning,w.category,w.example,w.translation].join(' ')})),...data.articles.map(a=>({kind:'reading',id:a.id,title:a.title,body:[a.subtitle,a.category,a.text,a.translation].join(' ')})),...data.grammar.map(g=>({kind:'grammar',id:g.id,title:g.title,body:[g.es,g.summary,g.body,...g.examples.flat()].join(' ')})),...data.notes.map(n=>({kind:'notes',id:n.id,title:n.title,body:[n.category,n.body].join(' ')})),...Object.entries(data.verbs).map(([id,v])=>({kind:'verbs',id,title:id,body:[v.meaning,v.type,...v.forms].join(' ')})),...data.lessons.flatMap(l=>l.cues.map(c=>({kind:'listening',id:l.id,cueId:c.id,title:l.title,body:[c.text,c.translation,c.explanation].join(' ')})))];
    return rows.filter(r=>terms.every(t=>fold(r.title+' '+r.body).includes(t))).map(r=>({...r,score:terms.reduce((s,t)=>s+(fold(r.title)===t?20:fold(r.title).includes(t)?8:1),0)})).sort((a,b)=>b.score-a.score);
  }
  const api={fold,youtubeId,parseSubtitles,validateCues,validateLessons,validateProgress,compareDictation,suggestions,search};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroStudy=api;
})(typeof window!=='undefined'?window:globalThis);
