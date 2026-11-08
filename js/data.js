/**
 * Data Material Bahasa Arab Kelas 11 MA
 * Pemilik / Penyusun: Yosi, S. Ag, M. Pd. (MAN 1 Pontianak)
 */

const ARABIC_DATA = {
  identity: {
    name: "Yosi, S. Ag, M. Pd.",
    title: "Guru Bahasa Arab",
    school: "MAN 1 Pontianak",
    subject: "Bahasa Arab - Kelas XI MA",
    year: "2026",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  },

  topics: [
    { id: "topik1", title: "BAB 1: السَّفَرُ وَالسِّيَاحَةُ (Wisata & Bepergian)", icon: "compass" },
    { id: "topik2", title: "BAB 2: الصِّحَّةُ (Kesehatan)", icon: "activity" },
    { id: "topik3", title: "BAB 3: الحَجُّ وَالعُمْرَةُ (Haji & Umrah)", icon: "moon" },
    { id: "topik4", title: "BAB 4: الأَدْيَانُ فِي إِنْدُونِيسِيَا (Agama di Indonesia)", icon: "globe" }
  ],

  mufrodat: [
    // --- BAB 1: السَّفَرُ وَالسِّيَاحَةُ (Bepergian & Wisata) ---
    {
      id: 1,
      topicId: "topik1",
      arabic: "سِيَاحَةٌ",
      latin: "Siyaahatun",
      indonesian: "Wisata / Pariwisata",
      exampleArabic: "السِّيَاحَةُ نَشَاطٌ مُهِمٌّ فِي أَيَّامِ الْعُطْلَةِ.",
      exampleIndo: "Wisata adalah kegiatan penting di hari libur.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      topicId: "topik1",
      arabic: "غَارٌ",
      latin: "Ghaarun",
      indonesian: "Gua / Goa",
      exampleArabic: "ذَهَبْنَا إِلَى غَارِ فِيْنْدُوْل فِي يُوْكِيَاكِرْتَا.",
      exampleIndo: "Kami pergi ke Goa Pindul di Yogyakarta.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      topicId: "topik1",
      arabic: "نَهْرٌ",
      latin: "Nahrun",
      indonesian: "Sungai",
      exampleArabic: "يَجْرِي الْمَاءُ فِي النَّهْرِ بِنَظَافَةٍ.",
      exampleIndo: "Air mengalir bersih di sungai.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      topicId: "topik1",
      arabic: "تَزَحْلُفٌ",
      latin: "Tazahlufun",
      indonesian: "Susur Sungai / Arung Jeram (Tubing)",
      exampleArabic: "مَارَسْنَا التَّزَحْلُفَ فِي النَّهْرِ.",
      exampleIndo: "Kami melakukan susur sungai di gua.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 5,
      topicId: "topik1",
      arabic: "إِطَارَاتٌ",
      latin: "Ithaaraatun",
      indonesian: "Ban Pelampung / Ban",
      exampleArabic: "اسْتَخْدَمْنَا الإِطَارَاتِ لِلتَّزَحْلُفِ.",
      exampleIndo: "Kami menggunakan ban pelampung untuk susur sungai.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 6,
      topicId: "topik1",
      arabic: "عَوَّامَةٌ",
      latin: "'Awwaamatun",
      indonesian: "Jaket Pelampung / Pelampung",
      exampleArabic: "لَبِسَ السَّائِحُ الْعَوَّامَةَ لِلأَمَانِ.",
      exampleIndo: "Wisatawan mengenakan pelampung demi keselamatan.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 7,
      topicId: "topik1",
      arabic: "مُرْشِدُ السِّيَاحَةِ",
      latin: "Murshid us-Siyaahati",
      indonesian: "Pemandu Wisata (Tour Guide)",
      exampleArabic: "شَرَحَ مُرْشِدُ السِّيَاحَةِ تَارِيخَ الْمَكَانِ.",
      exampleIndo: "Pemandu wisata menjelaskan sejarah tempat itu.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 8,
      topicId: "topik1",
      arabic: "تَذْكِرَةٌ",
      latin: "Tadhkiratun",
      indonesian: "Tiket",
      exampleArabic: "حَجَزْتُ تَذْكِرَةَ الدُّخُولِ لِلْمَتْحَفِ.",
      exampleIndo: "Saya memesan tiket masuk ke museum.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 9,
      topicId: "topik1",
      arabic: "شُبَّاكُ التَّذَاكِرِ",
      latin: "Shubbaak ut-Tadhaakiri",
      indonesian: "Loket Tiket",
      exampleArabic: "اِشْتَرَيْنَا التَّذَاكِرَ مِنْ شُبَّاكِ التَّذَاكِرِ.",
      exampleIndo: "Kami membeli tiket dari loket tiket.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 10,
      topicId: "topik1",
      arabic: "سُيَّاحٌ",
      latin: "Suyyaahun",
      indonesian: "Wisatawan / Turis",
      exampleArabic: "وَصَلَ السُّيَّاحُ إِلَى الْمَطَارِ صَبَاحًا.",
      exampleIndo: "Para wisatawan tiba di bandara pada pagi hari.",
      type: "Nomina (Isim Jamak)",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 11,
      topicId: "topik1",
      arabic: "لُهْنَةٌ / هَدِيَّةٌ",
      latin: "Luhnatun / Hadiyyatun",
      indonesian: "Oleh-oleh / Souvenir",
      exampleArabic: "اِشْتَرَيْتُ لُهْنَةً جَمِيلَةً لِلأَصْدِقَاءِ.",
      exampleIndo: "Saya membeli oleh-oleh indah untuk teman-teman.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 12,
      topicId: "topik1",
      arabic: "بِطَاقَةُ الْمُرُورِ الإِلِكْتُرُونِيَّةُ",
      latin: "Bithaaqat ul-Muruur il-Elektroniyyah",
      indonesian: "Kartu Elektronik (E-Money / Pass)",
      exampleArabic: "اسْتَخْدَمْتُ بِطَاقَةَ الْمُرُورِ لِلدُّخُولِ.",
      exampleIndo: "Saya menggunakan kartu elektronik untuk masuk.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 13,
      topicId: "topik1",
      arabic: "ضِفَّةُ النَّهْرِ",
      latin: "Dhiffat un-Nahri",
      indonesian: "Tepi Sungai / Bantaran Sungai",
      exampleArabic: "جَلَسْنَا عَلَى ضِفَّةِ النَّهْرِ نَسْتَمْتِعُ بِالْمَنَاظِرِ.",
      exampleIndo: "Kami duduk di tepi sungai menikmati pemandangan.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 14,
      topicId: "topik1",
      arabic: "رَكِبَ - يَرْكَبُ",
      latin: "Rakiba - Yarkabu",
      indonesian: "Naik / Mengendarai",
      exampleArabic: "رَكِبْنَا السَّيَّارَةَ إِلَى الْجَبَلِ.",
      exampleIndo: "Kami naik mobil ke gunung.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 15,
      topicId: "topik1",
      arabic: "ذَهَبَ - يَذْهَبُ",
      latin: "Dhahaba - Yadhhabu",
      indonesian: "Pergi",
      exampleArabic: "ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ صَبَاحًا.",
      exampleIndo: "Siswa itu pergi ke sekolah di pagi hari.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1476514525535-ce74f45814d0?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 16,
      topicId: "topik1",
      arabic: "إِسْتَعَدَّ - يَسْتَعِدُّ",
      latin: "Ista'adda - Yasta'iddu",
      indonesian: "Bersiap-siap / Persiapan",
      exampleArabic: "إِسْتَعَدَّ الْمُسَافِرُونَ لِلسَّفَرِ.",
      exampleIndo: "Para musafir bersiap-siap untuk bepergian.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 17,
      topicId: "topik1",
      arabic: "وَصَلَتْ - تَصِلُ",
      latin: "Wasalat - Tasilu",
      indonesian: "Tiba / Sampai",
      exampleArabic: "وَصَلَتْ حَفْصَةُ إِلَى الْفُنْدُقِ سَالِمَةً.",
      exampleIndo: "Hafshah telah tiba di hotel dengan selamat.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 18,
      topicId: "topik1",
      arabic: "مَكَثَ - يَمْكُثُ",
      latin: "Makatha - Yamkuthu",
      indonesian: "Tinggal / Menetap",
      exampleArabic: "مَكَّثْنَا فِي سُوكُوهَارْجُو ثَلاَثَةَ أَيَّامٍ.",
      exampleIndo: "Kami tinggal di Sukoharjo selama tiga hari.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 19,
      topicId: "topik1",
      arabic: "مَشَى - يَمْشِي",
      latin: "Mashaa - Yamshii",
      indonesian: "Berjalan Kaki",
      exampleArabic: "مَشَى السُّيَّاحُ فِي الشَّارِعِ الْقَدِيمِ.",
      exampleIndo: "Para turis berjalan kaki di jalan tua.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 20,
      topicId: "topik1",
      arabic: "اِسْتَخْدَمَ (عَوَّامَةً)",
      latin: "Istakhdama ('Awwaamatan)",
      indonesian: "Menggunakan / Memakai (Pelampung)",
      exampleArabic: "اِسْتَخْدَمَ السَّائِحُ الْعَوَّامَةَ فِي النَّهْرِ.",
      exampleIndo: "Wisatawan itu menggunakan pelampung di sungai.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 21,
      topicId: "topik1",
      arabic: "شَاهَدَ الْمَنَاظِرَ الْجَمِيلَةَ",
      latin: "Shaahada al-Manaadhira al-Jamiilah",
      indonesian: "Melihat Pemandangan Indah",
      exampleArabic: "شَاهَدْنَا الْمَنَاظِرَ الْجَمِيلَةَ مِنَ الْجَبَلِ.",
      exampleIndo: "Kami menyaksikan pemandangan indah dari gunung.",
      type: "Frasa Verba",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 22,
      topicId: "topik1",
      arabic: "شَاطِئٌ",
      latin: "Shaati'un",
      indonesian: "Pantai",
      exampleArabic: "ذَهَبْنَا إِلَى شَاطِئِ الْبَحْرِ فِي الْعُطْلَةِ.",
      exampleIndo: "Kami pergi ke pantai laut pada hari libur.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 23,
      topicId: "topik1",
      arabic: "فِرَاشٌ",
      latin: "Firaashun",
      indonesian: "Matras / Alas / Tikar",
      exampleArabic: "بَسَطْنَا الْفِرَاشَ عَلَى الشَّاطِئِ.",
      exampleIndo: "Kami membentangkan alas di pantai.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 24,
      topicId: "topik1",
      arabic: "رِمَالٌ بَيْضَاءُ",
      latin: "Rimaalun Baidhaa'u",
      indonesian: "Pasir Putih",
      exampleArabic: "يَمْشِي الأَطْفَالُ عَلَى الرِّمَالِ الْبَيْضَاءِ.",
      exampleIndo: "Anak-anak berjalan di atas pasir putih.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 25,
      topicId: "topik1",
      arabic: "بَسَطَ - يَبْسُطُ",
      latin: "Basatha - Yabsuthu",
      indonesian: "Membentangkan (Alas / Tikar)",
      exampleArabic: "بَسَطَ عَلِيٌّ الْفِرَاشَ عَلَى الرَّمْلِ.",
      exampleIndo: "Ali membentangkan tikar di atas pasir.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 26,
      topicId: "topik1",
      arabic: "تَشَمَّسَ - يَتَشَمَّسُ",
      latin: "Tashammasa - Yatashammasu",
      indonesian: "Berjemur (di bawah sinar matahari)",
      exampleArabic: "يَتَشَمَّسُ السَّائِحُ عَلَى الشَّاطِئِ.",
      exampleIndo: "Turis itu berjemur di pantai.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 27,
      topicId: "topik1",
      arabic: "لَعِبَ - يَلْعَبُ",
      latin: "La'iba - Yal'abu",
      indonesian: "Bermain",
      exampleArabic: "لَعِبَ الأَطْفَالُ بِالرِّمَالِ البَيْضَاءِ.",
      exampleIndo: "Anak-anak bermain pasir putih.",
      type: "Verba (Fi'il)",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=400&auto=format&fit=crop"
    },

    // --- BAB 2: الصِّحَّةُ (Kesehatan & Olahraga) ---
    {
      id: 28,
      topicId: "topik2",
      arabic: "دَرَّاجَةٌ",
      latin: "Darraajatun",
      indonesian: "Sepeda",
      exampleArabic: "يَرْكَبُ الطَّالِبُ الدَّرَّاجَةَ إِلَى الْمَدْرَسَةِ.",
      exampleIndo: "Siswa itu naik sepeda ke sekolah.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 29,
      topicId: "topik2",
      arabic: "رِيَاضَةٌ",
      latin: "Riyaadhatun",
      indonesian: "Olahraga",
      exampleArabic: "الرِّيَاضَةُ تُقَوِّي الْجِسْمَ وَتُنَمِّي الْعَقْلَ.",
      exampleIndo: "Olahraga menguatkan tubuh dan mengasah akal.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 30,
      topicId: "topik2",
      arabic: "كُرَةُ الْقَدَمِ",
      latin: "Kuratu al-Qadami",
      indonesian: "Sepak Bola",
      exampleArabic: "يَلْعَبُ الأَوْلاَدُ كُرَةَ الْقَدَمِ فِي الْمَلْعَبِ.",
      exampleIndo: "Anak-anak bermain sepak bola di lapangan.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 31,
      topicId: "topik2",
      arabic: "سِبَاحَةٌ",
      latin: "Sibaahatun",
      indonesian: "Berenang / Renang",
      exampleArabic: "السِّبَاحَةُ رِيَاضَةٌ مُفِيدَةٌ لِلصِّحَّةِ.",
      exampleIndo: "Berenang adalah olahraga yang bermanfaat untuk kesehatan.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 32,
      topicId: "topik2",
      arabic: "مَلْعَبُ الْقَرْيَةِ",
      latin: "Mal'abu al-Qaryati",
      indonesian: "Lapangan Desa",
      exampleArabic: "نَلْعَبُ كُرَةَ الْقَدَمِ فِي مَلْعَبِ الْقَرْيَةِ.",
      exampleIndo: "Kami bermain sepak bola di lapangan desa.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 33,
      topicId: "topik2",
      arabic: "جَرْيٌ",
      latin: "Jaryun",
      indonesian: "Lari / Lari Pagi",
      exampleArabic: "الجَرْيُ فِي الصَّبَاحِ يُنَشِّطُ الْجِسْمَ.",
      exampleIndo: "Lari di pagi hari menyegarkan tubuh.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 34,
      topicId: "topik2",
      arabic: "حَكِيمٌ ج حُكَمَاءُ",
      latin: "Hakiimun j Hukamaa'u",
      indonesian: "Orang Bijak / Dokter",
      exampleArabic: "الْحَكِيمُ يُقَدِّمُ النَّصِيحَةَ الطَّيِّبَةَ.",
      exampleIndo: "Orang bijak menyampaikan nasihat yang baik.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 35,
      topicId: "topik2",
      arabic: "صَحِيحٌ ج أَصِحَّاءُ",
      latin: "Sahiihun j Asihhaa'u",
      indonesian: "Orang Sehat",
      exampleArabic: "الْعَقْلُ السَّلِيمُ فِي الْجِسْمِ الصَّحِيحِ.",
      exampleIndo: "Akal yang sehat terdapat pada tubuh yang sehat.",
      type: "Adjektiva (Sifat)",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 36,
      topicId: "topik2",
      arabic: "مَرِيضٌ ج مَرْضَى",
      latin: "Mariidhun j Mardhaa",
      indonesian: "Pasien / Orang Sakit",
      exampleArabic: "يَزُورُ الطَّبِيبُ الْمَرِيضَ فِي الْمُسْتَشْفَى.",
      exampleIndo: "Dokter mengunjungi pasien di rumah sakit.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 37,
      topicId: "topik2",
      arabic: "صُدَاعٌ",
      latin: "Shudaa'un",
      indonesian: "Sakit Kepala / Pusing",
      exampleArabic: "أَصَابَنِي الصُّدَاعُ فِي هَذَا الصَّبَاحِ.",
      exampleIndo: "Saya mengalami sakit kepala pagi ini.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 38,
      topicId: "topik2",
      arabic: "أَلَمٌ فِي الصَّدْرِ",
      latin: "Alamun fii as-Sadri",
      indonesian: "Nyeri / Sakit Dada",
      exampleArabic: "يَشْعُرُ الْمَرِيضُ بِأَلَمٍ فِي الصَّدْرِ.",
      exampleIndo: "Pasien merasakan nyeri pada dadanya.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 39,
      topicId: "topik2",
      arabic: "عَدَمُ وُضُوحِ الرُّؤْيَةِ",
      latin: "'Adamu Wudhuuh ir-Ru'yati",
      indonesian: "Pandangan Kabur / Tidak Jelas",
      exampleArabic: "يَعَانِي الْمَرِيضُ مِنْ عَدَمِ وُضُوحِ الرُّؤْيَةِ.",
      exampleIndo: "Pasien menderita pandangan yang kabur.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 40,
      topicId: "topik2",
      arabic: "طَعَامٌ مَالِحٌ",
      latin: "Tha'aamun Maalihun",
      indonesian: "Makanan Asin",
      exampleArabic: "تَجَنَّبْ تَنَاوُلَ الطَّعَامِ الْمَالِحِ لِصِحَّتِكَ.",
      exampleIndo: "Hindari mengonsumsi makanan asin demi kesehatanmu.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1518013038568-ce1149756050?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 41,
      topicId: "topik2",
      arabic: "طَعَامٌ حُلْوٌ",
      latin: "Tha'aamun Hulwun",
      indonesian: "Makanan Manis",
      exampleArabic: "لاَ تُكْثِرْ مِنْ أَكْلِ الطَّعَامِ الْحُلْوِ.",
      exampleIndo: "Jangan terlalu banyak makan makanan manis.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 42,
      topicId: "topik2",
      arabic: "طَعَامٌ مَقْلِيٌّ",
      latin: "Tha'aamun Maqliyyun",
      indonesian: "Makanan Gorengan / Digoreng",
      exampleArabic: "الطَّعَامُ الْمَقْلِيُّ يَحْتَوِي عَلَى الزَّيْتِ الْكَثِيرِ.",
      exampleIndo: "Makanan gorengan mengandung banyak minyak.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 43,
      topicId: "topik2",
      arabic: "لُحُومٌ مُصَنَّعَةٌ",
      latin: "Luhuumun Musanna'atun",
      indonesian: "Daging Olahan (Sosis, dsb.)",
      exampleArabic: "اللُّهُومُ الْمُصَنَّعَةُ لَيْسَتْ جَيِّدَةً لِلصِّحَّةِ.",
      exampleIndo: "Daging olahan kurang baik untuk kesehatan.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 44,
      topicId: "topik2",
      arabic: "جِلْدُ الدَّجَاجِ",
      latin: "Jildu ad-Dajaaji",
      indonesian: "Kulit Ayam",
      exampleArabic: "جِلْدُ الدَّجَاجِ يَحْتَوِي عَلَى الدُّهُونِ.",
      exampleIndo: "Kulit ayam mengandung banyak lemak.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 45,
      topicId: "topik2",
      arabic: "جِهَازُ قِيَاسِ ضَغْطِ الدَّمِ",
      latin: "Jihaazu Qiyaasi Dhagti ad-Dami",
      indonesian: "Alat Ukur Tekanan Darah (Tensi)",
      exampleArabic: "يَسْتَخْدِمُ الطَّبِيبُ جِهَازَ قِيَاسِ ضَغْطِ الدَّمِ.",
      exampleIndo: "Dokter menggunakan alat ukur tekanan darah.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 46,
      topicId: "topik2",
      arabic: "دَوَاءٌ",
      latin: "Dawaa'un",
      indonesian: "Obat",
      exampleArabic: "يَتَنَاوَلُ الْمَرِيضُ الدَّوَاءَ فِي الْوَقْتِ الْمُحَدَّدِ.",
      exampleIndo: "Pasien meminum obat pada waktu yang ditentukan.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 47,
      topicId: "topik2",
      arabic: "صَيْدَلِيَّةٌ",
      latin: "Saydaliyyatun",
      indonesian: "Apotek",
      exampleArabic: "نَشْتَرِي الدَّوَاءَ مِنَ الصَّيْدَلِيَّةِ.",
      exampleIndo: "Kita membeli obat dari apotek.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 48,
      topicId: "topik2",
      arabic: "مُسْتَشْفَى",
      latin: "Mustashfaa",
      indonesian: "Rumah Sakit",
      exampleArabic: "الْمُسْتَشْفَى مَكَانٌ لِعِلاَجِ الْمَرْضَى.",
      exampleIndo: "Rumah sakit adalah tempat untuk mengobati orang sakit.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 49,
      topicId: "topik2",
      arabic: "صَيْدَلِيٌّ",
      latin: "Saydaliyyun",
      indonesian: "Apoteker",
      exampleArabic: "يُعْطِي الصَّيْدَلِيُّ الدَّوَاءَ لِلْمَرِيضِ.",
      exampleIndo: "Apoteker memberikan obat kepada pasien.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 50,
      topicId: "topik2",
      arabic: "طَبِيبٌ",
      latin: "Thabiibun",
      indonesian: "Dokter",
      exampleArabic: "يَفْحَصُ الطَّبِيبُ الْمَرِيضَ بِعِنَايَةٍ.",
      exampleIndo: "Dokter memeriksa pasien dengan cermat.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 51,
      topicId: "topik2",
      arabic: "فَوَاكِهُ",
      latin: "Fawaakihu",
      indonesian: "Buah-buahan",
      exampleArabic: "الْفَوَاكِهُ غَنِيَّةٌ بِالْفِيتَامِينَاتِ.",
      exampleIndo: "Buah-buahan kaya akan vitamin.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 52,
      topicId: "topik2",
      arabic: "مَوْزٌ",
      latin: "Mauzun",
      indonesian: "Pisang",
      exampleArabic: "الْمَوْزُ فَاكِهَةٌ لَذِيذَةٌ وَمُفِيدَةٌ.",
      exampleIndo: "Pisang adalah buah yang lezat dan bergizi.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 53,
      topicId: "topik2",
      arabic: "بُرْتُقَالٌ",
      latin: "Burtuqaalun",
      indonesian: "Jeruk",
      exampleArabic: "الْبُرْتُقَالُ يَحْتَوِي عَلَى فِيتَامِين ج.",
      exampleIndo: "Jeruk mengandung banyak vitamin C.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 54,
      topicId: "topik2",
      arabic: "خَضْرَاوَاتٌ",
      latin: "Khadhraawaatun",
      indonesian: "Sayur-sayuran",
      exampleArabic: "تَأْكُلُ الأُسْرَةُ الْخَضْرَاوَاتِ الطَّازَجَةَ.",
      exampleIndo: "Keluarga makan sayur-sayuran yang segar.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 55,
      topicId: "topik2",
      arabic: "سَمَكٌ",
      latin: "Samakun",
      indonesian: "Ikan",
      exampleArabic: "السَّمَكُ طَعَامٌ صِحِّيٌّ مُمْتَازٌ.",
      exampleIndo: "Ikan adalah makanan sehat yang sangat baik.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 56,
      topicId: "topik2",
      arabic: "لَبَنٌ مُصَفًّى",
      latin: "Labanun Musaffaa",
      indonesian: "Yogurt / Susu Murni",
      exampleArabic: "اللَّبَنُ الْمُصَفَّى مُفِيدٌ لِلْهَضْمِ.",
      exampleIndo: "Yogurt sangat bermanfaat untuk pencernaan.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 57,
      topicId: "topik2",
      arabic: "بِلاَ سُكَّرٍ",
      latin: "Bilaa Sukkarin",
      indonesian: "Tanpa Gula / Bebas Gula",
      exampleArabic: "أَشْرَبُ الشَّايَ بِلاَ سُكَّرٍ.",
      exampleIndo: "Saya minum teh tanpa gula.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop"
    },

    // --- BAB 3: الحَجُّ وَالعُمْرَةُ (Haji & Umrah) ---
    {
      id: 58,
      topicId: "topik3",
      arabic: "الْحَجُّ / الْعُمْرَةُ",
      latin: "Al-Hajju / Al-Umratu",
      indonesian: "Haji / Umrah",
      exampleArabic: "الْحَجُّ رُكْنٌ مِنْ أَرْكَانِ الإِسْلاَمِ.",
      exampleIndo: "Haji adalah salah satu rukun Islam.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 59,
      topicId: "topik3",
      arabic: "الْكَعْبَةُ الْمُشَرَّفَةُ",
      latin: "Al-Ka'bat ul-Musharrafah",
      indonesian: "Ka'bah Al-Musharrafah",
      exampleArabic: "يَطُوفُ الْمُسْلِمُونَ حَوْلَ الْكَعْبَةِ الْمُشَرَّفَةِ.",
      exampleIndo: "Umat Islam bertawaf mengelilingi Ka'bah Al-Musharrafah.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 60,
      topicId: "topik3",
      arabic: "الإِحْرَامُ",
      latin: "Al-Ihraamu",
      indonesian: "Ihram / Niat & Pakaian Ihram",
      exampleArabic: "يَلْبَسُ الْحَاجُّ مَلاَبِسَ الإِحْرَامِ.",
      exampleIndo: "Jamaah haji memakai pakaian ihram.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 61,
      topicId: "topik3",
      arabic: "الْحَاجُّ ج الْحُجَّاجُ",
      latin: "Al-Haajju j Al-Hujjaaju",
      indonesian: "Jamaah Haji",
      exampleArabic: "يَصِلُ الْحُجَّاجُ إِلَى مَكَّةَ الْمُكَرَّمَةِ.",
      exampleIndo: "Para jamaah haji tiba di Makkah Al-Mukarramah.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 62,
      topicId: "topik3",
      arabic: "مَحْرَمٌ - مَحْرَمَةٌ",
      latin: "Mahramun - Mahramatun",
      indonesian: "Mahram (Laki-laki / Perempuan)",
      exampleArabic: "تُسَافِرُ الْمَرْأَةُ مَعَ مَحْرَمِهَا.",
      exampleIndo: "Seorang wanita bepergian bersama mahramnya.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 63,
      topicId: "topik3",
      arabic: "الْمِيقَاتُ",
      latin: "Al-Miiqaatu",
      indonesian: "Miqat (Batas Waktu & Tempat Ihram)",
      exampleArabic: "يَبْدَأُ الإِحْرَامُ مِنَ الْمِيقَاتِ.",
      exampleIndo: "Ihram dimulai dari miqat.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 64,
      topicId: "topik3",
      arabic: "الطَّوَافُ بِالْكَعْبَةِ",
      latin: "At-Thawaafu bil-Ka'bati",
      indonesian: "Tawaf Mengelilingi Ka'bah",
      exampleArabic: "الطَّوَافُ بِالْكَعْبَةِ سَبْعَةُ أَشْوَاطٍ.",
      exampleIndo: "Tawaf mengelilingi Ka'bah sebanyak 7 putaran.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 65,
      topicId: "topik3",
      arabic: "السَّعْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ",
      latin: "As-Sa'yu bainas-Shafaa wal-Marwati",
      indonesian: "Sa'i Antara Shafa dan Marwah",
      exampleArabic: "السَّعْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ مِنْ وِاجِبَاتِ الْحَجِّ.",
      exampleIndo: "Sa'i antara Shafa dan Marwah termasuk kewajiban haji.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 66,
      topicId: "topik3",
      arabic: "الْمَبِيتُ فِي مِنًى",
      latin: "Al-Mabiitu fii Minaa",
      indonesian: "Bermalam di Mina",
      exampleArabic: "يَبِيتُ الْحُجَّاجُ فِي مِنًى فِي أَيَّامِ التَّشْرِيقِ.",
      exampleIndo: "Jamaah haji bermalam di Mina pada hari-hari Tasyrik.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 67,
      topicId: "topik3",
      arabic: "الْوُقُوفُ بِعَرَفَةَ",
      latin: "Al-Wuquufu bi-'Arafata",
      indonesian: "Wukuf di Arafah",
      exampleArabic: "الْحَجُّ عَرَفَةُ، وَالْوُقُوفُ بِعَرَفَةَ رُكْنٌ أَعْظَمُ.",
      exampleIndo: "Haji adalah Arafah, dan wukuf di Arafah adalah rukun terbesar.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 68,
      topicId: "topik3",
      arabic: "الْمَبِيتُ فِي مُزْدَلِفَةَ",
      latin: "Al-Mabiitu fii Muzdalifata",
      indonesian: "Bermalam di Muzdalifah",
      exampleArabic: "يَتَوَجَّهُ الْحُجَّاجُ لِلْمَبِيتِ فِي مُزْدَلِفَةَ بَعْدَ عَرَفَةَ.",
      exampleIndo: "Jamaah haji bertolak untuk bermalam di Muzdalifah setelah Arafah.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 69,
      topicId: "topik3",
      arabic: "رَمْيُ الْجَمَرَاتِ",
      latin: "Ramyul-Jamaraati",
      indonesian: "Melempar Jumrah",
      exampleArabic: "يَقُومُ الْحُجَّاجُ بِرَمْيِ الْجَمَرَاتِ فِي مِنًى.",
      exampleIndo: "Jamaah haji melakukan lempar jumrah di Mina.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 70,
      topicId: "topik3",
      arabic: "التَّحَلُّلُ",
      latin: "At-Tahallulu",
      indonesian: "Tahallul (Mencukur / Memotong Rambut)",
      exampleArabic: "يَتَحَلَّلُ الْحَاجُّ بِقَصِّ الشَّعْرِ بَعْدَ الطَّوَافِ وَالسَّعْيِ.",
      exampleIndo: "Jamaah haji bertahallul dengan memotong rambut setelah tawaf dan sa'i.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 71,
      topicId: "topik3",
      arabic: "الْحَجَرُ الأَسْوَدُ",
      latin: "Al-Hajarul-Aswadu",
      indonesian: "Hajar Aswad (Batu Hitam Ka'bah)",
      exampleArabic: "يُشِيرُ الْحَاجُّ إِلَى الْحَجَرِ الأَسْوَدِ فِي الطَّوَافِ.",
      exampleIndo: "Jamaah haji memberi isyarat ke Hajar Aswad saat tawaf.",
      type: "Frasa Nomina",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 72,
      topicId: "topik3",
      arabic: "نَاصِعُ الْبَيَاضِ",
      latin: "Naasi'ul-Bayaadhi",
      indonesian: "Putih Bersih / Putih Silau",
      exampleArabic: "كَانَ الْحَجَرُ الأَسْوَدُ نَاصِعَ الْبَيَاضِ حِينَ نَزَلَ مِنَ الْجَنَّةِ.",
      exampleIndo: "Hajar Aswad dulunya putih bersih ketika turun dari surga.",
      type: "Adjektiva (Sifat)",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop"
    },

    // --- BAB 4: الأَدْيَانُ فِي إِنْدُونِيسِيَا (Agama-agama di Indonesia) ---
    {
      id: 73,
      topicId: "topik4",
      arabic: "الإِسْلاَمُ",
      latin: "Al-Islaamu",
      indonesian: "Agama Islam",
      exampleArabic: "الإِسْلاَمُ دِينُ السَّلاَمِ وَالرَّحْمَةِ.",
      exampleIndo: "Islam adalah agama kedamaian dan kasih sayang.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 74,
      topicId: "topik4",
      arabic: "الْكَاثُولِيكِيَّةُ",
      latin: "Al-Kaathuuliikiyyatu",
      indonesian: "Agama Katolik",
      exampleArabic: "الْكَاثُولِيكِيَّةُ إِحْدَى الأَدْيَانِ فِي إِنْدُونِيسِيَا.",
      exampleIndo: "Katolik adalah salah satu agama di Indonesia.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1548625361-1851214041b6?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 75,
      topicId: "topik4",
      arabic: "الْبُرُوتِسْتَانْتِيَّةُ",
      latin: "Al-Buruutistaantiyyatu",
      indonesian: "Agama Protestan",
      exampleArabic: "الْبُرُوتِسْتَانْتِيَّةُ دِينٌ يَعْتَنِقُهُ بَعْضُ الْمُوَاطِنِينَ.",
      exampleIndo: "Protestan adalah agama yang dianut sebagian warga.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 76,
      topicId: "topik4",
      arabic: "الْهِنْدُوسِيَّةُ",
      latin: "Al-Hinduusiyyatu",
      indonesian: "Agama Hindu",
      exampleArabic: "الْهِنْدُوسِيَّةُ مَوْجُودَةٌ بِكَثْرَةٍ فِي بَالِي.",
      exampleIndo: "Agama Hindu terdapat banyak di Bali.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1609946782701-8c464a93e3d9?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 77,
      topicId: "topik4",
      arabic: "الْبُوذِيَّةُ",
      latin: "Al-Buudhiyyatu",
      indonesian: "Agama Buddha",
      exampleArabic: "الْبُوذِيَّةُ دِينٌ يَدْعُو إِلَى السَّلاَمِ.",
      exampleIndo: "Agama Buddha adalah agama yang mengajak pada kedamaian.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 78,
      topicId: "topik4",
      arabic: "الْكُونْفُوشِيَّةُ",
      latin: "Al-Kuunfuushiyyatu",
      indonesian: "Agama Khonghucu",
      exampleArabic: "الْكُونْفُوشِيَّةُ مِنَ الأَدْيَانِ الْمَعْتَرَفِ بِهَا.",
      exampleIndo: "Khonghucu termasuk agama yang diakui.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 79,
      topicId: "topik4",
      arabic: "الْمُسْلِمُ",
      latin: "Al-Muslimu",
      indonesian: "Orang Muslim / Umat Islam",
      exampleArabic: "يُصَلِّي الْمُسْلِمُ فِي الْمَسْجِدِ.",
      exampleIndo: "Orang Muslim shalat di masjid.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 80,
      topicId: "topik4",
      arabic: "الْمَسِيحِيُّ / الْكَاثُولِيكِيُّ",
      latin: "Al-Masihiyyu / Al-Kaathuuliikiyyu",
      indonesian: "Orang Katolik",
      exampleArabic: "يَذْهَبُ الْمَسِيحِيُّ الْكَاثُولِيكِيُّ إِلَى الْكَنِيسَةِ.",
      exampleIndo: "Orang Katolik pergi ke gereja.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 81,
      topicId: "topik4",
      arabic: "الْمَسِيحِيُّ / الْبُرُوتِسْتَانْتِيُّ",
      latin: "Al-Masihiyyu / Al-Buruutistaantiyyu",
      indonesian: "Orang Protestan",
      exampleArabic: "يُعَامِلُ الْمَسِيحِيُّ الْبُرُوتِسْتَانْتِيُّ جِيرَانَهُ بِاحْتِرَامٍ.",
      exampleIndo: "Orang Protestan memperlakukan tetangganya dengan hormat.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 82,
      topicId: "topik4",
      arabic: "الْهِنْدُوسِيُّ",
      latin: "Al-Hinduusiyyu",
      indonesian: "Umat Hindu",
      exampleArabic: "يَتَعَبَّدُ الْهِنْدُوسِيُّ فِي فُورَا.",
      exampleIndo: "Umat Hindu beribadah di Pura.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1609946782701-8c464a93e3d9?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 83,
      topicId: "topik4",
      arabic: "الْبُوذِيُّ",
      latin: "Al-Buudhiyyu",
      indonesian: "Umat Buddha",
      exampleArabic: "يَتَعَبَّدُ الْبُوذِيُّ فِي فِهَارَا.",
      exampleIndo: "Umat Buddha beribadah di Vihara.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 84,
      topicId: "topik4",
      arabic: "الْكُونْفُوشِيُّ",
      latin: "Al-Kuunfuushiyyu",
      indonesian: "Umat Khonghucu",
      exampleArabic: "يَتَعَبَّدُ الْكُونْفُوشِيُّ فِي الْمَعْبَدِ.",
      exampleIndo: "Umat Khonghucu beribadah di Klenteng.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 85,
      topicId: "topik4",
      arabic: "الْمَسْجِدُ",
      latin: "Al-Masjidu",
      indonesian: "Masjid (Tempat Ibadah Umat Islam)",
      exampleArabic: "الْمَسْجِدُ مَكَانُ عِبَادَةِ الْمُسْلِمِينَ.",
      exampleIndo: "Masjid adalah tempat ibadah umat Islam.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 86,
      topicId: "topik4",
      arabic: "الْكَنِيسَةُ",
      latin: "Al-Kaniisatu",
      indonesian: "Gereja (Tempat Ibadah Umat Kristen/Katolik)",
      exampleArabic: "الْكَنِيسَةُ مَكَانُ عِبَادَةِ الْمَسِيحِيِّينَ.",
      exampleIndo: "Gereja adalah tempat ibadah umat Kristen.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1548625361-1851214041b6?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 87,
      topicId: "topik4",
      arabic: "فُورَا",
      latin: "Fuuraa",
      indonesian: "Pura (Tempat Ibadah Umat Hindu)",
      exampleArabic: "فُورَا مَكَانُ عِبَادَةِ الْهِنْدُوسِيِّينَ فِي بَالِي.",
      exampleIndo: "Pura adalah tempat ibadah umat Hindu di Bali.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 88,
      topicId: "topik4",
      arabic: "فِهَارَا",
      latin: "Fihaaraa",
      indonesian: "Vihara (Tempat Ibadah Umat Buddha)",
      exampleArabic: "فِهَارَا مَكَانُ عِبَادَةِ الْبُوذِيِّينَ.",
      exampleIndo: "Vihara adalah tempat ibadah umat Buddha.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 89,
      topicId: "topik4",
      arabic: "الْمَعْبَدُ",
      latin: "Al-Ma'badu",
      indonesian: "Klenteng / Tempat Ibadah",
      exampleArabic: "يَتَوَجَّهُ الْكُونْفُوشِيُّ إِلَى الْمَعْبَدِ.",
      exampleIndo: "Umat Khonghucu menuju ke klenteng.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 90,
      topicId: "topik4",
      arabic: "التَّسَامُحُ",
      latin: "At-Tasaamuhu",
      indonesian: "Toleransi / Sikap Saling Menghormati",
      exampleArabic: "التَّسَامُحُ مِفْتَاحُ السَّلاَمِ فِي الْمُجْتَمَعِ.",
      exampleIndo: "Toleransi adalah kunci kedamaian dalam masyarakat.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 91,
      topicId: "topik4",
      arabic: "بَانْتَجَاسِيلاَ",
      latin: "Baantajaasiilaa",
      indonesian: "Pancasila (Dasar Negara Indonesia)",
      exampleArabic: "بَانْتَجَاسِيلاَ هُوَ أَسَاسُ الدَّوْلَةِ الإِنْدُونِيسِيَّةِ.",
      exampleIndo: "Pancasila adalah dasar negara Indonesia.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 92,
      topicId: "topik4",
      arabic: "الْوَحْدَةُ",
      latin: "Al-Wahdatu",
      indonesian: "Persatuan / Kesatuan",
      exampleArabic: "الْوَحْدَةُ تُقَوِّي الأُمَّةَ الإِنْدُونِيسِيَّةَ.",
      exampleIndo: "Persatuan memperkuat bangsa Indonesia.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 93,
      topicId: "topik4",
      arabic: "التَّنَوُّعُ",
      latin: "At-Tanawwu'u",
      indonesian: "Keberagaman / Keanekaragaman",
      exampleArabic: "التَّنَوُّعُ فِي إِنْدُونِيسِيَا نِعْمَةٌ كَبِيرَةٌ.",
      exampleIndo: "Keberagaman di Indonesia adalah nikmat yang besar.",
      type: "Nomina (Isim)",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop"
    }
  ],

  qiraah: [
    {
      id: 1,
      title: "القِرَاءَةُ الأُولَى: الذَّهَابُ إِلَى غَارِ فِيْنْدُوْل (Wisata ke Goa Pindul)",
      topic: "السَّفَرُ وَالسِّيَاحَةُ",
      level: "Kelas 11 MA - Bab 1",
      arabicText: `أَنَا إِبْرِيْزَةُ، أَنَا طَالِبَةٌ فِي الصَّفِّ الحَادِيَ عَشَرَ مِنَ المَدْرَسَةِ الثَّانَوِيَّةِ الإِسْلَامِيَّةِ الحُكُوْمِيَّةِ 4 جُوْمْبَانْج. عِنْدِي جَدٌّ فِي سُوْكُوْهَارْجُوْ (Sukoharjo) جَاوَا الوُسْطَى. وَفِي أَيَّامِ العُطْلَةِ المَاضِيَةِ ذَهَبْتُ إِلَى بَيْتِ جَدِّي مَعَ أُسْرَتِي وَمَكَّثْنَا هُنَاكَ أَرْبَعَةَ أَيَّامٍ.

اِسْتَعْدَدْنَا بِأَشْيَاءَ كَثِيْرَةٍ مِنَ المَلَابِسِ وَالأَطْعِمَةِ وَاللُّهْنَةِ وَبِطَاقَةِ المُرُوْرِ الإِلِكْتُرُونِيَّةِ وَغَيْرِ ذَلِك ثُمَّ رَكِبْنَا السَّيَّارَةَ فِي السَّاعَةِ السَّابِعَةِ صَبَاحًا وَوَصَلْنَا إِلَى بَيْتِ جَدِّي فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ. شَعَرَ جَدِّي بِسُرُوْرٍ لِوُصُوْلِنَا.

ذَهَبْنَا إِلَى غَارِ فِيْنْدُوْل فِي اليَوْمِ الأَوَّلِ مِنَ العُطْلَةِ. بَيْتُ جَدِّي قَرِيْبٌ مِنْ غَارِ فِيْنْدُوْل. غَارُ فِيْنْدُوْل مَكَانٌ سِيَاحِيٌّ جَمِيْلٌ فِي غُوْنُوْنْج كِيْنْدُوْل (Gunung Kidul) يُوْكِيَاكِرْتَا. وَوَصَلْنَا هُنَاكَ بِسَلَامٍ بَعْدَ سَاعَةٍ وَنِصْفٍ بِالسَّيَّارَةِ.

تَوَجَّهْنَا بَعْدَ ذَلِك إِلَى شُبَّاكِ التَّذَاكِرِ لِشِرَاءِ التَّذَاكِرِ. كَانَتِ التَّذْكِرَةُ بِخَمْسِيْنَ أَلْفَ رُوْبِيَّةٍ لِكُلِّ فَرْدٍ. ثُمَّ اسْتَخْدَمْنَا الإِطَارَاتِ وَالعَوَّامَةَ وَمَشَيْنَا بَعْدَ ذَلِك إِلَى مَكَانِ السِّيَاحَةِ وَدَخَلْنَا إِلَى الغَارِ وَاتَّبَعْنَا النَّهْرَ تَحْتَ الغَارِ مَعَ مُرْشِدِ السِّيَاحَةِ.

ثُمَّ مَشَيْنَا عَلَى ضِفَّةِ نَهْرِ أُيُوْ، هُوَ نَهْرٌ قَرِيْبٌ مِنْ غَارِ فِيْنْدُوْل. لَعِبْنَا وَسَبَحْنَا فِي النَّهْرِ عَلَى بُعْدِ كِيْلُومِتْرٍ وَنِصْفٍ. وَفِي أَثْنَاءِ الطَّرِيْقِ شَاهَدْنَا المَنَاظِرَ الجَمِيْلَةَ مِنْ حُزُفٍ مُزْتَفِعٍ.

هِوَايَتِي السِّيَاحَةُ، وَالذَّهَابُ إِلَى أَمَاكِنَ سِيَاحِيَّةٍ جَمِيْلَةٍ فِي إِندُونِيْسِيَا شَيْءٌ مُمْتِعٌ فِي حَيَاتِي. وَالذَّهَابُ إِلَيْهَا بَعْضُ مِمَّا أَمَرَ اللهُ بِهِ عَزَّ وَجَلَّ: (هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِنْ رِزْقِهِ وَإِلَيْهِ النُّشُورُ) وَهَذِهِ الأَمَاكِنُ السِّيَاحِيَّةُ آيَةٌ مِنْ آيَاتِ اللهِ، فَلَا بُدَّ لَنَا أَنْ نُحَافِظَ عَلَيْهَا.`,
      indonesianText: `Saya Ibrizah, saya seorang siswi kelas 11 di MAN 4 Jombang. Saya memiliki kakek di Sukoharjo, Jawa Tengah. Pada hari-hari liburan lalu, saya pergi ke rumah kakek bersama keluarga saya dan kami tinggal di sana selama empat hari.

Kami bersiap-siap dengan banyak hal seperti pakaian, makanan, oleh-oleh, kartu elektronik (pass/e-money), dan lain-lain. Kemudian kami naik mobil pada jam 07.00 pagi dan tiba di rumah kakek pada jam 10.30. Kakek merasa bahagia atas kedatangan kami.

Kami pergi ke Goa Pindul pada hari pertama liburan. Rumah kakek dekat dari Goa Pindul. Goa Pindul adalah tempat wisata yang indah di Gunung Kidul, Yogyakarta. Dan kami tiba di sana dengan selamat setelah perjalanan selama satu setengah jam menggunakan mobil.

Setelah itu kami menuju ke loket tiket untuk membeli tiket. Harga tiket lima puluh ribu rupiah per orang. Kemudian kami menggunakan ban pelampung dan jaket pelampung, lalu kami berjalan kaki ke lokasi wisata dan masuk ke dalam gua serta menyusuri sungai di bawah gua bersama pemandu wisata.

Kemudian kami berjalan di tepi Sungai Oya, yaitu sungai yang dekat dari Goa Pindul. Kami bermain dan berenang di sungai pada jarak satu setengah kilometer. Dan di tengah perjalanan kami menyaksikan pemandangan yang indah berupa tebing-tebing yang tinggi.

Hobi saya adalah berwisata, dan pergi ke tempat-tempat wisata yang indah di Indonesia merupakan hal yang menyenangkan dalam hidupku. Pergi berwisata juga merupakan bagian dari apa yang diperintahkan Allah Azza wa Jalla: "Dialah yang menjadikan bumi untuk kamu yang mudah dijelajahi, maka jelajahilah di segala penjurunya dan makanlah sebagian dari rezeki-Nya. Dan hanya kepada-Nya lah kamu (kembali setelah) dibangkitkan" (QS. Al-Mulk: 15). Dan tempat-tempat wisata ini adalah tanda dari tanda-tanda kekuasaan Allah, maka kita wajib menjaganya.`,
      vocabularyHighlights: [
        { word: "غَارُ فِيْنْدُوْل", meaning: "Goa Pindul" },
        { word: "شُبَّاكُ التَّذَاكِرِ", meaning: "Loket Tiket" },
        { word: "مُرْشِدُ السِّيَاحَةِ", meaning: "Pemandu Wisata" },
        { word: "ضِفَّةُ النَّهْرِ", meaning: "Tepi Sungai" }
      ],
      questions: [
        {
          q: "مَنْ هِيَ إِبْرِيْزَةُ وَأَيْنَ تَدْرُسُ؟",
          options: [
            "طَالِبَةٌ فِي الصَّفِّ 11 فِي مَان 4 جُوْمْبَانْج",
            "طَالِبَةٌ فِي الصَّفِّ 10 فِي مَان 1 بَوْنْتِيَانَاك",
            "مُدَرِّسَةٌ فِي الْمَدْرَسَةِ",
            "طَبِيبَةٌ فِي الْمُسْتَشْفَى"
          ],
          correct: 0,
          explanation: "Sesuai paragraf pertama: أَنَا إِبْرِيْزَةُ، أَنَا طَالِبَةٌ فِي الصَّفِّ الحَادِيَ عَشَرَ مِنَ المَدْرَسَةِ الثَّانَوِيَّةِ الإِسْلَامِيَّةِ الحُكُوْمِيَّةِ 4 جُوْمْبَانْج"
        },
        {
          q: "كَمْ سِعْرُ تَذْكِرَةِ الدُّخُولِ إِلَى غَارِ فِيْنْدُوْل لِكُلِّ فَرْدٍ؟",
          options: [
            "خَمْسُونَ أَلْفَ رُوْبِيَّةٍ (50.000)",
            "عِشْرُونَ أَلْفَ رُوْبِيَّةٍ (20.000)",
            "مِئَةُ أَلْفِ رُوْبِيَّةٍ (100.000)",
            "مَجَّانًا (Gratis)"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 4: كَانَتِ التَّذْكِرَةُ بِخَمْسِيْنَ أَلْفَ رُوْبِيَّةٍ لِكُلِّ فَرْدٍ"
        },
        {
          q: "مَاذَا اسْتَخْدَمَتْ إِبْرِيْزَةُ وَأُسْرَتُهَا لِلتَّزَحْلُفِ فِي النَّهْرِ؟",
          options: [
            "الإِطَارَاتِ وَالعَوَّامَةَ (Ban & Jaket Pelampung)",
            "الْقَارِبَ الْكَبِيرَ",
            "الطَّائِرَةَ",
            "الدَّرَّاجَةَ النَّارِيَّةَ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 4: ثُمَّ اسْتَخْدَمْنَا الإِطَارَاتِ وَالعَوَّامَةَ"
        }
      ]
    },
    {
      id: 2,
      title: "القِرَاءَةُ الثَّانِيَةُ: رِحْلَةٌ شَاطِئِيَّةٌ (Wisata Pantai Losari)",
      topic: "السَّفَرُ وَالسِّيَاحَةُ",
      level: "Kelas 11 MA - Bab 1",
      arabicText: `أَنَا مَرْوَانُ. عِنْدِي صَدِيْقٌ اِسْمُهُ سَلْمَانُ. نَحْنُ فِي مَدْرَسَةٍ وَاحِدَةٍ بِبَارِي بَارِي (Pare-pare). يُحِبُّ سَلْمَانُ السِّيَاحَةَ خَاصَّةً السِّيَاحَةَ المَائِيَّةَ.

فِي يَوْمِ الأَحَدِ المَاضِي ذَهَبَ سَلْمَانُ مَعَ أُسْرَتِهِ إِلَى شَاطِئِ لُوسَارِي (Losari). وَهُوَ شَاطِئٌ مَشْهُوْرٌ فِي مَاكَاسَار (Makassar). هُمْ ذَهَبُوا إِلَى مَاكَاسَار صَبَاحًا. اِسْتَغْرَقَ الذَّهَابُ إِلَى مَاكَاسَار حَوَالَى ثَلَاثِ سَاعَاتٍ وَنِصْفٍ بِالسَّيَّارَةِ.

وَبَعْدَ مَا وَصَلُوا هُنَاكَ بَسَطُوا الفِرَاشَ عَلَى الرِّمَالِ، شَاهَدُوا المَنَاظِرَ الجَمِيْلَةَ حَوْلَ الشَّاطِئِ. تَشَمَّسُوا وَلَعِبُوا فِي المِيَاهِ وَتَمَتَّعُوا بِأَمْوَاجِ البَحْرِ. وَهُنَاكَ كَثِيْرٌ مِنَ السُّيَّاحِ الَّذِيْنَ جَلَسُوا عَلَى الشَّاطِئِ. هُمْ أَكَلُوا المَأْكُوْلَاتِ الخَفِيْفَةَ وَكَذَلِك المَشْرُوْبَاتِ. وَهُمْ رَمَوْا النُّفَايَاتِ فِي صَنَادِيْقِ القُمَامَةِ المُخَصَّصَةِ.

وَ فِي المَسَاءِ شَعَرَ سَلْمَانُ وَأُسْرَتُهُ بِالتَّعَبِ فَاسْتَرُاحُوا وَصَلَّوْا فِي مُصَلَّى قَرِيْبٍ مِنَ الشَّاطِئِ. وَرَجَعَ سَلْمَانُ وَأُسْرَتُهُ إِلَى بَارِي بَارِي (Pare-pare) مَسْرُوْرِيْنَ، وَ لَيْسَ ذَلِك بِسَبَبِ مَنَاظِرِ الشَّاطِئِ الجَمِيْلَةِ فَقَطْ، بَلْ لِأَنَّهُمْ سَاهَمُوا أَيْضًا فِي الحِفَاظِ عَلَى نَظَافَةِ بِيْئَةِ المَكَانِ السِّيَاحِيِّ.`,
      indonesianText: `Saya Marwan. Saya memiliki seorang teman bernama Salman. Kami berada di satu sekolah di Parepare. Salman sangat menyukai wisata, khususnya wisata bahari/air.

Pada hari Minggu yang lalu, Salman pergi bersama keluarganya ke Pantai Losari. Pantai tersebut adalah pantai terkenal di Makassar. Mereka pergi ke Makassar pada pagi hari. Perjalanan menuju Makassar memakan waktu sekitar tiga setengah jam menggunakan mobil.

Setelah tiba di sana, mereka membentangkan matras/tikar di atas pasir, lalu mereka menyaksikan pemandangan yang indah di sekitar pantai. Mereka berjemur, bermain air, dan menikmati ombak laut. Di sana terdapat banyak wisatawan yang duduk di tepi pantai. Mereka menyantap makanan ringan dan minuman. Dan mereka membuang sampah pada kotak sampah yang telah disediakan.

Pada sore hari, Salman dan keluarganya merasa lelah lalu mereka beristirahat dan melaksanakan shalat di mushalla dekat pantai. Salman dan keluarganya kembali ke Parepare dengan gembira, dan hal itu bukan hanya karena pemandangan pantai yang indah saja, melainkan karena mereka juga telah berkontribusi menjaga kebersihan lingkungan tempat wisata tersebut.`,
      vocabularyHighlights: [
        { word: "شَاطِئُ لُوسَارِي", meaning: "Pantai Losari" },
        { word: "السِّيَاحَةَ المَائِيَّةَ", meaning: "Wisata Bahari / Air" },
        { word: "بَسَطُوا الفِرَاشَ", meaning: "Membentangkan Matras" },
        { word: "نَظَافَةِ بِيْئَةِ", meaning: "Kebersihan Lingkungan" }
      ],
      questions: [
        {
          q: "إِلَى أَيِّ شَاطِئٍ ذَهَبَ سَلْمَانُ مَعَ أُسْرَتِهِ؟",
          options: [
            "إِلَى شَاطِئِ لُوسَارِي فِي مَاكَاسَار",
            "إِلَى غَارِ فِيْنْدُوْل فِي يُوْكِيَاكِرْتَا",
            "إِلَى شَاطِئِ كُوتَا فِي بَالِي",
            "إِلَى الْجَبَلِ فِي جَاوَا"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 2: ذَهَبَ سَلْمَانُ مَعَ أُسْرَتِهِ إِلَى شَاطِئِ لُوسَارِي فِي مَاكَاسَار"
        },
        {
          q: "كَمْ سَاعَةً اسْتَغْرَقَ الذَّهَابُ مِنْ بَارِي بَارِي إِلَى مَاكَاسَار؟",
          options: [
            "ثَلَاثُ سَاعَاتٍ وَنِصْفٌ (3,5 jam)",
            "سَاعَةٌ وَاحِدَةٌ (1 jam)",
            "خَمْسُ سَاعَاتٍ (5 jam)",
            "يَوْمٌ كَامِلٌ (1 hari full)"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 2: اِسْتَغْرَقَ الذَّهَابُ إِلَى مَاكَاسَار حَوَالَى ثَلَاثِ سَاعَاتٍ وَنِصْفٍ"
        },
        {
          q: "أَيْنَ رَمَى سَلْمَانُ وَأُسْرَتُهُ النُّفَايَاتِ؟",
          options: [
            "فِي صَنَادِيْقِ القُمَامَةِ المُخَصَّصَةِ",
            "فِي الْبَحْرِ",
            "عَلَى الرِّمَالِ",
            "فِي الشَّارِعِ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 3: وَهُمْ رَمَوْا النُّفَايَاتِ فِي صَنَادِيْقِ القُمَامَةِ المُخَصَّصَةِ"
        }
      ]
    },
    {
      id: 3,
      title: "القِرَاءَةُ: هَيَّا نَعِيْشُ بِالصِّحَّةِ ١ (Mari Kita Hidup Sehat 1)",
      topic: "الصِّحَّةُ",
      level: "Kelas 11 MA - Bab 2",
      arabicText: `نَبِيْلٌ وَ نَوْفَلٌ صَدِيْقَانِ. هُمَا يَعِيْشَانِ فِي قَرْيَةٍ صَغِيْرَةٍ، هُمَا يَتَعَلَّمَانِ فِي نَفْسِ المَدْرَسَةِ. نَبِيْلٌ وَ نَوْفَلٌ يُحِبَّانِ أَنْ يَعِيْشَا فِي صِحَّةٍ لِأَنَّهُمَا يَعْرِفَانِ أَنَّ الصِّحَّةَ أَمْرٌ مُهِمٌّ فِي حَيَاةِ الإِنْسَانِ.

يُحِبُّ نَبِيْلٌ وَ نَوْفَلٌ أَنْ يَذْهَبَا إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ لِأَنَّ المَدْرَسَةَ بَعِيْدَةٌ عَنْ بَيْتِهِمَا. يَفْهَمُ نَبِيْلٌ وَ نَوْفَلٌ أَنَّ الذَّهَابَ إِلَى المَدْرَسَةِ أَوْ إِلَى مَكَانٍ آخَرَ بِالدَّرَّاجَةِ نَافِعٌ لِصِحَّةِ البَدَنِ. وَفِي المَدْرَسَةِ كَثِيْرٌ مِنَ الطُّلَّابِ الَّذِيْنَ يَذْهَبُوْنَ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ أَيْضًا.

وَفِي البَيْتِ يُحِبُّ نَبِيْلٌ وَ نَوْفَلٌ أَنْ يُمَارِسَا الرِّيَاضَةَ مِثْلَ الجَرْيِ وَكُرَةِ القَدَمِ وَالسِّبَاحَةِ وَغَيْرِ ذَلِك. هُمَا يَجْرِيَانِ كُلَّ صَبَاحٍ قَبْلَ الذَّهَابِ إِلَى المَدْرَسَةِ وَيَسْبَحَانِ مَرَّةً فِي الأُسْبُوْعِ يَوْمَ الأَحَدِ وَيَلْعَبَانِ كُرَةَ القَدَمِ فِي مَلْعَبِ القَرْيَةِ مَسَاءَ اليَوْمِ.

يَهْتَمُّ الشَّخْصُ بِصِحَّتِهِ مِنْ خِلَالِ تَنَاوُلِ الأَطْعِمَةِ الضَّرُوْرِيَّةِ لِلصِّحَّةِ، وَيُحَافِظُ عَلَى سَلَامَتِهِ البَدَنِيَّةِ مِنْ خِلَالِ مُمَارَسَةِ الرِّيَاضَةِ بِانْتِظَامٍ. قَالَ الحُكَمَاءُ: الصِّحَّةُ تَاجٌ عَلَى رُؤُوْسِ الأَصِحَّاءِ لاَ يَعْرِفُهُ إِلاَّ المَرْضَى.`,
      indonesianText: `Nabil dan Naufal adalah dua orang sahabat. Mereka berdua tinggal di sebuah desa kecil, dan mereka berdua belajar di sekolah yang sama. Nabil dan Naufal suka hidup sehat karena mereka berdua mengetahui bahwa kesehatan adalah hal yang sangat penting dalam kehidupan manusia.

Nabil dan Naufal suka pergi ke sekolah naik sepeda karena sekolah terletak jauh dari rumah mereka berdua. Nabil dan Naufal memahami bahwa pergi ke sekolah atau ke tempat lain menggunakan sepeda bermanfaat untuk kesehatan tubuh. Dan di sekolah ada banyak siswa yang pergi ke sekolah menggunakan sepeda juga.

Di rumah, Nabil dan Naufal suka berolahraga seperti lari, sepak bola, berenang, dan lain-lain. Mereka berdua lari pagi setiap hari sebelum berangkat ke sekolah, berenang seminggu sekali pada hari Minggu, dan bermain sepak bola di lapangan desa pada sore hari.

Seseorang memperhatikan kesahatannya dengan cara mengonsumsi makanan yang penting bagi kesehatan, dan menjaga keselamatan fisiknya dengan cara berolahraga secara teratur. Hukama (orang-orang bijak/dokter) berkata: "Kesehatan adalah mahkota di atas kepala orang-orang yang sehat, yang tidak ada yang mengetahuinya kecuali orang-orang yang sakit".`,
      vocabularyHighlights: [
        { word: "هَيَّا نَعِيْشُ بِالصِّحَّةِ", meaning: "Mari Kita Hidup Sehat" },
        { word: "بِالدَّرَّاجَةِ", meaning: "Naik Sepeda" },
        { word: "مُمَارَسَةُ الرِّيَاضَةِ", meaning: "Berolahraga secara teratur" },
        { word: "الصِّحَّةُ تَاجٌ", meaning: "Kesehatan adalah mahkota" }
      ],
      questions: [
        {
          q: "كَيْفَ يَذْهَبُ نَبِيْلٌ وَنَوْفَلٌ إِلَى الْمَدْرَسَةِ؟",
          options: [
            "بِالدَّرَّاجَةِ",
            "بِالسَّيَّارَةِ",
            "بِالْحَافِلَةِ",
            "مَشْيًا عَلَى الأَقْدَامِ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 2: يُحِبُّ نَبِيْلٌ وَنَوْفَلٌ أَنْ يَذْهَبَا إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ"
        },
        {
          q: "مَتَى يَجْرِيَانِ نَبِيْلٌ وَنَوْفَلٌ كُلَّ يَوْمٍ؟",
          options: [
            "كُلَّ صَبَاحٍ قَبْلَ الذَّهَابِ إِلَى المَدْرَسَةِ",
            "فِي اللَّيْلِ",
            "فِي الظُّهْرِ",
            "بَعْدَ النَّوْمِ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 3: هُمَا يَجْرِيَانِ كُلَّ صَبَاحٍ قَبْلَ الذَّهَابِ إِلَى المَدْرَسَةِ"
        },
        {
          q: "مَاذَا قَالَ الْحُكَمَاءُ عَنِ الصِّحَّةِ؟",
          options: [
            "الصِّحَّةُ تَاجٌ عَلَى رُؤُوْسِ الأَصِحَّاءِ لاَ يَعْرِفُهُ إِلاَّ المَرْضَى",
            "الصِّحَّةُ لاَ تَفِيدُ شَيْئًا",
            "الْمَالُ أَهَمُّ مِنَ الصِّحَّةِ",
            "الصِّحَّةُ لِلأَطْفَالِ فَقَطْ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 4: قَالَ الحُكَمَاءُ: الصِّحَّةُ تَاجٌ عَلَى رُؤُوْسِ الأَصِحَّاءِ لاَ يَعْرِفُهُ إِلاَّ المَرْضَى"
        }
      ]
    },
    {
      id: 4,
      title: "القِرَاءَةُ: هَيَّا نَعِيْشُ بِالصِّحَّةِ ٢ (Mari Kita Hidup Sehat 2)",
      topic: "الصِّحَّةُ",
      level: "Kelas 11 MA - Bab 2",
      arabicText: `أَنَا أَيُّو وَعِنْدِي صَدِيْقَةٌ اِسْمُهَا رِيْتَا. هِيَ تَغِيْبُ عَنِ المَدْرَسَةِ مُنْذُ ثَلَاثِ أَيَّامٍ. فَأَذْهَبُ إِلَى بَيْتِهَا مَعَ صَدِيْقَاتِي لِزِيَارَتِهَا.

تَقُوْلُ رِيْتَا أَنَّ ضَغْطَ دَمِهَا مُرْتَفِعٌ. هِيَ تَشْعُرُ بِالصُّدَاعِ وَأَلَمٍ فِي صَدْرِهَا وَعَدَمِ وُضُوْحِ رُؤْيَتِهَا. وَهِيَ تَذْهَبُ إِلَى الطَّبِيْبِ فَيَأْمُرُهَا الطَّبِيْبُ أَنْ تَستَلْقِيَ عَلَى السَّرِيْرِ وَيَفْحَصُهَا بِجِهَازِ قِيَاسِ ضَغْطِ الدَّمِ.

تَشْرَحُ رِيْتَا أَنَّ الطَّبِيْبَ يَنْصَحُهَا أَنْ لاَ تَأْكُلَ الطَّعَامَ المَالِحَ أَوِ الحُلْوَ وَالطَّعَامَ المَقْلِيَّ وَاللُّحُوْمَ المُصَنَّعَةَ وَجِلْدَ الدَّجَاجِ وَغَيْرِ ذَلِك. وَيَأْمُرُ الطَّبِيْبُ أَنْ تَشْتَرِيَ الدَّوَاءَ فِي الصَّيْدَلِيَّةِ، وَ يَجِبُ عَلَيْهَا أَنْ تَتَنَاوَلَ الدَّوَاءَ مَرَّةً فِي اليَوْمِ.

وَ يَقُوْلُ الطَّبِيْبُ أَنَّ هُنَاكَ كَثِيْرًا مِنَ الأَطْعِمَةِ الصِّحِّيَّةِ مِثْلَ الفَوَاكِهِ مِنَ الجُوَّافَةِ وَالمَوْزِ وَالبُرْتُقَالِ وَالخَضْرَوَاتِ وَالسَّمَكِ وَاللَّبَنِ المُصَفَّى بِلاَ سُكَّرٍ وَغَيْرِ ذَلِك. نَحْنُ نَرْجِعُ إِلَى البَيْتِ بَعْدَ ذَلِك. وَلاَ نُرِيْدُ أَنْ يُصِيْبَنَا أَيُّ مَرَضٍ مِثْلَ مَا أَصَابَ صَدِيْقَتَنَا رِيْتَا فَنَأْكُلُ كَثِيْرًا مِنَ الفَوَاكِهِ وَالخَضْرَوَاتِ.`,
      indonesianText: `Saya Ayu dan saya memiliki teman bernama Rita. Dia tidak masuk sekolah sejak tiga hari yang lalu. Maka saya pergi ke rumahnya bersama teman-teman saya untuk menjenguknya.

Rita bercerita bahwa tekanan darahnya tinggi. Dia merasakan pusing/sakit kepala, nyeri dada, dan pandangan kabur. Dia pergi ke dokter, lalu dokter menyuruhnya berbaring di atas ranjang dan memeriksanya menggunakan alat tensi tekanan darah.

Rita menjelaskan bahwa dokter menasihatinya agar tidak memakan makanan asin atau manis, makanan gorengan, daging olahan, kulit ayam, dan lain-lain. Dan dokter memerintahkan untuk membeli obat di apotek, serta dia harus meminum obat sekali dalam sehari.

Dan dokter berkata bahwa ada banyak makanan sehat seperti buah jambu klutuk, pisang, jeruk, sayur-sayuran, ikan, dan yogurt tanpa gula, dan lain-lain. Kami pun pulang ke rumah setelah itu. Dan kami tidak ingin terjangkit penyakit apa pun seperti yang dialami sahabat kami Rita, maka kami pun banyak mengonsumsi buah-buahan dan sayur-sayuran.`,
      vocabularyHighlights: [
        { word: "ضَغْطُ دَمِهَا مُرْتَفِعٌ", meaning: "Tekanan darahnya tinggi" },
        { word: "جِهَازُ قِيَاسِ ضَغْطِ الدَّمِ", meaning: "Alat ukur tekanan darah (tensi)" },
        { word: "الطَّعَامُ المَالِحُ", meaning: "Makanan Asin" },
        { word: "اللَّبَنُ المُصَفَّى بِلاَ سُكَّرٍ", meaning: "Yogurt tanpa gula" }
      ],
      questions: [
        {
          q: "لِمَاذَا غَابَتْ رِيْتَا عَنِ الْمَدْرَسَةِ؟",
          options: [
            "لِأَنَّ ضَغْطَ دَمِهَا مُرْتَفِعٌ وَهِيَ مَرِيضَةٌ",
            "لِأَنَّهَا ذَهَبَتْ إِلَى السُّوقِ",
            "لِأَنَّهَا سَافَرَتْ إِلَى يُوْكِيَاكِرْتَا",
            "لِأَنَّهَا تَلْعَبُ كُرَةَ الْقَدَمِ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 2: تَقُوْلُ رِيْتَا أَنَّ ضَغْطَ دَمِهَا مُرْتَفِعٌ"
        },
        {
          q: "مَاذَا نَصَحَ الطَّبِيبُ رِيْتَا أَنْ لاَ تَأْكُلَهُ؟",
          options: [
            "الطَّعَامَ المَالِحَ أَوِ الحُلْوَ وَالمَقْلِيَّ وَاللُّحُوْمَ المُصَنَّعَةَ",
            "الفَوَاكِهَ وَالخَضْرَوَاتِ",
            "السَّمَكَ وَاللَّبَنَ",
            "الْمَاءَ الصَّافِيَ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 3: يَنْصَحُهَا أَنْ لاَ تَأْكُلَ الطَّعَامَ المَالِحَ أَوِ الحُلْوَ وَالمَقْلِيَّ..."
        },
        {
          q: "كَمْ مَرَّةً يَجِبُ عَلَى رِيْتَا تَنَاوُلُ الدَّوَاءِ فِي الْيَوْمِ؟",
          options: [
            "مَرَّةً وَاحِدَةً فِي الْيَوْمِ",
            "ثَلاَثَ مَرَّاتٍ فِي الْيَوْمِ",
            "خَمْسَ مَرَّاتٍ",
            "لاَ تَتَنَاوَلُ الدَّوَاءَ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 3: وَيَجِبُ عَلَيْهَا أَنْ تَتَنَاوَلَ الدَّوَاءَ مَرَّةً فِي اليَوْمِ"
        }
      ]
    },
    {
      id: 5,
      title: "القِرَاءَةُ الأولى: الْحَجُّ وَالْعُمْرَةُ (Haji dan Umrah)",
      topic: "الحَجُّ وَالعُمْرَةُ",
      level: "Kelas 11 MA - Bab 3",
      arabicText: `أَنَا سَلْمَانُ، أَسْكُنُ فِي قَرْيَةٍ صَغِيْرَةٍ فِي سُورَابَايَا، عِنْدِي عَمٌّ اِسْمُهُ أَحْمَدُ، بَيْتُهُ قَرِيْبٌ مِنْ بَيْتِي. وَفِي السَّنَةِ الْمَاضِيَةِ زَارَ عَمِّي مَكَّةَ الْمُكَرَّمَةَ لِلأَدَاءِ الْحَجِّ وَالْعُمْرَةِ. وَأُرِيْدُ السَّمَاعَ إِلَى قِصَّتِهِ، سَائِلاً: يَا عَمِّي مَاذَا فَعَلَ النَّاسُ فِي مَنَاسِكِ الْحَجِّ وَالْعُمْرَةِ؟ وَأَجَابَ عَمِّي: إِذَا أَرَدْتَ الْحَجَّ وَالْعُمْرَةَ...

١. احْرِمْ مِنَ الْمِيقَاتِ الْمُحَدَّدِ لِبِدَايَةِ مَنَاسِكِ الْحَجِّ وَالْعُمْرَةِ وَانْوِ بِالإِحْرَامِ.
٢. اصْعَدْ إِلَى جَبَلِ عَرَفَةَ لِلْوُقُوفِ وَارْمِ الْجَمَرَاتِ الثَّلاَثَةِ فِي مِنًى.
٣. طُفْ حَوْلَ الْكَعْبَةِ الْمُشَرَّفَةِ سَبْعَ مَرَّاتٍ.
٤. اسْعَ بَيْنَ الصَّفَا وَالْمَرْوَةِ سَبْعَ مَرَّاتٍ.
٥. تَحَلَّلْ بِحَلْقِ شَعْرِكَ أَوْ تَقْصِيرِهِ.

سَمِعْتُ إِلَى قِصَّةِ عَمِّي بِكُلِّ اهْتِمَامٍ، ثُمَّ أَسْأَلُهُ لِلْمَرَّةِ الثَّانِيَةِ: يَا عَمِّي، مَاذَا يَجِبُ أَنْ نَتَذَكَّرَ فِي الْعُمْرَةِ؟ فَيَقُولُ: "أَوَّلاً اذْهَبْ لِلْعُمْرَةِ فِي أَيِّ وَقْتٍ مِنَ السَّنَةِ، ثَانِيًا احْرِصْ عَلَى أَدَاءِ مَنَاسِكِ الْعُمْرَةِ بِشَكْلٍ صَحِيْحٍ، وَثَالِثًا استَفِدْ مِنْ تَجْرِبَةِ الْعُمْرَةِ لِتَحْسِينِ حَيَاتِكَ الرُّوحِيَّةِ.
وَأَمَّا الْحَجُّ فَهُوَ رُكْنٌ مِنْ أَرْكَانِ الإِسْلاَمِ الْخَمْسَةِ وَهُوَ وَاجِبٌ عَلَى الْمُسْلِمِينَ الْقَادِرِينَ عَلَيْهِ جَسَدِيًّا وَمَالِيًّا. لِذَا فَلْنُعِدَّ أَنْفُسَنَا عَلَى أَفْضَلِ وَجْهٍ مُمْكِنٍ. أَمَّا مَنْ لَمْ يَسْتَطِعْ، فَلاَ يَيْأَسْ، فَإِنَّ اللهَ عَلِيْمٌ بِنَوَايَا عِبَادِهِ وَسَعْيِهِمْ.`,
      indonesianText: `Saya Salman, saya tinggal di sebuah desa kecil di Surabaya. Saya memiliki seorang paman bernama Ahmad, rumahnya dekat dari rumah saya. Pada tahun lalu, paman saya mengunjungi Makkah Al-Mukarramah untuk menunaikan ibadah haji dan umrah. Saya ingin mendengarkan kisahnya, lalu bertanya: "Wahai Pamanku, apa yang dilakukan orang-orang dalam manasik haji dan umrah?" Pamanku menjawab: "Jika kamu menginginkan haji dan umrah...

1. Berihramlah dari miqat yang ditentukan sebagai awal manasik haji dan umrah dan berniatlah dengan ihram.
2. Naiklah ke Jabal Arafah untuk wukuf dan lemparlah tiga jumrah di Mina.
3. Bertawaflah mengelilingi Ka'bah Al-Musharrafah sebanyak 7 kali.
4. Bersa'ilah antara Shafa dan Marwah sebanyak 7 kali.
5. Bertahallullah dengan mencukur rambutmu atau memotongnya.

Saya mendengarkan cerita pamanku dengan penuh perhatian, kemudian saya bertanya kepadanya untuk kedua kalinya: "Wahai pamanku, apa yang harus kita ingat dalam umrah?" Beliau menjawab: "Pertama, pergilah umrah kapan saja sepanjang tahun. Kedua, berusahalah menunaikan manasik umrah dengan cara yang benar. Dan ketiga, manfaatkan pengalaman umrah untuk memperbaiki kehidupan spiritualmu."

Adapun haji, ia adalah rukun dari rukun Islam yang lima dan hukumnya wajib bagi umat Islam yang mampu secara fisik dan finansial. Oleh karena itu, marilah kita mempersiapkan diri sebaik mungkin. Adapun bagi yang belum mampu, janganlah berkecil hati, karena sesungguhnya Allah Maha Mengetahui niat-niat hamba-Nya dan usaha mereka.`,
      vocabularyHighlights: [
        { word: "أَحْرِمْ مِنَ الْمِيقَاتِ", meaning: "Berihramlah dari miqat" },
        { word: "الْوُقُوفُ بِعَرَفَةَ", meaning: "Wukuf di Arafah" },
        { word: "طُفْ حَوْلَ الْكَعْبَةِ", meaning: "Bertawaflah mengelilingi Ka'bah" },
        { word: "تَحَلَّلْ بِحَلْقِ شَعْرِكَ", meaning: "Bertahallullah dengan mencukur rambut" }
      ],
      questions: [
        {
          q: "أَيْنَ يُحْرِمُ الْحَاجُّ أَوِ الْمُعْتَمِرُ؟",
          options: [
            "مِنَ الْمِيقَاتِ الْمُحَدَّدِ",
            "مِنَ الْبَيْتِ",
            "مِنَ الْمَطَارِ",
            "مِنَ الْمَسْجِدِ النَّبَوِيِّ"
          ],
          correct: 0,
          explanation: "Sesuai poin 1: أَحْرِمْ مِنَ الْمِيقَاتِ الْمُحَدَّدِ"
        },
        {
          q: "كَمْ مَرَّةً يَطُوفُ الْحَاجُّ حَوْلَ الْكَعْبَةِ؟",
          options: [
            "سَبْعَ مَرَّاتٍ",
            "ثَلاَثَ مَرَّاتٍ",
            "خَمْسَ مَرَّاتٍ",
            "مَرَّةً وَاحِدَةً"
          ],
          correct: 0,
          explanation: "Sesuai poin 3: طُفْ حَوْلَ الْكَعْبَةِ الْمُشَرَّفَةِ سَبْعَ مَرَّاتٍ"
        },
        {
          q: "عَلَى مَنْ يَجِبُ الْحَجُّ فِي الإِسْلاَمِ؟",
          options: [
            "عَلَى الْمُسْلِمِينَ الْقَادِرِينَ عَلَيْهِ جَسَدِيًّا وَمَالِيًّا",
            "عَلَى كُلِّ فَقِيرٍ",
            "عَلَى الأَطْفَالِ الصِّغَارِ",
            "عَلَى مَنْ لاَ يَسْتَطِيعُ السَّفَرَ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf akhir: وَهُوَ وَاجِبٌ عَلَى الْمُسْلِمِينَ الْقَادِرِينَ عَلَيْهِ جَسَدِيًّا وَمَالِيًّا"
        }
      ]
    },
    {
      id: 6,
      title: "القِرَاءَةُ الثَّانِيَةُ: الْعُمْرَةُ فِي رَمَضَانَ (Umrah di Bulan Ramadan)",
      topic: "الحَجُّ وَالعُمْرَةُ",
      level: "Kelas 11 MA - Bab 3",
      arabicText: `فَاتِحٌ : سَمِعْتُ أَنَّ الْعُمْرَةَ فِي رَمَضَانَ لَهَا فَضْلٌ كَبِيْرٌ، هَلْ هَذَا صَحِيْحٌ؟
فَاطِمَةُ : نَعَمْ صَحِيْحٌ. قَالَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: "عُمْرَةٌ فِي رَمَضَانَ تَعْدِلُ حَجَّةً"
فَاتِحٌ : هَلْ هَذَا يَعْنِي أَنَّهَا تُبْدِلُ الْحَجَّ؟
فَاطِمَةُ : لاَ، أَجْرُهَا يُعَادِلُ أَجْرَ الْحَجِّ لَكِنَّهَا لاَ تُبْدِلُ فَرِيْضَةَ الْحَجِّ.
فَاتِحٌ : وَلِمَاذَا لَهَا فَضْلٌ كَبِيْرٌ فِي رَمَضَانَ؟
فَاطِمَةُ : لِأَنَّ رَمَضَانَ شَهْرُ الْبَرَكَةِ. كُلُّ الْعِبَادَاتِ فِيْهِ مُضَاعَفَةُ الأَجْرِ. وَالْعُمْرَةُ تُقَرِّبُكَ إِلَى اللهِ وَتُكَفِّرُ الذُّنُوْبَ.
فَاتِحٌ : هَذَا مُذْهِلٌ، سَأُفَكِّرُ جِدِّيًّا فِي أَدَاءِ الْعُمْرَةِ فِي رَمَضَانَ الْمُقْبِلِ إِنْ شَاءَ اللهُ.`,
      indonesianText: `Fatih: Saya mendengar bahwa umrah di bulan Ramadan memiliki keutamaan yang sangat besar, apakah ini benar?
Fatima: Ya, benar. Nabi SAW bersabda: "Umrah di bulan Ramadan nilainya setara dengan ibadah haji".
Fatih: Apakah ini berarti umrah Ramadan dapat menggantikan kewajiban haji?
Fatima: Tidak, pahalanya menyamai pahala haji tetapi tidak menggantikan kewajiban ibadah haji.
Fatih: Mengapa umrah memiliki keutamaan besar di bulan Ramadan?
Fatima: Karena Ramadan adalah bulan keberkahan. Semua ibadah di dalamnya dilipatgandakan pahalanya. Dan umrah mendekatkan dirimu kepada Allah serta menghapus dosa-dosa.
Fatih: Ini sungguh luar biasa, saya akan berpikir serius untuk menunaikan umrah pada Ramadan mendatang, insya Allah.`,
      vocabularyHighlights: [
        { word: "عُمْرَةٌ فِي رَمَضَانَ تَعْدِلُ حَجَّةً", meaning: "Umrah Ramadan nilainya setara haji" },
        { word: "أَجْرُهَا يُعَادِلُ أَجْرَ الْحَجِّ", meaning: "Pahala umrah menyamai pahala haji" },
        { word: "مُضَاعَفَةُ الأَجْرِ", meaning: "Pahala yang dilipatgandakan" },
        { word: "تُكَفِّرُ الذُّنُوْبَ", meaning: "Menghapus dosa-dosa" }
      ],
      questions: [
        {
          q: "مَاذَا قَالَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ عَنِ الْعُمْرَةِ فِي رَمَضَانَ؟",
          options: [
            "عُمْرَةٌ فِي رَمَضَانَ تَعْدِلُ حَجَّةً",
            "الْعُمْرَةُ غَيْرُ مُسْتَحَبَّةٍ فِي رَمَضَانَ",
            "الْعُمْرَةُ تُكَرَّهُ فِي رَمَضَانَ",
            "لاَ فَضْلَ لِلْعُمْرَةِ فِي رَمَضَانَ"
          ],
          correct: 0,
          explanation: "Sesuai sabda Nabi SAW: عُمْرَةٌ فِي رَمَضَانَ تَعْدِلُ حَجَّةً"
        },
        {
          q: "هَلْ تُبْدِلُ عُمْرَةُ رَمَضَانَ فَرِيْضَةَ الْحَجِّ؟",
          options: [
            "لاَ، أَجْرُهَا يُعَادِلُ أَجْرَ الْحَجِّ لَكِنَّهَا لاَ تُبْدِلُ فَرِيْضَةَ الْحَجِّ",
            "نَعَمْ، تُبْدِلُ فَرِيْضَةَ الْحَجِّ تَمَامًا",
            "نَعَمْ، لِمَنْ كَانَ فَقِيرًا فَقَطْ",
            "لاَ أَجْرَ لَهَا"
          ],
          correct: 0,
          explanation: "Penjelasan Fatima: لاَ، أَجْرُهَا يُعَادِلُ أَجْرَ الْحَجِّ لَكِنَّهَا لاَ تُبْدِلُ فَرِيْضَةَ الْحَجِّ"
        }
      ]
    },
    {
      id: 7,
      title: "القِرَاءَةُ: الأَدْيَانُ فِي إِنْدُونِيسِيَا (Agama-agama di Indonesia)",
      topic: "الأَدْيَانُ فِي إِنْدُونِيسِيَا",
      level: "Kelas 11 MA - Bab 4",
      arabicText: `خَالِدٌ تَاِجِرٌ مُسْلِمٌ، هُوَ يَسْكُنُ فِي جُومْبَانْج (Jombang)، بَيْتُهُ قَرِيبٌ مِنَ الْمَسْجِدِ، يَذْهَبُ خَالِدٌ إِلَى الْمَسْجِدِ كُلَّ يَوْمٍ لِلأَدَاءِ صَلَاةِ الْفَرْضِ. هُوَ مُسْلِمٌ مُطِيعٌ. وَالإِسْلَامُ هُوَ الدِّينُ الأَكْثَرُ انْتِشَارًا فِي إِندُونِيسِيَا حَيْثُ يَتْبَعُهُ حَوَالَى ٨٧,٢ % مِنَ السُّكَّانِ.

لِخَالِدٍ جَارٌ اِسْمُهُ سُونَاَرْطُو. هُوَ جَارٌ بُوذِيٌّ. الْبُوذِيَّةُ هُوَ دِينٌ قَدِيمٌ فِي إِندُونِيسِيَا حَيْثُ يَتْبَعُهَا حَوَالَى ٠,٧ % مِنَ السُّكَّانِ. يَتَعَبَّدُ سُونَاَرْطُو فِي مَعْبَدٍ بَعِيدٍ عَنْ بَيْتِهِ يُسَمَّى بِمَعْبَدِ "هُوكْ لِيُؤْنْج كِيُؤْنْج" (Hok Liong Kiong). هُوَ مَعْبَدٌ جَمِيلٌ فِي وَسَطِ مَدِينَةِ جُومْبَانْج. يُزَيَّنُ الْمَعْبَدُ بِأَلْوَانٍ مُتَنَوِّعَةٍ مِنَ الأَحْمَرِ وَالأَصْفَرِ وَالأَخْضَرِ.

لِخَالِدٍ جَارٌ آخَرُ اِسْمُهُ فْرَانْسِيسْكُوسْ، هُوَ جَارٌ بُرُوتِسْتَانِيٌّ. الْبُرُوتِسْتَانْتِيَّةُ هُوَ دِينٌ ثَالِثٌ أَكْبَرُ فِي إِندُونِيسِيَا حَيْثُ يَتْبَعُهَا حَوَالَى ٦,٩ % مِنَ السُّكَّانِ. يَتَعَبَّدُ فْرَانْسِيسْكُوسْ فِي الْكَنِيسَةِ فِي جُومْبَانْج.

يَسْكُنُ خَالِدٌ وَسُونَاَرْطُو وَفْرَانْسِيسْكُوسْ فِي سِلْمٍ وَتَسَامُحٍ، وَيَحْتَرِمُ بَعْضُهُمْ بَعْضًا. فَالَتَّسَامُحُ هُوَ مَبْدَأٌ أَسَاسِيٌّ فِي إِندُونِيسِيَا، يُشَجِّعُ عَلَى الإِحْتِرَامِ الْمُتَبَادَلِ وَالتَّفَاهُمِ فِي الاِخْتِلَافِ بَيْنَ الْمُعْتَقَدَاتِ الدِّينِيَّةِ.
وَالأَدْيَانُ الرَّسْمِيَّةُ فِي إِندُونِيسِيَا هِيَ: الإِسْلَامُ، وَالْكَاثُولِيكِيَّةُ، وَالْبُرُوتِسْتَانْتِيَّةُ، وَالْهِنْدُوسِيَّةُ، وَالْبُوذِيَّةُ، وَالْكُونْفُوشِيَّةُ.`,
      indonesianText: `Khalid adalah seorang pedagang Muslim, ia tinggal di Jombang. Rumahnya dekat dari masjid. Khalid pergi ke masjid setiap hari untuk menunaikan shalat fardhu. Ia adalah seorang Muslim yang taat. Dan Islam adalah agama yang paling meluas penyebarannya di Indonesia di mana dianut oleh sekitar 87,2 % dari penduduk.

Khalid memiliki seorang tetangga bernama Sunarto. Ia adalah tetangga seorang Buddhis. Agama Buddha adalah agama kuno di Indonesia di mana dianut oleh sekitar 0,7 % dari penduduk. Sunarto beribadah di sebuah klenteng/tempat ibadah yang jauh dari rumahnya bernama Klenteng "Hok Liong Kiong". Itu adalah tempat ibadah yang indah di pusat kota Jombang. Klenteng tersebut dihiasi dengan beraneka warna dari merah, kuning, dan hijau.

Khalid memiliki tetangga lain bernama Fransiskus, ia adalah tetangga seorang Protestan. Agama Protestan adalah agama terbesar ketiga di Indonesia di mana dianut oleh sekitar 6,9 % dari penduduk. Fransiskus beribadah di gereja di Jombang.

Khalid, Sunarto, dan Fransiskus tinggal dalam kedamaian dan toleransi, serta saling menghormati satu sama lain. Maka toleransi adalah prinsip mendasar di Indonesia, yang menggalakkan penghormatan timbal balik dan saling memahami dalam perbedaan antar keyakinan beragama.

Dan agama-agama resmi di Indonesia yaitu: Islam, Katolik, Protestan, Hindu, Buddha, dan Khonghucu.`,
      vocabularyHighlights: [
        { word: "الدِّينُ الأَكْثَرُ انْتِشَارًا", meaning: "Agama yang paling meluas penyebarannya" },
        { word: "مَعْبَدُ هُوكْ لِيُؤْنْج كِيُؤْنْج", meaning: "Klenteng Hok Liong Kiong (Jombang)" },
        { word: "سِلْمٍ وَتَسَامُحٍ", meaning: "Kedamaian dan toleransi" },
        { word: "الإِحْتِرَامُ الْمُتَبَادَلُ", meaning: "Saling menghormati / Penghormatan timbal balik" }
      ],
      questions: [
        {
          q: "أَيْنَ يَسْكُنُ خَالِدٌ وَكَمْ نِسْبَةُ الْمُسْلِمِينَ فِي إِندُونِيسِيَا؟",
          options: [
            "يَسْكُنُ فِي جُومْبَانْج وَنِسْبَةُ الْمُسْلِمِينَ ٨٧,٢ %",
            "يَسْكُنُ فِي سُورَابَايَا وَنِسْبَةُ الْمُسْلِمِينَ ٥٠ %",
            "يَسْكُنُ فِي جَاكَرْتَا وَنِسْبَةُ الْمُسْلِمِينَ ١٠ %",
            "يَسْكُنُ فِي بَالِي"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 1: يَسْكُنُ فِي جُومْبَانْج... حَيْثُ يَتْبَعُهُ حَوَالَى ٨٧,٢ %"
        },
        {
          q: "مَا اسْمُ الْمَعْبَدِ الَّذِي يَتَعَبَّدُ فِيهِ سُونَاَرْطُو فِي جُومْبَانْج؟",
          options: [
            "مَعْبَدُ هُوكْ لِيُؤْنْج كِيُؤْنْج (Hok Liong Kiong)",
            "فُورَا بَسَاكِيْه",
            "الْمَسْجِدُ الْكَبِيرُ",
            "كَنِيسَةُ جُومْبَانْج"
          ],
          correct: 0,
          explanation: "Sesuai paragraf 2: يُسَمَّى بِمَعْبَدِ \"هُوكْ لِيُؤْنْج كِيُؤْنْج\" (Hok Liong Kiong)"
        },
        {
          q: "مَا هِيَ الأَدْيَانُ الرَّسْمِيَّةُ فِي إِندُونِيسِيَا؟",
          options: [
            "الإِسْلَامُ، وَالْكَاثُولِيكِيَّةُ، وَالْبُرُوتِسْتَانْتِيَّةُ، وَالْهِنْدُوسِيَّةُ، وَالْبُوذِيَّةُ، وَالْكُونْفُوشِيَّةُ",
            "الإِسْلَامُ فَقَطْ",
            "الْبُوذِيَّةُ وَالْهِنْدُوسِيَّةُ فَقَطْ",
            "ثَلاَثَةُ أَدْيَانٍ فَقَطْ"
          ],
          correct: 0,
          explanation: "Sesuai paragraf akhir: وَالأَدْيَانُ الرَّسْمِيَّةُ فِي إِندُونِيسِيَا هِيَ: الإِسْلَامُ، وَالْكَاثُولِيكِيَّةُ، وَالْبُرُوتِسْتَانْتِيَّةُ، وَالْهِنْدُوسِيَّةُ، وَالْبُوذِيَّةُ، وَالْكُونْفُوشِيَّةُ."
        }
      ]
    }
  ],

  kalam: [
    {
      id: 1,
      title: "الحِوَارُ الأَوَّلُ : قَضَاءُ العُطْلَةِ (Percakapan 1: Mengisi Liburan)",
      description: "Bab 1: Dialog antara Salim (سالم) dan Nabil (نبيل) mengenai pengalaman liburan ke rumah kakek di Sukoharjo.",
      avatarBuyer: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "سَالِمٌ (Salim)", arabic: "السَّلَامُ عَلَيْكُمْ", indo: "Assalamu'alaikum" },
        { speaker: "نَبِيْلٌ (Nabil)", arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ", indo: "Wa'alaikumussalam warahmatullah" },
        { speaker: "سَالِمٌ (Salim)", arabic: "أَيْنَ قَضَيْتَ أَيَّامَ العُطْلَةِ المَاضِيَةِ يَا نَبِيْلُ؟", indo: "Di mana kamu menghabiskan hari-hari liburan lalu, wahai Nabil?" },
        { speaker: "نَبِيْلٌ (Nabil)", arabic: "قَضَيْتُهَا فِي بَيْتِ جَدِّي فِي سُوْكُوْهَارْجُوْ (Sukoharjo)", indo: "Saya menghabiskan liburan di rumah kakekku di Sukoharjo." },
        { speaker: "سَالِمٌ (Salim)", arabic: "بِمَ وَمَتَى ذَهَبْتَ هُنَاكَ؟", indo: "Naik apa dan kapan kamu pergi ke sana?" },
        { speaker: "نَبِيْلٌ (Nabil)", arabic: "ذَهَبْتُ هُنَاكَ بِالقِطَارِ فِي أُسْبُوْعَيْنِ مَاضِيَيْنِ", indo: "Saya pergi ke sana naik kereta api dua minggu yang lalu." },
        { speaker: "سَالِمٌ (Salim)", arabic: "كَمْ يَوْمًا مَكَّثْتَ هُنَاكَ؟", indo: "Berapا hari kamu tinggal di sana?" },
        { speaker: "نَبِيْلٌ (Nabil)", arabic: "مَكَّثْتُ هُنَاكَ ثَلَاثَةَ أَيَّامٍ", indo: "Saya tinggal di sana selama tiga hari." },
        { speaker: "سَالِمٌ (Salim)", arabic: "عُطْلَةٌ سَعِيْدَةٌ", indo: "Selamat berlibur! / Semoga liburanmu menyenangkan." },
        { speaker: "نَبِيْلٌ (Nabil)", arabic: "شُكْرًا", indo: "Terima kasih." }
      ]
    },
    {
      id: 2,
      title: "الحِوَارُ الثَّانِي : زِيَارَةُ غَارِ فِيْنْدُوْل (Percakapan 2: Wisata Goa Pindul)",
      description: "Bab 1: Dialog antara Fakhri (فخري) dan Naufal (نوفل) mengenai wisata susur gua (Goa Pindul) di Yogyakarta.",
      avatarBuyer: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "فَخْرِي (Fakhri)", arabic: "مَاذَا فَعَلْتَ أَيَّامَ عُطْلَتِكَ يَا نَوْفَلُ؟", indo: "Apa yang kamu lakukan pada hari-hari liburanmu, wahai Naufal?" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "ذَهَبْتُ إِلَى غَارِ فِيْنْدُوْل (Goa Pindul) فِي يُوْكِيَاكِرْتَا", indo: "Saya pergi ke Goa Pindul di Yogyakarta." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "مَاذَا وَجَدْتَ هُنَاكَ؟", indo: "Apa yang kamu temukan di sana?" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "هُنَاكَ نَهْرٌ تَحْتَ الغَارِ حَوَالَى ٣٥٠ مِتْرًا وَعِرْضُهُ حَوَالَى خَمْسَةِ أَمْتَارٍ. وَفِي النَّهْرِ اسْتَطَاعَ النَّاسُ التَّزَحْلُفَ بِاسْتِخْدَامِ الإِطَارَاتِ. وَهُوَ مَشْهُوْرٌ بِأَنَّهُ مَكَانٌ سِيَاحِيٌّ جَمِيْلٌ فِي يُوْكِيَاكِرْتَا.", indo: "Di sana ada sungai di bawah gua sepanjang sekitar 350 meter dan lebarnya 5 meter. Di sungai orang-orang bisa susur sungai menggunakan ban pelampung. Tempat itu sangat terkenal sebagai wisata indah di Yogyakarta." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "لِمَاذَا ذَهَبْتَ هُنَاكَ؟", indo: "Mengapa kamu pergi ke sana?" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "لِأَنَّ بَيْتَ جَدِّي قَرِيْبٌ مِنْ غَارِ فِيْنْدُوْل. إِسْتَغْرَقَ الذَّهَابُ إِلَى هُنَاكَ حَوَالَى سَاعَةٍ وَاحِدَةٍ بِالسَّيَّارَةِ أَوْ بِالدَّرَّاجَةِ النَّارِيَّةِ.", indo: "Karena rumah kakekku dekat dari Goa Pindul. Perjalanan ke sana memakan waktu sekitar satu jam menggunakan mobil atau sepeda motor." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "بِكَمْ تَذْكِرَةُ الدُّخُوْلِ؟", indo: "Berapa harga tiket masuknya?" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "بِخَمْسِيْنَ أَلْفَ رُوْبِيَّةٍ", indo: "Lima puluh ribu rupiah." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "سِيَاحَةٌ رَائِعَةٌ وَمُمْتِعَةٌ", indo: "Wisata yang luar biasa dan sungguh menyenangkan!" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "شُكْرًا", indo: "Terima kasih." }
      ]
    },
    {
      id: 3,
      title: "الحِوَارُ الثَّالِثُ : فِي الْمُسْتَشْفَى (Di Rumah Sakit)",
      description: "Bab 2 (الصِّحَّةُ): Dialog antara Dokter Wanita (الطَّبِيبَةُ) dan Hasan (حَسَنٌ) saat konsultasi penyakit sakit kepala dan tekanan darah.",
      avatarBuyer: "https://images.unsplash.com/photo-1594824813566-78a9c3621422?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "الطَّبِيبَةُ (Dokter Wanita)", arabic: "السَّلاَمُ عَلَيْكُمْ، مَاذَا بِكَ يَا سَيِّدِي؟", indo: "Assalamu'alaikum, ada keluhan apa wahai Pak?" },
        { speaker: "حَسَنٌ (Hasan)", arabic: "وَ عَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ، أَصَابَنِي الصُّدَاعُ.", indo: "Wa'alaikumussalam warahmatullah, saya merasa sakit kepala / pusing." },
        { speaker: "الطَّبِيبَةُ (Dokter Wanita)", arabic: "كَمْ يَوْمًا تَشْعُرُ بِهِ؟", indo: "Sudah berapa hari Anda merasakannya?" },
        { speaker: "حَسَنٌ (Hasan)", arabic: "مُنْذُ ثَلاَثَةِ أَيَّامٍ.", indo: "Sejak tiga hari yang lalu." },
        { speaker: "الطَّبِيبَةُ (Dokter Wanita)", arabic: "تَفَضَّلْ، اسْتَلْقِ عَلَى السَّرِيرِ لِلْفَحْصِ.", indo: "Silakan berbaring di atas tempat tidur untuk pemeriksaan." },
        { speaker: "حَسَنٌ (Hasan)", arabic: "حَسَنًا يَا سَيِّدَتِي.", indo: "Baik, Dok." },
        { speaker: "الطَّبِيبَةُ (Dokter Wanita)", arabic: "ضَغْطُ دَمِكَ مُرْتَفِعٌ، عَلَيْكَ أَنْ تَجْتَنِبَ الأَطْعِمَةَ الْمَالِحَةَ وَالْحُلْوَةَ. هَذِهِ هِيَ الْوَصْفَةُ مِنِّي.", indo: "Tekanan darah Anda tinggi, Anda harus menghindari makanan asin dan manis. Ini dia resep obat dari saya." },
        { speaker: "حَسَنٌ (Hasan)", arabic: "طَيِّبٌ، سَأَشْتَرِي الدَّوَاءَ فِي الصَّيْدَلِيَّةِ، شُكْرًا.", indo: "Baik, saya akan membeli obat di apotek, terima kasih." },
        { speaker: "الطَّبِيبَةُ (Dokter Wanita)", arabic: "عَفْوًا، شَفَاكَ اللهُ.", indo: "Sama-sama, semoga Allah memberi Anda kesembuhan." }
      ]
    },
    {
      id: 4,
      title: "الحِوَارُ الرَّابِعُ : فِي الصَّيْدَلِيَّةِ (Di Apotek)",
      description: "Bab 2 (الصِّحَّةُ): Dialog antara Apoteker (الصَّيْدَلِيُّ) dan Pasien (الْمَرِيضُ) saat menebus resep obat untuk penyakit tekanan darah.",
      avatarBuyer: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "الصَّيْدَلِيُّ (Apoteker)", arabic: "السَّلاَمُ عَلَيْكُمْ، أَيُّ خِدْمَةٍ؟", indo: "Assalamu'alaikum, ada yang bisa saya bantu?" },
        { speaker: "الْمَرِيضُ (Pasien)", arabic: "وَ عَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ، أَنَا بِحَاجَةٍ إِلَى الدَّوَاءِ.", indo: "Wa'alaikumussalam warahmatullah, saya butuh obat." },
        { speaker: "الصَّيْدَلِيُّ (Apoteker)", arabic: "أَيُّ مَرَضٍ أَصَابَكَ؟", indo: "Penyakit apa yang Anda alami?" },
        { speaker: "الْمَرِيضُ (Pasien)", arabic: "ضَغْطُ الدَّمِ.", indo: "Tekanan darah tinggi." },
        { speaker: "الصَّيْدَلِيُّ (Apoteker)", arabic: "حَسَنًا، أَيْنَ الْوَصْفَةُ الطِّبِّيَّةُ؟", indo: "Baik, mana resep dokternya?" },
        { speaker: "الْمَرِيضُ (Pasien)", arabic: "هَذِهِ هِيَ الْوَصْفَةُ.", indo: "Ini resepnya." },
        { speaker: "الصَّيْدَلِيُّ (Apoteker)", arabic: "هَلْ لَدَيْكَ أَيُّ حَسَاسِيَّةٍ مِنَ الأَدْوِيَةِ؟", indo: "Apakah Anda memiliki alergi terhadap obat-obatan?" },
        { speaker: "الْمَرِيضُ (Pasien)", arabic: "لاَ، لاَ أَعْتَقِدُ ذَلِكَ.", indo: "Tidak, saya rasa tidak ada." },
        { speaker: "الصَّيْدَلِيُّ (Apoteker)", arabic: "طَيِّبٌ، هَذَا هُوَ الدَّوَاءُ، يَجِبُ عَلَيْكَ تَنَاوُلُهُ مَرَّةً فِي الْيَوْمِ، أَتَمَنَّى لَكُمُ الشِّفَاءَ الْعَاجِلَ.", indo: "Baik, ini obatnya, Anda harus meminumnya sekali dalam sehari. Saya mendoakan semoga Anda lekas sembuh." },
        { speaker: "الْمَرِيضُ (Pasien)", arabic: "شُكْرًا جَزِيلاً، أَتَمَنَّى لَكَ التَّوْفِيقَ فِي الْعَمَلِ.", indo: "Terima kasih banyak, semoga Anda sukses dalam bekerja." },
        { speaker: "الصَّيْدَلِيُّ (Apoteker)", arabic: "لاَ شُكْرَ عَلَى الْوَاجِبِ.", indo: "Sama-sama, sudah menjadi kewajiban saya." }
      ]
    },
    {
      id: 5,
      title: "الحِوَارُ الْخَامِسُ : الْكَعْبَةُ الْمُشَرَّفَةُ (Percakapan 1 Bab 3: Ka'bah Al-Musharrafah)",
      description: "Bab 3 (الحَجُّ وَالعُمْرَةُ): Dialog antara Fakhri (فَخْرِي) dan Aisyah (عَائِشَةُ) mengenai keutamaan Ka'bah, kiblat umat Islam, dan tata cara tawaf di sekeliling Ka'bah.",
      avatarBuyer: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "فَخْرِي (Fakhri)", arabic: "السَّلاَمُ عَلَيْكُمْ", indo: "Assalamu'alaikum." },
        { speaker: "عَائِشَةُ (Aisyah)", arabic: "وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ", indo: "Wa'alaikumussalam warahmatullah." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "هَلْ تَعْرِفِينَ أَنَّ الْكَعْبَةَ الْمُشَرَّفَةَ مَرْكَزُ عِبَادَةِ الْمُسْلِمِينَ؟", indo: "Apakah kamu tahu bahwa Ka'bah Al-Musharrafah adalah pusat ibadah umat Islam?" },
        { speaker: "عَائِشَةُ (Aisyah)", arabic: "نَعَمْ عَرَفْتُهَا. نَتَوَجَّهُ إِلَى الْكَعْبَةِ الْمُشَرَّفَةِ فِي كُلِّ صَلاَةٍ لِأَنَّهَا قِبْلَةُ الْمُسْلِمِينَ.", indo: "Ya, saya mengetahuinya. Kita menghadap ke Ka'bah Al-Musharrafah dalam setiap shalat karena ia adalah kiblat umat Islam." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "وَمَاذَا يَنْبَغِي أَنْ نَفْعَلَ أَمَامَ الْكَعْبَةِ إِذَا كُنَّا فِي الْحَجِّ؟", indo: "Dan apa yang seyogyanya kita lakukan di depan Ka'bah jika kita sedang menunaikan ibadah haji?" },
        { speaker: "عَائِشَةُ (Aisyah)", arabic: "تَوَجَّهْ إِلَى الْحَجَرِ الأَسْوَدِ وَاسْتَلِمْهُ بِيَدِكَ أَوْ أَشِرْ إِلَيْهِ.", indo: "Menghadaplah ke Hajar Aswad dan usap/sentuhlah dengan tanganmu atau berilah isyarat padanya." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "ثُمَّ مَاذَا؟", indo: "Lalu apa lagi?" },
        { speaker: "عَائِشَةُ (Aisyah)", arabic: "طُفْ بِالْكَعْبَةِ سَبْعَةَ أَشْوَاطٍ، وَادْعُ اللهَ خِلاَلَ الطَّوَافِ.", indo: "Bertawaflah mengelilingi Ka'bah sebanyak 7 putaran, dan berdoalah kepada Allah selama tawaf." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "هَلْ هُنَاكَ شَيْءٌ مُهِمٌّ آخَرُ عَنِ الْكَعْبَةِ؟", indo: "Apakah ada hal penting lain tentang Ka'bah?" },
        { speaker: "عَائِشَةُ (Aisyah)", arabic: "إِنَّهَا بَيْتُ اللهِ الْحَرَامُ وَأَوَّلُ بَيْتٍ وُضِعَ لِلنَّاسِ لِعِبَادَةِ اللهِ.", indo: "Sesungguhnya Ka'bah adalah Baitullah Al-Haram dan rumah pertama yang dibangun bagi manusia untuk beribadah kepada Allah." },
        { speaker: "فَخْرِي (Fakhri)", arabic: "حَسَنًا.", indo: "Baiklah." }
      ]
    },
    {
      id: 6,
      title: "الحِوَارُ السَّادِسُ : الْحَجَرُ الأَسْوَدُ (Percakapan 2 Bab 3: Hajar Aswad)",
      description: "Bab 3 (الحَجُّ وَالعُمْرَةُ): Dialog antara Khalidah (خَالِدَةُ) dan Naufal (نَوْفَلٌ) mengenai tata cara mengusap/memberi isyarat pada Hajar Aswad serta sejarah keutamaannya.",
      avatarBuyer: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "خَالِدَةُ (Khalidah)", arabic: "يَا نَوْفَلُ نَحْنُ قَرِيبُونَ مِنَ الْحَجَرِ الأَسْوَدِ، مَاذَا أَفْعَلُ؟", indo: "Wahai Naufal, kita sudah dekat dari Hajar Aswad, apa yang harus aku lakukan?" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "تَقَدَّمِي إِلَيْهِ وَاسْتَلِمِيهِ إِنِ اسْتَطَعْتِ، فَإِنْ لَمْ تَسْتَطِيعِي وَكُنْتِ بَعِيدَةً فَأَشِيرِي إِلَيْهِ بِيَدِكِ.", indo: "Majulah mendekatinya dan usaplah jika kamu mampu, namun jika kamu tidak mampu dan berada jauh, maka berilah isyarat melambaikan tanganmu ke arahnya." },
        { speaker: "خَالِدَةُ (Khalidah)", arabic: "ثُمَّ مَاذَا أَفْعَلُ بَعْدَ ذَلِكَ؟", indo: "Lalu apa yang harus aku lakukan setelah itu?" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "تَابِعِي طَوَافَكِ وَادْعِي اللهَ بِمَا شِئْتِ.", indo: "Lanjutkan tawafmu dan berdoalah kepada Allah dengan doa apa pun yang kamu kehendaki." },
        { speaker: "خَالِدَةُ (Khalidah)", arabic: "هَلْ هُنَاكَ شَيْءٌ آخَرُ عَنِ الْحَجَرِ الأَسْوَدِ؟", indo: "Apakah ada hal lain tentang Hajar Aswad?" },
        { speaker: "نَوْفَلٌ (Naufal)", arabic: "تَذَكَّرِي أَنَّ الْحَجَرَ الأَسْوَدَ قِطْعَةٌ مِنَ الْجَنَّةِ. وَكَانَ نَاصِعَ الْبَيَاضِ عِنْدَمَا نَزَلَ إِلَى الأَرْضِ، وَلَكِنَّهُ اسْوَدَّ بِسَبَبِ خَطَايَا الْبَشَرِ.", indo: "Ingatlah bahwa Hajar Aswad adalah batu dari surga. Dulunya berwarna putih bersih ketika diturunkan ke bumi, akan tetapi ia menjadi hitam disebabkan dosa-dosa manusia." },
        { speaker: "خَالِدَةُ (Khalidah)", arabic: "طَيِّبٌ يَا نَوْفَلُ.", indo: "Baik wahai Naufal." }
      ]
    },
    {
      id: 7,
      title: "الحِوَارُ السَّابِعُ : تَنَوُّعُ الأَدْيَانِ فِي إِنْدُونِيسِيَا (Percakapan 1 Bab 4: Keberagaman Agama di Indonesia)",
      description: "Bab 4 (الأَدْيَانُ فِي إِنْدُونِيسِيَا): Dialog antara Ruqayyah (رُقَيَّةُ) dan Ibrahim (إِبْرَاهِيمُ) mengenai keutamaan keberagaman agama di Indonesia, nilai Pancasila, dan toleransi beragama.",
      avatarBuyer: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "رُقَيَّةُ (Ruqayyah)", arabic: "السَّلاَمُ عَلَيْكُمْ يَا إِبْرَاهِيمُ، كَيْفَ حَالُكَ الْيَوْمَ؟", indo: "Assalamu'alaikum wahai Ibrahim, bagaimana kabarmu hari ini?" },
        { speaker: "إِبْرَاهِيمُ (Ibrahim)", arabic: "وَعَلَيْكُمُ السَّلاَمُ يَا رُقَيَّةُ، اَلْحَمْدُ لِلَّهِ، وَأَنْتِ كَيْفَ الْحَالُ؟", indo: "Wa'alaikumussalam wahai Ruqayyah, alhamdulillah. Dan kamu bagaimana kabarmu?" },
        { speaker: "رُقَيَّةُ (Ruqayyah)", arabic: "بِخَيْرٍ وَالْحَمْدُ لِلَّهِ. كُنْتُ أُفَكِّرُ فِي تَنَوُّعِ الأَدْيَانِ فِي إِنْدُونِيسِيَا.", indo: "Baik, alhamdulillah. Saya tadi sedang memikirkan keberagaman agama di Indonesia." },
        { speaker: "إِبْرَاهِيمُ (Ibrahim)", arabic: "نَعَمْ، إِنَّهُ أَمْرٌ رَائِعٌ. هُنَاكَ الْمُسْلِمُونَ وَالْمَسِيحِيُّونَ وَالْهِنْدُوسِيُّونَ وَالْبُوذِيُّونَ وَالْكُونْفُوشِيُّونَ يَعِيشُونَ فِي سَلاَمٍ.", indo: "Ya, itu adalah hal yang luar biasa. Di sana umat Islam, Kristen, Hindu, Buddha, dan Khonghucu hidup dalam kedamaian." },
        { speaker: "رُقَيَّةُ (Ruqayyah)", arabic: "صَحِيحٌ، وَأَنَا مُعْجَبَةٌ جِدًّا بِكَيْفِيَّةِ احْتِرَامِ الْجَمِيعِ لِمُعْتَقَدَاتِ الآخَرِينَ.", indo: "Benar, dan saya sangat kagum dengan bagaimana semua orang menghormati keyakinan orang lain." },
        { speaker: "إِبْرَاهِيمُ (Ibrahim)", arabic: "هَذَا جُزْءٌ مُهِمٌّ مِنْ قِيَمِ \"بَانْتَجَاسِيلاَ\"، حَيْثُ يُشَجِّعُ النَّاسُ عَلَى الْوَحْدَةِ فِي التَّنَوُّعِ.", indo: "Ini adalah bagian penting dari nilai-nilai \"Pancasila\", di mana mendorong masyarakat pada persatuan dalam keberagaman." },
        { speaker: "رُقَيَّةُ (Ruqayyah)", arabic: "طَبْعًا، التَّسَامُحُ هُوَ مِفْتَاحُ السَّلاَمِ فِي مَجْتَمَعِنَا.", indo: "Tentu saja, toleransi adalah kunci kedamaian dalam masyarakat kita." }
      ]
    },
    {
      id: 8,
      title: "الحِوَارُ الثَّامِنُ : مَكَانُ الْعِبَادَةِ (Percakapan 2 Bab 4: Tempat Ibadah & Toleransi)",
      description: "Bab 4 (الأَدْيَانُ فِي إِنْدُونِيسِيَا): Dialog antara Marwan (مَرْوَانُ) dan Anisah (أَنِيْسَةُ) mengenai tempat-tempat ibadah (Vihara, Pura, Masjid) dan etika berhubungan dengan non-Muslim secara sosial.",
      avatarBuyer: "https://images.unsplash.com/photo-1594824813566-78a9c3621422?q=80&w=150&auto=format&fit=crop",
      avatarSeller: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      dialogues: [
        { speaker: "مَرْوَانُ (Marwan)", arabic: "السَّلاَمُ عَلَيْكُمْ يَا أَنِيْسَةُ.", indo: "Assalamu'alaikum wahai Anisah." },
        { speaker: "أَنِيْسَةُ (Anisah)", arabic: "وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ.", indo: "Wa'alaikumussalam warahmatullah." },
        { speaker: "مَرْوَانُ (Marwan)", arabic: "نَحْنُ الآنَ فِي مَكَانِ الْعِبَادَةِ، هَلْ عِنْدَكِ صَدِيْقٌ غَيْرُ مُسْلِمٍ؟", indo: "Kita sekarang berada di tempat ibadah, apakah kamu punya teman non-Muslim?" },
        { speaker: "أَنِيْسَةُ (Anisah)", arabic: "نَعَمْ، عِنْدِي صَدِيْقٌ بُوذِيٌّ، هُوَ فِي سُورَابَايَا.", indo: "Ya, saya punya teman seorang Buddhis, dia berada di Surabaya." },
        { speaker: "مَرْوَانُ (Marwan)", arabic: "أَيْنَ يَتَعَبَّدُ صَدِيْقُكِ؟", indo: "Di mana temanmu beribadah?" },
        { speaker: "أَنِيْسَةُ (Anisah)", arabic: "هُوَ يَتَعَبَّدُ فِي فِهَارَا. وَأَنْتَ يَا مَرْوَانُ، هَلْ تَعْرِفُ أَيْنَ يَتَعَبَّدُ الْهِنْدُوسِيُّونَ؟", indo: "Dia beribadah di Vihara. Dan kamu wahai Marwan, apakah kamu tahu di mana umat Hindu beribadah?" },
        { speaker: "مَرْوَانُ (Marwan)", arabic: "نَعَمْ عَرَفْتُ، هُمْ يَتَعَبَّدُونَ فِي فُورَا. كَيْفَ تُعَامِلِينَ صَدِيْقَكِ الْبُوذِيَّ؟", indo: "Ya saya tahu, mereka beribadah di Pura. Bagaimana kamu bersikap kepada temanmu yang Buddhis?" },
        { speaker: "أَنِيْسَةُ (Anisah)", arabic: "أَحْتَرِمُهُ احْتِرَامًا جَيِّدًا، حَيْثُ أُشَارِكُهُ فِي الْمُعَامَلَةِ الاِجْتِمَاعِيَّةِ وَلاَ فِي الدِّينِيَّةِ.", indo: "Saya menghormatinya dengan sangat baik, di mana saya berinteraksi dengannya dalam urusan sosial masyarakat dan tidak dalam urusan agama (akidah)." },
        { speaker: "مَرْوَانُ (Marwan)", arabic: "أَحْسَنْتِ يَا أَنِيْسَةُ، هَذَا هُوَ التَّسَامُحُ فِي الدِّينِ.", indo: "Bagus sekali wahai Anisah, inilah toleransi dalam beragama." }
      ]
    }
  ],

  qawaid: [
    {
      id: 1,
      title: "1. تَصْرِيفُ الأَفْعَالِ الْمَاضِيَةِ (Taṣrīf Lugawī Fi'il Māḍy)",
      subtitle: "Perubahan Kata Kerja Lampau (Fi'il Maadhy) Berdasarkan 14 Dhamir (Kata Ganti)",
      summary: "Fi'il Māḍy adalah kata kerja yang menunjukkan perbuatan atau peristiwa yang telah lampau. Perubahan kata kerja ini disesuaikan dengan 14 Dhamīr (kata ganti orang) dalam ilmu Sharaf.",
      tableHeader: ["الضَّمَائِرُ (Dhamir)", "مَكَثَ (Tinggal)", "فَرَّ (Lari)", "قَالَ (Berkata)", "بَاعَ (Menjual)", "تَلَا (Membaca)", "خَشِيَ (Takut)", "شَوَى (Membakar)"],
      tableRows: [
        ["هُوَ (Dia Lk 1)", "مَكَثَ", "فَرَّ", "قَالَ", "بَاعَ", "تَلَا", "خَشِيَ", "شَوَى"],
        ["هُمَا (Dia Lk 2)", "مَكَثَا", "فَرَّا", "قَالَا", "بَاعَا", "تَلَوَا", "خَشِيَا", "شَوَيَا"],
        ["هُمْ (Mereka Lk)", "مَكَّثُوا", "فَرُّوا", "قَالُوا", "بَاعُوا", "تَلَوْا", "خَشُوا", "شَوَوْا"],
        ["هِيَ (Dia Pr 1)", "مَكَّثَتْ", "فَرَّتْ", "قَالَتْ", "بَاعَتْ", "تَلَتْ", "خَشِيَتْ", "شَوَتْ"],
        ["هُمَا (Dia Pr 2)", "مَكَّثَتَا", "فَرَّتَا", "قَالَتَا", "بَاعَتَا", "تَلَتَا", "خَشِيَتَا", "شَوَتَا"],
        ["هُنَّ (Mereka Pr)", "مَكَّثْنَ", "فَرَرْنَ", "قُلْنَ", "بِعْنَ", "تَلَوْنَ", "خَشِينَ", "شَوَيْنَا"],
        ["أَنْتَ (Kamu Lk)", "مَكَّثْتَ", "فَرَرْتَ", "قُلْتَ", "بِعْتَ", "تَلَوْتَ", "خَشِيتَ", "شَوَيْتَ"],
        ["أَنْتُمَا (Kalian Lk 2)", "مَكَّثْتُمَا", "فَرَرْتُمَا", "قُلْتُمَا", "بِعْتُمَا", "تَلَوْتُمَا", "خَشِيتُمَا", "شَوَيْتُمَا"],
        ["أَنْتُمْ (Kalian Lk 3+)", "مَكَّثْتُمْ", "فَرَرْتُمْ", "قُلْتُمْ", "بِعْتُمْ", "تَلَوْتُمْ", "خَشِيتُمْ", "شَوَيْتُمْ"],
        ["أَنْتِ (Kamu Pr)", "مَكَّثْتِ", "فَرَرْتِ", "قُلْتِ", "بِعْتِ", "تَلَوْتِ", "خَشِيتِ", "شَوَيْتِ"],
        ["أَنْتُمَا (Kalian Pr 2)", "مَكَّثْتُمَا", "فَرَرْتُمَا", "قُلْتُمَا", "بِعْتُمَا", "تَلَوْتُمَا", "خَشِيتُمَا", "شَوَيْتُمَا"],
        ["أَنْتُنَّ (Kalian Pr 3+)", "مَكَّثْتُنَّ", "فَرَرْتُنَّ", "قُلْتُنَّ", "بِعْتُنَّ", "تَلَوْتُنَّ", "خَشِيتُنَّ", "شَوَيْتُنَّ"],
        ["أَنَا (Saya)", "مَكَّثْتُ", "فَرَرْتُ", "قُلْتُ", "بِعْتُ", "تَلَوْتُ", "خَشِيتُ", "شَوَيْتُ"],
        ["نَحْنُ (Kami/Kita)", "مَكَّثْنَا", "فَرَرْنَا", "قُلْنَا", "بِعْنَا", "تَلَوْنَا", "خَشِينَا", "شَوَيْنَا"]
      ],
      notes: [
        "1. Perhatikan perubahan kata kerja di atas. Yang tertera dalam tabel adalah Taṣrīf Lugawī Fi'il Māḍy.",
        "2. Fi'il Māḍy adalah kata kerja yang menunjukkan perbuatan yang telah dikerjakan atau peristiwa yang terjadi sebelum dibicarakan.",
        "3. Ilmu Sharaf memperhatikan perubahan kata kerja lampau disesuaikan dengan ḍamīr (kata ganti).",
        "4. Keterangan waktu yang mengharuskan penggunaan Fi'il Māḍy: فِي اليَوْمِ المَاضِي / الأُسْبُوْعِ المَاضِي / الشَّهْرِ المَاضِي / السَّنَةِ المَاضِيَةِ (hari/minggu/bulan/tahun lalu), لَيْلَةَ البَارِحَةِ (tadi malam), هَذَا الصَّبَاحَ (tadi pagi)."
      ]
    },
    {
      id: 2,
      title: "2. تَصْرِيفُ الأَفْعَالِ الْمُضَارِعَةِ (Taṣrīf Lugawī Fi'il Muḍāri' - Bab 2)",
      subtitle: "Perubahan Kata Kerja Sekarang / Yang Akan Datang (Fi'il Mudhari') Berdasarkan 14 Dhamir",
      summary: "Fi'il Muḍāri' adalah kata kerja yang menunjukkan suatu perbuatan yang sedang atau akan dilakukan. Perubahan kata kerja ini (Taṣrīf Lugawī) disesuaikan dengan 14 Dhamīr (kata ganti orang) dalam ilmu Sharaf.",
      tableHeader: ["الضَّمَائِرُ (Dhamir)", "يَشْرَبُ (Minum)", "يَشْعُرُ (Merasa)", "يَقُولُ (Berkata)", "يَسِيرُ (Berjalan)", "يَدْعُو (Mendoakan)", "يَجْرِي (Berlari)", "يَخْشَى (Takut)"],
      tableRows: [
        ["هُوَ (Dia Lk 1)", "يَشْرَبُ", "يَشْعُرُ", "يَقُولُ", "يَسِيرُ", "يَدْعُو", "يَجْرِي", "يَخْشَى"],
        ["هُمَا (Dia Lk 2)", "يَشْرَبَانِ", "يَشْعُرَانِ", "يَقُولاَنِ", "يَسِيرَانِ", "يَدْعُوَانِ", "يَجْرِيَانِ", "يَخْشَيَانِ"],
        ["هُمْ (Mereka Lk)", "يَشْرَبُونَ", "يَشْعُرُونَ", "يَقُولُونَ", "يَسِيرُونَ", "يَدْعُونَ", "يَجْرُونَ", "يَخْشَوْنَ"],
        ["هِيَ (Dia Pr 1)", "تَشْرَبُ", "تَشْعُرُ", "تَقُولُ", "تَسِيرُ", "تَدْعُو", "تَجْرِي", "تَخْشَى"],
        ["هُمَا (Dia Pr 2)", "تَشْرَبَانِ", "تَشْعُرَانِ", "تَقُولاَنِ", "تَسِيرَانِ", "تَدْعُوَانِ", "تَجْرِيَانِ", "تَخْشَيَانِ"],
        ["هُنَّ (Mereka Pr)", "يَشْرَبْنَ", "يَشْعُرْنَ", "يَقُلْنَ", "يَسِرْنَ", "يَدْعُونَ", "يَجْرِينَ", "يَخْشَيْنَ"],
        ["أَنْتَ (Kamu Lk)", "تَشْرَبُ", "تَشْعُرُ", "تَقُولُ", "تَسِيرُ", "تَدْعُو", "تَجْرِي", "تَخْشَى"],
        ["أَنْتُمَا (Kalian Lk 2)", "تَشْرَبَانِ", "تَشْعُرَانِ", "تَقُولاَنِ", "تَسِيرَانِ", "تَدْعُوَانِ", "تَجْرِيَانِ", "تَخْشَيَانِ"],
        ["أَنْتُمْ (Kalian Lk 3+)", "تَشْرَبُونَ", "تَشْعُرُونَ", "تَقُولُونَ", "تَسِيرُونَ", "تَدْعُونَ", "تَجْرُونَ", "تَخْشَوْنَ"],
        ["أَنْتِ (Kamu Pr)", "تَشْرَبِينَ", "تَشْعُرِينَ", "تَقُولِينَ", "تَسِيرِينَ", "تَدْعِينَ", "تَجْرِينَ", "تَخْشَيْنَ"],
        ["أَنْتُمَا (Kalian Pr 2)", "تَشْرَبَانِ", "تَشْعُرَانِ", "تَقُولاَنِ", "تَسِيرَانِ", "تَدْعُوَانِ", "تَجْرِيَانِ", "تَخْشَيَانِ"],
        ["أَنْتُنَّ (Kalian Pr 3+)", "تَشْرَبْنَ", "تَشْعُرْنَ", "تَقُلْنَ", "تَسِرْنَ", "تَدْعُونَ", "تَجْرِينَ", "تَخْشَيْنَ"],
        ["أَنَا (Saya)", "أَشْرَبُ", "أَشْعُرُ", "أَقُولُ", "أَسِيرُ", "أَدْعُو", "أَجْرِي", "أَخْشَى"],
        ["نَحْنُ (Kami/Kita)", "نَشْرَبُ", "نَشْعُرُ", "نَقُولُ", "نَسِيرُ", "نَدْعُو", "نَجْرِي", "نَخْشَى"]
      ],
      notes: [
        "1. Perhatikan perubahan kata di atas. Yang tertera dalam tabel adalah Taṣrīf Lugawī Fi'il Muḍāri'.",
        "2. Fi'il Muḍāri' adalah kata yang menunjukkan perbuatan yang sedang atau akan dilakukan (present / future tense).",
        "3. Ilmu Sharaf memperhatikan perubahan kata kerja sekarang/yang akan datang disesuaikan dengan ḍamīr (kata ganti).",
        "4. Keterangan waktu yang biasa digunakan dengan Fi'il Muḍāri': الآنَ (sekarang), فِي الْيَوْمِ الآتِي / فِي الأُسْبُوعِ الآتِي (di hari/minggu mendatang), فِي الشَّهْرِ الْقَادِمِ / فِي السَّنَةِ الْقَادِمَةِ (di bulan/tahun depan).",
        "5. Perubahan huruf di awal Fi'il Muḍāri' menggunakan huruf Mudhara'ah (أَ - نَ - يَ - تَ) disingkat أَنَيْتُ."
      ]
    },
    {
      id: 3,
      title: "3. تَصْرِيفُ الأَفْعَالِ الأَمْرِيَّةِ (Taṣrīf Lugawī Fi'il 'Amr - Bab 3)",
      subtitle: "Perubahan Kata Kerja Perintah (Fi'il 'Amr) Berdasarkan 6 Dhamir Mukhāṭab",
      summary: "Fi'il 'Amr adalah kata kerja yang digunakan untuk memberikan perintah atau permohonan. Perubahan kata kerja ini (Taṣrīf Lugawī) disesuaikan dengan 6 Dhamīr Mukhāṭab (kata ganti orang kedua).",
      tableHeader: ["الضَّمَائِرُ (Dhamir)", "اكْتُبْ (Tulislah)", "افْتَحْ (Bukalah)", "اجْلِسْ (Duduklah)", "استَأْذِنْ (Minta Izin)", "احْسِنْ (Berbuat Baik)", "تَفَضَّلْ (Silakan)", "فَكِّرْ (Berpikirlah)"],
      tableRows: [
        ["أَنْتَ (Kamu Lk 1)", "اكْتُبْ", "افْتَحْ", "اجْلِسْ", "استَأْذِنْ", "احْسِنْ", "تَفَضَّلْ", "فَكِّرْ"],
        ["أَنْتُمَا (Kalian Lk 2)", "اكْتُبَا", "افْتَحَا", "اجْلِسَا", "استَأْذِنَا", "احْسِنَا", "تَفَضَّلاَ", "فَكِّرَا"],
        ["أَنْتُمْ (Kalian Lk 3+)", "اكْتُبُوا", "افْتَحُوا", "اجْلِسُوا", "استَأْذِنُوا", "احْسِنُوا", "تَفَضَّلُوا", "فَكِّرُوا"],
        ["أَنْتِ (Kamu Pr 1)", "اكْتُبِي", "افْتَحِي", "اجْلِسِي", "استَأْذِنِي", "احْسِنِي", "تَفَضَّلِي", "فَكِّرِي"],
        ["أَنْتُمَا (Kalian Pr 2)", "اكْتُبَا", "افْتَحَا", "اجْلِسَا", "استَأْذِنَا", "احْسِنَا", "تَفَضَّلاَ", "فَكِّرَا"],
        ["أَنْتُنَّ (Kalian Pr 3+)", "اكْتُبْنَ", "افْتَحْنَ", "اجْلِسْنَ", "استَأْذِنَّ", "احْسِنَّ", "تَفَضَّلْنَ", "فَكِّرْنَ"]
      ],
      notes: [
        "a. Yang tertera dalam tabel adalah Taṣrīf Lugawī Fi'il 'Amr.",
        "b. Ilmu Sharaf memperhatikan perubahan kata kerja perintah (Fi'il 'Amr) disesuaikan dengan ḍamīr. Kata ganti yang digunakan hanya kata ganti orang kedua (ḍamīr mukhāṭab) yaitu: أَنْتَ - أَنْتُمَا - أَنْتُمْ - أَنْتِ - أَنْتُمَا - أَنْتُنَّ.",
        "c. Fi'il 'Amr ḍamīr antumā baik untuk laki-laki maupun perempuan tidak ada perbedaan (keduanya menggunakan akhiran Alif 'ا'). Kita membedakannya dalam konteks kalimat.",
        "5. Ketentuan Munādā (kata sesudah huruf nidā' 'يَا', 'أَيُّهَا', atau 'يَا أَيُّهَا'):",
        "  - Munādā dibaca marfū' (Dhammah) apabila berupa isim 'alam mufrad (nama orang tunggal), contoh: يَا زَيْدُ",
        "  - Munādā dibaca manṣūb (Fathah) apabila berupa muḍāf atau menyerupai muḍāf, contoh: يَا عَبْدَ اللهِ, يَا طَالِعًا جَبَلاً"
      ]
    },
    {
      id: 4,
      title: "4. النَّعْتُ وَالْمَنْعُوتُ (Kaidah Na'at & Man'ut - Bab 4)",
      subtitle: "Jenis-jenis Na'at (Kata Sifat / Keterangan) beserta Pengertian dan Contohnya",
      summary: "Na'at (Sifat) adalah kata yang mengikuti Isim sebelumnya (Man'ut) untuk menjelaskan sifat atau keadaannya. Terbagi menjadi 5 jenis: Na'at Haqiqi/Mufrad, Na'at Sababi, Na'at Jumlah Ismiyah, Na'at Jumlah Fi'liyah, dan Na'at Syibhil Jumlah.",
      tableHeader: ["No", "Jenis / Macam Na'at", "Pengertian", "Contoh Kalimat"],
      tableRows: [
        [
          "1",
          "Na'at Haqiqi / Na'at Mufrad",
          "Na'at yang menjelaskan man'ūt yang sesuai dalam hal nakirah, ma'rifat, muḍakkar, muannaś, mufrad, taśniyah, dan jama'.",
          "• يَجِبُ عَلَى الْمُسْلِمِينَ أَنْ يَجْتَنِبُوا الأَعْمَالَ السَّيِّئَةَ.\n• يُحِبُّ الْمُدَرِّسُ الطَّالِبَاتِ النَّشِيطَاتِ."
        ],
        [
          "2",
          "Na'at Sababi",
          "Na'at yang menjelaskan sifat bagi isim yang mempunyai hubungan atau ikatan dengan man'ūtnya.",
          "• يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ (النحل: ٦٩)\n• أَكْرَمْتُ الطَّالِبَ الْحَسَنَ خُلُقُهُ."
        ],
        [
          "3",
          "Na'at Jumlah Ismiyah",
          "Na'at yang terdiri dari jumlah ismiyah (mubtada' – khabar).",
          "• تَرَكَ الشَّافِعِيُّ مُؤَلَّفَاتٍ نَفْعُهَا عَظِيمٌ."
        ],
        [
          "4",
          "Na'at Jumlah Fi'liyah",
          "Na'at yang terdiri dari jumlah fi'liyah (Fi'il - fa'il - maf'ul).",
          "• خَلَّفَ الشَّافِعِيُّ مَذْهَبًا يَحْتَرِمُهُ الْمُسْلِمُونَ جَمِيعًا."
        ],
        [
          "5",
          "Na'at Syibhil Jumlah",
          "Na'at yang menyerupai kalimat, tetapi bukan jumlah mufidah (kalimat yang lengkap). Na'at ini biasanya terdiri dari jar-majrur atau kata keterangan (ẓarf) dan muḍāf ilaih.",
          "• وَضَعَ الشَّافِعِيُّ كُتُبًا فِي الْفِقْهِ.\n• رَأَيْتُ طَائِرًا فَوْقَ الشَّجَرَةِ."
        ]
      ],
      notes: [
        "1. Na'at Haqiqi (Mufrad) wajib mengikuti Man'ut dalam 4 hal: (a) Mu'rab/I'rab (Rafa', Nasab, Jar), (b) Jenis (Mudzakkar/Muannats), (c) Jumlah (Mufrad, Tatsniyah, Jamak), (d) Kejelasan (Nakirah/Ma'rifah). Contoh: (الأَعْمَالَ ⬅️ السَّيِّئَةَ) & (الطَّالِبَاتِ ⬅️ النَّشِيطَاتِ).",
        "2. Na'at Sababi selalu berbentuk Mufrad dan ikrabnya mengikuti Man'ut sebelumnya, namun jenis gender (Mudzakkar/Muannats) mengikuti Isim sesudahnya. Contoh: (الطَّالِبَ ⬅️ الْحَسَنَ خُلُقُهُ).",
        "3. Na'at Jumlah Ismiyah, Fi'liyah, dan Syibhul Jumlah: (مُؤَلَّفَاتٍ ⬅️ نَفْعُهَا عَظِيمٌ), (مَذْهَبًا ⬅️ يَحْتَرِمُهُ الْمُسْلِمُونَ), (طَائِرًا ⬅️ فَوْقَ الشَّجَرَةِ). Syarat Man'ut-nya wajib berupa Isim Nakirah."
      ]
    },
    {
      id: 5,
      title: "5. الإِضَافَةُ: الْمُضَافُ وَالْمُضَافُ إِلَيْهِ (Kaidah Iḍāfah - Muḍāf & Muḍāf Ilaih - Bab 4)",
      subtitle: "Penggabungan Dua Kata Membentuk Satu Pengertian (Mudhaf & Mudhaf Ilaih)",
      summary: "Iḍāfah (إِضَافَةٌ) adalah gabungan dua kata isim atau lebih yang membentuk satu kesatuan makna. Kata pertama disebut Muḍāf (مُضَافٌ) dan kata kedua disebut Muḍāf Ilaih (مُضَافٌ إِلَيْهِ).",
      tableHeader: ["No", "مُضَافٌ (Muḍāf)", "مُضَافٌ إِلَيْهِ (Muḍāf Ilaih)", "Makna Tersirat (Pengandaian)"],
      tableRows: [
        [
          "1",
          "مَكْرُ",
          "اللَّيْلِ",
          "مَكْرٌ فِي اللَّيْلِ (Tipu daya DI DALAM malam - Makna فِي)"
        ],
        [
          "2",
          "كِتَابُ",
          "مُحَمَّدٍ",
          "كِتَابٌ لِمُحَمَّدٍ (Kitab MILIK Muhammad - Makna لِ)"
        ],
        [
          "3",
          "إِنَاءُ",
          "زُجَاجٍ",
          "إِنَاءٌ مِنْ زُجَاجٍ (Wadah DARI kaca - Makna مِنْ)"
        ],
        [
          "4",
          "رَسُولُ",
          "اللهِ",
          "رَسُولٌ لِلَّهِ (Utusan Allah / Milik Allah)"
        ],
        [
          "5",
          "شَدِيدُ",
          "الْعِقَابِ",
          "شَدِيدُ الْعِقَابِ (Sangat keras siksaan-Nya)"
        ],
        [
          "6",
          "كِتَابَ",
          "اللُّغَةِ الْعَرَبِيَّةِ",
          "كِتَابُ اللُّغَةِ (Buku Bahasa Arab)"
        ]
      ],
      notes: [
        "1. Iḍāfah adalah dua kata yang digabung menjadi satu membentuk satu pengertian. Satu berfungsi sebagai muḍāf dan satunya lagi berfungsi sebagai muḍāf ilaih.",
        "2. I'rāb muḍāf mengikuti kedudukannya dalam kalimat (bisa Marfu', Mansub, atau Majrur), sedangkan Muḍāf ilaih dibaca majrūr (Kasrah/Yaa) selamanya.",
        "3. Muḍāf TIDAK BOLEH menggunakan Alif Lam (ال) dan TIDAK BOLEH di-tanwin.",
        "4. Iḍāfah mengira-ngirakan 3 makna huruf jar: (a) فِي (di dalam) contoh مَكْرُ اللَّيْلِ, (b) لِ (milik/kepunyaan) contoh كِتَابُ مُحَمَّدٍ, (c) مِنْ (terbuat dari) contoh إِنَاءُ زُجَاجٍ."
      ]
    }
  ],

  quiz: [
  {
    "id": 1,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (سِيَاحَةٌ) فِي اللُّغَةِ الإِنْدُونِيسِيَّةِ؟",
    "options": [
      "Wisata / Pariwisata",
      "Perdagangan",
      "Pertanian",
      "Pendidikan"
    ],
    "correct": 0,
    "explanation": "سِيَاحَةٌ artinya Wisata atau Pariwisata."
  },
  {
    "id": 2,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (غَارٌ) فِي بَابِ السَّفَرِ وَالسِّيَاحَةِ؟",
    "options": [
      "Sungai",
      "Gua / Goa",
      "Gunung",
      "Hutan"
    ],
    "correct": 1,
    "explanation": "غَارٌ artinya Gua atau Goa."
  },
  {
    "id": 3,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (نَهْرٌ)؟",
    "options": [
      "Laut",
      "Danau",
      "Sungai",
      "Air Terjun"
    ],
    "correct": 2,
    "explanation": "نَهْرٌ artinya Sungai."
  },
  {
    "id": 4,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى (تَزَحْلُفٌ) فِي نَشَاطِ السِّيَاحَةِ النَّهْرِيَّةِ؟",
    "options": [
      "Susur Sungai / Arung Jeram (Tubing)",
      "Mendaki Gunung",
      "Berenang di Kolam",
      "Bersepeda"
    ],
    "correct": 0,
    "explanation": "تَزَحْلُفٌ dalam wisata sungai artinya Susur Sungai / Tubing."
  },
  {
    "id": 5,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (إِطَارَاتٌ) فِي التَّزَحْلُفِ النَّهْرِيِّ؟",
    "options": [
      "Tali Pengaman",
      "Ban Pelampung",
      "Dayung Kayu",
      "Kacamata Renang"
    ],
    "correct": 1,
    "explanation": "إِطَارَاتٌ artinya Ban Pelampung."
  },
  {
    "id": 6,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (عَوَّامَةٌ) لِلسَّلاَمَةِ فِي الْمَاءِ؟",
    "options": [
      "Jaket Pelampung / Pelampung",
      "Perahu Karet",
      "Sepatu Boot",
      "Topي Pelindung"
    ],
    "correct": 0,
    "explanation": "عَوَّامَةٌ artinya Jaket Pelampung."
  },
  {
    "id": 7,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى فِرَاسَة (مُرْشِدُ السِّيَاحَةِ)؟",
    "options": [
      "Pengemudi Bus",
      "Pemandu Wisata (Tour Guide)",
      "Penjual Tiket",
      "Pemilik Penginapan"
    ],
    "correct": 1,
    "explanation": "مُرْشِدُ السِّيَاحَةِ artinya Pemandu Wisata."
  },
  {
    "id": 8,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى (جَوَازُ السَّفَرِ) عِنْدَ السَّفَرِ إِلَى الْخَارِجِ؟",
    "options": [
      "KTP",
      "Paspor Perjalanan",
      "Tiket Pesawat",
      "SIM"
    ],
    "correct": 1,
    "explanation": "جَوَازُ السَّفَرِ artinya Paspor Perjalanan."
  },
  {
    "id": 9,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى (تَذْكِرَةُ السَّفَرِ)؟",
    "options": [
      "Tiket Perjalanan",
      "Kartu Kredit",
      "Surat Izin",
      "Peta Lokasi"
    ],
    "correct": 0,
    "explanation": "تَذْكِرَةُ السَّفَرِ artinya Tiket Perjalanan."
  },
  {
    "id": 10,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى (شَاطِئُ الْبَحْرِ)؟",
    "options": [
      "Tengah Laut",
      "Pantai Laut",
      "Dermaga",
      "Muara Sungai"
    ],
    "correct": 1,
    "explanation": "شَاطِئُ الْبَحْرِ artinya Pantai Laut."
  },
  {
    "id": 11,
    "babId": "topik1",
    "modelId": "model1",
    "question": "أَيْنَ ذَهَبَ فَاخِرٌ وَأُسْرَتُهُ فِي الْعُطْلَةِ الْمَاضِيَةِ كَمَا فِي الْقِرَاءَةِ؟",
    "options": [
      "إِلَى غَارِ فِيْنْدُوْل فِي يُوكْيَاكَرْتَا",
      "إِلَى شَاطِئِ لُوسَارِي",
      "إِلَى جَاكَرْتَا",
      "إِلَى بَالِي"
    ],
    "correct": 0,
    "explanation": "Sesuai Qira'ah 1 Bab 1: Fakhir dan keluarga pergi ke Gua Pindul Yogyakarta."
  },
  {
    "id": 12,
    "babId": "topik1",
    "modelId": "model1",
    "question": "كَمْ سِعْرُ تَذْكِرَةِ الدُّخُولِ فِي غَارِ فِيْنْدُوْل لِكُلِّ فَرْدٍ؟",
    "options": [
      "خَمْسُونَ أَلْفَ رُوبِيَّةٍ (50.000)",
      "عِشْرُونَ أَلْفَ رُوبِيَّةٍ (20.000)",
      "مِائَةُ أَلْفَ رُوبِيَّةٍ (100.000)",
      "مَجَّانًا"
    ],
    "correct": 0,
    "explanation": "Sesuai Qira'ah 1: Tiket masuk seharga Rp 50.000 per orang."
  },
  {
    "id": 13,
    "babId": "topik1",
    "modelId": "model1",
    "question": "أَيْنَ يَقَعُ شَاطِئُ لُوسَارِي (Losari) الْجَمِيلُ؟",
    "options": [
      "فِي يُوكْيَاكَرْتَا",
      "فِي مَكَّاسَار (Makassar)",
      "فِي جُومْبَانْج",
      "فِي بَالِي"
    ],
    "correct": 1,
    "explanation": "Sesuai Qira'ah 2 Bab 1: Pantai Losari terletak di kota Makassar."
  },
  {
    "id": 14,
    "babId": "topik1",
    "modelId": "model1",
    "question": "أَيْنَ قَضَى نَبِيلٌ أَيَّامَ الْعُطْلَةِ الْمَاضِيَةِ فِي الْحِوَارِ؟",
    "options": [
      "فِي بَيْتِ جَدِّهِ فِي سُوكُوهَارْجُو",
      "فِي غَارِ فِيْنْدُوْل",
      "فِي الْمَدْرَسَةِ",
      "فِي الْقَاهِرَةِ"
    ],
    "correct": 0,
    "explanation": "Sesuai Hiwar 1 Bab 1: Nabil menghabiskan liburan di rumah kakeknya di Sukoharjo."
  },
  {
    "id": 15,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى (حَافِلَةٌ سِيَاحِيَّةٌ)؟",
    "options": [
      "Sepeda Motor",
      "Bus Pariwisata",
      "Kapal Laut",
      "Kereta Cepat"
    ],
    "correct": 1,
    "explanation": "حَافِلَةٌ سِيَاحِيَّةٌ artinya Bus Pariwisata."
  },
  {
    "id": 16,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا هُوَ (الْمَطَارُ) فِي وِسَائِلِ النَّقْلِ؟",
    "options": [
      "Stasiun Kereta",
      "Bandara Udara",
      "Pelabuhan Laut",
      "Terminal Bus"
    ],
    "correct": 1,
    "explanation": "الْمَطَارُ artinya Bandara / Bandar Udara."
  },
  {
    "id": 17,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا هُوَ (الْمِينَاكُ / الْمِينَاءُ)؟",
    "options": [
      "Pelabuhan Laut",
      "Stasiun",
      "Bandara",
      "Halte"
    ],
    "correct": 0,
    "explanation": "الْمِينَاءُ artinya Pelabuhan Laut."
  },
  {
    "id": 18,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا هُوَ (الْفُنْدُقُ) لِلسُّيَّاحِ؟",
    "options": [
      "Restoran",
      "Hotel / Penginapan",
      "Museum",
      "Taman"
    ],
    "correct": 1,
    "explanation": "الْفُنْدُقُ artinya Hotel / Penginapan."
  },
  {
    "id": 19,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى (مَحَطَّةُ الْقِطَارِ)؟",
    "options": [
      "Stasiun Kereta Api",
      "Bandara Udara",
      "Pelabuhan",
      "Terminal Bus"
    ],
    "correct": 0,
    "explanation": "مَحَطَّةُ الْقِطَارِ artinya Stasiun Kereta Api."
  },
  {
    "id": 20,
    "babId": "topik1",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (وَكِيلُ السَّفَرِ)؟",
    "options": [
      "Agen Perjalanan (Travel Agent)",
      "Supir Taksi",
      "Resepsionis",
      "Pilot"
    ],
    "correct": 0,
    "explanation": "وَكِيلُ السَّفَرِ artinya Agen Perjalanan."
  },
  {
    "id": 21,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنَا) مِنْ فِعْلِ (ذَهَبَ)؟",
    "options": [
      "ذَهَبْتُ",
      "ذَهَبْنَا",
      "ذَهَبَتْ",
      "ذَهَبُوا"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir أَنَا bersambung dengan Tu (تُ) di akhir: ذَهَبْتُ."
  },
  {
    "id": 22,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (نَحْنُ) مِنْ فِعْلِ (كَتَبَ)؟",
    "options": [
      "كَتَبْتُ",
      "كَتَبْنَا",
      "كَتَبُوا",
      "كَتَبَتْ"
    ],
    "correct": 1,
    "explanation": "Taṣrīf Fi'il Māḍy damir نَحْنُ bersambung dengan Naa (نَا): كَتَبْنَا."
  },
  {
    "id": 23,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنْتَ) مِنْ فِعْلِ (قَرَأَ)؟",
    "options": [
      "قَرَأْتَ",
      "قَرَأْتِ",
      "قَرَأْتُ",
      "قَرَأُوا"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir أَنْتَ bersambung dengan Ta (تَ): قَرَأْتَ."
  },
  {
    "id": 24,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنْتِ) مِنْ فِعْلِ (رَكِبَ)؟",
    "options": [
      "رَكِبْتَ",
      "رَكِبْتِ",
      "رَكِبْتُ",
      "رَكِبْنَ"
    ],
    "correct": 1,
    "explanation": "Taṣrīf Fi'il Māḍy damir أَنْتِ bersambung dengan Ti (تِ): رَكِبْتِ."
  },
  {
    "id": 25,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (هُمْ) مِنْ فِعْلِ (سَافَرَ)؟",
    "options": [
      "سَافَرَتْ",
      "سَافَرُوا",
      "سَافَرْنَ",
      "سَافَرْتُمْ"
    ],
    "correct": 1,
    "explanation": "Taṣrīf Fi'il Māḍy damir هُمْ bersambung dengan Wawu Sukun & Alif (وا): سَافَرُوا."
  },
  {
    "id": 26,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (هُنَّ) مِنْ فِعْلِ (وَصَلَ)؟",
    "options": [
      "وَصَلُوا",
      "وَصَلْنَ",
      "وَصَلَتْ",
      "وَصَلْتُنَّ"
    ],
    "correct": 1,
    "explanation": "Taṣrīf Fi'il Māḍy damir هُنَّ bersambung dengan Nun Niswah (نَ): وَصَلْنَ."
  },
  {
    "id": 27,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (هِيَ) مِنْ فِعْلِ (زَارَ)؟",
    "options": [
      "زَارَتْ",
      "زَارُوا",
      "زُرْتُ",
      "زُرْنَا"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir هِيَ bersambung dengan Ta' Ta'nith Sukun (تْ): زَارَتْ."
  },
  {
    "id": 28,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنْتُمْ) مِنْ فِعْلِ (شَاهَدَ)؟",
    "options": [
      "شَاهَدْتُمْ",
      "شَاهَدْتُنَّ",
      "شَاهَدُوا",
      "شَاهَدْنَا"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir أَنْتُمْ bersambung dengan Tum (تُمْ): شَاهَدْتُمْ."
  },
  {
    "id": 29,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنْتُنَّ) مِنْ فِعْلِ (رَجَعَ)؟",
    "options": [
      "رَجَعْتُنَّ",
      "رَجَعْتُمْ",
      "رَجَعْنَ",
      "رَجَعْتِ"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir أَنْتُنَّ bersambung dengan Tunna (تُنَّ): رَجَعْتُنَّ."
  },
  {
    "id": 30,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنْتُمَا) مِنْ فِعْلِ (نَزَلَ)؟",
    "options": [
      "نَزَلْتُمَا",
      "نَزَلاَ",
      "نَزَلْتُمْ",
      "نَزَلْتُنَّ"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir أَنْتُمَا bersambung dengan Tumaa (تُمَا): نَزَلْتُمَا."
  },
  {
    "id": 31,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (هُمَا مُذَكَّر) مِنْ فِعْلِ (دَخَلَ)؟",
    "options": [
      "دَخَلاَ",
      "دَخَلَتَا",
      "دَخَلُوا",
      "دَخَلْنَ"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir هُمَا (mudzakkar) bersambung Alif Tathniyah: دَخَلاَ."
  },
  {
    "id": 32,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (هُمَا مُؤَنَّث) مِنْ فِعْلِ (خَرَجَ)؟",
    "options": [
      "خَرَجَتَا",
      "خَرَجَا",
      "خَرَجْنَ",
      "خَرَجْتُمَا"
    ],
    "correct": 0,
    "explanation": "Taṣrīf Fi'il Māḍy damir هُمَا (mu'annath) bersambung Ta' & Alif (تَا): خَرَجَتَا."
  },
  {
    "id": 33,
    "babId": "topik1",
    "modelId": "model2",
    "question": "الْفِعْلُ الْمَاضِي كَلِمَةٌ تَدُلُّ عَلَى حَدَثٍ وَقَعَ فِي الزَّمَنِ...",
    "options": [
      "الْمَاضِي",
      "الْحَاضِرِ",
      "الْمُسْتَقْبَلِ",
      "الأَمْرِ"
    ],
    "correct": 0,
    "explanation": "Fi'il Madhy menunjukkan perbuatan yang telah lampau."
  },
  {
    "id": 34,
    "babId": "topik1",
    "modelId": "model2",
    "question": "عَلاَمَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنَا) هِيَ زِيَادَةُ ... فِي آخِرِهِ.",
    "options": [
      "تُ (الـتَّاءُ الْمَضْمُومَةُ)",
      "تَ (الـتَّاءُ الْمَفْتُوحَةُ)",
      "تِ (الـتَّاءُ الْمَكْسُورَةُ)",
      "نَا"
    ],
    "correct": 0,
    "explanation": "Akhiran damir أَنَا pada Fi'il Madhy adalah huruf Taa' Ber-Dhammah (-تُ)."
  },
  {
    "id": 35,
    "babId": "topik1",
    "modelId": "model2",
    "question": "عَلاَمَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنْتَ) هِيَ زِيَادَةُ ... فِي آخِرِهِ.",
    "options": [
      "تَ (الـتَّاءُ الْمَفْتُوحَةُ)",
      "تُ",
      "تِ",
      "تُمْ"
    ],
    "correct": 0,
    "explanation": "Akhiran damir أَنْتَ pada Fi'il Madhy adalah huruf Taa' Ber-Fathah (-تَ)."
  },
  {
    "id": 36,
    "babId": "topik1",
    "modelId": "model2",
    "question": "عَلاَمَةُ الْفِعْلِ الْمَاضِي لِلضَّمِيرِ (أَنْتِ) هِيَ زِيَادَةُ ... فِي آخِرِهِ.",
    "options": [
      "تِ (الـتَّاءُ الْمَكْسُورَةُ)",
      "تَ",
      "تُ",
      "تُنَّ"
    ],
    "correct": 0,
    "explanation": "Akhiran damir أَنْتِ pada Fi'il Madhy adalah huruf Taa' Ber-Kasrah (-تِ)."
  },
  {
    "id": 37,
    "babId": "topik1",
    "modelId": "model2",
    "question": "تَحْوِيلُ (سَافَرَ الطَّالِبُ) إِلَى الْجَمْعِ (الطُّلاَّبُ):",
    "options": [
      "سَافَرَ الطُّلاَّبُ / الطُّلاَّبُ سَافَرُوا",
      "سَافَرْنَ الطُّلاَّبُ",
      "سَافَرْتُمْ الطُّلاَّبُ",
      "سَافَرَتْ الطُّلاَّبُ"
    ],
    "correct": 0,
    "explanation": "Jika fi'il mendahului fa'il mufrad/jama', fi'il tetap mufrad (سَافَرَ الطُّلاَّبُ), jika fa'il di depan maka (الطُّلاَّبُ سَافَرُوا)."
  },
  {
    "id": 38,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا الضَّمِيرُ الْمُنَاسِبُ لِلْفِعْلِ الْمَاضِي (قَضَيْنَا)؟",
    "options": [
      "نَحْنُ",
      "أَنَا",
      "هُمْ",
      "أَنْتُمْ"
    ],
    "correct": 0,
    "explanation": "قَضَيْنَا bertanda -نَا maka damirnya adalah نَحْنُ."
  },
  {
    "id": 39,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا الضَّمِيرُ الْمُنَاسِبُ لِلْفِعْلِ الْمَاضِي (لَعِبْنَ)؟",
    "options": [
      "هُنَّ",
      "هُمْ",
      "أَنْتُنَّ",
      "هُمَا"
    ],
    "correct": 0,
    "explanation": "لَعِبْنَ bertanda Nun Niswah (-نَ) maka damirnya adalah هُنَّ."
  },
  {
    "id": 40,
    "babId": "topik1",
    "modelId": "model2",
    "question": "مَا الضَّمِيرُ الْمُنَاسِبُ لِلْفِعْلِ الْمَاضِي (سَمِعْتُمْ)؟",
    "options": [
      "أَنْتُمْ",
      "هُمْ",
      "أَنْتُنَّ",
      "نَحْنُ"
    ],
    "correct": 0,
    "explanation": "سَمِعْتُمْ bertanda -تُمْ maka damirnya adalah أَنْتُمْ."
  },
  {
    "id": 41,
    "babId": "topik2",
    "modelId": "model1",
    "question": "أَكْمِلْ الْجُمْلَةَ: (أَشْتَرِي الدَّوَاءَ مِنَ ... )",
    "options": [
      "الْمَطَارِ",
      "السُّوقِ",
      "الصَّيْدَلِيَّةِ",
      "الْمَدْرَسَةِ"
    ],
    "correct": 2,
    "explanation": "Obat dibeli di Apotek (الصَّيْدَلِيَّةِ)."
  },
  {
    "id": 42,
    "babId": "topik2",
    "modelId": "model1",
    "question": "يَفْحَصُ الْمَرِيضَ فِي الْمُسْتَشْفَى ...",
    "options": [
      "الْمُهَنْدِسُ",
      "الطَّبِيبُ",
      "الفَلاَّحُ",
      "الْمُعَلِّمُ"
    ],
    "correct": 1,
    "explanation": "Dokter (الطَّبِيبُ) memeriksa pasien di rumah sakit."
  },
  {
    "id": 43,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (صُدَاعٌ) فِي اللُّغَةِ الإِنْدُونِيسِيَّةِ؟",
    "options": [
      "Sakit Gigi",
      "Sakit Kepala / Pusing",
      "Sakit Perut",
      "Batuk"
    ],
    "correct": 1,
    "explanation": "صُدَاعٌ artinya Sakit Kepala."
  },
  {
    "id": 44,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (حُمَّى) فِي الأَمْرَاضِ؟",
    "options": [
      "Flu / Pilek",
      "Demam / Panas Tinggi",
      "Sesak Napas",
      "Diare"
    ],
    "correct": 1,
    "explanation": "حُمَّى artinya Demam / Panas Tinggi."
  },
  {
    "id": 45,
    "babId": "topik2",
    "modelId": "model1",
    "question": "تُسَاعِدُ الطَّبِيبَ فِي الْعِيَادَةِ وَالْمُسْتَشْفَى ...",
    "options": [
      "الْمُمَرِّضَةُ",
      "الْمُدَرِّسَةُ",
      "الْمُوَظَّفَةُ",
      "الخَادِمَةُ"
    ],
    "correct": 0,
    "explanation": "Perawat perempuan (الْمُمَرِّضَةُ) membantu dokter."
  },
  {
    "id": 46,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَاذَا قَالَ الْحُكَمَاءُ عَنِ الصِّحَّةِ فِي قِرَاءَةِ بَابِ 2؟",
    "options": [
      "الصِّحَّةُ تَاجٌ عَلَى رُؤُوسِ الأَصِحَّاءِ لاَ يَعْرِفُهُ إِلاَّ الْمَرْضَى",
      "الصِّحَّةُ لاَ تَفِيدُ شَيْئًا",
      "الْمَالُ أَهَمُّ مِنَ الصِّحَّةِ",
      "الصِّحَّةُ لِلأَطْفَالِ فَقَطْ"
    ],
    "correct": 0,
    "explanation": "Kesehatan adalah mahkota di atas kepala orang sehat yang hanya diketahui oleh orang sakit."
  },
  {
    "id": 47,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَاذَا يَفْعَلُ نَبِيلٌ وَنَوْفَلٌ كُلَّ صَبَاحٍ لِلْحِفَاظِ عَلَى الصِّحَّةِ؟",
    "options": [
      "يَنَامَانِ طَوِيلاً",
      "يَجْرِيَانِ كُلَّ صَبَاحٍ (الرَّكْضُ)",
      "يَأْكُلاَنِ الْحَلْوَى",
      "يَشْرَبَانِ الْقَهْوَةَ"
    ],
    "correct": 1,
    "explanation": "Sesuai Hiwar Bab 2: Nabil dan Naufal berlari pagi (الرَّكْضُ / JOGGING) untuk menjaga kesehatan."
  },
  {
    "id": 48,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَنْ زَارَتْ رِيتَا فِي الْمُسْتَشْفَى عِنْدَمَا كَانَتْ مَرِيضَةً؟",
    "options": [
      "صَدِيقَاتُهَا",
      "مُعَلِّمُهَا",
      "جَارُهَا",
      "لاَ أَحَدَ"
    ],
    "correct": 0,
    "explanation": "Teman-temannya (صَدِيقَاتُهَا) menjenguk Rita di rumah sakit."
  },
  {
    "id": 49,
    "babId": "topik2",
    "modelId": "model1",
    "question": "بِمَ يَشْعُرُ الْمَرِيضُ فِي مَعِدَتِهِ عِنْدَمَا يَذْهَبُ إِلَى الطَّبِيبِ؟",
    "options": [
      "يَشْعُرُ بِالْفَرَحِ",
      "يَشْعُرُ بِأَلَمٍ شَدِيدٍ",
      "يَشْعُرُ بِالْجُوعِ",
      "لاَ يَشْعُرُ بِشَيْءٍ"
    ],
    "correct": 1,
    "explanation": "Pasien merasa sakit perut hebat (أَلَمٌ شَدِيدٌ)."
  },
  {
    "id": 50,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَاذَا يُعْطِي الطَّبِيبُ لِلْمَرِيضِ لِشِرَاءِ الدَّوَاءِ مِنَ الصَّيْدَلِيَّةِ؟",
    "options": [
      "وَصْفَةَ الطَّبِيبِ",
      "تَذْكِرَةَ السَّفَرِ",
      "بِطَاقَةَ الدُّخُولِ",
      "الْكِتَابَ"
    ],
    "correct": 0,
    "explanation": "Dokter memberikan resep obat (وَصْفَةُ الطَّبِيبِ)."
  },
  {
    "id": 51,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (السُّكَّرِيُّ) فِي الأَمْرَاضِ؟",
    "options": [
      "Penyakit Jantung",
      "Penyakit Gula / Diabetes",
      "Penyakit Paru-paru",
      "Sakit Mata"
    ],
    "correct": 1,
    "explanation": "السُّكَّرِيُّ artinya Diabetes / Penyakit Gula."
  },
  {
    "id": 52,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (الرِّيَاضَةُ) فِي حَيَاتِنَا؟",
    "options": [
      "Pelajaran Matematika",
      "Olahraga Olah Tubuh",
      "Seni Musik",
      "Membaca Buku"
    ],
    "correct": 1,
    "explanation": "الرِّيَاضَةُ artinya Olahraga."
  },
  {
    "id": 53,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (وَجَبَةٌ غِذَائِيَّةٌ مُتَوَازِنَةٌ)؟",
    "options": [
      "Makanan Ringan",
      "Menu Makanan Bergizi Seimbang",
      "Makanan Cepat Saji",
      "Minuman Manis"
    ],
    "correct": 1,
    "explanation": "وَجَبَةٌ غِذَائِيَّةٌ مُتَوَازِنَةٌ artinya Menu Makanan Bergizi Seimbang."
  },
  {
    "id": 54,
    "babId": "topik2",
    "modelId": "model1",
    "question": "أَيْنَ يَعْمَلُ الطَّبِيبُ وَالْمُمَرِّضَةُ لِعِلاَجِ الْمَرْضَى؟",
    "options": [
      "فِي الْمُسْتَشْفَى أَوِ الْعِيَادَةِ",
      "فِي الْمَطَارِ",
      "فِي الْمَحَطَّةِ",
      "فِي السُّوقِ"
    ],
    "correct": 0,
    "explanation": "Dokter dan perawat bekerja di Rumah Sakit (الْمُسْتَشْفَى) atau Klinik (الْعِيَادَةُ)."
  },
  {
    "id": 55,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى (ضَغْطُ الدَّمِ) فِي الْفَحْصِ الطِّبِّيِّ؟",
    "options": [
      "Tekanan Darah",
      "Gula Darah",
      "Denyut Nadi",
      "Suhu Tubuh"
    ],
    "correct": 0,
    "explanation": "ضَغْطُ الدَّمِ artinya Tekanan Darah."
  },
  {
    "id": 56,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى (كُرَةُ الْقَدَمِ) فِي الأَلْعَابِ الرِّيَاضِيَّةِ؟",
    "options": [
      "Bola Voli",
      "Sepak Bola",
      "Bola Basket",
      "Bulutangkis"
    ],
    "correct": 1,
    "explanation": "كُرَةُ الْقَدَمِ artinya Sepak Bola."
  },
  {
    "id": 57,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى (الـسِّبَاحَةُ)؟",
    "options": [
      "Renang / Berenang",
      "Lari",
      "Bersepeda",
      "Senam"
    ],
    "correct": 0,
    "explanation": "السِّبَاحَةُ artinya Olahraga Berenang."
  },
  {
    "id": 58,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى (سُعَالٌ) فِي الأَعْرَاضِ الطِّبِّيَّةِ؟",
    "options": [
      "Pilek",
      "Batuk",
      "Pusing",
      "Mual"
    ],
    "correct": 1,
    "explanation": "سُعَالٌ artinya Batuk."
  },
  {
    "id": 59,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى (زُكَامٌ)؟",
    "options": [
      "Flu / Pilek / Flu",
      "Sakit Gigi",
      "Demam",
      "Luka"
    ],
    "correct": 0,
    "explanation": "زُكَامٌ artinya Flu atau Pilek."
  },
  {
    "id": 60,
    "babId": "topik2",
    "modelId": "model1",
    "question": "مَا مَعْنَى (مِقْيَاسُ الْحَرَارَةِ)؟",
    "options": [
      "Stetoskop",
      "Termometer (Alat Pengukur Suhu)",
      "Tensi Darah",
      "Timbangan"
    ],
    "correct": 1,
    "explanation": "مِقْيَاسُ الْحَرَارَةِ artinya Termometer."
  },
  {
    "id": 61,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (أَنَا) مِنْ فِعْلِ (شَرِبَ - يَشْرَبُ)؟",
    "options": [
      "تَشْرَبُ",
      "أَشْرَبُ",
      "نَشْرَبُ",
      "يَشْرَبُونَ"
    ],
    "correct": 1,
    "explanation": "Fi'il Mudhari' damir أَنَا berawalan Hamzah (أَ): أَشْرَبُ."
  },
  {
    "id": 62,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (نَحْنُ) مِنْ فِعْلِ (لَعِبَ - يَلْعَبُ)؟",
    "options": [
      "أَلْعَبُ",
      "تَلْعَبُ",
      "نَلْعَبُ",
      "يَلْعَبُونَ"
    ],
    "correct": 2,
    "explanation": "Fi'il Mudhari' damir نَحْنُ berawalan Nun (نَ): نَلْعَبُ."
  },
  {
    "id": 63,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (أَنْتُمْ) مِنْ فِعْلِ (ذَهَبَ - يَذْهَبُ)؟",
    "options": [
      "تَذْهَبِينَ",
      "تَذْهَبُونَ",
      "يَذْهَبُونَ",
      "تَذْهَبْنَ"
    ],
    "correct": 1,
    "explanation": "Fi'il Mudhari' damir أَنْتُمْ berawalan Ta' dan berakhiran Wawu Nun (ـُونَ): تَذْهَبُونَ."
  },
  {
    "id": 64,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (هِيَ) مِنْ فِعْلِ (فَحَصَ - يَفْحَصُ)؟",
    "options": [
      "يَفْحَصُ",
      "تَفْحَصُ",
      "أَفْحَصُ",
      "نَفْحَصُ"
    ],
    "correct": 1,
    "explanation": "Fi'il Mudhari' damir هِيَ berawalan Ta' (تَ): تَفْحَصُ."
  },
  {
    "id": 65,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (أَنْتِ) مِنْ فِعْلِ (أَكَلَ - يَأْكُلُ)؟",
    "options": [
      "تَأْكُلِينَ",
      "تَأْكُلُونَ",
      "يَأْكُلْنَ",
      "تَأْكُلُ"
    ],
    "correct": 0,
    "explanation": "Fi'il Mudhari' damir أَنْتِ berawalan Ta' dan berakhiran Ya' Nun (ـِينَ): تَأْكُلِينَ."
  },
  {
    "id": 66,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (هُمْ) مِنْ فِعْلِ (يَعْمَلُ)؟",
    "options": [
      "تَعْمَلُونَ",
      "يَعْمَلُونَ",
      "يَعْمَلْنَ",
      "أَعْمَلُ"
    ],
    "correct": 1,
    "explanation": "Fi'il Mudhari' damir هُمْ berawalan Ya' dan berakhiran Wawu Nun (ـُونَ): يَكْمَلُونَ."
  },
  {
    "id": 67,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (هُنَّ) مِنْ فِعْلِ (يَجْلِسُ)؟",
    "options": [
      "يَجْلِسُونَ",
      "يَجْلِسْنَ",
      "تَجْلِسْنَ",
      "تَجْلِسُونَ"
    ],
    "correct": 1,
    "explanation": "Fi'il Mudhari' damir هُنَّ berawalan Ya' dan berakhiran Nun Sukun Niswah (ـْنَ): يَجْلِسْنَ."
  },
  {
    "id": 68,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (أَنْتُنَّ) مِنْ فِعْلِ (يَفْهَمُ)؟",
    "options": [
      "تَفْهَمْنَ",
      "يَفْهَمْنَ",
      "تَفْهَمُونَ",
      "تَفْهَمِينَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Mudhari' damir أَنْتُنَّ berawalan Ta' dan berakhiran Nun Niswah (ـْنَ): تَفْهَمْنَ."
  },
  {
    "id": 69,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (أَنْتَ) مِنْ فِعْلِ (تَنَاوَلَ - يَتَنَاوَلُ)؟",
    "options": [
      "أَتَنَاوَلُ",
      "تَتَنَاوَلُ",
      "يَتَنَاوَلُ",
      "نَتَنَاوَلُ"
    ],
    "correct": 1,
    "explanation": "Fi'il Mudhari' damir أَنْتَ berawalan Ta': تَتَنَاوَلُ."
  },
  {
    "id": 70,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (هُمَا مُذَكَّر) مِنْ فِعْلِ (يَكْتُبُ)؟",
    "options": [
      "يَكْتُبَانِ",
      "تَكْتُبَانِ",
      "يَكْتُبُونَ",
      "تَكْتُبُونَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Mudhari' damir هُمَا mudzakkar: يَكْتُبَانِ."
  },
  {
    "id": 71,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ الْفِعْلِ الْمُضَارِعِ لِلضَّمِيرِ (هُمَا مُؤَنَّث) مِنْ فِعْلِ (يَقْرَأُ)؟",
    "options": [
      "تَقْرَأَانِ",
      "يَقْرَأَانِ",
      "تَقْرَأُونَ",
      "يَقْرَأْنَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Mudhari' damir هُمَا mu'annath: تَقْرَأَانِ."
  },
  {
    "id": 72,
    "babId": "topik2",
    "modelId": "model2",
    "question": "حُرُوفُ الْمُضَارَعَةِ الأَرْبَعَةُ الْمَجْمُوعَةُ فِي كَلِمَةِ (أَنَيْتُ) هِيَ:",
    "options": [
      "أ ، ن ، ي ، ت",
      "أ ، ب ، ت ، ث",
      "م ، ن ، و ، ي",
      "ج ، ح ، خ ، د"
    ],
    "correct": 0,
    "explanation": "Huruf Mudhara'ah ada 4 disingkat (أَنَيْتُ): Hamzah, Nun, Ya', Ta'."
  },
  {
    "id": 73,
    "babId": "topik2",
    "modelId": "model2",
    "question": "الْفِعْلُ الْمُضَارِعُ يَدُلُّ عَلَى الْحَدَثِ فِي الزَّمَنِ...",
    "options": [
      "الْمَاضِي فَقَطْ",
      "الْحَاضِرِ أَوِ الْمُسْتَقْبَلِ",
      "الأَمْرِ فَقَطْ",
      "الْبَعِيدِ"
    ],
    "correct": 1,
    "explanation": "Fi'il Mudhari' menunjukkan peristiwa masa sekarang (Hal) atau akan datang (Istaqbal)."
  },
  {
    "id": 74,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا الضَّمِيرُ الْمُنَاسِبُ لِلْفِعْلِ (يَشْعُرُونَ)؟",
    "options": [
      "هُمْ",
      "أَنْتُمْ",
      "هُنَّ",
      "أَنْتُنَّ"
    ],
    "correct": 0,
    "explanation": "يَشْعُرُونَ berawalan Ya' dan akhiran -ُونَ maka damirnya adalah هُمْ."
  },
  {
    "id": 75,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا الضَّمِيرُ الْمُنَاسِبُ لِلْفِعْلِ (تَسْتَرِيحِينَ)؟",
    "options": [
      "أَنْتِ",
      "أَنْتُمْ",
      "هِيَ",
      "أَنَا"
    ],
    "correct": 0,
    "explanation": "تَسْتَرِيحِينَ berawalan Ta' dan akhiran -ِينَ maka damirnya adalah أَنْتِ."
  },
  {
    "id": 76,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا الضَّمِيرُ الْمُنَاسِبُ لِلْفِعْلِ (نُمَارِسُ)؟",
    "options": [
      "نَحْنُ",
      "أَنَا",
      "هُمْ",
      "أَنْتَ"
    ],
    "correct": 0,
    "explanation": "نُمَارِسُ berawalan Nun (نـ) maka damirnya adalah نَحْنُ."
  },
  {
    "id": 77,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا الضَّمِيرُ الْمُنَاسِبُ لِلْفِعْلِ (أَزُورُ)؟",
    "options": [
      "أَنَا",
      "نَحْنُ",
      "هُوَ",
      "أَنْتَ"
    ],
    "correct": 0,
    "explanation": "أَزُورُ berawalan Hamzah (أـ) maka damirnya adalah أَنَا."
  },
  {
    "id": 78,
    "babId": "topik2",
    "modelId": "model2",
    "question": "حَوِّلْ الْجُمْلَةَ (أَحْمَدُ يَذْهَبُ إِلَى الْمُسْتَشْفَى) إِلَى الْمُؤَنَّثِ (فَاطِمَةُ ...):",
    "options": [
      "فَاطِمَةُ تَذْهَبُ إِلَى الْمُسْتَشْفَى",
      "فَاطِمَةُ يَذْهَبُ",
      "فَاطِمَةُ أَذْهَبُ",
      "فَاطِمَةُ نَذْهَبُ"
    ],
    "correct": 0,
    "explanation": "Subjek Fatimah (mu'annath / هِيَ) mengunakan تَذْهَبُ."
  },
  {
    "id": 79,
    "babId": "topik2",
    "modelId": "model2",
    "question": "مَا صِيغَةُ (يَعْرِفُ) عِنْدَ إِضَافَةِ الضَّمِيرِ (أَنْتُمَا)؟",
    "options": [
      "تَعْرِفَانِ",
      "يَعْرِفَانِ",
      "تَعْرِفُونَ",
      "تَعْرِفْنَ"
    ],
    "correct": 0,
    "explanation": "Damir أَنْتُمَا pada Fi'il Mudhari': تَعْرِفَانِ."
  },
  {
    "id": 80,
    "babId": "topik2",
    "modelId": "model2",
    "question": "أَيُّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الآتِيَةِ لَيْسَتْ فِعْلاً مُضَارِعًا؟",
    "options": [
      "شَرِبَ",
      "يَشْرَبُ",
      "تَشْرَبُ",
      "أَشْرَبُ"
    ],
    "correct": 0,
    "explanation": "شَرِبَ adalah Fi'il Madhy (bukan Fi'il Mudhari')."
  },
  {
    "id": 81,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هِيَ الْكَعْبَةُ الْمُشَرَّفَةُ فِي مَكَّةَ الْمُكَرَّمَةِ؟",
    "options": [
      "قِبْلَةُ الْمُسْلِمِينَ فِي الصَّلاَةِ",
      "مَسْجِدٌ فِي الْمَدِينَةِ",
      "جَبَلٌ فِي عَرَفَاتٍ",
      "مَكَانٌ فِي مِنًى"
    ],
    "correct": 0,
    "explanation": "Ka'bah adalah Kiblat Umat Islam dalam shalat."
  },
  {
    "id": 82,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا مَعْنَى (الطَّوَافُ) فِي الْحَجِّ وَالْعُمْرَةِ؟",
    "options": [
      "الدَّوَرَانُ حَوْلَ الْكَعْبَةِ سَبْعَةَ أَشْوَاطٍ",
      "الْمَشْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ",
      "الْوُقُوفُ بِعَرَفَةَ",
      "رَمْيُ الْجَمَرَاتِ"
    ],
    "correct": 0,
    "explanation": "Tawaf adalah mengelilingi Ka'bah sebanyak 7 kali putaran."
  },
  {
    "id": 83,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا مَعْنَى (السَّعْيُ) فِي الْمَنَاسِكِ؟",
    "options": [
      "الْمَشْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ سَبْعَةَ أَشْوَاطٍ",
      "الدَّوَرَانُ حَوْلَ الْكَعْبَةِ",
      "حَلْقُ الشَّعْرِ",
      "ذَبْحُ الْهَدْيِ"
    ],
    "correct": 0,
    "explanation": "Sa'i adalah berjalan/berlari kecil antara bukit Safa dan Marwah 7 kali."
  },
  {
    "id": 84,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا مَعْنَى (التَّحَلُّلُ) بَعْدَ أَدَاءِ الْمَنَاسِكِ؟",
    "options": [
      "قَصُّ الشَّعْرِ أَوْ حَلْقُهُ",
      "لُبْسُ مَلاَبِسِ الإِحْرَامِ",
      "قِرَاءَةُ التَّلْبِيَةِ",
      "الْمَبِيتُ فِي مُزْدَلِفَةَ"
    ],
    "correct": 0,
    "explanation": "Tahallul adalah mencukur atau memotong sebagian rambut kepala."
  },
  {
    "id": 85,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هُوَ الإِحْرَامُ فِي الْحَجِّ وَالْعُمْرَةِ؟",
    "options": [
      "نِيَّةُ الدُّخُولِ فِي النُّسُكِ مَعَ لُبْسِ مَلاَبِسِ الإِحْرَامِ",
      "الرُّجُوعُ إِلَى الْوَطَنِ",
      "شُرْبُ مَاءِ زَمْزَمَ",
      "الصَّلاَةُ فِي الْمَسْجِدِ"
    ],
    "correct": 0,
    "explanation": "Ihram adalah berniat masuk dalam ibadah haji/umrah dengan mengenakan pakaian ihram."
  },
  {
    "id": 86,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَعَ مَنْ ذَهَبَ سَلْمَانُ لِلأَدَاءِ مَنَاسِكِ الْحَجِّ فِي القِرَاءَةِ؟",
    "options": [
      "مَعَ عَمِّهِ أَحْمَدَ",
      "مَعَ أُسْرَتِهِ",
      "مَعَ صَدِيقِهِ",
      "مُفْرَدًا"
    ],
    "correct": 0,
    "explanation": "Sesuai Qira'ah Bab 3: Salman berhaji bersama pamannya Ahmad (عَمُّهُ أَحْمَدُ)."
  },
  {
    "id": 87,
    "babId": "topik3",
    "modelId": "model1",
    "question": "أَيْنَ يَقِفُ الْحُجَّاجُ فِي الْيَوْمِ التَّاسِعِ مِنْ ذِي الْحِجَّةِ؟",
    "options": [
      "فِي عَرَفَاتٍ (جَبَلِ عَرَفَةَ)",
      "فِي الْمَدِينَةِ",
      "فِي جُدَّةَ",
      "فِي الطَّائِفِ"
    ],
    "correct": 0,
    "explanation": "Jamaah haji melaksanakan wukuf di Arafah pada 9 Dzulhijjah."
  },
  {
    "id": 88,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَاذَا قَالَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ عَنِ الْعُمْرَةِ فِي رَمَضَانَ؟",
    "options": [
      "عُمْرَةٌ فِي رَمَضَانَ تَعْدِلُ حَجَّةً",
      "الْعُمْرَةُ غَيْرُ مُسْتَحَبَّةٍ فِي رَمَضَانَ",
      "الْعُمْرَةُ تُكَرَّهُ فِي رَمَضَانَ",
      "لاَ فَضْلَ لِلْعُمْرَةِ فِي رَمَضَانَ"
    ],
    "correct": 0,
    "explanation": "Sabda Nabi SAW: Umrah di bulan Ramadan pahalanya setara dengan ibadah haji."
  },
  {
    "id": 89,
    "babId": "topik3",
    "modelId": "model1",
    "question": "أَيْنَ تَقَعُ الْكَعْبَةُ الْمُشَرَّفَةُ؟",
    "options": [
      "فِي الْمَسْجِدِ الْحَرَامِ بِمَكَّةَ الْمُكَرَّمَةِ",
      "فِي الْمَسْجِدِ النَّبَوِيِّ",
      "فِي الْمَسْجِدِ الأَقْصَى",
      "فِي الْقَاهِرَةِ"
    ],
    "correct": 0,
    "explanation": "Ka'bah terletak di dalam Masjidil Haram, Makkah Al-Mukarramah."
  },
  {
    "id": 90,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا لَوْنُ الْحَجَرِ الأَسْوَدِ حِينَ نَزَلَ مِنَ الْجَنَّةِ كَمَا فِي الْحِوَارِ؟",
    "options": [
      "نَاصِعُ الْبَيَاضِ (أَبْيَضُ)",
      "أَسْوَدُ قَاتِمٌ",
      "أَحْمَرُ",
      "أَخْضَرُ"
    ],
    "correct": 0,
    "explanation": "Hajar Aswad ketika diturunkan dari Surga berwarna putih bersih (نَاصِعُ الْبَيَاضِ)."
  },
  {
    "id": 91,
    "babId": "topik3",
    "modelId": "model1",
    "question": "أَيْنَ يَقُومُ الْحُجَّاجُ بِرَمْيِ الْجَمَرَاتِ؟",
    "options": [
      "فِي مِنًى",
      "فِي عَرَفَةَ",
      "فِي الْمَطَارِ",
      "فِي الْمَدِينَةِ"
    ],
    "correct": 0,
    "explanation": "Lempar Jumrah dilaksanakan di Mina (مِنًى)."
  },
  {
    "id": 92,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هُوَ مَقَامُ إِبْرَاهِيمَ فِي الْمَسْجِدِ الْحَرَامِ؟",
    "options": [
      "الْمَكَانُ الَّذِي وَقَفَ عَلَيْهِ إِبْرَاهِيمُ عِنْدَ بِنَاءِ الْكَعْبَةِ",
      "قَبْرُ إِبْرَاهِيمَ",
      "جَبَلٌ كَبِيرٌ",
      "بِئْرُ زَمْزَمَ"
    ],
    "correct": 0,
    "explanation": "Maqam Ibrahim adalah batu tempat berpijak Nabi Ibrahim AS saat membangun Ka'bah."
  },
  {
    "id": 93,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا مَعْنَى (الْمِيقَاتُ الْمَكَانِيُّ) فِي الْحَجِّ؟",
    "options": [
      "الْمَكَانُ الَّذِي يُحْرِمُ مِنْهُ الْحَاجُّ أَوْ الْمُعْتَمِرُ",
      "وَقْتُ صَلاَةِ الْعِيدِ",
      "فُنْدُقُ الْحُجَّاجِ",
      "مَطَارُ جُدَّةَ"
    ],
    "correct": 0,
    "explanation": "Miqat Makani adalah batas tempat dimulainya niat ihram haji atau umrah."
  },
  {
    "id": 94,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا مَعْنَى (التَّلْبِيَةُ) فِي الْحَجِّ (لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ...)؟",
    "options": [
      "قِرَاءَةُ ذِكْرِ الإِجَابَةِ لِلَّهِ",
      "الدُّعَاءُ لِلْوَالِدَيْنِ",
      "قِرَاءَةُ السُّورَةِ",
      "الْخُطْبَةُ"
    ],
    "correct": 0,
    "explanation": "Talbiyah adalah ucapan kalimat 'Labbaykallahumma labbayk' menjawab panggilan Allah."
  },
  {
    "id": 95,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هُوَ (مَاءُ زَمْزَمَ)؟",
    "options": [
      "مَاءٌ مُبَارَكٌ فِي مَكَّةَ",
      "مَاءُ النَّهْرِ",
      "مَاءُ الْبَحْرِ",
      "مَاءُ الْمَطَرِ"
    ],
    "correct": 0,
    "explanation": "Air Zamzam adalah air suci penuh berkah di Makkah."
  },
  {
    "id": 96,
    "babId": "topik3",
    "modelId": "model1",
    "question": "أَيْنَ يَمْبُتُ الْحُجَّاجُ فِي لَيْلَةِ الْعَاشِرِ مِنْ ذِي الْحِجَّةِ بَعْدَ عَرَفَةَ؟",
    "options": [
      "فِي مُزْدَلِفَةَ",
      "فِي جُدَّةَ",
      "فِي الْمَدِينَةِ",
      "فِي الرِّيَاضِ"
    ],
    "correct": 0,
    "explanation": "Setelah Arafah, jamaah bermalam (mabit) di Muzdalifah."
  },
  {
    "id": 97,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هِيَ (الْمَدِينَةُ الْمُنَوَّرَةُ) فِي السَّفَرِ لِلْحَجِّ؟",
    "options": [
      "مَدِينَةُ الرَّسُولِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَفِيهَا الْمَسْجِدُ النَّبَوِيُّ",
      "عَاصِمَةُ مِصْرَ",
      "مَكَانُ الْكَعْبَةِ",
      "مِينَاكُ جُدَّةَ"
    ],
    "correct": 0,
    "explanation": "Madinah Al-Munawwarah adalah kota Nabi SAW tempat Masjid Nabawi berada."
  },
  {
    "id": 98,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هِيَ (الرَّوْضَةُ الشَّرِيفَةُ) فِي الْمَسْجِدِ النَّبَوِيِّ؟",
    "options": [
      "مَكَانٌ بَيْنَ بَيْتِ النَّبِيِّ وَمِنْبَرِهِ وَهُوَ رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ",
      "سُوقٌ فِي الْمَدِينَةِ",
      "جَبَلُ أُحُدٍ",
      "مَطَارُ الْمَدِينَةِ"
    ],
    "correct": 0,
    "explanation": "Raudaah Syarifah adalah area antara rumah dan mimbar Nabi SAW di Masjid Nabawi."
  },
  {
    "id": 99,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هُوَ (طَوَافُ الْوَدَاعِ)؟",
    "options": [
      "طَوَافٌ يَقُومُ بِهِ الْحَاجُّ عِنْدَ مُغَادَرَةِ مَكَّةَ",
      "طَوَافٌ عِنْدَ الوُصُولِ",
      "طَوَافُ الرُّكْنِ",
      "طَوَافُ النَّفْلِ"
    ],
    "correct": 0,
    "explanation": "Tawaf Wada' adalah tawaf perpisahan saat hendak meninggalkan Makkah."
  },
  {
    "id": 100,
    "babId": "topik3",
    "modelId": "model1",
    "question": "مَا هُوَ الرُّكْنُ الأَوَّلُ مِنْ أَرْكَانِ الْحَجِّ؟",
    "options": [
      "الإِحْرَامُ",
      "الطَّوَافُ",
      "السَّعْيُ",
      "الْوُقُوفُ"
    ],
    "correct": 0,
    "explanation": "Rukun haji pertama adalah Niat Ihram."
  },
  {
    "id": 101,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ لِلضَّمِيرِ (أَنْتَ) مِنْ فِعْلِ (كَتَبَ - يَكْتُبُ)؟",
    "options": [
      "اكْتُبِي",
      "اكْتُبْ",
      "اكْتُبُوا",
      "لاَ تَكْتُبْ"
    ],
    "correct": 1,
    "explanation": "Fi'il Amr damir أَنْتَ berakhiran sukun: اكْتُبْ."
  },
  {
    "id": 102,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ لِلضَّمِيرِ (أَنْتُمْ) مِنْ فِعْلِ (فَتَحَ - يَفْتَحُ)؟",
    "options": [
      "افْتَحْ",
      "افْتَحِي",
      "افْتَحُوا",
      "افْتَحْنَ"
    ],
    "correct": 2,
    "explanation": "Fi'il Amr damir أَنْتُمْ berakhiran Wawu Sukun & Alif (ـُوا): افْتَحُوا."
  },
  {
    "id": 103,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ لِلضَّمِيرِ (أَنْتِ) مِنْ فِعْلِ (جَلَسَ - يَجْلِسُ)؟",
    "options": [
      "اجْلِسْ",
      "اجْلِسِي",
      "اجْلِسُوا",
      "اجْلِسْنَ"
    ],
    "correct": 1,
    "explanation": "Fi'il Amr damir أَنْتِ berakhiran Ya' Sukun (ـِي): اجْلِسِي."
  },
  {
    "id": 104,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ لِلضَّمِيرِ (أَنْتُنَّ) مِنْ فِعْلِ (فَكَّرَ - يُفَكِّرُ)؟",
    "options": [
      "فَكِّرْ",
      "فَكِّرُوا",
      "فَكِّرْنَ",
      "فَكِّرِي"
    ],
    "correct": 2,
    "explanation": "Fi'il Amr damir أَنْتُنَّ berakhiran Nun Niswah Fathah (ـْنَ): فَكِّرْنَ."
  },
  {
    "id": 105,
    "babId": "topik3",
    "modelId": "model2",
    "question": "إِذَا كَانَ الْمُنَادَى اسْمَ عَلَمٍ مُفْرَدًا (مِثْلُ: يَا زَيْدُ)، فَإِنَّهُ يُبْنَى عَلَى...",
    "options": [
      "الضَّمِّ",
      "الْفَتْحِ",
      "الْكَسْرِ",
      "السُّكُونِ"
    ],
    "correct": 0,
    "explanation": "Munada Nama Tunggal (Mufrad 'Alam) dibaca Mabni Dhammah: يَا زَيْدُ."
  },
  {
    "id": 106,
    "babId": "topik3",
    "modelId": "model2",
    "question": "إِذَا كَانَ الْمُنَادَى مُضَافًا (مِثْلُ: يَا عَبْدَ اللهِ)، فَإِنَّ حُكْمَهُ...",
    "options": [
      "النَّصْبُ (Mansub / Fathah)",
      "الرَّفْعُ",
      "الْجَرُّ",
      "الْجَزْمُ"
    ],
    "correct": 0,
    "explanation": "Munada Mudhaf hukumnya Mansub (Fathah): يَا عَبْدَ اللهِ."
  },
  {
    "id": 107,
    "babId": "topik3",
    "modelId": "model2",
    "question": "فِعْلُ الأَمْرِ يُصَاغُ فَقَطْ لِـ...",
    "options": [
      "ضَمَائِرِ الْمُخَاطَبِ (أَنْتَ، أَنْتُمَا، أَنْتُمْ، أَنْتِ، أَنْتُمَا، أَنْتُنَّ)",
      "ضَمَائِرِ الْغَائِبِ",
      "ضَمَائِرِ الْمُتَكَلِّمِ",
      "كُلِّ الضَّمَائِرِ"
    ],
    "correct": 0,
    "explanation": "Fi'il Amr hanya dibuat untuk 6 Dhamir Mukhatab (orang kedua)."
  },
  {
    "id": 108,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ لِلضَّمِيرِ (أَنْتُمَا) مِنْ فِعْلِ (ذَهَبَ)؟",
    "options": [
      "اذْهَبَا",
      "اذْهَبْ",
      "اذْهَبُوا",
      "اذْهَبْنَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Amr damir أَنْتُمَا berakhiran Alif (ـَا): اذْهَبَا."
  },
  {
    "id": 109,
    "babId": "topik3",
    "modelId": "model2",
    "question": "أَيُّ جُمْلَةٍ فِيهَا مُنَادَى مُبْنَى عَلَى الضَّمِّ؟",
    "options": [
      "يَا مُحَمَّدُ، اقْرَأِ الْكِتَابَ",
      "يَا طَالِبَ الْعِلْمِ، اجْتَهِدْ",
      "يَا عَبْدَ الرَّحْمَنِ، تَعَالَ",
      "يَا رَبَّ الْعَالَمِينَ"
    ],
    "correct": 0,
    "explanation": "يَا مُحَمَّدُ adalah Munada Mufrad 'Alam maka Mabni Dhammah."
  },
  {
    "id": 110,
    "babId": "topik3",
    "modelId": "model2",
    "question": "أَيُّ جُمْلَةٍ فِيهَا مُنَادَى مَنْصُوبٌ لِأَنَّهُ مُضَافٌ؟",
    "options": [
      "يَا أَهْلَ مَكَّةَ، أَهْلاً بِكُمْ",
      "يَا خَالِدُ، اقْتَرِبْ",
      "يَا مَرْيَمُ، اشْرَبِي",
      "يَا رَجُلُ، انْتَظِرْ"
    ],
    "correct": 0,
    "explanation": "يَا أَهْلَ مَكَّةَ adalah Munada Mudhaf (أَهْلَ dipatahkan/mansub)."
  },
  {
    "id": 111,
    "babId": "topik3",
    "modelId": "model2",
    "question": "عِنْدَ نِدَاءِ الاسْمِ الْمُقْتَرِنِ بِـ (الـ) لِلْمُذَكَّرِ، نَسْتَخْدِمُ...",
    "options": [
      "يَا أَيُّهَا (مِثْلُ: يَا أَيُّهَا النَّبِيُّ)",
      "يَا أَيَّتُهَا",
      "يَا هَذِهِ",
      "يَا تِلْكَ"
    ],
    "correct": 0,
    "explanation": "Memanggil Isim ber-AL mudzakkar menggunakan kata panggil: يَا أَيُّهَا."
  },
  {
    "id": 112,
    "babId": "topik3",
    "modelId": "model2",
    "question": "عِنْدَ نِدَاءِ الاسْمِ الْمُقْتَرِنِ بِـ (الـ) لِلْمُؤَنَّثِ، نَسْتَخْدِمُ...",
    "options": [
      "يَا أَيَّتُهَا (مِثْلُ: يَا أَيَّتُهَا النَّفْسُ)",
      "يَا أَيُّهَا",
      "يَا هَذَا",
      "يَا هُوَ"
    ],
    "correct": 0,
    "explanation": "Memanggil Isim ber-AL mu'annath menggunakan kata panggil: يَا أَيَّتُهَا."
  },
  {
    "id": 113,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ مِنْ (قَالَ - يَقُولُ) لِلضَّمِيرِ (أَنْتَ)؟",
    "options": [
      "قُلْ",
      "قُولُوا",
      "قُولِي",
      "قُولاَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Amr dari قَالَ - يَقُولُ untuk أَنْتَ adalah: قُلْ."
  },
  {
    "id": 114,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ مِنْ (قَامَ - يَقُومُ) لِلضَّمِيرِ (أَنْتُمْ)؟",
    "options": [
      "قُومُوا",
      "قُمْ",
      "قُومِي",
      "قُمْنَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Amr dari قَامَ - يَقُومُ untuk أَنْتُمْ adalah: قُومُوا."
  },
  {
    "id": 115,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ مِنْ (نَظَرَ - يَنْظُرُ) لِلضَّمِيرِ (أَنْتِ)؟",
    "options": [
      "انْظُرِي",
      "انْظُرْ",
      "انْظُرُوا",
      "انْظُرْنَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Amr dari نَظَرَ untuk أَنْتِ adalah: انْظُرِي."
  },
  {
    "id": 116,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا هُوَ حَرْفُ النِّدَاءِ الأَكْثَرُ اسْتِعْمَالاً فِي اللُّغَةِ الْعَرَبِيَّةِ؟",
    "options": [
      "يَا",
      "أَيْ",
      "أَيَا",
      "هَيَا"
    ],
    "correct": 0,
    "explanation": "Huruf nida' paling populer adalah يَا."
  },
  {
    "id": 117,
    "babId": "topik3",
    "modelId": "model2",
    "question": "حَوِّلْ (اكْتُبْ يَا أَحْمَدُ) إِلَى الْمُؤَنَّثِ (فَاطِمَةُ):",
    "options": [
      "اكْتُبِي يَا فَاطِمَةُ",
      "اكْتُبْ يَا فَاطِمَةُ",
      "اكْتُبُوا يَا فَاطِمَةُ",
      "اكْتُبْنَ يَا فَاطِمَةُ"
    ],
    "correct": 0,
    "explanation": "Untuk Fatimah (أَنْتِ) bentuk perintahnya: اكْتُبِي."
  },
  {
    "id": 118,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ مِنْ (سَمِعَ - يَسْمَعُ) لِلضَّمِيرِ (أَنْتُمْ)؟",
    "options": [
      "اسْمَعُوا",
      "اسْمَعْ",
      "اسْمَعِي",
      "اسْمَعْنَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Amr dari سَمِعَ untuk أَنْتُمْ adalah: اسْمَعُوا."
  },
  {
    "id": 119,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا حُكْمُ المُنَادَى النَّكِرَةِ المَقْصُودَةِ (مِثْلُ: يَا رَجُلُ)؟",
    "options": [
      "مُبْنَى عَلَى الضَّمِّ",
      "مَنْصُوبٌ",
      "مَجْرُورٌ",
      "مَجْزُومٌ"
    ],
    "correct": 0,
    "explanation": "Nakirah Maqsudah bermakna khusus dibangun atas Dhammah (Mabni Dhammah)."
  },
  {
    "id": 120,
    "babId": "topik3",
    "modelId": "model2",
    "question": "مَا صِيغَةُ فِعْلِ الأَمْرِ مِنْ (أَكَلَ - يَأْكُلُ) لِلضَّمِيرِ (أَنْتَ)؟",
    "options": [
      "كُلْ",
      "أُكُلْ",
      "كُلُوا",
      "كُلِي"
    ],
    "correct": 0,
    "explanation": "Fi'il Amr dari أَكَلَ untuk أَنْتَ adalah: كُلْ."
  },
  {
    "id": 121,
    "babId": "topik4",
    "modelId": "model1",
    "question": "كَمْ عَدَدُ الأَدْيَانِ الرَّسْمِيَّةِ فِي إِنْدُونِيسِيَا؟",
    "options": [
      "٤ أَدْيَانٍ",
      "٥ أَدْيَانٍ",
      "٦ أَدْيَانٍ",
      "٧ أَدْيَانٍ"
    ],
    "correct": 2,
    "explanation": "Sesuai teks Bab 4: Ada 6 agama resmi di Indonesia."
  },
  {
    "id": 122,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ مَكَانُ عِبَادَةِ الْمُسْلِمِينَ؟",
    "options": [
      "الْمَسْجِدُ",
      "الْكَنِيسَةُ",
      "فُورَا",
      "فِهَارَا"
    ],
    "correct": 0,
    "explanation": "Tempat ibadah Umat Islam adalah Masjid (الْمَسْجِدُ)."
  },
  {
    "id": 123,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ مَكَانُ عِبَادَةِ الْمَسِيحِيِّينَ (الْكَاثُولِيكِ وَالْبُرُوتِسْتَانْتِ)؟",
    "options": [
      "الْكَنِيسَةُ",
      "الْمَسْجِدُ",
      "الْمَعْبَدُ",
      "فُورَا"
    ],
    "correct": 0,
    "explanation": "Tempat ibadah Umat Kristiani adalah Gereja (الْكَنِيسَةُ)."
  },
  {
    "id": 124,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ مَكَانُ عِبَادَةِ الْهِنْدُوسِيِّينَ فِي بَالِي وَغَيْرِهَا؟",
    "options": [
      "فُورَا",
      "فِهَارَا",
      "الْمَسْجِدُ",
      "الْكَنِيسَةُ"
    ],
    "correct": 0,
    "explanation": "Tempat ibadah Umat Hindu adalah Pura (فُورَا)."
  },
  {
    "id": 125,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ مَكَانُ عِبَادَةِ الْبُوذِيِّينَ؟",
    "options": [
      "فِهَارَا",
      "فُورَا",
      "الْمَسْجِدُ",
      "الْكَنِيسَةُ"
    ],
    "correct": 0,
    "explanation": "Tempat ibadah Umat Buddha adalah Vihara (فِهَارَا)."
  },
  {
    "id": 126,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ مَكَانُ عِبَادَةِ الْكُونْفُوشِيِّينَ؟",
    "options": [
      "الْمَعْبَدُ / الْكِلِنْتِينْج",
      "الْمَسْجِدُ",
      "الْكَنِيسَةُ",
      "فُورَا"
    ],
    "correct": 0,
    "explanation": "Tempat ibadah Umat Khonghucu adalah Klenteng (الْمَعْبَدُ)."
  },
  {
    "id": 127,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (التَّسَامُحُ) فِي الْمُجْتَمَعِ؟",
    "options": [
      "Toleransi / Saling Menghormati",
      "Perselisihan",
      "Perpisahan",
      "Perdebatan"
    ],
    "correct": 0,
    "explanation": "التَّسَامُحُ artinya Toleransi dan saling menghormati antar umat beragama."
  },
  {
    "id": 128,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ (بَانْتَجَاسِيلاَ) فِي إِنْدُونِيسِيَا؟",
    "options": [
      "أَسَاسُ الدَّوْلَةِ الإِنْدُونِيسِيَّةِ",
      "اسْمُ مَدِينَةٍ",
      "اسْمُ جَبَلٍ",
      "عَمَلَةٌ نَقْدِيَّةٌ"
    ],
    "correct": 0,
    "explanation": "Pancasila (بَانْتَجَاسِيلاَ) adalah Dasar Negara Indonesia."
  },
  {
    "id": 129,
    "babId": "topik4",
    "modelId": "model1",
    "question": "أَيْنَ يَسْكُنُ خَالِدٌ وَسُونَاَرْطُو وَفْرَانْسِيسْكُوسْ فِي نَصِّ الْقِرَاءَةِ؟",
    "options": [
      "فِي جُومْبَانْج (Jombang)",
      "فِي سُورَابَايَا",
      "فِي بَالِي",
      "فِي جَاكَرْتَا"
    ],
    "correct": 0,
    "explanation": "Sesuai Qira'ah Bab 4: Khalid dkk tinggal di Jombang Jawa Timur."
  },
  {
    "id": 130,
    "babId": "topik4",
    "modelId": "model1",
    "question": "كَمْ نِسْبَةُ الْمُسْلِمِينَ فِي إِنْدُونِيسِيَا حَسَبَ نَصِّ الْقِرَاءَةِ؟",
    "options": [
      "٨٧,٢ %",
      "٥٠ %",
      "٦,٩ %",
      "٠,٧ %"
    ],
    "correct": 0,
    "explanation": "Sesuai data teks Bab 4: Jumlah Umat Islam sekitar 87,2 %."
  },
  {
    "id": 131,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا اسْمُ الْمَعْبَدِ الَّذِي يَتَعَبَّدُ فِيهِ سُونَاَرْطُو فِي جُومْبَانْج؟",
    "options": [
      "مَعْبَدُ هُوكْ لِيُؤْنْج كِيُؤْنْج",
      "فُورَا بَسَاكِيْه",
      "الْمَسْجِدُ الْكَبِيرُ",
      "كَنِيسَةُ جُومْبَانْج"
    ],
    "correct": 0,
    "explanation": "Sesuai teks Bab 4: Klenteng Hok Liong Kiong di Jombang."
  },
  {
    "id": 132,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ شِعَارُ إِنْدُونِيسِيَا فِي التَّنَوُّعِ الدِّينِيِّ وَالثَّقَافِيِّ؟",
    "options": [
      "الْوَحْدَةُ فِي التَّنَوُّعِ (Bhinneka Tunggal Ika)",
      "التَّنَوُّعُ فَقَطْ",
      "الإِسْلَامُ فَقَطْ",
      "السَّلاَمُ"
    ],
    "correct": 0,
    "explanation": "Semboyan Indonesia adalah Bhinneka Tunggal Ika (الْوَحْدَةُ فِي التَّنَوُّعِ)."
  },
  {
    "id": 133,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَنْ هُوَ مُصَمِّمُ وَمُؤَلِّفُ هَذِهِ الْمَادَّةِ التَّعْلِيمِيَّةِ التَّفَاعُلِيَّةِ؟",
    "options": [
      "Yosi, S. Ag, M. Pd. (MAN 1 Pontianak)",
      "Ahmad, S. Pd. (MAN 2 Jakarta)",
      "Fatimah, M. Ag. (MTsN 1 Surabaya)",
      "Ustadz Syarif (Ponpes Pontianak)"
    ],
    "correct": 0,
    "explanation": "Penyusun & Pemilik Media: Yosi, S. Ag, M. Pd. (MAN 1 Pontianak)."
  },
  {
    "id": 134,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا مَعْنَى (حُرِّيَّةُ التَّعَبُّدِ) فِي الدُّسْتُورِ؟",
    "options": [
      "Kebebasan Beribadah",
      "Kebebasan Berdagang",
      "Hak Pilih",
      "Kewajiban Pajak"
    ],
    "correct": 0,
    "explanation": "حُرِّيَّةُ التَّعَبُّدِ artinya Kebebasan Beribadah sesuai keyakinan."
  },
  {
    "id": 135,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا مَعْنَى (الإِخَاءُ الإِنْسَانِيُّ)؟",
    "options": [
      "Persaudaraan Kemanusiaan",
      "Persaingan Ekonomi",
      "Perbedaan Ras",
      "Tingkat Pendidikan"
    ],
    "correct": 0,
    "explanation": "الإِخَاءُ الإِنْسَانِيُّ artinya Persaudaraan Kemanusiaan."
  },
  {
    "id": 136,
    "babId": "topik4",
    "modelId": "model1",
    "question": "أَيْنَ تَقَعُ كَنِيسَةُ (إِيمَانُوئِيلْ) فِي نَصِّ الْقِرَاءَةِ؟",
    "options": [
      "فِي جُومْبَانْج",
      "فِي جَاكَرْتَا",
      "فِي بَالِي",
      "فِي مَدَانْ"
    ],
    "correct": 0,
    "explanation": "Gereja Immanuel bertempat di Jombang."
  },
  {
    "id": 137,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ (الْعِيدُ) الأَكْبَرُ لِلْمُسْلِمِينَ بَعْدَ صَوْمِ رَمَضَانَ؟",
    "options": [
      "عِيدُ الْفِطْرِ",
      "عِيدُ المِيلاَدِ",
      "عِيدُ النَّيْرُوزِ",
      "عِيدُ اسْتِقْلاَلِ"
    ],
    "correct": 0,
    "explanation": "Hari raya Umat Islam setelah Ramadan adalah Idul Fitri (عِيدُ الْفِطْرِ)."
  },
  {
    "id": 138,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا هُوَ الْكِتَابُ الْمُقَدَّسُ لِلْمُسْلِمِينَ؟",
    "options": [
      "الْقُرْآنُ الْكَرِيمُ",
      "الإِنْجِيلُ",
      "التَّوْرَاةُ",
      "الْفِيدَا"
    ],
    "correct": 0,
    "explanation": "Kitab suci Umat Islam adalah Al-Qur'an Al-Karim."
  },
  {
    "id": 139,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (الْمُوَاطَنَةُ) فِي بَابِ الأَدْيَانِ؟",
    "options": [
      "Kewarganegaraan",
      "Kebebasan",
      "Keamanan",
      "Kedamaian"
    ],
    "correct": 0,
    "explanation": "الْمُوَاطَنَةُ artinya Kewarganegaraan."
  },
  {
    "id": 140,
    "babId": "topik4",
    "modelId": "model1",
    "question": "مَا مَعْنَى كَلِمَة (الـسَّلاَمُ) فِي الْمُجْتَمَعِ؟",
    "options": [
      "Kedamaian / Perdamaian",
      "Kekerasan",
      "Permusuhan",
      "Perdebatan"
    ],
    "correct": 0,
    "explanation": "السَّلاَمُ artinya Kedamaian / Perdamaian."
  },
  {
    "id": 141,
    "babId": "topik4",
    "modelId": "model2",
    "question": "فِي جُمْلَةِ (يَجِبُ عَلَى الْمُسْلِمِينَ أَنْ يَجْتَنِبُوا الأَعْمَالَ السَّيِّئَةَ)، أَيْنَ النَّعْتُ؟",
    "options": [
      "السَّيِّئَةَ",
      "الأَعْمَالَ",
      "الْمُسْلِمِينَ",
      "يَجِبُ"
    ],
    "correct": 0,
    "explanation": "السَّيِّئَةَ adalah Na'at Mufrad yang menyifati Man'ut (الأَعْمَالَ)."
  },
  {
    "id": 142,
    "babId": "topik4",
    "modelId": "model2",
    "question": "مَا نَوْعُ النَّعْتِ فِي جُمْلَةِ (تَرَكَ الشَّافِعِيُّ مُؤَلَّفَاتٍ نَفْعُهَا عَظِيمٌ)؟",
    "options": [
      "نَعْتُ جُمْلَةٍ إِسْمِيَّةٍ",
      "نَعْتٌ مُفْرَدٌ",
      "نَعْتُ جُمْلَةٍ فِعْلِيَّةٍ",
      "نَعْتُ شِبْهِ الْجُمْلَةِ"
    ],
    "correct": 0,
    "explanation": "نَفْعُهَا عَظِيمٌ adalah Na'at Jumlah Ismiyah yang menyifati kata nakirah مُؤَلَّفَاتٍ."
  },
  {
    "id": 143,
    "babId": "topik4",
    "modelId": "model2",
    "question": "مَا نَوْعُ النَّعْتِ فِي جُمْلَةِ (خَلَّفَ الشَّافِعِيُّ مَذْهَبًا يَحْتَرِمُهُ الْمُسْلِمُونَ)؟",
    "options": [
      "نَعْتُ جُمْلَةٍ فِعْلِيَّةٍ",
      "نَعْتٌ مُفْرَدٌ",
      "نَعْتُ جُمْلَةٍ إِسْمِيَّةٍ",
      "نَعْتُ شِبْهِ الْجُمْلَةِ"
    ],
    "correct": 0,
    "explanation": "يَحْتَرِمُهُ الْمُسْلِمُونَ adalah Na'at Jumlah Fi'liyah yang menyifati kata nakirah مَذْهَبًا."
  },
  {
    "id": 144,
    "babId": "topik4",
    "modelId": "model2",
    "question": "مَا نَوْعُ النَّعْتِ فِي جُمْلَةِ (رَأَيْتُ طَائِرًا فَوْقَ الشَّجَرَةِ)؟",
    "options": [
      "نَعْتُ شِبْهِ الْجُمْلَةِ (ظَرْفٌ)",
      "نَعْتٌ مُفْرَدٌ",
      "نَعْتُ جُمْلَةٍ إِسْمِيَّةٍ",
      "نَعْتُ جُمْلَةٍ فِعْلِيَّةٍ"
    ],
    "correct": 0,
    "explanation": "فَوْقَ الشَّجَرَةِ adalah Na'at Syibhil Jumlah (Keterangan Tempat Zharaf) menyifati طَائِرًا."
  },
  {
    "id": 145,
    "babId": "topik4",
    "modelId": "model2",
    "question": "مَا نَوْعُ النَّعْتِ فِي جُمْلَةِ (شَاهَدْتُ رَجُلاً فِي الْمَسْجِدِ)؟",
    "options": [
      "نَعْتُ شِبْهِ الْجُمْلَةِ (جَارٌّ وَمَجْرُورٌ)",
      "نَعْتٌ مُفْرَدٌ",
      "نَعْتُ جُمْلَةٍ إِسْمِيَّةٍ",
      "نَعْتُ جُمْلَةٍ فِعْلِيَّةٍ"
    ],
    "correct": 0,
    "explanation": "فِي الْمَسْجِدِ adalah Na'at Syibhil Jumlah (Jar Majrur) yang menyifati رَجُلاً."
  },
  {
    "id": 146,
    "babId": "topik4",
    "modelId": "model2",
    "question": "تَتَكَوَّنُ الإِضَافَةُ مِنْ رُكْنَيْنِ هُمَا...",
    "options": [
      "الْمُضَافُ وَالْمُضَافُ إِلَيْهِ",
      "الْفِعْلُ وَالْفَاعِلُ",
      "الْمُبْتَدَأُ وَالْخَبَرُ",
      "النَّعْتُ وَالْمَنْعُوتُ"
    ],
    "correct": 0,
    "explanation": "Susunan Idhafah terdiri dari Mudhaf dan Mudhaf Ilaih."
  },
  {
    "id": 147,
    "babId": "topik4",
    "modelId": "model2",
    "question": "مَا حُكْمُ الْمُضَافِ إِلَيْهِ دَائِمًا فِي الإِعْرَابِ؟",
    "options": [
      "الْمَجْرُورُ (Majrur / Kasrah)",
      "الْمَرْفُوعُ",
      "الْمَنْصُوبُ",
      "الْمَجْزُومُ"
    ],
    "correct": 0,
    "explanation": "Mudhaf Ilaih selalu berhukum Majrur (dengan Kasrah atau Ya')."
  },
  {
    "id": 148,
    "babId": "topik4",
    "modelId": "model2",
    "question": "شَرْطُ الْمُضَافِ فِي الإِضَافَةِ أَنْ لاَ يَكُونَ فِيهِ...",
    "options": [
      "أَلْفُ اللاَّمْ (الـ) وَالتَّنْوِينُ",
      "الْحَرَكَةُ",
      "الْحُرُوفُ",
      "الضَّمِيرُ"
    ],
    "correct": 0,
    "explanation": "Syarat Mudhaf tidak boleh ber-AL dan tidak boleh ber-Tanwin."
  },
  {
    "id": 149,
    "babId": "topik4",
    "modelId": "model2",
    "question": "فِي جُمْلَةِ (كِتَابُ الطَّالِبِ جَدِيدٌ)، أَيْنَ الْمُضَافُ إِلَيْهِ؟",
    "options": [
      "الطَّالِبِ",
      "كِتَابُ",
      "جَدِيدٌ",
      "لاَ يُوجَدُ"
    ],
    "correct": 0,
    "explanation": "الطَّالِبِ adalah Mudhaf Ilaih (berbaris Kasrah/majrur)."
  },
  {
    "id": 150,
    "babId": "topik4",
    "modelId": "model2",
    "question": "فِي جُمْلَةِ (مَدْرَسَةُ الْقَرِيَةِ كَبِيرَةٌ)، أَيْنَ الْمُضَافُ؟",
    "options": [
      "مَدْرَسَةُ",
      "الْقَرِيَةِ",
      "كَبِيرَةٌ",
      "مَدْرَسَةُ الْقَرِيَةِ"
    ],
    "correct": 0,
    "explanation": "مَدْرَسَةُ adalah Mudhaf (tanpa AL dan tanpa Tanwin)."
  },
  {
    "id": 151,
    "babId": "topik4",
    "modelId": "model2",
    "question": "الْقَاعِدَةُ النَّحْوِيَّةُ: (الْجُمَلُ وَشِبْهُ الْجُمَلِ بَعْدَ النَّكِرَاتِ...)",
    "options": [
      "صِفَاتٌ (نَعْتٌ)",
      "أَحْوَالٌ (حَالٌ)",
      "أَخْبَارٌ (خَبَرٌ)",
      "أَفْعَالٌ"
    ],
    "correct": 0,
    "explanation": "Kaidah: Kalimat/Syibhul Jumlah setelah Kata Nakirah berposisi sebagai Sifat (Na'at)."
  },
  {
    "id": 152,
    "babId": "topik4",
    "modelId": "model2",
    "question": "الْقَاعِدَةُ النَّحْوِيَّةُ: (الْجُمَلُ وَشِبْهُ الْجُمَلِ بَعْدَ الْمَعَارِفِ...)",
    "options": [
      "أَحْوَالٌ (حَالٌ)",
      "صِفَاتٌ (نَعْتٌ)",
      "أَخْبَارٌ",
      "أَفْعَالٌ"
    ],
    "correct": 0,
    "explanation": "Kaidah: Kalimat/Syibhul Jumlah setelah Kata Ma'rifah berposisi sebagai Hal."
  },
  {
    "id": 153,
    "babId": "topik4",
    "modelId": "model2",
    "question": "يَتْبَعُ النَّعْتُ الْمُفْرَدُ مَنْعُوتَهُ فِي ٤ أَشْيَاءَ هِيَ:",
    "options": [
      "الإِعْرَابُ، التَّذْكِيرُ/التَّأْنِيثُ، الإِفْرَادُ/التَّثْنِيَةُ/الْجَمْعُ، التَّعْرِيفُ/التَّنْكِيرُ",
      "الإِعْرَابُ فَقَطْ",
      "التَّأْنِيثُ فَقَطْ",
      "الْعَدَدُ فَقَطْ"
    ],
    "correct": 0,
    "explanation": "Na'at Mufrad mengikuti Man'ut dalam 4 hal: I'rab, Gender, Jumlah, dan Ma'rifah/Nakirah."
  },
  {
    "id": 154,
    "babId": "topik4",
    "modelId": "model2",
    "question": "أَيُّ جُمْلَةٍ فِيهَا نَعْتٌ مُفْرَدٌ مَرْفُوعٌ؟",
    "options": [
      "جَاءَ الطَّالِبُ النَّشِيطُ",
      "رَأَيْتُ الطَّالِبَ النَّشِيطَ",
      "مَرَرْتُ بِالطَّالِبِ النَّشِيطِ",
      "الطَّالِبُ نَشِيطٌ"
    ],
    "correct": 0,
    "explanation": "النَّشِيطُ adalah Na'at Mufrad Marfu' mengikuti Man'ut Marfu' (الطَّالِبُ)."
  },
  {
    "id": 155,
    "babId": "topik4",
    "modelId": "model2",
    "question": "أَيُّ جُمْلَةٍ فِيهَا نَعْتٌ مُفْرَدٌ مَنْصُوبٌ؟",
    "options": [
      "رَأَيْتُ الطَّالِبَ النَّشِيطَ",
      "جَاءَ الطَّالِبُ النَّشِيطُ",
      "مَرَرْتُ بِالطَّالِبِ النَّشِيطِ",
      "النَّشِيطُ طَالِبٌ"
    ],
    "correct": 0,
    "explanation": "النَّشِيطَ adalah Na'at Mansub mengikuti Man'ut (الطَّالِبَ)."
  },
  {
    "id": 156,
    "babId": "topik4",
    "modelId": "model2",
    "question": "أَيُّ جُمْلَةٍ فِيهَا نَعْتٌ مُفْرَدٌ مَجْرُورٌ؟",
    "options": [
      "مَرَرْتُ بِالطَّالِبِ النَّشِيطِ",
      "جَاءَ الطَّالِبُ النَّشِيطُ",
      "رَأَيْتُ الطَّالِبَ النَّشِيطَ",
      "الطَّالِبُ النَّشِيطُ"
    ],
    "correct": 0,
    "explanation": "النَّشِيطِ adalah Na'at Majrur mengikuti Man'ut (بِالطَّالِبِ)."
  },
  {
    "id": 157,
    "babId": "topik4",
    "modelId": "model2",
    "question": "عِنْدَ إِضَافَةِ الْمُثَنَّى (مِثْلُ: كِتَابَانِ)، فَمَاذَا يَحْدُثُ لِلنُّونِ؟",
    "options": [
      "تُحْذَفُ النُّونُ (كِتَابَا الطَّالِبِ)",
      "تَبْقَى النُّونُ",
      "تُبْدَلُ مِيمًا",
      "تُبْدَلُ وَاوًا"
    ],
    "correct": 0,
    "explanation": "Nun pada Isim Muthanna/Jama' Mudzakkar Salim dihapus saat di-Idhafahkan (كِتَابَا الطَّالِبِ)."
  },
  {
    "id": 158,
    "babId": "topik4",
    "modelId": "model2",
    "question": "عِنْدَ إِضَافَةِ جَمْعِ الْمُذَكَّرِ السَّالِمِ (مِثْلُ: مُعَلِّمُونَ)، كَيْفَ تُكْتَبُ (مُعَلِّمُو الْمَدْرَسَةِ)؟",
    "options": [
      "مُعَلِّمُو الْمَدْرَسَةِ (بِحَذْفِ النُّونِ)",
      "مُعَلِّمُونَ الْمَدْرَسَةِ",
      "الْمُعَلِّمُونَ الْمَدْرَسَةِ",
      "مُعَلِّمِينَ الْمَدْرَسَةِ"
    ],
    "correct": 0,
    "explanation": "Nun Jama' Mudzakkar Salim dibuang saat menjadi Mudhaf: مُعَلِّمُو الْمَدْرَسَةِ."
  },
  {
    "id": 159,
    "babId": "topik4",
    "modelId": "model2",
    "question": "أَيُّ مِثَالٍ صَحِيحٌ لِلإِضَافَةِ فِي اللُّغَةِ الْعَرَبِيَّةِ؟",
    "options": [
      "قَلَمُ الْمُدَرِّسِ",
      "الْقَلَمُ الْمُدَرِّسُ",
      "قَلَمٌ مُدَرِّسٌ",
      "الْقَلَمُ المـُدَرِّسِ"
    ],
    "correct": 0,
    "explanation": "قَلَمُ الْمُدَرِّسِ adalah susunan Idhafah yang benar (Mudhaf + Mudhaf Ilaih)."
  },
  {
    "id": 160,
    "babId": "topik4",
    "modelId": "model2",
    "question": "مَا الإِعْرَابُ الصَّحِيحُ لِكَلِمَةِ (اللهِ) فِي جُمْلَةِ (عَبْدُ اللهِ)؟",
    "options": [
      "مُضَافٌ إِلَيْهِ مَجْرُورٌ بِالْكَسْرَةِ",
      "فَاعِلٌ مَرْفُوعٌ",
      "مَفْعُولٌ بِهِ مَنْصُوبٌ",
      "نَعْتٌ مَرْفُوعٌ"
    ],
    "correct": 0,
    "explanation": "Lafdzul Jalaalah (اللهِ) sebagai Mudhaf Ilaih Majrur dengan Kasrah."
  }
]
};

// ============================================================================
// MODUL ASESMEN BERBASIS KURIKULUM CINTA KEMENAG RI
// (Pendidikan Karakter & Mahabbah Kementerian Agama Republik Indonesia)
// Penyusun: Yosi, S. Ag, M. Pd. (MAN 1 Pontianak)
// ============================================================================

ARABIC_DATA.kurikulumCinta = {
  "title": "Kurikulum Berbasis Cinta (Pendidikan Mahabbah) Kemenag RI",
  "tagline": "Menumbuhkan Kasih Sayang, Membangun Peradaban Luhur, Memperkokoh Kerukunan Bangsa",
  "inisiator": "Kementerian Agama Republik Indonesia (Kemenag RI)",
  "deskripsi": "Paradigma pendidikan keagamaan yang berpusat pada penanaman nilai-nilai cinta (al-mahabbah) dan kasih sayang (ar-rahmah). Bahasa Arab dipelajari bukan hanya sebagai kaidah gramatika formal, melainkan sarana menyuarakan perdamaian, persaudaraan kemanusiaan, cinta tanah air, kelestarian lingkungan, dan kesantunan akhlak.",
  "pilar": [
    {
      "id": "rahmah",
      "nama": "Kasih Sayang & Kemanusiaan (الرَّحْمَةُ وَالإِنْسَانِيَّةُ)",
      "deskripsi": "Menebarkan empati sosial, menolong sesama yang lemah, dan menjunjung martabat manusia tanpa diskriminasi.",
      "icon": "heart-handshake",
      "color": "#10b981"
    },
    {
      "id": "tasamuh",
      "nama": "Moderasi Beragama & Toleransi (التَّسَامُحُ وَالاعْتِدَالُ)",
      "deskripsi": "Sikap tawasuth (moderat) dan tasamuh (saling menghormati) dalam merawat keharmonisan umat beragama di Indonesia.",
      "icon": "shield-check",
      "color": "#0284c7"
    },
    {
      "id": "wathan",
      "nama": "Cinta Tanah Air & Persatuan (حُبُّ الْوَطَنِ وَالْوَحْدَةُ)",
      "deskripsi": "Komitmen kebangsaan, merawat kebinekaan Nusantara, dan menjunjung nilai luhur Pancasila.",
      "icon": "flag",
      "color": "#f59e0b"
    },
    {
      "id": "biah",
      "nama": "Cinta Lingkungan & Menjaga Tubuh (مَحَبَّةُ الْبِيئَةِ وَالصِّحَّةِ)",
      "deskripsi": "Menjaga bumi sebagai anugerah Ilahi, peduli kebersihan alam sekitar, dan memelihara kesehatan raga.",
      "icon": "leaf",
      "color": "#16a34a"
    },
    {
      "id": "adab",
      "nama": "Adab Berbicara & Kesantunan (أَدَبُ الْكَلَامِ وَالصِّدْقُ)",
      "deskripsi": "Santun bertutur kata (qaulan layyina & qaulan karima), menjauhi fitnah dan ujaran kebencian, serta menjunjung kejujuran.",
      "icon": "message-circle-heart",
      "color": "#8b5cf6"
    }
  ]
};
ARABIC_DATA.asesmenSumatif = [
  {
    "id": 1,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "materiBab": "Bab 2: Kesehatan & Empati",
    "stimulus": "قَامَ طُلَّابُ فَصْلِنَا بِزِيَارَةِ مَرْضَى السُّكَّرِيِّ فِي الْمُسْتَشْفَى لِإِدْخَالِ السُّرُورِ عَلَى قُلُوبِهِمْ وَتَقْدِيمِ الدُّعَاءِ لَهُمْ بِالشِّفَاءِ.",
    "question": "مَا الْقِيمَةُ الإِنْسَانِيَّةُ الْأَسَاسِيَّةُ الَّتِي يُجَسِّدُهَا سُلُوكُ الطُّلَّابِ فِي النَّصِّ حَسَبَ رُوحِ مَنْهَجِ الْمَحَبَّةِ لِوَزَارَةِ الشُّؤُونِ الدِّينِيَّةِ؟",
    "options": [
      "عِيَادَةُ الْمَرْضَى رَحْمَةٌ وَتَكَافُلٌ إِنْسَانِيٌّ يَبُثُّ الأَمَلَ فِي النُّفُوسِ",
      "الزِّيَارَةُ مُجَرَّدُ وَاجِبٍ مَدْرَسِيٍّ رَسْمِيٍّ دُونَ مَشَاعِرَ",
      "الْبَحْثُ عَنِ الشُّهْرَةِ وَالتَّصْوِيرِ فِي الْمُسْتَشْفَى",
      "إِضَاعَةُ الْوَقْتِ فِي أَيَّامِ الدِّرَاسَةِ"
    ],
    "correct": 0,
    "explanation": "Sesuai pilar Kasih Sayang & Kemanusiaan (الرَّحْمَةُ وَالإِنْسَانِيَّةُ), menjenguk orang sakit dan mendoakannya merupakan wujud empati tulus yang menebarkan harapan dan menguatkan persaudaraan sesama manusia."
  },
  {
    "id": 2,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "materiBab": "Bab 1: Bepergian & Menolong Sesama",
    "stimulus": "شَاهَدَ فَاخِرٌ مُسَافِرًا كَبِيرَ السِّنِّ تَعَطَّلَتْ حَافِلَتُهُ فِي الطَّرِيقِ، فَقَدَّمَ لَهُ الْمَاءَ وَسَاعَدَهُ فِي حَمْلِ حَقِيبَتِهِ.",
    "question": "فِي جُمْلَةِ (فَقَدَّمَ لَهُ الْمَاءَ)، مَا صِيغَةُ الْفِعْلِ الْمَاضِي إِذَا أَسْنَدْنَاهُ إِلَى الضَّمِيرِ (نَحْنُ) مَعَ الْحِفَاظِ عَلَى خُلُقِ النَّجْدَةِ؟",
    "options": [
      "قَدَّمْنَا لَهُ الْمَاءَ",
      "قَدَّمْتُ لَهُ الْمَاءَ",
      "قَدَّمُوا لَهُ الْمَاءَ",
      "قَدَّمَتْ لَهُ الْمَاءَ"
    ],
    "correct": 0,
    "explanation": "Fi'il Madhy untuk dhamir (نَحْنُ) dari kata kerja (قَدَّمَ) adalah (قَدَّمْنَا). Secara substansi, menolong musafir di perjalanan adalah cerminan kemuliaan akhlak tolong-menolong dalam Kurikulum Cinta."
  },
  {
    "id": 3,
    "pilarId": "tasamuh",
    "pilarNama": "Moderasi Beragama & Toleransi",
    "materiBab": "Bab 4: Agama di Indonesia",
    "stimulus": "يَتَعَايَشُ فِي مَدِينَةِ جُومْبَانْج الْمُسْلِمُونَ وَالْمَسِيحِيُّونَ وَالْبُوذِيُّونَ فِي أَمْنٍ وَسَلَامٍ، يَتَعَاوَنُونَ فِي بِنَاءِ الْقَرْيَةِ دُونَ اخْتِلَافٍ فِي الْحُقُوقِ الْمَدَنِيَّةِ.",
    "question": "مَا الْمَفْهُومُ الَّذِي يُعَبِّرُ عَنْ هَذَا التَّعَايُشِ السِّلْمِيِّ فِي مَنْهَجِ مَحَبَّةِ الْوَزَارَةِ؟",
    "options": [
      "التَّسَامُحُ وَالاعْتِدَالُ فِي ظِلِّ الْمُوَاطَنَةِ الْمُتَسَاوِيَةِ",
      "التَّفْرِيقُ بَيْنَ الْمُواطِنِينَ عَلَى أَسَاسِ الْعِرْقِ",
      "التَّنَازُلُ عَنْ أُصُولِ الْعَقِيدَةِ الإِسْلَامِيَّةِ",
      "الانْعِزَالُ عَنِ الْمُجْتَمَعِ الْمُتَنَوِّعِ"
    ],
    "correct": 0,
    "explanation": "Kerukunan dan kerja sama antarumat beragama tanpa mencampuradukkan aqidah adalah inti dari Moderasi Beragama (التَّسَامُحُ وَالاعْتِدَالُ) yang ditegaskan Kemenag RI dalam bingkai persaudaraan kebangsaan (Ukhuwwah Wathaniyah)."
  },
  {
    "id": 4,
    "pilarId": "tasamuh",
    "pilarNama": "Moderasi Beragama & Toleransi",
    "materiBab": "Bab 4: Qawa'id Na'at & Nilai Keberagaman",
    "stimulus": "إِنَّ إِنْدُونِيسِيَا دَوْلَةٌ مُتَنَوِّعَةٌ تَحْتَضِنُ أَدْيَانًا رَسْمِيَّةً سِتَّةً بِكُلِّ احْتِرَامٍ وَتَقْدِيرٍ.",
    "question": "عَيِّنِ النَّعْتَ وَالْمَنْعُوتَ فِي جُمْلَةِ (دَوْلَةٌ مُتَنَوِّعَةٌ)، وَمَا دَلَالَتُهَا عَلَى ثَرَاءِ الْوَطَنِ؟",
    "options": [
      "الْمَنْعُوتُ (دَوْلَةٌ) وَالنَّعْتُ (مُتَنَوِّعَةٌ)، وَتَدُلُّ عَلَى أَنَّ التَّنَوُّعَ مَصْدَرُ قُوَّةٍ وَجَمَالٍ",
      "الْمَنْعُوتُ (مُتَنَوِّعَةٌ) وَالنَّعْتُ (دَوْلَةٌ)",
      "كِلَاهُمَا مُبْتَدَأٌ وَخَبَرٌ",
      "لَا يُوجَدُ نَعْتٌ فِي الْجُمْلَةِ"
    ],
    "correct": 0,
    "explanation": "Kata (دَوْلَةٌ) adalah Man'ut, sedangkan (مُتَنَوِّعَةٌ) adalah Na'at Mufrad. Sifat 'beragam' pada bangsa Indonesia dipandang oleh Kurikulum Cinta sebagai rahmat dan modal persatuan."
  },
  {
    "id": 5,
    "pilarId": "wathan",
    "pilarNama": "Cinta Tanah Air & Persatuan",
    "materiBab": "Bab 4: Idhafah & Bhinneka Tunggal Ika",
    "stimulus": "شِعَارُ (الْوَحْدَةِ فِي التَّنَوُّعِ) يُذَكِّرُنَا بِأَنَّ اخْتِلَافَ أَلْسِنَتِنَا وَأَلْوَانِنَا آيَةٌ مِنْ آيَاتِ قُدْرَةِ اللهِ تَعَالَى.",
    "question": "فِي تَرْكِيبِ (شِعَارُ الْوَحْدَةِ)، مَا إِعْرَابُ كَلِمَةِ (الْوَحْدَةِ) وَمَا مَغْزَاهَا الْوَطَنِيُّ؟",
    "options": [
      "مُضَافٌ إِلَيْهِ مَجْرُورٌ، وَتُرَسِّخُ حِرْصَ الإِسْلَامِ عَلَى وَحْدَةِ أَبْنَاءِ الْوَطَنِ",
      "فَاعِلٌ مَرْفُوعٌ بِالضَّمَّةِ",
      "مَفْعُولٌ بِهِ مَنْصُوبٌ بِالْفَتْحَةِ",
      "نَعْتٌ مَرْفُوعٌ"
    ],
    "correct": 0,
    "explanation": "Kata (الْوَحْدَةِ) berkedudukan sebagai Mudhaf Ilaih yang majrur dengan kasrah. Nilai persatuan (Al-Wahdah) adalah pilar ketahanan bangsa yang selaras dengan ajaran Islam dan semboyan Bhinneka Tunggal Ika."
  },
  {
    "id": 6,
    "pilarId": "wathan",
    "pilarNama": "Cinta Tanah Air & Persatuan",
    "materiBab": "Bab 1: Wisata Nusantara & Syukur",
    "stimulus": "سَافَرَ الطُّلَّابُ إِلَى مَكَّاسَار لِمُشَاهَدَةِ غُرُوبِ الشَّمْسِ عَلَى شَاطِئِ لُوسَارِي، وَشَكَرُوا اللهَ عَلَى بَدِيعِ خَلْقِهِ فِي بِلَادِنَا.",
    "question": "كَيْفَ يَرْبِطُ مَنْهَجُ الْمَحَبَّةِ بَيْنَ السِّيَاحَةِ فِي رُبُوعِ الْوَطَنِ وَحُبِّ الْوَطَنِ؟",
    "options": [
      "السِّيَاحَةُ فِي الْوَطَنِ تُعَمِّقُ شُكْرَ النِّعْمَةِ وَتَزِيدُ فِي الْفَخْرِ بِجَمَالِ إِنْدُونِيسِيَا",
      "السِّيَاحَةُ مَضْيَعَةٌ لِلْمَالِ فَقَطْ",
      "السَّفَرُ لَا يَرْتَبِطُ بِالإِيمَانِ أَبَدًا",
      "الِاهْتِمَامُ بِالْبِلَادِ الْخَارِجِيَّةِ أَوْلَى مِنَ الْوَطَنِ"
    ],
    "correct": 0,
    "explanation": "Tadabbur alam di bumi Nusantara menumbuhkan rasa syukur kepada Allah SWT dan memperkokoh rasa cinta tanah air (Hubbul Wathan minal Iman)."
  },
  {
    "id": 7,
    "pilarId": "biah",
    "pilarNama": "Cinta Lingkungan & Menjaga Tubuh",
    "materiBab": "Bab 1: Wisata Sungai & Kelestarian Alam",
    "stimulus": "عِنْدَ مُمَارَسَةِ التَّزَحْلُفِ فِي غَارِ فِيْنْدُوْل، حَافَظَ الشَّبَابُ عَلَى نَقَاءِ النَّهْرِ وَلَمْ يَرْمُوا فِيهِ الْعُلَبَ الْبِلَاسْتِيكِيَّةَ.",
    "question": "مَا حُكْمُ حِمَايَةِ الْبِيئَةِ وَالْمِيَاهِ فِي مَنْهَجِ الرَّحْمَةِ، وَمَا إِعْرَابُ (لَمْ يَرْمُوا)؟",
    "options": [
      "حِمَايَةُ الْبِيئَةِ أَمَانَةٌ شَرْعِيَّةٌ، وَ(يَرْمُوا) فِعْلٌ مُضَارِعٌ مَجْزُومٌ بِحَذْفِ النُّونِ",
      "حِمَايَةُ الْبِيئَةِ أَمْرٌ ثَانَوِيٌّ لَا دَخْلَ لَهُ بِالدِّينِ",
      "الْفِعْلُ (يَرْمُوا) مَرْفُوعٌ بِالضَّمَّةِ",
      "الْفِعْلُ مَبْنِيٌّ عَلَى السُّكُونِ"
    ],
    "correct": 0,
    "explanation": "Kelestarian lingkungan (Hifdzul Bi'ah) adalah bagian dari maqashid syariah. Secara nahwu, huruf jazm 'lam' menjazmkan fi'il mudhari' af'alul khamsah dengan membuang huruf nun (حذف النون)."
  },
  {
    "id": 8,
    "pilarId": "biah",
    "pilarNama": "Cinta Lingkungan & Menjaga Tubuh",
    "materiBab": "Bab 2: Gaya Hidup Sehat & Fi'il Mudhari'",
    "stimulus": "يَجِبُ عَلَى كُلِّ مُسْلِمٍ أَنْ يُحَافِظَ عَلَى صِحَّتِهِ بِمُمَارَسَةِ الرِّيَاضَةِ، لِأَنَّ (الْمُؤْمِنَ الْقَوِيَّ خَيْرٌ وَأَحَبُّ إِلَى اللهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ).",
    "question": "فِي جُمْلَةِ (أَنْ يُحَافِظَ عَلَى صِحَّتِهِ)، مَا إِعْرَابُ الْفِعْلِ، وَكَيْفَ يُعَدُّ حِفْظُ الصِّحَّةِ عَمَلَ مَحَبَّةٍ؟",
    "options": [
      "فِعْلٌ مُضَارِعٌ مَنْصُوبٌ بِـ(أَنْ)، وَحِفْظُ الصِّحَّةِ عَمَلُ مَحَبَّةٍ لِلنَّفْسِ لِأَدَاءِ الْعِبَادَةِ وَنَفْعِ النَّاسِ",
      "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ",
      "فِعْلٌ مَجْزُومٌ بِالسُّكُونِ",
      "فِعْلُ أَمْرٍ مَبْنِيٌّ عَلَى الْكَسْرِ"
    ],
    "correct": 0,
    "explanation": "Huruf 'an' memansubkan fi'il mudhari' (يُحَافِظَ). Merawat tubuh adalah ekspresi cinta diri dan rasa syukur atas nikmat kesehatan agar mampu beribadah optimal dan menebar kebaikan."
  },
  {
    "id": 9,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "materiBab": "Bab 3: Munada & Kerinduan Spiritual Haji",
    "stimulus": "وَقَفَ الْحَاجُّ عَلَى صَعِيدِ عَرَفَاتٍ دَاعِيًا بِدُمُوعِ الرَّحْمَةِ: (يَا أَرْحَمَ الرَّاحِمِينَ، اجْمَعْ قُلُوبَ الْمُسْلِمِينَ عَلَى الْمَحَبَّةِ).",
    "question": "مَا نَوْعُ الْمُنَادَى فِي جُمْلَةِ (يَا أَرْحَمَ الرَّاحِمِينَ)، وَمَا أَثَرُ هَذَا الدُّعَاءِ فِي حَيَاةِ الْحَاجِّ؟",
    "options": [
      "مُنَادَى مُضَافٌ مَنْصُوبٌ بِالْفَتْحَةِ، يَغْرِسُ التَّوَاضُعَ وَالرَّحْمَةَ فِي قَلْبِ الْحَاجِّ نَحْوَ خَلْقِ اللهِ",
      "مُنَادَى مَبْنِيٌّ عَلَى الضَّمِّ",
      "نَكِرَةٌ غَيْرُ مَقْصُودَةٍ مَبْنِيَّةٌ عَلَى السُّكُونِ",
      "شَبِيهٌ بِالْمُضَافِ مَرْفُوعٌ"
    ],
    "correct": 0,
    "explanation": "Lafal 'أَرْحَمَ' adalah Munada Mudhaf yang mansub dengan fathah. Ibadah haji di Arafah melatih jiwa untuk menyerap sifat kasih sayang Allah (Ar-Rahman Ar-Rahim) dan mempraktikkannya kepada sesama."
  },
  {
    "id": 10,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "materiBab": "Bab 3: Fi'il 'Amr Berkelembutan",
    "stimulus": "قَالَ الْمُرْشِدُ الدِّينِيُّ لِلْمُعْتَمِرِينَ: (ارْحَمُوا الضُّعَفَاءَ وَتَسَامَحُوا فِي الزِّحَامِ أَثْنَاءَ الطَّوَافِ وَالسَّعْيِ).",
    "question": "مَا صِيغَةُ فِعْلَيِ الأَمْرِ (ارْحَمُوا - تَسَامَحُوا)، وَمَا قِيمَتُهُمَا الإِرْشَادِيَّةُ فِي رُوحِ مَنْهَجِ الْحُبِّ؟",
    "options": [
      "أَفْعَالُ أَمْرٍ لِضَمِيرِ (أَنْتُمْ) مَبْنِيَّةٌ عَلَى حَذْفِ النُّونِ، تَدْعُو إِلَى إِيثَارِ الرِّفْقِ وَالتَّرَاحُمِ عَلَى الْأَنَانِيَّةِ",
      "أَفْعَالٌ مَاضِيَةٌ مَبْنِيَّةٌ عَلَى الضَّمِّ",
      "أَفْعَالُ مُضَارِعٍ مَرْفُوعَةٌ بِثُبُوتِ النُّونِ",
      "أَفْعَالُ نَهْيٍ مَجْزُومَةٌ"
    ],
    "correct": 0,
    "explanation": "Keduanya adalah Fi'il 'Amr untuk dhamir (أَنْتُمْ) yang mabni atas hadzfun nun (حذف النون). Di tengah kepadatan tawaf/sa'i, nilai cinta menuntut jamaah mengutamakan kelembutan dan menjaga keselamatan sesama."
  },
  {
    "id": 11,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "materiBab": "Bab 1: Adab Berdialog dalam Hiwar",
    "stimulus": "فِي حِوَارٍ هَادِئٍ، قَالَ نَبِيلٌ لِزَمِيلِهِ: (أَحْتَرِمُ رَأْيَكَ يَا أَخِي، لَكِنْ لَوْ تَأَمَّلْتَ هَذِهِ النُّقْطَةَ لَوَجَدْتَ حَلاًّ أَوْفَقَ).",
    "question": "كَيْفَ يُعَلِّمُنَا مَنْهَجُ الْكَلَامِ فِي الْقُرْآنِ أَدَبَ الِاخْتِلَافِ كَمَا فِي النَّصِّ؟",
    "options": [
      "مُخَاطَبَةُ الآخَرِينَ بِالْقَوْلِ اللَّيِّنِ وَالاحْتِرَامِ الْمُتَبَادَلِ (قَوْلًا كَرِيمًا)",
      "رَفْعُ الصَّوْتِ وَالسُّخْرِيَّةُ مِنْ رَأْيِ الطَّرَفِ الآخَرِ",
      "قَطْعُ الْحِوَارِ وَالْغَضَبُ الشَّدِيدُ",
      "فَرْضُ الرَّأْيِ بِالْقُوَّةِ وَالتَّعَصُّبِ"
    ],
    "correct": 0,
    "explanation": "Adab dialog Kurikulum Cinta menekankan perkataan yang santun (قَوْلًا لَّيِّنًا / قَوْلًا كَرِيمًا), menghargai lawan bicara, dan tidak memaksakan kehendak secara arogan."
  },
  {
    "id": 12,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "materiBab": "Bab 1: Bakti kepada Orang Tua & Fi'il Madhy",
    "stimulus": "قَضَى نَبِيلٌ أَيَّامَ عُطْلَتِهِ فِي بَيْتِ جَدِّهِ، يَخْدُمُهُ بِرِعَايَةٍ كَامِلَةٍ وَيُدْخِلُ الْبَهْجَةَ عَلَى أُسْرَتِهِ.",
    "question": "فِي جُمْلَةِ (قَضَى نَبِيلٌ أَيَّامَ عُطْلَتِهِ)، مَا دَلَالَةُ بِرِّ الْوَالِدَيْنِ وَالأَجْدَادِ كَأَسَاسٍ لِشَجَرَةِ الْمَحَبَّةِ الإِسْلَامِيَّةِ؟",
    "options": [
      "بِرُّ الْكِبَارِ وَرِعَايَتُهُمْ هُوَ أَعْلَى مَرَاتِبِ الرَّحْمَةِ الْأُسَرِيَّةِ الَّتِي أَمَرَ بِهَا الشَّرْعُ",
      "خِدْمَةُ الْجَدِّ فَقَطْ لِلْحُصُولِ عَلَى الْمَالِ",
      "السَّفَرُ لِلرَّاحَةِ دُونَ الِاهْتِمَامِ بِالْوَالِدَيْنِ",
      "السُّلُوكُ لَا يَرْتَبِطُ بِالْأَخْلَاقِ"
    ],
    "correct": 0,
    "explanation": "Bakti kepada orang tua dan keluarga adalah akar dari seluruh karakter kasih sayang. Seseorang yang memiliki cinta sejati akan memuliakan orang tua dan orang yang lebih tua."
  },
  {
    "id": 13,
    "pilarId": "tasamuh",
    "pilarNama": "Moderasi Beragama & Toleransi",
    "materiBab": "Bab 4: Hak Bertetangga & Idhafah",
    "stimulus": "عَلَّمَنَا رَسُولُ اللهِ ﷺ (حَقَّ الْجِوَارِ)، فَأَهْدَتْ عَائِشَةُ طَعَامًا لِجَارَتِهَا غَيْرِ الْمُسْلِمَةِ تَأْلِيفًا لِلْقُلُوبِ.",
    "question": "مَا إِعْرَابُ كَلِمَةِ (الْجِوَارِ) فِي (حَقَّ الْجِوَارِ)، وَمَا قِيمَتُهَا فِي بِنَاءِ السِّلْمِ الاجْتِمَاعِيِّ؟",
    "options": [
      "مُضَافٌ إِلَيْهِ مَجْرُورٌ، وَتُعَبِّرُ عَنْ رُقِيِّ الإِسْلَامِ فِي الإِحْسَانِ إِلَى الْجَارِ مُطْلَقًا",
      "نَعْتٌ مَنْصُوبٌ بِالْفَتْحَةِ",
      "مَفْعُولٌ مُطْلَقٌ",
      "حَالٌ مَنْصُوبَةٌ"
    ],
    "correct": 0,
    "explanation": "Susunan idhafah 'حَقَّ الْجِوَارِ' menegaskan kewajiban moral menghormati tetangga tanpa memandang latar belakang agamanya sebagai wujud dakwah bi hal penuh kasih sayang."
  },
  {
    "id": 14,
    "pilarId": "biah",
    "pilarNama": "Cinta Lingkungan & Menjaga Tubuh",
    "materiBab": "Bab 2: Menjaga Fasilitas Kesehatan",
    "stimulus": "حَافَظَ الْمَرْضَى وَالزَّائِرُونَ عَلَى هُدُوءِ الْمُسْتَشْفَى وَنَظَافَةِ مَرَافِقِهِ رِعَايَةً لِرَاحَةِ الآخَرِينَ.",
    "question": "عَيِّنِ النَّعْتَ فِي عِبَارَةِ (الْمَرَافِقِ الصِّحِّيَّةِ النَّظِيفَةِ) حِينَ نَصِفُهَا، وَكَيْفَ يَعُدُّ مَنْهَجُ الْحُبِّ النَّظَافَةَ دَلِيلَ الإِيمَانِ؟",
    "options": [
      "النَّعْتُ يَصِفُ حَالَةَ الْمَرَافِقِ، وَالنَّظَافَةُ مَظْهَرٌ حَضَارِيٌّ يُعَبِّرُ عَنْ رَحْمَةِ الْمُسْلِمِ بِمَنْ حَوْلَهُ",
      "النَّظَافَةُ مَسْؤُولِيَّةُ عُمَّالِ النَّظَافَةِ فَقَطْ",
      "تَرْكُ الْمَكَانِ قَذِرًا لَا يُؤَثِّرُ فِي الإِيمَانِ",
      "لَا يُوجَدُ رَابِطٌ بَيْنَ النَّظَافَةِ وَالدِّينِ"
    ],
    "correct": 0,
    "explanation": "Menjaga kebersihan dan ketertiban tempat publik adalah bukti keimanan dan kepekaan rasa cinta agar tidak mengganggu atau menyakiti orang lain."
  },
  {
    "id": 15,
    "pilarId": "wathan",
    "pilarNama": "Cinta Tanah Air & Persatuan",
    "materiBab": "Bab 4: Menjaga Warisan Luhur Bangsa",
    "stimulus": "زَارَ طُلَّابُ مَعْهَدِنَا مَتَاحِفَ التَّارِيخِ الإِنْدُونِيسِيِّ لِمَعْرِفَةِ تُرَاثِ أُمَّتِنَا الْعَرِيقِ وَالاعْتِزَازِ بِأَبْطَالِنَا الشُّهَدَاءِ.",
    "question": "مَا نَوْعُ النَّعْتِ فِي جُمْلَةِ (تُرَاثِ أُمَّتِنَا الْعَرِيقِ)، وَمَا وَاجِبُنَا نَحْوَ شُهَدَاءِ الْوَطَنِ؟",
    "options": [
      "نَعْتٌ مُفْرَدٌ مَجْرُورٌ، وَوَاجِبُنَا الدُّعَاءُ لَهُمْ وَمُوَاصَلَةُ كِفَاحِهِمْ فِي حِفْظِ أَمْنِ الْبِلَادِ",
      "نَعْتُ جُمْلَةٍ فِعْلِيَّةٍ",
      "نَعْتُ شِبْهِ جُمْلَةٍ",
      "لَا نَعْتَ فِي هَذِهِ الْعِبَارَةِ"
    ],
    "correct": 0,
    "explanation": "Kata 'الْعَرِيقِ' adalah Na'at Mufrad Majrur yang menyifati 'تُرَاثِ'. Menghormati jasa para pahlawan pejuang kemerdekaan adalah bagian dari integritas keimanan dan cinta tanah air."
  },
  {
    "id": 16,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "materiBab": "Bab 1: Kejujuran dalam Muamalah",
    "stimulus": "اشْتَرَى السَّائِحُ تِذْكَارًا مِنَ السُّوقِ، فَأَعَادَ لَهُ الْبَائِعُ الصَّادِقُ الزِّيَادَةَ مِنَ النُّقُودِ بِأَمَانَةٍ وَطِيبِ خَاطِرٍ.",
    "question": "فِي جُمْلَةِ (الْبَائِعُ الصَّادِقُ)، مَا أَهَمِّيَّةُ الصِّدْقِ وَالأَمَانَةِ كَأَسَاسٍ لِلتَّرْبِيَةِ الأَخْلَاقِيَّةِ؟",
    "options": [
      "الصِّدْقُ يُثْمِرُ الثِّقَةَ وَالْمَحَبَّةَ بَيْنَ النَّاسِ، وَهُوَ مِنْ أَعْظَمِ صِفَاتِ الْمُؤْمِنِ",
      "الأَمَانَةُ سَبَبٌ فِي الْخَسَارَةِ الْمَالِيَّةِ",
      "يَجُوزُ أَخْذُ أَمْوَالِ السُّيَّاحِ بِغَيْرِ حَقٍّ",
      "الصِّدْقُ مَطْلُوبٌ فَقَطْ مَعَ الأَقَارِبِ"
    ],
    "correct": 0,
    "explanation": "Sifat Ash-Shidq (kejujuran) dan Amanah adalah buah nyata dari hati yang dipenuhi rasa cinta kepada Allah SWT dan penghormatan terhadap hak-hak sesama."
  },
  {
    "id": 17,
    "pilarId": "tasamuh",
    "pilarNama": "Moderasi Beragama & Toleransi",
    "materiBab": "Bab 4: Dakwah yang Merangkul Bukan Memukul",
    "stimulus": "قَالَ اللهُ تَعَالَى: ﴿ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ﴾، وَهَذَا جَوْهَرُ مَنْهَجِ الرَّحْمَةِ فِي الْقُرْآنِ.",
    "question": "مَا إِعْرَابُ (الْحَسَنَةِ) فِي الآيَةِ الْكَرِيمَةِ، وَمَا دَلَالَتُهَا عَلَى أُسْلُوبِ الدَّعْوَةِ الْجَاذِبَةِ؟",
    "options": [
      "نَعْتٌ مَجْرُورٌ، وَتَدُلُّ عَلَى أَنَّ الدَّعْوَةَ الإِسْلَامِيَّةَ تَقُومُ عَلَى اللِّينِ وَالْمَحَبَّةِ لَا عَلَى التَّنْفِيرِ",
      "مَفْعُولٌ بِهِ مَنْصُوبٌ",
      "حَالٌ مَنْصُوبَةٌ",
      "فَاعِلٌ مُؤَخَّرٌ"
    ],
    "correct": 0,
    "explanation": "Kata 'الْحَسَنَةِ' adalah Na'at Majrur. Kurikulum Cinta Kemenag menegaskan bahwa dakwah Islam yang sejati adalah merangkul, menyapa dengan kebaikan dan hikmah, bukan memusuhi atau menghakimi."
  },
  {
    "id": 18,
    "pilarId": "tasamuh",
    "pilarNama": "Moderasi Beragama & Toleransi",
    "materiBab": "Bab 4: Kerukunan Rumah Ibadah",
    "stimulus": "شَاهَدْنَا فِي شَارِعِ التَّسَامُحِ مَسْجِدًا كَبِيرًا وَكَنِيسَةً قَدِيمَةً مُتَجَاوِرَيْنِ فِي وِئَامٍ وَتَعَايُشٍ حَضَارِيٍّ.",
    "question": "مَا مَعْنَى كَلِمَةِ (الوِئَام) فِي هَذَا السِّيَاقِ، وَمَا دَوْرُهُ فِي حِمَايَةِ السِّلْمِ الأَهْلِيِّ؟",
    "options": [
      "الْوِفَاقُ وَالْمَحَبَّةُ الْمُتَبَادَلَةُ الَّتِي تَمْنَعُ النِّزَاعَاتِ الطَّائِفِيَّةَ",
      "الْعَدَاوَةُ وَالشِّقَاقُ",
      "التَّنَافُسُ غَيْرُ الشَّرِيفِ",
      "التَّشَابُهُ فِي جَمِيعِ الشَّعَائِرِ"
    ],
    "correct": 0,
    "explanation": "Kata 'الوِئَام' bermakna keharmonisan, keselarasan, dan kerukunan bersama yang menjadi fondasi kokoh persaudaraan sebangsa dan setanah air."
  },
  {
    "id": 19,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "materiBab": "Bab 3: Kesetaraan Manusia dalam Haji",
    "stimulus": "فِي مَنَاسِكِ الْحَجِّ، يَلْبَسُ جَمِيعُ الْحُجَّاجِ ثَوْبَ الإِحْرَامِ الأَبْيَضَ، فَيَتَلَاشَى الْفَرْقُ بَيْنَ الْغَنِيِّ وَالْفَقِيرِ وَالْأَمِيرِ وَالْغَفِيرِ.",
    "question": "فِي فِعْلِ (يَلْبَسُ)، مَا الرِّسَالَةُ الإِنْسَانِيَّةُ الْعُظْمَى لِلإِحْرَامِ حَسَبَ تَرْبِيَةِ الْمَحَبَّةِ؟",
    "options": [
      "تَأْكِيدُ الْمُسَاوَاةِ التَّامَّةِ وَالأُخُوَّةِ الإِنْسَانِيَّةِ الشَّامِلَةِ أَمَامَ اللهِ تَعَالَى",
      "إِظْهَارُ التَّمَايُزِ بَيْنَ الطَّبَقَاتِ الاجْتِمَاعِيَّةِ",
      "تَفْضِيلُ أَهْلِ الأَمْوَالِ عَلَى غَيْرِهِمْ",
      "لَا تُوجَدُ حِكْمَةٌ فِي لِبَاسِ الإِحْرَامِ"
    ],
    "correct": 0,
    "explanation": "Pakaian ihram melambangkan pelepasan segala atribut duniawi dan kesombongan, menegaskan bahwa derajat seluruh manusia adalah sama di hadapan Sang Pencipta kecuali atas dasar ketakwaan dan cinta."
  },
  {
    "id": 20,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "materiBab": "Bab 1-4: Visi Rahmatan Lil 'Alamin",
    "stimulus": "بَعَثَ اللهُ تَعَالَى نَبِيَّهُ مُحَمَّدًا ﷺ وَقَالَ فِي حَقِّهِ: ﴿وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ﴾.",
    "question": "كَيْفَ يُتَرْجِمُ طَالِبُ الْمَدْرَسَةِ كَوْنَ الإِسْلَامِ (رَحْمَةً لِلْعَالَمِينَ) فِي سُلُوكِهِ الْيَوْمِيِّ؟",
    "options": [
      "بِأَنْ يَكُونَ مَصْدَرَ خَيْرٍ وَأَمَانٍ لِلنَّاسِ جَمِيعًا وَلِلْبِيئَةِ وَالْحَيَوَانِ بِقَلْبٍ رَحِيمٍ",
      "بِالتَّشَدُّدِ وَإِسَاءَةِ الظَّنِّ بِالآخَرِينَ",
      "بِإِهْمَالِ الْمُجْتَمَعِ وَعَدَمِ مُسَاعَدَةِ الْمُحْتَاجِينَ",
      "بِالتَّعَامُلِ الْحَسَنِ مَعَ مَنْ يُوَافِقُهُ فِي كُلِّ رَأْيٍ فَقَطْ"
    ],
    "correct": 0,
    "explanation": "Prinsip 'Rahmatan lil 'Alamin' adalah payung agung Kurikulum Cinta Kemenag RI: seorang pelajar madrasah harus menjadi duta kedamaian, penebar manfaat, dan perawat alam semesta."
  }
];
ARABIC_DATA.asesmenNormatif = [
  {
    "id": 1,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "اخْتَلَفْتَ مَعَ زَمِيلِكَ فِي الْفَصْلِ حَوْلَ إِعْرَابِ جُمْلَةٍ فِي دَرْسِ الْقَوَاعِدِ، وَبَدَأَ زَمِيلُكَ يَشْعُرُ بِالْحَرَجِ.",
    "question": "مَا هُوَ التَّصَرُّفُ الأَخْلَاقِيُّ وَالتَّعْبِيرُ الْعَرَبِيُّ الأَنْسَبُ الَّذِي يُجَسِّدُ أَدَبَ الْمَحَبَّةِ وَالتَّوَاضُعِ؟",
    "options": [
      "أَبْتَسِمُ لَهُ وَأَقُولُ بِرِفْقٍ: (كِلَانَا يَتَعَلَّمُ يَا أَخِي، دَعْنَا نَسْتَشِيرُ أُسْتَاذَنَا لِنَفْهَمَ الصَّوَابَ مَعًا)",
      "أَرْفَعُ صَوْتِي أَمَامَ الطُّلَّابِ قَائِلاً: (أَنَا دَائِمًا عَلَى حَقٍّ وَأَنْتَ لَا تَفْهَمُ النَّحْوَ)",
      "أَسْخَرُ مِنْ إِجَابَتِهِ فِي مَجْمُوعَةِ الْوَاتْسَابِ الْمَدْرَسِيَّةِ",
      "أُقَاطِعُهُ وَأَرْفُضُ التَّحَدُّثَ مَعَهُ طَوَالَ الْيَوْمِ"
    ],
    "correct": 0,
    "explanation": "Adab Islami menuntut kerendahan hati (tawadhu') dan menjaga perasaan teman. Berkata lembut dan mengajak mencari kebenaran bersama adalah wujud nyata adab penuntut ilmu yang berkarakter."
  },
  {
    "id": 2,
    "pilarId": "tasamuh",
    "pilarNama": "Moderasi Beragama & Toleransi",
    "situasi": "جَارُكَ غَيْرُ الْمُسْلِمِ يُشَارِكُ فِي حَفْلِ يَوْمِ الاسْتِقْلَالِ الإِنْدُونِيسِيِّ فِي الْحَيِّ، وَيَحْتَاجُ إِلَى مُسَاعَدَةٍ فِي تَرْتِيبِ الْكَانُونِ وَتَزْيِينِ الشَّارِعِ.",
    "question": "مَا هُوَ الْمَوْقِفُ النَّابِعُ مِنْ قِيَمِ الْمُوَاطَنَةِ الصَّالِحَةِ فِي مَنْهَجِ مَحَبَّةِ الْوَزَارَةِ؟",
    "options": [
      "أُبَادِرُ إِلَى مُعَاوَنَتِهِ بِحُبٍّ وَنَشَاطٍ، فَالْمُوَاطَنَةُ تَجْمَعُنَا فِي خِدْمَةِ الْوَطَنِ وَحُسْنِ الْجِوَارِ",
      "أَمْتَنِعُ عَنْ مُسَاعَدَتِهِ لِأَنَّهُ لَا يَنْتَمِي إِلَى دِينِي",
      "أَطْلُبُ مِنْهُ أَنْ يَدْفَعَ لِي أَجْرًا قَبْلَ أَنْ أُسَاعِدَهُ",
      "أَتَجَاهَلُهُ وَأَنْظُرُ إِلَيْهِ بِاسْتِعْلَاءٍ"
    ],
    "correct": 0,
    "explanation": "Kerja bakti kemasyarakatan dan tolong-menolong antarwarga adalah kewajiban sosial bersama yang memperkokoh persaudaraan sebangsa (Ukhuwwah Wathaniyah) tanpa membeda-bedakan keyakinan."
  },
  {
    "id": 3,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "situasi": "أُصِيبَ زَمِيلُكَ فِي الْفَصْلِ بِصُدَاعٍ شَدِيدٍ وَحُمَّى أَثْنَاءَ حِصَّةِ اللُّغَةِ الْعَرَبِيَّةِ، وَكَانَ عَاجِزًا عَنِ الْكِتَابَةِ.",
    "question": "كَيْفَ تَسْتَجِيبُ لِهَذَا الْمَوْقِفِ إِذَا كُنْتَ مُتَمَسِّكًا بِقِيمَةِ الرَّحْمَةِ النَّبَوِيَّةِ؟",
    "options": [
      "أَسْتَأْذِنُ الْمُعَلِّمَ بِلُطْفٍ لِمُرَافَقَتِهِ إِلَى الْعِيَادَةِ الْمَدْرَسِيَّةِ، وَأَدْعُو لَهُ: (شَفَاكَ اللهُ وَعَافَاكَ)",
      "أَتْرُكُهُ وَأُوَاصِلُ مُتَابَعَةَ الدَّرْسِ لِأَنَّ صِحَّتَهُ لَيْسَتْ مِنْ مَسْؤُولِيَّتِي",
      "أَشْتَكِي مِنْهُ إِلَى الْمُعَلِّمِ لِأَنَّهُ يُزْعِجُ هُدُوءَ الْفَصْلِ",
      "أَقْتَرِحُ عَلَيْهِ أَنْ يَنَامَ عَلَى الطَّاوِلَةِ دُونَ إِخْبَارِ أَحَدٍ"
    ],
    "correct": 0,
    "explanation": "Membantu sahabat yang sakit dan mengantarkannya ke klinik sekolah (UKS) adalah bentuk kasih sayang praktis yang sangat dianjurkan dalam ajaran agama Islam."
  },
  {
    "id": 4,
    "pilarId": "biah",
    "pilarNama": "Cinta Lingkungan & Menjaga Tubuh",
    "situasi": "رَأَيْتَ بَعْضَ الطُّلَّابِ يَتْرُكُونَ عُلَبَ الْمَاءِ وَالأَكْيَاسَ الْبِلَاسْتِيكِيَّةَ عَلَى كَرَاسِي الْمُصَلَّى بَعْدَ الصَّلَاةِ.",
    "question": "مَا هُوَ السُّلُوكُ الْمِعْيَارِيُّ الَّذِي يَنُمُّ عَنْ حُبِّ بَيْتِ اللهِ وَنَظَافَةِ الْبِيئَةِ؟",
    "options": [
      "أَقُومُ بِجَمْعِهَا وَوَضْعِهَا فِي سَلَّةِ الْمُهْمَلَاتِ احْتِسَابًا لِلْأَجْرِ، ثُمَّ أُذَكِّرُ زُمَلَائِي بِرِفْقٍ",
      "أَتْرُكُهَا فِي مَكَانِهَا لِأَنَّ مَسْؤُولِيَّةَ النَّظَافَةِ تَقَعُ عَلَى الْخَادِمِ فَقَطْ",
      "أَصْرُخُ فِي وُجُوهِهِمْ بِغَضَبٍ وَأُهِينُهُمْ أَمَامَ الْجَمِيعِ",
      "أُلْقِي مَزِيدًا مِنَ الْأَوْرَاقِ لِأَنَّ الْمَكَانَ غَيْرُ نَظِيفٍ أَصْلاً"
    ],
    "correct": 0,
    "explanation": "Menjaga kesucian dan kebersihan tempat ibadah adalah cerminan adab dan cinta kepada rumah Allah. Menasehati dengan santun disertai keteladanan tindakan langsung adalah jalan terbaik."
  },
  {
    "id": 5,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "قَرَأْتَ فِي شَبَكَاتِ التَّوَاصُلِ مَنْشُورًا يَحُثُّ عَلَى الْكَرَاهِيَةِ بَيْنَ أَتْبَاعِ الْمَذَاهِبِ أَوِ الأَدْيَانِ فِي إِنْدُونِيسِيَا.",
    "question": "مَا هُوَ الْمَوْقِفُ الشَّرْعِيُّ وَالْأَخْلَاقِيُّ الصَّارِمُ حَسَبَ تَوْجِيهَاتِ وَزَارَةِ الشُّؤُونِ الدِّينِيَّةِ؟",
    "options": [
      "أَمْتَنِعُ تَمَامًا عَنْ نَشْرِهِ وَأُبَلِّغُ عَنْهُ، وَأَسْعَى لِنَشْرِ رَسَائِلِ الْمَحَبَّةِ وَالتَّآلُفِ (قَوْلًا سَدِيدًا)",
      "أُعِيدُ إِرْسَالَهُ إِلَى جَمِيعِ الْمَجْمُوعَاتِ لِإِشْعَالِ النِّقَاشِ وَالْجِدَالِ",
      "أُشَارِكُ فِي التَّعْلِيقَاتِ بِكَلِمَاتٍ بَذِيئَةٍ وَشَتَائِمَ عَنِيفَةٍ",
      "أُصَدِّقُ كُلَّ مَا كُتِبَ دُونَ تَثَبُّتٍ أَوْ تَبَيُّنٍ"
    ],
    "correct": 0,
    "explanation": "Kurikulum Cinta membimbing siswa menjadi agen penyaring informasi (tabayyun), menolak narasi provokasi kebencian, dan senantiasa menyebarkan konten perdamaian dan persatuan."
  },
  {
    "id": 6,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "أَرَادَ أَحَدُ الطُّلَّابِ أَنْ يَسْتَفْسِرَ مِنَ الْمُعَلِّمِ عَنْ نُقْطَةٍ غَامِضَةٍ أَثْنَاءَ شَرْحِ دَرْسِ النَّحْوِ.",
    "question": "مَا هُوَ الأُسْلُوبُ الْأَمْثَلُ لِلتَّوَاصُلِ الْمُحْتَرَمِ بِاللُّغَةِ الْعَرَبِيَّةِ؟",
    "options": [
      "يَرْفَعُ يَدَهُ بِهُدُوءٍ وَيَقُولُ: (عَفْوًا يَا أُسْتَاذُ، لَوْ سَمَحْتَ، هَلْ يُمْكِنُ إِعَادَةُ هَذِهِ الْقَاعِدَةِ بِإِيجَازٍ؟)",
      "يَصِيحُ فَجْأَةً دُونَ اسْتِئْذَانٍ: (أَنَا لَمْ أَفْهَمْ شَيْئًا مِنْ كَلَامِكَ)",
      "يَضْحَكُ مَعَ زَمِيلِهِ سَاخِرًا مِنَ الْمَادَّةِ",
      "يَسْكُتُ وَيَخْرُجُ مِنَ الْفَصْلِ دُونَ عِلْمِ الْمُعَلِّمِ"
    ],
    "correct": 0,
    "explanation": "Menghormati guru dengan ungkapan sopan seperti (عَفْوًا، لَوْ سَمَحْتَ / مِنْ فَضْلِكَ) adalah adab utama murid kepada pengajar ilmu yang sangat ditekankan dalam tradisi Islam."
  },
  {
    "id": 7,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "situasi": "عَرَفْتَ أَنَّ زَمِيلاً لَكَ فِي الْمَدْرَسَةِ لَا يَمْلِكُ كِتَابَ اللُّغَةِ الْعَرَبِيَّةِ لِظُرُوفِ عَائِلَتِهِ الْمَادِّيَّةِ الصَّعْبَةِ.",
    "question": "كَيْفَ تُتَرْجِمُ رُوحَ التَّكَافُلِ الاجْتِمَاعِيِّ بَيْنَ طُلَّابِ الْمَدْرَسَةِ؟",
    "options": [
      "أُشَارِكُهُ كِتَابِي بِطِيبِ خَاطِرٍ، أَوْ أَتَعَاوَنُ مَعَ زُمَلَائِي لِتَوْفِيرِ نُسْخَةٍ لَهُ كَهَدِيَّةٍ كَرِيمَةٍ",
      "أُعَيِّرُهُ بِفَقْرِهِ أَمَامَ بَقِيَّةِ الطُّلَّابِ",
      "أَرْفُضُ أَنْ يَجْلِسَ بِجَانِبِي لِأَنَّهُ لَا يَمْلِكُ كِتَابًا",
      "أَطْلُبُ مِنَ الْمُعَلِّمِ أَنْ يُعَاقِبَهُ عَلَى عَدَمِ إِحْضَارِ الْكِتَابِ"
    ],
    "correct": 0,
    "explanation": "Berbagi dan meringankan beban teman yang kurang mampu secara rahasia dan penuh kehormatan adalah bentuk solidaritas dan kasih sayang yang sesungguhnya."
  },
  {
    "id": 8,
    "pilarId": "tasamuh",
    "pilarNama": "Moderasi Beragama & Toleransi",
    "situasi": "الْتَقَيْتَ بِسَائِحٍ أَجْنَبِيٍّ فِي مَطَارِ سُوبَادِيُو فِي بُونْتِيَانَاك يَسْأَلُ عَنْ مَكَانِ حَافِلَةِ النَّقْلِ.",
    "question": "كَيْفَ تُعَامِلُهُ لِتَعْكِسَ رُوحَ الضِّيَافَةِ الإِسْلَامِيَّةِ وَسَمَاحَةَ الشَّعْبِ الإِنْدُونِيسِيِّ؟",
    "options": [
      "أُجِيبُهُ بِابْتِسَامَةٍ وَلُطْفٍ، وَأَدُلُّهُ عَلَى الطَّرِيقِ الصَّحِيحِ تَرْجَمَةً لِخُلُقِ إِكْرَامِ الضَّيْفِ",
      "أَتَجَاهَلُهُ لِأَنَّهُ غَرِيبٌ لَا يَتَكَلَّمُ لُغَتِي",
      "أُعْطِيهِ مَعْلُومَاتٍ خَاطِئَةً بِقَصْدِ الْمِزَاحِ",
      "أُظْهِرُ لَهُ التَّضَجُّرَ وَالْغَضَبَ"
    ],
    "correct": 0,
    "explanation": "Memuliakan tamu (Ikrāmud Dhaif) dan bersikap ramah kepada setiap manusia adalah cermin keluhuran akhlak muslim dan keramahan budaya Indonesia."
  },
  {
    "id": 9,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "رَأَيْتَ زَمِيلَكَ يَرْتَكِبُ سُلُوكًا خَاطِئًا بِأَخْذِ قَلَمِ غَيْرِهِ دُونَ اسْتِئْذَانٍ.",
    "question": "مَا هِيَ الطَّرِيقَةُ الْمُثْلَى لِنُصْحِهِ حَسَبَ قِيَمِ الرَّفْقِ وَالسَّتْرِ؟",
    "options": [
      "أَنْصَحُهُ عَلَى انْفِرَادٍ بِلُطْفٍ، وَأُذَكِّرُهُ بِأَهَمِّيَّةِ الأَمَانَةِ دُونَ فَضِيحَةٍ أَوْ تَشْهِيرٍ",
      "أَفْضَحُهُ أَمَامَ جَمِيعِ طُلَّابِ الْمَدْرَسَةِ لِيَكُونَ عِبْرَةً",
      "أَصْمُتُ عَنْ فِعْلِهِ تَمَامًا وَأَشْتَرِكُ مَعَهُ فِي الْخَطَأِ",
      "أَقُومُ بِشَتْمِهِ وَالاعْتِدَاءِ عَلَيْهِ جَسَدِيًّا"
    ],
    "correct": 0,
    "explanation": "Nasihat yang tulus dilakukan secara personal tanpa mempermalukan (menjaga aib). Kurikulum Cinta mengajarkan menasehati dengan kelembutan, bukan menghakimi."
  },
  {
    "id": 10,
    "pilarId": "wathan",
    "pilarNama": "Cinta Tanah Air & Persatuan",
    "situasi": "تُقَامُ مَرَاسِمُ يَوْمِ الاثْنَيْنِ لِرَفْعِ الْعَلَمِ الْوَطَنِيِّ (سَانْج سَاكَا مِيرَاه بُوتِيه) فِي فِنَاءِ الْمَدْرَسَةِ.",
    "question": "كَيْفَ يَكُونُ مَوْقِفُكَ الْوَطَنِيُّ الْمُنْضَبِطُ الْمُعَبِّرُ عَنْ حُبِّ الْوَطَنِ؟",
    "options": [
      "أَقِفُ بِخُشُوعٍ وَانْضِبَاطٍ وَاحْتِرَامٍ، مُسْتَحْضِرًا أَنَّ حِمَايَةَ أَمْنِ الْوَطَنِ وَحُبَّهُ مِنَ الإِيمَانِ",
      "أَتَحَدَّثُ مَعَ زُمَلَائِي وَأَلْعَبُ بِهَاتِفِي أَثْنَاءَ رَفْعِ الْعَلَمِ",
      "أَمْتَنِعُ عَنِ الْمُشَارَكَةِ بِحُجَّةِ عَدَمِ الْجَدْوَى",
      "أَضْحَكُ وَأَسْخَرُ مِنَ النَّشِيدِ الْوَطَنِيِّ"
    ],
    "correct": 0,
    "explanation": "Mengikuti upacara bendera dengan khidmat adalah wujud penghormatan atas perjuangan para pahlawan dan perwujudan cinta tanah air yang kokoh."
  },
  {
    "id": 11,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "حَصَلْتَ عَلَى أَعْلَى دَرَجَةٍ فِي امْتِحَانِ اللُّغَةِ الْعَرَبِيَّةِ بَيْنَ جَمِيعِ فُصُولِ الصَّفِّ الْحَادِي عَشَرَ.",
    "question": "كَيْفَ تَتَصَرَّفُ بِتَوَاضُعٍ وَشُكْرٍ لِلَّهِ دُونَ غُرُورٍ أَوْ اسْتِكْبَارٍ؟",
    "options": [
      "أَحْمَدُ اللهَ قَائِلاً: (هَذَا مِنْ فَضْلِ رَبِّي)، وَأَعْرِضُ مُسَاعَدَتِي عَلَى زُمَلَائِي فِي الْمُذَاكَرَةِ",
      "أَتَفَاخَرُ أَمَامَ الْفَصْلِ وَأَسْتَهْزِئُ بِمَنْ حَصَلَ عَلَى دَرَجَةٍ ضَعِيفَةٍ",
      "أَدَّعِي أَنَّ النَّجَاحَ جَاءَ بِعَبْقَرِيَّتِي الْخَاصَّةِ دُونَ حَاجَةٍ لِتَوْفِيقِ اللهِ أَوْ جُهْدِ الأُسْتَاذِ",
      "أَرْفُضُ مُسَاعَدَةَ أَيِّ طَالِبٍ كَيْ لَا يَتَفَوَّقَ عَلَيَّ"
    ],
    "correct": 0,
    "explanation": "Tawadhu' (rendah hati) saat meraih prestasi adalah karakter insan beriman. Ilmu yang berkah adalah ilmu yang diamalkan untuk menolong sesama."
  },
  {
    "id": 12,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "أَثْنَاءَ أَدَاءِ الامْتِحَانِ، سَقَطَتْ وَرَقَةُ إِجَابَةِ زَمِيلِكَ الْمُتَفَوِّقِ بِجَانِبِكَ، وَالْمُعَلِّمُ غَيْرُ مُنْتَبِهٍ.",
    "question": "مَا هُوَ السُّلُوكُ الْمَبْنِيُّ عَلَى الصِّدْقِ وَالأَمَانَةِ وَمُرَاقَبَةِ اللهِ (الإِحْسَانِ)؟",
    "options": [
      "أَغُضُّ بَصَرِي تَمَامًا عَنِ الْوَرَقَةِ، وَأُعِيدُهَا لِزَمِيلِي بِهُدُوءٍ مُسْتَحْضِرًا أَنَّ اللهَ يَرَانِي",
      "أَسْتَغِلُّ الْفُرْصَةَ لِنَقْلِ الإِجَابَاتِ لِأَنَّ الْمُعَلِّمَ لَمْ يَرَ شَيْئًا",
      "أُخْفِي الْوَرَقَةَ كَيْ تَلْحَقَ بِهِ الْخَسَارَةُ",
      "أُوَزِّعُ الإِجَابَاتِ عَلَى بَقِيَّةِ الْفَصْلِ"
    ],
    "correct": 0,
    "explanation": "Kejujuran adalah pondasi harga diri seorang pembelajar sejati. Hadits Nabi: 'Barangsiapa yang menipu kami, maka ia bukan golongan kami' (Man ghasysyana falaisa minna)."
  },
  {
    "id": 13,
    "pilarId": "biah",
    "pilarNama": "Cinta Lingkungan & Menjaga Tubuh",
    "situasi": "قُمْتَ بِالْوُضُوءِ لِصَلَاةِ الظُّهْرِ فِي مَيَّضَةِ الْمَدْرَسَةِ، وَوَجَدْتَ صُنْبُورَ الْمَاءِ يَجْرِي بِقُوَّةٍ كَبِيرَةٍ.",
    "question": "كَيْفَ تَسْتَجِيبُ لِوَصِيَّةِ النَّبِيِّ ﷺ فِي تَرْشِيدِ اسْتِهْلَاكِ الْمَاءِ؟",
    "options": [
      "أُخَفِّفُ مِنْ جَرَيَانِ الْمَاءِ إِلَى الْقَدْرِ الْكَافِي، لِأَنَّ الإِسْرَافَ مَنْهِيٌّ عَنْهُ وَلَوْ كُنْتَ عَلَى نَهْرٍ جَارٍ",
      "أَتْرُكُ الْمَاءَ يَجْرِي بِقُوَّةٍ لِأَنَّ الْمَاءَ مَجَّانِيٌّ فِي الْمَدْرَسَةِ",
      "أَلْعَبُ بِالْمَاءِ مَعَ أَصْدِقَائِي فِي الْمَغْسَلَةِ",
      "أَتْرُكُ الصُّنْبُورَ مَفْتُوحًا بَعْدَ انْتِهَاءِ الْوُضُوءِ"
    ],
    "correct": 0,
    "explanation": "Menghemat air saat berwudhu adalah sunnah Nabi SAW dan bentuk kepedulian terhadap kelestarian sumber daya alam (Hifdzul Bi'ah)."
  },
  {
    "id": 14,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "situasi": "شَاهَدْتَ قِطَّةً صَغِيرَةً جَائِعَةً تَمُوءُ بِلَهْفَةٍ قُرْبَ مَقْصَفِ الْمَدْرَسَةِ فِي يَوْمٍ شَدِيدِ الْحَرِّ.",
    "question": "مَا هُوَ السُّلُوكُ الْمُسْتَمَدُّ مِنْ رَحْمَةِ الإِسْلَامِ بِالْكَائِنَاتِ الْحَيَّةِ؟",
    "options": [
      "أُقَدِّمُ لَهَا جُرْعَةَ مَاءٍ أَوْ بَعْضَ الطَّعَامِ رِفْقًا بِهَا، فَـ(فِي كُلِّ كَبِدٍ رَطْبَةٍ أَجْرٌ)",
      "أَطْرُدُهَا بِعُنْفٍ وَأَرْمِيهَا بِالْحِجَارَةِ لِتَبْتَعِدَ",
      "أَتَجَاهَلُهَا تَمَامًا لِأَنَّهَا مُجَرَّدُ حَيَوَانٍ لَا شُعُورَ لَهُ",
      "أَحْرِمُهَا مِنَ الْمَاءِ كَي لَا تَقْتَرِبَ مِنَ المَقْصَفِ"
    ],
    "correct": 0,
    "explanation": "Kasih sayang dalam Islam tidak hanya ditujukan kepada manusia tetapi mencakup seluruh ciptaan Allah SWT, termasuk hewan dan tumbuhan."
  },
  {
    "id": 15,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "جَاءَكَ زَمِيلُكَ مُعْتَذِرًا عَنْ كَلِمَةٍ جَارِحَةٍ بَدَرَتْ مِنْهُ بِدُونِ قَصْدٍ أَمْسِ.",
    "question": "كَيْفَ تَسْتَقْبِلُ اعْتِذَارَهُ حَسَبَ خُلُقِ الْعَفْوِ وَالتَّصَافُحِ؟",
    "options": [
      "أَقْبَلُ اعْتِذَارَهُ بِوَجْهٍ بَشُوشٍ وَأَقُولُ: (عَفَا اللهُ عَمَّا سَلَفَ، غَفَرَ اللهُ لَنَا وَلَكَ، نَحْنُ إِخْوَةٌ دَائِمًا)",
      "أَرْفُضُ مُسَامَحَتَهُ وَأُهَدِّدُهُ بِالانْتِقَامِ مِنْهُ",
      "أَطْلُبُ مِنْهُ أَنْ يُعْطِيَنِي مَالاً مُقَابِلَ الصَّفْحِ عَنْهُ",
      "أَقْبَلُهُ ظَاهِرًا وَلَكِنِّي أُضْمِرُ لَهُ الْكُرْهَ فِي قَلْبِي"
    ],
    "correct": 0,
    "explanation": "Memaafkan dengan lapang dada (al-'afwu) membersihkan hati dari dendam dan merajut kembali tali persaudaraan yang sempat retak."
  },
  {
    "id": 16,
    "pilarId": "rahmah",
    "pilarNama": "Kasih Sayang & Kemanusiaan",
    "situasi": "قَبْلَ مُغَادَرَةِ الْمَنْزِلِ صَبَاحًا إِلَى الْمَدْرَسَةِ، وَجَدْتَ وَالِدَتَكَ تُعِدُّ لَكَ طَعَامَ الإِفْطَارِ وَهِيَ تَعِبَةٌ.",
    "question": "مَا هِيَ اللَّفْتَةُ الْعَاطِفِيَّةُ وَالْكَلِمَةُ الْعَرَبِيَّةُ الَّتِي تُفْرِحُ قَلْبَهَا؟",
    "options": [
      "أُقَبِّلُ يَدَهَا شَاكِرًا وَأَقُولُ: (جَزَاكِ اللهُ خَيْرًا يَا أُمِّي الْحَبِيبَةَ، حَفِظَكِ اللهُ وَأَمَدَّكِ بِالصِّحَّةِ)",
      "آخُذُ الطَّعَامَ مُسْتَعْجِلاً دُونَ كَلِمَةِ شُكْرٍ أَوْ سَلَامٍ",
      "أَتَذَمَّرُ مِنْ نَوْعِ الطَّعَامِ وَأُخْبِرُهَا أَنَّهُ لَا يُعْجِبُنِي",
      "أَتْرُكُ الطَّعَامَ عَلَى الطَّاوِلَةِ وَأَغْلِقُ الْبَابَ بِشِدَّةٍ"
    ],
    "correct": 0,
    "explanation": "Mencium tangan orang tua dan mengucapkan doa penuh cinta adalah amalan mulia yang mengundang ridha Allah dan membuka pintu keberkahan belajar."
  },
  {
    "id": 17,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "فِي مَجْمُوعَةِ الْوَاتْسَابِ الْخَاصَّةِ بِفَصْلِ اللُّغَةِ الْعَرَبِيَّةِ، وَقَعَ سُوءُ فَهْمٍ بَيْنَ طَالِبَيْنِ وَتَصَاعَدَتِ الْحِدَّةُ.",
    "question": "كَيْفَ تَتَدَخَّلُ كَصَانِعِ سَلَامٍ حَسَبَ مَنْهَجِ الإِصْلَاحِ فِي الْقُرْآنِ؟",
    "options": [
      "أَكْتُبُ بِكَلِمَاتٍ مُهَدِّئَةٍ مُذَكِّرًا بِقَوْلِهِ تَعَالَى: (إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ)",
      "أُشَجِّعُ الطَّرَفَيْنِ عَلَى مَزِيدٍ مِنَ الشِّجَارِ لِلتَّسْلِيَةِ",
      "أَنْضَمُّ إِلَى أَحَدِ الطَّرَفَيْنِ لِشَتْمِ الآخَرِ",
      "أَقُومُ بِمُشَارَكَةِ الْمُحَادَثَةِ خَارِجَ الْمَجْمُوعَةِ لِلسُّخْرِيَّةِ مِنْهُمَا"
    ],
    "correct": 0,
    "explanation": "Menjadi juru damai (Ishlah Dzâtil Bain) dan meredam amarah adalah misi kemanusiaan setiap insan yang menghidupi Kurikulum Cinta."
  },
  {
    "id": 18,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "وَاعَدْتَ صَدِيقَكَ لِلْمُذَاكَرَةِ الْمُشْتَرَكَةِ لِمَادَّةِ الْقَوَاعِدِ فِي الْمَكْتَبَةِ السَّاعَةَ الثَّالِثَةَ عَصْرًا.",
    "question": "مَا هُوَ السُّلُوكُ الْمِعْيَارِيُّ الَّذِي يَحْفَظُ قِيمَةَ الْوَقْتِ وَالْوَفَاءِ بِالْعُهُودِ؟",
    "options": [
      "أَحْضُرُ قَبْلَ الْمَوْعِدِ بِدَقَائِقَ، لِأَنَّ (الْوَفَاءَ بِالْوَعْدِ) مَظْهَرٌ رَفِيعٌ لِاحْتِرَامِ الآخَرِينَ وَصِدْقِ الإِيمَانِ",
      "أَتَأَخَّرُ سَاعَةً كَامِلَةً دُونَ اعْتِذَارٍ أَوْ إِخْبَارٍ",
      "أَلْغِي الْمَوْعِدَ فِي آخِرِ لَحْظَةٍ دُونَ عُذْرٍ شَرْعِيٍّ مَقْبُولٍ",
      "لَا أَحْضُرُ أَبَدًا وَأُغْلِقُ هَاتِفِي كَيْ لَا يَصِلَ إِلَيَّ"
    ],
    "correct": 0,
    "explanation": "Menepati janji dan menghargai waktu orang lain adalah cermin akhlak terpuji yang membangun kepercayaan dan rasa hormat timbal balik."
  },
  {
    "id": 19,
    "pilarId": "adab",
    "pilarNama": "Adab Berbicara & Kesantunan",
    "situasi": "أَلْقَى زَمِيلُكَ خُطْبَةً عَرَبِيَّةً قَصِيرَةً فِي مُصَلَّى الْمَدْرَسَةِ، وَكَانَ مُتَرَدِّدًا وَخَائِفًا فِي بِدَايَتِهَا لَكِنَّهُ بَذَلَ جُهْدًا طَيِّبًا.",
    "question": "كَيْفَ تُقَدِّمُ لَهُ الدَّعْمَ وَالتَّشْجِيعَ الإِيجَابِيَّ بَعْدَ انْتِهَائِهِ؟",
    "options": [
      "أُصَافِحُهُ مُهَنِّئًا وَأَقُولُ: (مَا شَاءَ اللهُ، كَانَتْ مُشَارَكَةً شُجَاعَةً وَمُؤَثِّرَةً، أَتَوَقَّعُ لَكَ مُسْتَقْبَلاً بَاهِرًا يَا أَخِي!)",
      "أَعُدُّ لَهُ الأَخْطَاءَ اللُّغَوِيَّةَ بِاسْتِهْزَاءٍ أَمَامَ بَقِيَّةِ الطُّلَّابِ",
      "أَقُولُ لَهُ: (خُطْبَتُكَ كَانَتْ مُمِلَّةً جِدًّا وَلَا تَصْلُحُ لِلْإِلْقَاءِ)",
      "أَتَجَاهَلُهُ وَكَأَنَّ شَيْئًا لَمْ يَحْدُثْ"
    ],
    "correct": 0,
    "explanation": "Memberikan apresiasi dan membesarkan hati saudara yang sedang belajar adalah bentuk kecerdasan emosional dan kasih sayang yang mendalam."
  },
  {
    "id": 20,
    "pilarId": "wathan",
    "pilarNama": "Cinta Tanah Air & Persatuan",
    "situasi": "سُئِلْتَ فِي نَدْوَةٍ طُلَّابِيَّةٍ عَنْ كَيْفِيَّةِ الْمُوَافَقَةِ بَيْنَ كَوْنِكَ مُسْلِمًا مُلْتَزِمًا وَمُوَاطِنًا إِنْدُونِيسِيًّا مُخْلِصًا.",
    "question": "مَا هِيَ الرُّؤْيَةُ الْوَاعِيَةُ لِمَنْهَجِ مَحَبَّةِ الْوَزَارَةِ فِي التَّنَاغُمِ بَيْنَ التَّدَيُّنِ وَالْوَطَنِيَّةِ؟",
    "options": [
      "أُجِيبُ بِأَنَّ الدِّينَ وَالْوَطَنَ لَا يَتَعَارَضَانِ؛ فَكُلَّمَا ازْدَادَ الْمُسْلِمُ فَهْمًا لِدِينِهِ، ازْدَادَ حُبًّا لِوَطَنِهِ وَخِدْمَةً لِأَهْلِهِ",
      "أَدَّعِي أَنَّهُ لَا يُمْكِنُ الْجَمْعُ بَيْنَ الإِيمَانِ وَحُبِّ الْوَطَنِ",
      "أُفَضِّلُ التَّعَصُّبَ الطَّائِفِيَّ عَلَى مَصْلَحَةِ الْبِلَادِ الْعَامَّةِ",
      "أَقُولُ إِنَّ الْوَطَنِيَّةَ مُجَرَّدُ شِعَارٍ سِيَاسِيٍّ لَا قِيمَةَ لَهُ"
    ],
    "correct": 0,
    "explanation": "Kurikulum Cinta Kemenag menegaskan harmoni sejati antara Keagamaan dan Kebangsaan: Islam yang rahmatan lil 'alamin justru mengokohkan komitmen cinta tanah air (Hubbul Wathan minal Iman)."
  }
];
