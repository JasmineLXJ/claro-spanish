#!/usr/bin/env python3
"""Build the public lesson's fixed Mónica audio, using the same voice as the journal."""
import argparse,hashlib,json,re,shutil,subprocess,tempfile,unicodedata
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def key(text):return re.sub(r'\s+',' ',unicodedata.normalize('NFC',text).strip()).lower()
def main():
 p=argparse.ArgumentParser();p.add_argument('--node',default=shutil.which('node'));args=p.parse_args()
 if not args.node:raise SystemExit('Provide --node /path/to/node')
 voices=subprocess.run(['/usr/bin/say','-v','?'],capture_output=True,text=True,check=True).stdout
 if not re.search(r'^Mónica\s+es[_-]ES\s',voices,re.M):raise SystemExit('Mónica (es-ES) must be installed; no other voice will be substituted.')
 js="const D=require('./topic-data.js');console.log(JSON.stringify([...D.scenes.flatMap(s=>s.lines.filter(l=>!l.stage).map(l=>l.es)),...D.questions.map(q=>q.display)]));"
 texts=json.loads(subprocess.run([args.node,'-e',js],cwd=ROOT,capture_output=True,text=True,check=True).stdout)
 unique={key(t):t for t in texts};out=ROOT/'audio';out.mkdir(exist_ok=True)
 prior=ROOT.parent/'audio'/'manifest.json';cached={}
 if prior.is_file():cached=json.loads(prior.read_text()).get('entries',{}).get('es-ES',{})
 entries={};generated=reused=0
 for i,(k,text) in enumerate(unique.items(),1):
  name=hashlib.sha256(('es-ES|'+k).encode()).hexdigest()[:24]+'.m4a';target=out/name
  if not target.is_file():
   old=ROOT.parent/cached[k] if k in cached else None
   if old and old.is_file():shutil.copy2(old,target);reused+=1
   else:
    with tempfile.TemporaryDirectory(prefix='claro-lesson-audio-') as tmp:
     aiff=Path(tmp)/'voice.aiff';encoded=Path(tmp)/'voice.m4a'
     subprocess.run(['/usr/bin/say','-v','Mónica','-r','149','-o',str(aiff)],input=text,text=True,capture_output=True,check=True,timeout=45)
     subprocess.run(['/usr/bin/afconvert','-f','m4af','-d','aac','-b','48000',str(aiff),str(encoded)],capture_output=True,check=True,timeout=30)
     assert encoded.stat().st_size>500;encoded.replace(target);generated+=1
  entries[k]='audio/'+name
  if i%10==0 or i==len(unique):print(f'Audio {i}/{len(unique)}',flush=True)
 data={'voice':'Mónica','lang':'es-ES','baseRate':.85,'entries':entries}
 header="(function(root,data){if(typeof module==='object')module.exports=data;else root.ClaroAudio=data;})(typeof globalThis!=='undefined'?globalThis:this,"
 (ROOT/'topic-audio.js').write_text(header+json.dumps(data,ensure_ascii=False,separators=(',',':'))+');\n')
 print(json.dumps({'clips':len(entries),'generated':generated,'reused':reused,'bytes':sum(f.stat().st_size for f in out.glob('*.m4a'))}),flush=True)
if __name__=='__main__':main()
