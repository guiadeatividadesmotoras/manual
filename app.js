// ============================================
//  Manual para Reduzir Birras em 21 Dias
//  app.js — Lógica da aplicação
// ============================================

// ---- STATE ----
let completed  = JSON.parse(localStorage.getItem('birra_completed')  || '[]');
let reflections = JSON.parse(localStorage.getItem('birra_reflections') || '{}');
let checks      = JSON.parse(localStorage.getItem('birra_checks')      || '{}');

// currentDay = primeiro dia não concluído, ou 1 se nenhum
let currentDay = (() => {
  for (let i = 1; i <= 21; i++) {
    if (!completed.includes(i)) return i;
  }
  return 21;
})();

// ---- PERSISTENCE ----
function save() {
  try {
    localStorage.setItem('birra_completed',   JSON.stringify(completed));
    localStorage.setItem('birra_reflections', JSON.stringify(reflections));
    localStorage.setItem('birra_checks',      JSON.stringify(checks));
  } catch (e) { /* storage not available */ }
}

// ---- HELPERS ----
function getDone() { return completed.length; }

// ---- UI: STREAK ----
function buildStreak() {
  const row = document.getElementById('streak-row');
  row.innerHTML = '';
  for (let i = 1; i <= 7; i++) {
    const d = document.createElement('div');
    const cls = completed.includes(i) ? 'done' : i === currentDay ? 'today' : '';
    d.className = 'streak-dot' + (cls ? ' ' + cls : '');
    d.textContent = i;
    row.appendChild(d);
  }
}

// ---- UI: PROGRESS UPDATE ----
function updateProgress() {
  const done = getDone();
  const pct  = Math.round(done / 21 * 100);

  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-pct').textContent  = pct + '% concluído';
  document.getElementById('prog-days').textContent = done + '/21 dias';
  document.getElementById('hero-day-text').textContent = 'Dia ' + currentDay + ' de 21';

  const d = DAYS[currentDay - 1];
  document.getElementById('next-title').textContent = 'Dia ' + currentDay + ' — ' + d.title;
  document.getElementById('journey-sub').textContent = done + ' concluídos · ' + (21 - done) + ' restantes';

  // Stats screen
  document.getElementById('st-done').textContent = done;
  document.getElementById('st-left').textContent = 21 - done;
  document.getElementById('st-pct').textContent  = pct + '%';
  document.getElementById('st-seq').textContent  = Math.min(done, 7);

  // Weekly bars
  const w1 = completed.filter(x => x <= 7).length;
  const w2 = completed.filter(x => x >= 8  && x <= 14).length;
  const w3 = completed.filter(x => x >= 15).length;
  document.getElementById('wp1').style.width = Math.round(w1 / 7 * 100) + '%';
  document.getElementById('wp2').style.width = Math.round(w2 / 7 * 100) + '%';
  document.getElementById('wp3').style.width = Math.round(w3 / 7 * 100) + '%';

  buildStreak();
}

// ---- UI: JOURNEY ----
function buildJourney() {
  [1, 2, 3].forEach(phase => {
    const wrap = document.getElementById('days-p' + phase);
    wrap.innerHTML = '';
    DAYS.filter(d => d.phase === phase).forEach(d => {
      const isDone   = completed.includes(d.id);
      const isActive = d.id === currentDay;
      const isLocked = d.id > currentDay;

      const el = document.createElement('div');
      el.className = 'day-card' + (isDone ? ' done-day' : '');

      const numClass  = isDone ? 'done-num' : isActive ? 'active-num' : 'locked-num';
      const iconClass = isDone ? 'ti-circle-check day-check'
                               : isLocked ? 'ti-lock day-check lock'
                               : 'ti-chevron-right day-check';

      el.innerHTML = `
        <div class="day-num ${numClass}">${d.id}</div>
        <div class="day-title">${d.title}</div>
        <i class="ti ${iconClass}" aria-hidden="true"></i>
      `;

      if (!isLocked) el.onclick = () => goToDay(d.id);
      wrap.appendChild(el);
    });
  });
}

