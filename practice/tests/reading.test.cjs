const test=require('node:test'),assert=require('node:assert/strict');
const D=require('../topic-data.js'),R=require('../topic-reading.js');
const lines=D.scenes.flatMap(s=>s.lines.filter(l=>!l.stage));
test('三语对应在原文中存在、互不覆盖，分段保留全部原文',()=>{
 for(const line of lines){
  assert.ok(R.pairs.has(line.es),line.es);
  const raw=R.pairs.get(line.es);assert.equal(R.groups(line).length,raw.length,line.es);
  for(const [col,lang] of ['es','en','zh'].entries()){
   const lower=line[lang].toLocaleLowerCase(),ranges=raw.map(g=>{assert.equal(g.length,4);assert.ok(R.categories.some(c=>c.id===g[3]));assert.ok(g[col]);const start=lower.indexOf(g[col].toLocaleLowerCase());assert.ok(start>=0,`${line.es} / ${lang} / ${g[col]}`);return [start,start+g[col].length];}).sort((a,b)=>a[0]-b[0]);
   ranges.forEach((r,i)=>{if(i)assert.ok(r[0]>=ranges[i-1][1],`overlap: ${line.es} / ${lang}`);});
   const pieces=R.segments(line,lang);assert.equal(pieces.map(p=>p.text).join(''),line[lang]);assert.equal(pieces.filter(p=>p.group!==null).length,raw.length,line.es);
  }
 }
});
test('问候不把 días 硬对应成 morning；muy bien 按意思片段对应',()=>{
 const morning=lines.find(l=>l.es==='¡Buenos días!');assert.deepEqual(R.groups(morning),[['Buenos','Good','好','adjective']]);assert.ok(R.segments(morning,'es').some(p=>p.group===null&&p.text.includes('días')));
 const well=lines.find(l=>l.es==='Muy bien, gracias.');assert.deepEqual(R.groups(well)[0],['Muy bien','Very well','很好','adverb']);
});
test('聊天合并连续同一说话人，保留场景顺序、每句及刷卡旁白',()=>{
 for(const scene of D.scenes){const turns=R.turns(scene),flat=turns.flatMap(t=>t.stage?[{stage:t.stage}]:t.lines);assert.deepEqual(flat,scene.lines);for(const t of turns)if(!t.stage)assert.ok(t.lines.every(l=>l.speaker===t.speaker));}
});

test('词类图例固定，重复词义在不同句子中使用同一分类',()=>{assert.equal(new Set(R.categories.map(c=>c.id)).size,R.categories.length);for(const line of lines){for(const g of R.groups(line)){if(/^(un )?café( con leche)?$|rollo de canela/i.test(g[0]))assert.equal(g[3],'noun');if(g[0].toLowerCase()==='gracias')assert.equal(g[3],'expression');if(g[0].toLowerCase()==='muy bien')assert.equal(g[3],'adverb');}}});
test('Siéntate 与地点从句分开对应，避免整句一个色块',()=>{const line=lines.find(l=>l.es==='Siéntate donde quieras.');assert.deepEqual(R.groups(line),[['Siéntate','Sit','坐下吧','verb'],['donde quieras','wherever you like','想坐哪里都可以','adverb']]);});
test('语法解析为两到三个短要点，全部动词都有六个人称变位',()=>{for(const [title,example,points] of D.grammar){assert.ok(title&&example);assert.ok(Array.isArray(points));assert.ok(points.length>=2&&points.length<=3);assert.ok(points.every(p=>typeof p==='string'&&p.length<=70));}for(const v of D.verbs){const forms=[...v[2].split(' / '),...v[3].split(' / ')];assert.equal(forms.length,6,v[0]);assert.ok(forms.every(Boolean));assert.ok(v[4]);}});
