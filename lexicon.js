/* A small, explicit study dictionary. Unknown words are left for the learner to classify. */
(function(root){
  'use strict';
  const norm=v=>String(v??'').normalize('NFC').toLocaleLowerCase('es').trim().replace(/\s+/g,' ');
  const clean=(v,n=100)=>String(v??'').trim().slice(0,n);
  const PARTS={noun:'名词',verb:'动词',adjective:'形容词',adverb:'副词',pronoun:'代词',determiner:'冠词 / 限定词',preposition:'介词',conjunction:'连词',numeral:'数词',interjection:'感叹词',expression:'词块 / 表达',other:'其他 / 待分类'};
  const NOUN_TYPES={common:'普通名词',proper:'专有名词',concrete:'具体名词',abstract:'抽象名词',countable:'可数用法',uncountable:'不可数用法',collective:'集合名词'};
  const GENDERS={masculine:'阳性',feminine:'阴性',common:'通性 / 依指称变化',unknown:'待确认'};
  const NUMBERS={singular:'单数',plural:'复数',invariable:'形式不变',unknown:'待确认'};
  const PERSONS=['yo','tú','él / ella / usted','nosotros/as','vosotros/as','ellos / ellas / ustedes'];
  const TENSES={presente:'直陈式现在时',preterito:'简单过去时',perfecto:'现在完成时',imperfecto:'过去未完成时',futuro:'简单将来时',condicional:'简单条件式',infinitivo:'不定式',gerundio:'副动词',participio:'过去分词'};
  const verbs={};
  function verb(lemma,meaning,forms,more={}){verbs[lemma]={lemma,meaning,forms,...more};}
  verb('ser','是；表示身份或特征',['soy','eres','es','somos','sois','son']);
  verb('estar','在；处于某种状态',['estoy','estás','está','estamos','estáis','están']);
  verb('tener','有；拥有',['tengo','tienes','tiene','tenemos','tenéis','tienen']);
  verb('ir','去',['voy','vas','va','vamos','vais','van']);
  verb('querer','想要；爱',['quiero','quieres','quiere','queremos','queréis','quieren']);
  verb('poder','能；可以',['puedo','puedes','puede','podemos','podéis','pueden']);
  verb('poner','放；放置',['pongo','pones','pone','ponemos','ponéis','ponen']);
  verb('caber','放得下；容纳得下',['quepo','cabes','cabe','cabemos','cabéis','caben']);
  verb('oler','闻起来；闻',['huelo','hueles','huele','olemos','oléis','huelen']);
  verb('haber','助动词；构成完成时',['he','has','ha','hemos','habéis','han']);
  verb('llamarse','名叫',['me llamo','te llamas','se llama','nos llamamos','os llamáis','se llaman']);
  for(const [lemma,meaning] of [['hablar','说；交谈'],['comer','吃'],['vivir','居住；生活'],['leer','读'],['estudiar','学习'],['aprender','学习；学会'],['trabajar','工作'],['necesitar','需要'],['usar','使用'],['preparar','准备；做饭'],['llevar','带；含有'],['cocinar','烹饪'],['remover','搅拌'],['tapar','盖上'],['cubrir','覆盖'],['pelar','削皮'],['cortar','切'],['faltar','缺少'],['gustar','使人喜欢']]){
    const ending=lemma.slice(-2),stem=lemma.slice(0,-2),suffixes=ending==='ar'?['o','as','a','amos','áis','an']:ending==='er'?['o','es','e','emos','éis','en']:['o','es','e','imos','ís','en'];
    verb(lemma,meaning,suffixes.map(s=>stem+s));
  }
  const extraForms={
    'gustaría':{lemma:'gustar',tense:'condicional',persons:['yo','él / ella / usted']},
    'faltaría':{lemma:'faltar',tense:'condicional',persons:['yo','él / ella / usted']},
    'estaría':{lemma:'estar',tense:'condicional',persons:['yo','él / ella / usted']},
    'aprendido':{lemma:'aprender',tense:'participio',persons:[]},
    'cubrirla':{lemma:'cubrir',tense:'infinitivo',persons:[]},
    'comí':{lemma:'comer',tense:'preterito',persons:['yo']}
  };
  verb('remover','搅拌',['remuevo','remueves','remueve','removemos','removéis','remueven']);
  const nouns={};
  function noun(lemma,meaning,gender,topic,types='common concrete countable',plural=''){
    nouns[lemma]={lemma,meaning,part:'noun',gender,number:'singular',topics:[topic],nounTypes:types.split(' '),plural:plural||lemma+( /[aeiouáéó]$/u.test(lemma)?'s':'es')};
  }
  for(const [lemma,meaning,gender,topic,types,plural] of [
    ['hambre','饥饿','feminine','身体与感受','common abstract uncountable'],['comida','食物；饭菜','feminine','食物与食材','common concrete countable uncountable'],
    ['curry','咖喱','masculine','食物与食材','common concrete uncountable','curris'],['ingrediente','食材；成分','masculine','食物与食材'],['especia','香料','feminine','食物与食材'],
    ['comino','孜然','masculine','食物与食材','common concrete uncountable'],['polvo','粉末','masculine','食物与食材','common concrete uncountable'],
    ['base','底料；基础','feminine','烹饪与厨房'],['ajo','大蒜','masculine','食物与食材'],['cabeza','头；整头（蒜）','feminine','身体与食材'],['diente','牙齿；瓣（蒜）','masculine','身体与食材'],
    ['cebolla','洋葱','feminine','食物与食材'],['zanahoria','胡萝卜','feminine','食物与食材'],['batata','甘薯；红薯','feminine','食物与食材'],['patata','土豆','feminine','食物与食材'],['papa','土豆（部分地区用法）','feminine','食物与食材'],
    ['tomate','西红柿','masculine','食物与食材'],['proteína','蛋白质','feminine','食物与食材','common abstract countable uncountable'],['tofu','豆腐','masculine','食物与食材','common concrete uncountable'],
    ['legumbre','豆类；豆科种子食材','feminine','食物与食材'],['lata','罐头；金属罐','feminine','烹饪与厨房'],['garbanzo','鹰嘴豆','masculine','食物与食材'],['judía','菜豆；豆子','feminine','食物与食材'],['lenteja','小扁豆','feminine','食物与食材'],['boniato','甘薯；红薯','masculine','食物与食材'],
    ['leche','奶','feminine','食物与食材','common concrete uncountable'],['coco','椰子','masculine','食物与食材'],['olla','锅','feminine','烹饪与厨房'],['tamaño','尺寸；大小','masculine','特征与数量'],['espátula','锅铲；刮刀','feminine','烹饪与厨房'],['metal','金属','masculine','材料','common concrete uncountable'],['tapa','盖子','feminine','烹饪与厨房'],['pelador','削皮器','masculine','烹饪与厨房'],['cuchillo','刀','masculine','烹饪与厨房'],['tabla','板；砧板','feminine','烹饪与厨房'],['cosa','东西；事情','feminine','日常生活'],
    ['familia','家庭；家人','feminine','人物与家庭','common concrete collective'],['madre','母亲','feminine','人物与家庭'],['padre','父亲','masculine','人物与家庭'],['hermano','兄弟','masculine','人物与家庭'],['hermana','姐妹','feminine','人物与家庭'],['amigo','男性朋友','masculine','人物与家庭'],['amiga','女性朋友','feminine','人物与家庭'],['estudiante','学生','common','人物与家庭'],
    ['café','咖啡；咖啡馆','masculine','饮食与餐厅','common concrete countable uncountable'],['agua','水','feminine','饮食与餐厅','common concrete uncountable'],['pan','面包','masculine','饮食与餐厅','common concrete countable uncountable'],['manzana','苹果','feminine','食物与食材'],['cuenta','账单','feminine','饮食与餐厅'],['desayuno','早餐','masculine','饮食与餐厅'],['restaurante','餐厅','masculine','饮食与餐厅'],
    ['casa','家；房子','feminine','城市与出行'],['calle','街道','feminine','城市与出行'],['ciudad','城市','feminine','城市与出行'],['estación','车站','feminine','城市与出行','common concrete countable','estaciones'],['tren','火车','masculine','城市与出行'],['mercado','市场','masculine','城市与出行'],['plaza','广场','feminine','城市与出行'],['biblioteca','图书馆','feminine','城市与出行'],
    ['semana','星期；周','feminine','时间与数字'],['día','天；白天','masculine','时间与数字'],['año','年；岁','masculine','时间与数字'],['libro','书','masculine','学习与阅读'],['mesa','桌子','feminine','家居'],['ventana','窗户','feminine','家居']
  ])noun(lemma,meaning,gender,topic,types,plural);
  const other={};
  function words(part,rows){for(const [forms,meaning] of rows)for(const word of forms.split('|'))other[word]={lemma:forms.split('|')[0],part,meaning,topics:[]};}
  words('adjective', [['amarillo|amarilla|amarillos|amarillas','黄色的'],['rojo|roja|rojos|rojas','红色的'],['naranja','橙色的'],['pequeño|pequeña|pequeños|pequeñas','小的'],['grande|grandes','大的'],['perfecto|perfecta|perfectos|perfectas','完美的；合适的'],['listo|lista|listos|listas','准备好的；聪明的'],['rico|rica|ricos|ricas','美味的；富有的'],['bueno|buena|buenos|buenas|buen','好的'],['tranquilo|tranquila|tranquilos|tranquilas','安静的'],['favorito|favorita|favoritos|favoritas','最喜欢的'],['importante|importantes','重要的']]);
  words('numeral', [['uno|una|un','一'],['dos','二'],['tres','三'],['cuatro','四'],['diez','十'],['veinte','二十']]);
  words('interjection', [['hola','你好'],['adiós','再见']]);
  words('adverb', [['mañana','明天（作副词时）'],['hoy','今天'],['bien','好'],['muy','很；非常'],['más','更多；更'],['también','也'],['ya','已经；此刻'],['solo','只；仅'],['no','不'],['sí','是；对'],['dentro','在里面']]);
  words('preposition', [['para','为了；用于'],['con','和；用'],['en','在……里；处于'],['de|del','……的；来自（del = de + el）'],['a|al','向；到（al = a + el）']]);
  words('conjunction', [['y','和；并且'],['pero','但是'],['así que|entonces','所以；于是']]);
  words('pronoun', [['yo','我'],['me','我；给我（依结构判断）'],['lo','它；这件事（也可作中性冠词）'],['esto','这个；这件事'],['qué','什么'],['algo','某物；一些']]);
  words('determiner', [['el|la|los|las','定冠词；随名词性数变化'],['un|una|unos|unas','不定冠词；一个／一些'],['este|esta|estos|estas','这个／这些；与名词性数一致'],['todo|toda|todos|todas','所有；整个'],['mi|mis','我的'],['algún|alguna|algunos|algunas','某个；一些']]);
  words('expression', [['como','像；例如；也可能是 comer 的 yo 形式，需看语境'],['poco a poco','一点一点地'],['leche de coco','椰奶'],['diente de ajo|dientes de ajo','一瓣蒜／多瓣蒜'],['cabeza de ajo|cabezas de ajo','一头蒜／多头蒜'],['a ver','看看；让我想想'],['en polvo','粉末状的'],['en lata','罐装的'],['tabla de cortar','砧板'],['garam masala','葛拉姆马萨拉；混合香料']]);
  function stripArticle(v){return norm(v).replace(/^(?:el|la|los|las|un|una|unos|unas) /u,'').replace(/^[¡¿\s]+|[.,;:!?\s]+$/gu,'');}
  function lookup(surface){
    const s=stripArticle(surface);
    if(other[s])return {...other[s],surface:clean(surface),nounTypes:[],persons:[],gender:'unknown',number:'unknown',tense:''};
    for(const n of Object.values(nouns)){if(s===n.lemma||s===n.plural)return {...n,surface:clean(surface),number:s===n.plural?'plural':'singular',persons:[],tense:''};}
    if(verbs[s])return {lemma:s,meaning:verbs[s].meaning,part:'verb',surface:clean(surface),tense:'infinitivo',persons:[],nounTypes:[],topics:['动作与行为'],gender:'unknown',number:'unknown'};
    const extra=extraForms[s];if(extra)return {...extra,meaning:verbs[extra.lemma].meaning,part:'verb',surface:clean(surface),nounTypes:[],topics:['动作与行为'],gender:'unknown',number:'unknown'};
    for(const v of Object.values(verbs)){const found=v.forms.flatMap((f,i)=>norm(f)===s?[PERSONS[i]]:[]);if(found.length)return {lemma:v.lemma,meaning:v.meaning,part:'verb',surface:clean(surface),tense:'presente',persons:found,nounTypes:[],topics:['动作与行为'],gender:'unknown',number:'unknown'};}
    return null;
  }
  function sanitize(value={}){
    if(!value||typeof value!=='object')value={};
    return {part:Object.hasOwn(PARTS,value.part)?value.part:'other',lemma:clean(value.lemma),nounTypes:Array.isArray(value.nounTypes)?[...new Set(value.nounTypes.filter(x=>Object.hasOwn(NOUN_TYPES,x)))]:[],gender:Object.hasOwn(GENDERS,value.gender)?value.gender:'unknown',number:Object.hasOwn(NUMBERS,value.number)?value.number:'unknown',topics:Array.isArray(value.topics)?[...new Set(value.topics.map(x=>clean(x,40)).filter(Boolean))].slice(0,10):[],tense:Object.hasOwn(TENSES,value.tense)?value.tense:'',persons:Array.isArray(value.persons)?[...new Set(value.persons.filter(x=>PERSONS.includes(x)))]:[]};
  }
  function metadata(word){
    if(word.lexical)return sanitize(word.lexical);
    const found=lookup(word.word),pos=word.pos||'';
    if(found){const m=sanitize(found);if(pos.includes('阴性'))m.gender='feminine';if(pos.includes('阳性'))m.gender='masculine';return m;}
    const part=pos.includes('名词')?'noun':pos.includes('动词')?'verb':pos.includes('形容词')?'adjective':pos.includes('副词')?'adverb':pos.includes('代词')?'pronoun':/表达|词块|搭配/.test(pos)?'expression':'other';
    return sanitize({part,lemma:stripArticle(word.word),gender:pos.includes('阴性')?'feminine':pos.includes('阳性')?'masculine':'unknown',topics:word.category?[word.category]:[]});
  }
  function conjugate(lemma,tense='presente'){
    const v=verbs[norm(lemma)];if(!v)return [];
    let forms;
    if(tense==='presente')forms=v.forms;
    else if(tense==='condicional'&&['gustar','faltar','estar'].includes(v.lemma))forms=['ía','ías','ía','íamos','íais','ían'].map(e=>v.lemma+e);
    else if(tense==='preterito'&&v.lemma==='comer')forms=['comí','comiste','comió','comimos','comisteis','comieron'];
    if(!forms)return [];
    return forms.map((form,i)=>({form,person:PERSONS[i],tense}));
  }
  function formsFor(word,person='all',tense='all'){
    const m=metadata(word);if(m.part!=='verb')return [];if(tense==='infinitivo')return person==='all'&&m.lemma?[{form:m.lemma,person:'',tense:'infinitivo'}]:[];
    const available=tense==='all'?['presente',...(['gustar','faltar','estar'].includes(m.lemma)?['condicional']:[]),...(m.lemma==='comer'?['preterito']:[])]:[tense];
    const table=available.flatMap(t=>conjugate(m.lemma,t)).filter(x=>person==='all'||x.person===person);
    if(m.tense&&m.tense!=='infinitivo'&&!table.some(x=>norm(x.form)===norm(word.word))&&(tense==='all'||tense===m.tense)&&(person==='all'||m.persons.includes(person)))table.push(...(m.persons.length?m.persons:['']).map(p=>({form:word.word,person:p,tense:m.tense})).filter(x=>person==='all'||x.person===person));
    for(const c of word.contexts||[]){const v=c.lexical;if(v?.part!=='verb'||v.lemma!==m.lemma||!v.tense||(tense!=='all'&&tense!==v.tense))continue;for(const p of v.persons?.length?v.persons:[''])if((person==='all'||p===person)&&!table.some(x=>norm(x.form)===norm(c.surface)&&x.person===p&&x.tense===v.tense))table.push({form:c.surface,person:p,tense:v.tense});}
    return table;
  }
  function vocabulary(text){const tokens=[...Object.keys(other).filter(k=>k.includes(' ')&&norm(text).includes(k)),...(String(text).match(/[\p{L}\p{M}]+/gu)||[])],seen=new Set(),result=[];for(const token of tokens){const m=lookup(token);if(!m||!['noun','verb','adjective','expression'].includes(m.part)||seen.has(m.lemma))continue;seen.add(m.lemma);result.push({...m,word:token});}return result;}
  function contexts(rows=[]){return (Array.isArray(rows)?rows:[]).slice(0,30).filter(x=>x&&typeof x==='object').map(x=>({text:clean(x.text,2000),translation:clean(x.translation,2000),title:clean(x.title,200),surface:clean(x.surface,100),lexical:x.lexical?sanitize(x.lexical):null,lessonId:/^[a-zA-Z0-9_-]{1,100}$/.test(x.lessonId||'')?x.lessonId:'',cueId:/^[a-zA-Z0-9_-]{1,100}$/.test(x.cueId||'')?x.cueId:'',start:Number.isFinite(x.start)&&x.start>=0?x.start:0}));}
  const api={norm,PARTS,NOUN_TYPES,GENDERS,NUMBERS,PERSONS,TENSES,lookup,metadata,sanitize,conjugate,formsFor,vocabulary,contexts,stripArticle};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroLexicon=api;
})(typeof window!=='undefined'?window:globalThis);
