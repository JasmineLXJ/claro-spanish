/* Spanish-only playback. Local WAV first; browser fallback requires an exact es-* voice. */
(function (root) {
  'use strict';
  const language = value => String(value || '').replaceAll('_','-').toLowerCase();
  const exactVoice = (voices, accent) => voices.find(v => language(v.lang) === language(accent) && /^es(?:-|$)/.test(language(v.lang)));
  const textKey = text => String(text).normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('es');
  function chunks(text, limit = 500) {
    const result = []; let part = '';
    for (const word of String(text).trim().split(/\s+/)) {
      if (!word) continue;
      if (part && part.length + word.length + 1 > limit) { result.push(part); part = ''; }
      let rest = word;
      while (rest.length > limit) { if(part){result.push(part);part='';} result.push(rest.slice(0,limit)); rest=rest.slice(limit); }
      if(rest)part += (part?' ':'') + rest;
    }
    if(part)result.push(part);
    return result;
  }
  function create(options) {
    const audio = options.audio, settings = options.settings;
    const notify = options.notify || (()=>{}), onStatus = options.onStatus || (()=>{}), onVoices = options.onVoices || (()=>{});
    const fetcher = options.fetch || ((...args)=>root.fetch(...args));
    const synth = options.synth === undefined ? root.speechSynthesis : options.synth;
    const Utterance = options.Utterance || root.SpeechSynthesisUtterance;
    const staticOnly = options.staticOnly ?? (root.document?.querySelector('meta[name="claro-hosting"]')?.content === 'static');
    let catalog = [], checked = false, request = 0, pending, utterances = [], backend='native', manifest={};
    const label = accent => accent === 'es-ES' ? '西班牙西语' : '墨西哥西语';
    function describe() {
      const accent=settings().accent, native=exactVoice(catalog,accent), web=exactVoice(synth?.getVoices()||[],accent);
      return {checked,backend:native?backend:web?'browser':'unavailable',voice:native||web,accent};
    }
    async function init() {
      if(pending)return pending;
      pending=(async()=>{
        const controller=new AbortController(), timer=setTimeout(()=>controller.abort(),5000);
        try {
          const response=await fetcher(staticOnly?'audio/manifest.json':'/api/speech/voices',{signal:controller.signal,cache:'no-store'});
          if(response.ok){const data=await response.json();catalog=(data.voices||[]).filter(v=>typeof v.name==='string'&&/^es-(ES|MX)$/i.test(v.lang));backend=staticOnly?'static':'native';manifest=staticOnly?(data.entries||{}):{};}
        } catch { catalog=[]; }
        finally {clearTimeout(timer);checked=true;onVoices(describe());}
      })();
      return pending;
    }
    function stop() {
      request++; audio.pause(); audio.removeAttribute('src'); audio.load();
      audio.onended=null;audio.onplaying=null;audio.onerror=null;
      synth?.cancel(); utterances=[]; onStatus({state:'stopped'});
    }
    function status(state,text,voice,backend,extra={}) {
      onStatus({state,text,voice:voice?.name||'',lang:voice?.lang||settings().accent,label:label(settings().accent),backend,...extra});
    }
    function failure(message,text,voice,backend) {status('error',text,voice,backend,{message});notify(message);}
    function waitForVoice(accent) {
      const immediate=exactVoice(synth?.getVoices()||[],accent);
      if(immediate||!synth)return Promise.resolve(immediate);
      return new Promise(resolve=>{
        let interval,timeout;
        const finish=voice=>{clearInterval(interval);clearTimeout(timeout);synth.removeEventListener?.('voiceschanged',changed);resolve(voice);};
        const changed=()=>{const v=exactVoice(synth.getVoices(),accent);if(v)finish(v);};
        synth.addEventListener?.('voiceschanged',changed);
        interval=setInterval(changed,150);timeout=setTimeout(()=>finish(exactVoice(synth.getVoices(),accent)),1800);changed();
      });
    }
    function playNative(text,voice,token) {
      const config={...settings()}, parts=chunks(text);let index=0;
      const play=()=>{
        if(token!==request)return;
        if(index>=parts.length){status('done',text,voice,backend);return;}
        const params=new URLSearchParams({text:parts[index],accent:config.accent,rate:String(config.rate)});
        status('loading',text,voice,backend);
        audio.onplaying=()=>{if(token===request)status('playing',text,voice,backend);};
        audio.onended=()=>{if(token===request){index++;play();}};
        audio.onerror=()=>{if(token===request)failure('西语音频未能播放，请重试；没有切换到英语。',text,voice,backend);};
        audio.src=backend==='static'?manifest[config.accent]?.[textKey(parts[index])]:'/api/speech/audio?'+params;
        audio.playbackRate=backend==='static'?config.rate/0.85:1;
        const promise=audio.play();
        promise?.catch(err=>{if(token===request&&err.name!=='AbortError')failure(err.name==='NotAllowedError'?'请点播放条的播放按钮，开始西语朗读。':'西语音频未能播放，请重试。',text,voice,backend);});
      };
      play();
    }
    async function playBrowser(text,token) {
      const config={...settings()};status('loading',text,null,'browser');
      const voice=await waitForVoice(config.accent);
      if(token!==request)return;
      if(!voice||!Utterance){failure(`设备上未找到${label(config.accent)}声音（${config.accent}），已停止朗读。${staticOnly?'内置内容已有西语音频；朗读新内容需要在手机系统中添加对应的西语声音。':'请使用“启动网页.command”启用本机西语音频。'}`,text,null,'browser');return;}
      // Never call speak without an explicitly verified Spanish voice.
      utterances=chunks(text).map(part=>{const u=new Utterance(part);u.voice=voice;u.lang=voice.lang.replaceAll('_','-');u.rate=config.rate;
        u.onstart=()=>{if(token===request)status('playing',text,voice,'browser');};
        u.onerror=e=>{if(token===request&&!['interrupted','canceled'].includes(e.error))failure('西语音色未能播放，请重试。',text,voice,'browser');};return u;});
      if(utterances.length)utterances[utterances.length-1].onend=()=>{if(token===request)status('done',text,voice,'browser');};
      utterances.forEach(u=>synth.speak(u));
    }
    function speak(raw) {
      const text=String(raw||'').trim();if(!text)return;
      stop();const token=request;
      const voice=exactVoice(catalog,settings().accent);
      const available=()=>backend!=='static'||chunks(text).every(part=>typeof manifest[settings().accent]?.[textKey(part)]==='string');
      if(voice&&available()){playNative(text,voice,token);return;}
      if(!checked){status('loading',text,null,'');init().then(()=>{if(token===request){const loaded=exactVoice(catalog,settings().accent);if(loaded&&available())playNative(text,loaded,token);else playBrowser(text,token);}});return;}
      playBrowser(text,token);
    }
    synth?.addEventListener?.('voiceschanged',()=>onVoices(describe()));
    return {init,speak,stop,describe,refresh:()=>{pending=null;checked=false;return init();}};
  }
  const api={language,exactVoice,textKey,chunks,create};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ClaroSpeech=api;
})(typeof window!=='undefined'?window:globalThis);