// ---- UI: TOOLS SCREEN ----
function buildTools() {
  // Tool cards
  const tg = document.getElementById('tool-grid');
  tg.innerHTML = '';
  TOOLS.forEach((t, i) => {
    const el = document.createElement('div');
    el.className = 'tool-card';
    el.innerHTML = `<div class="tool-icon">${t.icon}</div><div class="tool-name">${t.name}</div>`;
    el.onclick = () => openTool(i);
    tg.appendChild(el);
  });

  // Edu cards
  const ec = document.getElementById('edu-cards');
  ec.innerHTML = '';
  EDU.forEach((e, idx) => {
    const el = document.createElement('div');
    el.className = 'card card-clickable';
    el.innerHTML = `
      <div class="card-row">
        <div class="card-icon ${e.color}"><span style="font-size:18px">${e.icon}</span></div>
        <div class="card-info">
          <div class="card-label">${e.title}</div>
          <div class="card-sub">${e.sub}</div>
        </div>
        <i class="ti ti-chevron-down card-arrow" id="edu-arrow-${idx}" aria-hidden="true"></i>
      </div>
      <div class="edu-card-expanded" id="edu-exp-${idx}">${e.text}</div>
    `;
    el.onclick = () => toggleEdu(idx);
    ec.appendChild(el);
  });
}

function toggleEdu(idx) {
  const exp   = document.getElementById('edu-exp-' + idx);
  const arrow = document.getElementById('edu-arrow-' + idx);
  const isOpen = exp.classList.contains('open');
  exp.classList.toggle('open', !isOpen);
  arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
}

// ---- UI: ACHIEVEMENTS ----
function buildAchievements() {
  const done = getDone();
  const grid = document.getElementById('achieve-grid');
  grid.innerHTML = '';
  let earned = 0;

  ACHIEVEMENTS.forEach(a => {
    const isEarned = done >= a.thresh;
    if (isEarned) earned++;
    const el = document.createElement('div');
    el.className = 'achieve-card' + (isEarned ? ' earned' : ' locked-ach');
    el.innerHTML = `
      <div class="achieve-medal">${a.icon}</div>
      <div class="achieve-name">${a.name}</div>
      <div class="achieve-status">${isEarned ? '✓ Conquistada!' : a.thresh + ' dias necessários'}</div>
    `;
    grid.appendChild(el);
  });

  document.getElementById('ach-sub').textContent = earned + ' de 6 conquistadas';
}

