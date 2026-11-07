/* Original practice activities. Reference: the learner's purchased course; PDFs stay private. */
const COURSE_UNITS = [
 {id:'u01',title:'问候与自我介绍',focus:'先建立联系，再说清自己是谁。',lessons:[['问候、回应与求助','2190936125'],['介绍自己','2190936127'],['个人信息','2190936126']],category:'2158456386',ready:true},
 {id:'u02',title:'现在时与想做的事',focus:'想做什么、为什么做，以及常用动词与介词。',lessons:[['意愿与原因','2191389571'],['现在时','2191597211'],['动词与介词','2191628241']],category:'2158456387'},
 {id:'u03',title:'地点与天气',focus:'描述地方，区分 ser、estar 与 hay。',lessons:[['描述地点','2191730944'],['天气与提问','2191731146'],['最高级、冠词、muy 与 mucho','2191731238']],category:'2158456388'},
 {id:'u04',title:'购物',focus:'从物品、颜色和指示词，到问价格和尺码。',lessons:[['衣物与日常物品','2191879168'],['指示词与价格','2191881568'],['购物对话','2191882150']],category:'2158456389'},
 {id:'u05',title:'人物、喜好与家庭',focus:'描述别人，表达喜欢，连接家庭关系。',lessons:[['描述人物','2192039861'],['喜欢与不喜欢','2192040005'],['家庭关系','2192044257']],category:'2158732759'},
 {id:'u06',title:'时间与日常',focus:'星期、时间、日常动作与自复动词。',lessons:[['星期与日常生活','2192245595'],['时间和动作','2192246220'],['描述一天','2192246747']],category:'2158786940'},
 {id:'u07',title:'饮食与餐厅',focus:'看菜单、点餐，介绍食物与配料。',lessons:[['食物与菜单','2192419359'],['点餐','2192419452'],['传统菜肴','2192419490']],category:'2158832970'},
 {id:'u08',title:'街区与问路',focus:'认识附近设施，问路并描述所在街区。',lessons:[['附近地点与服务','2192974383'],['问路与指路','2192974456'],['描述街区','2192974488']],category:'2158963857'},
 {id:'u09',title:'个性、经历与A1回顾',focus:'按原课程安排，描述个性、谈经历，并回顾A1。',lessons:[['个性与优缺点','2193000641'],['经历、完成时、saber 与 poder','2193000698'],['A1 回顾与下一步','2193000720']],category:'2158969937'}
];
const COURSE_BASE='https://www.masterspanishacademy.com/products/from-zero-to-spanish-hero-2-0';
const GRAMMAR_GROUPS={
 '交际与句型':['g5','g7','g17','g18'],
 '句子与连接':['g19','g2','g4','g8','g10','g11','g13','g14'],
 '词形与配合':['g20','g1','g3','g6','g12'],
 '时态初识':['g15','g16']
};
const STARTER_EXPRESSIONS = [
 ['hola','你好','问候与表达','打招呼','Hola, soy Lin.','你好，我是林。'],
 ['buenos días','早上好','问候与表达','打招呼','Buenos días, profesora.','老师，早上好。'],
 ['buenas tardes','下午好','问候与表达','打招呼','Buenas tardes, ¿cómo está?','下午好，您好吗？'],
 ['buenas noches','晚上好；晚安','问候与表达','打招呼','Buenas noches, hasta mañana.','晚安，明天见。'],
 ['¿Qué tal?','最近怎么样？','问候与表达','问候回应','Hola, ¿qué tal?','你好，最近怎么样？'],
 ['¿Cómo estás?','你好吗？','问候与表达','问候回应','¿Cómo estás, Pablo?','巴勃罗，你好吗？'],
 ['¿Cómo está?','您好吗？','问候与表达','礼貌表达','Buenas tardes, ¿cómo está?','下午好，您好吗？'],
 ['bien, gracias','很好，谢谢','问候与表达','问候回应','Estoy bien, gracias.','我很好，谢谢。'],
 ['me llamo','我叫……','问候与表达','介绍自己','Me llamo Lin. ¿Y tú?','我叫林。你呢？'],
 ['¿Cómo te llamas?','你叫什么名字？','问候与表达','介绍自己','Hola, ¿cómo te llamas?','你好，你叫什么名字？'],
 ['mucho gusto','很高兴认识你','问候与表达','礼貌表达','Me llamo Lin. Mucho gusto.','我叫林。很高兴认识你。'],
 ['hasta luego','回头见','问候与表达','告别','Gracias. Hasta luego.','谢谢，回头见。'],
 ['hasta mañana','明天见','问候与表达','告别','Hasta mañana, profesora.','老师，明天见。'],
 ['no entiendo','我没听懂；我不明白','问候与表达','求助澄清','Perdona, no entiendo.','不好意思，我没听懂。'],
 ['¿Puedes repetir?','你能再说一遍吗？','问候与表达','求助澄清','¿Puedes repetir, por favor?','你能再说一遍吗？'],
 ['¿Qué significa…?','……是什么意思？','问候与表达','求助澄清','¿Qué significa «mochila»?','mochila 是什么意思？'],
 ['¿Cómo se dice…?','……怎么说？','问候与表达','求助澄清','¿Cómo se dice esto en español?','这个用西语怎么说？'],
 ['el cuaderno','笔记本','课堂与学习','课堂物品','Escribo en el cuaderno.','我在笔记本里写字。'],
 ['el bolígrafo','圆珠笔','课堂与学习','课堂物品','Necesito un bolígrafo.','我需要一支圆珠笔。'],
 ['la mesa','桌子','课堂与学习','课堂物品','El libro está en la mesa.','书在桌上。'],
 ['la silla','椅子','课堂与学习','课堂物品','Hay una silla aquí.','这里有一把椅子。'],
 ['la mochila','背包','课堂与学习','课堂物品','Mi mochila es azul.','我的背包是蓝色的。']
];
const U01_PRACTICE = [
 {id:'p01',label:'看情境，先选一句',prompt:'下午去第一次见面的老师办公室，你会怎样开口？',choices:['Buenas tardes, ¿cómo está?','Hasta mañana.','Me gustan los libros.'],answer:'Buenas tardes, ¿cómo está?',why:'先按时间问候，再用礼貌的 ¿cómo está?。这是原课程主题的原创情境题。'},
 {id:'p02',label:'恢复语序',prompt:'把 [Lin] [me llamo] 排成“我叫林”。',answer:'Me llamo Lin.',hint:'先放“我叫”，再放名字。',why:'me llamo 是介绍自己名字的完整词块，名字放在后面。'},
 {id:'p03',label:'每次只换一个条件',prompt:'把 ¿Cómo estás? 换成对陌生长辈更礼貌的问法。',answer:'¿Cómo está?',hint:'先保留 cómo，只改变动词的人称形式。',why:'对 tú 常说 estás；对 usted 常用第三人称单数 está。两者的重音都要保留。'},
 {id:'p04',label:'把求助说出来',prompt:'没听懂对方的话，想请“你”重复一次。填写：¿Puedes ___?',answer:'repetir',hint:'这里需要“重复”的动词原形。',why:'puedes 是 poder 的变位；它后面的 repetir 保持原形。'},
 {id:'p05',label:'不用提示，再回想一次',prompt:'“明天见”怎么说？',answer:'Hasta mañana.',hint:'Hasta…',why:'hasta mañana 是告别词块；mañana 的 ñ 需要保留。'}
];
GRAMMAR.push(
 {id:'g17',title:'问候中的 tú 与 usted',es:'¿Cómo estás? / ¿Cómo está?',summary:'先辨认关系，再选择自然的问候',body:'和熟悉的人交谈，常用 tú 对应的 ¿Cómo estás?。使用 usted 表达礼貌时，常用 ¿Cómo está?。礼貌程度与具体国家、关系和场合有关，不必把年龄当作唯一规则。问候时段也随当地习惯变化；不要死记全球统一的小时分界。Buenas noches 既可以用于晚间见面，也可以用于告别或就寝。',examples:[['Hola, ¿cómo estás?','你好，你好吗？'],['Buenas tardes, ¿cómo está?','下午好，您好吗？']]},
 {id:'g18',title:'听不懂时，用句型澄清',es:'¿Qué significa…? / ¿Puedes repetir?',summary:'问词义、问说法、请对方重复',body:'¿Qué significa…? 用来问某个词是什么意思；¿Cómo se dice… en español? 用来问某种意思用西语怎么表达。¿Puedes repetir? 是请求对方重复，puedes 后接动词原形 repetir。先把这些表达作为完整词块练熟，可以减少临时组句的负担。',examples:[['¿Qué significa «cuaderno»?','cuaderno 是什么意思？'],['¿Puedes repetir, por favor?','你能再说一遍吗？']]}
);

