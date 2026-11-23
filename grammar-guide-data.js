/* Authored comparisons: forms, contexts, combinations and paired examples. */
(function(root){
  'use strict';
  const guides={};
  function add(id,title,compare,pattern,warning,rows){guides[id]={title,compare,pattern,warning,rows:rows.map(([form,use,structure,es,zh])=>({form,use,structure,es,zh}))};}
  add('g1','名词与冠词','阳性 / 阴性；单数 / 复数','el / la + 名词','词尾只是线索；día 是阳性，mano 是阴性。agua 仍是阴性，只因重读 /a/ 开头而在单数紧邻时用 el。',[
    ['el / los','指一个或多个阳性事物','el + 单数；los + 复数','el libro / los libros','这本书 / 这些书'],
    ['la / las','指一个或多个阴性事物','la + 单数；las + 复数','la casa / las casas','这座房子 / 这些房子'],
    ['el agua / las aguas','重读 /a/ 开头的阴性名词','el agua + 阴性形容词','El agua está fría.','水是凉的。fría 仍用阴性。']
  ]);
  add('g20','名词分类','语法类别 / 场景主题','类别 + 性别 + 数量','普通/专有、具体/抽象、可数/不可数、集合等是不同角度，可以交叉；“食物、交通”属于主题标签。',[
    ['可数名词','能按个数数','un / una；数词 + 复数','una zanahoria / dos zanahorias','一根胡萝卜 / 两根胡萝卜'],
    ['不可数用法','说物质或整体数量','un poco de / un vaso de + 名词','un vaso de agua','一杯水：数的是杯数。'],
    ['随词义变化','同一词在不同场景中改变可数性','物质用法 / 一份或一处','Me gusta el café. / Quiero un café.','我喜欢咖啡这种饮品。/ 我想要一杯咖啡。']
  ]);
  add('g6','形容词配合','pequeño / pequeña；interesante / interesantes','名词 + 性数一致的形容词','先找形容词修饰哪个名词。-e 结尾的很多形容词不区分阴阳性，但仍有单复数。',[
    ['-o / -a','单数事物的性别配合','阳性 -o；阴性 -a','un libro pequeño / una casa pequeña','一本小书 / 一座小房子'],
    ['-os / -as','复数事物的性别配合','阳性复数 -os；阴性复数 -as','libros pequeños / casas pequeñas','小书们 / 小房子们'],
    ['-e / -es','这类词的阴阳性词形相同','单数 -e；复数 -es','libros interesantes / casas interesantes','有趣的书 / 有趣的房子']
  ]);
  add('g12','比较级','más… que / menos… que','más / menos + 形容词 + que','más / menos 本身不随名词变，形容词仍与所描述的事物配合；bueno、malo 等还有不规则比较形式。',[
    ['más… que','比较哪一个程度更高','más + 形容词 + que + 比较对象','Esta casa es más pequeña que aquella.','这座房子比那座小。'],
    ['menos… que','比较哪一个程度更低','menos + 形容词 + que + 比较对象','Esta mochila es menos cara que aquella.','这个背包比那个便宜。'],
    ['不说比较对象','双方已知道和谁比较时','más / menos + 形容词','Necesito una mochila más grande.','我需要一个更大的背包。']
  ]);
  add('g3','现在时变位','-ar / -er / -ir','词干 + 人称词尾','这里只比较规则动词。ser、ir、tener 等要另记；主语省略时仍要从动词词尾识别人称。',[
    ['-ar：hablar','说“我……”','yo：词干 + -o','Yo hablo español.','我说西班牙语。'],
    ['-er：comer','说“我们……”','nosotros/as：词干 + -emos','Nosotros comemos en casa.','我们在家吃饭。'],
    ['-ir：vivir','同样是“我们”，换一个动词类别','nosotros/as：词干 + -imos','Nosotros vivimos en Madrid.','我们住在马德里。']
  ]);
  add('g15','条件式与委婉愿望','quiero / me gustaría','me gustaría + 动词原形','不要只凭 -ía 判断时态：comía 是未完成过去时，而 comería 是条件式。条件式要结合动词原形和语境辨认。',[
    ['quiero','直接表达当前愿望','quiero + 动词原形','Quiero viajar.','我想去旅行。'],
    ['me gustaría','较委婉地说愿望或想法','me gustaría + 动词原形','Me gustaría viajar.','我想去旅行；语气更委婉。'],
    ['estaría','设想条件成立后的状态','条件背景 + estaría + 补语','Con una mesa más, estaría todo listo.','再有一张桌子，一切就准备好了。']
  ]);
  add('g16','现在完成时','he aprendido / estoy aprendiendo','haber 现在时 + 过去分词','完成时分词不与主语做性数配合；estar + 副动词是进行结构。现在完成时的使用范围有地区差异。',[
    ['he + 分词','回顾截至现在的经历或与现在有关的完成','he / has / ha… + participio','He aprendido una palabra.','我学会了一个单词。'],
    ['estar + 副动词','强调动作正在进行','estoy / estás… + gerundio','Estoy aprendiendo español.','我正在学西班牙语。'],
    ['habéis + 分词','向 vosotros/as 问是否完成','habéis + participio','¿Habéis terminado?','你们完成了吗？']
  ]);
  add('g2','ser / estar','身份、特征 / 位置、状态','ser / estar + 补语','不要用“永久/临时”一刀切。人或物的位置常用 estar；活动举办在哪里常用 ser。',[
    ['ser','介绍身份、来源、特征等','ser + 职业 / 特征','Soy estudiante.','我是学生。'],
    ['estar','说人或物在哪里','estar + 地点','Madrid está en España.','马德里位于西班牙。'],
    ['estar','说此刻或所关注的状态','estar + 状态形容词','Estoy cansada.','我累了。女性说话者用 cansada。'],
    ['ser + 活动地点','说明会议、聚会等在哪里举行','活动 + ser + 地点','La reunión es en Madrid.','会议在马德里举行。']
  ]);
  add('g4','hay / estar / tener','有什么 / 在哪里 / 拥有什么','hay + 事物；事物 + está；人 + tiene','hay 的存在用法没有普通人称主语，后面是多个事物时仍用 hay。不要因为 libros 是复数就改成 han。',[
    ['hay','首次介绍某处有谁或什么','hay + un/una、数量或未确定事物','Hay una biblioteca en mi barrio.','我的街区有一座图书馆。'],
    ['estar','说明已经确定的事物在哪里','已知事物 + está / están + 地点','La biblioteca está cerca.','那座图书馆在附近。'],
    ['tener','说明某人拥有或带着什么','人 + tener + 事物','Tenemos un gato.','我们有一只猫。']
  ]);
  add('g9','tener 的常用搭配','拥有 / 年龄 / 饥渴感','tener + 名词；tener + 数字 + años','“我二十岁”用 tengo veinte años；“我饿了”用 tengo hambre。不要逐字照搬中文里的“是”或英语里的 be。',[
    ['拥有','介绍自己有什么','tener + 事物','Tengo un libro.','我有一本书。'],
    ['年龄','介绍或询问年龄','tener + 数字 + años','Tengo veinte años.','我二十岁。'],
    ['感受搭配','说饿了或渴了','tener hambre / tener sed','Tengo hambre.','我饿了。hambre 前通常不加冠词。']
  ]);
  add('g5','gustar：gusta / gustan','单数、动词原形 / 复数','me / te / le… + gusta(n) + 喜欢的对象','决定 gusta / gustan 的是喜欢的事物，不是 me、te、le。a mí 可以强调“对我来说”，但不能单独替代 me。',[
    ['gusta + 单数名词','喜欢一类东西或一个事物','me gusta + 单数名词','Me gusta el café.','我喜欢咖啡。'],
    ['gustan + 复数名词','喜欢多个事物','me gustan + 复数名词','Me gustan los libros.','我喜欢书。'],
    ['gusta + 动词原形','喜欢做某件事','me gusta + 动词原形','Me gusta leer.','我喜欢阅读。'],
    ['换喜欢的人','说某人喜欢什么','a + 人名 + le gusta(n)…','A Ana le gusta leer.','安娜喜欢阅读。']
  ]);
  add('g7','llamarse：介绍名字','me llamo / te llamas / se llama','代词 + llamarse 变位 + 名字','me / te / se 和动词要配套随人称变化；不要只换 llamo 而把 me 留给所有人。',[
    ['介绍我自己','第一次见面说名字','me llamo + 名字','Me llamo Ana.','我叫安娜。'],
    ['询问你','向熟悉或用 tú 称呼的人问名字','¿Cómo te llamas?','¿Cómo te llamas?','你叫什么名字？'],
    ['介绍别人','说第三个人的名字','se llama + 名字','Mi hermana se llama Lucía.','我妹妹叫露西亚。']
  ]);
  add('g8','ir a：地点与计划','去哪里 / 打算做什么','ir a + 地点 / 动词原形','a 后面接地点还是动作，决定这里在说去向还是计划；a + el 要缩合为 al。',[
    ['ir a + 地点','说要去哪里','voy / vas / va… + a + 地点','Voy a un café.','我去一家咖啡馆。'],
    ['ir al + 地点','地点名词前是定冠词 el','a + el → al','Vamos al mercado.','我们去市场。'],
    ['ir a + 原形','说打算做什么','voy / vas / va… + a + 动词原形','Voy a estudiar español.','我打算学西班牙语。']
  ]);
  add('g10','想要、能够、需要','querer / poder / necesitar','变位动词 + 动词原形','人称变化放在前一个动词上：quiero leer，不能把后面的 leer 也按 yo 再变一次。并非任意两个动词都能直接这样连接。',[
    ['querer','说愿望或意图','quiero + 动词原形','Quiero leer.','我想读书。'],
    ['poder','说能力、可能性或许可','puedo + 动词原形','Puedo estudiar hoy.','我今天能学习。'],
    ['necesitar','说需要做什么','necesito + 动词原形','Necesito preparar la cena.','我需要准备晚餐。']
  ]);
  add('g11','por / para / por qué / porque','原因 / 目的；问原因 / 回答原因','por + 名词；para + 原形；porque + 句子','por qué 分写并有重音，用来问原因；porque 连写且无重音，用来回答。下表先比较常见的原因和目的，por / para 还有其他用法。',[
    ['para + 原形','说明行动目的：为了做什么','主句 + para + 动词原形','Estudio para aprender.','我学习是为了学会。'],
    ['名词 + para + 原形','说明物品用途：用来做什么','物品 + para + 动词原形','Una cuchara para comer.','一把用来吃东西的勺子。'],
    ['por + 名词','把原因作为名词短语说出来','por + 原因名词','El museo está cerrado por obras.','博物馆因施工而关闭。'],
    ['porque + 句子','用一个有变位动词的句子解释原因','主句 + porque + 句子','Estudio porque tengo un examen.','我学习，因为我有考试。'],
    ['por qué','向对方询问原因','¿Por qué + 变位动词…?','¿Por qué estudias español?','你为什么学习西班牙语？']
  ]);
  add('g13','tener / tener que','拥有事物 / 必须做事','tener que + 动词原形','表示“必须”时 que 不能省；随人称变化的是 tener，后面的动词保持原形。',[
    ['tener + 名词','说拥有什么','tengo + 事物','Tengo un libro.','我有一本书。'],
    ['tener que + 原形','说必须或需要做什么','tengo / tienes… + que + 原形','Tengo que estudiar hoy.','我今天得学习。'],
    ['第三人称','说某物必须具备什么','tiene que + 原形','La sopa tiene que llevar agua.','汤里必须放水。']
  ]);
  add('g19','主语、宾语与表语','谁做 / 做什么 / 是什么或怎样','主语 + 谓语 + 所需补语','词性和句子成分不同。不要把动词后的名词一律当宾语，也不要把省略的主语硬加进原文。',[
    ['主语与宾语','先找谁执行动作、动作涉及什么','谁 + 动作 + 对象','Yo preparo la comida en casa.','我在家做饭：yo 是主语，la comida 是宾语。'],
    ['表语','说明主语的身份或状态','主语 + ser / estar + 表语','Ana está cansada.','安娜累了：cansada 是表语，不是宾语。'],
    ['后置主语','主语不一定放在动词前','谓语 + 主语','Caben los ingredientes.','食材放得下：los ingredientes 是后置主语。']
  ]);
  add('g14','lo / la：代替事物','冠词 la / 宾语代词 la','代词 + 变位动词；原形 + 代词','la olla 中的 la 是冠词；la cierro 中的 la 是代词。lo 也能代替整件事，不能总按一个阳性实物理解。',[
    ['名词前的 la','指出一个阴性名词','la + 名词','La ventana está abierta.','窗户开着：la 是冠词。'],
    ['变位动词前的 la','不重复前面提过的阴性事物','la + 变位动词','La cierro.','我把它关上：la 代指窗户。'],
    ['动词原形后的 la / lo','代词直接附在原形之后','cerrar + la；leer + lo','Voy a cerrarla. / Quiero leerlo.','我准备把它关上。/ 我想读它（书）。']
  ]);
  add('g17','tú / usted：怎样称呼','熟悉称呼 / 礼貌称呼','tú + 第二人称；usted + 第三人称','礼貌称呼取决于地区、关系和场合，不能只看年龄；usted 虽指“您”，动词使用第三人称形式。',[
    ['tú','熟悉的人，或双方使用 tú 的场合','¿Cómo estás?','Hola, ¿cómo estás?','你好，你好吗？'],
    ['usted','需要使用 usted 表达礼貌的场合','¿Cómo está?','Buenas tardes, ¿cómo está?','下午好，您好吗？']
  ]);
  add('g18','问词义、问说法、请重复','qué significa / cómo se dice / repetir','疑问词 + 变位动词','这三个问法各自解决不同问题：词义、表达方式、没听清。puedes 后的 repetir 保持原形。',[
    ['问词义','听到了一个词，但不知道意思','¿Qué significa + 词?','¿Qué significa «cuaderno»?','cuaderno 是什么意思？'],
    ['问说法','知道想表达什么，但不知道西语怎么说','¿Cómo se dice… en español?','¿Cómo se dice «谢谢» en español?','“谢谢”用西班牙语怎么说？'],
    ['请重复','没有听清或没跟上','¿Puedes + 动词原形?','¿Puedes repetir, por favor?','你能再说一遍吗？']
  ]);
  const checks={
    g1:'先确定名词的性别，再看单复数；冠词和形容词分别跟着配合。',
    g20:'先看当前词义能不能按个数数，再分别记录类别、性别、数量与场景。',
    g6:'先找到被描述的名词，再看形容词是否区分阴阳性，最后检查单复数。',
    g12:'先确定要比较哪个性质，再选 más / menos，最后加 que 引出比较对象。',
    g3:'先确定主语人称，再看动词属于 -ar / -er / -ir，最后换词尾。',
    g15:'直接说想要可用 quiero；较委婉地表达愿望可用 me gustaría。',
    g16:'先看是在回顾经历或完成，还是强调正在进行，再选 haber + 分词或 estar + 副动词。',
    g2:'先看是在介绍身份特征、说明人或物的位置，还是描述状态；活动举办地点另看。',
    g4:'先问自己：是在引入“有什么”、定位“在哪里”，还是说“谁拥有”？',
    g9:'先分清是拥有、年龄还是感受，再把整个 tener 搭配一起说出来。',
    g5:'先找喜欢的对象：单数名词或动词原形用 gusta，复数名词用 gustan；再换喜欢的人。',
    g7:'先看介绍谁的名字，再同时换代词和动词：me llamo、te llamas、se llama。',
    g8:'看 a 后面接的是地点还是动词原形；前者说去向，后者常说计划。',
    g10:'先选愿望、能力还是需要，再将前面的动词变位，后面的动作保留原形。',
    g11:'先区分原因与目的；说原因时，再看是在提问、接名词，还是接完整句子。',
    g13:'看 tener 后面直接接名词，还是接 que + 动词原形：拥有，或需要做。',
    g19:'先找变位动词，再找主语，最后判断后面是宾语、表语还是时间地点等补充。',
    g14:'看 la 后面是不是名词；如果它替代前面的事物，再判断代词放在变位动词前还是原形后。',
    g17:'先看双方关系与当地称呼习惯，再让动词与 tú 或 usted 对应。',
    g18:'先分清自己是不懂词义、不会表达，还是没听清，再选择对应问法。'
  };
  const worked={
    g2:{es:'La reunión es en Madrid.',zh:'会议在马德里举行。',note:'La reunión 指一场活动；这里是在说明举办地点，所以用 ser 的第三人称单数 es。比较 Madrid está en España：后者是在定位一座城市。'},
    g4:{es:'Hay dos libros en la mesa.',zh:'桌上有两本书。',note:'hay 引入尚未确定的两本书，不随 libros 变复数。已经知道是哪两本书、只问位置时，可以说 Los libros están en la mesa。'},
    g5:{es:'A Ana le gustan los libros.',zh:'安娜喜欢书。',note:'A Ana 和 le 都指喜欢的人；los libros 是主语，为复数，所以用 gustan。不能因为 Ana 是一个人就改用 gusta。'},
    g11:{es:'Estudio porque tengo un examen.',zh:'我学习，因为我有考试。',note:'porque 后面是一个带变位动词 tengo 的原因句。若要说学习的目的，可换成 Estudio para aprender：para 后接动词原形 aprender。'},
    g13:{es:'Tengo que preparar la mochila.',zh:'我得准备好背包。',note:'tengo 是 tener 的 yo 现在时；que 连接原形 preparar，整体表达需要做某事。比较 Tengo una mochila：后面直接接名词，只表示我有一个背包。'},
    g14:{es:'La ventana está abierta. Voy a cerrarla.',zh:'窗户开着。我准备把它关上。',note:'第一处 La 在 ventana 前，是冠词。cerrarla 里的 -la 代替 la ventana，附在动词原形 cerrar 后；若改成一个变位动词，则说 La cierro。'},
    g16:{es:'He aprendido una palabra.',zh:'我学会了一个单词。',note:'he 是 haber 的 yo 现在时，aprendido 是 aprender 的过去分词，两者构成现在完成时。若强调“正在学”，用 Estoy aprendiendo…；aprendiendo 是副动词。'}
  };
  for(const [id,g] of Object.entries(guides)){g.check=checks[id];if(worked[id])g.worked=worked[id];}
  if(typeof module!=='undefined'&&module.exports)module.exports=guides;else root.ClaroGrammarGuideData=guides;
})(typeof window!=='undefined'?window:globalThis);