// ---- DAY DETAIL ----
function goToDay(dayId) {
  const d      = DAYS[dayId - 1];
  const isDone = completed.includes(dayId);
  const ck     = checks[dayId] || {};
  const ref    = reflections[dayId] || '';

  const checkLabels = ['Realizado', 'Aplicado com meu filho', 'Finalizado'];

  const stepsHtml = d.steps.map((s, i) => `
    <div class="dd-step">
      <div class="dd-step-num">${i + 1}</div>
      <div class="dd-step-text">${s}</div>
    </div>
  `).join('');

  const checkHtml = checkLabels.map((l, i) => `
    <div class="checklist-item" onclick="toggleCheck(${dayId}, ${i})">
      <div class="check-box ${ck[i] ? 'checked' : ''}">${ck[i] ? '✓' : ''}</div>
      <div class="check-label">${l}</div>
    </div>
  `).join('');

  const phaseLabel = ['Fase 1 · Entender e Prevenir',
                      'Fase 2 · Agir Durante a Birra',
                      'Fase 3 · Transformar o Comportamento'][d.phase - 1];

  const content = document.getElementById('day-detail-content');
  content.innerHTML = `
    <div class="dd-hero">
      <button class="dd-back" onclick="backFromDay()">
        <i class="ti ti-arrow-left" style="font-size:14px"></i> Voltar
      </button>
      <div class="dd-day-num">${phaseLabel} · Dia ${d.id} de 21</div>
      <div class="dd-title">${d.title}</div>
    </div>

    <div class="dd-section">
      <div class="dd-section-title">
        <i class="ti ti-target" aria-hidden="true" style="font-size:14px;color:#6B7FD7"></i>
        Objetivo do dia
      </div>
      <div class="dd-text">${d.objective}</div>
    </div>

    <div class="dd-section" style="margin-top:16px">
      <div class="dd-section-title">
        <i class="ti ti-book" aria-hidden="true" style="font-size:14px;color:#6B7FD7"></i>
        Aprendizado
      </div>
      <div class="card"><div class="dd-text">${d.learning}</div></div>
    </div>

    <div class="dd-section" style="margin-top:4px">
      <div class="dd-section-title">
        <i class="ti ti-list-check" aria-hidden="true" style="font-size:14px;color:#5DCAA5"></i>
        Ação prática
      </div>
      ${stepsHtml}
    </div>

    <div class="dd-section" style="margin-top:4px">
      <div class="dd-section-title">
        <i class="ti ti-checkbox" aria-hidden="true" style="font-size:14px;color:#6B7FD7"></i>
        Checklist
      </div>
      <div class="card" style="padding:4px 16px">${checkHtml}</div>
    </div>

    <div class="dd-section" style="margin-top:4px">
      <div class="dd-section-title">
        <i class="ti ti-pencil" aria-hidden="true" style="font-size:14px;color:#D4537E"></i>
        Reflexão
      </div>
      <textarea
        class="reflection-area"
        id="refl-${dayId}"
        placeholder="Como foi aplicar isso hoje? O que você observou?"
      >${ref}</textarea>
    </div>

    <div class="dd-section" style="margin-top:12px;padding-bottom:8px">
      <button
        class="btn-complete ${isDone ? 'completed' : ''}"
        id="btn-complete-${dayId}"
        onclick="markComplete(${dayId})"
      >${isDone ? '✓ Dia concluído' : '✓ Marcar como concluído'}</button>
    </div>
  `;

  document.getElementById('refl-' + dayId).addEventListener('input', function () {
    reflections[dayId] = this.value;
    save();
  });

  showScreen('day');
}

function toggleCheck(dayId, idx) {
  if (!checks[dayId]) checks[dayId] = {};
  checks[dayId][idx] = !checks[dayId][idx];
  save();
  goToDay(dayId);
}

function markComplete(dayId) {
  if (!completed.includes(dayId)) {
    completed.push(dayId);
    // Advance currentDay
    if (dayId === currentDay && currentDay < 21) currentDay = dayId + 1;
    save();
    updateProgress();
    buildJourney();
    buildAchievements();
  }
  const btn = document.getElementById('btn-complete-' + dayId);
  if (btn) {
    btn.textContent = '✓ Dia concluído';
    btn.classList.add('completed');
  }
}

function backFromDay() { navTo('journey'); }

// ---- TOOL MODAL ----
function openTool(idx) {
  const t = TOOLS[idx];
  const sheet = document.getElementById('tool-sheet-content');

  const stepsHtml = t.steps.map((s, i) => `
    <div class="tool-sheet-step">
      <div class="dd-step-num" style="background:#EEF2FF;color:#6B7FD7;flex-shrink:0">${i + 1}</div>
      <div style="font-size:13px;color:var(--text-primary);line-height:1.5">${s}</div>
    </div>
  `).join('');

  sheet.innerHTML = `
    <div class="tool-sheet-handle"></div>
    <div class="tool-sheet-icon">${t.icon}</div>
    <div class="tool-sheet-title">${t.name}</div>
    <div class="tool-sheet-sub">${t.sub}</div>
    ${stepsHtml}
    <button class="tool-sheet-close" onclick="closeToolModal()">Fechar</button>
  `;

  document.getElementById('tool-modal').classList.add('open');
}

function closeToolModal(e) {
  if (!e || e.target === document.getElementById('tool-modal')) {
    document.getElementById('tool-modal').classList.remove('open');
  }
}

// ---- NAVIGATION ----
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('s-' + name).classList.add('active');
  const nb = document.getElementById('nb-' + name);
  if (nb) nb.classList.add('active');

  window.scrollTo(0, 0);
}

function navTo(name) { showScreen(name); }

// ---- INIT ----
updateProgress();
buildJourney();
buildTools();
buildAchievements();