GRAMMAR.push(
 {id:'g19',title:'先找主干，再加修饰',es:'Sujeto, verbo y complementos',summary:'词性是词的类别，句子成分是它在这句话里的工作',body:'先找变位动词，再判断主语和动词需要的补语。西语主语可以省略，也可以放在动词后。不要把动词后面的所有名词都看作宾语：Caben los ingredientes 中，los ingredientes 是主语。系动词 ser/estar 后可以接表语；hay 的存在用法没有普通人称主语。时间、地点、目的等成分补充信息，位置可以变化，不必套固定的“主语—时间—地点—动词—宾语”顺序。字幕片段要连着上下句看。',examples:[['Yo preparo la comida en casa.','我在家做饭：主语 + 谓语 + 宾语 + 地点。'],['Caben los ingredientes.','食材放得下：谓语在前，主语在后。']]},
 {id:'g20',title:'名词从哪些角度分类？',es:'Clases de sustantivos',summary:'阴阳性、数量、含义类型和主题分别记录',body:'名词可以按普通／专有、具体／抽象、可数／不可数、集合等不同维度描述，并另外记录阴阳性和单复数。这些维度可以交叉，不能当成互相排斥的一列选项。可数性还会随词义变化：café 可指咖啡这种饮品，也可指一杯咖啡或一家咖啡馆。主题标签帮助检索，例如食物、厨房或交通；主题不是语法类别。',examples:[['una zanahoria / dos zanahorias','胡萝卜：普通、具体、可数、阴性；可归食物主题。'],['agua / un vaso de agua','水常用不可数用法；一杯是数量容器，agua 仍是阴性。']]}
);
