const fs = require('fs');
const path = require('path');

// ==========================================
// 1. UPDATE index.html
// ==========================================
const indexPath = path.join(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// A. Insert Drawer Asesmen Menu
const oldDrawerEvaluasi = `      <!-- EVALUASI & KUIS -->
      <div class="pt-2">
        <a href="#" class="drawer-nav-item bg-[#C6F235] text-[#0C3B2E] hover:bg-[#b3df24] font-extrabold" data-target="latihan">
          <i data-lucide="pen-tool" class="w-5 h-5 text-[#0C3B2E]"></i>
          <span>Latihan & Kuis Evaluasi</span>
        </a>
      </div>`;

const newDrawerAsesmen = `      <!-- EVALUASI & KUIS -->
      <div class="pt-2">
        <a href="#" class="drawer-nav-item bg-[#C6F235] text-[#0C3B2E] hover:bg-[#b3df24] font-extrabold" data-target="latihan">
          <i data-lucide="pen-tool" class="w-5 h-5 text-[#0C3B2E]"></i>
          <span>Kuis Latihan Reguler</span>
        </a>
      </div>

      <!-- ASESMEN KURIKULUM CINTA KEMENAG RI -->
      <div class="pt-3 border-t border-white/10 mt-3 space-y-1.5">
        <div class="px-3 text-[11px] font-extrabold uppercase tracking-wider text-[#C6F235] flex items-center gap-1.5">
          <i data-lucide="heart-handshake" class="w-3.5 h-3.5"></i>
          <span>Asesmen Kurikulum Cinta</span>
        </div>
        
        <a href="#" class="drawer-nav-item bg-white/10 hover:bg-[#C6F235] hover:text-[#0C3B2E] transition-all flex items-center gap-3" data-target="sumatif">
          <span class="w-6 h-6 rounded-lg bg-[#C6F235] text-[#0C3B2E] font-black text-xs flex items-center justify-center shrink-0">Σ</span>
          <div>
            <span class="font-bold text-xs block">Asesmen Sumatif</span>
            <span class="text-[10px] text-emerald-200 block">Kognitif HOTS & Nilai Cinta (20 Soal)</span>
          </div>
        </a>

        <a href="#" class="drawer-nav-item bg-white/10 hover:bg-[#C6F235] hover:text-[#0C3B2E] transition-all flex items-center gap-3" data-target="normatif">
          <span class="w-6 h-6 rounded-lg bg-pink-400 text-[#0C3B2E] font-black text-xs flex items-center justify-center shrink-0">❤</span>
          <div>
            <span class="font-bold text-xs block">Asesmen Normatif</span>
            <span class="text-[10px] text-pink-200 block">Sikap, Adab & Karakter Kemenag (20 Soal)</span>
          </div>
        </a>
      </div>`;

// B. Insert Home Page Highlight Cards for Asesmen
const oldHomeClose = `            <div class="flex items-center justify-between text-xs font-bold text-[#C6F235] pt-4 border-t border-white/10">
              <span>Mulai Kuis Latihan</span>
              <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>

        </div>
      </div>

    </section>`;

const newHomeCards = `            <div class="flex items-center justify-between text-xs font-bold text-[#C6F235] pt-4 border-t border-white/10">
              <span>Mulai Kuis Latihan</span>
              <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>

        </div>
      </div>

      <!-- ASESMEN BERBASIS KURIKULUM CINTA KEMENAG RI -->
      <div class="pt-6 border-t border-[#E2ECDE]">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div class="inline-flex items-center gap-1.5 bg-[#EBF5E9] text-[#0C3B2E] px-3.5 py-1 rounded-full text-xs font-bold mb-2">
              <i data-lucide="heart-handshake" class="w-3.5 h-3.5 text-emerald-700"></i>
              <span>Kurikulum Berbasis Cinta (Pendidikan Mahabbah) Kemenag RI</span>
            </div>
            <h3 class="text-2xl font-bold text-[#0C3B2E]">Asesmen Sumatif & Normatif</h3>
            <p class="text-sm text-gray-600">Model evaluasi Bahasa Arab terintegrasi 5 pilar cinta, kemanusiaan, moderasi beragama, dan adab</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card Sumatif -->
          <div class="card-modern p-6 sm:p-8 cursor-pointer flex flex-col justify-between group bg-white border border-emerald-100 hover:border-emerald-500 hover:shadow-xl transition-all" data-target="sumatif">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-[#0C3B2E] text-[#C6F235] flex items-center justify-center font-bold text-xl shadow">
                  <i data-lucide="calculator" class="w-6 h-6"></i>
                </div>
                <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">التقييم التلخيصي</span>
              </div>
              <h4 class="text-xl font-bold text-[#0C3B2E] mb-2 group-hover:text-emerald-700 transition-colors">Asesmen Sumatif (20 Soal)</h4>
              <p class="text-xs text-gray-600 leading-relaxed mb-4">
                Uji capaian pembelajaran komprehensif Bahasa Arab Kelas 11 MA (Faham al-Maqru', Qawa'id, Mufradat) dengan stimulus teks kontekstual bernilai kasih sayang, kelestarian lingkungan, dan moderasi beragama.
              </p>
            </div>
            <div class="flex items-center justify-between text-xs font-bold text-emerald-800 pt-4 border-t border-gray-100">
              <span class="flex items-center gap-1.5">
                <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i>
                <span>Buka Asesmen Sumatif</span>
              </span>
              <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-emerald-600"></i>
            </div>
          </div>

          <!-- Card Normatif -->
          <div class="card-modern p-6 sm:p-8 cursor-pointer flex flex-col justify-between group bg-white border border-pink-100 hover:border-pink-500 hover:shadow-xl transition-all" data-target="normatif">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-600 to-rose-600 text-white flex items-center justify-center font-bold text-xl shadow">
                  <i data-lucide="heart" class="w-6 h-6"></i>
                </div>
                <span class="bg-pink-100 text-pink-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">التقييم القيمي والمعياري</span>
              </div>
              <h4 class="text-xl font-bold text-[#0C3B2E] mb-2 group-hover:text-pink-700 transition-colors">Asesmen Normatif (20 Soal)</h4>
              <p class="text-xs text-gray-600 leading-relaxed mb-4">
                Uji penalaran moral, etika berkomunikasi (*Adabul Hiwar*), empati sosial, toleransi antarumat beragama (*Tasamuh*), dan integritas akhlak mulia dalam dinamika pergaulan madrasah dan masyarakat.
              </p>
            </div>
            <div class="flex items-center justify-between text-xs font-bold text-pink-800 pt-4 border-t border-gray-100">
              <span class="flex items-center gap-1.5">
                <i data-lucide="heart-handshake" class="w-4 h-4 text-pink-600"></i>
                <span>Buka Asesmen Normatif</span>
              </span>
              <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-pink-600"></i>
            </div>
          </div>
        </div>
      </div>

    </section>`;

// C. Insert View Section for Asesmen
const oldMainEnd = `      <div id="quizContainer">
        <!-- Dynamically populated -->
      </div>
    </section>

  </main>`;

const newViewSection = `      <div id="quizContainer">
        <!-- Dynamically populated -->
      </div>
    </section>

    <!-- 7. ASESMEN KURIKULUM CINTA VIEW -->
    <section id="view-asesmen" class="view-section hidden space-y-6">
      <div id="asesmenContainer">
        <!-- Dynamically populated by js/asesmen.js -->
      </div>
    </section>

  </main>`;

// D. Script Imports
const oldScripts = `  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script src="js/quiz.js"></script>`;

const newScripts = `  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script src="js/quiz.js"></script>
  <script src="js/asesmen.js"></script>`;

// Normalize newlines for reliable replacement
function normalize(str) {
  return str.replace(/\r\n/g, '\n');
}

indexHtml = normalize(indexHtml);

if (indexHtml.includes(normalize(oldDrawerEvaluasi))) {
  indexHtml = indexHtml.replace(normalize(oldDrawerEvaluasi), normalize(newDrawerAsesmen));
  console.log('[OK] Drawer navigation updated');
} else {
  console.log('[WARN] Drawer navigation pattern not found');
}

if (indexHtml.includes(normalize(oldHomeClose))) {
  indexHtml = indexHtml.replace(normalize(oldHomeClose), normalize(newHomeCards));
  console.log('[OK] Home cards updated');
} else {
  console.log('[WARN] Home cards pattern not found');
}

if (indexHtml.includes(normalize(oldMainEnd))) {
  indexHtml = indexHtml.replace(normalize(oldMainEnd), normalize(newViewSection));
  console.log('[OK] Asesmen view section added');
} else {
  console.log('[WARN] Asesmen view section pattern not found');
}

if (indexHtml.includes(normalize(oldScripts))) {
  indexHtml = indexHtml.replace(normalize(oldScripts), normalize(newScripts));
  console.log('[OK] Script import added');
} else {
  console.log('[WARN] Script import pattern not found');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('index.html update completed!');

// ==========================================
// 2. UPDATE js/app.js
// ==========================================
const appPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appPath, 'utf8');
appJs = normalize(appJs);

// Target navigateTo inside js/app.js
const oldNavigateTarget = `    // Show active view section
    const targetView = document.getElementById(\`view-\${viewId}\`);
    if (targetView) {
      targetView.classList.remove('hidden');
    }`;

const newNavigateTarget = `    // Show active view section
    let targetSectionId = viewId;
    if (viewId === 'sumatif' || viewId === 'normatif') {
      targetSectionId = 'asesmen';
    }
    const targetView = document.getElementById(\`view-\${targetSectionId}\`);
    if (targetView) {
      targetView.classList.remove('hidden');
    }`;

if (appJs.includes(normalize(oldNavigateTarget))) {
  appJs = appJs.replace(normalize(oldNavigateTarget), normalize(newNavigateTarget));
  console.log('[OK] app.js navigateTo updated for sumatif/normatif routing');
}

// Target renderSectionContent
const oldRenderSwitcher = `      case 'latihan':
        if (window.initQuiz) window.initQuiz();
        break;
      default:
        break;`;

const newRenderSwitcher = `      case 'latihan':
        if (window.initQuiz) window.initQuiz();
        break;
      case 'asesmen':
      case 'sumatif':
        if (window.initAsesmen) window.initAsesmen('sumatif');
        break;
      case 'normatif':
        if (window.initAsesmen) window.initAsesmen('normatif');
        break;
      default:
        break;`;

if (appJs.includes(normalize(oldRenderSwitcher))) {
  appJs = appJs.replace(normalize(oldRenderSwitcher), normalize(newRenderSwitcher));
  console.log('[OK] app.js renderSectionContent updated');
}

// Add event delegation for any dynamically loaded [data-target]
if (!appJs.includes('Global click handler for data-target buttons')) {
  const oldActionBtns = `  // Action buttons with data-target
  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.getAttribute('data-target');
      if (target) navigateTo(target);
    });
  });`;

  const newActionBtns = `  // Action buttons with data-target & global click delegation
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-target]');
    if (btn && !btn.classList.contains('drawer-nav-item') && !btn.classList.contains('desktop-nav-item')) {
      const target = btn.getAttribute('data-target');
      if (target) {
        e.preventDefault();
        navigateTo(target);
      }
    }
  });`;

  if (appJs.includes(normalize(oldActionBtns))) {
    appJs = appJs.replace(normalize(oldActionBtns), normalize(newActionBtns));
    console.log('[OK] app.js click delegation added');
  }
}

fs.writeFileSync(appPath, appJs, 'utf8');
console.log('js/app.js update completed!');
