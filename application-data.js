/* Authored, short daily-life prompts. Each blank has an explicit meaning or form constraint. */
(function(root){
  'use strict';
  const groups=[
    {id:'nouns',title:'名词与修饰',question:'名词怎样配冠词和形容词？',mark:'el / la',ids:['g1','g20','g6','g12']},
    {id:'verbs',title:'动词与时态',question:'动词怎样随人称和时间变化？',mark:'yo →',ids:['g3','g2','g9','g15','g16']},
    {id:'sentence',title:'句子结构与代词',question:'一句话怎样搭起来、怎样指代？',mark:'S + V',ids:['g19','g4','g14']},
    {id:'patterns',title:'常用句型',question:'想做、能做、喜欢和必须怎样说？',mark:'quiero…',ids:['g5','g7','g8','g10','g11','g13']},
    {id:'social',title:'交际表达',question:'见面、问候和听不懂时怎样说？',mark:'¿qué?',ids:['g17','g18']}
  ];
  const bank={};
  function set(id,rows){bank[id]=rows.map((r,i)=>({id:`${id}_${i+1}`,scene:r[0],prompt:r[1],sentence:r[2],answers:Array.isArray(r[3])?r[3]:[r[3]],hint:r[4],why:r[5],grammarIds:[id],mode:'transfer'}));}
  set('g1',[
    ['咖啡馆','补上“牛奶”的定冠词。','___ leche está fría.','La','leche 是阴性单数。','leche 是阴性单数名词，定冠词用 la。'],
    ['收拾桌面','补上“书”的定冠词。','___ libro está aquí.','El','libro 是阳性单数。','el 与阳性单数 libro 配合。'],
    ['准备饮料','补上“水”的定冠词。','___ agua está fría.','El','agua 虽是阴性，单数紧邻时有特殊冠词形式。','agua 是阴性，单数紧邻重读 a 开头时通常用 el；形容词仍用 fría。'],
    ['逛超市','把“苹果”的复数定冠词填进去。','___ manzanas son rojas.','Las','manzanas 是阴性复数。','la manzana 变复数是 las manzanas。']
  ]);
  set('g20',[
    ['点饮料','说“一杯水”，补上容器词“杯”。','Quiero un ___ de agua.','vaso','数量落在杯子这个容器上。','agua 常作不可数用法，可以用 un vaso de agua 表达一杯水。'],
    ['列购物单','说“三个苹果”，补上 manzana 的正确形式。','Compro tres ___.','manzanas','数词 tres 后面要复数。','这里按个计数，manzana 用复数 manzanas。'],
    ['做早餐','说“一点牛奶”，补上连接词。','Necesito un poco ___ leche.','de','记住完整词块 un poco de。','un poco de + 不可数名词，表示一点……。'],
    ['咖啡馆','说“两杯咖啡”，补上 café 的形式。','Quiero dos ___.','cafés','这里按杯数计算，需要复数，重音保留。','café 指一杯咖啡时可以计数：dos cafés。']
  ]);
  set('g6',[
    ['看房子','用 pequeño 填空：这座房子很小。','La casa es ___.','pequeña','casa 是阴性单数。','pequeño 与 casa 配合，改为 pequeña。'],
    ['买水果','用 rojo 填空：这些苹果是红色的。','Las manzanas son ___.','rojas','要同时检查性别和数量。','manzanas 是阴性复数，形容词用 rojas。'],
    ['收拾书架','用 pequeño 填空：这些书很小。','Los libros son ___.','pequeños','libros 是阳性复数。','形容词与阳性复数 libros 保持一致。'],
    ['挑外套','用 grande 填空：这两件外套很大。','Las dos chaquetas son ___.','grandes','grande 不分阴阳性，但要变复数。','grande 的复数是 grandes。']
  ]);
  set('g12',[
    ['选背包','说“我需要一个更大的背包”，补上“更”。','Necesito una mochila ___ grande.','más','比较级里的“更”有重音。','más + 形容词表示更……。'],
    ['租房','说“这座房子比那座更小”，补上“比”。','Esta casa es más pequeña ___ aquella.','que','比较对象由 que 引出。','más + 形容词 + que，构成比较。'],
    ['买东西','说“这本书更便宜”，补上“更”。','Este libro es ___ barato.','más','这里比较便宜的程度。','más barato 是更便宜，注意 más 的重音。'],
    ['比较价格','说“这杯咖啡没那么贵”，补上“较不”。','Este café es ___ caro.','menos','menos + 形容词表示程度较低。','menos caro 是没那么贵。']
  ]);
  set('g3',[
    ['下班后','用 estudiar 的现在时：我晚上学习。','Yo ___ por la noche.','estudio','-ar 动词的 yo 词尾是 -o。','estudiar → estudio，主语是 yo。'],
    ['介绍朋友','用 vivir 的现在时：她住在这里。','Ella ___ aquí.','vive','-ir 动词的第三人称单数用 -e。','vivir → vive，与 ella 配合。'],
    ['约午饭','用 comer 的现在时：我们在家吃饭。','Nosotros ___ en casa.','comemos','-er 动词的 nosotros 词尾是 -emos。','comer → comemos。'],
    ['聊天','用 hablar 的现在时：你说西语。','Tú ___ español.','hablas','-ar 动词的 tú 词尾是 -as。','hablar → hablas。']
  ]);
  set('g2',[
    ['认识新同事','我是学生，选 ser / estar 的正确形式。','Yo ___ estudiante.','soy','说身份，用 ser。','yo 对应 ser 的形式是 soy。'],
    ['找钥匙','钥匙在桌上，选 ser / estar 的正确形式。','Las llaves ___ en la mesa.','están','说明物品位置，用 estar；主语是复数。','las llaves 是复数，所以用 están。'],
    ['回到家','我在家，选 ser / estar 的正确形式。','Yo ___ en casa.','estoy','estar 的 yo 形式。','位置用 estar，yo 对应 estoy。'],
    ['介绍家人','她是老师，选 ser / estar 的正确形式。','Ella ___ profesora.','es','身份说明用 ser。','ella 对应 ser 的形式是 es。']
  ]);
  set('g9',[
    ['午饭前','用 tener：我饿了。','Yo ___ hambre.','tengo','tener hambre 是固定表达。','表达饥饿用 tener hambre，yo 对应 tengo。'],
    ['介绍家人','用 tener：我的妹妹十岁。','Mi hermana ___ diez años.','tiene','年龄用 tener；主语相当于 ella。','tiene diez años，不用 ser。'],
    ['准备出门','用 tener：我们有两张票。','Nosotros ___ dos billetes.','tenemos','主语是我们。','tener 的 nosotros 形式是 tenemos。'],
    ['问朋友','用 tener：你有时间吗？','¿Tú ___ tiempo?','tienes','主语是 tú。','tener 的 tú 形式是 tienes。']
  ]);
  set('g15',[
    ['咖啡馆','用 gustar 的条件式：我想来杯咖啡。','Me ___ un café.','gustaría','单数 café 搭配第三人称单数条件式。','me gustaría 是委婉表达；咖啡是让人喜欢的东西。'],
    ['周末安排','用 gustar 的条件式：我们想在家吃饭。','Nos ___ comer en casa.','gustaría','不定式短语作主语，用单数形式。','想做的事是 comer en casa；nos 表示想要的人是我们。'],
    ['安排休息','用 estar 的条件式：有更多时间，我会待在家。','Con más tiempo, yo ___ en casa.','estaría','estar + 条件式词尾 -ía。','estar 的 yo 条件式是 estaría。'],
    ['收尾','用 estar 的条件式说“这样就好了”。','Y ya ___.','estaría','这是听说素材里出现过的收尾说法。','ya estaría 可以委婉地表示这样就好了。']
  ]);
  set('g16',[
    ['今天的学习','用 haber：我今天已经学过了。','Hoy ___ estudiado.','he','主语是省略的 yo。','现在完成时由 haber 的变位 + 过去分词组成。'],
    ['问朋友','用 haber：你读过这本书吗？','¿___ leído este libro?','Has','这里指 tú。','tú 对应 has，后面的 leído 保持过去分词。'],
    ['午饭后','用 haber：我们已经吃过了。','Ya ___ comido.','hemos','我们对应 nosotros。','nosotros 对应 hemos。'],
    ['回顾课程','用 haber：你们（vosotros）已经学会了。','Vosotros ___ aprendido.','habéis','保留 vosotros 形式的重音。','vosotros 对应 habéis；aprendido 不随人称变化。']
  ]);
  set('g19',[
    ['做晚饭','补出明确的主语“我”。','___ preparo la cena.','Yo','preparo 已经体现第一人称单数。','这里要求写出 yo；自然西语里主语 yo 也可以省略。'],
    ['整理厨房','用 caber：这些食材放得下。','___ los ingredientes.','Caben','主语放在动词后面，而且是复数。','los ingredientes 是主语，决定用复数 caben。'],
    ['在家做饭','补上地点介词：我在家做饭。','Preparo la cena ___ casa.','en','en casa 是地点词块。','先看 preparo la cena，en casa 补充地点。'],
    ['介绍物品','用 ser：这口锅很小。','La olla ___ pequeña.','es','这里是主语 + 系动词 + 表语。','pequeña 是表语，说明 olla 的尺寸特征。']
  ]);
  set('g4',[
    ['找座位','说“这里有一把椅子”。','___ una silla aquí.','Hay','介绍某处有什么。','存在用法用 hay。'],
    ['书桌旁','说“桌上有两本书”。','En la mesa ___ dos libros.','hay','后面复数不会让 hay 变形。','hay 是非人称存在用法，不随 dos libros 变复数。'],
    ['逛街','说“附近有一家咖啡馆”。','___ un café cerca.','Hay','这是首次介绍附近有什么。','hay 引入新事物。'],
    ['超市门口','说“今天没有牛奶”。','Hoy no ___ leche.','hay','否定 no 放在 hay 前。','no hay leche 表示没有牛奶。']
  ]);
  set('g14',[
    ['收拾厨房','la olla 指这口锅：我想把它盖住。','Quiero cubrir___.','la','olla 是阴性单数，代词连在不定式后。','cubrir + la → cubrirla。'],
    ['看书','el libro 指这本书：我想读它。','Quiero leer___.','lo','libro 是阳性单数。','leer + lo → leerlo。'],
    ['开窗','las ventanas 指这些窗：我想打开它们。','Quiero abrir___.','las','las ventanas 是阴性复数。','不定式后接 las，构成 abrirlas。'],
    ['买水果','los tomates 指这些西红柿：我想买它们。','Quiero comprar___.','los','tomates 是阳性复数。','comprar + los → comprarlos。']
  ]);
  set('g5',[
    ['聊饮食','补上“她”的间接宾语代词：她喜欢咖啡。','A ella ___ gusta el café.','le','a ella 对应 le。','a ella 说明是谁，仍需要 le。'],
    ['认识朋友','补上“他们”的代词：他们喜欢读书。','A ellos ___ gusta leer.','les','a ellos 对应复数代词 les。','喜欢的人是复数，用 les；leer 这件事仍搭配单数 gusta。'],
    ['买水果','用 gustar 的现在时：我喜欢西红柿。','Me ___ los tomates.','gustan','喜欢的东西是复数。','los tomates 决定用 gustan，不由 me 决定。'],
    ['聊周末','用 gustar 的现在时：我喜欢做饭。','Me ___ cocinar.','gusta','不定式作主语，通常用单数。','cocinar 表示做饭这件事，搭配 gusta。']
  ]);
  set('g7',[
    ['第一次见面','用 llamarse：我叫 Ana。','Me ___ Ana.','llamo','me 对应 yo。','llamarse 的第一人称搭配是 me llamo。'],
    ['认识同事','用 llamarse：你叫什么名字？','¿Cómo te ___?','llamas','te 对应 tú。','tú 对应 te llamas。'],
    ['介绍朋友','用 llamarse：我的朋友叫 Pablo。','Mi amigo se ___ Pablo.','llama','主语相当于 él。','第三人称单数是 se llama。'],
    ['介绍自己','填完整词块“我叫”，接上 Lin。','___ Lin.','Me llamo','代词和动词一起写。','me llamo 可以整体记，后面换成自己的名字。']
  ]);
  set('g8',[
    ['去买菜','说“我去市场”，补上 a + el 的合并形式。','Voy ___ mercado.','al','a 与 el 需要合并。','a + el → al。'],
    ['下班后','用 ir 的现在时：我打算学习。','Yo ___ a estudiar.','voy','yo 对应 voy。','voy a + 不定式，表示打算做什么。'],
    ['约午饭','用 ir 的现在时：我们准备吃饭。','Nosotros ___ a comer.','vamos','主语是 nosotros。','ir 的 nosotros 形式是 vamos。'],
    ['出门前','用 ir 的现在时：她去咖啡馆。','Ella ___ a un café.','va','第三人称单数。','这里 a 后面是地点 un café，不是近未来结构。']
  ]);
  set('g10',[
    ['想学西语','用 aprender 的恰当形式：她想学西语。','Ella quiere ___ español.','aprender','quiere 已变位，后一个动词保留原形。','querer + 不定式；不要把两个动词都按 ella 变位。'],
    ['准备晚饭','用 preparar 的恰当形式：我需要准备晚餐。','Necesito ___ la cena.','preparar','necesito 后接不定式。','necesitar + preparar。'],
    ['借笔记本','用 usar 的恰当形式：我能用这本笔记本吗？','¿Puedo ___ este cuaderno?','usar','puedo 负责变位。','poder 后面的 usar 保持不定式。'],
    ['周末安排','用 querer 的现在时：我们想在家吃饭。','Nosotros ___ comer en casa.','queremos','先变第一个动词，comer 不变。','nosotros 对应 queremos。']
  ]);
  set('g11',[
    ['记笔记','补上用途介词：我用笔记本来写字。','Uso el cuaderno ___ escribir.','para','“用来做什么”常用 para + 不定式。','para escribir 说明用途。'],
    ['学习安排','用 aprender 的恰当形式：我学习是为了学会。','Estudio para ___.','aprender','para 后接动词原形。','目的结构里不把 aprender 改为 aprendo。'],
    ['准备食材','补上用途介词：我需要一把刀来切东西。','Necesito un cuchillo ___ cortar.','para','这里要说明工具用途。','para cortar 说明刀的用途。'],
    ['去上班','用 trabajar 的恰当形式：我需要时间来工作。','Necesito tiempo para ___.','trabajar','介词 para 后保留不定式。','para trabajar 表示为了工作。']
  ]);
  set('g13',[
    ['今天的安排','补上连接词：我今天必须工作。','Hoy tengo ___ trabajar.','que','固定结构是 tener que。','tener que + 不定式，que 不能省。'],
    ['准备出门','用 tener 的现在时：她必须带水。','Ella ___ que llevar agua.','tiene','主语 ella 对应第三人称单数。','tiene 负责变位，llevar 保持原形。'],
    ['复习计划','用 estudiar 的恰当形式：我们必须学习。','Tenemos que ___.','estudiar','后一个动词不再按 nosotros 变位。','tenemos que estudiar。'],
    ['问朋友','用 tener 的现在时：你必须走吗？','¿Tú ___ que ir?','tienes','主语 tú。','tener 的 tú 形式是 tienes。']
  ]);
  set('g17',[
    ['见到朋友','明确对 tú 说：你好吗？','¿Cómo ___?','estás','tú 对应带 s 的形式。','estás 与 tú 配合，重音不能漏。'],
    ['拜访老师','明确对 usted 说：您好吗？','¿Cómo ___?','está','usted 用第三人称单数形式。','usted 对应 está，注意重音。'],
    ['早上到办公室','补上“早上好”中的名词。','Buenos ___.','días','día 的复数保留重音。','buenos días 是早间问候词块。'],
    ['下午见面','补上“下午好”中的名词。','Buenas ___.','tardes','tarde 在问候里用复数。','buenas tardes 是下午的问候。']
  ]);
  set('g18',[
    ['没听清点餐','用 repetir 的恰当形式：你能重复吗？','¿Puedes ___, por favor?','repetir','puedes 后接不定式。','puedes repetir 是请对方重复的表达。'],
    ['看到新单词','补上“意思是”：mochila 是什么意思？','¿Qué ___ «mochila»?','significa','以一个词为主语，用第三人称单数。','¿Qué significa…? 用来问词义。'],
    ['不知道怎么说','补上“说”：这个用西语怎么说？','¿Cómo se ___ esto en español?','dice','完整词块是 cómo se dice。','¿Cómo se dice…? 用来问说法。'],
    ['请同事慢一点','补上“我不明白”里的动词。','No ___.','entiendo','这是 entender 的 yo 形式。','no entiendo 是可以先整体记住的求助表达。']
  ]);
  // Sentences use the present tense and one explicit subject, so only one form changes.
  const frames={
    ser:[['yo','认识新同事','Yo ___ estudiante.','我是学生。'],['él / ella / usted','介绍朋友','Ella ___ profesora.','她是老师。'],['nosotros/as','聊天','Nosotros ___ amigos.','我们是朋友。'],['tú','认识邻居','Tú ___ mi vecino.','你是我的邻居。']],
    estar:[['yo','回到家','Yo ___ en casa.','我在家。'],['él / ella / usted','找朋友','Ella ___ en el café.','她在咖啡馆。'],['nosotros/as','下班后','Nosotros ___ aquí.','我们在这里。'],['ellos / ellas / ustedes','找钥匙','Las llaves ___ en la mesa.','钥匙在桌上。']],
    tener:[['yo','午饭前','Yo ___ hambre.','我饿了。'],['él / ella / usted','介绍家人','Ella ___ un gato.','她有一只猫。'],['nosotros/as','去看电影','Nosotros ___ dos entradas.','我们有两张票。'],['tú','约朋友','¿Tú ___ tiempo hoy?','你今天有空吗？']],
    ir:[['yo','去买菜','Yo ___ al mercado.','我去市场。'],['él / ella / usted','上班前','Ella ___ al trabajo.','她去上班。'],['nosotros/as','周末出门','Nosotros ___ al parque.','我们去公园。'],['tú','邀约','¿Tú ___ al café?','你去咖啡馆吗？']],
    querer:[['yo','点饮料','Yo ___ un café.','我想要一杯咖啡。'],['tú','邀请朋友','¿Tú ___ comer aquí?','你想在这里吃吗？'],['él / ella / usted','聊计划','Ella ___ aprender español.','她想学西语。'],['nosotros/as','周末安排','Nosotros ___ descansar.','我们想休息。']],
    poder:[['yo','借东西','¿Yo ___ usar este libro?','我能用这本书吗？'],['tú','没听清','¿Tú ___ repetir?','你能重复吗？'],['él / ella / usted','约见面','Ella ___ venir hoy.','她今天能来。'],['nosotros/as','约午饭','Nosotros ___ comer aquí.','我们可以在这里吃。']],
    poner:[['yo','收拾书桌','Yo ___ el libro aquí.','我把书放这里。'],['tú','准备餐桌','Tú ___ los vasos.','你摆杯子。'],['él / ella / usted','找手机','Ella ___ el móvil aquí.','她把手机放这里。'],['nosotros/as','准备出门','Nosotros ___ todo aquí.','我们把东西都放这里。']],
    caber:[['yo','一起乘车','Yo ___ en el coche.','车里能坐下我。'],['él / ella / usted','收拾背包','El libro ___ en la mochila.','书放得进背包。'],['ellos / ellas / ustedes','整理书架','Los libros ___ aquí.','这些书放得下。'],['nosotros/as','出门坐车','Nosotros ___ en el coche.','车里能坐下我们。']],
    oler:[['él / ella / usted','餐厅里','La sopa ___ bien.','汤闻起来很好。'],['ellos / ellas / ustedes','花店里','Las flores ___ bien.','花闻起来很好。'],['yo','喝咖啡前','Yo ___ el café.','我闻一闻咖啡。']],
    haber:[['yo','学完一小段','Yo ___ aprendido algo.','我已经学到一点东西。'],['tú','问朋友','¿Tú ___ leído el libro?','你读过这本书吗？'],['nosotros/as','吃完午饭','Nosotros ___ comido.','我们已经吃过了。'],['vosotros/as','回顾课程','Vosotros ___ estudiado hoy.','你们今天已经学过了。']],
    llamarse:[['yo','介绍自己','Yo ___ Ana.','我叫 Ana。'],['tú','认识朋友','¿Tú cómo ___?','你叫什么名字？'],['él / ella / usted','介绍同事','Ella ___ Lucía.','她叫 Lucía。'],['nosotros/as','介绍两个人','Nosotros ___ Ana y Pablo.','我们叫 Ana 和 Pablo。']],
    hablar:[['yo','认识朋友','Yo ___ español.','我说西语。'],['tú','电话聊天','Tú ___ con Ana.','你和 Ana 交谈。'],['nosotros/as','午休','Nosotros ___ un poco.','我们聊一会儿。']],
    comer:[['yo','上班午饭','Yo ___ en casa.','我在家吃饭。'],['él / ella / usted','点餐','Ella ___ una sopa.','她喝一份汤。'],['nosotros/as','约午饭','Nosotros ___ aquí.','我们在这里吃。']],
    vivir:[['yo','认识邻居','Yo ___ aquí.','我住这里。'],['él / ella / usted','介绍朋友','Ella ___ en Madrid.','她住马德里。'],['nosotros/as','聊住处','Nosotros ___ cerca.','我们住得近。']],
    leer:[['yo','睡前','Yo ___ un libro.','我读一本书。'],['tú','看菜单','Tú ___ el menú.','你看菜单。'],['nosotros/as','学西语','Nosotros ___ en español.','我们用西语阅读。']],
    estudiar:[['yo','下班后','Yo ___ español.','我学西语。'],['él / ella / usted','聊日程','Ella ___ por la noche.','她晚上学习。'],['nosotros/as','图书馆','Nosotros ___ aquí.','我们在这里学习。']],
    aprender:[['yo','每天一点','Yo ___ una palabra.','我学一个词。'],['tú','聊学习','Tú ___ español.','你学西语。'],['nosotros/as','一起复习','Nosotros ___ poco a poco.','我们一点一点地学。']],
    trabajar:[['yo','介绍自己','Yo ___ aquí.','我在这里工作。'],['él / ella / usted','问同事','Ella ___ en casa.','她在家工作。'],['nosotros/as','聊周末','Nosotros ___ hoy.','我们今天工作。']],
    necesitar:[['yo','准备出门','Yo ___ agua.','我需要水。'],['tú','借东西','Tú ___ un bolígrafo.','你需要一支笔。'],['nosotros/as','安排学习','Nosotros ___ tiempo.','我们需要时间。']],
    usar:[['yo','上班记笔记','Yo ___ un cuaderno.','我用一本笔记本。'],['tú','写字','Tú ___ un bolígrafo.','你用一支笔。'],['nosotros/as','一起学习','Nosotros ___ este libro.','我们用这本书。']],
    preparar:[['yo','上班前','Yo ___ el desayuno.','我准备早餐。'],['él / ella / usted','点饮料','Ella ___ un café.','她准备一杯咖啡。'],['nosotros/as','周末在家','Nosotros ___ la cena.','我们准备晚饭。']],
    llevar:[['yo','出门前','Yo ___ una mochila.','我背一个背包。'],['tú','去上课','Tú ___ un cuaderno.','你带一本笔记本。'],['nosotros/as','周末出游','Nosotros ___ agua.','我们带水。']],
    cocinar:[['yo','下班后','Yo ___ en casa.','我在家做饭。'],['él / ella / usted','朋友来访','Ella ___ hoy.','她今天做饭。'],['nosotros/as','周末在家','Nosotros ___ juntos.','我们一起做饭。']],
    remover:[['yo','喝饮料','Yo ___ el café.','我搅拌咖啡。'],['él / ella / usted','准备晚饭','Ella ___ la sopa.','她搅拌汤。'],['nosotros/as','一起做饭','Nosotros ___ el arroz.','我们翻拌米饭。']],
    tapar:[['yo','收拾厨房','Yo ___ la olla.','我盖上锅。'],['tú','饭后','Tú ___ la comida.','你把食物盖起来。'],['nosotros/as','准备晚饭','Nosotros ___ la sopa.','我们把汤盖上。']],
    cubrir:[['yo','出门前','Yo ___ la comida.','我把食物盖住。'],['él / ella / usted','收拾房间','Ella ___ la mesa.','她盖住桌面。'],['nosotros/as','准备午餐','Nosotros ___ la sopa.','我们把汤盖住。']],
    pelar:[['yo','准备早餐','Yo ___ una manzana.','我给一个苹果削皮。'],['tú','做晚饭','Tú ___ las patatas.','你给土豆削皮。'],['nosotros/as','一起做饭','Nosotros ___ las zanahorias.','我们给胡萝卜削皮。']],
    cortar:[['yo','午饭前','Yo ___ el pan.','我切面包。'],['él / ella / usted','准备水果','Ella ___ una manzana.','她切一个苹果。'],['nosotros/as','一起做饭','Nosotros ___ las patatas.','我们切土豆。']],
    faltar:[['él / ella / usted','找物品','___ una silla.','少一把椅子。'],['ellos / ellas / ustedes','整理书桌','___ dos libros.','少了两本书。'],['él / ella / usted','做晚饭','___ un ingrediente.','少一种食材。']]
  };
  const expressions={
    'hola':[['见新同事','打招呼，说“你好”。','___, soy Ana.','Hola'],['见到邻居','打招呼，说“你好”。','___, Pablo.','Hola'],['走进教室','说“你好，很高兴认识你”。','___. Mucho gusto.','Hola']],
    'buenos días':[['早上上班','补全“早上好”。','___, Ana.','Buenos días'],['早上上课','向老师说“早上好”。','___, profesora.','Buenos días'],['早上进咖啡馆','先说“早上好”。','___. Un café, por favor.','Buenos días']],
    'buenas tardes':[['下午见老师','说“下午好”。','___. ¿Cómo está?','Buenas tardes'],['下午到办公室','说“下午好”。','___, Ana.','Buenas tardes'],['下午见邻居','说“下午好”。','___. ¿Qué tal?','Buenas tardes']],
    'buenas noches':[['晚上见面','说“晚上好”。','___, Ana.','Buenas noches'],['睡前','说“晚安，明天见”。','___. Hasta mañana.','Buenas noches'],['晚间告别','说“晚安”。','___, Pablo.','Buenas noches']],
    'hasta luego':[['午休后告别','说“回头见”。','Gracias. ___.','Hasta luego'],['离开咖啡馆','说“回头见”。','___. Gracias.','Hasta luego'],['朋友暂时离开','说“回头见”。','___, Ana.','Hasta luego']],
    'hasta mañana':[['下班告别','说“明天见”。','___, Ana.','Hasta mañana'],['下课后','向老师说“明天见”。','___, profesora.','Hasta mañana'],['睡前','补上“明天见”。','Buenas noches. ___.','Hasta mañana']],
    'mucho gusto':[['认识新朋友','说“很高兴认识你”。','Me llamo Ana. ___.','Mucho gusto'],['新同事自我介绍','回应“很高兴认识你”。','Hola, Pablo. ___.','Mucho gusto'],['朋友介绍伙伴','说“很高兴认识你”。','___. Soy Lin.','Mucho gusto']],
    'no entiendo':[['没听清点餐','说“我没听懂”。','Perdona, ___.','no entiendo'],['开会没听懂','说“我不明白”。','___. ¿Puedes repetir?','No entiendo'],['上课求助','说“我没听懂”。','Profesora, ___.','no entiendo']],
    'bien, gracias':[['朋友问候','回答“很好，谢谢”。','Estoy ___.','bien, gracias'],['同事问候','回答“很好，谢谢”。','___. ¿Y tú?','Bien, gracias'],['老师问候','回答“很好，谢谢”。','___. ¿Y usted?','Bien, gracias']]
  };
  const api={groups,bank,frames,expressions};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroApplicationData=api;
})(typeof window!=='undefined'?window:globalThis);
