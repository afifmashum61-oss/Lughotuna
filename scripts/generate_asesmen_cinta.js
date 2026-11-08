const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../js/data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Kurikulum Cinta Information
const kurikulumCintaMeta = {
  title: "Kurikulum Berbasis Cinta (Pendidikan Mahabbah) Kemenag RI",
  tagline: "Menumbuhkan Kasih Sayang, Membangun Peradaban Luhur, Memperkokoh Kerukunan Bangsa",
  inisiator: "Kementerian Agama Republik Indonesia (Kemenag RI)",
  deskripsi: "Paradigma pendidikan keagamaan yang berpusat pada penanaman nilai-nilai cinta (al-mahabbah) dan kasih sayang (ar-rahmah). Bahasa Arab dipelajari bukan hanya sebagai kaidah gramatika formal, melainkan sarana menyuarakan perdamaian, persaudaraan kemanusiaan, cinta tanah air, kelestarian lingkungan, dan kesantunan akhlak.",
  pilar: [
    {
      id: "rahmah",
      nama: "Kasih Sayang & Kemanusiaan (الرَّحْمَةُ وَالإِنْسَانِيَّةُ)",
      deskripsi: "Menebarkan empati sosial, menolong sesama yang lemah, dan menjunjung martabat manusia tanpa diskriminasi.",
      icon: "heart-handshake",
      color: "#10b981"
    },
    {
      id: "tasamuh",
      nama: "Moderasi Beragama & Toleransi (التَّسَامُحُ وَالاعْتِدَالُ)",
      deskripsi: "Sikap tawasuth (moderat) dan tasamuh (saling menghormati) dalam merawat keharmonisan umat beragama di Indonesia.",
      icon: "shield-check",
      color: "#0284c7"
    },
    {
      id: "wathan",
      nama: "Cinta Tanah Air & Persatuan (حُبُّ الْوَطَنِ وَالْوَحْدَةُ)",
      deskripsi: "Komitmen kebangsaan, merawat kebinekaan Nusantara, dan menjunjung nilai luhur Pancasila.",
      icon: "flag",
      color: "#f59e0b"
    },
    {
      id: "biah",
      nama: "Cinta Lingkungan & Menjaga Tubuh (مَحَبَّةُ الْبِيئَةِ وَالصِّحَّةِ)",
      deskripsi: "Menjaga bumi sebagai anugerah Ilahi, peduli kebersihan alam sekitar, dan memelihara kesehatan raga.",
      icon: "leaf",
      color: "#16a34a"
    },
    {
      id: "adab",
      nama: "Adab Berbicara & Kesantunan (أَدَبُ الْكَلَامِ وَالصِّدْقُ)",
      deskripsi: "Santun bertutur kata (qaulan layyina & qaulan karima), menjauhi fitnah dan ujaran kebencian, serta menjunjung kejujuran.",
      icon: "message-circle-heart",
      color: "#8b5cf6"
    }
  ]
};

