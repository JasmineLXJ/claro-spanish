/* Pure data helpers; shared by the browser and dependency-free Node tests. */
(function (root) {
  'use strict';
  const norm = value => String(value ?? '').normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('es');
  const clean = (value, max = 1000) => String(value ?? '').trim().slice(0, max);
  function csvParse(text) {
    text = text.replace(/^\uFEFF/, '');
    const rows = []; let row = [], value = '', quoted = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        if (quoted && text[i + 1] === '"') { value += '"'; i++; }
        else quoted = !quoted;
      } else if (c === ',' && !quoted) { row.push(value); value = ''; }
      else if ((c === '\n' || c === '\r') && !quoted) {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(value); if (row.some(v => v.trim())) rows.push(row); row = []; value = '';
      } else value += c;
    }
    if (quoted) throw new Error('CSV 的引号未闭合，请检查文件。');
    row.push(value); if (row.some(v => v.trim())) rows.push(row);
    return rows;
  }
  function csvWords(text, existing, makeId) {
    const rows = csvParse(text);
    if (!rows.length) throw new Error('文件为空。');
    const header = rows.shift().map(norm);
    const col = (...names) => header.findIndex(h => names.includes(h));
    const w = col('word', '单词', '西语'), zh = col('meaning', '释义', '中文');
    if (w < 0 || zh < 0) throw new Error('CSV 需要 word 和 meaning 两列表头，可先下载示例。');
    const c = col('category', '分类'), e = col('example', '例句'), l = col('level', '等级');
    const seen = new Set(existing.map(x => norm(x.word))), added = []; let skipped = 0;
    for (const row of rows) {
      const word = clean(row[w], 100), meaning = clean(row[zh], 300);
      if (!word || !meaning || seen.has(norm(word))) { skipped++; continue; }
      seen.add(norm(word));
      added.push({ id: makeId(), word, meaning, category: clean(row[c], 40) || '我的生词', example: clean(row[e]), level: /^[ABC][12]$/.test(row[l]) ? row[l] : 'A1', pos: '', translation: '' });
    }
    return { added, skipped };
  }
  function schedule(previous, grade, now = Date.now()) {
    const stages = [1, 3, 7, 14, 30, 60, 120];
    const stage = Math.max(0, Math.min(6, previous?.stage || 0));
    if (grade === 'again') return { stage: 0, due: now + 600000, interval: 0, last: now };
    const next = Math.min(6, stage + (grade === 'easy' ? 2 : 1));
    const days = stages[Math.min(6, stage + (grade === 'easy' ? 1 : 0))];
    return { stage: next, due: now + days * 86400000, interval: days, last: now };
  }
  function safeURL(raw) {
    try { const u = new URL(raw); return ['http:', 'https:'].includes(u.protocol) ? u.href : ''; } catch { return ''; }
  }
  function validateState(s) {
    if (!s || s.version !== 1 || !Array.isArray(s.words) || !Array.isArray(s.articles) || !Array.isArray(s.notes) || !Array.isArray(s.events)) throw new Error('这不是 Claro v1 备份文件。');
    if (s.words.length > 20000 || s.articles.length > 2000 || s.notes.length > 5000 || s.events.length > 50000) throw new Error('备份条目过多。');
    const ids = new Set();
    const identity = x => {
      if (!x || typeof x.id !== 'string' || !/^[a-zA-Z0-9_-]{1,100}$/.test(x.id) || ['__proto__','constructor','prototype'].includes(x.id) || ids.has(x.id)) throw new Error('备份条目编号无效或重复。');
      ids.add(x.id); return x.id;
    };
    const lex = typeof module !== 'undefined' && module.exports ? require('./lexicon.js') : root.ClaroLexicon;
    const words = s.words.map(x => {
      const id = identity(x); if (!clean(x.word, 100) || !clean(x.meaning, 300)) throw new Error('词汇缺少单词或释义。');
      return { id, word: clean(x.word, 100), meaning: clean(x.meaning, 300), category: clean(x.category, 40) || '我的生词', functions: Array.isArray(x.functions)?[...new Set(x.functions.map(v=>clean(v,40)).filter(Boolean))].slice(0,10):[], unitId: clean(x.unitId,100), level: /^[ABC][12]$/.test(x.level) ? x.level : 'A1', pos: clean(x.pos, 40), example: clean(x.example, 2000), translation: clean(x.translation, 2000), source: clean(x.source, 200), starred: !!x.starred, lexical:lex.metadata(x), contexts:lex.contexts(x.contexts) };
    });
    const articles = s.articles.map(x => {
      const id = identity(x); if (!clean(x.title) || !clean(x.text)) throw new Error('文章缺少标题或正文。');
      return { id, title: clean(x.title, 200), subtitle: clean(x.subtitle, 200), text: clean(x.text, 100000), translation: clean(x.translation, 100000), level: /^[ABC][12]$/.test(x.level) ? x.level : 'A1', category: clean(x.category, 40) || '我的文章', source: safeURL(x.source), cover: ['cafe','city','home','market','travel','book'].includes(x.cover) ? x.cover : 'book', original: !!x.original };
    });
    const notes = s.notes.map(x => ({ id: identity(x), title: clean(x.title, 150), body: clean(x.body, 10000), category: clean(x.category, 40) || '语法笔记', lessonId: clean(x.lessonId,100), cueId: clean(x.cueId,100), grammarIds: Array.isArray(x.grammarIds)?x.grammarIds.filter(g=>/^g\d+$/.test(g)).slice(0,30):[] }));
    const study = typeof module !== 'undefined' && module.exports ? require('./study-core.js') : root.ClaroStudy;
    const lessons = study.validateLessons(s.lessons || []);
    const listening = study.validateProgress(s.listening || {}, lessons);
    const questionCore = typeof module !== 'undefined' && module.exports ? require('./questions-core.js') : root.ClaroQuestionsCore;
    const questions = questionCore.validate(s.questions || []);
    const courseProgress = {};
    const cp = s.courseProgress?.u01_l01;
    if(cp && typeof cp === 'object') courseProgress.u01_l01 = {last:Number.isFinite(cp.last)?cp.last:0,answers:Object.fromEntries(Object.entries(cp.answers||{}).filter(([id,a])=>/^p0[1-5]$/.test(id)&&a&&typeof a==='object').map(([id,a])=>[id,{answer:clean(a.answer,300),correct:!!a.correct,usedHint:!!a.usedHint,time:Number.isFinite(a.time)?a.time:0}]))};
    const reviews = Object.fromEntries(words.filter(x => s.reviews?.[x.id] && Number.isFinite(s.reviews[x.id].due)).map(x => {
      const r = s.reviews[x.id]; return [x.id, { stage: Math.max(0,Math.min(6,Number(r.stage)||0)), due: Math.max(0,r.due), interval: Math.max(0,Number(r.interval)||0), last: Math.max(0,Number(r.last)||0) }];
    }));
    const reading = Object.fromEntries(articles.filter(x => s.reading?.[x.id]).map(x => [x.id, true]));
    const events = s.events.filter(e => e && Number.isFinite(e.time) && ['review','quiz','read','listen','course'].includes(e.type)).map(e => ({time:e.time,type:e.type,correct:!!e.correct}));
    return { version:1, words, articles, notes, reviews, reading, events, lessons, listening, questions, courseProgress, settings: { accent: s.settings?.accent === 'es-MX' ? 'es-MX' : 'es-ES', rate: [0.7,0.85,1].includes(Number(s.settings?.rate)) ? Number(s.settings.rate) : 0.85 } };
  }
  const api = { norm, clean, csvParse, csvWords, schedule, safeURL, validateState };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ClaroCore = api;
})(typeof window !== 'undefined' ? window : globalThis);
