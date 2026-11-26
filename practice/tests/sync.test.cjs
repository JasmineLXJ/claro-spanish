const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
const D=require('../topic-data.js'),C=require('../topic-core.js'),R=require('../topic-reading.js');
function tab(){
 const listeners={},pending=[],initial={quiz:C.fresh(D.questions.map(q=>q.id)),openSections:['dialogue'],rate:.9},nodes={};let renders=0,writes=0,details=[];
 const node=()=>({hidden:true,textContent:'',addEventListener(){},focus(){}});
 const main=node();Object.defineProperty(main,'innerHTML',{set(html){renders++;details=[...html.matchAll(/<details\b([^>]+)>/g)].map(m=>{const el={id:m[1].match(/id="([^"]+)"/)[1],open:/\sopen(?:\s|$)/.test(m[1])};el.addEventListener=(type,fn)=>{if(type==='toggle'&&el.open)pending.push(fn);};return el;});}});
 main.querySelectorAll=sel=>sel==='details'?details:[];
 nodes.content=main;for(const id of ['save-warning','announcement','restart-dialog'])nodes[id]=node();
 const window={ClaroTopic:D,ClaroLessonCore:C,ClaroReading:R,addEventListener:(name,fn)=>listeners[name]=fn,scrollTo(){}};
 const context={window,document:{getElementById:id=>nodes[id]||null,querySelector:()=>node(),title:''},location:{hash:'#learn'},localStorage:{getItem:()=>JSON.stringify(initial),setItem(){writes++;}},setTimeout:()=>0,clearTimeout(){},console};
 vm.runInNewContext(fs.readFileSync(require.resolve('../topic-app.js'),'utf8'),context);
 return {get renders(){return renders;},get writes(){return writes;},flush(){while(pending.length)pending.shift()();},receive(data){listeners.storage({key:'claro-barcelona-lesson-v2',newValue:JSON.stringify(data)});},initial};
}
test('首次渲染展开栏目时不回写记录，避免跨标签页反馈循环',()=>{const t=tab();t.flush();assert.equal(t.writes,0);});
test('忽略其他标签页仅修改声音或展开栏目的记录，不重绘当前页面',()=>{const t=tab();t.flush();const n=t.renders;t.receive({...t.initial,voiceURI:'old-version-voice',openSections:['dialogue','grammar']});assert.equal(t.renders,n);t.flush();assert.equal(t.writes,0);});
test('真实答题进度变化同步一次，接收端不再次写回',()=>{const t=tab();t.flush();const data=JSON.parse(JSON.stringify(t.initial));data.quiz.draft='Buenos';t.receive(data);assert.equal(t.renders,2);t.flush();assert.equal(t.writes,0);t.receive(data);assert.equal(t.renders,2);});