// 20 Asesmen Sumatif (Kognitif HOTS & Analisis Teks Berbasis Kurikulum Cinta)
const asesmenSumatif = [
  {
    id: 1,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    materiBab: "Bab 2: Kesehatan & Empati",
    stimulus: "قَامَ طُلَّابُ فَصْلِنَا بِزِيَارَةِ مَرْضَى السُّكَّرِيِّ فِي الْمُسْتَشْفَى لِإِدْخَالِ السُّرُورِ عَلَى قُلُوبِهِمْ وَتَقْدِيمِ الدُّعَاءِ لَهُمْ بِالشِّفَاءِ.",
    question: "مَا الْقِيمَةُ الإِنْسَانِيَّةُ الْأَسَاسِيَّةُ الَّتِي يُجَسِّدُهَا سُلُوكُ الطُّلَّابِ فِي النَّصِّ حَسَبَ رُوحِ مَنْهَجِ الْمَحَبَّةِ لِوَزَارَةِ الشُّؤُونِ الدِّينِيَّةِ؟",
    options: [
      "عِيَادَةُ الْمَرْضَى رَحْمَةٌ وَتَكَافُلٌ إِنْسَانِيٌّ يَبُثُّ الأَمَلَ فِي النُّفُوسِ",
      "الزِّيَارَةُ مُجَرَّدُ وَاجِبٍ مَدْرَسِيٍّ رَسْمِيٍّ دُونَ مَشَاعِرَ",
      "الْبَحْثُ عَنِ الشُّهْرَةِ وَالتَّصْوِيرِ فِي الْمُسْتَشْفَى",
      "إِضَاعَةُ الْوَقْتِ فِي أَيَّامِ الدِّرَاسَةِ"
    ],
    correct: 0,
    explanation: "Sesuai pilar Kasih Sayang & Kemanusiaan (الرَّحْمَةُ وَالإِنْسَانِيَّةُ), menjenguk orang sakit dan mendoakannya merupakan wujud empati tulus yang menebarkan harapan dan menguatkan persaudaraan sesama manusia."
  },
  {
    id: 2,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    materiBab: "Bab 1: Bepergian & Menolong Sesama",
    stimulus: "شَاهَدَ فَاخِرٌ مُسَافِرًا كَبِيرَ السِّنِّ تَعَطَّلَتْ حَافِلَتُهُ فِي الطَّرِيقِ، فَقَدَّمَ لَهُ الْمَاءَ وَسَاعَدَهُ فِي حَمْلِ حَقِيبَتِهِ.",
    question: "فِي جُمْلَةِ (فَقَدَّمَ لَهُ الْمَاءَ)، مَا صِيغَةُ الْفِعْلِ الْمَاضِي إِذَا أَسْنَدْنَاهُ إِلَى الضَّمِيرِ (نَحْنُ) مَعَ الْحِفَاظِ عَلَى خُلُقِ النَّجْدَةِ؟",
    options: [
      "قَدَّمْنَا لَهُ الْمَاءَ",
      "قَدَّمْتُ لَهُ الْمَاءَ",
      "قَدَّمُوا لَهُ الْمَاءَ",
      "قَدَّمَتْ لَهُ الْمَاءَ"
    ],
    correct: 0,
    explanation: "Fi'il Madhy untuk dhamir (نَحْنُ) dari kata kerja (قَدَّمَ) adalah (قَدَّمْنَا). Secara substansi, menolong musafir di perjalanan adalah cerminan kemuliaan akhlak tolong-menolong dalam Kurikulum Cinta."
  },
  {
    id: 3,
    pilarId: "tasamuh",
    pilarNama: "Moderasi Beragama & Toleransi",
    materiBab: "Bab 4: Agama di Indonesia",
    stimulus: "يَتَعَايَشُ فِي مَدِينَةِ جُومْبَانْج الْمُسْلِمُونَ وَالْمَسِيحِيُّونَ وَالْبُوذِيُّونَ فِي أَمْنٍ وَسَلَامٍ، يَتَعَاوَنُونَ فِي بِنَاءِ الْقَرْيَةِ دُونَ اخْتِلَافٍ فِي الْحُقُوقِ الْمَدَنِيَّةِ.",
    question: "مَا الْمَفْهُومُ الَّذِي يُعَبِّرُ عَنْ هَذَا التَّعَايُشِ السِّلْمِيِّ فِي مَنْهَجِ مَحَبَّةِ الْوَزَارَةِ؟",
    options: [
      "التَّسَامُحُ وَالاعْتِدَالُ فِي ظِلِّ الْمُوَاطَنَةِ الْمُتَسَاوِيَةِ",
      "التَّفْرِيقُ بَيْنَ الْمُواطِنِينَ عَلَى أَسَاسِ الْعِرْقِ",
      "التَّنَازُلُ عَنْ أُصُولِ الْعَقِيدَةِ الإِسْلَامِيَّةِ",
      "الانْعِزَالُ عَنِ الْمُجْتَمَعِ الْمُتَنَوِّعِ"
    ],
    correct: 0,
    explanation: "Kerukunan dan kerja sama antarumat beragama tanpa mencampuradukkan aqidah adalah inti dari Moderasi Beragama (التَّسَامُحُ وَالاعْتِدَالُ) yang ditegaskan Kemenag RI dalam bingkai persaudaraan kebangsaan (Ukhuwwah Wathaniyah)."
  },
  {
    id: 4,
    pilarId: "tasamuh",
    pilarNama: "Moderasi Beragama & Toleransi",
    materiBab: "Bab 4: Qawa'id Na'at & Nilai Keberagaman",
    stimulus: "إِنَّ إِنْدُونِيسِيَا دَوْلَةٌ مُتَنَوِّعَةٌ تَحْتَضِنُ أَدْيَانًا رَسْمِيَّةً سِتَّةً بِكُلِّ احْتِرَامٍ وَتَقْدِيرٍ.",
    question: "عَيِّنِ النَّعْتَ وَالْمَنْعُوتَ فِي جُمْلَةِ (دَوْلَةٌ مُتَنَوِّعَةٌ)، وَمَا دَلَالَتُهَا عَلَى ثَرَاءِ الْوَطَنِ؟",
    options: [
      "الْمَنْعُوتُ (دَوْلَةٌ) وَالنَّعْتُ (مُتَنَوِّعَةٌ)، وَتَدُلُّ عَلَى أَنَّ التَّنَوُّعَ مَصْدَرُ قُوَّةٍ وَجَمَالٍ",
      "الْمَنْعُوتُ (مُتَنَوِّعَةٌ) وَالنَّعْتُ (دَوْلَةٌ)",
      "كِلَاهُمَا مُبْتَدَأٌ وَخَبَرٌ",
      "لَا يُوجَدُ نَعْتٌ فِي الْجُمْلَةِ"
    ],
    correct: 0,
    explanation: "Kata (دَوْلَةٌ) adalah Man'ut, sedangkan (مُتَنَوِّعَةٌ) adalah Na'at Mufrad. Sifat 'beragam' pada bangsa Indonesia dipandang oleh Kurikulum Cinta sebagai rahmat dan modal persatuan."
  },
  {
    id: 5,
    pilarId: "wathan",
    pilarNama: "Cinta Tanah Air & Persatuan",
    materiBab: "Bab 4: Idhafah & Bhinneka Tunggal Ika",
    stimulus: "شِعَارُ (الْوَحْدَةِ فِي التَّنَوُّعِ) يُذَكِّرُنَا بِأَنَّ اخْتِلَافَ أَلْسِنَتِنَا وَأَلْوَانِنَا آيَةٌ مِنْ آيَاتِ قُدْرَةِ اللهِ تَعَالَى.",
    question: "فِي تَرْكِيبِ (شِعَارُ الْوَحْدَةِ)، مَا إِعْرَابُ كَلِمَةِ (الْوَحْدَةِ) وَمَا مَغْزَاهَا الْوَطَنِيُّ؟",
    options: [
      "مُضَافٌ إِلَيْهِ مَجْرُورٌ، وَتُرَسِّخُ حِرْصَ الإِسْلَامِ عَلَى وَحْدَةِ أَبْنَاءِ الْوَطَنِ",
      "فَاعِلٌ مَرْفُوعٌ بِالضَّمَّةِ",
      "مَفْعُولٌ بِهِ مَنْصُوبٌ بِالْفَتْحَةِ",
      "نَعْتٌ مَرْفُوعٌ"
    ],
    correct: 0,
    explanation: "Kata (الْوَحْدَةِ) berkedudukan sebagai Mudhaf Ilaih yang majrur dengan kasrah. Nilai persatuan (Al-Wahdah) adalah pilar ketahanan bangsa yang selaras dengan ajaran Islam dan semboyan Bhinneka Tunggal Ika."
  },
  {
    id: 6,
    pilarId: "wathan",
    pilarNama: "Cinta Tanah Air & Persatuan",
    materiBab: "Bab 1: Wisata Nusantara & Syukur",
    stimulus: "سَافَرَ الطُّلَّابُ إِلَى مَكَّاسَار لِمُشَاهَدَةِ غُرُوبِ الشَّمْسِ عَلَى شَاطِئِ لُوسَارِي، وَشَكَرُوا اللهَ عَلَى بَدِيعِ خَلْقِهِ فِي بِلَادِنَا.",
    question: "كَيْفَ يَرْبِطُ مَنْهَجُ الْمَحَبَّةِ بَيْنَ السِّيَاحَةِ فِي رُبُوعِ الْوَطَنِ وَحُبِّ الْوَطَنِ؟",
    options: [
      "السِّيَاحَةُ فِي الْوَطَنِ تُعَمِّقُ شُكْرَ النِّعْمَةِ وَتَزِيدُ فِي الْفَخْرِ بِجَمَالِ إِنْدُونِيسِيَا",
      "السِّيَاحَةُ مَضْيَعَةٌ لِلْمَالِ فَقَطْ",
      "السَّفَرُ لَا يَرْتَبِطُ بِالإِيمَانِ أَبَدًا",
      "الِاهْتِمَامُ بِالْبِلَادِ الْخَارِجِيَّةِ أَوْلَى مِنَ الْوَطَنِ"
    ],
    correct: 0,
    explanation: "Tadabbur alam di bumi Nusantara menumbuhkan rasa syukur kepada Allah SWT dan memperkokoh rasa cinta tanah air (Hubbul Wathan minal Iman)."
  },
  {
    id: 7,
    pilarId: "biah",
    pilarNama: "Cinta Lingkungan & Menjaga Tubuh",
    materiBab: "Bab 1: Wisata Sungai & Kelestarian Alam",
    stimulus: "عِنْدَ مُمَارَسَةِ التَّزَحْلُفِ فِي غَارِ فِيْنْدُوْل، حَافَظَ الشَّبَابُ عَلَى نَقَاءِ النَّهْرِ وَلَمْ يَرْمُوا فِيهِ الْعُلَبَ الْبِلَاسْتِيكِيَّةَ.",
    question: "مَا حُكْمُ حِمَايَةِ الْبِيئَةِ وَالْمِيَاهِ فِي مَنْهَجِ الرَّحْمَةِ، وَمَا إِعْرَابُ (لَمْ يَرْمُوا)؟",
    options: [
      "حِمَايَةُ الْبِيئَةِ أَمَانَةٌ شَرْعِيَّةٌ، وَ(يَرْمُوا) فِعْلٌ مُضَارِعٌ مَجْزُومٌ بِحَذْفِ النُّونِ",
      "حِمَايَةُ الْبِيئَةِ أَمْرٌ ثَانَوِيٌّ لَا دَخْلَ لَهُ بِالدِّينِ",
      "الْفِعْلُ (يَرْمُوا) مَرْفُوعٌ بِالضَّمَّةِ",
      "الْفِعْلُ مَبْنِيٌّ عَلَى السُّكُونِ"
    ],
    correct: 0,
    explanation: "Kelestarian lingkungan (Hifdzul Bi'ah) adalah bagian dari maqashid syariah. Secara nahwu, huruf jazm 'lam' menjazmkan fi'il mudhari' af'alul khamsah dengan membuang huruf nun (حذف النون)."
  },
  {
    id: 8,
    pilarId: "biah",
    pilarNama: "Cinta Lingkungan & Menjaga Tubuh",
    materiBab: "Bab 2: Gaya Hidup Sehat & Fi'il Mudhari'",
    stimulus: "يَجِبُ عَلَى كُلِّ مُسْلِمٍ أَنْ يُحَافِظَ عَلَى صِحَّتِهِ بِمُمَارَسَةِ الرِّيَاضَةِ، لِأَنَّ (الْمُؤْمِنَ الْقَوِيَّ خَيْرٌ وَأَحَبُّ إِلَى اللهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ).",
    question: "فِي جُمْلَةِ (أَنْ يُحَافِظَ عَلَى صِحَّتِهِ)، مَا إِعْرَابُ الْفِعْلِ، وَكَيْفَ يُعَدُّ حِفْظُ الصِّحَّةِ عَمَلَ مَحَبَّةٍ؟",
    options: [
      "فِعْلٌ مُضَارِعٌ مَنْصُوبٌ بِـ(أَنْ)، وَحِفْظُ الصِّحَّةِ عَمَلُ مَحَبَّةٍ لِلنَّفْسِ لِأَدَاءِ الْعِبَادَةِ وَنَفْعِ النَّاسِ",
      "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ",
      "فِعْلٌ مَجْزُومٌ بِالسُّكُونِ",
      "فِعْلُ أَمْرٍ مَبْنِيٌّ عَلَى الْكَسْرِ"
    ],
    correct: 0,
    explanation: "Huruf 'an' memansubkan fi'il mudhari' (يُحَافِظَ). Merawat tubuh adalah ekspresi cinta diri dan rasa syukur atas nikmat kesehatan agar mampu beribadah optimal dan menebar kebaikan."
  },
  {
    id: 9,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    materiBab: "Bab 3: Munada & Kerinduan Spiritual Haji",
    stimulus: "وَقَفَ الْحَاجُّ عَلَى صَعِيدِ عَرَفَاتٍ دَاعِيًا بِدُمُوعِ الرَّحْمَةِ: (يَا أَرْحَمَ الرَّاحِمِينَ، اجْمَعْ قُلُوبَ الْمُسْلِمِينَ عَلَى الْمَحَبَّةِ).",
    question: "مَا نَوْعُ الْمُنَادَى فِي جُمْلَةِ (يَا أَرْحَمَ الرَّاحِمِينَ)، وَمَا أَثَرُ هَذَا الدُّعَاءِ فِي حَيَاةِ الْحَاجِّ؟",
    options: [
      "مُنَادَى مُضَافٌ مَنْصُوبٌ بِالْفَتْحَةِ، يَغْرِسُ التَّوَاضُعَ وَالرَّحْمَةَ فِي قَلْبِ الْحَاجِّ نَحْوَ خَلْقِ اللهِ",
      "مُنَادَى مَبْنِيٌّ عَلَى الضَّمِّ",
      "نَكِرَةٌ غَيْرُ مَقْصُودَةٍ مَبْنِيَّةٌ عَلَى السُّكُونِ",
      "شَبِيهٌ بِالْمُضَافِ مَرْفُوعٌ"
    ],
    correct: 0,
    explanation: "Lafal 'أَرْحَمَ' adalah Munada Mudhaf yang mansub dengan fathah. Ibadah haji di Arafah melatih jiwa untuk menyerap sifat kasih sayang Allah (Ar-Rahman Ar-Rahim) dan mempraktikkannya kepada sesama."
  },
  {
    id: 10,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    materiBab: "Bab 3: Fi'il 'Amr Berkelembutan",
    stimulus: "قَالَ الْمُرْشِدُ الدِّينِيُّ لِلْمُعْتَمِرِينَ: (ارْحَمُوا الضُّعَفَاءَ وَتَسَامَحُوا فِي الزِّحَامِ أَثْنَاءَ الطَّوَافِ وَالسَّعْيِ).",
    question: "مَا صِيغَةُ فِعْلَيِ الأَمْرِ (ارْحَمُوا - تَسَامَحُوا)، وَمَا قِيمَتُهُمَا الإِرْشَادِيَّةُ فِي رُوحِ مَنْهَجِ الْحُبِّ؟",
    options: [
      "أَفْعَالُ أَمْرٍ لِضَمِيرِ (أَنْتُمْ) مَبْنِيَّةٌ عَلَى حَذْفِ النُّونِ، تَدْعُو إِلَى إِيثَارِ الرِّفْقِ وَالتَّرَاحُمِ عَلَى الْأَنَانِيَّةِ",
      "أَفْعَالٌ مَاضِيَةٌ مَبْنِيَّةٌ عَلَى الضَّمِّ",
      "أَفْعَالُ مُضَارِعٍ مَرْفُوعَةٌ بِثُبُوتِ النُّونِ",
      "أَفْعَالُ نَهْيٍ مَجْزُومَةٌ"
    ],
    correct: 0,
    explanation: "Keduanya adalah Fi'il 'Amr untuk dhamir (أَنْتُمْ) yang mabni atas hadzfun nun (حذف النون). Di tengah kepadatan tawaf/sa'i, nilai cinta menuntut jamaah mengutamakan kelembutan dan menjaga keselamatan sesama."
  },
  {
    id: 11,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    materiBab: "Bab 1: Adab Berdialog dalam Hiwar",
    stimulus: "فِي حِوَارٍ هَادِئٍ، قَالَ نَبِيلٌ لِزَمِيلِهِ: (أَحْتَرِمُ رَأْيَكَ يَا أَخِي، لَكِنْ لَوْ تَأَمَّلْتَ هَذِهِ النُّقْطَةَ لَوَجَدْتَ حَلاًّ أَوْفَقَ).",
    question: "كَيْفَ يُعَلِّمُنَا مَنْهَجُ الْكَلَامِ فِي الْقُرْآنِ أَدَبَ الِاخْتِلَافِ كَمَا فِي النَّصِّ؟",
    options: [
      "مُخَاطَبَةُ الآخَرِينَ بِالْقَوْلِ اللَّيِّنِ وَالاحْتِرَامِ الْمُتَبَادَلِ (قَوْلًا كَرِيمًا)",
      "رَفْعُ الصَّوْتِ وَالسُّخْرِيَّةُ مِنْ رَأْيِ الطَّرَفِ الآخَرِ",
      "قَطْعُ الْحِوَارِ وَالْغَضَبُ الشَّدِيدُ",
      "فَرْضُ الرَّأْيِ بِالْقُوَّةِ وَالتَّعَصُّبِ"
    ],
    correct: 0,
    explanation: "Adab dialog Kurikulum Cinta menekankan perkataan yang santun (قَوْلًا لَّيِّنًا / قَوْلًا كَرِيمًا), menghargai lawan bicara, dan tidak memaksakan kehendak secara arogan."
  },
  {
    id: 12,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    materiBab: "Bab 1: Bakti kepada Orang Tua & Fi'il Madhy",
    stimulus: "قَضَى نَبِيلٌ أَيَّامَ عُطْلَتِهِ فِي بَيْتِ جَدِّهِ، يَخْدُمُهُ بِرِعَايَةٍ كَامِلَةٍ وَيُدْخِلُ الْبَهْجَةَ عَلَى أُسْرَتِهِ.",
    question: "فِي جُمْلَةِ (قَضَى نَبِيلٌ أَيَّامَ عُطْلَتِهِ)، مَا دَلَالَةُ بِرِّ الْوَالِدَيْنِ وَالأَجْدَادِ كَأَسَاسٍ لِشَجَرَةِ الْمَحَبَّةِ الإِسْلَامِيَّةِ؟",
    options: [
      "بِرُّ الْكِبَارِ وَرِعَايَتُهُمْ هُوَ أَعْلَى مَرَاتِبِ الرَّحْمَةِ الْأُسَرِيَّةِ الَّتِي أَمَرَ بِهَا الشَّرْعُ",
      "خِدْمَةُ الْجَدِّ فَقَطْ لِلْحُصُولِ عَلَى الْمَالِ",
      "السَّفَرُ لِلرَّاحَةِ دُونَ الِاهْتِمَامِ بِالْوَالِدَيْنِ",
      "السُّلُوكُ لَا يَرْتَبِطُ بِالْأَخْلَاقِ"
    ],
    correct: 0,
    explanation: "Bakti kepada orang tua dan keluarga adalah akar dari seluruh karakter kasih sayang. Seseorang yang memiliki cinta sejati akan memuliakan orang tua dan orang yang lebih tua."
  },
  {
    id: 13,
    pilarId: "tasamuh",
    pilarNama: "Moderasi Beragama & Toleransi",
    materiBab: "Bab 4: Hak Bertetangga & Idhafah",
    stimulus: "عَلَّمَنَا رَسُولُ اللهِ ﷺ (حَقَّ الْجِوَارِ)، فَأَهْدَتْ عَائِشَةُ طَعَامًا لِجَارَتِهَا غَيْرِ الْمُسْلِمَةِ تَأْلِيفًا لِلْقُلُوبِ.",
    question: "مَا إِعْرَابُ كَلِمَةِ (الْجِوَارِ) فِي (حَقَّ الْجِوَارِ)، وَمَا قِيمَتُهَا فِي بِنَاءِ السِّلْمِ الاجْتِمَاعِيِّ؟",
    options: [
      "مُضَافٌ إِلَيْهِ مَجْرُورٌ، وَتُعَبِّرُ عَنْ رُقِيِّ الإِسْلَامِ فِي الإِحْسَانِ إِلَى الْجَارِ مُطْلَقًا",
      "نَعْتٌ مَنْصُوبٌ بِالْفَتْحَةِ",
      "مَفْعُولٌ مُطْلَقٌ",
      "حَالٌ مَنْصُوبَةٌ"
    ],
    correct: 0,
    explanation: "Susunan idhafah 'حَقَّ الْجِوَارِ' menegaskan kewajiban moral menghormati tetangga tanpa memandang latar belakang agamanya sebagai wujud dakwah bi hal penuh kasih sayang."
  },
  {
    id: 14,
    pilarId: "biah",
    pilarNama: "Cinta Lingkungan & Menjaga Tubuh",
    materiBab: "Bab 2: Menjaga Fasilitas Kesehatan",
    stimulus: "حَافَظَ الْمَرْضَى وَالزَّائِرُونَ عَلَى هُدُوءِ الْمُسْتَشْفَى وَنَظَافَةِ مَرَافِقِهِ رِعَايَةً لِرَاحَةِ الآخَرِينَ.",
    question: "عَيِّنِ النَّعْتَ فِي عِبَارَةِ (الْمَرَافِقِ الصِّحِّيَّةِ النَّظِيفَةِ) حِينَ نَصِفُهَا، وَكَيْفَ يَعُدُّ مَنْهَجُ الْحُبِّ النَّظَافَةَ دَلِيلَ الإِيمَانِ؟",
    options: [
      "النَّعْتُ يَصِفُ حَالَةَ الْمَرَافِقِ، وَالنَّظَافَةُ مَظْهَرٌ حَضَارِيٌّ يُعَبِّرُ عَنْ رَحْمَةِ الْمُسْلِمِ بِمَنْ حَوْلَهُ",
      "النَّظَافَةُ مَسْؤُولِيَّةُ عُمَّالِ النَّظَافَةِ فَقَطْ",
      "تَرْكُ الْمَكَانِ قَذِرًا لَا يُؤَثِّرُ فِي الإِيمَانِ",
      "لَا يُوجَدُ رَابِطٌ بَيْنَ النَّظَافَةِ وَالدِّينِ"
    ],
    correct: 0,
    explanation: "Menjaga kebersihan dan ketertiban tempat publik adalah bukti keimanan dan kepekaan rasa cinta agar tidak mengganggu atau menyakiti orang lain."
  },
  {
    id: 15,
    pilarId: "wathan",
    pilarNama: "Cinta Tanah Air & Persatuan",
    materiBab: "Bab 4: Menjaga Warisan Luhur Bangsa",
    stimulus: "زَارَ طُلَّابُ مَعْهَدِنَا مَتَاحِفَ التَّارِيخِ الإِنْدُونِيسِيِّ لِمَعْرِفَةِ تُرَاثِ أُمَّتِنَا الْعَرِيقِ وَالاعْتِزَازِ بِأَبْطَالِنَا الشُّهَدَاءِ.",
    question: "مَا نَوْعُ النَّعْتِ فِي جُمْلَةِ (تُرَاثِ أُمَّتِنَا الْعَرِيقِ)، وَمَا وَاجِبُنَا نَحْوَ شُهَدَاءِ الْوَطَنِ؟",
    options: [
      "نَعْتٌ مُفْرَدٌ مَجْرُورٌ، وَوَاجِبُنَا الدُّعَاءُ لَهُمْ وَمُوَاصَلَةُ كِفَاحِهِمْ فِي حِفْظِ أَمْنِ الْبِلَادِ",
      "نَعْتُ جُمْلَةٍ فِعْلِيَّةٍ",
      "نَعْتُ شِبْهِ جُمْلَةٍ",
      "لَا نَعْتَ فِي هَذِهِ الْعِبَارَةِ"
    ],
    correct: 0,
    explanation: "Kata 'الْعَرِيقِ' adalah Na'at Mufrad Majrur yang menyifati 'تُرَاثِ'. Menghormati jasa para pahlawan pejuang kemerdekaan adalah bagian dari integritas keimanan dan cinta tanah air."
  },
  {
    id: 16,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    materiBab: "Bab 1: Kejujuran dalam Muamalah",
    stimulus: "اشْتَرَى السَّائِحُ تِذْكَارًا مِنَ السُّوقِ، فَأَعَادَ لَهُ الْبَائِعُ الصَّادِقُ الزِّيَادَةَ مِنَ النُّقُودِ بِأَمَانَةٍ وَطِيبِ خَاطِرٍ.",
    question: "فِي جُمْلَةِ (الْبَائِعُ الصَّادِقُ)، مَا أَهَمِّيَّةُ الصِّدْقِ وَالأَمَانَةِ كَأَسَاسٍ لِلتَّرْبِيَةِ الأَخْلَاقِيَّةِ؟",
    options: [
      "الصِّدْقُ يُثْمِرُ الثِّقَةَ وَالْمَحَبَّةَ بَيْنَ النَّاسِ، وَهُوَ مِنْ أَعْظَمِ صِفَاتِ الْمُؤْمِنِ",
      "الأَمَانَةُ سَبَبٌ فِي الْخَسَارَةِ الْمَالِيَّةِ",
      "يَجُوزُ أَخْذُ أَمْوَالِ السُّيَّاحِ بِغَيْرِ حَقٍّ",
      "الصِّدْقُ مَطْلُوبٌ فَقَطْ مَعَ الأَقَارِبِ"
    ],
    correct: 0,
    explanation: "Sifat Ash-Shidq (kejujuran) dan Amanah adalah buah nyata dari hati yang dipenuhi rasa cinta kepada Allah SWT dan penghormatan terhadap hak-hak sesama."
  },
  {
    id: 17,
    pilarId: "tasamuh",
    pilarNama: "Moderasi Beragama & Toleransi",
    materiBab: "Bab 4: Dakwah yang Merangkul Bukan Memukul",
    stimulus: "قَالَ اللهُ تَعَالَى: ﴿ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ﴾، وَهَذَا جَوْهَرُ مَنْهَجِ الرَّحْمَةِ فِي الْقُرْآنِ.",
    question: "مَا إِعْرَابُ (الْحَسَنَةِ) فِي الآيَةِ الْكَرِيمَةِ، وَمَا دَلَالَتُهَا عَلَى أُسْلُوبِ الدَّعْوَةِ الْجَاذِبَةِ؟",
    options: [
      "نَعْتٌ مَجْرُورٌ، وَتَدُلُّ عَلَى أَنَّ الدَّعْوَةَ الإِسْلَامِيَّةَ تَقُومُ عَلَى اللِّينِ وَالْمَحَبَّةِ لَا عَلَى التَّنْفِيرِ",
      "مَفْعُولٌ بِهِ مَنْصُوبٌ",
      "حَالٌ مَنْصُوبَةٌ",
      "فَاعِلٌ مُؤَخَّرٌ"
    ],
    correct: 0,
    explanation: "Kata 'الْحَسَنَةِ' adalah Na'at Majrur. Kurikulum Cinta Kemenag menegaskan bahwa dakwah Islam yang sejati adalah merangkul, menyapa dengan kebaikan dan hikmah, bukan memusuhi atau menghakimi."
  },
  {
    id: 18,
    pilarId: "tasamuh",
    pilarNama: "Moderasi Beragama & Toleransi",
    materiBab: "Bab 4: Kerukunan Rumah Ibadah",
    stimulus: "شَاهَدْنَا فِي شَارِعِ التَّسَامُحِ مَسْجِدًا كَبِيرًا وَكَنِيسَةً قَدِيمَةً مُتَجَاوِرَيْنِ فِي وِئَامٍ وَتَعَايُشٍ حَضَارِيٍّ.",
    question: "مَا مَعْنَى كَلِمَةِ (الوِئَام) فِي هَذَا السِّيَاقِ، وَمَا دَوْرُهُ فِي حِمَايَةِ السِّلْمِ الأَهْلِيِّ؟",
    options: [
      "الْوِفَاقُ وَالْمَحَبَّةُ الْمُتَبَادَلَةُ الَّتِي تَمْنَعُ النِّزَاعَاتِ الطَّائِفِيَّةَ",
      "الْعَدَاوَةُ وَالشِّقَاقُ",
      "التَّنَافُسُ غَيْرُ الشَّرِيفِ",
      "التَّشَابُهُ فِي جَمِيعِ الشَّعَائِرِ"
    ],
    correct: 0,
    explanation: "Kata 'الوِئَام' bermakna keharmonisan, keselarasan, dan kerukunan bersama yang menjadi fondasi kokoh persaudaraan sebangsa dan setanah air."
  },
  {
    id: 19,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    materiBab: "Bab 3: Kesetaraan Manusia dalam Haji",
    stimulus: "فِي مَنَاسِكِ الْحَجِّ، يَلْبَسُ جَمِيعُ الْحُجَّاجِ ثَوْبَ الإِحْرَامِ الأَبْيَضَ، فَيَتَلَاشَى الْفَرْقُ بَيْنَ الْغَنِيِّ وَالْفَقِيرِ وَالْأَمِيرِ وَالْغَفِيرِ.",
    question: "فِي فِعْلِ (يَلْبَسُ)، مَا الرِّسَالَةُ الإِنْسَانِيَّةُ الْعُظْمَى لِلإِحْرَامِ حَسَبَ تَرْبِيَةِ الْمَحَبَّةِ؟",
    options: [
      "تَأْكِيدُ الْمُسَاوَاةِ التَّامَّةِ وَالأُخُوَّةِ الإِنْسَانِيَّةِ الشَّامِلَةِ أَمَامَ اللهِ تَعَالَى",
      "إِظْهَارُ التَّمَايُزِ بَيْنَ الطَّبَقَاتِ الاجْتِمَاعِيَّةِ",
      "تَفْضِيلُ أَهْلِ الأَمْوَالِ عَلَى غَيْرِهِمْ",
      "لَا تُوجَدُ حِكْمَةٌ فِي لِبَاسِ الإِحْرَامِ"
    ],
    correct: 0,
    explanation: "Pakaian ihram melambangkan pelepasan segala atribut duniawi dan kesombongan, menegaskan bahwa derajat seluruh manusia adalah sama di hadapan Sang Pencipta kecuali atas dasar ketakwaan dan cinta."
  },
  {
    id: 20,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    materiBab: "Bab 1-4: Visi Rahmatan Lil 'Alamin",
    stimulus: "بَعَثَ اللهُ تَعَالَى نَبِيَّهُ مُحَمَّدًا ﷺ وَقَالَ فِي حَقِّهِ: ﴿وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ﴾.",
    question: "كَيْفَ يُتَرْجِمُ طَالِبُ الْمَدْرَسَةِ كَوْنَ الإِسْلَامِ (رَحْمَةً لِلْعَالَمِينَ) فِي سُلُوكِهِ الْيَوْمِيِّ؟",
    options: [
      "بِأَنْ يَكُونَ مَصْدَرَ خَيْرٍ وَأَمَانٍ لِلنَّاسِ جَمِيعًا وَلِلْبِيئَةِ وَالْحَيَوَانِ بِقَلْبٍ رَحِيمٍ",
      "بِالتَّشَدُّدِ وَإِسَاءَةِ الظَّنِّ بِالآخَرِينَ",
      "بِإِهْمَالِ الْمُجْتَمَعِ وَعَدَمِ مُسَاعَدَةِ الْمُحْتَاجِينَ",
      "بِالتَّعَامُلِ الْحَسَنِ مَعَ مَنْ يُوَافِقُهُ فِي كُلِّ رَأْيٍ فَقَطْ"
    ],
    correct: 0,
    explanation: "Prinsip 'Rahmatan lil 'Alamin' adalah payung agung Kurikulum Cinta Kemenag RI: seorang pelajar madrasah harus menjadi duta kedamaian, penebar manfaat, dan perawat alam semesta."
  }
];

