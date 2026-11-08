/* Original recall and application practice for the learner's time-expression lesson. */
(function(root){
  'use strict';
  const norm=v=>String(v??'').normalize('NFC').toLocaleLowerCase('es').replace(/[¡¿!?.,;:«»“”]/gu,'').replace(/\s+/g,' ').trim();
  const small=['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve'];
  const tens={30:'treinta',40:'cuarenta',50:'cincuenta',60:'sesenta',70:'setenta',80:'ochenta',90:'noventa'};
  function number(n){if(!Number.isInteger(n)||n<0||n>100)throw new RangeError('数字范围是 0–100。');return n<30?small[n]:n===100?'cien':tens[n-n%10]+(n%10?' y '+small[n%10]:'');}
  const groups=[
    {id:'days',title:'星期',subtitle:'7 个词 · 每周哪几天做什么',tip:'lunes、martes、miércoles / jueves、viernes / sábado、domingo。先分组读，再打乱回忆。'},
    {id:'months',title:'月份',subtitle:'12 个词 · en + 月份',tip:'enero–marzo / abril–junio / julio–septiembre / octubre–diciembre。junio 六月，julio 七月。'},
    {id:'n0_15',title:'数字 0–15',subtitle:'16 张卡 · 先记基础数词',tip:'先记 0–10，再单独记 once、doce、trece、catorce、quince。'},
    {id:'n16_29',title:'数字 16–29',subtitle:'14 张卡 · dieci- 与 veinti-',tip:'16–19：dieci-；20：veinte；21–29：veinti-。重音：dieciséis、veintidós、veintitrés、veintiséis。'},
    {id:'n30_100',title:'数字 30–100',subtitle:'71 张卡 · 整十 + y + 个位',tip:'30 treinta、40 cuarenta、50 cincuenta、60 sesenta、70 setenta、80 ochenta、90 noventa、100 cien。31–99 的非整十数中间加 y。'},
    {id:'phrases',title:'课文词汇与词块',subtitle:'动作、时间、提问与原因',tip:'把 hago gimnasia / de lunes a viernes / por las mañanas 当作三块记。每次只替换一个信息。'}
  ];
  const words=[],exercises=[];
  function word(id,group,text,meaning,example,translation,note='',lexical={part:'expression'}){
    words.push({id:'tb_'+id,group,word:text,meaning,example,translation,note,category:'时间与数字',pos:({numeral:'数词',noun:'名词',verb:'动词',adjective:'形容词',determiner:'限定词',preposition:'介词',conjunction:'连词',pronoun:'代词',expression:'词块 / 表达'})[lexical.part]||'词块 / 表达',level:'A1',functions:['谈日常安排'],unitId:'time_basics',source:'数字、星期与月份 · 专项',lexical:{lemma:text,topics:['时间与数字'],...lexical}});
  }
  function q(id,group,prompt,sentence,answers,hint,why,mode='application'){
    exercises.push({id:'tq_'+id,group,prompt,sentence,answers:Array.isArray(answers)?answers:[answers],hint,why,mode});
  }
  const days=[['lunes','星期一'],['martes','星期二'],['miércoles','星期三'],['jueves','星期四'],['viernes','星期五'],['sábado','星期六'],['domingo','星期日']];
  days.forEach(([d,zh],i)=>{
    const plural=i>=5?d+'s':d;
    word('day_'+i,'days',d,zh,`Estudio español los ${plural}.`,`我每${zh}学西班牙语。`.replace('每星期','每周'),`el ${d}：某个${zh}；los ${plural}：每${zh}。`,{part:'noun',gender:'masculine',number:'singular',nounTypes:['common','abstract','countable']});
    q('day_'+i,'days',`补上${zh}：我每${zh}学习西班牙语。`.replaceAll('每星期','每周'),'Estudio español los ___.',plural,i>=5?'sábado、domingo 的复数要加 s。':'前五个星期名词的单复数形式相同。',`los ${plural} 表示每${zh}的习惯。`);
  });
  const months=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  months.forEach((m,i)=>{
    word('month_'+i,'months',m,(i+1)+'月',`En ${m}, estudio español los martes.`,`${i+1}月份，我每周二学西班牙语。`,'月份通常小写；在某个月用 en + 月份。',{part:'noun',gender:'masculine',number:'singular',nounTypes:['common','abstract','countable']});
    q('month_'+i,'months',`补上月份：${i+1}月份，我每周四健身。`,'En ___, hago gimnasia los jueves.',m,i===5?'六月是 junio，七月是 julio。':i===6?'七月是 julio，六月是 junio。':'在某个月：en + 月份；月份小写。',`${i+1}月是 ${m}；En ${m}, hago gimnasia los jueves.`);
  });
  for(let n=0;n<=100;n++){
    const group=n<16?'n0_15':n<30?'n16_29':'n30_100',text=number(n),note=n>=31&&n<100&&n%10?'整十 + y + 个位；分开写。':n>=21&&n<=29?'veinti- 与个位连写。':n===100?'正好 100：cien。':'先回想，再核对拼写和重音。';
    word('n_'+n,group,text,String(n),text,String(n),note,{part:'numeral'});
    q('n_'+n,group,`请用西语写出数字 ${n}。`,'___',text,n>=31&&n<100&&n%10?'整十 + y + 个位。':n>=21&&n<=29?'用 veinti- 开头，连成一个词。':'回想这个数字的独立读法。',`${n} = ${text}。${note}`,'recall');
  }
  const rows=[
    ['estudiar','学习','Estudio español los martes.','我每周二学西班牙语。','我 estudio；你 estudias。',{part:'verb',tense:'infinitivo'}],
    ['estudio','我学习','Estudio español los jueves.','我每周四学西班牙语。','estudiar 的 yo 现在时。',{part:'verb',lemma:'estudiar',tense:'presente',persons:['yo']}],
    ['estudias','你学习','¿Qué días estudias español?','你每周哪几天学西班牙语？','estudiar 的 tú 现在时。',{part:'verb',lemma:'estudiar',tense:'presente',persons:['tú']}],
    ['español','西班牙语','Estudio español.','我学西班牙语。','语言名称通常小写。',{part:'noun',gender:'masculine',number:'singular'}],
    ['hacer','做','Hago gimnasia los lunes.','我每周一健身。','我 hago；你 haces。',{part:'verb',tense:'infinitivo'}],
    ['hago','我做','Hago gimnasia por las mañanas.','我早上健身。','hacer 的 yo 现在时是不规则的 hago。',{part:'verb',lemma:'hacer',tense:'presente',persons:['yo']}],
    ['haces','你做','¿Cuándo haces gimnasia?','你什么时候健身？','hacer 的 tú 现在时。',{part:'verb',lemma:'hacer',tense:'presente',persons:['tú']}],
    ['gimnasia','体操；健身','Hago gimnasia los viernes.','我每周五健身。','hacer gimnasia 一起记。',{part:'noun',gender:'feminine',number:'singular'}],
    ['hacer gimnasia','做体操；健身','Hago gimnasia de lunes a viernes.','我从周一到周五健身。','动词原形 hacer；说“我做”用 hago。'],
    ['mirar','看；观看','Miro televisión todas las noches.','我每天晚上看电视。','我 miro；你 miras。',{part:'verb',tense:'infinitivo'}],
    ['miro','我看','Miro televisión por la noche.','我晚上看电视。','mirar 的 yo 现在时。',{part:'verb',lemma:'mirar',tense:'presente',persons:['yo']}],
    ['miras','你看','¿Cuándo miras televisión?','你什么时候看电视？','miras televisión 分开写。',{part:'verb',lemma:'mirar',tense:'presente',persons:['tú']}],
    ['televisión','电视','Miro televisión los sábados.','我每周六看电视。','televisión 的 ó 有重音。',{part:'noun',gender:'feminine',number:'singular'}],
    ['mirar televisión','看电视','Miro televisión todas las noches.','我每天晚上看电视。','我看电视：miro televisión。'],
    ['ver','看见；见到','Veo a mis amigas los viernes.','我每周五见我的女性朋友们。','我 veo；你 ves。',{part:'verb',tense:'infinitivo'}],
    ['veo','我看见；我见到','Veo a mis amigas.','我见我的女性朋友们。','ver 的 yo 现在时是不规则的 veo。',{part:'verb',lemma:'ver',tense:'presente',persons:['yo']}],
    ['amigas','女性朋友们','Veo a mis amigas.','我见我的女性朋友们。','amiga 的复数是 amigas；这里不一定指女朋友。',{part:'noun',lemma:'amiga',gender:'feminine',number:'plural'}],
    ['día','天；白天','Estudio español todos los días.','我每天学西班牙语。','día 虽然以 a 结尾，却是阳性。',{part:'noun',gender:'masculine',number:'singular'}],
    ['días','天（复数）','¿Qué días estudias español?','你每周哪几天学西班牙语？','día → días；todos los días 表示每天。',{part:'noun',lemma:'día',gender:'masculine',number:'plural'}],
    ['mañana','早晨；明天（依语境）','Hago gimnasia por la mañana.','我早上健身。','por la mañana 是在早上；mañana 单独作副词可表示明天。',{part:'noun',gender:'feminine',number:'singular'}],
    ['tarde','下午；傍晚','Estudio español por la tarde.','我下午学西班牙语。','作时间名词时是阴性。',{part:'noun',gender:'feminine',number:'singular'}],
    ['noche','晚上；夜晚','Miro televisión por la noche.','我晚上看电视。','noche → noches；阴性。',{part:'noun',gender:'feminine',number:'singular'}],
    ['semana','周；星期','El viernes es mi día preferido de la semana.','星期五是一周中我最喜欢的一天。','de la semana：一周中的。',{part:'noun',gender:'feminine',number:'singular'}],
    ['momento','时刻；时段','¿Cuál es tu momento preferido de la semana?','一周里你最喜欢哪个时段？','momento 是阳性，用 preferido。',{part:'noun',gender:'masculine',number:'singular'}],
    ['preferido','最喜欢的（阳性单数）','Mi momento preferido es el viernes por la tarde.','我最喜欢的时段是星期五下午。','修饰 momento 时用 preferido。',{part:'adjective'}],
    ['¿Qué días?','每周哪几天？','¿Qué días estudias español?','你每周哪几天学西班牙语？','qué 有重音；días 是复数。'],
    ['¿Cuándo?','什么时候？','¿Cuándo haces gimnasia?','你什么时候健身？','cuándo 的 á 有重音。'],
    ['¿Cuál?','哪个？','¿Cuál es tu momento preferido?','你最喜欢哪个时段？','cuál 的 á 有重音。'],
    ['es','是（这里对应单数时段）','¿Cuál es tu momento preferido?','你最喜欢哪个时段？','es 来自 ser。',{part:'verb',lemma:'ser',tense:'presente',persons:['él / ella / usted']}],
    ['tu','你的','¿Cuál es tu momento preferido?','你最喜欢哪个时段？','物主词 tu 没有重音；人称代词 tú 表示“你”。',{part:'determiner'}],
    ['mis','我的（用于复数名词前）','Veo a mis amigas.','我见我的女性朋友们。','mi amiga → mis amigas。',{part:'determiner',lemma:'mi'}],
    ['¿Por qué?','为什么？','¿Por qué estudias español?','你为什么学西班牙语？','问原因：分开写，qué 有重音。'],
    ['porque','因为','Porque veo a mis amigas.','因为我见我的女性朋友们。','回答原因：连写，没有重音。',{part:'conjunction'}],
    ['de lunes a viernes','从周一到周五','Hago gimnasia de lunes a viernes.','我从周一到周五健身。','de…a…＝从……到……；这里星期前不加冠词。'],
    ['por la mañana','在早上','Estudio español por la mañana.','我早上学西班牙语。','por + la + 时间名词。'],
    ['por las mañanas','在早上（常用于日常习惯）','Hago gimnasia de lunes a viernes por las mañanas.','我从周一到周五每天早上健身。','por la mañana 也可用于习惯；复数形式常强调惯常时段。'],
    ['por la tarde','在下午、傍晚','Veo a mis amigas el viernes por la tarde.','我星期五下午见我的女性朋友们。','把 por la tarde 整块记。'],
    ['por la noche','在晚上','Miro televisión por la noche.','我晚上看电视。','把 por la noche 整块记。'],
    ['todas las noches','每天晚上','Miro televisión todas las noches.','我每天晚上看电视。','noche 是阴性；复数用 todas las noches。'],
    ['todos los días','每天','Estudio español todos los días.','我每天学西班牙语。','día 是阳性；复数用 todos los días。'],
    ['de la semana','一周中的','¿Cuál es tu momento preferido de la semana?','一周里你最喜欢哪个时段？','de 表示关系；semana 是阴性，用 la。'],
    ['veo a mis amigas','我见我的女性朋友们','El viernes por la tarde veo a mis amigas.','星期五下午我见我的女性朋友们。','见具体的人时，保留这里的 a。'],
    ['el viernes por la tarde','星期五下午','Mi momento preferido es el viernes por la tarde.','我最喜欢的时段是星期五下午。','每周五下午：los viernes por la tarde。'],
    ['y','和；并且','Estudio español los martes y jueves.','我每周二和周四学西班牙语。','数字 31–99 的非整十数中，也用 y 连接整十与个位。',{part:'conjunction'}],
    ['de…a…','从……到……','Hago gimnasia de lunes a viernes.','我从周一到周五健身。','星期范围：de lunes a viernes。'],
    ['en + mes','在某个月','En marzo, estudio español los martes.','三月份，我每周二学西班牙语。','mes＝月份；en enero＝在一月。']
  ];
  rows.forEach((r,i)=>word('phrase_'+i,'phrases',...r));
  const authored=[
    ['habit','days','补上冠词，明确表示“每周二”。','Estudio español ___ martes.','los','每周几的习惯用复数定冠词。','los martes＝每周二；el martes 通常指某个星期二。'],
    ['single','days','只说某个星期二，补上单数定冠词。','Estudio español ___ martes.','el','这里不是“每周二”。','el martes 通常指某个星期二；los martes 表示每周二。'],
    ['range','days','补上“从……到……”：我从周一到周五健身。','Hago gimnasia ___ lunes a viernes.','de','把 de…a… 整块回想。','de lunes a viernes；这个范围表达里星期前不加冠词。'],
    ['range_a','days','补上“到”：从周一到周五。','de lunes ___ viernes','a','从……到……：de…a…。','de lunes a viernes。'],
    ['day_question','days','补上疑问词：你每周哪几天学西班牙语？','¿___ días estudias español?','Qué','问“哪几天”。','¿Qué días…? 询问一周里的哪几天；Qué 有重音。'],
    ['days_sentence','days','完整写出：我每周四、周六学西班牙语。','___',['Estudio español los jueves y sábados.','Los jueves y sábados estudio español.'],'我学习用 estudio；每周几用 los。','Estudio español los jueves y sábados. 注意 sábados 的重音和复数。'],
    ['month_en','months','补上介词：三月份，我每周二学西班牙语。','___ marzo, estudio español los martes.','En','在某个月：en + 月份。','月份前这里用 en，月份小写。'],
    ['month_sentence','months','完整写出：五月份，我每天晚上看电视。','___',['En mayo, miro televisión todas las noches.','Miro televisión todas las noches en mayo.'],'五月 mayo；每天晚上 todas las noches。','En mayo, miro televisión todas las noches.'],
    ['minutes_12','n0_15','用西语写出数量：我学十二分钟西班牙语。','Estudio español ___ minutos.','doce','12 不使用 diez 加个位。','12＝doce；Estudio español doce minutos.'],
    ['minutes_16','n16_29','用西语写出数量：我学十六分钟西班牙语。','Estudio español ___ minutos.','dieciséis','以 dieci- 开头，留意 é。','16＝dieciséis；重音也要写出来。'],
    ['minutes_20','n16_29','用西语写出数量：我学二十分钟西班牙语。','Estudio español ___ minutos.','veinte','20 单独记。','20＝veinte；21–29 的开头变成 veinti-。'],
    ['minutes_26','n16_29','用西语写出数量：我学二十六分钟西班牙语。','Estudio español ___ minutos.','veintiséis','veinti- 和个位连写。','26＝veintiséis。'],
    ['minutes_38','n30_100','用西语写出数量：我学三十八分钟西班牙语。','Estudio español ___ minutos.','treinta y ocho','整十 + y + 个位。','38＝treinta y ocho，分成三个词。'],
    ['minutes_45','n30_100','用西语写出数量：我学四十五分钟西班牙语。','Estudio español ___ minutos.','cuarenta y cinco','40＝cuarenta。','45＝cuarenta y cinco。'],
    ['minutes_100','n30_100','用西语写出数量：我学一百分钟西班牙语。','Estudio español ___ minutos.','cien','正好 100。','正好 100 用 cien；这里是 cien minutos。'],
    ['study_yo','phrases','用 estudiar 的现在时补全“我学习”。','Yo ___ español.','estudio','我：yo；规则 -ar 动词用 -o。','estudiar → yo estudio。'],
    ['study_tu','phrases','用 estudiar 的现在时补全“你学习”。','¿Qué días ___ español?','estudias','问的是 tú。','estudiar → tú estudias；回答“我学”用 estudio。'],
    ['hago','phrases','用 hacer 的现在时补全“我健身”。','Yo ___ gimnasia.','hago','hacer 的我形式不规则。','yo hago；tú haces。'],
    ['haces','phrases','用 hacer 的现在时问“你什么时候健身”。','¿Cuándo ___ gimnasia?','haces','问的是 tú。','¿Cuándo haces gimnasia? → Hago gimnasia…'],
    ['miro','phrases','用 mirar 的现在时补全“我看电视”。','Yo ___ televisión.','miro','我：yo。','yo miro；tú miras。'],
    ['miras','phrases','用 mirar 的现在时问“你什么时候看电视”。','¿Cuándo ___ televisión?','miras','问的是 tú。','¿Cuándo miras televisión? 注意 miras 和 televisión 之间有空格。'],
    ['veo','phrases','用 ver 的现在时补全“我见朋友”。','Yo ___ a mis amigas.','veo','ver 的我形式不规则。','ver → veo；见具体的人时保留 a。'],
    ['personal_a','phrases','补上介词：我见我的女性朋友们。','Veo ___ mis amigas.','a','直接宾语是具体的人。','Veo a mis amigas. 这里的 a 不要漏掉。'],
    ['all_nights','phrases','补上“所有的”，使性数与 noches 一致。','Miro televisión ___ las noches.','todas','noche 是阴性，noches 是复数。','todas las noches＝每天晚上。'],
    ['all_days','phrases','补上“所有的”，使性数与 días 一致。','Estudio español ___ los días.','todos','día 是阳性，días 是复数。','todos los días＝每天。'],
    ['morning','phrases','补上介词：我早上健身。','Hago gimnasia ___ las mañanas.','por','在早上：por las mañanas。','por las mañanas 常用于习惯性活动。'],
    ['afternoon','phrases','补上“下午”：星期五下午。','El viernes por la ___.','tarde','早上 mañana；下午……','el viernes por la tarde。'],
    ['when','phrases','补上“什么时候”，询问健身的时间。','¿___ haces gimnasia?','Cuándo','这个疑问词有重音。','¿Cuándo…? 可以用星期或早晚等时间回答。'],
    ['which','phrases','补上“哪个”：你最喜欢哪个时段？','¿___ es tu momento preferido?','Cuál','对应“哪个”，不是“什么时候”。','¿Cuál es tu momento preferido?'],
    ['why','phrases','补上完整的“为什么”。','¿___ estudias español?','Por qué','两个词；qué 有重音。','问原因用 por qué；回答用 porque。'],
    ['because','phrases','补上“因为”：因为我见朋友。','___ veo a mis amigas.','Porque','回答原因，连成一个词。','Porque veo a mis amigas.'],
    ['tu','phrases','补上“你的”：你最喜欢哪个时段？','¿Cuál es ___ momento preferido?','tu','物主词没有重音。','tu＝你的；tú＝你。'],
    ['mis','phrases','补上“我的”，与复数 amigas 配合。','Veo a ___ amigas.','mis','mi amiga → 复数……','mis amigas；物主词与被修饰名词的数配合。'],
    ['week','phrases','补上“一周”：一周里你最喜欢哪个时段？','¿Cuál es tu momento preferido de la ___?','semana','一周中的：de la semana。','semana 是阴性，前面用 la。'],
    ['preferido','phrases','用 preferido 的恰当形式修饰 momento。','Mi momento ___ es el viernes por la tarde.','preferido','momento 是阳性单数。','momento preferido；阴性名词才用 preferida。'],
    ['night_sentence','phrases','完整写出：我每天晚上看电视。','___',['Miro televisión todas las noches.','Todas las noches miro televisión.'],'我看：miro；每天晚上：todas las noches。','Miro televisión todas las noches.'],
    ['morning_sentence','phrases','完整写出：我每周一早上健身。','___',['Hago gimnasia los lunes por la mañana.','Los lunes por la mañana hago gimnasia.','Hago gimnasia los lunes por las mañanas.'],'我健身：hago gimnasia；每周一：los lunes。','Hago gimnasia los lunes por la mañana.'],
    ['favorite_sentence','phrases','按课文方式，用短语回答最喜欢的时段：“星期六晚上”。','___','El sábado por la noche.','星期六 sábado；晚上 por la noche。','El sábado por la noche. 若说每周六晚上则用 los sábados por la noche。']
  ];
  authored.forEach(r=>q(...r));
  const dialogue=[
    ['¿Qué días estudias español?','你每周哪几天学西班牙语？','Estudio español los martes, jueves y sábados.','我每周二、周四、周六学西班牙语。'],
    ['¿Cuándo haces gimnasia?','你什么时候健身？','Hago gimnasia de lunes a viernes por las mañanas.','我从周一到周五每天早上健身。'],
    ['¿Cuándo miras televisión?','你什么时候看电视？','Miro televisión todas las noches.','我每天晚上看电视。'],
    ['¿Cuál es tu momento preferido de la semana? ¿Por qué?','一周里你最喜欢哪个时段？为什么？','El viernes por la tarde. Porque veo a mis amigas.','星期五下午。因为我见我的女性朋友们。']
  ];
  const rules=[
    ['某个星期几与每周几','el martes：某个星期二；los martes：每周二。前五个星期词形不变，sábado / domingo 的复数加 s。','Estudio español los martes, jueves y sábados.'],
    ['从……到……','de…a… 整块记；de lunes a viernes 里，星期前不加 el 或 los。','Hago gimnasia de lunes a viernes.'],
    ['早上、下午、晚上','por la mañana / por la tarde / por la noche；por las mañanas 常用于日常习惯，单数形式也能表达习惯。','Hago gimnasia por las mañanas.'],
    ['每天与每天晚上','día 是阳性：todos los días；noche 是阴性：todas las noches。','Miro televisión todas las noches.'],
    ['问你，回答我','estudias → estudio；haces → hago；miras → miro。主语 yo / tú 经常省略。','¿Cuándo haces gimnasia? Hago gimnasia los lunes.'],
    ['见到朋友','ver 的我形式是 veo；见具体的人时，这里保留 a；mis 用在复数名词前。','Veo a mis amigas.'],
    ['选对疑问词','qué días：哪几天；cuándo：什么时候；cuál：哪个；por qué：为什么。疑问词有重音。','¿Cuál es tu momento preferido de la semana?'],
    ['为什么与因为','por qué 分开写，qué 有重音；porque 连写，无重音。','¿Por qué? Porque veo a mis amigas.'],
    ['你的时段与最喜欢的时段','tu 表示“你的”，无重音；tú 表示“你”。momento 是阳性，形容词用 preferido。','¿Cuál es tu momento preferido?'],
    ['数字的拼写规律','0–15 先记基础；16–19 用 dieci-；20 veinte；21–29 用 veinti- 连写；31–99 非整十数用“整十 + y + 个位”；正好100是 cien。','dieciséis; veintitrés; treinta y ocho; cien'],
    ['月份、星期与大小写','月份、星期通常小写。在某个月用 en + 月份；六月 junio，七月 julio。','En julio, estudio español los lunes.']
  ];
  function mergeWords(state){
    let added=0;const existing=new Set(state.words.map(w=>norm(w.word))),ids=new Set([...state.words,...state.articles,...state.notes].map(w=>w.id));
    for(const w of words){if(existing.has(norm(w.word)))continue;let id=w.id;while(ids.has(id))id+='_t';state.words.push({...w,id,lexical:structuredClone(w.lexical)});existing.add(norm(w.word));ids.add(id);added++;}return added;
  }
  function grade(input,item){const correct=item.answers.some(a=>norm(a)===norm(input));const fold=v=>norm(v).normalize('NFD').replace(/[\u0300-\u036f]/gu,'');return {correct,accentOnly:!correct&&item.answers.some(a=>fold(a)===fold(input))};}
  function validateProgress(value){
    const v=value&&typeof value==='object'?value:{},validQ=new Set(exercises.map(x=>x.id)),validW=new Set(words.map(x=>x.id)),validG=new Set(groups.map(x=>x.id));
    const attempts=(Array.isArray(v.attempts)?v.attempts:[]).filter(a=>a&&validQ.has(a.id)&&Number.isFinite(a.time)).slice(-3000).map(a=>({id:a.id,input:String(a.input||'').slice(0,300),correct:!!a.correct,usedHint:!!a.usedHint,revealed:!!a.revealed,time:a.time}));
    let active=null;const a=v.active;
    if(a&&['cards','quiz'].includes(a.mode)&&validG.has(a.group)&&Array.isArray(a.ids)&&a.ids.length&&a.ids.length<=10&&a.ids.every(id=>(a.mode==='cards'?validW:validQ).has(id))){
      const index=Math.max(0,Math.min(a.ids.length,Math.floor(Number(a.index)||0)));
      active={mode:a.mode,group:a.group,ids:[...a.ids],index,direction:a.direction==='es'?'es':'zh',revealed:!!a.revealed,states:a.ids.map((_,i)=>{const s=a.states?.[i]||{};return {input:String(s.input||'').slice(0,300),checked:!!s.checked,correct:!!s.correct,usedHint:!!s.usedHint,revealed:!!s.revealed};})};
    }
    return {attempts,active};
  }
  const api={norm,number,groups,words,exercises,dialogue,rules,mergeWords,grade,validateProgress};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroTimeData=api;
})(typeof window!=='undefined'?window:globalThis);
