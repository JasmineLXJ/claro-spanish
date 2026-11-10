/* A listening workspace. Media stays on the device; only metadata enters backups. */
(function(root){
  'use strict';
  root.ClaroListening={create,createYouTubeLoader,youtubeErrorMessage};
  function youtubeErrorMessage(code){
    if([101,150].includes(Number(code)))return '这个视频不允许在其他网页内播放。可打开 YouTube 原视频，或关联原声音频继续。';
    if(Number(code)===100)return 'YouTube 未提供这个视频，可能已被移除或设为私密。可关联原声音频继续。';
    if(Number(code)===153)return 'YouTube 未接受此播放器的来源识别（153）。可打开原视频，或关联原声音频继续。';
    return 'YouTube 原视频暂时无法播放'+(code?'（'+String(code).slice(0,10)+'）':'')+'。可重试连接，或关联原声音频继续。';
  }
  function createYouTubeLoader(win,doc){
    let pending=null;
    return function load(){
      if(win.YT?.Player)return Promise.resolve();
      if(pending)return pending;
      const request=new Promise((resolve,reject)=>{
        const previous=win.onYouTubeIframeAPIReady,script=doc.createElement('script');
        let settled=false,timeout;
        const finish=error=>{
          if(settled)return;settled=true;clearTimeout(timeout);script.onerror=null;script.onload=null;
          if(win.onYouTubeIframeAPIReady===ready)win.onYouTubeIframeAPIReady=previous;
          if(error){script.remove();reject(error);}else resolve();
        };
        const ready=()=>{try{if(typeof previous==='function')previous();}catch{}if(win.YT?.Player)finish();};
        win.onYouTubeIframeAPIReady=ready;
        script.src='https://www.youtube.com/iframe_api';script.async=true;
        script.onerror=()=>finish(new Error('YouTube 播放器组件未能载入。可重试连接，或关联原声音频继续。'));
        script.onload=()=>{if(win.YT?.Player)finish();};
        timeout=setTimeout(()=>finish(new Error('YouTube 播放器组件加载超时。可重试连接，或关联原声音频继续。')),15000);
        try{doc.head.append(script);}catch{finish(new Error('YouTube 播放器组件未能载入。可重试连接，或关联原声音频继续。'));}
      });
      pending=request;
      request.then(()=>{if(pending===request)pending=null;},()=>{if(pending===request)pending=null;});
      return request;
    };
  }
  function create(api){
    const S=ClaroStudy, $=s=>document.querySelector(s), {esc,btn,icon,go,toast,persist,getState,openModal}=api;
    const state=()=>getState();
    const map=ClaroSentenceMap.create({esc,btn,icon,current:()=>effective(current()),lesson:()=>lesson,collectWord:api.collectWord});
    const effective=c=>{const a=ClaroAnalysis.resolve(c);return {...c,translation:c.translation||a?.translation||'',explanation:c.explanation||a?.focus||'',analysis:a,grammarIds:[...new Set([...c.grammarIds,...(a?.grammarIds||[])])]};};
    const exportLesson=()=>({...lesson,cues:lesson.cues.map(effective)});
    let lesson,index=0,mode='listen',loop=false,speed=1,player,timer,yt,ytReady=false,ytReadyTimer,mediaURL,recordingURL,recorder,stream,recordTimer,recordGeneration=0,recordPending=false,mountGeneration=0;
    let reveal=false,feedback=null,drafts={},capabilities=null,importBusy=false,explainBusy=false,useVideo=false,lastLessonId='';
    const time=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
    const current=()=>lesson?.cues[index];
    const progress=()=>state().listening[lesson.id] ||= {index:0,completed:[],attempts:0};
    function db(){return new Promise((resolve,reject)=>{const req=indexedDB.open('claro-local-media',1);req.onupgradeneeded=()=>req.result.createObjectStore('audio');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(new Error('浏览器无法保存音频。请允许网站使用本地存储。'));});}
    async function mediaStore(key,value){const database=await db();try{return await new Promise((resolve,reject)=>{const tx=database.transaction('audio',value===undefined?'readonly':'readwrite'),store=tx.objectStore('audio'),r=value===undefined?store.get(key):store.put(value,key);let result;r.onsuccess=()=>{result=r.result;};tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(new Error('音频保存失败，可能已超出浏览器存储空间。'));tx.onabort=()=>reject(new Error('音频未能保存。'));});}finally{database.close();}}
    function library(){
      return api.pageTitle('ESCUCHAR Y ENTENDER','听说工作室','听清一句，读懂一句，再用自己的声音说出来。',btn(icon('plus')+' 导入视频 / 音频','import-lesson','','primary'))+
        `<div class="listening-intro card"><div><span class="eyebrow">从声音到知识点</span><h2>原声 → 逐句练习 → 语法手帐</h2><p>YouTube 视频、本地音频和字幕，都可以成为你的学习材料。</p></div><a href="#search" class="text-btn">搜已收录的字幕 ${icon('search')}</a></div><div class="lesson-grid">${state().lessons.map(l=>{const done=state().listening[l.id]?.completed?.length||0;return `<article class="lesson-card card"><div class="lesson-art"><span>${l.original?'ESPAÑOL · A1':'MI COLECCIÓN'}</span><strong lang="es">${esc(l.title)}</strong><span>${l.original?'原创讲解 · Mónica 西语合成音':l.youtubeId?'YouTube · 导入字幕':'本地音频 · 导入字幕'}</span></div><div class="lesson-card-body"><div class="article-meta"><span class="tag level">${esc(l.level)}</span><span>${l.cues.length} 句</span><span>${time(l.cues.at(-1).end)}</span></div><p>${l.original?'介绍自己、走进咖啡馆，认识 9 个基础语法主题。':'保留原句和时间轴，译文与讲解可随时补充。'}</p><div class="lesson-bottom"><span>${done} / ${l.cues.length} 句已练习</span><a href="#listen/${l.id}" class="text-btn">${done?'继续练习':'打开学习'} ${icon('arrow')}</a></div></div></article>`;}).join('')}</div><p class="info-note">学习进度保存在当前浏览器。导入的音频也保存在本机；JSON 备份包含字幕与讲解，音频请另存原文件。字幕按原时间分段，长句可能跨越多条字幕。</p>`;
    }
    function workspace(id,cueId){
      if(lastLessonId!==id){useVideo=false;mode='listen';lastLessonId=id;}
      lesson=state().lessons.find(l=>l.id===id);if(!lesson)return api.empty('找不到这份听说素材','从听说工作室重新选择一份材料。','<a class="btn" href="#listening">返回听说工作室</a>');
      index=cueId?Math.max(0,lesson.cues.findIndex(c=>c.id===cueId)):Math.min(progress().index,lesson.cues.length-1);
      reveal=false;feedback=null;
      return `<a class="back-btn" href="#listening">${icon('back')} 返回听说工作室</a>${api.pageTitle('UNA FRASE A LA VEZ',esc(lesson.title),'点击字幕定位原声，也可以切换跟读和听写。',btn('导出字幕与讲解','export-lesson')+(lesson.youtubeId&&(lesson.audioKey||lesson.audioUrl)?btn(useVideo?'仅听音频':'看原视频','toggle-video'):''))}<div class="listening-layout"><section class="listening-main"><div class="listening-player card"><div id="lesson-source">${lesson.youtubeId?'<div id="youtube-player"></div>':`<div class="audio-cover"><span class="eyebrow">${lesson.original?'原创示范 · 西语合成音':'MI AUDIO · 本机音频'}</span><p lang="es">Escucha una frase.<br><em>Hazla tuya.</em></p><span>${lesson.original?'先听懂，再慢慢跟上。':'按字幕时间定位，反复听清每一句。'}</span><div class="audio-strokes" aria-hidden="true">${Array.from({length:27},(_,i)=>`<i style="height:${12+(i*17%49)}px"></i>`).join('')}</div></div><audio id="lesson-audio" controls preload="metadata" aria-label="课程音频"></audio>`}</div><p id="lesson-media-status" class="media-status" role="status">正在准备音频…</p><div class="sentence-controls">${btn('上一句','cue-prev','aria-label="上一句"','small')}${btn(icon('sound')+' 播放本句','cue-play','','primary')}${btn(icon('stop')+' 停止','cue-stop','','small')}${btn('下一句','cue-next','aria-label="下一句"','small')}</div><div class="listening-options"><button type="button" data-action="cue-loop" aria-pressed="${loop}" class="loop-button ${loop?'active':''}">↻ 单句循环</button><label>速度 <select id="lesson-speed" aria-label="播放速度">${[0.65,0.85,1,1.25].map(v=>`<option value="${v}" ${speed===v?'selected':''}>${v}×</option>`).join('')}</select></label><span id="sentence-position"></span></div></div><div class="practice-card card"><div class="tabs practice-tabs" role="group" aria-label="练习方式">${[['listen','精听'],['shadow','跟读'],['dictation','听写']].map(([v,label])=>`<button type="button" class="tab ${mode===v?'active':''}" data-action="lesson-mode" data-value="${v}" aria-pressed="${mode===v}">${label}</button>`).join('')}</div><div id="sentence-practice"></div></div><div class="transcript card"><div class="transcript-heading"><h2>逐句字幕</h2><span class="tiny muted">点击一句，定位并查看讲解</span></div><div id="transcript-rows"></div></div></section><aside class="sentence-aside card" id="sentence-insight"></aside></div>`;
    }
    function paint(){
      if(!lesson||!$('#sentence-practice'))return;
      const c=effective(current()),hidden=mode==='dictation'&&!reveal&&!feedback;
      $('#sentence-position').textContent=`${index+1} / ${lesson.cues.length} 句`;
      $('[data-action="cue-prev"]').disabled=index===0;$('[data-action="cue-next"]').disabled=index===lesson.cues.length-1;
      document.querySelectorAll('[data-action="lesson-mode"]').forEach(b=>{b.classList.toggle('active',b.dataset.value===mode);b.setAttribute('aria-pressed',b.dataset.value===mode);});
      $('#sentence-practice').innerHTML=`<div class="sentence-label"><span>第 ${index+1} 句 · ${time(c.start)}–${time(c.end)}</span>${progress().completed.includes(c.id)?'<span>已练习 ✓</span>':''}</div>${hidden?'<p class="dictation-hidden">先听声音，试着写下来。</p>':`<p class="active-sentence" lang="es">${map.wordLine(c.text)}</p>${map.selectionBar()}`}${mode==='listen'?`<p class="practice-hint">听完后看看讲解，弄懂这句话为什么这样说。</p>`:''}${mode==='shadow'?`<p class="practice-hint">先播放原声，再录一遍自己的声音，对照节奏和发音。</p><div class="record-controls">${btn(recorder?.state==='recording'?'停止录音':'录制我的跟读','record-sentence','',recorder?.state==='recording'?'again':'')}${recordingURL?'<audio controls id="recording-audio" aria-label="我的跟读录音"></audio>':''}</div><p id="record-status" class="info-note" role="status">${recorder?.state==='recording'?'正在录音，最长 60 秒。':'录音仅在本次页面中保存；不会上传，也没有自动发音评分。'}</p>`:''}${mode==='dictation'?`<form id="dictation-form"><label class="field">写下你听到的西语<textarea name="answer" id="dictation-answer" lang="es" autocomplete="off" spellcheck="false" maxlength="4000" required placeholder="Escucha y escribe…">${esc(drafts[lesson.id+'/'+c.id]||'')}</textarea></label><div class="dictation-accents">${['á','é','í','ó','ú','ü','ñ','¿','¡'].map(x=>`<button type="button" data-action="dictation-accent" data-value="${x}">${x}</button>`).join('')}</div><div class="sentence-controls"><button class="btn primary" type="submit">检查听写</button>${btn(reveal?'原句已显示':'显示原句','reveal-sentence')}</div></form>${feedback?`<div class="feedback ${feedback.correct?'':'wrong'}" role="status"><strong>${feedback.correct?'听写正确 ✓':`词级匹配 ${feedback.score}% · 再听一次试试`}</strong><p lang="es">${feedback.expected.map(w=>`<span class="dictation-word ${w.present?'':'missed'}">${esc(w.word)}</span>`).join(' ')}</p><span>忽略大小写和标点，重音与 ñ 仍计入拼写；匹配比例只反映本句听写。</span></div>`:''}`:''}<div class="sentence-bottom">${btn(progress().completed.includes(c.id)?'本句已练习 ✓':'标记本句已练习','complete-sentence','','soft')}</div>`;
      if(recordingURL&&$('#recording-audio'))$('#recording-audio').src=recordingURL;
      const rows=$('#transcript-rows'),scrollTop=rows.scrollTop;
      rows.innerHTML=lesson.cues.map((row,i)=>`<button class="transcript-row ${i===index?'active':''}" type="button" data-action="cue-select" data-index="${i}" aria-current="${i===index?'true':'false'}"><span class="cue-time">${time(row.start)}</span><span lang="es">${mode==='dictation'&&!reveal&&!feedback?'第 '+(i+1)+' 句 · 字幕已隐藏':esc(row.text)}</span><span>${progress().completed.includes(row.id)?'✓':i===index?'●':''}</span></button>`).join('');
      rows.scrollTop=scrollTop;
      const active=rows.children[index],box=rows.getBoundingClientRect(),item=active.getBoundingClientRect();
      if(item.top<box.top)rows.scrollTop-=box.top-item.top;else if(item.bottom>box.bottom)rows.scrollTop+=item.bottom-box.bottom;
      const grammar=c.grammarIds.map(id=>api.grammar.find(g=>g.id===id)).filter(Boolean),suggested=S.suggestions(c.text).filter(id=>!c.grammarIds.includes(id)).map(id=>api.grammar.find(g=>g.id===id)).filter(Boolean);
      $('#sentence-insight').innerHTML=`<div class="eyebrow">ENTENDER · 读懂这一句</div><h2>翻译与语法</h2>${hidden?'<p class="insight-empty">先完成听写或显示原句，再查看译文与讲解。</p>':`<div class="insight-section"><h3>中文意思</h3><p>${esc(c.translation||'这句还没有译文。可以补充讲解，或连接自动讲解服务。')}</p></div>${map.structure(c)}<div class="insight-section"><h3>为什么这样说</h3><p>${esc(c.explanation||c.analysis?.focus||'这句还没有逐句讲解。下方的规则提示可作为查阅入口。')}</p></div>${map.vocab(c)}${api.questionBox?api.questionBox(currentSource()):''}<div class="insight-section"><h3>对应哪个知识点</h3>${grammar.length?grammar.map(g=>`<a class="grammar-link" href="#grammar/${g.id}"><strong>${esc(g.title)} ${icon('arrow')}</strong><span>${esc(g.summary)}</span></a>`).join(''):'<p>尚未关联知识点。</p>'}${suggested.length?`<div class="suggested-grammar"><span class="tiny muted">按词形提示，需结合语境确认</span>${suggested.map(g=>`<a href="#grammar/${g.id}" class="tag">${esc(g.title)}</a>`).join('')}</div>`:''}</div><div class="insight-actions">${btn('换个场景练这句','apply-sentence','','soft')}${btn('存入语法手帐','save-sentence-note','','primary')}${btn('补充 / 编辑讲解','annotate-sentence')}${btn(explainBusy?'正在生成讲解…':'自动翻译与讲解','explain-sentence',explainBusy?'disabled':'')}</div><p class="info-note">${lesson.original?'本课讲解已随示范课整理。':'自动讲解需本机服务连接 AI；每次由你点击后，只发送当前句与前后文。'}</p>`}${lesson.source?`<a class="source-link" href="${esc(lesson.source)}" target="_blank" rel="noopener noreferrer">打开 YouTube 原视频 ↗</a>`:''}`;
    }
    function pause(){if(player)player.pause();try{yt?.pauseVideo();}catch{}}
    function seek(t){if(player)player.currentTime=t;try{yt?.seekTo(t,true);}catch{}}
    function getTime(){try{return yt?yt.getCurrentTime():player?.currentTime||0;}catch{return 0;}}
    function isPlaying(){try{return yt?yt.getPlayerState()===1:player&&!player.paused&&!player.ended;}catch{return false;}}
    function clearRecording(){recordGeneration++;recordPending=false;if(recorder&&recorder.state!=='inactive'){recorder.onstop=null;recorder.stop();}stream?.getTracks().forEach(t=>t.stop());stream=null;recorder=null;clearTimeout(recordTimer);if(recordingURL)URL.revokeObjectURL(recordingURL);recordingURL=null;}
    function cleanup(){mountGeneration++;clearInterval(timer);timer=null;clearTimeout(ytReadyTimer);ytReady=false;pause();clearRecording();player=null;try{yt?.destroy();}catch{}yt=null;if(mediaURL)URL.revokeObjectURL(mediaURL);mediaURL=null;}
    function setCue(i,play=false){if(!lesson)return;pause();clearRecording();index=Math.max(0,Math.min(lesson.cues.length-1,i));progress().index=index;persist();feedback=null;reveal=false;seek(current().start);paint();if(play)playSentence();}
    async function playSentence(){
      if(!lesson)return;api.stopSpeech();
      const generation=mountGeneration;
      try{if(ytReady&&yt?.playVideo){seek(current().start);yt.playVideo();}else if(player?.src){seek(current().start);player.playbackRate=speed;await player.play();}else toast('播放器还未就绪。可重试 YouTube 连接，或关联本地音频。');}catch{if(generation===mountGeneration)toast('播放未开始，请点击播放器的播放按钮，或重新选择音频文件。');}
    }
    const youtubeAPI=createYouTubeLoader(root,document);
    const hasLocalAudio=()=>!!(lesson?.audioUrl||lesson?.audioKey);
    async function mountAudio(generation,notice=''){
      if(lesson.youtubeId)$('#lesson-source').innerHTML=`<div class="audio-cover"><span class="eyebrow">YOUTUBE · 已提取原声音轨</span><p lang="es">Escucha una frase.<br><em>Hazla tuya.</em></p><span>跟着字幕，听清每一小段。</span></div><audio id="lesson-audio" controls preload="metadata" aria-label="课程原声音频"></audio>`;
      const audio=$('#lesson-audio');let src=lesson.audioUrl;
      if(lesson.audioKey){const blob=await mediaStore(lesson.audioKey);if(generation!==mountGeneration)return;if(!blob?.size)throw new Error('当前浏览器中未找到原声音频。请重新关联原文件；字幕、讲解和学习记录仍保留。');mediaURL=URL.createObjectURL(blob);src=mediaURL;}
      if(generation!==mountGeneration)return;
      player=audio;audio.playbackRate=speed;
      audio.addEventListener('error',()=>{if(generation===mountGeneration)status('原声音频未能读取，请重新关联对应的音频文件。',true);});
      audio.addEventListener('loadedmetadata',()=>{if(generation===mountGeneration){seek(current().start);if(audio.duration<lesson.cues.at(-1).end-.5)status('音频比字幕时间轴短，请检查是否选择了对应的原文件。',true);}});
      audio.addEventListener('seeking',()=>{if(generation!==mountGeneration)return;const t=audio.currentTime,c=current();if(t>=c.start&&t<c.end)return;const i=lesson.cues.findIndex(c=>t>=c.start&&t<c.end);if(i>=0&&i!==index){clearRecording();index=i;progress().index=i;feedback=null;reveal=false;persist();paint();}});
      audio.src=src;
      status(notice||(lesson.original?'Mónica · es-ES · 原创示范合成音':'原声音频 · 保存在当前浏览器'),false);
    }
    async function youtubeFailed(message,generation){
      if(generation!==mountGeneration)return;
      clearTimeout(ytReadyTimer);ytReady=false;try{yt?.destroy();}catch{}yt=null;
      if(hasLocalAudio()){
        useVideo=false;const toggle=$('[data-action="toggle-video"]');if(toggle)toggle.textContent='看原视频';
        try{await mountAudio(generation,'YouTube 原视频未能载入，已切换为本地原声。');}
        catch(error){if(generation===mountGeneration)status(message+' '+error.message,true,true);}
      }else status(message+' 当前素材尚未关联本地音频。',true,true);
    }
    async function mount(){
      if(!$('#sentence-practice')||!lesson)return;const generation=mountGeneration;
      paint();
      const local=!useVideo&&(lesson.audioUrl||lesson.audioKey);
      try{
        if(local){await mountAudio(generation);}
        else if(lesson.youtubeId){
          await youtubeAPI();if(generation!==mountGeneration)return;
          ytReady=false;let ended=false;
          yt=new root.YT.Player('youtube-player',{videoId:lesson.youtubeId,host:'https://www.youtube-nocookie.com',playerVars:{origin:location.origin,playsinline:1,rel:0},events:{onReady:event=>{if(generation!==mountGeneration||ended)return;ytReady=true;clearTimeout(ytReadyTimer);const readyPlayer=event?.target||yt;readyPlayer?.setPlaybackRate(speed);status('YouTube 原视频 · 按字幕时间逐句播放',false);},onError:event=>{if(generation!==mountGeneration||ended)return;ended=true;void youtubeFailed(youtubeErrorMessage(event?.data),generation);}}});
          if(!ytReady&&!ended)ytReadyTimer=setTimeout(()=>{if(generation===mountGeneration&&!ytReady&&!ended){ended=true;void youtubeFailed('YouTube 视频播放器等待超时。可重试连接，或关联原声音频继续。',generation);}},15000);
        }else status('已载入字幕。关联对应音频后即可逐句听读。',true);
      }catch(error){if(generation!==mountGeneration)return;if(!local&&lesson.youtubeId)await youtubeFailed(error.message,generation);else status(error.message,true);}
      if(generation!==mountGeneration)return;
      timer=setInterval(()=>{if(!isPlaying())return;const t=getTime(),c=current();if(t>=c.end-.035){if(loop)seek(c.start);else pause();}},80);
    }
    function status(message,attach,retry=false){const el=$('#lesson-media-status');if(!el)return;el.textContent=message+' ';if(retry){const button=document.createElement('button');button.type='button';button.className='text-btn';button.dataset.action='retry-youtube';button.textContent='重试 YouTube 连接';el.append(button);}if(attach||!lesson.original){const label=document.createElement('label');label.className='attach-audio';label.append('关联 / 更换音频');const input=document.createElement('input');input.type='file';input.id='attach-lesson-audio';input.accept='audio/*';label.append(input);el.append(label);}}
    async function record(){
      if(recorder?.state==='recording'){recorder.stop();stream?.getTracks().forEach(t=>t.stop());clearTimeout(recordTimer);return;}
      if(recordPending)return;
      pause();clearRecording();const generation=recordGeneration;recordPending=true;
      if(!navigator.mediaDevices?.getUserMedia||!root.MediaRecorder){recordPending=false;toast('当前浏览器不支持录音，请使用 HTTPS 页面或本机地址，并允许麦克风。');return;}
      try{const requested=await navigator.mediaDevices.getUserMedia({audio:true});if(generation!==recordGeneration){requested.getTracks().forEach(t=>t.stop());return;}stream=requested;recordPending=false;const chunks=[];recorder=new MediaRecorder(stream);recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};recorder.onstop=()=>{stream?.getTracks().forEach(t=>t.stop());if(generation!==recordGeneration)return;recordingURL=URL.createObjectURL(new Blob(chunks,{type:recorder.mimeType}));paint();};recorder.start();recordTimer=setTimeout(()=>{if(recorder?.state==='recording')recorder.stop();},60000);paint();}catch{recordPending=false;if(generation===recordGeneration)toast('麦克风未能开启，请在浏览器中允许麦克风后重试。');}
    }
    function complete(){const p=progress(),c=current();if(!p.completed.includes(c.id)){p.completed.push(c.id);state().events.push({type:'listen',time:Date.now()});persist('已记下这句练习。');}paint();}
    function saveNote(){const c=effective(current()),old=state().notes.find(n=>n.lessonId===lesson.id&&n.cueId===c.id);if(old){go('grammar/'+old.id);return;}const n={id:api.uid(),title:c.text.slice(0,150),category:'听说摘记',body:[c.text,c.translation,c.analysis?.focus,c.analysis?.parts.map(p=>ClaroAnalysis.ROLES[p.role]+'：'+p.text+' — '+p.note).join('\n'),c.explanation,...c.grammarIds.map(id=>api.grammar.find(g=>g.id===id)?.title).filter(Boolean),'来源：'+lesson.title+' · '+time(c.start)].filter(Boolean).join('\n\n'),lessonId:lesson.id,cueId:c.id,grammarIds:[...c.grammarIds]};state().notes.unshift(n);persist('原句和讲解已存入语法手帐，可从笔记返回原声。');go('grammar/'+n.id);}
    function annotate(){const c=effective(current());openModal('补充这句的翻译与讲解',`<form id="annotation-form" data-lesson="${lesson.id}" data-cue="${c.id}"><p class="annotation-original" lang="es">${esc(c.text)}</p><label class="field">中文意思<textarea name="translation" maxlength="4000">${esc(c.translation)}</textarea></label><label class="field">语法与表达讲解<textarea name="explanation" maxlength="8000" style="min-height:130px">${esc(c.explanation)}</textarea></label>${map.editor(c)}<fieldset class="grammar-checkboxes"><legend>关联语法手帐中的知识点</legend>${api.grammar.map(g=>`<label><input type="checkbox" name="grammarIds" value="${g.id}" ${c.grammarIds.includes(g.id)?'checked':''}>${esc(g.title)}</label>`).join('')}</fieldset><div class="form-error" role="alert"></div><div class="form-actions">${btn('取消','close-modal')}<button type="submit" class="btn primary">保存讲解</button></div></form>`);}
    async function explain(){
      if(explainBusy)return;const c=current(),l=lesson;
      if(api.cloud){openModal('自动讲解需要连接服务','<p class="modal-description">当前云端版已经可以逐句听读、跟读、听写和编辑讲解。任意新字幕的自动翻译与语法分析，需要在电脑上启动本机版并配置讲解服务。</p><p class="modal-description">可以先使用“补充 / 编辑讲解”填写译文、讲解并关联知识点。原创示范课已整理好完整内容。</p>'+btn('知道了','close-modal','','primary'));return;}
      explainBusy=true;paint();try{const response=await fetch('/api/listening/explain',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:c.text,context:l.cues.slice(Math.max(0,index-1),index+2).map(x=>x.text).join(' '),grammar:api.grammar.map(g=>({id:g.id,title:g.title}))})});const result=await response.json();if(!response.ok)throw new Error(result.error||'讲解未生成。');c.translation=result.translation;c.explanation=result.explanation;c.analysis=ClaroAnalysis.validate(result.analysis,c.text);c.grammarIds=result.grammarIds.filter(id=>api.grammar.some(g=>g.id===id));persist('已生成讲解，建议结合语境核对。');}catch(error){toast(error.message);}finally{explainBusy=false;if(lesson===l)paint();}
    }
    async function importForm(){
      capabilities=null;
      openModal('带一段喜欢的声音进来',`<form id="lesson-import-form"><p class="modal-description">添加 YouTube 链接并导入字幕，或把本地音频与字幕放在一起。支持 SRT、VTT、YouTube JSON3 和导出的讲解 JSON。</p><div class="form-grid"><label class="field full">YouTube 链接（可选）<input name="source" type="url" placeholder="https://www.youtube.com/watch?v=…"></label><div class="full"><button type="button" class="btn" data-action="extract-youtube" id="extract-youtube" ${api.cloud?'disabled':''}>从链接提取音频与西语字幕</button><p class="info-note" id="extract-status" role="status">${api.cloud?'云端版支持嵌入视频；提取音频与字幕请在电脑启动本机版。':'正在检测本机提取工具…'}</p></div><label class="field">素材标题<input name="title" required maxlength="200" placeholder="如：Una mañana en Madrid"></label><label class="field">难度<select name="level">${['A1','A2','B1','B2','C1','C2'].map(v=>`<option>${v}</option>`).join('')}</select></label><label class="file-drop full">本地音频（可选，最多 100 MB）<input id="lesson-audio-file" type="file" accept="audio/*"></label><label class="file-drop full">导入字幕或讲解文件（最多 2 MB）<input id="subtitle-file" type="file" accept=".srt,.vtt,.json,text/vtt,application/json"></label><label class="field full">或粘贴带时间的字幕<textarea name="subtitles" required maxlength="2000000" style="min-height:150px" placeholder="1&#10;00:00:00,000 --> 00:00:03,500&#10;¡Hola! Me llamo Ana."></textarea></label></div><div class="form-error" role="alert"></div><div class="form-actions">${btn('取消','close-modal')}<button class="btn primary" type="submit">导入并开始学习</button></div></form>`);
      if(!api.cloud){try{const response=await fetch('/api/listening/capabilities');if(response.ok)capabilities=await response.json();}catch{}const el=$('#extract-status');if(el)el.textContent=capabilities?.youtube?'本机提取工具已就绪。支持有西语字幕、30 分钟以内的视频。':'本机提取工具未就绪；可先导入音频与字幕文件。';const b=$('#extract-youtube');if(b)b.disabled=!capabilities?.youtube;}
    }
    async function extract(){const form=$('#lesson-import-form');if(!form||importBusy)return;const id=S.youtubeId(form.elements.source.value);if(!id){form.querySelector('.form-error').textContent='请填写有效的 YouTube 视频链接。';return;}importBusy=true;const button=$('#extract-youtube');button.disabled=true;$('#extract-status').textContent='正在提取音频与字幕，请保持窗口打开…';try{const response=await fetch('/api/listening/import-youtube',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:'https://www.youtube.com/watch?v='+id})});const result=await response.json();if(!response.ok)throw new Error(result.error||'提取未完成。');const media=await fetch(result.audioURL);if(!media.ok)throw new Error('音频未能载入。');const blob=await media.blob();if(!blob.size)throw new Error('音频为空，请重试。');form._audioBlob=blob;form.elements.title.value=result.title;form.elements.subtitles.value=JSON.stringify(result.cues);$('#extract-status').textContent=`已提取 ${result.cues.length} 句西语字幕与原声音频。点击下方“导入并开始学习”保存。`;form.querySelector('.form-error').textContent='';}catch(error){if(form.isConnected){$('#extract-status').textContent='提取未完成，可导入本地音频与字幕继续。';form.querySelector('.form-error').textContent=error.message;}}finally{importBusy=false;if(button.isConnected)button.disabled=false;}}
    function currentSource(){if(!lesson||!current())return null;const c=effective(current());return {kind:'sentence',lessonId:lesson.id,cueId:c.id,title:lesson.title,text:c.text,translation:c.translation,explanation:[c.explanation,c.analysis?.focus,c.analysis?.parts.map(p=>ClaroAnalysis.ROLES[p.role]+'：'+p.text+' — '+p.note).join('\n')].filter(Boolean).join('\n\n'),grammarIds:c.grammarIds,url:lesson.source,returnURL:new URL('#listen/'+lesson.id+'/'+c.id,location.href).href};}
    function exportPreview(){pause();openModal('导出字幕与讲解',`<p class="modal-description">先在网页里预览，再选择保存方式。文件下载后，设备会用默认应用打开；这里不会把内容发送给 CodeBuddy。</p><label class="field">导出格式<select id="lesson-export-format"><option value="text">易读文本 · 字幕、翻译与讲解</option><option value="srt">双语 SRT · 带时间的字幕</option><option value="json">学习备份 JSON · 用于重新导入</option></select></label><label class="field export-preview-field">内容预览<textarea id="lesson-export-preview" readonly rows="13">${esc(ClaroQuestionsCore.lessonExport(exportLesson(),'text'))}</textarea></label><div class="form-actions">${btn('复制文字','copy-lesson-export')}${btn('下载所选格式','download-lesson-export','','primary')}</div>`);}
    function downloadExport(){const format=$('#lesson-export-format').value;api.download('claro-'+lesson.id+({text:'.txt',srt:'.srt',json:'.json'})[format],ClaroQuestionsCore.lessonExport(exportLesson(),format),format==='json'?'application/json':'text/plain;charset=utf-8');toast('文件已下载。设备可能用默认应用打开它，这不是连接到该应用。');}
    async function copyExport(){const text=$('#lesson-export-preview').value;try{await navigator.clipboard.writeText(text);toast('已复制字幕与讲解。');}catch{const el=$('#lesson-export-preview');el.focus();el.select();if(document.execCommand('copy'))toast('已复制字幕与讲解。');else toast('请选中预览文字后手动复制。');}}
    const actions={
      'toggle-video':()=>{useVideo=!useVideo;api.render();},
      'retry-youtube':()=>{useVideo=true;api.render();},
      'import-lesson':importForm,'cue-play':playSentence,'cue-stop':pause,'cue-prev':()=>setCue(index-1),'cue-next':()=>setCue(index+1),'cue-select':b=>setCue(Number(b.dataset.index)),
      'cue-loop':b=>{loop=!loop;b.setAttribute('aria-pressed',loop);b.classList.toggle('active',loop);},
      'lesson-mode':b=>{pause();clearRecording();mode=b.dataset.value;reveal=false;feedback=null;paint();},
      'reveal-sentence':()=>{reveal=true;paint();},'record-sentence':record,'complete-sentence':complete,'save-sentence-note':saveNote,'annotate-sentence':annotate,'explain-sentence':explain,'extract-youtube':extract,
      'dictation-accent':b=>{const input=$('#dictation-answer');input.focus();input.setRangeText(b.dataset.value,input.selectionStart,input.selectionEnd,'end');drafts[lesson.id+'/'+current().id]=input.value;feedback=null;},
      'export-lesson':exportPreview,'download-lesson-export':downloadExport,'copy-lesson-export':copyExport
    };
    Object.assign(actions,map.actions);
    async function submit(form){
      if(form.id==='dictation-form'){const answer=form.elements.answer.value;if(!answer.trim())return;drafts[lesson.id+'/'+current().id]=answer;if(!feedback){progress().attempts++;state().events.push({type:'listen',time:Date.now(),correct:S.compareDictation(answer,current().text).correct});persist();}feedback=S.compareDictation(answer,current().text);paint();return true;}
      if(form.id==='annotation-form'){const l=state().lessons.find(x=>x.id===form.dataset.lesson),c=l?.cues.find(x=>x.id===form.dataset.cue);if(!c)return true;const analysis=map.readEditor(form,c);c.analysis=analysis;c.translation=form.elements.translation.value.trim();c.explanation=form.elements.explanation.value.trim();c.grammarIds=new FormData(form).getAll('grammarIds');persist('译文与讲解已保存。');$('#modal').close();paint();return true;}
      if(form.id==='lesson-import-form'){
        if(importBusy)throw new Error('请等待提取完成。');const data=Object.fromEntries(new FormData(form)),source=data.source.trim();if(source&&!S.youtubeId(source))throw new Error('请输入有效的 YouTube 视频链接。');const cues=S.parseSubtitles(data.subtitles),file=$('#lesson-audio-file').files[0],blob=file||form._audioBlob;
        if(blob&&blob.size>100*1024*1024)throw new Error('音频超过 100 MB，请先截取需要学习的片段。');if(state().lessons.length>=100)throw new Error('当前最多支持 100 份素材，请先导出备份。');
        const id=api.uid(),l=S.validateLessons([{id,title:data.title,level:data.level,source,cues,audioKey:blob?id:''}])[0];if(blob)await mediaStore(id,blob);state().lessons.unshift(l);persist('字幕与素材已保存，可以逐句练习了。');$('#modal').close();go('listen/'+id);return true;
      }
      return false;
    }
    async function change(t){
      if(t.id==='lesson-export-format'){const preview=$('#lesson-export-preview');if(preview)preview.value=ClaroQuestionsCore.lessonExport(exportLesson(),t.value);return;}
      if(t.id==='lesson-speed'){speed=Number(t.value);if(player)player.playbackRate=speed;try{yt?.setPlaybackRate(speed);}catch{}return;}
      if(t.id==='subtitle-file'){const file=t.files[0];if(!file)return;const form=$('#lesson-import-form');try{if(file.size>2*1024*1024)throw new Error('字幕超过 2 MB，请先截取片段。');const raw=await file.text(),cues=S.parseSubtitles(raw);form.elements.subtitles.value=JSON.stringify(cues,null,2);let metadata={};try{metadata=JSON.parse(raw);}catch{}if(!form.elements.title.value)form.elements.title.value=metadata.title||file.name.replace(/\.[^.]+$/,'');if(metadata.source&&S.youtubeId(metadata.source))form.elements.source.value=metadata.source;if(metadata.level)form.elements.level.value=metadata.level;form.querySelector('.form-error').textContent=`已读取 ${cues.length} 句字幕。`;}catch(error){form.querySelector('.form-error').textContent=error.message;}return;}
      if(t.id==='attach-lesson-audio'){const file=t.files[0],l=lesson;if(!file)return;try{if(file.size>100*1024*1024)throw new Error('请选择 100 MB 以内的音频。');const key=api.uid();await mediaStore(key,file);l.audioKey=key;l.audioUrl='';useVideo=false;persist('已关联本机音频。');api.render();}catch(error){toast(error.message);}}
    }
    function input(t){if(t.id==='dictation-answer'){drafts[lesson.id+'/'+current().id]=t.value;feedback=null;}}
    return {library,workspace,mount,cleanup,actions,submit,change,input,pause,currentSource,captureSelection:map.capture,refresh:paint};
  }
})(window);
