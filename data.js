'use strict';
const CATEGORIES = ['问候与表达', '人物与家庭', '饮食与餐厅', '城市与出行', '时间与数字', '常用动词', '我的生词'];
const WORD_ROWS = [
 ['hola','你好','问候与表达','感叹词','¡Hola! Me llamo Ana.','你好！我叫安娜。'],
 ['gracias','谢谢','问候与表达','表达','Muchas gracias por tu ayuda.','非常感谢你的帮助。'],
 ['por favor','请','问候与表达','表达','Un café, por favor.','请给我一杯咖啡。'],
 ['adiós','再见','问候与表达','感叹词','Adiós, hasta mañana.','再见，明天见。'],
 ['buenos días','早上好','问候与表达','表达','Buenos días, ¿cómo estás?','早上好，你怎么样？'],
 ['hasta luego','回头见','问候与表达','表达','Hasta luego, Ana.','回头见，安娜。'],
 ['sí','是；对','问候与表达','副词','Sí, soy estudiante.','是的，我是学生。'],
 ['no','不；不是','问候与表达','副词','No, no tengo coche.','不，我没有汽车。'],
 ['perdón','对不起；劳驾','问候与表达','表达','Perdón, ¿dónde está la estación?','劳驾，车站在哪里？'],
 ['bien','好；很好','问候与表达','副词','Estoy bien, gracias.','我很好，谢谢。'],
 ['la familia','家庭','人物与家庭','阴性名词','Mi familia vive en China.','我的家人住在中国。'],
 ['la madre','母亲','人物与家庭','阴性名词','Mi madre se llama Li.','我的母亲姓李。'],
 ['el padre','父亲','人物与家庭','阳性名词','Mi padre es profesor.','我的父亲是老师。'],
 ['el hermano','兄弟','人物与家庭','阳性名词','Tengo un hermano.','我有一个兄弟。'],
 ['la hermana','姐妹','人物与家庭','阴性名词','Mi hermana estudia español.','我的姐妹学习西班牙语。'],
 ['el amigo','朋友（男）','人物与家庭','阳性名词','Pablo es mi amigo.','巴勃罗是我的朋友。'],
 ['la amiga','朋友（女）','人物与家庭','阴性名词','Ana es mi amiga.','安娜是我的朋友。'],
 ['el estudiante','学生（男）','人物与家庭','阳性名词','El estudiante lee un libro.','这位学生在读一本书。'],
 ['el café','咖啡；咖啡馆','饮食与餐厅','阳性名词','Tomo un café por la mañana.','我早上喝一杯咖啡。'],
 ['el agua','水','饮食与餐厅','阴性名词','El agua está fría.','水是凉的。'],
 ['el pan','面包','饮食与餐厅','阳性名词','Compro pan en el mercado.','我在市场买面包。'],
 ['la leche','牛奶','饮食与餐厅','阴性名词','Quiero un café con leche.','我想要一杯加奶咖啡。'],
 ['la manzana','苹果','饮食与餐厅','阴性名词','La manzana es roja.','苹果是红色的。'],
 ['la cuenta','账单','饮食与餐厅','阴性名词','La cuenta, por favor.','请结账。'],
 ['el desayuno','早餐','饮食与餐厅','阳性名词','El desayuno está en la mesa.','早餐在桌上。'],
 ['el restaurante','餐厅','饮食与餐厅','阳性名词','El restaurante está cerca.','餐厅就在附近。'],
 ['la casa','房子；家','城市与出行','阴性名词','Mi casa es pequeña.','我的房子很小。'],
 ['la calle','街道','城市与出行','阴性名词','La calle es tranquila.','这条街很安静。'],
 ['la ciudad','城市','城市与出行','阴性名词','Madrid es una ciudad grande.','马德里是一座大城市。'],
 ['la estación','车站','城市与出行','阴性名词','La estación está a la derecha.','车站在右边。'],
 ['el tren','火车','城市与出行','阳性名词','El tren sale a las ocho.','火车八点发车。'],
 ['el mercado','市场','城市与出行','阳性名词','Voy al mercado los sábados.','我每周六去市场。'],
 ['la plaza','广场','城市与出行','阴性名词','Hay una plaza cerca de mi casa.','我家附近有一个广场。'],
 ['la biblioteca','图书馆','城市与出行','阴性名词','Estudio en la biblioteca.','我在图书馆学习。'],
 ['hoy','今天','时间与数字','副词','Hoy estudio español.','今天我学习西班牙语。'],
 ['mañana','明天；早晨（名词时用 la）','时间与数字','副词 / 名词','Mañana voy a Madrid.','明天我去马德里。'],
 ['la semana','周；星期','时间与数字','阴性名词','Esta semana tengo tiempo.','这周我有时间。'],
 ['el día','天；白天','时间与数字','阳性名词','Hoy es un buen día.','今天是美好的一天。'],
 ['uno','一','时间与数字','数词','Uno, dos, tres.','一，二，三。'],
 ['dos','二','时间与数字','数词','Tengo dos libros.','我有两本书。'],
 ['tres','三','时间与数字','数词','Son las tres.','现在三点。'],
 ['diez','十','时间与数字','数词','Tengo diez euros.','我有十欧元。'],
 ['ser','是（身份、特征等）','常用动词','动词','Soy estudiante.','我是学生。'],
 ['estar','在；处于（位置、状态等）','常用动词','动词','Estoy en casa.','我在家。'],
 ['tener','有','常用动词','动词','Tengo un libro.','我有一本书。'],
 ['ir','去','常用动词','动词','Voy a la escuela.','我去学校。'],
 ['hablar','说；交谈','常用动词','动词','Hablo un poco de español.','我会说一点西班牙语。'],
 ['comer','吃','常用动词','动词','Como una manzana.','我吃一个苹果。'],
 ['vivir','居住；生活','常用动词','动词','Vivo en Shanghái.','我住在上海。'],
 ['leer','读','常用动词','动词','Leo un libro por la noche.','我晚上读一本书。'],
 ['estudiar','学习','常用动词','动词','Estudio español todos los días.','我每天学习西班牙语。'],
 ['querer','想要；爱','常用动词','动词','Quiero aprender español.','我想学习西班牙语。'],
 ['aprender','学习；学会','常用动词','动词','Aprendo una palabra nueva cada día.','我每天学一个新单词。'],
 ['trabajar','工作','常用动词','动词','Trabajo en una oficina.','我在办公室工作。']
];
const SEED_WORDS = WORD_ROWS.map((r,i)=>({id:`w${i+1}`,word:r[0],meaning:r[1],category:r[2],pos:r[3],example:r[4],translation:r[5],level:'A1'}));
const SEED_ARTICLES = [
 {id:'a1',title:'Un café, por favor',subtitle:'从一杯咖啡开始你的西语日常',level:'A1',category:'饮食与餐厅',cover:'cafe',original:true,text:'¡Hola! Me llamo Ana y vivo en Madrid.\n\nPor la mañana, voy a un café cerca de mi casa. El café es pequeño y tranquilo.\n\n— Buenos días. Un café con leche y un pan, por favor.\n— Claro. ¿Algo más?\n— No, gracias.\n\nMe siento junto a la ventana. Leo un libro y tomo mi café. Hoy es un buen día.',translation:'你好！我叫安娜，住在马德里。\n\n早上，我去家附近的一家咖啡馆。咖啡馆小小的，很安静。\n\n“早上好。请给我一杯加奶咖啡和一个面包。”\n“好的。还需要别的吗？”\n“不用了，谢谢。”\n\n我坐在窗边，读着书，喝着咖啡。今天是美好的一天。'},
 {id:'a2',title:'Mi pequeña familia',subtitle:'用简单的句子介绍你和家人',level:'A1',category:'人物与家庭',cover:'home',original:true,text:'Me llamo Pablo. Soy estudiante y tengo veinte años. Mi familia vive en Valencia.\n\nMi madre es profesora y mi padre trabaja en un restaurante. Tengo una hermana. Se llama Lucía y tiene quince años.\n\nTenemos un gato. Es blanco y muy tranquilo. Por la noche, comemos juntos y hablamos de nuestro día.',translation:'我叫巴勃罗。我是学生，今年二十岁。我的家人住在瓦伦西亚。\n\n妈妈是老师，爸爸在一家餐厅工作。我有一个妹妹。她叫露西亚，十五岁。\n\n我们养了一只猫。它是白色的，而且很安静。晚上，我们一起吃饭，聊聊各自的一天。'},
 {id:'a3',title:'Un paseo por el barrio',subtitle:'走过广场、书店和熟悉的街道',level:'A1',category:'城市与出行',cover:'city',original:true,text:'Mi barrio es pequeño, pero tiene muchas cosas. Hay una plaza, una biblioteca y un mercado.\n\nLa biblioteca está al lado de la estación. El mercado está cerca de mi casa. Los sábados, compro fruta y pan.\n\nMi lugar favorito es la plaza. Hay árboles y bancos. Me gusta leer allí por la tarde.',translation:'我的街区不大，但有很多设施。有一个广场、一座图书馆和一个市场。\n\n图书馆在车站旁边。市场在我家附近。每周六，我买水果和面包。\n\n我最喜欢的地方是广场。那里有树和长椅。我喜欢下午在那里读书。'},
 {id:'a4',title:'Los colores del mercado',subtitle:'周末早晨，去市场找一点新鲜感',level:'A2',category:'饮食与餐厅',cover:'market',original:true,text:'El sábado pasado fui al mercado con mi amiga Lucía. Había mucha gente y los puestos estaban llenos de fruta.\n\nCompramos tomates, naranjas y un poco de queso. El vendedor nos recomendó unas manzanas de su pueblo.\n\nDespués, nos sentamos en una terraza. Hablamos durante una hora y decidimos cocinar juntas esa noche. A veces, los planes más sencillos son los mejores.',translation:'上周六，我和朋友露西亚去了市场。那里人很多，摊位上摆满了水果。\n\n我们买了西红柿、橙子和一些奶酪。摊主向我们推荐了来自他家乡的苹果。\n\n之后，我们坐在露台上，聊了一个小时，并决定当晚一起做饭。有时候，最简单的计划就是最好的。'},
 {id:'a5',title:'Un viaje sin prisa',subtitle:'坐上火车，去一个没去过的小镇',level:'A2',category:'城市与出行',cover:'travel',original:true,text:'Este verano quiero viajar en tren por el norte de España. No voy a visitar muchas ciudades: prefiero pasar varios días en cada lugar.\n\nMe gustaría caminar por la costa, probar la comida local y hablar con la gente. Llevaré una mochila pequeña y un cuaderno para escribir palabras nuevas.\n\nMi objetivo no es verlo todo, sino disfrutar del camino.',translation:'今年夏天，我想坐火车游览西班牙北部。我不打算去很多城市：我更愿意在每个地方待上几天。\n\n我想沿着海岸散步，品尝当地食物，和人们聊天。我会带一个小背包和一本记录新词的笔记本。\n\n我的目标是享受旅途。'},
 {id:'a6',title:'El valor de aprender despacio',subtitle:'把学习变成生活里的一点小习惯',level:'B1',category:'学习与生活',cover:'book',original:true,text:'Cuando empezamos a aprender un idioma, solemos querer resultados inmediatos. Sin embargo, el progreso no siempre se nota de un día para otro.\n\nLeer un párrafo, escuchar una conversación o escribir tres frases puede parecer poco. Pero si repetimos estas acciones con frecuencia, se convierten en una parte natural de nuestra vida.\n\nNo se trata de estudiar durante horas sin descanso, sino de encontrar un ritmo que podamos mantener. La curiosidad y la constancia suelen llevarnos más lejos que la prisa.',translation:'开始学习一门语言时，我们往往希望立刻看到结果。然而，进步并不总能在一两天内显现。\n\n读一段文字、听一段对话或写三句话，看起来可能不多。但如果我们经常重复这些行动，它们就会成为生活中自然的一部分。\n\n关键是找到能够坚持的节奏。好奇心与持之以恒往往比急于求成带我们走得更远。'}
];
const GRAMMAR = [
 {id:'g1',title:'名词的阴阳性',es:'El género',summary:'把冠词和名词一起记：el libro · la casa',body:'西语名词通常有语法性别。以 -o 结尾的名词多为阳性，以 -a 结尾的多为阴性，但这是常见规律，并非绝对规则。学习时把 el / la 与名词一起记。\n注意：el día（天）是阳性；la mano（手）是阴性。agua 是阴性名词，因重读 /a/ 开头，单数紧邻时通常用 el：el agua fría；复数仍用 las aguas frías。',examples:[['el libro → los libros','书 → 多本书'],['la casa → las casas','房子 → 多座房子'],['el agua fría','凉水：fría 仍用阴性形式']]},
 {id:'g2',title:'ser 和 estar 怎么选？',es:'Ser y estar',summary:'先从身份、特征、位置和状态入手',body:'ser 常用于身份、来源、特征、时间等；estar 常用于人或物的位置及状态。不要简单理解成“永久”和“临时”：事件举办的地点常用 ser；某些长期状态也用 estar。初学时先把常见表达连同语境一起记。',examples:[['Soy estudiante.','我是学生。（身份）'],['Madrid está en España.','马德里位于西班牙。（位置）'],['Estoy cansada.','我累了。（女性说话者的状态）']]},
 {id:'g3',title:'现在时规则变位',es:'El presente',summary:'hablar / comer / vivir，找到词干再换词尾',body:'规则动词先去掉 -ar、-er、-ir，再加上相应人称词尾。\n-ar：o, as, a, amos, áis, an\n-er：o, es, e, emos, éis, en\n-ir：o, es, e, imos, ís, en\n人称顺序：yo / tú / él, ella, usted / nosotros/as / vosotros/as / ellos, ellas, ustedes。',examples:[['Yo hablo español.','我说西班牙语。'],['Nosotros comemos en casa.','我们在家吃饭。'],['Ella vive en Madrid.','她住在马德里。']]},
 {id:'g4',title:'用 hay 表达“有”',es:'Hay y estar',summary:'hay 引入事物，estar 说明已知事物的位置',body:'hay 是 haber 的现在时非人称形式，单复数都用 hay，常用来介绍某处存在什么。estar 则常用于说明已经确定的人或物在哪里。',examples:[['Hay una biblioteca en mi barrio.','我的街区有一座图书馆。'],['Hay dos libros en la mesa.','桌上有两本书。'],['La biblioteca está cerca.','那座图书馆在附近。']]},
 {id:'g5',title:'“我喜欢”为什么是 me gusta？',es:'Me gusta',summary:'喜欢的事物决定用 gusta 还是 gustan',body:'gustar 的常见结构可以理解为“某物使某人喜欢”。单数名词或动词原形常用 gusta，复数名词用 gustan。\nme / te / le / nos / os / les 对应喜欢的人；如有需要，可用 a mí / a ti / a Ana 等补充说明或强调。',examples:[['Me gusta el café.','我喜欢咖啡。'],['Me gustan los libros.','我喜欢书。'],['Me gusta leer.','我喜欢阅读。']]},
 {id:'g6',title:'形容词的性数一致',es:'La concordancia',summary:'una casa pequeña · dos libros pequeños',body:'形容词通常与所修饰名词保持性别和数量一致。以 -o 结尾的形容词通常有 -o / -a / -os / -as 四种形式。以 -e 结尾的通常不因性别变化，但仍需变复数。具体词形还需逐词学习。',examples:[['un libro pequeño / una casa pequeña','一本小书 / 一座小房子'],['libros interesantes / casas interesantes','有趣的书 / 有趣的房子'],['las manzanas rojas','红色的苹果（复数）']]}
 ,{id:'g7',title:'用 llamarse 介绍名字',es:'Me llamo',summary:'me llamo · te llamas · se llama',body:'llamarse 表示“名叫”。介绍自己的名字时说 me llamo…；询问对方可说 ¿Cómo te llamas?。代词和动词一起随人称变化：me llamo、te llamas、se llama、nos llamamos、os llamáis、se llaman。主语 yo / tú 等常可省略。',examples:[['Me llamo Ana.','我叫安娜。'],['¿Cómo te llamas?','你叫什么名字？'],['Mi hermana se llama Lucía.','我妹妹叫露西亚。']]}
 ,{id:'g8',title:'ir a：去哪里、准备做什么',es:'Ir a',summary:'voy a un café · voy a estudiar',body:'ir 的现在时不规则：voy、vas、va、vamos、vais、van。ir a + 地点表示去某处；a 与定冠词 el 合并为 al，例如 voy al mercado。ir a + 动词原形常表示计划或即将发生的动作，称为近未来结构。区分：voy a un café（去咖啡馆）与 voy a estudiar（准备学习）。',examples:[['Voy a un café.','我去一家咖啡馆。'],['Vamos al mercado.','我们去市场。'],['Voy a estudiar español.','我打算学西语。']]}
 ,{id:'g9',title:'tener：拥有与年龄',es:'Tener',summary:'tengo un libro · tengo veinte años',body:'tener 的现在时是 tengo、tienes、tiene、tenemos、tenéis、tienen。除了表示拥有，年龄也用 tener + 数字 + años；不是用 ser。固定表达还有 tener hambre（饿）和 tener sed（渴），适合整体记忆。',examples:[['Tengo veinte años.','我二十岁。'],['Tenemos un gato.','我们有一只猫。'],['Tengo hambre.','我饿了。']]}
];
GRAMMAR.push(
 {id:'g10',title:'想要、能够、需要：动词 + 原形',es:'Verbo + infinitivo',summary:'quiero comer · puedo usar · necesito preparar',body:'表示想做、能做、需要做某事时，常用 querer / poder / necesitar 的变位形式，后面接动词原形。随人称变化的是前一个动词，后面的动词保留 -ar / -er / -ir。注意各动词的具体搭配，不是任何两个动词都能这样直接连接。',examples:[['Quiero leer.','我想读书。'],['Puedo estudiar hoy.','我今天能学习。'],['Necesito preparar la cena.','我需要准备晚餐。']]},
 {id:'g11',title:'用 para + 原形说明用途',es:'Para + infinitivo',summary:'para cocinar · para cortar · para aprender',body:'para + 动词原形可以说明目的或用途，常译成“为了……、用来……”。例如 un cuaderno para escribir（一本用来写东西的笔记本）。不要混淆 para 和 por；这里先记住用途表达。',examples:[['Una cuchara para comer.','一把用来吃东西的勺子。'],['Estudio para aprender.','我为了学会而学习。']]},
 {id:'g12',title:'更大、更小：比较级',es:'Más / menos + adjetivo',summary:'más grande · más pequeña · menos caro',body:'más + 形容词表示“更……”，menos + 形容词表示“更不……”。说明比较对象时，常接 que。形容词仍与名词保持性数一致：una olla más pequeña。grande 本身不因阴阳性改变，但有复数 grandes。',examples:[['Necesito una mochila más grande.','我需要一个更大的背包。'],['Esta casa es más pequeña que aquella.','这座房子比那座小。']]},
 {id:'g13',title:'tener que：需要、必须做',es:'Tener que + infinitivo',summary:'tengo que estudiar · tiene que llevar',body:'tener que + 动词原形表示需要或必须做某事。tener 随主语变位，que 保留，后面的动词用原形。它与“拥有”的 tener + 名词不同：tengo un libro 是“我有一本书”；tengo que leer 是“我得阅读”。',examples:[['Tengo que estudiar hoy.','我今天得学习。'],['La sopa tiene que llevar agua.','汤里必须放水。']]},
 {id:'g14',title:'lo / la：用代词代替前文事物',es:'Pronombres de objeto',summary:'la olla → cubrirla · el libro → leerlo',body:'直接宾语代词 lo / la / los / las 可以代替前文提到的事物，通常与所指名词的性数一致。动词原形后可以连接代词：cubrir + la → cubrirla（盖住它，指阴性单数事物）。lo 也可以指一件事或一段内容，不能一律理解为“阳性名词”。',examples:[['La ventana está abierta. Voy a cerrarla.','窗户开着。我准备把它关上。'],['Tengo un libro y quiero leerlo.','我有一本书，想读它。']]},
 {id:'g15',title:'先认识条件式：gustaría / estaría',es:'El condicional',summary:'me gustaría… · faltaría… · estaría…',body:'条件式常见词尾是 -ía；规则形式是在动词原形后接 -ía、-ías、-ía、-íamos、-íais、-ían。它可表达愿望、礼貌语气或在某种设想下的结果。me gustaría + 原形常表示“我想做……”。具体含义依上下文判断，不要把所有 -ía 都当成条件式，因为未完成过去时也有相同结尾。',examples:[['Me gustaría viajar.','我想去旅行。'],['Con una mesa más, estaría todo listo.','再有一张桌子，一切就准备好了。']]},
 {id:'g16',title:'认识现在完成时',es:'Haber + participio',summary:'he aprendido · habéis aprendido',body:'现在完成时常用 haber 的现在时 + 过去分词构成。haber 的形式：he、has、ha、hemos、habéis、han。规则分词：-ar → -ado；-er / -ir → -ido。habéis aprendido 表示“你们已经学会了”；habéis 对应 vosotros/as，常见于西班牙。这里的分词不随主语性数改变。不同地区的时态使用习惯会有差异。',examples:[['He aprendido una palabra.','我学会了一个单词。'],['¿Habéis terminado?','你们完成了吗？']]}
);
const VERBS = {
 hablar:{meaning:'说；交谈',type:'规则 · -ar',forms:['hablo','hablas','habla','hablamos','habláis','hablan']},
 comer:{meaning:'吃',type:'规则 · -er',forms:['como','comes','come','comemos','coméis','comen']},
 vivir:{meaning:'居住；生活',type:'规则 · -ir',forms:['vivo','vives','vive','vivimos','vivís','viven']},
 ser:{meaning:'是',type:'不规则',forms:['soy','eres','es','somos','sois','son']},
 estar:{meaning:'在；处于',type:'不规则',forms:['estoy','estás','está','estamos','estáis','están']},
 tener:{meaning:'有',type:'不规则 · e → ie',forms:['tengo','tienes','tiene','tenemos','tenéis','tienen']},
 ir:{meaning:'去',type:'不规则',forms:['voy','vas','va','vamos','vais','van']},
 querer:{meaning:'想要；爱',type:'词干变化 · e → ie',forms:['quiero','quieres','quiere','queremos','queréis','quieren']},
 leer:{meaning:'读',type:'规则 · -er',forms:['leo','lees','lee','leemos','leéis','leen']},
 estudiar:{meaning:'学习',type:'规则 · -ar',forms:['estudio','estudias','estudia','estudiamos','estudiáis','estudian']}
};
const PERSONS = ['yo','tú','él / ella / usted','nosotros / nosotras','vosotros / vosotras','ellos / ellas / ustedes'];
const QUESTIONS = [
 ['Yo ___ estudiante.','soy','我是学生。','ser 的 yo 形式是 soy。身份通常用 ser。','ser 与 estar'],
 ['Madrid ___ en España.','está','马德里位于西班牙。','位置通常用 estar；Madrid 对应第三人称单数 está。','ser 与 estar'],
 ['Ella ___ en Madrid.','vive','她住在马德里。（vivir）','vivir 是规则 -ir 动词，第三人称单数词尾为 -e。','现在时变位'],
 ['Nosotros ___ español.','hablamos','我们说西班牙语。（hablar）','hablar 的 nosotros 形式为 hablamos。','现在时变位'],
 ['Me ___ los libros.','gustan','我喜欢书。','喜欢的对象 los libros 是复数，所以用 gustan。','gustar'],
 ['___ dos libros en la mesa.','Hay','桌上有两本书。','表达存在用 hay，单复数均不变化。','hay'],
 ['La casa es ___.','pequeña','这座房子很小。（pequeño）','casa 是阴性单数，形容词用 pequeña。','性数一致'],
 ['Yo ___ veinte años.','tengo','我二十岁。（tener）','西语表达年龄用 tener；yo 的变位是 tengo。','现在时变位'],
 ['Tú ___ una manzana.','comes','你吃一个苹果。（comer）','comer 的 tú 形式为 comes。','现在时变位'],
 ['Me ___ leer.','gusta','我喜欢阅读。','动词原形 leer 作喜欢的对象时用 gusta。','gustar'],
 ['El agua está ___.','fría','水是凉的。（frío）','agua 是阴性名词，即使用 el，形容词仍是阴性 fría。','阴阳性'],
 ['Ellos ___ a la biblioteca.','van','他们去图书馆。（ir）','ir 的第三人称复数形式为 van。','现在时变位']
].map((r,i)=>({id:`q${i}`,sentence:r[0],answer:r[1],hint:r[2],explanation:r[3],topic:r[4]}));
