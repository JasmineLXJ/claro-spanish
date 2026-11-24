/* Curated study content from the learner-supplied lessons; no personal attempts. */
(function(root){
  'use strict';
  const norm=v=>String(v??'').normalize('NFC').toLocaleLowerCase('es').replace(/[¡¿!?.,;:«»“”]/gu,'').replace(/\s+/g,' ').trim();
  const wordId=text=>{let h=2166136261;for(const c of norm(text))h=Math.imul(h^c.charCodeAt(0),16777619);return 'cw_'+(h>>>0).toString(36);};
  const groups=[
    ['frequency','频率与次数','每天、每周、次数与否定','una vez / dos veces；a la semana / al mes / al año；a veces / a menudo / casi nunca。'],
    ['routines','日常作息与先后','起床、刷牙、淋浴与上床','先记 me levanto、me ducho、me acuesto，再用 antes de / después de 连接动作。'],
    ['habits','购物、日记与习惯问答','八组原问答 · 问你，回答我','escribes → escribo；sales → salgo；tus pensamientos → mis pensamientos。'],
    ['clock','钟点与一天的安排','07:00–00:05 · a qué hora','a la una；a las siete y diez；a las ocho y media；de la mañana / tarde / noche。'],
    ['irregular','不规则现在时','poder / preferir / pedir / poner','比较全部六个人称：puedo / podemos；prefiero / preferimos；pido / pedimos；pongo / ponemos。'],
    ['traditions','家人与纪念传统','两篇原阅读 · 词块与代词','根据文中家庭作答，分清 mis padres / sus padres、hablar con / hablar de。'],
    ['traits','人物与性格','Mario / Raquel · 从行动找词','sociable、creativo、fiestero；organizada、paciente、familiar；分清 social 与 sociable。'],
    ['sequence','顺序与四句表达','特别的一天与我的早晨','primero → después → luego → finalmente；保持 yo 或 nosotros 的人称一致。']
  ].map(([id,title,subtitle,tip])=>({id,title,subtitle,tip,wordIds:[]}));
  const corpus=[],exercises=[],words=[],guides={},activities=[];
  const categories={frequency:'频率与次数',routines:'日常作息',habits:'习惯与表达',clock:'时间与数字',irregular:'动词与变位',traditions:'家人与传统',traits:'人物与性格',sequence:'顺序与表达'};
  function add(id,group,es,zh,targets,note=''){
    const row={id:'cs_'+id,group,es,zh,note};corpus.push(row);
    targets.forEach((t,i)=>{
      const [answer,label,why,aliases=[]]=Array.isArray(t)?t:[t,zh,''];
      const escaped=answer.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),pattern=new RegExp('(?<![\\p{L}\\p{M}])'+escaped+'(?![\\p{L}\\p{M}])','u');
      if(!pattern.test(es))throw new Error('Missing cloze target: '+id+' / '+answer);
      exercises.push({id:'cq_'+id+'_'+i,group,prompt:label||zh,sentence:es.replace(pattern,'___'),answers:[answer,...aliases],hint:why||'按中文回想句中的词形或完整搭配。',why:why||zh,mode:'application',sourceId:row.id});
    });
  }
  function guide(group,title,body,example){(guides[group]||=[]).push({title,body,example});}
  // The first lesson remains available, with clozes for every original question and answer.
  add('first_days_q','phrases','¿Qué días estudias español?','你每周哪几天学西班牙语？',[['Qué días','补全“哪几天”。','疑问词 qué 有重音。'],['estudias','用 estudiar 的 tú 现在时补全。','问你：estudias；回答我：estudio。']]);
  add('first_days_a','phrases','Estudio español los martes, jueves y sábados.','我每周二、周四、周六学西班牙语。',[['los','补上表示“每周”的冠词。','习惯性的每周几用 los。'],['sábados','补上“每周六”的星期形式。','sábado 的复数加 s，重音保留。']]);
  add('first_gym_q','phrases','¿Cuándo haces gimnasia?','你什么时候健身？',['Cuándo','haces']);
  add('first_gym_a','phrases','Hago gimnasia de lunes a viernes por las mañanas.','我从周一到周五每天早上健身。',['Hago','de lunes a viernes','por las mañanas']);
  add('first_tv_q','phrases','¿Cuándo miras televisión?','你什么时候看电视？',['miras']);
  add('first_tv_a','phrases','Miro televisión todas las noches.','我每天晚上看电视。',['Miro','todas las noches']);
  add('first_favorite_q','phrases','¿Cuál es tu momento preferido de la semana? ¿Por qué?','一周里你最喜欢哪个时段？为什么？',['Cuál','tu','de la semana','Por qué']);
  add('first_favorite_a','phrases','El viernes por la tarde. Porque veo a mis amigas.','星期五下午。因为我见我的女性朋友们。',['por la tarde','Porque','veo a mis amigas']);
  // Frequency lesson and all requested patterns.
  add('freq_gym','frequency','Casi todos los días va al gimnasio.','他／她几乎每天都去健身房。',['Casi todos los días','va','al gimnasio'],'原材料 gym 在这里统一记标准词 gimnasio。');
  add('freq_party','frequency','Una vez a la semana sale de fiesta.','他／她每周出去聚会一次。',['Una vez a la semana','sale de fiesta']);
  add('freq_university','frequency','Tres veces a la semana estudia en la universidad.','他／她每周三次在大学学习。',['Tres veces','a la semana','estudia','en la universidad']);
  add('freq_saturday','frequency','Normalmente los sábados cena con Carolina.','他／她通常每周六和 Carolina 一起吃晚饭。',['Normalmente','los sábados','cena','con']);
  add('freq_karaoke','frequency','A veces va al karaoke.','他／她有时去唱卡拉OK。',['A veces','al karaoke'],'原材料 va de karaoke 的意思按“去唱卡拉OK”理解，本词包采用 ir al karaoke。');
  add('freq_hostal','frequency','A menudo trabaja en el hostal.','他／她经常在小旅馆工作。',['A menudo','trabaja','en el hostal']);
  [
    ['every_day','todos los días','每天'],['every_week','todas las semanas','每周'],['every_year','todos los años','每年'],['every_sunday','todos los domingos','每个星期日'],['every_night','todas las noches','每天晚上'],
    ['once_week','una vez a la semana','每周一次'],['once_month','una vez al mes','每月一次'],['once_year','una vez al año','每年一次'],['twice_week','dos veces a la semana','每周两次'],['twice_month','dos veces al mes','每月两次'],['three_day','tres veces al día','每天三次'],
    ['fridays','los viernes','每逢星期五'],['saturdays','los sábados','每逢星期六'],['sundays','los domingos','每逢星期日']
  ].forEach(([id,phrase,zh])=>add('pattern_'+id,'frequency','La expresión es «'+phrase+'».',`补全“${zh}”这个完整词块。`,[phrase]));
  [['always','Siempre','总是'],['almost_always','Casi siempre','几乎总是'],['sometimes','A veces','有时'],['often','A menudo','经常'],['normally','Normalmente','通常'],['never','Nunca','从不'],['almost_never','Casi nunca','几乎从不']].forEach(([id,phrase,zh])=>add('adverb_'+id,'frequency',phrase+' estudio por la noche.',`补上频率“${zh}”。`,[phrase]));
  guide('frequency','次数与时间单位','una vez / dos veces / tres veces；vez 的复数是 veces。每周：a la semana 或 por semana；每月：al mes；每年：al año；每天：al día。','Estudio español tres veces por semana.');
  guide('frequency','每天与每天晚上','día 为阳性：todos los días；semana、noche 为阴性：todas las semanas / todas las noches。los viernes 等也可表达每周的习惯。','Miro televisión todas las noches.');
  guide('frequency','从不的两个位置','Nunca voy… 与 No voy nunca… 都可表达“我从不去”。casi nunca 表示几乎从不。','Nunca voy al gimnasio. No voy casi nunca al gimnasio.');
  // Routines, before/after and all five habit questions with their supplied model replies.
  add('teeth_both','routines','Me lavo los dientes antes y después de comer.','我吃饭前后都刷牙。',['Me lavo','los dientes','antes y después de comer']);
  add('gym_before_class','routines','No voy casi nunca al gimnasio antes de ir a mi clase de cocina.','我几乎从不在去上烹饪课之前去健身房。',['casi nunca','antes de ir','mi clase de cocina']);
  add('read_after_dinner','routines','A veces leo por la noche, después de cenar.','我有时在晚上吃完晚饭后读书。',['leo','por la noche','después de cenar']);
  add('never_tv','routines','Nunca veo la televisión después de cenar.','我吃完晚饭后从不看电视。',['Nunca','veo','después de cenar']);
  add('cream_before_bed','routines','Me pongo crema siempre antes de acostarme.','我总是在上床睡觉前涂护肤霜。',['Me pongo','crema','antes de acostarme']);
  add('evening_order','routines','Por las noches, primero ceno, después me ducho y luego me acuesto.','晚上，我先吃晚饭，然后淋浴，接着上床睡觉。',['Por las noches','primero','me ducho','me acuesto']);
  add('bathroom_order','routines','Primero entro al baño, luego me doy una ducha y finalmente me visto para salir.','我先进入浴室，然后冲澡，最后穿好衣服准备出门。',['entro al baño','me doy una ducha','finalmente','me visto','para salir']);
  add('teeth_after','routines','Me lavo los dientes después de cenar.','我在吃完晚饭后刷牙。',['Me lavo los dientes','después de cenar']);
  add('shower_after_gym','routines','Después del gimnasio, siempre me ducho.','健身后，我总会淋浴。',['Después del gimnasio','siempre','me ducho']);
  const habitModels=[
    ['bed','¿Haces la cama después de levantarte?','你起床后整理床铺吗？','A veces hago la cama después de levantarme.','我有时起床后整理床铺。',['Haces','después de levantarte'],['hago la cama','después de levantarme']],
    ['clothes','¿Te vistes con ropa de colores?','你穿彩色的衣服吗？','Sí, me visto con ropa de colores.','是的，我穿彩色的衣服。',['Te vistes','ropa de colores'],['me visto','ropa de colores']],
    ['shower','¿Qué prefieres: ducharte por la mañana o por la noche?','你更喜欢早上淋浴还是晚上淋浴？','Prefiero ducharme por la noche.','我更喜欢晚上淋浴。',['prefieres','ducharte','o'],['Prefiero','ducharme']],
    ['party','¿Sales de fiesta a menudo?','你经常出去聚会吗？','No, no salgo casi nunca de fiesta.','不，我几乎从不出去聚会。',['Sales de fiesta','a menudo'],['salgo','casi nunca']],
    ['wake','¿A qué hora te despiertas los domingos?','你每周日几点醒来？','Me despierto a las ocho de la mañana.','我早上八点醒来。',['A qué hora','te despiertas','los domingos'],['Me despierto','a las ocho']]
  ];
  for(const [id,q,qzh,a,azh,qb,ab] of habitModels){add('routine_'+id+'_q','routines',q,qzh,qb);add('routine_'+id+'_a','routines',a,azh,ab);}
  guide('routines','问你，回答我','te vistes → me visto；te despiertas → me despierto；levantarte → levantarme。人称代词和动词都跟主语变化。','Te despiertas. Me despierto.');
  guide('routines','原形后的代词','在 prefiero ducharme、antes de acostarme、después de levantarme 中，动词保留原形，me 接在原形后。','Prefiero ducharme por la noche.');
  guide('routines','在……之前／之后','antes de / después de + 动词原形；也能接名词。de + el 缩合成 del。','Después de cenar, me ducho. Después del gimnasio, me ducho.');
  guide('routines','醒来与起床','despertarse 是醒来；levantarse 是起床。acostarse 是上床、躺下；不表示已经睡着。身体部位在 me lavo los dientes 中用定冠词。','Me despierto a las siete y me levanto a las siete y diez.');
  // The eight original shopping / diary / habits question-and-answer pairs.
  const habits=[
    ['shopping','¿Compras a menudo en días especiales como Black Friday?','你经常在黑色星期五这样的特殊日子购物吗？','No, solo a veces.','不常，只是偶尔买。',['Compras','a menudo','días especiales','como'],['solo a veces']],
    ['study','¿Con qué frecuencia estudias español?','你多久学一次西班牙语？','Estudio español tres veces por semana.','我每周学三次西班牙语。',['Con qué frecuencia','estudias'],['Estudio','tres veces','por semana']],
    ['diary','¿Escribes tus pensamientos en un diario todos los días?','你每天都在日记里写下自己的想法吗？','No, escribo mis pensamientos una vez por semana.','不，我每周写一次自己的想法。',['Escribes','tus pensamientos','en un diario'],['escribo','mis pensamientos','una vez por semana']],
    ['books','¿Lees muchos libros al año?','你每年读很多书吗？','Sí, leo de cinco a diez libros al año.','是的，我每年读五到十本书。',['Lees','muchos libros','al año'],['leo','de cinco a diez','al año']],
    ['vacations','¿Planificas tus vacaciones todos los años?','你每年都会规划自己的假期吗？','No, no planifico. Decido a último momento.','不，我不做计划。我到最后一刻才决定。',['Planificas','tus vacaciones','todos los años'],['planifico','Decido','a último momento']],
    ['clothing','¿Cuántas veces al año compras ropa?','你一年买几次衣服？','Compro ropa una vez al año.','我每年买一次衣服。',['Cuántas veces','al año','compras ropa'],['Compro ropa','una vez al año']],
    ['walking','¿Sales a caminar a menudo?','你经常出去散步吗？','Salgo a caminar todas las mañanas.','我每天早上出去散步。',['Sales a caminar','a menudo'],['Salgo','a caminar','todas las mañanas']],
    ['social','¿Con qué frecuencia usas las redes sociales?','你多久使用一次社交媒体？','Uso las redes sociales todos los días.','我每天都使用社交媒体。',['Con qué frecuencia','usas','las redes sociales'],['Uso','redes sociales','todos los días']]
  ];
  for(const [id,q,qzh,a,azh,qb,ab] of habits){add('habit_'+id+'_q','habits',q,qzh,qb);add('habit_'+id+'_a','habits',a,azh,ab);}
  add('three_week','habits','Estudio español tres veces a la semana.','我每周学三次西班牙语。',['Estudio','veces','a la semana']);
  add('twice_year','habits','Compro ropa dos veces al año.','我每年买两次衣服。',['dos veces','al año']);
  guide('habits','问你，回答我','compras → compro；escribes → escribo；lees → leo；planificas → planifico；sales → salgo；usas → uso。说“我学”用 estudio，原形 estudiar 用于词块或另一个动词后。','Estudio español. Puedo estudiar español.');
  guide('habits','你的与我的','tu / mi 用在单数名词前；tus / mis 用在复数名词前。tu diario → mi diario；tus pensamientos → mis pensamientos。','Escribo mis pensamientos en un diario.');
  guide('habits','次数、范围与每年','dos 修饰 veces；“每年”固定记 al año。todos los años 不说明具体次数。de cinco a diez 用 de…a… 连接范围。','Compro ropa dos veces al año. Leo de cinco a diez libros al año.');
  guide('habits','social 与 sociable','social 的复数是 sociales，用于 redes sociales；sociable 表示合群、善交际，复数是 sociables。','Uso las redes sociales. Mario es sociable.');
  // Clock lesson: preserve the seven supplied routine sentences.
  [
    ['wake','Se levanta a las siete de la mañana.','他／她早上七点起床。',['Se levanta','a las siete','de la mañana']],
    ['shower','Se ducha a las siete y diez de la mañana.','他／她早上七点十分淋浴。',['Se ducha','siete y diez']],
    ['breakfast','Desayuna a las ocho de la mañana.','他／她早上八点吃早饭。',['Desayuna','a las ocho']],
    ['work','Empieza a trabajar a las ocho y media.','他／她八点半开始工作。',['Empieza a trabajar','ocho y media']],
    ['gym','Va al gimnasio a las seis de la tarde.','他／她傍晚六点去健身房。',['Va al gimnasio','seis','de la tarde']],
    ['dinner','Cena con su familia a las ocho de la noche.','他／她晚上八点和家人吃晚饭。',['Cena','con su familia','de la noche']],
    ['bed','Se acuesta a las doce y cinco de la noche.','他／她在午夜过后00:05上床睡觉。',['Se acuesta','doce y cinco']]
  ].forEach(([id,es,zh,blanks])=>add('clock_'+id,'clock',es,zh,blanks));
  add('clock_one','clock','Me levanto a la una.','我一点起床。',[['a la','补全“一点”前的介词和冠词。','一点用 a la una；其他这里用 a las。']]);
  add('clock_question','clock','¿A qué hora te levantas?','你几点起床？',['A qué hora','te levantas']);
  guide('clock','钟点与时段','一点：a la una；七点：a las siete。小时 + y + 分钟；y media 表示半小时。具体钟点后用 de la mañana / tarde / noche；泛指时段用 por la mañana 等。','A las siete de la mañana. Por la mañana.');
  guide('clock','开始做某事','empezar a + 动词原形。empieza 来自 empezar；后面的 trabajar 保持原形。','Empieza a trabajar a las ocho y media.');
  // Explicit six-person tables, not inferred endings.
  const persons=['yo','tú','él / ella / usted','nosotros/as','vosotros/as','ellos / ellas / ustedes'];
  const conjugations=[
    {verb:'poder',meaning:'能；能够',pattern:'o → ue；nosotros、vosotros 不发生该词干变化',forms:['puedo','puedes','puede','podemos','podéis','pueden']},
    {verb:'preferir',meaning:'更喜欢；宁愿',pattern:'e → ie；nosotros、vosotros 不发生该词干变化',forms:['prefiero','prefieres','prefiere','preferimos','preferís','prefieren']},
    {verb:'pedir',meaning:'请求；要某物',pattern:'e → i；nosotros、vosotros 不发生该词干变化',forms:['pido','pides','pide','pedimos','pedís','piden']},
    {verb:'poner',meaning:'放；摆',pattern:'yo 的特殊形式：pongo',forms:['pongo','pones','pone','ponemos','ponéis','ponen']}
  ];
  for(const v of conjugations)v.forms.forEach((form,i)=>add('conj_'+v.verb+'_'+i,'irregular',persons[i]+' '+form+'.',`用 ${v.verb} 的 ${persons[i]} 现在时填空。`,[[form,`用 ${v.verb}（${v.meaning}）的 ${persons[i]} 现在时填空。`,v.pattern+'。重音也需保留。']]));
  add('poder_example','irregular','Yo puedo estudiar hoy.','我今天能学习。',['puedo','estudiar']);
  add('preferir_example','irregular','Prefiero ducharme por la noche.','我更喜欢晚上淋浴。',['Prefiero','ducharme']);
  add('pedir_example','irregular','Pido un vaso de agua.','我要一杯水。',['Pido','un vaso de agua']);
  add('poner_example','irregular','Pongo la mesa.','我摆好餐具。',['Pongo','la mesa']);
  add('hacer_example','irregular','Hago la cama.','我整理床铺。',['Hago','la cama']);
  add('salir_example','irregular','Salgo de casa.','我出门。',['Salgo','de casa']);
  add('venir_example','irregular','Vengo a clase.','我来上课。',['Vengo','a clase']);
  guide('irregular','词干变化的位置','本课直陈式现在时模型中，poder、preferir、pedir 的 nosotros/as 和 vosotros/as 不发生所列词干变化。完整表格中的 podéis、preferís、pedís、ponéis 保留重音。','Puedo estudiar. Podemos estudiar.');
  guide('irregular','前一个动词变位，后一个保留原形','puedo estudiar；prefiero ducharme。hacer、salir、venir 的这里三个例句只展示 yo；其他人称仍需分别核对。','Hago la cama. Salgo de casa. Vengo a clase.');
  // Family dialogue; context is retained rather than presented as universal custom.
  const traditionContext='Alberto 在一月份谈论一种家庭传统；这不是说 Día de Muertos 在一月份，也不代表所有墨西哥家庭。下文按给定对话和虚构家庭理解，习俗因家庭与社区而异。';
  add('alberto_question','traditions','¿Qué hace tu familia para recordar a sus seres queridos?','你们家做些什么来纪念所爱的人？',['hace','tu familia','para recordar','sus seres queridos'],traditionContext);
  add('alberto_offering','traditions','En mi casa preparamos una ofrenda.','我们家准备一座纪念祭台。',['preparamos','una ofrenda']);
  add('alberto_flowers','traditions','Ponemos fotos y flores.','我们摆放照片和鲜花。',['Ponemos','fotos y flores']);
  add('alberto_food','traditions','También preparamos comida para compartir.','我们也准备食物来分享。',['También','comida','para compartir']);
  add('alberto_memories','traditions','Mis padres cuentan recuerdos y escuchamos música juntos.','我的父母讲往事，我们一起听音乐。',['Mis padres','cuentan recuerdos','escuchamos música','juntos']);
  add('alberto_affection','traditions','Para nosotros es un momento de cariño y memoria.','对我们而言，这是一个充满关爱和追忆的时刻。',['Para nosotros','cariño y memoria']);
  add('alberto_q1','traditions','¿Qué ponen en la ofrenda?','他们在纪念祭台上摆什么？',['Qué ponen','en la ofrenda']);
  add('alberto_q2','traditions','¿Quiénes cuentan recuerdos?','哪些人讲往事？',['Quiénes','cuentan recuerdos']);
  add('alberto_report','traditions','Sus padres cuentan recuerdos.','转述 Alberto：他的父母讲往事。',[['Sus','补上“他的”，与 padres 配合。','Alberto 自述 mis padres；我们转述他的父母用 sus padres。']]);
  add('isabel_offering','traditions','Isabel prepara una ofrenda con su padre.','Isabel 和她的父亲一起准备纪念祭台。',['prepara','una ofrenda','con su padre'],'此段为虚构家庭示例。');
  add('isabel_first','traditions','Primero ponen flores.','他们先摆花。',['Primero','ponen','flores']);
  add('isabel_after','traditions','Después colocan fotos.','然后他们摆放照片。',['Después','colocan','fotos']);
  add('isabel_afternoon','traditions','Por la tarde hablan de sus familiares.','下午，他们谈论自己的亲属。',['Por la tarde','hablan de','sus familiares']);
  add('isabel_q1','traditions','¿Con quién prepara Isabel la ofrenda?','Isabel 和谁一起准备纪念祭台？',['Con quién']);
  add('isabel_q2','traditions','¿Qué ponen primero?','他们首先摆什么？',['ponen','primero']);
  add('isabel_q3','traditions','¿Cuándo hablan de sus familiares?','他们什么时候谈论亲属？',['Cuándo','hablan de']);
  guide('traditions','按文中家庭理解',traditionContext,'En mi casa preparamos una ofrenda.');
  guide('traditions','说话者与转述者','Alberto 自述 mis padres（我的父母）；转述 sus padres（他的父母）。mi familia 为单数：mi familia prepara；nosotros 为复数：preparamos。','Mi familia prepara una ofrenda. Nosotros preparamos una ofrenda.');
  guide('traditions','同一句里的主语会变化','mis padres cuentan 是父母讲述；escuchamos 是我们听。hablar con 是和谁交谈；hablar de 是谈论谁或什么。','Mis padres cuentan recuerdos y escuchamos música juntos.');
  guide('traditions','para 的两种搭配','para recordar / compartir 表达目的；para nosotros 表达“对我们而言”。recordar a sus seres queridos 中，具体的人前保留 a。','Preparamos comida para compartir. Para nosotros es un momento especial.');
  // Profiles and evidence, including the social/sociable distinction.
  add('mario_friends','traits','Mario habla con muchas personas y hace amigos fácilmente.','Mario 和很多人交谈，很容易交到朋友。',['habla con','hace amigos','fácilmente']);
  add('mario_stories','traits','Inventa juegos e historias para sus amigos.','他为朋友们创造游戏和故事。',['Inventa','juegos e historias','para sus amigos']);
  add('mario_parties','traits','Le encanta organizar fiestas.','他特别喜欢组织聚会。',['Le encanta','organizar fiestas']);
  add('mario_traits','traits','Mario es sociable, creativo y fiestero.','Mario 善于交际、有创造力、爱聚会。',['sociable','creativo','fiestero']);
  add('raquel_projects','traits','Raquel prepara sus proyectos con un calendario y una lista.','Raquel 用日历和清单安排自己的项目。',['sus proyectos','un calendario','una lista']);
  add('raquel_help','traits','Explica las cosas con calma cuando alguien necesita ayuda.','当有人需要帮助时，她平静耐心地解释事情。',['Explica','con calma','cuando','necesita ayuda']);
  add('raquel_family','traits','Le gusta pasar tiempo con su familia.','她喜欢和家人相处。',['Le gusta','pasar tiempo','con su familia']);
  add('raquel_traits','traits','Raquel es organizada, paciente y familiar.','Raquel 有条理、有耐心，也喜欢与家人相处。',['organizada','paciente','familiar']);
  add('trait_social','traits','Uso las redes sociales.','我使用社交媒体。',[['sociales','补上 social 的复数。','social → sociales；redes sociales 是社交媒体。']]);
  add('trait_sociable','traits','Mario es sociable.','Mario 善于交际。',[['sociable','补上表示“善于交际”的形容词。','sociable 描述人的交际性格；这里不填 social。']]);
  add('trait_creativa','traits','Ana es creativa.','Ana 有创造力。',[['creativa','用 creativo 的恰当形式描述 Ana。','阴性单数用 creativa。']]);
  guide('traits','从行动找性格','Mario：交流交友 → sociable；创造游戏故事 → creativo；爱组织聚会 → fiestero。Raquel：日历清单 → organizada；平静帮助别人 → paciente；喜欢陪家人 → familiar。这些线索仅用于文中的虚构人物。','Mario es sociable, creativo y fiestero. Raquel es organizada, paciente y familiar.');
  guide('traits','阴阳性与单复数','creativo/creativa、fiestero/fiestera、organizado/organizada 随性别变。sociable、paciente、familiar 在阴阳性单数中形式相同。sociales 是 social 的复数；sociables 才是 sociable 的复数。','Mario es sociable. Raquel es sociable. Uso las redes sociales.');
  guide('traits','词块与语境','hacer amigos＝交朋友；con calma＝平静地；pasar tiempo con su familia＝和家人共度时间；familiar 在这段性格描述中指重视家庭，sus familiares 则指亲属。juegos e historias 中，e 代替 y 连接以 i 音开头的 historias。','Inventa juegos e historias. Le gusta pasar tiempo con su familia.');
  // Both supplied composition models and the four planning questions.
  [
    ['special_day','¿Qué día eliges?','你选哪一天？',['Qué día','eliges']],
    ['participants','¿Quiénes participan?','哪些人参加？',['Quiénes','participan']],
    ['first_action','¿Qué hacen primero?','他们先做什么？',['hacen','primero']],
    ['next_action','¿Qué hacen después?','他们之后做什么？',['hacen','después']],
    ['birthday','En mi ejemplo, celebramos un cumpleaños en casa.','在我的例子里，我们在家庆祝生日。',['celebramos','un cumpleaños','en casa']],
    ['table','Primero preparamos la mesa.','首先，我们准备餐桌。',['Primero','preparamos la mesa']],
    ['cooking','Después cocinamos juntos.','然后，我们一起做饭。',['Después','cocinamos juntos']],
    ['music','Por la tarde escuchamos música y hablamos.','下午，我们听音乐、聊天。',['Por la tarde','escuchamos música','hablamos']],
    ['morning1','Primero me despierto a las siete.','首先，我七点醒来。',['Primero','me despierto','a las siete']],
    ['morning2','Después me levanto y hago la cama.','然后，我起床并整理床铺。',['Después','me levanto','hago la cama']],
    ['morning3','Luego desayuno y me cepillo los dientes.','接着，我吃早饭并刷牙。',['Luego','desayuno','me cepillo los dientes']],
    ['morning4','Finalmente me visto y salgo de casa.','最后，我穿好衣服出门。',['Finalmente','me visto','salgo de casa']]
  ].forEach(([id,es,zh,targets])=>add('sequence_'+id,'sequence',es,zh,targets));
  guide('sequence','四个顺序词','primero 首先；después 然后；luego 接着；finalmente 最后。después + 已变位的动作，与 después de + 原形要分清。','Después me ducho. Después de cenar, me ducho.');
  guide('sequence','保持主语一致','描述自己用 me despierto / me levanto / desayuno / salgo；说我们用 celebramos / preparamos / cocinamos。说 mi familia 时按单数变位。','Mi familia celebra un cumpleaños. Nosotros celebramos un cumpleaños.');
  activities.push({group:'sequence',title:'特别的一天 · 四句表达',text:'选择真实或虚构的一天。用现在时说清选哪一天、谁参加、先做什么、之后做什么。先选 yo、mi familia 或 nosotros，并保持人称一致。'});
  activities.push({group:'sequence',title:'我的早晨 · 四到六句',text:'使用至少两个顺序词和两个带 me 的动作；至少使用一次 antes de / después de + 动词原形。可以先用上面的填空题练稳词块，再写自己的安排。'});
  // New-word flashcards. Multiword phrases above belong to clozes, not new vocabulary cards.
  const glossary={
    frequency:[
      ['vez','次','noun','feminine'],['veces','次（复数）','noun','feminine','vez'],['mes','月','noun','masculine'],['año','年','noun','masculine'],['normalmente','通常','adverb'],['casi','几乎','adverb'],['siempre','总是','adverb'],['nunca','从不','adverb'],['gimnasio','健身房','noun','masculine'],['fiesta','聚会','noun','feminine'],['universidad','大学','noun','feminine'],['karaoke','卡拉OK','noun','masculine'],['hostal','小旅馆；旅舍','noun','masculine']
    ],
    routines:[
      ['lavarse','洗自己；用于 me lavo los dientes','verb'],['ducharse','淋浴','verb'],['acostarse','上床；躺下睡觉','verb'],['vestirse','穿衣服','verb'],['levantarse','起床','verb'],['despertarse','醒来','verb'],['cepillarse','刷；给自己刷洗','verb'],['cenar','吃晚饭','verb'],['desayunar','吃早饭','verb'],['diente','牙齿','noun','masculine'],['dientes','牙齿（复数）','noun','masculine','diente'],['crema','护肤霜；乳霜','noun','feminine'],['baño','浴室；卫生间','noun','masculine'],['ducha','淋浴','noun','feminine'],['cama','床','noun','feminine'],['clase','课；课堂','noun','feminine'],['cocina','烹饪；厨房','noun','feminine'],['entrar','进入','verb'],['antes','之前','adverb'],['después','之后；然后','adverb'],['dar','给；darse una ducha 中为冲澡','verb'],['ponerse','穿上；涂上（用于自身）','verb']
    ],
    habits:[
      ['comprar','购买','verb'],['escribir','写','verb'],['leer','阅读','verb'],['planificar','规划','verb'],['decidir','决定','verb'],['salir','出去；离开','verb'],['caminar','步行；散步','verb'],['usar','使用','verb'],['frecuencia','频率','noun','feminine'],['pensamiento','想法；思绪','noun','masculine'],['pensamientos','想法（复数）','noun','masculine','pensamiento'],['diario','日记本','noun','masculine'],['libro','书','noun','masculine'],['vacaciones','假期','noun','feminine'],['ropa','衣物','noun','feminine'],['red','网络；网','noun','feminine'],['redes','网络（复数）','noun','feminine','red'],['social','社会的；社交的','adjective'],['sociales','社会的；社交的（复数）','adjective','','social'],['especial','特殊的','adjective'],['último','最后的','adjective'],['solo','只；仅','adverb'],['como','如同；例如（本课语境）','conjunction']
    ],
    clock:[['hora','小时；钟点','noun','feminine'],['media','一半；报时中指半小时','adjective'],['empezar','开始','verb'],['trabajar','工作','verb'],['familia','家人；家庭','noun','feminine']],
    irregular:[['poder','能；能够','verb'],['preferir','更喜欢；宁愿','verb'],['pedir','请求；要某物','verb'],['poner','放；摆','verb'],['hacer','做','verb'],['venir','来','verb'],['vaso','杯子','noun','masculine'],['mesa','桌子；餐桌','noun','feminine']],
    traditions:[
      ['recordar','记得；纪念','verb'],['preparar','准备','verb'],['ofrenda','纪念供奉；本阅读中的纪念祭台','noun','feminine'],['foto','照片','noun','feminine'],['fotos','照片（复数）','noun','feminine','foto'],['flor','花','noun','feminine'],['flores','花（复数）','noun','feminine','flor'],['también','也','adverb'],['comida','食物','noun','feminine'],['compartir','分享','verb'],['padre','父亲','noun','masculine'],['padres','父母；父亲们（依语境）','noun','masculine','padre'],['contar','讲述；数数','verb'],['recuerdo','回忆；往事','noun','masculine'],['recuerdos','回忆；往事（复数）','noun','masculine','recuerdo'],['escuchar','听','verb'],['música','音乐','noun','feminine'],['juntos','一起（阳性或混合复数语境）','adverb'],['cariño','关爱；温情','noun','masculine'],['memoria','记忆；本课指纪念与追忆','noun','feminine'],['colocar','摆放','verb'],['hablar','交谈；谈论','verb'],['familiares','亲属（复数名词用法）','noun','masculine','familiar'],['queridos','亲爱的；所爱的（复数）','adjective','','querido'],['seres','人；生灵（seres queridos 中）','noun','masculine','ser'],['nosotros','我们','pronoun'],['quién','谁','pronoun'],['quiénes','谁；哪些人（复数）','pronoun'],['su','他／她／您等的（单数名词前）','determiner'],['sus','他／她／您等的（复数名词前）','determiner']
    ],
    traits:[
      ['sociable','合群的；善交际的','adjective'],['creativo','有创造力的（阳性）','adjective'],['creativa','有创造力的（阴性）','adjective','','creativo'],['fiestero','爱聚会、爱热闹的（阳性）','adjective'],['fiestera','爱聚会的（阴性）','adjective','','fiestero'],['organizado','有条理的（阳性）','adjective'],['organizada','有条理的（阴性）','adjective','','organizado'],['paciente','有耐心的','adjective'],['familiar','重视家庭、喜欢与家人相处的（本课）','adjective'],['persona','人','noun','feminine'],['amigo','朋友（男；复数可含混合群体）','noun','masculine'],['fácilmente','容易地','adverb'],['inventar','创造；编造','verb'],['juego','游戏','noun','masculine'],['historia','故事；历史','noun','feminine'],['organizar','组织','verb'],['encantar','使人非常喜欢','verb'],['proyecto','项目','noun','masculine'],['calendario','日历','noun','masculine'],['lista','清单','noun','feminine'],['explicar','解释','verb'],['cosa','事情；东西','noun','feminine'],['calma','平静；从容','noun','feminine'],['cuando','当……时','conjunction'],['alguien','某人；有人','pronoun'],['necesitar','需要','verb'],['ayuda','帮助','noun','feminine'],['gustar','使人喜欢','verb'],['pasar','度过；经过','verb'],['tiempo','时间','noun','masculine'],['color','颜色','noun','masculine'],['colores','颜色（复数）','noun','masculine','color']
    ],
    sequence:[['primero','首先','adverb'],['luego','然后；接着','adverb'],['finalmente','最后','adverb'],['elegir','选择','verb'],['participar','参加','verb'],['celebrar','庆祝','verb'],['cumpleaños','生日（单数形式也以 s 结尾）','noun','masculine'],['cocinar','做饭','verb'],['ejemplo','例子','noun','masculine']]
  };
  const formWords=[];
  for(const v of conjugations)v.forms.forEach((form,i)=>formWords.push(['irregular',form,`${persons[i]}：${v.meaning}`,{part:'verb',lemma:v.verb,tense:'presente',persons:[persons[i]]}]));
  [['routines','me levanto','我起床','levantarse'],['routines','me despierto','我醒来','despertarse'],['routines','me visto','我穿衣服','vestirse'],['routines','me acuesto','我上床睡觉','acostarse']].forEach(([g,form,zh,lemma])=>formWords.push([g,form.replace('me ',''),zh+'（与 me 连用）',{part:'verb',lemma,tense:'presente',persons:['yo']}]));
  [['habits','salgo','我出去','salir'],['habits','escribo','我写','escribir'],['habits','leo','我阅读','leer'],['habits','planifico','我规划','planificar'],['habits','decido','我决定','decidir'],['habits','uso','我使用','usar'],['irregular','hago','我做','hacer'],['irregular','vengo','我来','venir']].forEach(([g,f,zh,lemma])=>formWords.push([g,f,zh,{part:'verb',lemma,tense:'presente',persons:['yo']}]));
  function vocabulary(group,text,meaning,lexical){
    const escaped=text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),re=new RegExp('(?<![\\p{L}\\p{M}])'+escaped+'(?![\\p{L}\\p{M}])','iu');
    const example=corpus.find(r=>r.group===group&&re.test(r.es))||corpus.find(r=>re.test(r.es));
    words.push({id:wordId(text),group,word:text,meaning,category:categories[group],pos:{noun:'名词',verb:'动词',adjective:'形容词',adverb:'副词',pronoun:'代词',determiner:'限定词',conjunction:'连词',preposition:'介词'}[lexical.part]||'词汇',level:'A1',functions:['日常表达'],unitId:'conversation_lessons',source:'对话课程 · '+groups.find(g=>g.id===group).title,example:example?.es||text,translation:example?.zh||meaning,note:lexical.part==='verb'?(lexical.tense==='presente'?'保留人称词形，再到填空题中使用。':'动词原形；放进“我／你／他”的句子时需变位。'):'按例句语境记忆。',lexical:{topics:[categories[group]],lemma:text,...lexical}});
  }
  for(const [g,rows] of Object.entries(glossary))for(const [text,meaning,part,gender,lemma] of rows)vocabulary(g,text,meaning,{part,gender:gender||'unknown',lemma:lemma||text,number:['veces','pensamientos','vacaciones','redes','sociales','dientes','fotos','flores','padres','recuerdos','familiares','queridos','seres','colores'].includes(text)?'plural':'singular',...(part==='verb'?{tense:'infinitivo',persons:[]}:{}),...(part==='noun'?{nounTypes:['common']}:{} )});
  for(const [g,text,meaning,lexical] of formWords)vocabulary(g,text,meaning,lexical);
  [
    ['routines','comer','吃饭',{part:'verb',tense:'infinitivo'}],
    ['routines','me','我自己；给自己（本课动作搭配）',{part:'pronoun'}],['routines','te','你自己；给你自己（本课）',{part:'pronoun'}],['routines','se','他／她／您自己（本课）',{part:'pronoun'}],
    ['habits','tus','你的（复数名词前）',{part:'determiner',lemma:'tu'}],['habits','mi','我的（单数名词前）',{part:'determiner'}],['habits','mis','我的（复数名词前）',{part:'determiner',lemma:'mi'}],
    ['habits','muchos','很多（阳性复数）',{part:'determiner',lemma:'mucho'}],['habits','muchas','很多（阴性复数）',{part:'determiner',lemma:'mucho'}],['habits','cuántas','多少（阴性复数疑问形式）',{part:'determiner',lemma:'cuánto'}],
    ['frequency','todos','所有；每个（阳性复数）',{part:'determiner',lemma:'todo'}],['frequency','todas','所有；每个（阴性复数）',{part:'determiner',lemma:'todo'}],
    ['sequence','para','为了；用于；对……而言',{part:'preposition'}],['sequence','con','和；用',{part:'preposition'}],['sequence','de','……的；来自；搭配中的连接成分',{part:'preposition'}],['sequence','en','在……里；在……时',{part:'preposition'}],['sequence','por','在某时段；按……单位（本课）',{part:'preposition'}],['sequence','a','到；在某钟点；搭配中的连接成分',{part:'preposition'}],['sequence','e','和（本句连接以 i 音开头的 historias）',{part:'conjunction'}],['routines','o','或者；还是',{part:'conjunction'}],
    ['irregular','yo','我',{part:'pronoun'}],['irregular','tú','你',{part:'pronoun'}],['irregular','él','他',{part:'pronoun'}],['irregular','ella','她',{part:'pronoun'}],['irregular','usted','您',{part:'pronoun'}],['irregular','nosotros','我们（阳性或混合）',{part:'pronoun'}],['irregular','nosotras','我们（全女性）',{part:'pronoun'}],['irregular','vosotros','你们（西班牙常用，阳性或混合）',{part:'pronoun'}],['irregular','vosotras','你们（西班牙常用，全女性）',{part:'pronoun'}],['irregular','ellos','他们',{part:'pronoun'}],['irregular','ellas','她们',{part:'pronoun'}],['irregular','ustedes','你们；诸位',{part:'pronoun'}]
  ].forEach(([g,text,meaning,lexical])=>vocabulary(g,text,meaning,lexical));
  const aliases={'a la semana':['por semana'],'por semana':['a la semana'],'una vez a la semana':['una vez por semana'],'una vez por semana':['una vez a la semana'],'a último momento':['en el último momento'],'me ducho':['me doy una ducha'],'Me lavo los dientes':['Me cepillo los dientes'],'ducharme':['darme una ducha']};
  for(const q of exercises)if(aliases[q.answers[0]])q.answers.push(...aliases[q.answers[0]]);
  const api={groups,words,exercises,corpus,guides,conjugations,persons,activities,norm};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroConversationData=api;
})(typeof window!=='undefined'?window:globalThis);