// 20 Asesmen Normatif (Penilaian Sikap, Adab, Karakter & Situational Judgment Berbasis Kurikulum Cinta)
const asesmenNormatif = [
  {
    id: 1,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "اخْتَلَفْتَ مَعَ زَمِيلِكَ فِي الْفَصْلِ حَوْلَ إِعْرَابِ جُمْلَةٍ فِي دَرْسِ الْقَوَاعِدِ، وَبَدَأَ زَمِيلُكَ يَشْعُرُ بِالْحَرَجِ.",
    question: "مَا هُوَ التَّصَرُّفُ الأَخْلَاقِيُّ وَالتَّعْبِيرُ الْعَرَبِيُّ الأَنْسَبُ الَّذِي يُجَسِّدُ أَدَبَ الْمَحَبَّةِ وَالتَّوَاضُعِ؟",
    options: [
      "أَبْتَسِمُ لَهُ وَأَقُولُ بِرِفْقٍ: (كِلَانَا يَتَعَلَّمُ يَا أَخِي، دَعْنَا نَسْتَشِيرُ أُسْتَاذَنَا لِنَفْهَمَ الصَّوَابَ مَعًا)",
      "أَرْفَعُ صَوْتِي أَمَامَ الطُّلَّابِ قَائِلاً: (أَنَا دَائِمًا عَلَى حَقٍّ وَأَنْتَ لَا تَفْهَمُ النَّحْوَ)",
      "أَسْخَرُ مِنْ إِجَابَتِهِ فِي مَجْمُوعَةِ الْوَاتْسَابِ الْمَدْرَسِيَّةِ",
      "أُقَاطِعُهُ وَأَرْفُضُ التَّحَدُّثَ مَعَهُ طَوَالَ الْيَوْمِ"
    ],
    correct: 0,
    explanation: "Adab Islami menuntut kerendahan hati (tawadhu') dan menjaga perasaan teman. Berkata lembut dan mengajak mencari kebenaran bersama adalah wujud nyata adab penuntut ilmu yang berkarakter."
  },
  {
    id: 2,
    pilarId: "tasamuh",
    pilarNama: "Moderasi Beragama & Toleransi",
    situasi: "جَارُكَ غَيْرُ الْمُسْلِمِ يُشَارِكُ فِي حَفْلِ يَوْمِ الاسْتِقْلَالِ الإِنْدُونِيسِيِّ فِي الْحَيِّ، وَيَحْتَاجُ إِلَى مُسَاعَدَةٍ فِي تَرْتِيبِ الْكَانُونِ وَتَزْيِينِ الشَّارِعِ.",
    question: "مَا هُوَ الْمَوْقِفُ النَّابِعُ مِنْ قِيَمِ الْمُوَاطَنَةِ الصَّالِحَةِ فِي مَنْهَجِ مَحَبَّةِ الْوَزَارَةِ؟",
    options: [
      "أُبَادِرُ إِلَى مُعَاوَنَتِهِ بِحُبٍّ وَنَشَاطٍ، فَالْمُوَاطَنَةُ تَجْمَعُنَا فِي خِدْمَةِ الْوَطَنِ وَحُسْنِ الْجِوَارِ",
      "أَمْتَنِعُ عَنْ مُسَاعَدَتِهِ لِأَنَّهُ لَا يَنْتَمِي إِلَى دِينِي",
      "أَطْلُبُ مِنْهُ أَنْ يَدْفَعَ لِي أَجْرًا قَبْلَ أَنْ أُسَاعِدَهُ",
      "أَتَجَاهَلُهُ وَأَنْظُرُ إِلَيْهِ بِاسْتِعْلَاءٍ"
    ],
    correct: 0,
    explanation: "Kerja bakti kemasyarakatan dan tolong-menolong antarwarga adalah kewajiban sosial bersama yang memperkokoh persaudaraan sebangsa (Ukhuwwah Wathaniyah) tanpa membeda-bedakan keyakinan."
  },
  {
    id: 3,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    situasi: "أُصِيبَ زَمِيلُكَ فِي الْفَصْلِ بِصُدَاعٍ شَدِيدٍ وَحُمَّى أَثْنَاءَ حِصَّةِ اللُّغَةِ الْعَرَبِيَّةِ، وَكَانَ عَاجِزًا عَنِ الْكِتَابَةِ.",
    question: "كَيْفَ تَسْتَجِيبُ لِهَذَا الْمَوْقِفِ إِذَا كُنْتَ مُتَمَسِّكًا بِقِيمَةِ الرَّحْمَةِ النَّبَوِيَّةِ؟",
    options: [
      "أَسْتَأْذِنُ الْمُعَلِّمَ بِلُطْفٍ لِمُرَافَقَتِهِ إِلَى الْعِيَادَةِ الْمَدْرَسِيَّةِ، وَأَدْعُو لَهُ: (شَفَاكَ اللهُ وَعَافَاكَ)",
      "أَتْرُكُهُ وَأُوَاصِلُ مُتَابَعَةَ الدَّرْسِ لِأَنَّ صِحَّتَهُ لَيْسَتْ مِنْ مَسْؤُولِيَّتِي",
      "أَشْتَكِي مِنْهُ إِلَى الْمُعَلِّمِ لِأَنَّهُ يُزْعِجُ هُدُوءَ الْفَصْلِ",
      "أَقْتَرِحُ عَلَيْهِ أَنْ يَنَامَ عَلَى الطَّاوِلَةِ دُونَ إِخْبَارِ أَحَدٍ"
    ],
    correct: 0,
    explanation: "Membantu sahabat yang sakit dan mengantarkannya ke klinik sekolah (UKS) adalah bentuk kasih sayang praktis yang sangat dianjurkan dalam ajaran agama Islam."
  },
  {
    id: 4,
    pilarId: "biah",
    pilarNama: "Cinta Lingkungan & Menjaga Tubuh",
    situasi: "رَأَيْتَ بَعْضَ الطُّلَّابِ يَتْرُكُونَ عُلَبَ الْمَاءِ وَالأَكْيَاسَ الْبِلَاسْتِيكِيَّةَ عَلَى كَرَاسِي الْمُصَلَّى بَعْدَ الصَّلَاةِ.",
    question: "مَا هُوَ السُّلُوكُ الْمِعْيَارِيُّ الَّذِي يَنُمُّ عَنْ حُبِّ بَيْتِ اللهِ وَنَظَافَةِ الْبِيئَةِ؟",
    options: [
      "أَقُومُ بِجَمْعِهَا وَوَضْعِهَا فِي سَلَّةِ الْمُهْمَلَاتِ احْتِسَابًا لِلْأَجْرِ، ثُمَّ أُذَكِّرُ زُمَلَائِي بِرِفْقٍ",
      "أَتْرُكُهَا فِي مَكَانِهَا لِأَنَّ مَسْؤُولِيَّةَ النَّظَافَةِ تَقَعُ عَلَى الْخَادِمِ فَقَطْ",
      "أَصْرُخُ فِي وُجُوهِهِمْ بِغَضَبٍ وَأُهِينُهُمْ أَمَامَ الْجَمِيعِ",
      "أُلْقِي مَزِيدًا مِنَ الْأَوْرَاقِ لِأَنَّ الْمَكَانَ غَيْرُ نَظِيفٍ أَصْلاً"
    ],
    correct: 0,
    explanation: "Menjaga kesucian dan kebersihan tempat ibadah adalah cerminan adab dan cinta kepada rumah Allah. Menasehati dengan santun disertai keteladanan tindakan langsung adalah jalan terbaik."
  },
  {
    id: 5,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "قَرَأْتَ فِي شَبَكَاتِ التَّوَاصُلِ مَنْشُورًا يَحُثُّ عَلَى الْكَرَاهِيَةِ بَيْنَ أَتْبَاعِ الْمَذَاهِبِ أَوِ الأَدْيَانِ فِي إِنْدُونِيسِيَا.",
    question: "مَا هُوَ الْمَوْقِفُ الشَّرْعِيُّ وَالْأَخْلَاقِيُّ الصَّارِمُ حَسَبَ تَوْجِيهَاتِ وَزَارَةِ الشُّؤُونِ الدِّينِيَّةِ؟",
    options: [
      "أَمْتَنِعُ تَمَامًا عَنْ نَشْرِهِ وَأُبَلِّغُ عَنْهُ، وَأَسْعَى لِنَشْرِ رَسَائِلِ الْمَحَبَّةِ وَالتَّآلُفِ (قَوْلًا سَدِيدًا)",
      "أُعِيدُ إِرْسَالَهُ إِلَى جَمِيعِ الْمَجْمُوعَاتِ لِإِشْعَالِ النِّقَاشِ وَالْجِدَالِ",
      "أُشَارِكُ فِي التَّعْلِيقَاتِ بِكَلِمَاتٍ بَذِيئَةٍ وَشَتَائِمَ عَنِيفَةٍ",
      "أُصَدِّقُ كُلَّ مَا كُتِبَ دُونَ تَثَبُّتٍ أَوْ تَبَيُّنٍ"
    ],
    correct: 0,
    explanation: "Kurikulum Cinta membimbing siswa menjadi agen penyaring informasi (tabayyun), menolak narasi provokasi kebencian, dan senantiasa menyebarkan konten perdamaian dan persatuan."
  },
  {
    id: 6,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "أَرَادَ أَحَدُ الطُّلَّابِ أَنْ يَسْتَفْسِرَ مِنَ الْمُعَلِّمِ عَنْ نُقْطَةٍ غَامِضَةٍ أَثْنَاءَ شَرْحِ دَرْسِ النَّحْوِ.",
    question: "مَا هُوَ الأُسْلُوبُ الْأَمْثَلُ لِلتَّوَاصُلِ الْمُحْتَرَمِ بِاللُّغَةِ الْعَرَبِيَّةِ؟",
    options: [
      "يَرْفَعُ يَدَهُ بِهُدُوءٍ وَيَقُولُ: (عَفْوًا يَا أُسْتَاذُ، لَوْ سَمَحْتَ، هَلْ يُمْكِنُ إِعَادَةُ هَذِهِ الْقَاعِدَةِ بِإِيجَازٍ؟)",
      "يَصِيحُ فَجْأَةً دُونَ اسْتِئْذَانٍ: (أَنَا لَمْ أَفْهَمْ شَيْئًا مِنْ كَلَامِكَ)",
      "يَضْحَكُ مَعَ زَمِيلِهِ سَاخِرًا مِنَ الْمَادَّةِ",
      "يَسْكُتُ وَيَخْرُجُ مِنَ الْفَصْلِ دُونَ عِلْمِ الْمُعَلِّمِ"
    ],
    correct: 0,
    explanation: "Menghormati guru dengan ungkapan sopan seperti (عَفْوًا، لَوْ سَمَحْتَ / مِنْ فَضْلِكَ) adalah adab utama murid kepada pengajar ilmu yang sangat ditekankan dalam tradisi Islam."
  },
  {
    id: 7,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    situasi: "عَرَفْتَ أَنَّ زَمِيلاً لَكَ فِي الْمَدْرَسَةِ لَا يَمْلِكُ كِتَابَ اللُّغَةِ الْعَرَبِيَّةِ لِظُرُوفِ عَائِلَتِهِ الْمَادِّيَّةِ الصَّعْبَةِ.",
    question: "كَيْفَ تُتَرْجِمُ رُوحَ التَّكَافُلِ الاجْتِمَاعِيِّ بَيْنَ طُلَّابِ الْمَدْرَسَةِ؟",
    options: [
      "أُشَارِكُهُ كِتَابِي بِطِيبِ خَاطِرٍ، أَوْ أَتَعَاوَنُ مَعَ زُمَلَائِي لِتَوْفِيرِ نُسْخَةٍ لَهُ كَهَدِيَّةٍ كَرِيمَةٍ",
      "أُعَيِّرُهُ بِفَقْرِهِ أَمَامَ بَقِيَّةِ الطُّلَّابِ",
      "أَرْفُضُ أَنْ يَجْلِسَ بِجَانِبِي لِأَنَّهُ لَا يَمْلِكُ كِتَابًا",
      "أَطْلُبُ مِنَ الْمُعَلِّمِ أَنْ يُعَاقِبَهُ عَلَى عَدَمِ إِحْضَارِ الْكِتَابِ"
    ],
    correct: 0,
    explanation: "Berbagi dan meringankan beban teman yang kurang mampu secara rahasia dan penuh kehormatan adalah bentuk solidaritas dan kasih sayang yang sesungguhnya."
  },
  {
    id: 8,
    pilarId: "tasamuh",
    pilarNama: "Moderasi Beragama & Toleransi",
    situasi: "الْتَقَيْتَ بِسَائِحٍ أَجْنَبِيٍّ فِي مَطَارِ سُوبَادِيُو فِي بُونْتِيَانَاك يَسْأَلُ عَنْ مَكَانِ حَافِلَةِ النَّقْلِ.",
    question: "كَيْفَ تُعَامِلُهُ لِتَعْكِسَ رُوحَ الضِّيَافَةِ الإِسْلَامِيَّةِ وَسَمَاحَةَ الشَّعْبِ الإِنْدُونِيسِيِّ؟",
    options: [
      "أُجِيبُهُ بِابْتِسَامَةٍ وَلُطْفٍ، وَأَدُلُّهُ عَلَى الطَّرِيقِ الصَّحِيحِ تَرْجَمَةً لِخُلُقِ إِكْرَامِ الضَّيْفِ",
      "أَتَجَاهَلُهُ لِأَنَّهُ غَرِيبٌ لَا يَتَكَلَّمُ لُغَتِي",
      "أُعْطِيهِ مَعْلُومَاتٍ خَاطِئَةً بِقَصْدِ الْمِزَاحِ",
      "أُظْهِرُ لَهُ التَّضَجُّرَ وَالْغَضَبَ"
    ],
    correct: 0,
    explanation: "Memuliakan tamu (Ikrāmud Dhaif) dan bersikap ramah kepada setiap manusia adalah cermin keluhuran akhlak muslim dan keramahan budaya Indonesia."
  },
  {
    id: 9,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "رَأَيْتَ زَمِيلَكَ يَرْتَكِبُ سُلُوكًا خَاطِئًا بِأَخْذِ قَلَمِ غَيْرِهِ دُونَ اسْتِئْذَانٍ.",
    question: "مَا هِيَ الطَّرِيقَةُ الْمُثْلَى لِنُصْحِهِ حَسَبَ قِيَمِ الرَّفْقِ وَالسَّتْرِ؟",
    options: [
      "أَنْصَحُهُ عَلَى انْفِرَادٍ بِلُطْفٍ، وَأُذَكِّرُهُ بِأَهَمِّيَّةِ الأَمَانَةِ دُونَ فَضِيحَةٍ أَوْ تَشْهِيرٍ",
      "أَفْضَحُهُ أَمَامَ جَمِيعِ طُلَّابِ الْمَدْرَسَةِ لِيَكُونَ عِبْرَةً",
      "أَصْمُتُ عَنْ فِعْلِهِ تَمَامًا وَأَشْتَرِكُ مَعَهُ فِي الْخَطَأِ",
      "أَقُومُ بِشَتْمِهِ وَالاعْتِدَاءِ عَلَيْهِ جَسَدِيًّا"
    ],
    correct: 0,
    explanation: "Nasihat yang tulus dilakukan secara personal tanpa mempermalukan (menjaga aib). Kurikulum Cinta mengajarkan menasehati dengan kelembutan, bukan menghakimi."
  },
  {
    id: 10,
    pilarId: "wathan",
    pilarNama: "Cinta Tanah Air & Persatuan",
    situasi: "تُقَامُ مَرَاسِمُ يَوْمِ الاثْنَيْنِ لِرَفْعِ الْعَلَمِ الْوَطَنِيِّ (سَانْج سَاكَا مِيرَاه بُوتِيه) فِي فِنَاءِ الْمَدْرَسَةِ.",
    question: "كَيْفَ يَكُونُ مَوْقِفُكَ الْوَطَنِيُّ الْمُنْضَبِطُ الْمُعَبِّرُ عَنْ حُبِّ الْوَطَنِ؟",
    options: [
      "أَقِفُ بِخُشُوعٍ وَانْضِبَاطٍ وَاحْتِرَامٍ، مُسْتَحْضِرًا أَنَّ حِمَايَةَ أَمْنِ الْوَطَنِ وَحُبَّهُ مِنَ الإِيمَانِ",
      "أَتَحَدَّثُ مَعَ زُمَلَائِي وَأَلْعَبُ بِهَاتِفِي أَثْنَاءَ رَفْعِ الْعَلَمِ",
      "أَمْتَنِعُ عَنِ الْمُشَارَكَةِ بِحُجَّةِ عَدَمِ الْجَدْوَى",
      "أَضْحَكُ وَأَسْخَرُ مِنَ النَّشِيدِ الْوَطَنِيِّ"
    ],
    correct: 0,
    explanation: "Mengikuti upacara bendera dengan khidmat adalah wujud penghormatan atas perjuangan para pahlawan dan perwujudan cinta tanah air yang kokoh."
  },
  {
    id: 11,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "حَصَلْتَ عَلَى أَعْلَى دَرَجَةٍ فِي امْتِحَانِ اللُّغَةِ الْعَرَبِيَّةِ بَيْنَ جَمِيعِ فُصُولِ الصَّفِّ الْحَادِي عَشَرَ.",
    question: "كَيْفَ تَتَصَرَّفُ بِتَوَاضُعٍ وَشُكْرٍ لِلَّهِ دُونَ غُرُورٍ أَوْ اسْتِكْبَارٍ؟",
    options: [
      "أَحْمَدُ اللهَ قَائِلاً: (هَذَا مِنْ فَضْلِ رَبِّي)، وَأَعْرِضُ مُسَاعَدَتِي عَلَى زُمَلَائِي فِي الْمُذَاكَرَةِ",
      "أَتَفَاخَرُ أَمَامَ الْفَصْلِ وَأَسْتَهْزِئُ بِمَنْ حَصَلَ عَلَى دَرَجَةٍ ضَعِيفَةٍ",
      "أَدَّعِي أَنَّ النَّجَاحَ جَاءَ بِعَبْقَرِيَّتِي الْخَاصَّةِ دُونَ حَاجَةٍ لِتَوْفِيقِ اللهِ أَوْ جُهْدِ الأُسْتَاذِ",
      "أَرْفُضُ مُسَاعَدَةَ أَيِّ طَالِبٍ كَيْ لَا يَتَفَوَّقَ عَلَيَّ"
    ],
    correct: 0,
    explanation: "Tawadhu' (rendah hati) saat meraih prestasi adalah karakter insan beriman. Ilmu yang berkah adalah ilmu yang diamalkan untuk menolong sesama."
  },
  {
    id: 12,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "أَثْنَاءَ أَدَاءِ الامْتِحَانِ، سَقَطَتْ وَرَقَةُ إِجَابَةِ زَمِيلِكَ الْمُتَفَوِّقِ بِجَانِبِكَ، وَالْمُعَلِّمُ غَيْرُ مُنْتَبِهٍ.",
    question: "مَا هُوَ السُّلُوكُ الْمَبْنِيُّ عَلَى الصِّدْقِ وَالأَمَانَةِ وَمُرَاقَبَةِ اللهِ (الإِحْسَانِ)؟",
    options: [
      "أَغُضُّ بَصَرِي تَمَامًا عَنِ الْوَرَقَةِ، وَأُعِيدُهَا لِزَمِيلِي بِهُدُوءٍ مُسْتَحْضِرًا أَنَّ اللهَ يَرَانِي",
      "أَسْتَغِلُّ الْفُرْصَةَ لِنَقْلِ الإِجَابَاتِ لِأَنَّ الْمُعَلِّمَ لَمْ يَرَ شَيْئًا",
      "أُخْفِي الْوَرَقَةَ كَيْ تَلْحَقَ بِهِ الْخَسَارَةُ",
      "أُوَزِّعُ الإِجَابَاتِ عَلَى بَقِيَّةِ الْفَصْلِ"
    ],
    correct: 0,
    explanation: "Kejujuran adalah pondasi harga diri seorang pembelajar sejati. Hadits Nabi: 'Barangsiapa yang menipu kami, maka ia bukan golongan kami' (Man ghasysyana falaisa minna)."
  },
  {
    id: 13,
    pilarId: "biah",
    pilarNama: "Cinta Lingkungan & Menjaga Tubuh",
    situasi: "قُمْتَ بِالْوُضُوءِ لِصَلَاةِ الظُّهْرِ فِي مَيَّضَةِ الْمَدْرَسَةِ، وَوَجَدْتَ صُنْبُورَ الْمَاءِ يَجْرِي بِقُوَّةٍ كَبِيرَةٍ.",
    question: "كَيْفَ تَسْتَجِيبُ لِوَصِيَّةِ النَّبِيِّ ﷺ فِي تَرْشِيدِ اسْتِهْلَاكِ الْمَاءِ؟",
    options: [
      "أُخَفِّفُ مِنْ جَرَيَانِ الْمَاءِ إِلَى الْقَدْرِ الْكَافِي، لِأَنَّ الإِسْرَافَ مَنْهِيٌّ عَنْهُ وَلَوْ كُنْتَ عَلَى نَهْرٍ جَارٍ",
      "أَتْرُكُ الْمَاءَ يَجْرِي بِقُوَّةٍ لِأَنَّ الْمَاءَ مَجَّانِيٌّ فِي الْمَدْرَسَةِ",
      "أَلْعَبُ بِالْمَاءِ مَعَ أَصْدِقَائِي فِي الْمَغْسَلَةِ",
      "أَتْرُكُ الصُّنْبُورَ مَفْتُوحًا بَعْدَ انْتِهَاءِ الْوُضُوءِ"
    ],
    correct: 0,
    explanation: "Menghemat air saat berwudhu adalah sunnah Nabi SAW dan bentuk kepedulian terhadap kelestarian sumber daya alam (Hifdzul Bi'ah)."
  },
  {
    id: 14,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    situasi: "شَاهَدْتَ قِطَّةً صَغِيرَةً جَائِعَةً تَمُوءُ بِلَهْفَةٍ قُرْبَ مَقْصَفِ الْمَدْرَسَةِ فِي يَوْمٍ شَدِيدِ الْحَرِّ.",
    question: "مَا هُوَ السُّلُوكُ الْمُسْتَمَدُّ مِنْ رَحْمَةِ الإِسْلَامِ بِالْكَائِنَاتِ الْحَيَّةِ؟",
    options: [
      "أُقَدِّمُ لَهَا جُرْعَةَ مَاءٍ أَوْ بَعْضَ الطَّعَامِ رِفْقًا بِهَا، فَـ(فِي كُلِّ كَبِدٍ رَطْبَةٍ أَجْرٌ)",
      "أَطْرُدُهَا بِعُنْفٍ وَأَرْمِيهَا بِالْحِجَارَةِ لِتَبْتَعِدَ",
      "أَتَجَاهَلُهَا تَمَامًا لِأَنَّهَا مُجَرَّدُ حَيَوَانٍ لَا شُعُورَ لَهُ",
      "أَحْرِمُهَا مِنَ الْمَاءِ كَي لَا تَقْتَرِبَ مِنَ المَقْصَفِ"
    ],
    correct: 0,
    explanation: "Kasih sayang dalam Islam tidak hanya ditujukan kepada manusia tetapi mencakup seluruh ciptaan Allah SWT, termasuk hewan dan tumbuhan."
  },
  {
    id: 15,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "جَاءَكَ زَمِيلُكَ مُعْتَذِرًا عَنْ كَلِمَةٍ جَارِحَةٍ بَدَرَتْ مِنْهُ بِدُونِ قَصْدٍ أَمْسِ.",
    question: "كَيْفَ تَسْتَقْبِلُ اعْتِذَارَهُ حَسَبَ خُلُقِ الْعَفْوِ وَالتَّصَافُحِ؟",
    options: [
      "أَقْبَلُ اعْتِذَارَهُ بِوَجْهٍ بَشُوشٍ وَأَقُولُ: (عَفَا اللهُ عَمَّا سَلَفَ، غَفَرَ اللهُ لَنَا وَلَكَ، نَحْنُ إِخْوَةٌ دَائِمًا)",
      "أَرْفُضُ مُسَامَحَتَهُ وَأُهَدِّدُهُ بِالانْتِقَامِ مِنْهُ",
      "أَطْلُبُ مِنْهُ أَنْ يُعْطِيَنِي مَالاً مُقَابِلَ الصَّفْحِ عَنْهُ",
      "أَقْبَلُهُ ظَاهِرًا وَلَكِنِّي أُضْمِرُ لَهُ الْكُرْهَ فِي قَلْبِي"
    ],
    correct: 0,
    explanation: "Memaafkan dengan lapang dada (al-'afwu) membersihkan hati dari dendam dan merajut kembali tali persaudaraan yang sempat retak."
  },
  {
    id: 16,
    pilarId: "rahmah",
    pilarNama: "Kasih Sayang & Kemanusiaan",
    situasi: "قَبْلَ مُغَادَرَةِ الْمَنْزِلِ صَبَاحًا إِلَى الْمَدْرَسَةِ، وَجَدْتَ وَالِدَتَكَ تُعِدُّ لَكَ طَعَامَ الإِفْطَارِ وَهِيَ تَعِبَةٌ.",
    question: "مَا هِيَ اللَّفْتَةُ الْعَاطِفِيَّةُ وَالْكَلِمَةُ الْعَرَبِيَّةُ الَّتِي تُفْرِحُ قَلْبَهَا؟",
    options: [
      "أُقَبِّلُ يَدَهَا شَاكِرًا وَأَقُولُ: (جَزَاكِ اللهُ خَيْرًا يَا أُمِّي الْحَبِيبَةَ، حَفِظَكِ اللهُ وَأَمَدَّكِ بِالصِّحَّةِ)",
      "آخُذُ الطَّعَامَ مُسْتَعْجِلاً دُونَ كَلِمَةِ شُكْرٍ أَوْ سَلَامٍ",
      "أَتَذَمَّرُ مِنْ نَوْعِ الطَّعَامِ وَأُخْبِرُهَا أَنَّهُ لَا يُعْجِبُنِي",
      "أَتْرُكُ الطَّعَامَ عَلَى الطَّاوِلَةِ وَأَغْلِقُ الْبَابَ بِشِدَّةٍ"
    ],
    correct: 0,
    explanation: "Mencium tangan orang tua dan mengucapkan doa penuh cinta adalah amalan mulia yang mengundang ridha Allah dan membuka pintu keberkahan belajar."
  },
  {
    id: 17,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "فِي مَجْمُوعَةِ الْوَاتْسَابِ الْخَاصَّةِ بِفَصْلِ اللُّغَةِ الْعَرَبِيَّةِ، وَقَعَ سُوءُ فَهْمٍ بَيْنَ طَالِبَيْنِ وَتَصَاعَدَتِ الْحِدَّةُ.",
    question: "كَيْفَ تَتَدَخَّلُ كَصَانِعِ سَلَامٍ حَسَبَ مَنْهَجِ الإِصْلَاحِ فِي الْقُرْآنِ؟",
    options: [
      "أَكْتُبُ بِكَلِمَاتٍ مُهَدِّئَةٍ مُذَكِّرًا بِقَوْلِهِ تَعَالَى: (إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ)",
      "أُشَجِّعُ الطَّرَفَيْنِ عَلَى مَزِيدٍ مِنَ الشِّجَارِ لِلتَّسْلِيَةِ",
      "أَنْضَمُّ إِلَى أَحَدِ الطَّرَفَيْنِ لِشَتْمِ الآخَرِ",
      "أَقُومُ بِمُشَارَكَةِ الْمُحَادَثَةِ خَارِجَ الْمَجْمُوعَةِ لِلسُّخْرِيَّةِ مِنْهُمَا"
    ],
    correct: 0,
    explanation: "Menjadi juru damai (Ishlah Dzâtil Bain) dan meredam amarah adalah misi kemanusiaan setiap insan yang menghidupi Kurikulum Cinta."
  },
  {
    id: 18,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "وَاعَدْتَ صَدِيقَكَ لِلْمُذَاكَرَةِ الْمُشْتَرَكَةِ لِمَادَّةِ الْقَوَاعِدِ فِي الْمَكْتَبَةِ السَّاعَةَ الثَّالِثَةَ عَصْرًا.",
    question: "مَا هُوَ السُّلُوكُ الْمِعْيَارِيُّ الَّذِي يَحْفَظُ قِيمَةَ الْوَقْتِ وَالْوَفَاءِ بِالْعُهُودِ؟",
    options: [
      "أَحْضُرُ قَبْلَ الْمَوْعِدِ بِدَقَائِقَ، لِأَنَّ (الْوَفَاءَ بِالْوَعْدِ) مَظْهَرٌ رَفِيعٌ لِاحْتِرَامِ الآخَرِينَ وَصِدْقِ الإِيمَانِ",
      "أَتَأَخَّرُ سَاعَةً كَامِلَةً دُونَ اعْتِذَارٍ أَوْ إِخْبَارٍ",
      "أَلْغِي الْمَوْعِدَ فِي آخِرِ لَحْظَةٍ دُونَ عُذْرٍ شَرْعِيٍّ مَقْبُولٍ",
      "لَا أَحْضُرُ أَبَدًا وَأُغْلِقُ هَاتِفِي كَيْ لَا يَصِلَ إِلَيَّ"
    ],
    correct: 0,
    explanation: "Menepati janji dan menghargai waktu orang lain adalah cermin akhlak terpuji yang membangun kepercayaan dan rasa hormat timbal balik."
  },
  {
    id: 19,
    pilarId: "adab",
    pilarNama: "Adab Berbicara & Kesantunan",
    situasi: "أَلْقَى زَمِيلُكَ خُطْبَةً عَرَبِيَّةً قَصِيرَةً فِي مُصَلَّى الْمَدْرَسَةِ، وَكَانَ مُتَرَدِّدًا وَخَائِفًا فِي بِدَايَتِهَا لَكِنَّهُ بَذَلَ جُهْدًا طَيِّبًا.",
    question: "كَيْفَ تُقَدِّمُ لَهُ الدَّعْمَ وَالتَّشْجِيعَ الإِيجَابِيَّ بَعْدَ انْتِهَائِهِ؟",
    options: [
      "أُصَافِحُهُ مُهَنِّئًا وَأَقُولُ: (مَا شَاءَ اللهُ، كَانَتْ مُشَارَكَةً شُجَاعَةً وَمُؤَثِّرَةً، أَتَوَقَّعُ لَكَ مُسْتَقْبَلاً بَاهِرًا يَا أَخِي!)",
      "أَعُدُّ لَهُ الأَخْطَاءَ اللُّغَوِيَّةَ بِاسْتِهْزَاءٍ أَمَامَ بَقِيَّةِ الطُّلَّابِ",
      "أَقُولُ لَهُ: (خُطْبَتُكَ كَانَتْ مُمِلَّةً جِدًّا وَلَا تَصْلُحُ لِلْإِلْقَاءِ)",
      "أَتَجَاهَلُهُ وَكَأَنَّ شَيْئًا لَمْ يَحْدُثْ"
    ],
    correct: 0,
    explanation: "Memberikan apresiasi dan membesarkan hati saudara yang sedang belajar adalah bentuk kecerdasan emosional dan kasih sayang yang mendalam."
  },
  {
    id: 20,
    pilarId: "wathan",
    pilarNama: "Cinta Tanah Air & Persatuan",
    situasi: "سُئِلْتَ فِي نَدْوَةٍ طُلَّابِيَّةٍ عَنْ كَيْفِيَّةِ الْمُوَافَقَةِ بَيْنَ كَوْنِكَ مُسْلِمًا مُلْتَزِمًا وَمُوَاطِنًا إِنْدُونِيسِيًّا مُخْلِصًا.",
    question: "مَا هِيَ الرُّؤْيَةُ الْوَاعِيَةُ لِمَنْهَجِ مَحَبَّةِ الْوَزَارَةِ فِي التَّنَاغُمِ بَيْنَ التَّدَيُّنِ وَالْوَطَنِيَّةِ؟",
    options: [
      "أُجِيبُ بِأَنَّ الدِّينَ وَالْوَطَنَ لَا يَتَعَارَضَانِ؛ فَكُلَّمَا ازْدَادَ الْمُسْلِمُ فَهْمًا لِدِينِهِ، ازْدَادَ حُبًّا لِوَطَنِهِ وَخِدْمَةً لِأَهْلِهِ",
      "أَدَّعِي أَنَّهُ لَا يُمْكِنُ الْجَمْعُ بَيْنَ الإِيمَانِ وَحُبِّ الْوَطَنِ",
      "أُفَضِّلُ التَّعَصُّبَ الطَّائِفِيَّ عَلَى مَصْلَحَةِ الْبِلَادِ الْعَامَّةِ",
      "أَقُولُ إِنَّ الْوَطَنِيَّةَ مُجَرَّدُ شِعَارٍ سِيَاسِيٍّ لَا قِيمَةَ لَهُ"
    ],
    correct: 0,
    explanation: "Kurikulum Cinta Kemenag menegaskan harmoni sejati antara Keagamaan dan Kebangsaan: Islam yang rahmatan lil 'alamin justru mengokohkan komitmen cinta tanah air (Hubbul Wathan minal Iman)."
  }
];

