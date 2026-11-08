/**
 * Asesmen Sumatif & Normatif Berbasis Kurikulum Cinta Kemenag RI
 * Media Pembelajaran Bahasa Arab Kelas 11 MA
 * Pemilik / Penyusun: Yosi, S. Ag, M. Pd. (MAN 1 Pontianak)
 */

(function() {
  // Assessment State
  let currentAsesmenType = 'sumatif'; // 'sumatif' or 'normatif'
  let selectedPilar = 'all'; // 'all', 'rahmah', 'tasamuh', 'wathan', 'biah', 'adab'
  let currentQuestions = [];
  let currentStep = 0;
  let userAnswers = {}; // { questionId: selectedIndex }
  let showExplanation = false;
  let assessmentCompleted = false;

  // Initialize Asesmen View
  window.initAsesmen = function(type = 'sumatif') {
    currentAsesmenType = type;
    currentStep = 0;
    userAnswers = {};
    assessmentCompleted = false;
    showExplanation = false;

    loadQuestions();
    renderAsesmenView();
  };

  function loadQuestions() {
    const rawList = currentAsesmenType === 'sumatif' 
      ? ARABIC_DATA.asesmenSumatif 
      : ARABIC_DATA.asesmenNormatif;

    if (selectedPilar === 'all') {
      currentQuestions = [...rawList];
    } else {
      currentQuestions = rawList.filter(q => q.pilarId === selectedPilar);
    }
  }

  window.setAsesmenType = function(type) {
    currentAsesmenType = type;
    selectedPilar = 'all';
    currentStep = 0;
    userAnswers = {};
    assessmentCompleted = false;
    loadQuestions();
    renderAsesmenView();
  };

  window.setAsesmenPilar = function(pilarId) {
    selectedPilar = pilarId;
    currentStep = 0;
    loadQuestions();
    renderAsesmenView();
  };

  function renderAsesmenView() {
    const container = document.getElementById('asesmenContainer');
    if (!container) return;

    // Header & Tabs Switcher
    let html = `
      <!-- Banner Kurikulum Cinta Kemenag -->
      <div class="relative bg-gradient-to-r from-[#0C3B2E] via-[#145241] to-[#07271E] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 mb-8 overflow-hidden">
        <div class="absolute -top-12 -right-12 w-64 h-64 bg-[#C6F235]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#C6F235]">
              <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
              <span>Paradigma Baru Kemenag RI • Kurikulum Cinta</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Asesmen Berbasis Kurikulum Cinta (مَنْهَجُ الْمَحَبَّةِ)
            </h2>
            <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Mengukur kemahiran Bahasa Arab yang dijiwai oleh nilai-nilai kasih sayang (rahmah), toleransi, persaudaraan kemanusiaan, cinta tanah air, dan kelestarian lingkungan.
            </p>
          </div>
          <div class="flex items-center gap-2 bg-black/20 p-2 rounded-2xl border border-white/10 shrink-0 self-start md:self-center">
            <button 
              onclick="window.setAsesmenType('sumatif')" 
              class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${currentAsesmenType === 'sumatif' ? 'bg-[#C6F235] text-[#0C3B2E] shadow-md' : 'text-white/80 hover:text-white'}"
            >
              <i data-lucide="calculator" class="w-4 h-4"></i>
              <span>Asesmen Sumatif (20 Soal)</span>
            </button>
            <button 
              onclick="window.setAsesmenType('normatif')" 
              class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${currentAsesmenType === 'normatif' ? 'bg-[#C6F235] text-[#0C3B2E] shadow-md' : 'text-white/80 hover:text-white'}"
            >
              <i data-lucide="heart" class="w-4 h-4"></i>
              <span>Asesmen Normatif (20 Soal)</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 5 Pilar Filter Tabs -->
      <div class="mb-6 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Filter Berdasarkan Pilar Cinta:</span>
          <span class="text-xs font-semibold text-emerald-800">${currentQuestions.length} Soal Tersedia</span>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button 
            onclick="window.setAsesmenPilar('all')" 
            class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${selectedPilar === 'all' ? 'bg-[#0C3B2E] text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}"
          >
            Semua Pilar (20)
          </button>
          ${ARABIC_DATA.kurikulumCinta.pilar.map(p => `
            <button 
              onclick="window.setAsesmenPilar('${p.id}')" 
              class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${selectedPilar === p.id ? 'bg-[#0C3B2E] text-[#C6F235] shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}"
            >
              <i data-lucide="${p.icon}" class="w-3.5 h-3.5"></i>
              <span>${p.nama.split('(')[0].trim()}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Content: Either Result Card or Question Card
    if (assessmentCompleted) {
      html += renderResultView();
    } else {
      html += renderQuestionView();
    }

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
  }

  function renderQuestionView() {
    if (currentQuestions.length === 0) {
      return `
        <div class="bg-white rounded-3xl p-12 text-center border border-gray-200 text-gray-500">
          <i data-lucide="inbox" class="w-12 h-12 mx-auto text-gray-400 mb-3"></i>
          <p class="font-bold text-gray-700">Tidak ada soal pada pilar ini.</p>
          <button onclick="window.setAsesmenPilar('all')" class="mt-4 px-4 py-2 bg-[#0C3B2E] text-white text-xs font-bold rounded-xl">
            Tampilkan Semua Soal
          </button>
        </div>
      `;
    }

    const q = currentQuestions[currentStep];
    const userAnswer = userAnswers[q.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === q.correct;
    const progressPercent = Math.round(((currentStep + 1) / currentQuestions.length) * 100);

    return `
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2ECDE]">
        
        <!-- Question Meta & Step Progress -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-[#0C3B2E] text-[#C6F235] font-extrabold flex items-center justify-center text-sm shadow">
              ${currentStep + 1}
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="bg-[#EBF5E9] text-[#0C3B2E] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  ${currentAsesmenType === 'sumatif' ? 'Asesmen Sumatif' : 'Asesmen Normatif'}
                </span>
                <span class="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  ${q.pilarNama}
                </span>
              </div>
              <p class="text-xs text-gray-400 font-semibold mt-0.5">
                ${q.materiBab || 'Studi Kasus Karakter'} • Soal ${currentStep + 1} dari ${currentQuestions.length}
              </p>
            </div>
          </div>

          <!-- Progress Indicator -->
          <div class="w-full sm:w-48 space-y-1">
            <div class="flex justify-between text-[11px] font-bold text-gray-500">
              <span>Progres</span>
              <span>${progressPercent}%</span>
            </div>
            <div class="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-600 rounded-full transition-all duration-300" style="width: ${progressPercent}%;"></div>
            </div>
          </div>
        </div>

        <!-- Stimulus / Situation Box -->
        <div class="my-6 bg-[#F8FAF7] border border-emerald-100 rounded-2xl p-5 sm:p-6 space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
            <i data-lucide="book-open" class="w-4 h-4 text-emerald-600"></i>
            <span>${currentAsesmenType === 'sumatif' ? 'Teks Stimulus (النَّصُّ الْمُحَفِّزُ)' : 'Skenario Situasi Sosial (السِّينَارْيُو الأَخْلَاقِيُّ)'}</span>
          </div>
          <div class="font-arabic text-xl sm:text-2xl text-slate-800 leading-loose text-right dir-rtl py-1" dir="rtl">
            ${q.stimulus || q.situasi}
          </div>
        </div>

        <!-- Question Text -->
        <div class="mb-6">
          <h3 class="font-arabic text-lg sm:text-xl font-bold text-[#0C3B2E] leading-relaxed text-right dir-rtl mb-2" dir="rtl">
            ${q.question}
          </h3>
          <p class="text-xs text-gray-500 font-medium">Pilihlah satu jawaban yang paling tepat dan mencerminkan nilai luhur Kurikulum Cinta:</p>
        </div>

        <!-- Options Grid -->
        <div class="space-y-3 mb-6">
          ${q.options.map((opt, idx) => {
            const letter = ['A', 'B', 'C', 'D'][idx];
            let optClass = "border border-gray-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/50 text-gray-700";
            let badgeClass = "bg-gray-100 text-gray-600 border border-gray-200";

            if (isAnswered) {
              if (idx === q.correct) {
                optClass = "border-2 border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm";
                badgeClass = "bg-emerald-600 text-white";
              } else if (idx === userAnswer) {
                optClass = "border-2 border-rose-500 bg-rose-50 text-rose-900";
                badgeClass = "bg-rose-500 text-white";
              } else {
                optClass = "border border-gray-200 bg-gray-50/50 text-gray-400 opacity-60";
              }
            }

            return `
              <button 
                onclick="window.selectAsesmenOption(${idx})" 
                class="w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between gap-4 cursor-pointer ${optClass}"
              >
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl font-extrabold text-xs flex items-center justify-center shrink-0 ${badgeClass}">
                    ${letter}
                  </span>
                  <span class="text-xs sm:text-sm font-semibold">${opt}</span>
                </div>
                ${isAnswered && idx === q.correct ? '<i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i>' : ''}
                ${isAnswered && idx === userAnswer && idx !== q.correct ? '<i data-lucide="x-circle" class="w-5 h-5 text-rose-500 shrink-0"></i>' : ''}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Explanation Card (Visible After Answering) -->
        ${isAnswered ? `
          <div class="p-5 rounded-2xl border ${isCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-amber-50/80 border-amber-200 text-amber-950'} mb-6 space-y-2">
            <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wide">
              <i data-lucide="${isCorrect ? 'check-circle' : 'info'}" class="w-4 h-4 ${isCorrect ? 'text-emerald-700' : 'text-amber-700'}"></i>
              <span>${isCorrect ? 'Jawaban Tepat • Refleksi Nilai Cinta Kemenag' : 'Pembahasan & Nilai Kurikulum Cinta'}</span>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed">${q.explanation}</p>
          </div>
        ` : ''}

        <!-- Bottom Controls & Step Navigation -->
        <div class="flex items-center justify-between gap-3 pt-6 border-t border-gray-100">
          <button 
            onclick="window.prevAsesmenStep()" 
            class="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-1.5 ${currentStep === 0 ? 'opacity-40 pointer-events-none' : ''}"
          >
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
            <span>Sebelumnya</span>
          </button>

          <!-- Number Jump Modal / Quick Selector -->
          <div class="hidden sm:flex items-center gap-1 overflow-x-auto max-w-md py-1">
            ${currentQuestions.map((quest, i) => {
              const ans = userAnswers[quest.id];
              let btnColor = "bg-gray-100 text-gray-500 hover:bg-gray-200";
              if (i === currentStep) btnColor = "bg-[#0C3B2E] text-[#C6F235] font-extrabold ring-2 ring-[#C6F235]";
              else if (ans !== undefined) btnColor = ans === quest.correct ? "bg-emerald-100 text-emerald-800 font-bold" : "bg-rose-100 text-rose-800 font-bold";

              return `
                <button 
                  onclick="window.jumpAsesmenStep(${i})" 
                  class="w-7 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all shrink-0 ${btnColor}"
                >
                  ${i + 1}
                </button>
              `;
            }).join('')}
          </div>

          ${currentStep === currentQuestions.length - 1 ? `
            <button 
              onclick="window.finishAsesmen()" 
              class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0C3B2E] to-[#145241] text-[#C6F235] text-xs font-extrabold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              <span>Selesai & Lihat Nilai</span>
              <i data-lucide="award" class="w-4 h-4"></i>
            </button>
          ` : `
            <button 
              onclick="window.nextAsesmenStep()" 
              class="px-5 py-2.5 rounded-xl bg-[#0C3B2E] text-white text-xs font-bold hover:bg-[#07271E] transition-all flex items-center gap-1.5"
            >
              <span>Selanjutnya</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          `}
        </div>

      </div>
    `;
  }

  function renderResultView() {
    const total = currentQuestions.length;
    let correctCount = 0;
    
    // Per Pilar Statistics
    const pilarStats = {};
    ARABIC_DATA.kurikulumCinta.pilar.forEach(p => {
      pilarStats[p.id] = { total: 0, correct: 0, name: p.nama.split('(')[0].trim() };
    });

    currentQuestions.forEach(q => {
      const userAns = userAnswers[q.id];
      const isCorrect = userAns === q.correct;
      if (isCorrect) correctCount++;

      if (pilarStats[q.pilarId]) {
        pilarStats[q.pilarId].total++;
        if (isCorrect) pilarStats[q.pilarId].correct++;
      }
    });

    const finalScore = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    let predicate = { text: "مُمْتَازٌ (Istimewa / Mumtaz)", desc: "Menghayati Nilai Kurikulum Cinta Secara Paripurna", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" };
    if (finalScore < 70) {
      predicate = { text: "مَقْبُولٌ (Cukup / Butuh Bimbingan)", desc: "Perlu Penguatan Nilai Moral & Pemahaman Bahasa", color: "text-rose-700", bg: "bg-rose-50 border-rose-200" };
    } else if (finalScore < 80) {
      predicate = { text: "جَيِّدٌ (Baik / Jayyid)", desc: "Memahami Esensi Nilai Cinta & Kaidah Bahasa", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" };
    } else if (finalScore < 90) {
      predicate = { text: "جَيِّدٌ جِدًّا (Sangat Baik / Jayyid Jiddan)", desc: "Karakter Cinta Terbina Sangat Kuat & Bahasa Lancar", color: "text-teal-700", bg: "bg-teal-50 border-teal-200" };
    }

    return `
      <div id="asesmenPrintableReport" class="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E2ECDE] space-y-8">
        
        <!-- Result Header -->
        <div class="text-center space-y-3 pb-8 border-b border-gray-100">
          <div class="inline-flex items-center gap-2 bg-[#EBF5E9] text-[#0C3B2E] px-4 py-1.5 rounded-full text-xs font-bold">
            <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i>
            <span>Laporan Hasil Asesmen • Kurikulum Cinta Kemenag RI</span>
          </div>
          <h2 class="text-3xl font-extrabold text-[#0C3B2E]">
            ${currentAsesmenType === 'sumatif' ? 'Hasil Asesmen Sumatif' : 'Hasil Asesmen Normatif'}
          </h2>
          <p class="text-xs text-gray-500 max-w-md mx-auto">
            Media Pembelajaran Bahasa Arab Kelas XI MA • MAN 1 Pontianak (Pengampu: Yosi, S. Ag, M. Pd.)
          </p>
        </div>

        <!-- Score Badge & Predicate Card -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div class="md:col-span-5 bg-gradient-to-tr from-[#0C3B2E] to-[#145241] text-white rounded-3xl p-8 text-center space-y-3 shadow-lg">
            <span class="text-xs text-[#C6F235] font-extrabold tracking-widest uppercase">Skor Capaian Akhir</span>
            <div class="text-6xl font-black text-[#C6F235] tracking-tight">
              ${finalScore}
            </div>
            <div class="text-xs text-emerald-200 font-semibold">
              Menjawab benar ${correctCount} dari ${total} soal (${finalScore}%)
            </div>
          </div>

          <div class="md:col-span-7 ${predicate.bg} border rounded-3xl p-6 sm:p-8 space-y-3">
            <span class="text-[10px] font-bold uppercase tracking-wider text-gray-500">Predikat Kualitatif & Karakter</span>
            <h3 class="text-2xl font-black ${predicate.color}">
              ${predicate.text}
            </h3>
            <p class="text-xs sm:text-sm text-gray-700 leading-relaxed">
              ${predicate.desc}. Penilaian ini mengintegrasikan kecakapan literasi Bahasa Arab dengan penghayatan adab, moderasi beragama, dan rasa kemanusiaan.
            </p>
          </div>
        </div>

        <!-- Pillar Breakdown Analysis -->
        <div class="space-y-4 pt-4">
          <h4 class="text-base font-bold text-[#0C3B2E] flex items-center gap-2">
            <i data-lucide="pie-chart" class="w-4 h-4 text-emerald-600"></i>
            <span>Indeks Capaian 5 Pilar Kurikulum Cinta Kemenag</span>
          </h4>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${Object.keys(pilarStats).map(pId => {
              const stat = pilarStats[pId];
              const percent = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 100;
              return `
                <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <div class="flex justify-between items-center text-xs font-bold text-gray-700">
                    <span class="truncate pr-2">${stat.name}</span>
                    <span class="text-emerald-700">${percent}%</span>
                  </div>
                  <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-emerald-600 rounded-full" style="width: ${percent}%;"></div>
                  </div>
                  <p class="text-[10px] text-gray-400">Tuntas ${stat.correct}/${stat.total} Butir Soal</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100">
          <button 
            onclick="window.initAsesmen('${currentAsesmenType}')" 
            class="px-6 py-3 rounded-2xl border border-gray-300 font-bold text-xs text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2"
          >
            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            <span>Ulangi Asesmen</span>
          </button>

          <div class="flex items-center gap-3">
            <button 
              onclick="window.print()" 
              class="px-6 py-3 rounded-2xl bg-white border border-emerald-600 text-emerald-800 font-extrabold text-xs hover:bg-emerald-50 transition-all flex items-center gap-2 shadow-sm"
            >
              <i data-lucide="printer" class="w-4 h-4"></i>
              <span>Cetak Hasil Evaluasi</span>
            </button>
            <button 
              onclick="window.setAsesmenType('${currentAsesmenType === 'sumatif' ? 'normatif' : 'sumatif'}')" 
              class="px-6 py-3 rounded-2xl bg-[#0C3B2E] text-[#C6F235] font-extrabold text-xs hover:bg-[#07271E] transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Lanjut ke ${currentAsesmenType === 'sumatif' ? 'Asesmen Normatif' : 'Asesmen Sumatif'}</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // User Actions
  window.selectAsesmenOption = function(index) {
    const q = currentQuestions[currentStep];
    if (userAnswers[q.id] !== undefined) return; // Prevent re-answering
    userAnswers[q.id] = index;
    renderAsesmenView();
  };

  window.nextAsesmenStep = function() {
    if (currentStep < currentQuestions.length - 1) {
      currentStep++;
      renderAsesmenView();
    }
  };

  window.prevAsesmenStep = function() {
    if (currentStep > 0) {
      currentStep--;
      renderAsesmenView();
    }
  };

  window.jumpAsesmenStep = function(step) {
    if (step >= 0 && step < currentQuestions.length) {
      currentStep = step;
      renderAsesmenView();
    }
  };

  window.finishAsesmen = function() {
    assessmentCompleted = true;
    renderAsesmenView();
  };

})();
