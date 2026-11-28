const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('../topic-data.js'),A=require('../topic-audio.js');
const key=t=>t.normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('es');
test('全部对话与测试参考句都有固定 Mónica 音频，音频路径可在子目录使用',()=>{
 assert.equal(A.voice,'Mónica');assert.equal(A.lang,'es-ES');assert.equal(A.baseRate,.85);
 for(const text of [...D.scenes.flatMap(s=>s.lines.filter(l=>!l.stage).map(l=>l.es)),...D.questions.map(q=>q.display),...D.verbs.flatMap(v=>[v[0],...v[2].split(' / '),...v[3].split(' / ')])]){
  const ref=A.entries[key(text)];assert.match(ref,/^audio\/[a-f0-9]+\.m4a$/);const bytes=fs.readFileSync(path.join(__dirname,'..',ref));assert.ok(bytes.length>500);assert.equal(bytes.subarray(4,8).toString(),'ftyp');
 }
});
test('应用使用固定音频播放，不依赖浏览器语音引擎',()=>{const source=fs.readFileSync(path.join(__dirname,'../topic-app.js'),'utf8');assert.ok(source.includes('new Audio(source)'));assert.ok(!source.includes('speechSynthesis'));assert.ok(!source.includes('SpeechSynthesisUtterance'));});