// Append or update in data.js
let appendCode = `
// ============================================================================
// MODUL ASESMEN BERBASIS KURIKULUM CINTA KEMENAG RI
// (Pendidikan Karakter & Mahabbah Kementerian Agama Republik Indonesia)
// Penyusun: Yosi, S. Ag, M. Pd. (MAN 1 Pontianak)
// ============================================================================

ARABIC_DATA.kurikulumCinta = ${JSON.stringify(kurikulumCintaMeta, null, 2)};
ARABIC_DATA.asesmenSumatif = ${JSON.stringify(asesmenSumatif, null, 2)};
ARABIC_DATA.asesmenNormatif = ${JSON.stringify(asesmenNormatif, null, 2)};
`;

// Remove existing Kurikulum Cinta if present to avoid duplication
if (dataContent.includes('ARABIC_DATA.kurikulumCinta =')) {
  const index = dataContent.indexOf('// ============================================================================\n// MODUL ASESMEN BERBASIS KURIKULUM CINTA KEMENAG RI');
  if (index !== -1) {
    dataContent = dataContent.substring(0, index);
  }
}

dataContent = dataContent.trim() + '\n\n' + appendCode.trim() + '\n';
fs.writeFileSync(dataPath, dataContent, 'utf8');

console.log('Successfully integrated Kurikulum Cinta Kemenag data:');
console.log('- 5 Pilar Kurikulum Cinta');
console.log('- 20 Soal Asesmen Sumatif (Kognitif HOTS & Nilai Cinta)');
console.log('- 20 Soal Asesmen Normatif (Sikap, Adab & Karakter Kemenag)');
