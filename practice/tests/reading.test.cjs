const test=require('node:test'),assert=require('node:assert/strict');
const D=require('../topic-data.js'),R=require('../topic-reading.js');
const lines=D.scenes.flatMap(s=>s.lines.filter(l=>!l.stage));
test('三语对应在原文中存在、互不覆盖，分段保留全部原文',()=>{
 for(const line of lines){
  assert.ok(R.pairs.has(line.es),line.es);
  const raw=R.pairs.get(line.es);assert.equal(R.groups(line).length,raw.length,line.es);
  for(const [col,lang] of ['es','en','zh'].entries()){
   const lower=line[lang].toLocaleLowerCase(),ranges=raw.map(g=>{assert.equal(g.length,3);assert.ok(g[col]);const start=lower.indexOf(g[col].toLocaleLowerCase());assert.ok(start>=0,`${line.es} / ${lang} / ${g[col]}`);return [start,start+g[col].length];}).sort((a,b)=>a[0]-b[0]);
   ranges.forEach((r,i)=>{if(i)assert.ok(r[0]>=ranges[i-1][1],`overlap: ${line.es} / ${lang}`);});
   const pieces=R.segments(line,lang);assert.equal(pieces.map(p=>p.text).join(''),line[lang]);assert.equal(pieces.filter(p=>p.group!==null).length,raw.length,line.es);
  }
 }
});
test('问候不把 días 硬对应成 morning；muy bien 按意思片段对应',()=>{
 const morning=lines.find(l=>l.es==='¡Buenos días!');assert.deepEqual(R.groups(morning),[['Buenos','Good','好']]);assert.ok(R.segments(morning,'es').some(p=>p.group===null&&p.text.includes('días')));
 const well=lines.find(l=>l.es==='Muy bien, gracias.');assert.deepEqual(R.groups(well)[0],['Muy bien','Very well','很好']);
});
test('聊天合并连续同一说话人，保留场景顺序、每句及刷卡旁白',()=>{
 for(const scene of D.scenes){const turns=R.turns(scene),flat=turns.flatMap(t=>t.stage?[{stage:t.stage}]:t.lines);assert.deepEqual(flat,scene.lines);for(const t of turns)if(!t.stage)assert.ok(t.lines.every(l=>l.speaker===t.speaker));}
});
test('固定首选 Mónica，忽略旧选择，不切换到其他地区口音',()=>{
 const mx={name:'Paulina',lang:'es-MX'},es={name:'Other',lang:'es-ES'},monica={name:'Mónica',lang:'es-ES'};
 assert.equal(R.voice([mx,es,monica]),monica);assert.equal(R.voice([mx,es]),es);assert.equal(R.voice([mx,{name:'Samantha',lang:'en-US'}]),null);assert.equal(R.voice([]),null);
});
