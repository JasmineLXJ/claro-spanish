(function(root,factory){const data=factory();if(typeof module==='object')module.exports=data;else root.ClaroTopic=data;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const line=(speaker,es,zh,en)=>({speaker,es,zh,en});
  const scenes=[
    {id:'order',title:'先点一杯咖啡',caption:'Jasmine 第一次来到巴塞罗那，走进 Wendy 的咖啡店。',lines:[
      line('Jasmine','¡Buenos días!','早上好！','Good morning!'),
      line('Wendy','¡Buenos días!','早上好！','Good morning!'),
      line('Wendy','¡Bienvenida!','欢迎光临！','Welcome!'),
      line('Wendy','¿Qué tal?','你好吗？','How are you?'),
      line('Jasmine','Muy bien, gracias.','很好，谢谢。','Very well, thank you.'),
      line('Jasmine','¿Me pones un café, por favor?','请给我一杯咖啡，好吗？','Could you get me a coffee, please?'),
      line('Wendy','Tenemos café americano, capuchino y café con leche.','我们有美式、卡布奇诺和加奶咖啡。','We have Americano, cappuccino and coffee with milk.'),
      line('Wendy','¿Qué te apetece?','你想喝哪一种？','What do you feel like?'),
      line('Jasmine','Un café con leche, por favor.','一杯加奶咖啡，麻烦了。','A coffee with milk, please.'),
      line('Wendy','También tenemos rollos de canela recién hechos.','我们还有刚做好的肉桂卷。','We also have freshly made cinnamon rolls.'),
      line('Wendy','¿Quieres uno?','你想来一个吗？','Would you like one?'),
      line('Jasmine','¿Cuánto cuesta el rollo de canela?','肉桂卷的价格是多少？','How much is the cinnamon roll?'),
      line('Wendy','El rollo cuesta cuatro euros.','肉桂卷卖四欧元。','The roll costs four euros.'),
      line('Wendy','Y el café con leche, tres euros con cincuenta.','而加奶咖啡三欧五十。','And the coffee with milk is three euros fifty.'),
      line('Jasmine','Vale, pues un rollo también.','好的，那也来一个肉桂卷。','Okay, then a roll as well.'),
      line('Wendy','Son siete euros con cincuenta en total.','一共是七欧五十。','That is seven euros fifty in total.'),
      line('Wendy','¿Para tomar aquí o para llevar?','在这里吃喝，还是带走？','For here or to take away?'),
      line('Jasmine','Para tomar aquí.','在这里吃喝。','For here.'),
      line('Jasmine','Hace mucho frío fuera.','外面很冷。','It is very cold outside.'),
      line('Jasmine','Quiero sentarme junto a la ventana.','我想坐在窗边。','I want to sit by the window.'),
      line('Jasmine','Allí da el sol.','那里晒得到太阳。','The sun shines there.'),
      line('Wendy','Claro.','当然。','Of course.'),
      line('Wendy','Puedes pagar en efectivo o con tarjeta.','你可以付现金或刷卡。','You can pay in cash or by card.'),
      line('Jasmine','¿Aceptáis Mastercard?','你们收 Mastercard 吗？','Do you accept Mastercard?'),
      line('Wendy','Sí, claro.','是的，当然。','Yes, of course.'),
      {stage:'滴——刷卡成功。'},
      line('Wendy','Perfecto.','好了。','Perfect.'),
      line('Wendy','Siéntate donde quieras.','坐下吧，想坐哪里都可以。','Sit wherever you like.'),
      line('Wendy','Ahora te lo llevo.','我这就给你送过去。','I will bring it over to you now.'),
      line('Jasmine','¡Muchas gracias!','非常感谢！','Thank you so much!'),
      line('Jasmine','¡Qué amable!','你真好！','That is so kind of you!')
    ]},
    {id:'coffee',title:'从一句夸奖聊起',caption:'Wendy 把咖啡和肉桂卷端到窗边。Jasmine 尝了一口。',lines:[
      line('Wendy','Aquí tienes tu café y tu rollo de canela.','这是你的咖啡和你的肉桂卷。','Here are your coffee and your cinnamon roll.'),
      line('Wendy','¡Que aproveche!','慢慢享用！','Enjoy!'),
      line('Jasmine','¡Qué bien huele el café!','咖啡闻起来真香！','The coffee smells so good!'),
      line('Jasmine','¡El rollo está buenísimo!','肉桂卷太好吃了！','The roll is delicious!'),
      line('Wendy','¡Gracias!','谢谢！','Thank you!'),
      line('Wendy','Lo he hecho yo esta mañana.','这是我今天早上亲手做的。','I made it myself this morning.'),
      line('Wendy','¡Es la receta secreta de la casa!','这是本店的秘密配方！','It is the house’s secret recipe!')
    ]},
    {id:'meet',title:'认识彼此，聊聊自己',caption:'气氛轻松起来，两人开始自我介绍。',lines:[
      line('Jasmine','Me llamo Jasmine.','我叫 Jasmine。','My name is Jasmine.'),
      line('Jasmine','¿Y tú?','那你呢？','And you?'),
      line('Jasmine','¿Cómo te llamas?','你叫什么名字？','What is your name?'),
      line('Wendy','Soy Wendy.','我是 Wendy。','I am Wendy.'),
      line('Wendy','Encantada.','很高兴认识你。','Nice to meet you.'),
      line('Wendy','¿De dónde eres?','你来自哪里？','Where are you from?'),
      line('Jasmine','Soy china, de Guangzhou.','我是中国人，来自广州。','I am Chinese, from Guangzhou.'),
      line('Wendy','Yo soy española, de Barcelona.','我是西班牙人，来自巴塞罗那。','I am Spanish, from Barcelona.'),
      line('Wendy','¿Estás aquí de vacaciones?','你在这里度假吗？','Are you here on holiday?'),
      line('Wendy','¿Eres estudiante?','你是学生吗？','Are you a student?'),
      line('Jasmine','No, estoy aquí por trabajo.','不是，我在这里出差。','No, I am here for work.'),
      line('Wendy','¿A qué te dedicas?','你做什么工作？','What do you do for a living?'),
      line('Jasmine','¿Cómo se dice “designer” en español?','“Designer”用西班牙语怎么说？','How do you say “designer” in Spanish?'),
      line('Wendy','Diseñadora.','女设计师。','Designer, for a woman.'),
      line('Jasmine','¿Puedes repetir, por favor?','请再说一遍，好吗？','Could you repeat that, please?'),
      line('Wendy','Diseñadora.','女设计师。','Designer.'),
      line('Jasmine','Diseñadora.','女设计师。','Designer.'),
      line('Jasmine','¡Gracias por enseñarme!','谢谢你教我！','Thank you for teaching me!'),
      line('Jasmine','Llevo tres meses aprendiendo español.','我已经学西班牙语三个月了。','I have been learning Spanish for three months.'),
      line('Jasmine','Lo siento, no entiendo algunas palabras.','不好意思，有些词我听不懂。','Sorry, I do not understand some words.'),
      line('Wendy','¿Solo tres meses?','才三个月？','Only three months?'),
      line('Wendy','¡Hablas muy bien español!','你西班牙语已经说得很好了！','You speak Spanish very well!'),
      line('Wendy','¡Tienes mucho talento!','你很有天赋！','You have a lot of talent!'),
      line('Jasmine','Gracias.','谢谢。','Thank you.'),
      line('Jasmine','¿Qué significa “talento”?','“Talento”是什么意思？','What does “talento” mean?'),
      line('Wendy','“Talent”, en inglés.','用英语说就是“talent”，天赋。','“Talent”, in English.'),
      line('Jasmine','¡Ah, gracias!','啊，谢谢！','Oh, thank you!'),
      line('Jasmine','¡Me animas mucho!','你让我备受鼓舞！','You really encourage me!')
    ]}
  ];
  const grammar=[
  [
    "主语可以省略",
    "Me llamo Jasmine. / Soy Wendy.",
    [
      "动词已说明主语，yo / tú 常可省略。",
      "me llamo = 我叫；soy = 我是。",
      "¿Y tú? = 你呢？"
    ]
  ],
  [
    "介绍国籍与来源",
    "Soy china. / Soy de Guangzhou.",
    [
      "国籍：ser + 国籍词。",
      "来源：ser de + 地名。",
      "china = 中国人（女性）；China = 中国。"
    ]
  ],
  [
    "ser 与 estar",
    "Soy diseñadora. / Estoy aquí por trabajo.",
    [
      "本课用 ser 介绍身份、职业。",
      "用 estar 说明现在在哪里。",
      "职业前通常不加 un / una。"
    ]
  ],
  [
    "提问的常用词",
    "¿Cómo te llamas? / ¿De dónde eres?",
    [
      "cómo 怎样；dónde 哪里。",
      "cuánto 多少；qué 什么。",
      "西语问句用 ¿ … ?。"
    ]
  ],
  [
    "自我介绍中的性别",
    "Soy china. / Encantada.",
    [
      "女性：china、española、encantada。",
      "男性：chino、español、encantado。",
      "这里的词尾随说话人变化。"
    ]
  ],
  [
    "礼貌点单与请求",
    "¿Me pones un café, por favor? / ¿Puedes repetir?",
    [
      "¿Me pones…?：西班牙常见点单用语。",
      "por favor = 请。",
      "puedes 后接动词原形：puedes repetir。"
    ]
  ],
  [
    "冠词与阴阳性",
    "un café / una ventana / el rollo / la receta",
    [
      "阳性：el / un；阴性：la / una。",
      "复数：los / unos；las / unas。",
      "名词连同冠词记：la leche（阴性）。"
    ]
  ],
  [
    "代指与省略",
    "¿Quieres uno? / Un rollo también.",
    [
      "uno 在这里代指一个肉桂卷。",
      "también = 也。",
      "重复的信息可省略，如价格句中的 cuesta。"
    ]
  ],
  [
    "天气与味道",
    "Hace frío. / El rollo está buenísimo.",
    [
      "hace frío = 天气冷。",
      "está bueno = 好吃；buenísimo = 特别好吃。",
      "¡Qué bien huele! = 闻起来真香！"
    ]
  ],
  [
    "刚做好的与已经做了",
    "recién hechos / Lo he hecho yo esta mañana.",
    [
      "recién hecho = 刚做好的；复数用 hechos。",
      "he hecho = 我做了（现在完成时）。",
      "lo 在这里指前面的肉桂卷。"
    ]
  ],
  [
    "某件事持续了多久",
    "Llevo tres meses aprendiendo español.",
    [
      "llevar + 时间 + 动名词：持续到现在。",
      "aprendiendo 来自 aprender（学习）。",
      "tres meses = 三个月。"
    ]
  ],
  [
    "遇到生词怎么问",
    "¿Cómo se dice “designer” en español? / ¿Qué significa “talento”?",
    [
      "¿Cómo se dice X en español?：X 用西语怎么说？",
      "¿Qué significa X?：X 是什么意思？"
    ]
  ]
];
  // 每一行均对应原文出现的动词，包含本课词形和最有用的现在时。
  const verbs=[
    ['ser','是；身份、来源','soy / eres / es','somos / sois / son','Soy china.','不规则'],
    ['estar','在；状态','estoy / estás / está','estamos / estáis / están','Estoy aquí por trabajo.','不规则'],
    ['llamarse','叫作','me llamo / te llamas / se llama','nos llamamos / os llamáis / se llaman','Me llamo Jasmine.','自复动词'],
    ['tener','有','tengo / tienes / tiene','tenemos / tenéis / tienen','Tenemos café americano.','不规则'],
    ['querer','想要','quiero / quieres / quiere','queremos / queréis / quieren','¿Quieres uno?','e → ie；quieras 是虚拟式'],
    ['poder','能；可以','puedo / puedes / puede','podemos / podéis / pueden','¿Puedes repetir?','o → ue'],
    ['poner','放；提供（点单）','pongo / pones / pone','ponemos / ponéis / ponen','¿Me pones un café?','yo 不规则'],
    ['costar','价格是','cuesto / cuestas / cuesta','costamos / costáis / cuestan','El rollo cuesta cuatro euros.','o → ue；价格常用 cuesta/cuestan'],
    ['apetecer','想要；使人想','apetezco / apeteces / apetece','apetecemos / apetecéis / apetecen','¿Qué te apetece?','常记 te apetece / te apetecen'],
    ['tomar','喝；吃；取用','tomo / tomas / toma','tomamos / tomáis / toman','Para tomar aquí.','规则 -ar'],
    ['llevar','带；持续一段时间','llevo / llevas / lleva','llevamos / lleváis / llevan','Ahora te lo llevo.','规则 -ar'],
    ['sentarse','坐下','me siento / te sientas / se sienta','nos sentamos / os sentáis / se sientan','Quiero sentarme. / Siéntate.','e → ie；siéntate 是 tú 命令式'],
    ['hacer','做；天气表达','hago / haces / hace','hacemos / hacéis / hacen','Hace frío. / Lo he hecho yo.','he hecho 是现在完成时'],
    ['dar','给；照射','doy / das / da','damos / dais / dan','Allí da el sol.','yo 不规则'],
    ['pagar','付款','pago / pagas / paga','pagamos / pagáis / pagan','Puedes pagar con tarjeta.','现在时规则 -ar'],
    ['aceptar','接受','acepto / aceptas / acepta','aceptamos / aceptáis / aceptan','¿Aceptáis Mastercard?','规则 -ar；vosotros 指“你们”'],
    ['oler','闻起来','huelo / hueles / huele','olemos / oléis / huelen','¡Qué bien huele el café!','o → hue'],
    ['dedicarse','从事','me dedico / te dedicas / se dedica','nos dedicamos / os dedicáis / se dedican','¿A qué te dedicas?','自复动词'],
    ['decir','说','digo / dices / dice','decimos / decís / dicen','¿Cómo se dice…?','不规则'],
    ['repetir','重复','repito / repites / repite','repetimos / repetís / repiten','¿Puedes repetir?','e → i'],
    ['enseñar','教','enseño / enseñas / enseña','enseñamos / enseñáis / enseñan','Gracias por enseñarme.','enseñarme = 教我'],
    ['aprender','学习','aprendo / aprendes / aprende','aprendemos / aprendéis / aprenden','aprendiendo español','规则 -er；动名词 aprendiendo'],
    ['sentir','感到','siento / sientes / siente','sentimos / sentís / sienten','Lo siento.','e → ie；道歉固定说法'],
    ['entender','理解','entiendo / entiendes / entiende','entendemos / entendéis / entienden','No entiendo algunas palabras.','e → ie'],
    ['hablar','说话；讲语言','hablo / hablas / habla','hablamos / habláis / hablan','Hablas muy bien español.','规则 -ar'],
    ['significar','意思是','significo / significas / significa','significamos / significáis / significan','¿Qué significa “talento”?','规则 -ar'],
    ['animar','鼓励','animo / animas / anima','animamos / animáis / animan','¡Me animas mucho!','规则 -ar'],
    ['haber','助动词','he / has / ha','hemos / habéis / han','Lo he hecho yo esta mañana.','此处与 hecho 组成完成时'],
    ['aprovechar','利用；享用','aprovecho / aprovechas / aprovecha','aprovechamos / aprovecháis / aprovechan','¡Que aproveche!','aproveche 是现在虚拟式']
  ];
  const verbTranslations={"ser": "我是中国人。", "estar": "我来这里出差。", "llamarse": "我叫 Jasmine。", "tener": "我们有美式咖啡。", "querer": "你想来一个吗？", "poder": "你能再说一遍吗？", "poner": "请给我一杯咖啡，好吗？", "costar": "肉桂卷四欧元。", "apetecer": "你想喝什么？", "tomar": "在这里吃喝。", "llevar": "我这就给你送过去。", "sentarse": "我想坐下。／坐下吧。", "hacer": "天气冷。／是我做的。", "dar": "那里晒得到太阳。", "pagar": "你可以刷卡。", "aceptar": "你们收 Mastercard 吗？", "oler": "咖啡好香啊！", "dedicarse": "你做什么工作？", "decir": "……怎么说？", "repetir": "你能再说一遍吗？", "enseñar": "谢谢你教我。", "aprender": "正在学习西班牙语", "sentir": "不好意思。", "entender": "有些词我听不懂。", "hablar": "你西班牙语说得很好！", "significar": "“talento”是什么意思？", "animar": "你让我备受鼓舞！", "haber": "这是我今天早上亲手做的。", "aprovechar": "慢慢享用！"};
  verbs.forEach(v=>v.push(verbTranslations[v[0]]));
  const nouns={
    masculine:[['el café','咖啡'],['el café americano','美式咖啡'],['el capuchino','卡布奇诺'],['el café con leche','加奶咖啡'],['el rollo de canela','肉桂卷'],['el euro','欧元'],['el frío','寒冷'],['el sol','太阳'],['el efectivo','现金'],['el trabajo','工作'],['el español','西班牙语'],['el mes → los meses','月'],['el talento','天赋']],
    feminine:[['la leche','牛奶'],['la canela','肉桂'],['la ventana','窗户'],['la tarjeta','银行卡'],['la mañana','早晨'],['la receta','配方'],['la casa','房子；本店（de la casa）'],['la diseñadora','女设计师'],['la palabra','词语'],['las vacaciones','假期（常用复数）']],
    people:[['el estudiante / la estudiante','男学生／女学生；词形不变，冠词变化'],['el diseñador / la diseñadora','男设计师／女设计师；词尾变化']]
  };
  const phrases=[
    ['打招呼与介绍',[['¡Buenos días!','早上好！'],['¿Qué tal?','你好吗？'],['Muy bien, gracias.','很好，谢谢。'],['Me llamo… / Soy…','我叫……／我是……'],['¿Cómo te llamas?','你叫什么名字？'],['Encantada.','很高兴认识你。（女性说）'],['¿De dónde eres?','你来自哪里？'],['Soy china, de Guangzhou.','我是中国人，来自广州。']]],
    ['点单与付款',[['¿Me pones un…, por favor?','请给我一个／一杯……，好吗？'],['¿Cuánto cuesta…?','……多少钱？'],['Para tomar aquí. / Para llevar.','在这里吃喝。／带走。'],['¿Aceptáis Mastercard?','你们收 Mastercard 吗？'],['en efectivo / con tarjeta','用现金／刷卡'],['Aquí tienes…','这是给你的……'],['¡Que aproveche!','慢慢享用！']]],
    ['工作与救场句',[['¿A qué te dedicas?','你做什么工作？'],['Estoy aquí por trabajo.','我来这里出差。'],['¿Cómo se dice… en español?','……用西语怎么说？'],['¿Puedes repetir, por favor?','请再说一遍，好吗？'],['No entiendo algunas palabras.','有些词我听不懂。'],['¿Qué significa…?','……是什么意思？'],['¡Qué amable!','你真好！'],['¡Me animas mucho!','你让我备受鼓舞！']]]
  ];
  // hint 使用 {} 标记独立输入框，slots 与其一一对应。
  const questions=[
    ['morning','早上好！',['Buenos días'], '¡{Buenos} {días}!', ['Buenos','días'],'buenos días = 早上好','问候语常用复数 buenos días。'],
    ['well','很好，谢谢。',['Muy bien, gracias'], '{Muy} bien, {gracias}.',['Muy','gracias'],'muy bien = 很好；gracias = 谢谢','bien 表示“好”；muy 放在前面加强语气。'],
    ['coffee','请给我一杯加奶咖啡。（用省略动词的点单表达）',['Un café con leche, por favor'], 'Un {café} con {leche}, por favor.',['café','leche'],'café = 咖啡；leche = 牛奶','un café con leche 是一杯加奶咖啡。por favor 表示“请”。'],
    ['price','肉桂卷多少钱？',['Cuánto cuesta el rollo de canela','Cuánto cuesta un rollo de canela'], '¿{Cuánto} {cuesta} el rollo de canela?',['Cuánto','cuesta'],'cuánto = 多少；cuesta = 价格是','cuánto cuesta + 单数物品，用来询问价格。'],
    ['here','在这里吃喝。（用 tomar）',['Para tomar aquí'], 'Para {tomar} {aquí}.',['tomar','aquí'],'tomar = 吃／喝；aquí = 这里','para tomar aquí 与 para llevar（带走）是一对点单常用语。'],
    ['cold','外面很冷。',['Hace mucho frío fuera','Fuera hace mucho frío'], '{Hace} mucho {frío} fuera.',['Hace','frío'],'hace frío = 天气冷；fuera = 外面','表示天气冷用 hacer，不说 es frío。'],
    ['card','你们收 Mastercard 吗？（对店家用“你们”）',['Aceptáis Mastercard','Aceptan Mastercard'], '¿{Aceptáis} Mastercard?',['Aceptáis'],'aceptáis = 你们接受','西班牙常用 vosotros/vosotras 表示熟悉语气的“你们”，动词用 aceptáis。礼貌的 ustedes 用 aceptan。'],
    ['thanks','非常感谢！你真好！',['Muchas gracias, qué amable','Muchas gracias, eres muy amable','Muchísimas gracias, qué amable'], '¡Muchas {gracias}! ¡Qué {amable}!',['gracias','amable'],'amable = 友善的；亲切的','¡Qué + 形容词! 可表示感叹：真……！'],
    ['name','我叫 Jasmine。',['Me llamo Jasmine','Mi nombre es Jasmine'], 'Me {llamo} Jasmine.',['llamo'],'me llamo = 我叫','llamarse 介绍名字；me 要和 llamo 一起记。'],
    ['your-name','你叫什么名字？',['Cómo te llamas','Tú cómo te llamas','Cómo te llamas tú','Cuál es tu nombre'], '¿Cómo te {llamas}?',['llamas'],'cómo = 怎样；te llamas = 你叫','me llamo 是“我叫”，te llamas 是“你叫”。'],
    ['pleased','很高兴认识你。（用 Encantada，女性说）',['Encantada','Encantada de conocerte'], '{Encantada}.',['Encantada'],'encantada = 很高兴认识你（女性说）','男性说 encantado；词尾跟着说话人变化。'],
    ['from','你来自哪里？',['De dónde eres','De dónde eres tú','Tú de dónde eres'], '¿{De} dónde {eres}?',['De','eres'],'de = 来自；eres = 你是','ser de + 地点表示来自哪里；问句是 ¿De dónde eres?。'],
    ['china','我是中国人，来自广州。（女性说；广州写 Guangzhou）',['Soy china de Guangzhou','Soy china y soy de Guangzhou','Soy china y de Guangzhou'], 'Soy {china}, de {Guangzhou}.',['china','Guangzhou'],'china = 中国人（女性）；de Guangzhou = 来自广州','国籍形容词 china 用小写；国家名 China 大写。'],
    ['holiday','你来这里度假吗？（用 estar aquí）',['Estás aquí de vacaciones','Tú estás aquí de vacaciones'], '¿{Estás} aquí de {vacaciones}?',['Estás','vacaciones'],'estar = 在；de vacaciones = 在度假','问对方现在是否在此地度假，用 estás aquí de vacaciones。'],
    ['student','你是学生吗？',['Eres estudiante','Tú eres estudiante','Eres tú estudiante'], '¿{Eres} {estudiante}?',['Eres','estudiante'],'eres = 你是；estudiante = 学生','ser + 身份／职业；estudiante 在男女两种情况下词形相同。'],
    ['work','不是，我来这里出差。（用 estar aquí por trabajo）',['No estoy aquí por trabajo','No yo estoy aquí por trabajo'], 'No, {estoy} aquí por {trabajo}.',['estoy','trabajo'],'estoy aquí = 我在这里；por trabajo = 因为工作','逗号后的 estoy aquí por trabajo 是肯定陈述。No 回应前一个问题，不是否定 estoy。'],
    ['job','你做什么工作？（用 dedicarse）',['A qué te dedicas','Tú a qué te dedicas','A qué te dedicas tú'], '¿A qué te {dedicas}?',['dedicas'],'dedicarse a = 从事','固定问法 ¿A qué te dedicas? 用来问职业。'],
    ['say','“Designer”用西班牙语怎么说？',['Cómo se dice designer en español'], '¿Cómo se {dice} “designer” en {español}?',['dice','español'],'se dice = 被说作；en español = 用西语','¿Cómo se dice X en español? 问一个词的西语表达。'],
    ['repeat','请再说一遍，好吗？（用 poder）',['Puedes repetir por favor','Por favor puedes repetir','Me puedes repetir por favor','Puedes repetirlo por favor','Podrías repetir por favor'], '¿{Puedes} {repetir}, por favor?',['Puedes','repetir'],'puedes = 你能；repetir = 重复','poder 的变位后接动词原形，所以用 puedes repetir。'],
    ['understand','不好意思，有些词我听不懂。',['Lo siento no entiendo algunas palabras','Lo siento algunas palabras no las entiendo'], 'Lo {siento}, no {entiendo} algunas palabras.',['siento','entiendo'],'lo siento = 抱歉；entiendo = 我理解','no 放在变位动词前表示否定：no entiendo。'],
    ['months','我学西班牙语三个月了。（用 llevar + 时间 + aprendiendo）',['Llevo tres meses aprendiendo español','Llevo 3 meses aprendiendo español'], '{Llevo} tres meses {aprendiendo} español.',['Llevo','aprendiendo'],'llevo = 我已经持续；aprendiendo = 正在学习','llevar + 时间 + 动名词，表示持续到现在。先把这个句框整体记住。'],
    ['meaning','“Talento”是什么意思？',['Qué significa talento','Talento qué significa'], '¿Qué {significa} “talento”?',['significa'],'qué = 什么；significa = 意思是','¿Qué significa X? 用来问词义。'],
    ['encourage','谢谢！你让我备受鼓舞！（用 animar）',['Gracias me animas mucho','Muchas gracias me animas mucho'], '¡Gracias! ¡Me {animas} {mucho}!',['animas','mucho'],'me = 我；animas = 你鼓励；mucho = 很多','这里的主语是 tú，animas 表示“你鼓励”，me 是被鼓励的“我”。']
  ].map(([id,zh,answers,hint,slots,wordMeaning,grammar])=>({id,zh,answers,hint,slots,wordMeaning,grammar,display:hint.replace(/[{}]/g,'')}));
  const contexts={
    morning:'早晨走进店里，先主动向店主打招呼。',well:'回应“你好吗”，先说自己很好，再表达感谢。',coffee:'在点单场景直接说想要的饮品，加上“请”，即使省略动词也很自然。',price:'指着正在谈论的肉桂卷，询问一个的价格。',here:'回答店员关于堂食还是外带的问题，表示留在店里享用。',cold:'解释自己选择堂食的原因：店外的天气很冷。',card:'付款前确认店家是否接受 Mastercard 这一种银行卡。',thanks:'既表达感谢，也夸赞对方待人亲切。',name:'主动报上自己的名字，让闲聊进入自我介绍。','your-name':'向面前的人询问名字，使用自然的 tú 语气。',pleased:'第一次认识对方时，女性说话人表达见面的愉快。',from:'向对方询问来自哪个地方，不是问“现在在哪里”。',china:'先介绍自己的国籍，再补充来自中国的哪座城市。',holiday:'询问对方这次来当地的目的是否是度假。',student:'询问对方的身份是不是学生。',work:'先回答“不是学生”，然后说明这次到巴塞罗那是因为工作。',job:'在认识彼此的闲聊中，询问对方从事什么职业。',say:'已知道英文词 designer，向对方请教它对应的西班牙语。',repeat:'没有听清前面说的词，礼貌地请对方再说一次。',understand:'先表示不好意思，再说明自己还听不懂其中一些词。',months:'说明自己从三个月前开始学西语，现在还在继续学。',meaning:'刚听到 talento 这个西语词，直接询问它的意思。',encourage:'收到对方的夸奖后，感谢她，并说这份鼓励让自己更有信心。'
  };
  questions.forEach(q=>q.context=contexts[q.id]);
  return {id:'barcelona-cafe',title:'在巴塞罗那，聊起第一句西语',scenes,grammar,verbs,nouns,phrases,questions};
});
