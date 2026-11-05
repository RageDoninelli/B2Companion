/* V.I.V.A. English B2 Companion — sin librerías ni cuentas externas. */
(() => {
  'use strict';
  const STORAGE_KEY = 'viva-english-b2-companion-v1';
  const MEET_OVERRIDE_KEY = 'viva-english-b2-local-meet';
  const app = document.getElementById('app');
  const navigation = document.getElementById('navigation');
  const modules = window.B2_MODULES || {};
  const cfg = window.APP_CONFIG || {};
  let state = {};
  let deferredInstallPrompt = null;

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (stored && typeof stored === 'object') state = stored;
  } catch (_) { state = {}; }
  const store = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {} };
  const esc = v => String(v ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const norm = v => String(v ?? '').toLowerCase().normalize('NFKC').replace(/[‘’`´]/g,"'").replace(/\s+/g,' ').trim().replace(/[.!?]+$/,'').trim();
  const getModule = id => modules[id];
  const getRecord = (id, exid) => {
    state[id] = state[id] || {};
    state[id][exid] = state[id][exid] || {drafts:{},best:0,graded:false,revealed:false};
    if (!state[id][exid].drafts) state[id][exid].drafts = {};
    return state[id][exid];
  };
  const totalQuestions = m => m.exercises.reduce((n,ex) => n+ex.questions.length,0);
  const getProgress = (id) => {
    const m=getModule(id);
    if(!m) return {correct:0,total:0,percent:0};
    const total=totalQuestions(m);
    const correct=m.exercises.reduce((sum,ex)=>sum+Math.min(ex.questions.length,Math.max(0,Number(state[id]?.[ex.id]?.best)||0)),0);
    return {correct,total,percent:total?Math.round(correct/total*100):0};
  };

  function validMeet(url) {
    try { const u = new URL(url); return u.protocol === 'https:' && u.hostname === 'meet.google.com' && u.pathname.length > 1; }
    catch(_) {return false;}
  }
  function getMeet() {
    const local=localStorage.getItem(MEET_OVERRIDE_KEY);
    if(local && validMeet(local)) return local;
    return validMeet(cfg.meetUrl) ? cfg.meetUrl : '';
  }
  function joinButton() {
    const url=getMeet();
    return url
      ? `<a class="join" href="${esc(url)}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◉</span> JOIN CLASS <span aria-hidden="true">↗</span></a>`
      : `<button class="join" type="button" data-route="ajustes"><span aria-hidden="true">◉</span> JOIN CLASS <span aria-hidden="true">↗</span></button>`;
  }
  function showInstallStatus(message, tone='') {
    const targets=[document.getElementById('top-install-status'), document.getElementById('install-status')].filter(Boolean);
    if (targets.length) {
      targets.forEach(el => { el.textContent = message; el.style.color = tone==='bad' ? 'var(--bad)' : (tone==='ok' ? 'var(--ok)' : 'var(--muted)'); });
    } else if (message) {
      alert(message);
    }
  }
  function renderNavigation(which) {
    const items=[['inicio','⌂','Inicio'],['m01','▤','Práctica'],['ajustes','⚙','Ajustes']];
    navigation.innerHTML=items.map(([key,icon,title])=>`<button type="button" class="navbutton${which===key?' active':''}" data-route="${key}" aria-label="${title}" ${which===key?'aria-current="page"':''}><span class="navicon" aria-hidden="true">${icon}</span>${title}</button>`).join('');
  }
  function renderHome(){
    const ids=Object.keys(modules).sort();
    const summed=ids.reduce((sum,id)=>{const p=getProgress(id);return {done:sum.done+p.correct,total:sum.total+p.total};},{done:0,total:0});
    const overall=summed.total?Math.round(summed.done/summed.total*100):0;
    app.innerHTML=`
      <section class="hero">
        <div class="eyebrow">YOUR NEXT LEVEL STARTS HERE</div>
        <h1>English B2<br>Companion</h1>
        <p>Practica gramática, identifica tus errores y llega con más confianza a cada clase.</p>
        <div class="hero-actions">${joinButton()}<button class="btn btn-light" type="button" data-route="m01">Empezar práctica ↗</button></div>
      </section>
      <div class="section-head"><div><h2>Tu avance</h2><p>Los resultados se guardan en este dispositivo.</p></div><div class="score-chip">${overall}%</div></div>
      <section class="card" aria-label="Progreso total"><div style="display:flex;justify-content:space-between;gap:10px;font-size:13px"><b>Respuestas correctas</b><b>${summed.done} / ${summed.total}</b></div><div class="progress-track"><span class="progress-fill" style="width:${overall}%"></span></div><div class="small" style="margin-top:10px">Meta orientativa de dominio: ${Number(cfg.passMark)||70}%</div></section>
      <div class="section-head"><div><h2>Grammar practice</h2><p>Actividades autocorregibles por módulo.</p></div></div>
      ${ids.map(id=>{
        const m=modules[id];const p=getProgress(id);
        return `<button type="button" class="module-card" data-route="m${id}"><div class="module-top"><span class="number">${esc(id)}</span><span class="small">${esc(m.badge || 'GRAMMAR PRACTICE')}</span></div><h3>${esc(m.title)}</h3><p>${esc(m.subtitle)}</p><div class="progress-track"><span class="progress-fill" style="width:${p.percent}%"></span></div><div class="module-bottom"><span>${p.correct} / ${p.total} correctas · ${p.percent}%</span><span>Practicar ↗</span></div></button>`;
      }).join('')}
      <div class="notice"><b>Contenido de prueba.</b> Este primer módulo es una demostración original B2. Los ejercicios definitivos se incorporarán cuando tengamos las páginas o capturas del material de clase.</div>`;
    renderNavigation('inicio');
  }
  function questionHTML(id,ex,q,index){
    const record=getRecord(id,ex.id);
    const draft=record.drafts[q.id] ?? '';
    const contents=q.type==='choice'
      ? `<div class="choices" role="group" aria-label="Respuestas para pregunta ${index+1}">${q.options.map((opt,n)=>`<button type="button" class="choice${String(draft)===String(n)?' selected':''}" data-choice="${n}" aria-pressed="${String(draft)===String(n)}">${esc(opt)}</button>`).join('')}</div>`
      : `<input class="answer-input" type="text" value="${esc(draft)}" placeholder="Escribe tu respuesta..." aria-label="Respuesta de la pregunta ${index+1}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">`;
    return `<div class="question" data-question="${esc(q.id)}"><div class="question-top"><span class="qnum">${index+1}</span><div style="flex:1;min-width:0"><p class="prompt">${esc(q.prompt)}</p>${contents}<div class="q-tools"><button type="button" class="micro" data-hint="1">Ver pista</button></div><div class="helper" hidden>${esc(q.hint||'Lee con atención el contexto.')}</div><div class="feedback" aria-live="polite"></div></div></div></div>`;
  }
  function exerciseHTML(id,ex,index){
    const r=getRecord(id,ex.id);
    return `<section class="card exercise" id="exercise-${esc(ex.id)}" data-exercise="${esc(ex.id)}"><div class="ex-head"><div><span class="small">EXERCISE ${index+1}</span><h2>${esc(ex.title)}</h2><p>${esc(ex.instruction)}</p></div><span class="excount">${ex.questions.length} pts</span></div>${ex.intro?`<div class="intro">${esc(ex.intro)}</div>`:''}${ex.questions.map((q,i)=>questionHTML(id,ex,q,i)).join('')}<div class="check-summary ${r.graded?'':'muted'}" aria-live="polite">${r.graded?(r.revealed?'Respuestas consultadas: esta ronda no suma puntos.':`Última práctica evaluada: ${r.last ?? 0} / ${ex.questions.length}`):'Completa las preguntas y comprueba tus respuestas.'}</div><div class="actions"><button class="action-primary" type="button" data-ex-action="check" ${r.graded?'disabled':''}>Comprobar</button><button class="action-quiet" type="button" data-ex-action="show">Ver respuestas</button><button class="action-quiet" type="button" data-ex-action="retry">Nueva práctica</button></div></section>`;
  }
  function renderModule(id){
    const m=getModule(id);
    if(!m){location.hash='#inicio';return;}
    const p=getProgress(id);
    app.innerHTML=`<button type="button" class="back" data-route="inicio">‹ Todos los módulos</button><section class="unit-hero"><div class="eyebrow">${esc(m.badge||'B2 GRAMMAR')}</div><h1>Module ${esc(id)}<br>${esc(m.title)}</h1><p>${esc(m.subtitle)}</p><div class="progress-track"><span class="progress-fill" style="width:${p.percent}%"></span></div><div style="font-size:12px;margin-top:10px;font-weight:800;color:#dde8f0">Tu mejor resultado: ${p.correct} / ${p.total} · ${p.percent}%</div></section><section class="card lesson"><div class="lesson-title">◈ Grammar focus</div><p>${esc(m.lesson||'Practica cada estructura con atención.')}</p>${m.lessons?.length?`<div class="lesson-grid">${m.lessons.map(l=>`<div class="lesson-mini"><strong>${esc(l.term)}</strong>${esc(l.description)}</div>`).join('')}</div>`:''}</section>${m.exercises.map((ex,i)=>exerciseHTML(id,ex,i)).join('')}<p class="threshold">Consejo: consulta las respuestas después de intentar resolver las preguntas. Si las revelas, esa ronda no sumará puntos al progreso.</p>`;
    renderNavigation('m01');
  }
  function renderSettings(){
    const local=localStorage.getItem(MEET_OVERRIDE_KEY)||'';
    app.innerHTML=`<button type="button" class="back" data-route="inicio">‹ Inicio</button><section class="card"><span class="small">CONFIGURACIÓN</span><h1 style="margin:7px 0;font-size:25px;letter-spacing:-.04em">Google Meet</h1><p class="setting-copy">El botón <b>JOIN CLASS</b> abre Google Meet en otra pestaña o en su aplicación, según el teléfono.</p><p class="setting-copy">${getMeet()?'Hay un enlace configurado.':'Todavía no hay un enlace de clase configurado.'}</p><form id="meet-form"><label class="field" for="meet-url">Enlace de Meet para este teléfono</label><input id="meet-url" class="input-url" type="url" value="${esc(local)}" placeholder="https://meet.google.com/xxx-xxxx-xxx" autocapitalize="off" spellcheck="false" autocomplete="url"><p class="setting-copy">Si lo dejas vacío, se usa el enlace general definido por la academia.</p><div class="actions"><button type="submit" class="action-primary">Guardar enlace</button><button type="button" class="action-quiet" data-clear-link="1">Borrar enlace local</button></div><div class="status" id="meet-status" role="status"></div></form><div class="setting-note"><b>Para todos los alumnos:</b> el enlace general se configura una sola vez en <b>config.js</b> y se publica en GitHub Pages. Lo que guardes aquí solo afecta este dispositivo.</div></section><section class="card" style="margin-top:15px"><span class="small">INSTALACIÓN</span><h2 style="font-size:18px;margin:8px 0">Lleva V.I.V.A. B2 a tu pantalla de inicio</h2><p class="setting-copy">La práctica gramatical puede seguir funcionando sin internet después de cargar la app. Para entrar a Meet, sí necesitas conexión.</p><button type="button" class="action-primary" data-install="1">Instalar aplicación</button><div class="status" id="install-status" role="status"></div><ol class="install-list"><li>Abre la app publicada con <b>Chrome</b> en Android.</li><li>Toca el menú de tres puntos.</li><li>Selecciona <b>Instalar aplicación</b> o <b>Añadir a pantalla de inicio</b>.</li></ol></section><section class="card" style="margin-top:15px"><h2 style="font-size:18px;margin:0">Privacidad del progreso</h2><p class="setting-copy">Tus respuestas y calificaciones se guardan en el navegador de este teléfono. No se envían a un servidor ni se sincronizan entre dispositivos.</p><button type="button" class="action-quiet" data-reset-progress="1">Borrar mi progreso B2</button></section>`;
    renderNavigation('ajustes');
  }
  function route(scroll=true){
    const hash=location.hash.replace(/^#/,'');
    if(hash==='ajustes') renderSettings();
    else if(/^m\d+$/.test(hash) && getModule(hash.slice(1))) renderModule(hash.slice(1));
    else renderHome();
    if(scroll) window.scrollTo(0,0);
  }
  function currentModuleId(){const m=/^#m(\d+)$/.exec(location.hash); return m?m[1]:'';}
  function recordInput(qEl, value){
    const card=qEl.closest('[data-exercise]');const id=currentModuleId();if(!card || !id)return;
    const r=getRecord(id,card.dataset.exercise);
    r.drafts[qEl.dataset.question]=String(value);store();
  }
  function checkExercise(card){
    const id=currentModuleId();const m=getModule(id);if(!m)return;
    const ex=m.exercises.find(e=>e.id===card.dataset.exercise);if(!ex)return;
    const r=getRecord(id,ex.id);if(r.graded)return;
    let score=0;
    ex.questions.forEach(q=>{
      const el=card.querySelector(`[data-question="${q.id}"]`);
      const input=el.querySelector('.answer-input');
      const v=input ? input.value : String(r.drafts[q.id]??'');
      const ok=q.type==='choice'?String(v)===String(q.correct):(q.answers||[]).some(a=>norm(a)===norm(v));
      if(ok)score++;
      const feedback=el.querySelector('.feedback');
      const expected=q.type==='choice'?q.options[q.correct]:(q.answers||[])[0];
      feedback.textContent=(ok?'✓ Correcto. ':'✗ Respuesta sugerida: '+expected+'. ')+(q.explain||'');
      feedback.className='feedback visible '+(ok?'good':'bad');
    });
    r.graded=true;r.last=score;
    if(!r.revealed)r.best=Math.max(Number(r.best)||0,score);
    store();
    card.querySelector('.check-summary').textContent=(r.revealed?'Ronda de consulta: sin puntuación. ':`Resultado: ${score} / ${ex.questions.length}. `)+(score===ex.questions.length?'¡Excelente!':'Revisa las explicaciones y vuelve a intentarlo.');
    card.querySelector('.check-summary').classList.remove('muted');
    card.querySelector('[data-ex-action="check"]').disabled=true;
  }
  function showAnswers(card){
    const id=currentModuleId();const m=getModule(id);if(!m)return;
    const ex=m.exercises.find(e=>e.id===card.dataset.exercise);if(!ex)return;
    const r=getRecord(id,ex.id);
    r.revealed=true;r.graded=true;
    ex.questions.forEach(q=>{
      const el=card.querySelector(`[data-question="${q.id}"]`);
      if(q.type==='choice'){
        el.querySelectorAll('[data-choice]').forEach(b=>{const sel=Number(b.dataset.choice)===q.correct;b.classList.toggle('selected',sel);b.setAttribute('aria-pressed',sel?'true':'false');});
      }else el.querySelector('.answer-input').value=q.answers[0];
      const feedback=el.querySelector('.feedback');feedback.textContent='Respuesta modelo: '+(q.type==='choice'?q.options[q.correct]:q.answers[0])+'. '+(q.explain||'');feedback.className='feedback visible good';
    });
    card.querySelector('.check-summary').textContent='Respuestas mostradas. Esta ronda no añade puntos; inicia una nueva práctica para evaluarte.';
    card.querySelector('[data-ex-action="check"]').disabled=true;
    store();
  }
  function retryExercise(card){
    const id=currentModuleId();const r=getRecord(id,card.dataset.exercise);
    r.drafts={};r.graded=false;r.revealed=false;delete r.last;store();
    const exid=card.dataset.exercise;
    renderModule(id);
    document.getElementById('exercise-'+exid)?.scrollIntoView({block:'start',behavior:'instant'});
  }
  app.addEventListener('input',event=>{
    if(!event.target.matches('.answer-input'))return;
    recordInput(event.target.closest('[data-question]'),event.target.value);
  });
  document.addEventListener('click',async event=>{
    const go=event.target.closest('[data-route]');
    if(go){location.hash='#'+go.dataset.route;if(location.hash==='#'+go.dataset.route)route(false);return;}
    const choice=event.target.closest('[data-choice]');
    if(choice){
      const qEl=choice.closest('[data-question]');const card=choice.closest('[data-exercise]');
      if(getRecord(currentModuleId(),card.dataset.exercise).graded)return;
      qEl.querySelectorAll('[data-choice]').forEach(btn=>{const chosen=btn===choice;btn.classList.toggle('selected',chosen);btn.setAttribute('aria-pressed',chosen?'true':'false');});
      recordInput(qEl,choice.dataset.choice);return;
    }
    const hint=event.target.closest('[data-hint]');
    if(hint){const helper=hint.closest('[data-question]').querySelector('.helper');helper.hidden=!helper.hidden;hint.textContent=helper.hidden?'Ver pista':'Ocultar pista';return;}
    const action=event.target.closest('[data-ex-action]');
    if(action){const card=action.closest('[data-exercise]');if(action.dataset.exAction==='check')checkExercise(card);else if(action.dataset.exAction==='show')showAnswers(card);else retryExercise(card);return;}
    if(event.target.closest('[data-clear-link]')){
      localStorage.removeItem(MEET_OVERRIDE_KEY);route(false);
      const status=document.getElementById('meet-status');if(status)status.textContent='Se borró el enlace local.';return;
    }
    if(event.target.closest('[data-reset-progress]')){
      if(confirm('¿Quieres borrar todas tus respuestas y calificaciones guardadas de English B2?')){state={};store();route(false);}return;
    }
    if(event.target.closest('[data-install]')){
      if(deferredInstallPrompt){
        deferredInstallPrompt.prompt();
        const result = await deferredInstallPrompt.userChoice;
        deferredInstallPrompt=null;
        showInstallStatus(result?.outcome==='accepted' ? '¡Listo! Se inició la instalación de la app.' : 'Puedes instalar la app más tarde desde el menú ⋮ de Chrome.', result?.outcome==='accepted' ? 'ok' : '');
      }
      else showInstallStatus('Si no aparece la opción automática, instala la app desde el menú ⋮ de tu navegador Chrome.','');
    }
  });
  app.addEventListener('submit',e=>{
    if(e.target.id!=='meet-form')return;
    e.preventDefault();
    const v=document.getElementById('meet-url').value.trim();
    const status=document.getElementById('meet-status');
    if(v && !validMeet(v)){status.textContent='Necesitas una URL completa de https://meet.google.com/...';status.style.color='var(--bad)';return;}
    if(v)localStorage.setItem(MEET_OVERRIDE_KEY,v);else localStorage.removeItem(MEET_OVERRIDE_KEY);
    status.textContent='Enlace guardado en este teléfono. JOIN CLASS ya puede usarlo.';status.style.color='var(--ok)';
  });
  window.addEventListener('hashchange',()=>route());
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;showInstallStatus('La app está lista para instalarse en este dispositivo.','ok');});
  window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;showInstallStatus('Aplicación instalada correctamente.','ok');});
  if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
  route();
})();
