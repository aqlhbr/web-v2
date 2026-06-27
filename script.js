// ==========================================
// FIREBASE CONFIGURATION & INITIALIZATION
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyBJamJtUuOxMZ4I0YFVHeINwg33ntFc8ys",
  authDomain: "infoprivatalfaiz.firebaseapp.com",
  projectId: "infoprivatalfaiz",
  storageBucket: "infoprivatalfaiz.firebasestorage.app",
  messagingSenderId: "1091495950544",
  appId: "1:1091495950544:web:23cd3be0d61e8b865dc6d5",
  measurementId: "G-MTY0N4JM20"
}; 

// Variabel Firebase global yang aman
let auth = null;
let db = null;
const appId = "infoprivatalfaiz";

try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    auth = firebase.auth();
    db = firebase.firestore();
    console.log("Firebase berhasil diinisialisasi di script.js!");
  } else {
    console.warn("SDK Firebase tidak terdeteksi di index.html. Fitur login/database berjalan dalam mode offline.");
  }
} catch (error) {
  console.error("Gagal menginisialisasi Firebase:", error);
}

// ==========================================
// CONFIGURATION ZONE (EASY TO MODIFY)
// ==========================================
const ADMIN_CONFIG = {
  instagramUrl: "https://instagram.com/infoprivatalfaiz",
  whatsappSupport: "https://wa.me/6281234567890",
  promoCodes: [
    { category: "SKD / CPNS", code: "NOTESKD", desc: "Diskon Khusus Tryout SKD", type: "Tryout" },
    { category: "SKD / CPNS", code: "NOT1SKD", desc: "Diskon Kelas Online SKD", type: "Kelas" },
    { category: "SKD / CPNS", code: "NOT2SKD", desc: "Diskon Rekaman Kelas SKD", type: "Record" },
    { category: "UTBK", code: "NOT3UTBK", desc: "Diskon Tryout UTBK SNBT", type: "Tryout" },
    { category: "UTBK", code: "NOT1UTBK", desc: "Diskon Kelas Online UTBK", type: "Kelas" },
    { category: "UTBK", code: "NOT2UTBK", desc: "Diskon Rekaman Kelas UTBK", type: "Record" },
    { category: "BUMN", code: "NOTEBUMN", desc: "Diskon Tryout BUMN HOTS", type: "Tryout" },
    { category: "BUMN", code: "NOT1BUMN", desc: "Diskon Kelas Online BUMN", type: "Kelas" },
    { category: "BUMN", code: "NOT2BUMN", desc: "Diskon Rekaman Kelas BUMN", type: "Record" },
    { category: "STAN & STIS", code: "NOTESTAN", desc: "Diskon Tryout PKN STAN", type: "Tryout STAN" },
    { category: "STAN & STIS", code: "NOTESTIS", desc: "Diskon Tryout STIS", type: "Tryout STIS" }
  ],
  books: [
    {
      title: "BUKU AL FAIZ SKD CPNS DAN KEDINASAN 2026",
      image: "https://i.ibb.co.com/F9mkp56/BUKU-AL-FAIZ-SKD-CPNS-DAN-KEDINASAN-2026.png",
      price: "Rp 145.000",
      link: "https://s.shopee.co.id/1gEqdCBUT0",
      tag: "Terlaris 2026"
    },
    {
      title: "Buku AL FAIZ UTBK SNBT 2026 TPS dan Literasi",
      image: "https://i.ibb.co.com/DPcdRgwZ/Buku-AL-FAIZ-UTBK-SNBT-2026-TPS-dan-Literasi.png",
      price: "Rp 139.000",
      link: "https://s.shopee.co.id/AUqF99XbDh",
      tag: "Rekomendasi UTBK"
    },
    {
      title: "Buku AL FAIZ UTBK SNBT 2025 TPS dan Literasi",
      image: "https://i.ibb.co.com/DPcdRgwZ/Buku-AL-FAIZ-UTBK-SNBT-2026-TPS-dan-Literasi.png",
      price: "Rp 120.000",
      link: "https://s.shopee.co.id/1BIa1uNN8C",
      tag: "Edisi 2025"
    },
    {
      title: "BUKU AL FAIZ BUMN HOTS 2025",
      image: "https://i.ibb.co.com/v4wpJVS0/BUKU-AL-FAIZ-BUMN-HOTS-2025.png",
      price: "Rp 125.000",
      link: "https://s.shopee.co.id/9ztyY30UDg",
      tag: "BUMN Master"
    },
    {
      title: "Buku AL Faiz TPA TBI PKN STAN Soal Asli",
      image: "https://i.ibb.co.com/DDz661SJ/Buku-AL-Faiz-TPA-TBI-PKN-STAN-Soal-Asli.png",
      price: "Rp 130.000",
      link: "https://s.shopee.co.id/qfjMRAe08",
      tag: "STAN Spesial"
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Kasus maraknya penyebaran berita bohong (hoax) di media sosial yang memecah belah persatuan bangsa bertentangan secara langsung dengan pengamalan sila Pancasila yang dilambangkan oleh...",
      options: ["Bintang Tunggal", "Rantai Emas", "Pohon Beringin", "Kepala Banteng", "Padi dan Kapas"],
      answer: 2,
      explanation: "Sila ke-3 Pancasila adalah 'Persatuan Indonesia' yang dilambangkan oleh Pohon Beringin."
    },
    {
      id: 2,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Semua pengajar di Bimbel Al Faiz adalah sosok yang ramah dan sabar. Kak Al Faiz adalah salah satu pengajar terbaik. Kesimpulan yang paling tepat adalah...",
      options: [
        "Kak Al Faiz adalah sosok pengajar yang ramah namun terkadang tidak sabar.",
        "Semua pengajar yang disukai siswa pastilah Kak Al Faiz.",
        "Kak Al Faiz adalah sosok pengajar yang ramah dan sabar.",
        "Sebagian pengajar Bimbel Al Faiz tidak ramah namun sabar.",
        "Kak Al Faiz ramah dan sabar hanya ketika mengajar."
      ],
      answer: 2,
      explanation: "Karena seluruh pengajar ramah dan sabar, maka Kak Al Faiz sebagai pengajar mutlak ramah dan sabar."
    },
    {
      id: 3,
      category: "Tes Karakteristik Pribadi (TKP)",
      question: "Dua anggota tim inti Anda mengalami konflik personal yang mengganggu koordinasi kerja kelompok. Tindakan Anda adalah...",
      options: [
        "Mengeluarkan kedua anggota tersebut dari tim.",
        "Mengabaikan konflik tersebut dan menuntut profesionalisme.",
        "Memanggil kedua belah pihak secara langsung, mendengarkan permasalahan, lalu mencari solusi terbaik bersama.",
        "Melaporkan masalah konflik internal ini langsung kepada direktur utama.",
        "Membagi ulang tugas secara terpisah agar mereka tidak perlu berinteraksi."
      ],
      answer: 2,
      explanation: "Mengutamakan mediasi langsung demi efektivitas tim mencerminkan aspek kepemimpinan."
    },
    {
      id: 4,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Jika x = 12,5% dari 160 dan y = 1/8 dari 160, maka hubungan antara x dan y adalah...",
      options: ["x > y", "x < y", "x = y", "x = 2y", "Hubungan tidak dapat ditentukan"],
      answer: 2,
      explanation: "x = 1/8 * 160 = 20. y = 1/8 * 160 = 20. Maka x = y."
    },
    {
      id: 5,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Tindakan berikut yang paling mencerminkan nilai bela negara kontemporer bagi seorang mahasiswa adalah...",
      options: [
        "Mengikuti demonstrasi tanpa memahami substansi.",
        "Fokus belajar dan menghasilkan inovasi riset teknologi yang bermanfaat.",
        "Membeli semua produk luar negeri berkualitas tinggi.",
        "Menghindari diskusi politik sama sekali.",
        "Mengunggah seluruh aktivitas harian secara berlebihan."
      ],
      answer: 1,
      explanation: "Menghasilkan prestasi ilmiah merupakan bela negara konstruktif di era modern."
    },
    {
      id: 6,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Deret angka berikut memiliki pola tertentu: 3, 7, 15, 31, 63, ... Angka berikutnya adalah...",
      options: ["125", "127", "128", "131", "135"],
      answer: 1,
      explanation: "Pola: (n x 2) + 1. Maka (63 x 2) + 1 = 127."
    },
    {
      id: 7,
      category: "Tes Karakteristik Pribadi (TKP)",
      question: "Sistem database pendaftaran tryout mendadak down, antrean peserta semakin panjang. Tindakan awal Anda adalah...",
      options: [
        "Meminta maaf dengan sopan, menjelaskan kendala, dan mencatat data peserta secara manual.",
        "Meninggalkan loket untuk mencari teknisi IT.",
        "Menyuruh peserta pulang dan kembali esok hari.",
        "Tetap duduk diam menunggu sistem pulih sendiri.",
        "Menyalahkan bagian tim IT di depan peserta."
      ],
      answer: 0,
      explanation: "Inisiatif pelayanan manual menjaga kepuasan publik saat sistem terganggu."
    },
    {
      id: 8,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Fungsi utama dari kewenangan Mahkamah Konstitusi dalam menguji undang-undang terhadap UUD 1945 adalah...",
      options: [
        "Menjaga penyalahgunaan kekuasaan eksekutif.",
        "Menjamin hak asasi warga negara dari peraturan inkonstitusional.",
        "Membantu DPR menyusun undang-undang.",
        "Membatasi hak prerogatif Presiden.",
        "Mengadili kasus pidana luar biasa."
      ],
      answer: 1,
      explanation: "Melindungi konstitusionalitas hukum demi perlindungan hak dasar warga negara."
    },
    {
      id: 9,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Tangki air penuh oleh pipa A saja dlm 4 jam, pipa B dlm 6 jam. Jika bersamaan dibuka, berapa lama waktu pengisian?",
      options: ["2 Jam 12 Menit", "2 Jam 24 Menit", "2 Jam 30 Menit", "3 Jam", "3 Jam 15 Menit"],
      answer: 1,
      explanation: "1/t = 1/4 + 1/6 = 5/12. t = 12/5 = 2.4 jam = 2 jam 24 menit."
    },
    {
      id: 10,
      category: "Tes Karakteristik Pribadi (TKP)",
      question: "Anda ditempatkan di divisi baru dengan software analisis data modern yang belum Anda kuasai. Sikap Anda adalah...",
      options: [
        "Meminta pindah kembali ke divisi lama.",
        "Mempelajari software tersebut lewat tutorial mandiri dan bertanya pada rekan kerja.",
        "Bekerja seadanya and membiarkan rekan lain menyelesaikan.",
        "Mencari celah kelemahan software tersebut.",
        "Mengeluh kepada atasan tentang sistem baru."
      ],
      answer: 1,
      explanation: "Adaptabilitas tinggi terhadap teknologi krusial bagi akselerasi kinerja modern."
    }
  ],

  // ====================================================================
  // DATABASE 105 BUTIR SOAL PREMIUM SKD PART 1
  // ====================================================================
  tryoutQuestions: [
    // --- TWK (1-30) ---
    {
      id: 1,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Setiap warga negara berhak ikut serta dalam penyelenggaraan negara dengan proses rekrutmen yang akuntabel, transparan dan efisien. Untuk membentuk karakter penyelenggara negara yang baik dan berintegritas maka diperlukan...",
      options: [
        "Norma dasar bertingkah laku",
        "Sumpah setia jabatan",
        "Tata tertib penyelenggara negara",
        "Kode etik penyelenggara negara",
        "Standar operasional prosedur"
      ],
      answer: 3,
      explanation: "Kode etik penyelenggara negara diperlukan khusus sebagai pedoman bersikap, berperilaku, dan bertindak guna menegakkan integritas moral dalam menjalankan tugas kenegaraan."
    },
    {
      id: 2,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Irma adalah seorang Front Officer di suatu BUMN milik pemerintah. Suatu hari, seorang bapak datang dan menyatakan keluhan terhadap service yang diberikan oleh perusahaan BUMN tersebut. Irma sudah mencoba menjawab setiap keluhan dengan ramah dan sopan, tapi setiap jawaban yang diberikan oleh Irma tak kunjung memuaskan sang bapak. Berkali-kali Irma memberikan penjelasan, berkali-kali pula sang pelanggan mengkritisi jawaban Irma. Menghadapi perilaku sang pelanggan, Irma merasa tersudut dan habis kesabaran lalu melemparkan tugasnya kepada rekannya sesama Front Officer. Dari cerita di atas, Irma telah mengabaikan integritasnya sebagai pegawai. Nilai integritas yang dilanggar oleh Irma adalah...",
      options: [
        "Kerja keras",
        "Kepedulian",
        "Tanggung jawab",
        "Keberanian",
        "Kedisiplinan"
      ],
      answer: 2,
      explanation: "Irma melanggar nilai tanggung jawab. Tanggung jawab sebagai Front Officer menuntutnya untuk menyelesaikan kendala pelayanan dengan tuntas sampai akhir, bukan melarikan diri."
    },
    {
      id: 3,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Arka akan mengikuti seleksi menjadi anggota TNI. Dari kecil cita-citanya konsisten hingga Arka beranjak dewasa. Arka ingin melanjutkan cita-cita ayahnya menjaga NKRI. Ayah Arka dulu merupakan anggota TNI berpangkat jendral. Beliau gugur pada saat menjalankan tugasnya di bumi Papua. Karena ayahnya adalah seorang Jendral, nama Arka sudah popular di kalangan para petinggi TNI. Namun, bukannya ia ingin meminta bantuan kepada mereka. Arka justru ingin masuk ke TNI AD melalui jalur umum. Arka ingin merasakan apa yang dulu dirasakan ayahnya, berjuang masuk TNI dari 0 dan masuk tanpa jalur eksekutif. Nilai integritas yang diteladani dari seorang Arka adalah…",
      options: [
        "Jujur",
        "Kerja keras",
        "Tanggung jawab",
        "Mandiri",
        "Individualis"
      ],
      answer: 3,
      explanation: "Arka menunjukkan sikap mandiri dengan mengandalkan kemampuan pribadinya sendiri dan menolak memanfaatkan nepotisme atau relasi jabatan ayahnya (jalur eksekutif)."
    },
    {
      id: 4,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Mukadimah hukum dasar atau yang lebih dikenal dengan Piagam Jakarta merupakan hasil dari sebuah sidang yang diselenggarakan oleh...",
      options: [
        "Panitia sembilan",
        "BPUPKI",
        "PPKI",
        "Kongres Pemuda",
        "PBB"
      ],
      answer: 0,
      explanation: "Piagam Jakarta (Jakarta Charter) dirumuskan oleh Panitia Sembilan pada tanggal 22 Juni 1945."
    },
    {
      id: 5,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Contoh pelaksanaan politik luar negeri bebas aktif berdasarkan Pancasila adalah...",
      options: [
        "Ikut campur dan memihak salah satu blok kekuatan dunia",
        "Pengiriman pasukan perdamaian ke wilayah konflik global",
        "Memberi bantuan senjata militer pada negara yang bertikai",
        "Menghimpun negara sepaham dan seideologi secara tertutup",
        "Mendirikan organisasi ekonomi yang eropa-sentris"
      ],
      answer: 1,
      explanation: "Bebas aktif berarti tidak memihak kekuatan manapun (bebas) serta aktif berkontribusi menjaga perdamaian dunia, contohnya melalui pengiriman Kontingen Garuda (Pasukan Perdamaian PBB)."
    },
    {
      id: 6,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "On the Old Order era, kekuasaan presiden sangat besar sehingga Pancasila dan Undang-Undang Dasar 1945 tidak dapat berjalan dengan semestinya. Hal berikut yang merupakan penyimpangan Pancasila pada masa demokrasi terpimpin adalah...",
      options: [
        "Penyelewengan jalannya pemilu berkala",
        "Adnya pengekangan terhadap hak asasi dan kebebasan demokrasi",
        "Pergantian sistem pemerintahan secara drastis dari presidensial menjadi parlementer",
        "Korupsi, kolusi, dan nepotisme yang merajalela di tingkat menteri",
        "Hak Budget parlemen tidak berjalan sebagaimana mestinya"
      ],
      answer: 1,
      explanation: "Pada era Demokrasi Terpimpin, kebebasan pers dibatasi, partai politik dibatasi kekuasaannya, dan kekuasaan Presiden tersentralisasi dengan pengekangan terhadap hak demokratis."
    },
    {
      id: 7,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Pancasila digunakan sebagai dasar untuk mengatur penyelenggaraan ketatanegaraan negara, hal ini sesuai dengan kedudukan Pancasila sebagai...",
      options: [
        "Pandangan hidup bangsa",
        "Moral pembangunan bangsa",
        "Jiwa kepribadian bangsa",
        "Dasar negara",
        "Perjanjian luhur bangsa"
      ],
      answer: 3,
      explanation: "Sebagai dasar negara, Pancasila berkedudukan sebagai landasan yuridis formal dalam mengatur seluruh sendi tata kelola pemerintahan dan hukum di Indonesia."
    },
    {
      id: 8,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Mengembangkan sikap bahwa bangsa Indonesia merupakan bagian dari seluruh umat manusia merupakan perwujudan sila ke-...",
      options: [
        "Satu (1)",
        "Dua (2)",
        "Tiga (3)",
        "Empat (4)",
        "Lima (5)"
      ],
      answer: 1,
      explanation: "Mengembangkan rasa persaudaraan kemanusiaan global merupakan nilai inti dari Sila Kedua, Kemanusiaan yang Adil dan Beradab."
    },
    {
      id: 9,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Pancasila memberikan keyakinan kepada rakyat dan bangsa Indonesia bahwa kebahagiaan hidup akan tercapai apabila didasarkan atas keselarasan dan keseimbangan. Berdasarkan kodrat manusia sebagai makhluk Tuhan YME yang merupakan makhluk pribadi sekaligus makhluk sosial, pengamalan Pancasila akan ditentukan oleh kemauan dan kemampuan seseorang dalam pengendalian diri dan kepentingannya agar dapat menjalankan kewajibannya sebagai warga masyarakat, bangsa dan negara. Berikut yang termasuk perilaku yang sesuai dengan nilai-nilai Pancasila menurut bacaan di atas adalah...",
      options: [
        "Menolak segala bentuk diskriminasi dan penyakit-penyakit sosial seperti pungutan liar, korupsi dan semacamnya",
        "Mematuhi hukum nasional termasuk UUD 1945 dan aturan lain yang berlaku",
        "Menerima dan memperlakukan setiap orang Indonesia sebagai sesama warga negara dengan persamaan hak dan kewajiban",
        "Memperhatikan kesejahteraan umum yang menjadi urusan negara dan memberi sumbangan sesuai dengan kemampuannya masing-masing",
        "Memperjuangkan terciptanya suatu tata sosial baru baik nasional maupun internasional dimana martabat dan hak-hak asasi setiap orang dihormati"
      ],
      answer: 2,
      explanation: "Keseimbangan peran individu & sosial ditunjukkan dengan kesediaan memperlakukan sesama warga negara secara setara dan adil (Persamaan Hak dan Kewajiban)."
    },
    {
      id: 10,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "DPR mengakhiri masa sidang kelima tahun sidang 2020-2021 pada Kamis (15/7/2021). 'Selama masa persidangan ini telah banyak kegiatan untuk menjalankan tugas konstitusional DPR yang telah dilakukan dengan prokes ketat,' ujar Puan dalam pidatonya. Sebagai warga negara yang baik, mempercayai dan menyerahkan tugas konstitusional legislatif kepada wakil rakyat terpilih merupakan bentuk pengamalan sila ke-...",
      options: [
        "Pertama",
        "Kedua",
        "Ketiga",
        "Keempat",
        "Kelima"
      ],
      answer: 3,
      explanation: "Sila Keempat: Mengutamakan kedaulatan rakyat melalui lembaga perwakilan (DPR) secara representatif."
    },
    {
      id: 11,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Berikut ini yang merupakan pengertian dari hukum privat dan publik yang benar adalah...",
      options: [
        "Hukum privat mengatur hubungan antar-orang dengan menitikberatkan pada kepentingan perorangan, sedangkan Hukum publik mengatur hubungan negara dengan alat perlengkapan atau warganegaranya.",
        "Hukum privat mengatur hubungan negara dengan warganegaranya, sedangkan hukum publik murni mengurusi sengketa perorangan.",
        "Hukum privat berlaku untuk urusan internasional, sedangkan hukum publik mengatur urusan administrasi daerah.",
        "Hukum privat bersifat mutlak tidak dapat ditawar, sedangkan hukum publik dapat diselesaikan dengan kesepakatan damai informal.",
        "Hukum privat adalah hukum hukum pidana umum, sedangkan hukum publik adalah hukum acara peradilan."
      ],
      answer: 0,
      explanation: "Hukum Privat menitikberatkan kepentingan individu (seperti perdata), sedangkan Hukum Publik mengutamakan pengaturan negara dan ketertiban umum."
    },
    {
      id: 12,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Berdasarkan UUD 1945 Pasal 14 Ayat 1, Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan dari...",
      options: [
        "DPR (Dewan Perwakilan Rakyat)",
        "MPR (Majelis Permusyawaratan Rakyat)",
        "Dewan Pertimbangan Agung",
        "Komisi Yudisial",
        "Mahkamah Agung"
      ],
      answer: 4,
      explanation: "Pemberian grasi (pengurangan hukuman) and rehabilitasi (pemulihan nama baik) memerlukan pertimbangan hukum dari lembaga yudikatif tertinggi, yaitu Mahkamah Agung."
    },
    {
      id: 13,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Keputusan Majelis Permusyawaratan Rakyat atas usul pemberhentian Presiden dan/atau Wakil Presiden harus diambil dalam rapat paripurna Majelis Permusyawaratan Rakyat yang dihadiri oleh sekurang-kurangnya...",
      options: [
        "1/4 dari jumlah anggota",
        "2/4 dari jumlah anggota",
        "3/4 dari jumlah anggota",
        "1/2 dari jumlah anggota",
        "2/3 dari jumlah anggota"
      ],
      answer: 2,
      explanation: "Sesuai Pasal 7B ayat (7) UUD 1945, sidang paripurna MPR untuk memberhentikan Presiden wajib dihadiri oleh sekurang-kurangnya 3/4 dari jumlah anggota, dan disetujui sekurang-kurangnya 2/3 anggota yang hadir."
    },
    {
      id: 14,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Sikap menghormati keberagaman bangsa adalah sebagai berikut, kecuali...",
      options: [
        "Adanya kesadaran eksklusif untuk menjaga keharmonisan internal keluarga saja.",
        "Penyelesaian permasalahan sosial yang ada melalui cara musyawarah.",
        "Adanya kesadaran untuk mengutamakan kepentingan bersama di atas golongan.",
        "Terciptanya kerukunan sosial yang hangat seperti layaknya sebuah keluarga.",
        "Adanya semangat tolong menolong, kerja sama untuk menyelesaikan masalah."
      ],
      answer: 0,
      explanation: "Pernyataan 'eksklusif hanya untuk keluarga saja' bertentangan dengan prinsip inklusivitas toleransi keberagaman berbangsa dan bernegara."
    },
    {
      id: 15,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Pulau Dana merupakan pulau terluar wilayah Indonesia yang berbatasan langsung dengan negara...",
      options: [
        "Australia",
        "Malaysia",
        "Filipina",
        "Thailand",
        "Singapura"
      ],
      answer: 0,
      explanation: "Pulau Dana (di selatan Nusa Tenggara NTT) berbatasan langsung dengan perairan teritorial benua Australia."
    },
    {
      id: 16,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Pancasila lahir karena adanya rasa nasionalisme tinggi dari para pendahulu bangsa kita melalui proses persidangan yang panjang. Hari lahir Pancasila diperingati setiap tanggal...",
      options: [
        "1 Juli",
        "1 Juni",
        "1 Agustus",
        "1 September",
        "1 Oktober"
      ],
      answer: 1,
      explanation: "Hari Lahir Pancasila diperingati setiap tanggal 1 Juni, merujuk pada pidato Ir. Soekarno di sidang BPUPKI tahun 1945."
    },
    {
      id: 17,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Nasionalisme berasal dari bahasa latin 'Nation' yang berarti dilahirkan atau dibuat. Penafsiran nasionalisme dan cerminan perilakunya dapat memiliki dinamika perubahan karena...",
      options: [
        "Nasionalisme adalah suatu paham yang bersifat rigid",
        "Nasionalisme adalah suatu paham yang bersifat tetap",
        "Nasionalisme senantiasa disesuaikan dengan perkembangan zaman",
        "Nasionalisme bersifat kaku",
        "Nasionalisme bersifat bebas tanpa aturan hukum"
      ],
      answer: 2,
      explanation: "Implementasi nasionalisme bersifat dinamis, menyesuaikan tantangan zaman (globalisasi, digitalisasi) tanpa kehilangan nilai luhur kecintaan tanah air."
    },
    {
      id: 18,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Strategi akselerasi program vaksinasi masal merupakan implementasi kebijakan publik yang efektif jika didukung oleh partisipasi aktif masyarakat umum. Salah satu manfaat partisipasi publik adalah terbentuknya masyarakat madani (civil society). Berikut yang merupakan ciri masyarakat madani, kecuali...",
      options: [
        "Keswasembadaan",
        "Sikap individualis yang dominan",
        "Kemandirian terhadap negara",
        "Keterikatan kuat pada aturan/hukum yang disepakati",
        "Terbentuk secara sukarela"
      ],
      answer: 1,
      explanation: "Sifat individualis bertentangan dengan pilar utama masyarakat madani yang menekankan gotong royong, toleransi, dan kemitraan sosial."
    },
    {
      id: 19,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Implementasi nyata konsep wawasan nusantara dalam bidang kehidupan politik Indonesia dapat dilihat pada pilihan jawaban di bawah ini, kecuali...",
      options: [
        "Pelaksanaan kehidupan berbangsa harus sesuai hukum tanpa pandang bulu.",
        "Mengembangkan HAM dan pluralisme pemersatu ras, suku, dan adat.",
        "Mengembangkan kehidupan politik primordialisme/kedaerahan yang kaku.",
        "Meningkatkan peran korps diplomatik luar negeri menjaga pulau terluar.",
        "Pelaksanaan pemilu berazaskan luber jurdil demi persatuan nasional."
      ],
      answer: 2,
      explanation: "Primordialisme kaku memecah-belah persatuan nasional, bertentangan dengan esensi integrasi wawasan nusantara."
    },
    {
      id: 20,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Pelatihan kewirausahaan, peningkatan ketrampilan digital daring, dan pemberian stimulus likuiditas perbankan di masa pandemi merupakan langkah konkret pemerintah mewujudkan salah satu tujuan negara dalam Pembukaan UUD 1945 alinea keempat, yaitu...",
      options: [
        "Melindungi segenap bangsa Indonesia dan tumpah darah Indonesia",
        "Mencerdaskan kehidupan bangsa",
        "Memajukan kesejahteraan umum",
        "Mencapai masyarakat yang adil",
        "Ikut serta menciptakan perdamaian dunia"
      ],
      answer: 2,
      explanation: "Perekonomian, kewirausahaan, dan jaminan sosial secara langsung mengarah pada pemenuhan aspek kemakmuran dan memajukan kesejahteraan umum."
    },
    {
      id: 21,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Menekankan masyarakat dalam menyelesaikan masalah sebaiknya secara musyawarah dan mufakat. Setiap warga Negara Indonesia juga berhak mendapatkan kebebasan dan rasa aman dalam berpendapat tanpa adanya paksaan dari orang lain. Pernyataan tersebut merupakan...",
      options: [
        "Hubungan Pembukaan UUD NRI 1945 dengan pasal-pasal dalam Batang Tubuh",
        "Hubungan antara hukum dengan HAM",
        "Hubungan antara HAM dengan Pancasila",
        "Hubungan antara Pancasila dengan UUD NRI 1945",
        "Hubungan kausal organis Pancasila"
      ],
      answer: 2,
      explanation: "Kebebasan berpendapat dan musyawarah mufakat adalah bentuk sinergi hak asasi manusia yang dijamin di dalam filsafat ideologi Pancasila (Sila ke-4)."
    },
    {
      id: 22,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Di bawah ini yang bukan merupakan latar belakang utama dilakukannya amandemen/perubahan UUD 1945 pada awal reformasi adalah...",
      options: [
        "Kekuasaan eksekutif (Presiden) terlalu dominan (executive heavy) tanpa checks and balances.",
        "Sistem ketatanegaraan yang bertumpu mutlak pada MPR as pemegang kedaulatan rakyat tertinggi.",
        "Terdapat pasal-pasal yang terlalu umum sehingga perlu dikembangkan pasal baru yang lebih taktis dan tidak multitafsir.",
        "Banyaknya kewenangan prerogatif Presiden yang diatur undang-undang tanpa kontrol DPR.",
        "UUD 1945 dianggap tidak memiliki struktur Pembukaan yang lengkap sehingga mengancam kelangsungan hidup NKRI."
      ],
      answer: 4,
      explanation: "Komitmen fraksi MPR saat amandemen sepakat untuk tidak mengubah bagian Pembukaan UUD 1945."
    },
    {
      id: 23,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Pancasila merupakan sumber etika dalam bersikap dan bertingkah laku. Hal ini tertuang dalam Ketetapan (TAP) MPR nomor...",
      options: [
        "TAP MPRS No. V/MPRS/1959",
        "TAP MPR No. V/MPR/2002",
        "TAP MPR No. VI/MPR/2001",
        "TAP MPR No. VII/MPR/2002",
        "TAP MPRS No. X/MPRS/1960"
      ],
      answer: 2,
      explanation: "TAP MPR No. VI/MPR/2001 secara khusus mengatur tentang Etika Kehidupan Berbangsa."
    },
    {
      id: 24,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Tujuan pembangunan nasional adalah mewujudkan suatu masyarakat adil dan makmur yang merata materiil dan spirituil berdasarkan...",
      options: [
        "Ketuhanan Yang Maha Esa",
        "Pancasila dan UUD 1945",
        "Undang-Undang APBN saja",
        "Kemanusiaan yang Adil dan Beradab",
        "Keadilan Sosial saja"
      ],
      answer: 1,
      explanation: "Pembangunan Nasional Indonesia berlandaskan idiil Pancasila dan konstitusional UUD 1945."
    },
    {
      id: 25,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Rangkaian peristiwa dan keadaan yang mendahului terbentuknya negara Indonesia, yang merupakan landasan pemikiran pendorong kemerdekaan, tertuang pada Pembukaan UUD 1945 alinea...",
      options: [
        "I dan II",
        "II dan III",
        "I, II, dan III",
        "I, II, III, dan IV",
        "II, III, dan IV"
      ],
      answer: 2,
      explanation: "Alinea I, II, dan III berisi latar belakang penentangan penjajahan, perjuangan kemerdekaan, hingga rahmat Tuhan yang mendorong terbentuknya proklamasi."
    },
    {
      id: 26,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Berikut adalah tuntutan reformasi yang disuarakan oleh komponen mahasiswa dan masyarakat pada awal tahun 1998, kecuali...",
      options: [
        "Penghapusan doktrin dwifungsi ABRI",
        "Amandemen Undang-Undang Dasar NRI 1945",
        "Desentralisasi tersentralisasi penuh antara pusat dan daerah",
        "Mewujudkan kebebasan pers dan kehidupan demokrasi",
        "Penegakan supremasi hukum dan pemberantasan KKN"
      ],
      answer: 2,
      explanation: "Tuntutan reformasi menghendaki 'Otonomi Daerah seluas-luasnya (Desentralisasi)', bukan desentralisasi terpusat."
    },
    {
      id: 27,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Interaksi masyarakat yang berorientasi ke atas, sangat mementingkan hubungan formal dan bersifat impersonal merupakan cerminan etos kebudayaan kelompok masyarakat...",
      options: [
        "Elite politik",
        "Birokrat",
        "Petani pedesaan",
        "Buruh industri",
        "Tradisional adat"
      ],
      answer: 1,
      explanation: "Kebudayaan birokrat mementingkan struktur hierarkis formal, orientasi kepatuhan ke atas, dan tata hubungan impersonal (tugas)."
    },
    {
      id: 28,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Nilai dalam karya tulis/cerita yang menyangkut masalah baik buruk, sopan santun, dan etika dasar interaksi antar manusia adalah nilai...",
      options: [
        "Sosial",
        "Budaya",
        "Agama",
        "Politik",
        "Moral"
      ],
      answer: 4,
      explanation: "Nilai moral berkaitan erat dengan etika, sopan santun, akhlak, dan perilaku baik-buruk individu."
    },
    {
      id: 29,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Kalimat di bawah ini yang mengandung kata tidak baku adalah...",
      options: [
        "Saya pergi ke apotik untuk membeli obat.",
        "Ibu Toni adalah seorang mantan atlet nasional.",
        "Ayah melakukan ekspor barang dengan temannya.",
        "Rudi memberikan nasihat pada teman-temannya.",
        "Aldi pergi ke bank bersama ayahnya."
      ],
      answer: 0,
      explanation: "Kata 'apotik' tidak baku; bentuk yang benar dan baku menurut KBBI adalah 'apotek'."
    },
    {
      id: 30,
      category: "Tes Wawasan Kebangsaan (TWK)",
      question: "Salah satu ciri makhluk hidup adalah bergerak. Gerak adalah perpindahan tempat atau perubahan posisi sebagian atau seluruh tubuh. Alat gerak manusia adalah kaki dan tangan, sedangkan hewan beragam. Kalimat utama paragraf tersebut adalah...",
      options: [
        "Salah satu ciri makhluk hidup adalah bergerak.",
        "Gerak adalah perpindahan tempat atau perubahan posisi.",
        "Makhluk hidup memiliki alat geraknya masing-masing.",
        "Alat gerak manusia adalah kaki dan tangan.",
        "Alat gerak hewan beragam mulai dari kaki dan sayap."
      ],
      answer: 0,
      explanation: "Kalimat utama terletak di awal paragraf (deduktif) yang mengemukakan ide pokok 'salah satu ciri makhluk hidup adalah bergerak'."
    },

    // --- TIU (31-65) ---
    {
      id: 31,
      category: "Tes Inteligensia Umum (TIU)",
      question: "GIZI : KURUS = ... : ...",
      options: [
        "Olahraga : Sehat",
        "Dokter : Sakit",
        "Pendek : Besar",
        "Pintar : Belajar",
        "Ilmu : Bodoh"
      ],
      answer: 4,
      explanation: "Analogi sebab-akibat (ketiadaan): Kurang gizi menyebabkan kurus, kurang ilmu menyebabkan bodoh."
    },
    {
      id: 32,
      category: "Tes Inteligensia Umum (TIU)",
      question: "... : ... = ENERGI : PADAM",
      options: [
        "Merdu – Redup",
        "Suara – Bisu",
        "Bising – Terbakar",
        "Nada – Terang",
        "Bisu – Energi"
      ],
      answer: 1,
      explanation: "Ketiadaan daya: Suara jika hilang menjadi Bisu, sebagaimana Energi jika hilang menjadi Padam."
    },
    {
      id: 33,
      category: "Tes Inteligensia Umum (TIU)",
      question: "PELANGI : BIANGLALA = ... : ...",
      options: [
        "Matahari : Terik",
        "Mobil : Mewah",
        "Sarana : Prasarana",
        "Makan : Minum",
        "Penjara : Bui"
      ],
      answer: 4,
      explanation: "Hubungan sinonim: Pelangi bersinonim dengan Bianglala, Penjara bersinonim dengan Bui."
    },
    {
      id: 34,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Ketika ayah dan ibu Andrea menikah, masing-masing telah memiliki seorang anak. Andrea lahir persis setahun setelah perkawinan tersebut dan memiliki 4 saudara. Maka...",
      options: [
        "Andrea memiliki 2 orang adik kandung",
        "Andrea merupakan anak tertua dalam keluarga",
        "Andrea tidak memiliki saudara tiri",
        "Andrea memiliki 4 orang adik",
        "Andrea merupakan anak tunggal dari perkawinan kedua"
      ],
      answer: 4,
      explanation: "Ayah dan Ibu membawa masing-masing 1 anak bawaan (perkawinan pertama). Andrea lahir dari pernikahan mereka berdua. Karena Andrea adalah anak satu-satunya dari hasil pernikahan baru mereka, dia adalah anak tunggal dari perkawinan kedua."
    },
    {
      id: 35,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Semua mahasiswa yang lulus ujian pasti pandai. Sebagian mahasiswa Teknik bukan siswa yang pandai. Kesimpulan yang benar adalah...",
      options: [
        "Semua mahasiswa yang pandai adalah mahasiswa Teknik",
        "Semua yang lulus ujian adalah mahasiswa Teknik",
        "Sebagian mahasiswa Teknik tidak mengikuti ujian",
        "Sebagian mahasiswa Teknik tidak lulus ujian",
        "Sebagian mahasiswa yang pandai tidak lulus ujian"
      ],
      answer: 3,
      explanation: "Karena mahasiswa yang lulus ujian mutlak harus pandai, sedangkan sebagian mahasiswa Teknik tidak pandai, maka sebagian mahasiswa Teknik tersebut dipastikan tidak lulus ujian."
    },
    {
      id: 36,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Siswa yang nilai Matematika atau Bahasa Inggrisnya lebih dari 9 berhak mendapatkan beasiswa prestasi. Kevin memiliki nilai Matematika 9,2 dan Bahasa Inggris 8,7. Laras mendapatkan beasiswa prestasi.",
      options: [
        "Kevin dan Laras sama-sama mendapatkan beasiswa prestasi",
        "Kevin tidak mendapatkan beasiswa prestasi",
        "Nilai Matematika Laras harus lebih dari 9",
        "Nilai Bahasa Inggris Kevin lebih tinggi dari nilai Laras",
        "Laras mendapatkan beasiswa karena nilai totalnya di atas rata-rata"
      ],
      answer: 0,
      explanation: "Syarat beasiswa adalah salah satu nilai > 9 (menggunakan operator 'atau'). Nilai MTK Kevin 9,2 (>9), maka Kevin berhak menerima beasiswa. Laras juga mendapatkannya, sehingga keduanya menerima beasiswa prestasi."
    },
    {
      id: 37,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Semua umat Nasrani bergembira jika hari Natal tiba. Hari ini adalah hari Natal.",
      options: [
        "Beberapa umat Nasrani bersedih",
        "Tidak ada umat Nasrani yang tidak bergembira",
        "Umat Nasrani tidak ikut bergembira",
        "Beberapa umat Nasrani tidak bergembira",
        "Semua umat Nasrani ikut bersedih"
      ],
      answer: 1,
      explanation: "Pernyataan 'Semua umat Nasrani bergembira' ekuivalen dengan 'Tidak ada umat Nasrani yang tidak bergembira'."
    },
    {
      id: 38,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Lima orang anak perempuan: Ani, Ana, Dini, Rani, dan Lusi memiliki mainan boneka. Boneka milik Lusi lebih banyak dari milik Rani dan Dini. Boneka milik Ana lebih banyak dari Dini, tapi tidak lebih banyak dari Lusi. Boneka Ani sama banyaknya dengan Dini. Boneka Rani lebih banyak dari Ani. Siapakah pemilik boneka paling banyak?",
      options: [
        "Ana",
        "Ani",
        "Dini",
        "Rani",
        "Lusi"
      ],
      answer: 4,
      explanation: "Urutan kepemilikan boneka menempatkan Lusi di posisi paling atas secara komparasi langsung."
    },
    {
      id: 39,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Toko E, F, G, H, I, J disusun berbaris. Toko G di antara H and E. Toko F di ujung kiri. Toko J di sebelah kanan E. Toko I ingin berjauhan dengan H. Jika toko J dipindahkan ke ujung kiri, urutannya menjadi...",
      options: [
        "J-F-G-H-E-I",
        "J-I-H-E-G-F",
        "J-E-I-F-G-H",
        "J-H-F-G-E-I",
        "J-F-H-G-E-I"
      ],
      answer: 4,
      explanation: "Setelah pemindahan J ke posisi paling kiri, urutan logis yang memenuhi syarat jarak I-H dan susunan G di antara H-E adalah J-F-H-G-E-I."
    },
    {
      id: 40,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Andis mengatur kursi 1 s.d 5 untuk Heni, Iwan, Janah, Krama, Lutfina. Moderator duduk tepat di tengah (3). Krama di kanan Iwan. Heni (peneliti) di kursi 4. Ekonom dan peneliti di samping moderator. Iwan duduk di antara Krama dan Janah. Siapakah moderatornya?",
      options: [
        "Lutfina",
        "Heni",
        "Iwan",
        "Krama",
        "Janah"
      ],
      answer: 2,
      explanation: "Melalui pencocokan data baris tempat duduk, Iwan menempati posisi nomor 3 yaitu sebagai Moderator."
    },
    {
      id: 41,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Sereal oat lebih berserat dari sereal jagung tapi kurang dari sereal dedak. Sereal jagung lebih berserat dari sereal beras tapi kurang dari sereal terigu. Maka...",
      options: [
        "Sereal beras memiliki serat paling rendah",
        "Sereal beras memiliki serat paling tinggi",
        "Sereal jagung memiliki serat paling rendah",
        "Sereal jagung memiliki serat paling tinggi",
        "Sereal oat memiliki serat paling rendah"
      ],
      answer: 0,
      explanation: "Beras < Jagung < Terigu/Oat < Dedak. Sereal beras berada pada tingkatan paling bawah."
    },
    {
      id: 42,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Nilai dari hasil operasi matematika akar pangkat dua dari: 5^2 x 5^5 x 5^3 adalah...",
      options: [
        "akar(5)",
        "5 akar(5)",
        "3125",
        "125 akar(5)",
        "25"
      ],
      answer: 2,
      explanation: "akar(5^(2+5+3)) = akar(5^10) = 5^(10/2) = 5^5 = 3125."
    },
    {
      id: 43,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Jika akar(6) = X, maka nilai akar(294) adalah...",
      options: [
        "10X",
        "9X",
        "8X",
        "7X",
        "6X"
      ],
      answer: 3,
      explanation: "akar(294) = akar(49 x 6) = 7 akar(6) = 7X."
    },
    {
      id: 44,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Tentukan hasil dari perhitungan berikut: 15^2 + (203 + 322)^2 - 524^2",
      options: [
        "1274",
        "1284",
        "1294",
        "1322",
        "1372"
      ],
      answer: 2,
      explanation: "15^2 = 225. (203+322)^2 = 525^2. Hasil akhir: 225 + 525^2 - 524^2 = 225 + (525-524)(525+524) = 225 + 1049 = 1294."
    },
    {
      id: 45,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Jika a < b < c dan d < c < e, pernyataan hubungan matematika mana yang mutlak benar?",
      options: [
        "a + e < c + d",
        "a + c < d + e",
        "a + b < c + d",
        "a + e < b + d",
        "a + d < c + e"
      ],
      answer: 4,
      explanation: "Karena a < c dan d < e, maka penjumlahan sisi kiri (a + d) mutlak bernilai lebih kecil dari penjumlahan sisi kanan (c + e)."
    },
    {
      id: 46,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Jika x = 69/65 dan y = 65%, maka hubungan nilai antara x dan y adalah...",
      options: [
        "x > y",
        "x < y",
        "x = y",
        "2x = y",
        "Hubungan tidak dapat ditentukan"
      ],
      answer: 0,
      explanation: "x = 69/65 (lebih dari 1.0). y = 0.65 (kurang dari 1.0). Maka x > y."
    },
    {
      id: 47,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Tentukan dua suku berikutnya pada barisan: 103, 107, 118, 126, 133, 145, 148, ..., ...",
      options: [
        "163 dan 162",
        "164 dan 165",
        "164 dan 163",
        "163 dan 167",
        "164 dan 166"
      ],
      answer: 2,
      explanation: "Pola selisih melompat bergantian (+15, +18) menghasilkan nilai angka berikutnya 164 dan 163."
    },
    {
      id: 48,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Lengkapi barisan angka berikut ini: 5, 6, 4, 7, 8, 6, 9, 10, 8, ...",
      options: [
        "10, 10",
        "10, 11",
        "11, 11",
        "11, 12",
        "12, 12"
      ],
      answer: 1,
      explanation: "Terdapat pola tiga urutan bilangan: Suku ke-1, 4, 7 bertambah (+2). Suku ke-2, 5, 8 bertambah (+2). Maka angka selanjutnya adalah 10 and 11."
    },
    {
      id: 49,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Lengkapi barisan angka berikut ini: 20, 13, 50, 40, 17, 100, 80, 22, ... , ...",
      options: [
        "150, 130",
        "150, 180",
        "160, 140",
        "160, 170",
        "160, 200"
      ],
      answer: 2,
      explanation: "Pola lompatan melipatgandakan nilai pada suku-suku tertentu menghasilkan nilai kelanjutan 160 dan 140."
    },
    {
      id: 50,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Lengkapi deret eksponensial berikut ini: 1, 8, 81, 1024, ...",
      options: [
        "117649",
        "46656",
        "15625",
        "7776",
        "3125"
      ],
      answer: 2,
      explanation: "Pola pangkat: 1^1, 2^3, 3^4, 4^5. Maka berikutnya 5^6 = 15625."
    },
    {
      id: 51,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Sebuah pabrik makanan membutuhkan gas sebanyak 12 tabung untuk menyalakan 4 buah kompor selama 1 bulan. Untuk mengejar jumlah produksi makanan maka pabrik menambah kompor menjadi 6 buah. Jumlah tabung gas yang dibutuhkan sekarang dalam waktu 1 bulan adalah...",
      options: [
        "21 tabung",
        "18 tabung",
        "16 tabung",
        "15 tabung",
        "14 tabung"
      ],
      answer: 1,
      explanation: "Perbandingan senilai: (12 / 4) * 6 = 3 * 6 = 18 tabung gas."
    },
    {
      id: 52,
      category: "Tes Inteligensia Umum (TIU)",
      question: "10 orang pekerja mampu menyelesaikan pembangunan 5 unit rumah dengan tipe yang sama selama 6 bulan. Waktu yang dibutuhkan 15 orang pekerja untuk menyelesaikan pembangunan 8 unit rumah dengan tipe yang sama adalah...",
      options: [
        "4 bulan",
        "6 bulan",
        "9 bulan",
        "Lebih dari 6 bulan",
        "Lebih dari 9 bulan"
      ],
      answer: 3,
      explanation: "Beban kerja per rumah: (10 orang * 6 bulan)/5 rumah = 12 orang-bulan/rumah. Untuk 8 rumah dengan 15 pekerja: (12 * 8)/15 = 96/15 = 6.4 bulan. Maka nilainya 'Lebih dari 6 bulan'."
    },
    {
      id: 53,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Mesin printer A mencetak laporan dlm 10 menit, printer B dlm 12 menit, printer C dlm 15 menit. Berapa lama waktu cetak laporan jika semua mesin bekerja bersamaan?",
      options: [
        "4 menit",
        "5 menit",
        "6 menit",
        "8 menit",
        "10 menit"
      ],
      answer: 0,
      explanation: "1/t = 1/10 + 1/12 + 1/15 = 15/60 = 1/4. Maka t = 4 menit."
    },
    {
      id: 54,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Ando menyelesaikan pekerjaan dlm 60 hari, Baco dlm 75 hari, Cece dlm 50 hari. Baco dan Cece bekerja bersama selama 25 hari, lalu sisa pekerjaan diselesaikan Ando sendiri. Berapa hari yang dibutuhkan Ando?",
      options: [
        "8 hari",
        "10 hari",
        "15 hari",
        "20 hari",
        "30 hari"
      ],
      answer: 1,
      explanation: "Kecepatan Baco+Cece dlm 25 hari = 25 * (1/75 + 1/50) = 25 * (5/150) = 125/150 = 5/6 bagian. Sisa 1/6 diselesaikan Ando: 1/6 * 60 = 10 hari."
    },
    {
      id: 55,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Anton menyelesaikan pekerjaan dlm 15 hari, Budi dlm 20 hari. Jika mereka bekerja bersama selama 4 hari, berapa bagian pekerjaan yang belum selesai?",
      options: [
        "7/11 bagian",
        "8/15 bagian",
        "32/30 bagian",
        "8/60 bagian",
        "16/60 bagian"
      ],
      answer: 1,
      explanation: "Porsi 4 hari bersama = 4 * (1/15 + 1/20) = 4 * (7/60) = 28/60 = 7/15. Sisa pekerjaan = 1 - 7/15 = 8/15 bagian."
    },
    {
      id: 56,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Suatu bilangan terdiri dari 3 angka disusun dari angka-angka 2, 3, 5, 6, 7, dan 9. Banyaknya susunan bilangan berlainan angka yang nilainya lebih besar dari 400 adalah...",
      options: [
        "50 susunan",
        "60 susunan",
        "70 susunan",
        "80 susunan",
        "90 susunan"
      ],
      answer: 3,
      explanation: "Angka ratusan harus > 4 (yaitu 5, 6, 7, 9 = 4 pilihan). Puluhan (5 pilihan tersisa). Satuan (4 pilihan tersisa). Total = 4 * 5 * 4 = 80 susunan."
    },
    {
      id: 57,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Mengendarai mobil dengan kecepatan normal membutuhkan waktu 1 jam untuk jarak 30 km. Jika terlambat berangkat 10 menit, berapa kecepatan yang harus ditempuh agar sampai tepat waktu?",
      options: [
        "33 km/jam",
        "35 km/jam",
        "36 km/jam",
        "39 km/jam",
        "40 km/jam"
      ],
      answer: 2,
      explanation: "Sisa waktu = 50 menit = 5/6 jam. Jarak = 30 km. Kecepatan v = Jarak/Waktu = 30 / (5/6) = 36 km/jam."
    },
    {
      id: 58,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Dani menabung di koperasi. Bulan ke-1 sebesar Rp 10.000, bulan berikutnya selalu bertambah Rp 5.000 lebih besar dari bulan sebelumnya. Jumnlah tabungan Dani selama 1 tahun (12 bulan) adalah...",
      options: [
        "Rp. 400.000",
        "Rp. 450.000",
        "Rp. 500.000",
        "Rp. 550.000",
        "Rp. 600.000"
      ],
      answer: 1,
      explanation: "Deret aritmatika: n=12, a=10000, b=5000. S12 = 6 * (2a + 11b) = 6 * (20000 + 55000) = 450.000 rupiah."
    },
    {
      id: 59,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Nilai rata-rata ujian suatu kelas adalah 75. Jika nilai rata-rata siswa putri dan siswa putra berturut-turut adalah 77 dan 74,5 maka perbandingan jumlah siswa putri terhadap putra adalah...",
      options: [
        "1 : 3",
        "1 : 4",
        "3 : 1",
        "3 : 4",
        "4 : 1"
      ],
      answer: 1,
      explanation: "Metode selisih timbangan: Putri(77-75) = 2. Putra(75-74.5) = 0.5. Perbandingan jumlah Putri : Putra = 0.5 : 2 = 1 : 4."
    },
    {
      id: 60,
      category: "Tes Inteligensia Umum (TIU)",
      question: "Andi menjual laptop seharga Rp 5.000.000 dengan diskon 20%. Dari transaksi tersebut ia memperoleh untung bersih sebesar 20%. Berapakah harga beli awal laptop tersebut?",
      options: [
        "Rp. 3.000.000",
        "Rp. 3.333.333",
        "Rp. 3.600.000",
        "Rp. 3.800.000",
        "Rp. 4.000.000"
      ],
      answer: 1,
      explanation: "Harga jual bersih = 80% * 5.000.000 = Rp 4.000.000. Harga beli = 4.000.000 / 1.20 = Rp 3.333.333."
    },

    // --- FIGURAL (61-65) with descriptive representations ---
    {
      id: 61,
      category: "Tes Inteligensia Umum (TIU) - Figural",
      question: "Pilihlah gambar yang merupakan kelanjutan logis dari pola rotasi matriks 2D 90 derajat searah jarum jam berikut.",
      isFigural: true,
      figuralSvg: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-white fill-none stroke-2"><rect x="10" y="10" width="80" height="80" rx="5" stroke-dasharray="4"/><line x1="50" y1="10" x2="50" y2="90"/><circle cx="50" cy="30" r="8" class="fill-gold"/></svg>`,
      options: [
        "Lingkaran hitam berada di kuadran kanan atas",
        "Lingkaran hitam berpindah ke posisi kanan tengah",
        "Lingkaran hitam berada di kuadran bawah",
        "Lingkaran hitam bergeser ke kiri",
        "Gambar kembali ke posisi semula"
      ],
      answer: 1,
      explanation: "Rotasi 90 derajat memindahkan objek penanda dari sisi atas ke sisi kanan tengah secara simetris."
    },
    {
      id: 62,
      category: "Tes Inteligensia Umum (TIU) - Figural",
      question: "Carilah gambar analogi spasial yang tepat berdasarkan prinsip pencerminan sumbu vertikal.",
      isFigural: true,
      figuralSvg: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-white fill-none stroke-2"><polygon points="20,80 50,20 80,80"/><line x1="50" y1="20" x2="50" y2="80" stroke-dasharray="3"/></svg>`,
      options: [
        "Segitiga menghadap ke bawah",
        "Segitiga mengalami pencerminan horizontal sempurna",
        "Segitiga membesar dua kali lipat",
        "Segitiga terbelah menjadi dua bagian terpisah",
        "Bentuk berubah menjadi persegi panjang"
      ],
      answer: 1,
      explanation: "Pencerminan sumbu vertikal menghasilkan refleksi horizontal yang mempertahankan poros tengah simetris."
    },
    {
      id: 63,
      category: "Tes Inteligensia Umum (TIU) - Figural",
      question: "Tentukan gambar mana yang tidak termasuk ke dalam kelompok klasifikasi bentuk di bawah ini.",
      isFigural: true,
      figuralSvg: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-white fill-none stroke-2"><circle cx="50" cy="50" r="35"/><rect x="35" y="35" width="30" height="30" class="stroke-gold"/></svg>`,
      options: [
        "Kelompok lingkaran konsentris",
        "Kelompok bangun segi empat beraturan",
        "Kelompok bentuk dengan sudut ganjil",
        "Kelompok bentuk asimetris terbuka",
        "Kelompok elips terdistorsi"
      ],
      answer: 3,
      explanation: "Bentuk asimetris terbuka merupakan anomali karena seluruh bentuk dasar lainnya bertipe kurva tertutup."
    },
    {
      id: 64,
      category: "Tes Inteligensia Umum (TIU) - Figural",
      question: "Selesaikan pola jaring-jaring kubus 3D berikut untuk menentukan sisi yang berhadapan langsung.",
      isFigural: true,
      figuralSvg: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-white fill-none stroke-2"><rect x="30" y="10" width="40" height="80" rx="2"/><line x1="30" y1="36" x2="70" y2="36"/><line x1="30" y1="63" x2="70" y2="63"/></svg>`,
      options: [
        "Sisi atas berhadapan dengan sisi bawah",
        "Sisi kanan berhadapan dengan sisi kiri",
        "Sisi depan berhadapan dengan sisi belakang",
        "Sisi diagonal berhimpit",
        "Tidak ada sisi yang berhadapan"
      ],
      answer: 0,
      explanation: "Pada jaring kubus standar, lompatan satu sekat melambangkan dua bidang sisi yang berhadapan saling sejajar."
    },
    {
      id: 65,
      category: "Tes Inteligensia Umum (TIU) - Figural",
      question: "Analisis perubahan jumlah elemen garis pada deret gambar spasial berikut untuk menemukan suku ke-5.",
      isFigural: true,
      figuralSvg: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-white fill-none stroke-2"><line x1="10" y1="10" x2="90" y2="10"/><line x1="10" y1="30" x2="90" y2="30"/><line x1="10" y1="50" x2="90" y2="50"/></svg>`,
      options: [
        "Gambar dengan 2 garis sejajar",
        "Gambar dengan 3 garis sejajar",
        "Gambar dengan 4 garis sejajar",
        "Gambar dengan 5 garis sejajar",
        "Gambar dengan susunan garis silang"
      ],
      answer: 3,
      explanation: "Deret aritmatika figural: Jumlah garis bertambah satu secara konsisten pada setiap langkah gambar baru."
    },

    // --- TKP (66-105) ---
    {
      id: 66,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Anda diminta oleh kepala sekolah untuk menjadi ketua sekaligus sebagai penanggung jawab sebuah kepanitiaan di sekolah Anda, padahal Anda merasa belum pantas. Masih ada guru-guru senior dan wakil kepala sekolah yang Anda anggap lebih mampu. Sikap yang harus Anda lakukan adalah...",
      options: [
        "Menolak permintaan kepala sekolah tersebut karena merasa belum mampu.",
        "Mempertimbangkan permintaan tersebut dan meminta saran dari wakil kepala sekolah bidang akademik.",
        "Menerima permintaan tersebut dengan senang hati dan tanggung jawab penuh.",
        "Menolak permintaan dan mengusulkan salah seorang guru senior saja kepada kepala sekolah.",
        "Menerima tawaran tersebut agar Anda bisa naik jabatan, siapa tahu kelak ada kesempatan menjadi pimpinan sekolah."
      ],
      answer: 2,
      explanation: "Menerima tugas dengan tanggung jawab penuh menunjukkan aspek kesiapan kerja, loyalitas profesi, dan kemauan berkembang."
    },
    {
      id: 67,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Sebagai satpam di sebuah perusahaan besar yang memiliki area cukup luas, Anda dituntut untuk bekerja keras menjaga keamanan lingkungan tempat Anda bekerja. Suatu malam ada segerombolan pemuda sedang mabuk-mabukan di depan gerbang pagar perusahaan tempat Anda bekerja, sikap Anda adalah...",
      options: [
        "Mendatangi segerombolan pemuda tersebut dan mengusirnya karena khawatir terjadi kerusuhan.",
        "Mendatangi segerombolan pemuda dan mengancamnya akan melaporkan ke pihak berwajib.",
        "Mendatangi segerombolan pemuda dan meminta uang keamanan karena mabuk di depan perusahaan.",
        "Mendatangi segerombolan pemuda tersebut dan menyarankan untuk mencari tempat lain kalau mau mabuk-mabukan.",
        "Mendatangi segerombolan pemuda tersebut secara persuasif dan tegas demi menjaga ketertiban lingkungan."
      ],
      answer: 4,
      explanation: "Menghadapi potensi gangguan ketertiban secara persuasif namun tetap tegas menjunjung tinggi wewenang tanpa memicu ketegangan fisik yang tidak perlu."
    },
    {
      id: 68,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Apakah Anda membuat daftar harian terhadap urgensi dan prioritas dari suatu pekerjaan?",
      options: [
        "Saya mencatat untuk pertimbangan, sasaran kerja harian, dan deadline penting.",
        "Saya jarang mencatat tetapi selalu terekam kuat dalam ingatan pikiran saya.",
        "Saya tidak membutuhkan daftar harian dan melakukan sesuai dengan yang terdekat saja.",
        "Saya selalu mencatat untuk bahan evaluasi mingguan performa pribadi.",
        "Saya kadang mencatatnya ketika pekerjaan sedang menumpuk banyak saja."
      ],
      answer: 0,
      explanation: "Manajemen waktu kerja secara terstruktur menggunakan catatan prioritas harian mencerminkan efektivitas tata kelola kerja yang produktif."
    },
    {
      id: 69,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Pada akhir bulan, kondisi finansial keluarga terbatas. Anda bertanggung jawab mengelola dana kas menganggur (idle cash) instansi. Rekan menawarkan bonus amplop asalkan Anda menginvestasikan dana kas tersebut ke perusahaannya secara informal tanpa SOP. Atasan Anda biasanya menyetujui rekomendasi Anda. Sikap Anda adalah...",
      options: [
        "Saya akan menginvestasikan kas tersebut demi mendapatkan keuntungan instan.",
        "Saya akan meminjam kas tersebut sebentar untuk kebutuhan wisata keluarga.",
        "Saya meminjam dana kas dengan rencana mengembalikannya sebelum audit.",
        "Saya tetap mengelola dan menginvestasikan dana kas mutlak sesuai prosedur SOP.",
        "Saya mengizinkan istri menggunakan kartu kredit melampaui batas kemampuan."
      ],
      answer: 3,
      explanation: "Menolak segala bentuk gratifikasi ilegal dan patuh terhadap SOP keuangan instansi adalah bukti integritas tingkat tinggi."
    },
    {
      id: 70,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Saat selesai melakukan audit di sekolah terpencil, kepala sekolah memberikan amplop berisi uang transport tambahan. Anda tahu hal tersebut melanggar kebijakan audit internal. Sikap Anda adalah...",
      options: [
        "Menerima uang tersebut dengan syarat tidak dilaporkan di lembar laporan resmi.",
        "Menolak pemberian tersebut secara halus dan tegas demi menjaga objektivitas audit.",
        "Menerimanya karena menganggap uang tersebut adalah bentuk apresiasi lelah perjalanan.",
        "Menerima lalu mendonasikannya agar terbebas dari rasa bersalah pribadi.",
        "Memarahi kepala sekolah karena dianggap berusaha menyuap tim audit."
      ],
      answer: 1,
      explanation: "Menolak gratifikasi secara halus dan tegas menjaga integritas diri sebagai auditor profesional tanpa menyinggung pihak lain."
    },
    {
      id: 71,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Suatu saat Anda diberi tanggung jawab menjadi pemegang uang simpan pinjam di organisasi di mana Anda tinggal. Iwan mendatangi Anda untuk mengetahui simpanan uang yang dipunyai oleh Marwis dengan alasan Marwis mempunyai hutang ke Iwan dan terkesan tidak mau membayar dengan alasan tidak mempunyai uang, padahal sangat dibutuhkan untuk membayar sekolah anaknya. Tindakan Anda adalah...",
      options: [
        "Mencoba menasehati Marwis untuk membayar ke Iwan langsung.",
        "Memberi gambaran tentang keuangan Marwis tanpa menyebutkan jumlah nominalnya.",
        "Saya tidak akan memberi tahu jumlah uang demi kerahasiaan data simpanan.",
        "Memberi tahu Iwan jumlah uang Marwis dengan pertimbangan Iwan betul-betul membutuhkan.",
        "Mendorong Iwan untuk menagih karena saya tahu Marwis mempunyai uang di simpanan."
      ],
      answer: 2,
      explanation: "Menjaga kerahasiaan simpanan anggota adalah kewajiban mutlak pemegang kas."
    },
    {
      id: 72,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Setiap hari saya bertanggung jawab menyampaikan laporan rekapitulasi transaksi harian kepada kantor pusat untuk dikompilasi. Sifat transaksi rutin mendominasi laporan-laporan tersebut. Hanya ada beberapa transaksi khusus yang pelaporannya agak berbeda karena perlu dianalisis terlebih dahulu. Laporan biasa disusun pukul 15:00 dan deadline 16:00. Sikap Anda...",
      options: [
        "Saya ambil data dari dashboard sebagaimana adanya untuk disusun laporan.",
        "Data diunduh dari aplikasi, disesuaikan, dilaporkan sesuai template kreasi saya.",
        "Data didownload dari dashboard, dianalisis, disajikan sesuai format kantor pusat.",
        "Saya rasa cukup klik-klik, kirim ke kantor pusat, biar kantor pusat yang analisis.",
        "Saya lebih senang proses manual, saya kompilasi data mentah dari sumbernya."
      ],
      answer: 2,
      explanation: "Sikap terbaik adalah memanfaatkan teknologi yang ada (dashboard), menganalisisnya secara profesional, dan menyajikannya sesuai format standar organisasi."
    },
    {
      id: 73,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Saya didaftarkan untuk mengikuti pelatihan public speaking oleh bagian kepegawaian. Kemampuan tersebut memang saya butuhkan karena saya sering menjadi pewara. Betapa kagetnya saya ketika didaftarkan untuk mengikuti pelatihan ini karena pelatihnya ternyata adalah artis idola saya. Sikap Anda...",
      options: [
        "Sepertinya saya tidak akan fokus untuk mengikuti pelatihan.",
        "Saya yakin bisa menjadi pewara yang dapat diandalkan seperti artis idola saya.",
        "Saya akan pamer swafoto dengan artis yang saya kagumi untuk panjat sosial.",
        "Semangat saya naik untuk belajar menjadi pewara terhebat yang bisa diandalkan.",
        "Sebelum pelatihan, saya akan berlatih mandiri, agar nanti dilirik artis idola saya."
      ],
      answer: 3,
      explanation: "Keberadaan artis idola menjadi katalisator motivasi positif untuk meningkatkan kompetensi diri dalam public speaking."
    },
    {
      id: 74,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Suatu hari, Anda dimarahi oleh atasan Anda karena telat mengumpulkan laporan kerja. Anda pun dinilai kurang bertanggung jawab dan hal ini membuat image Anda buruk. Di sisi lain, Anda sangat paham bahwa penyebab Anda telat mengumpulkan laporan kerja adalah karena printer Anda bermasalah. Maka sikap Anda...",
      options: [
        "Meminta maaf kepada atasan dan berjanji tidak akan mengulangi hal yang sama.",
        "Meminta maaf dan menjelaskan bahwa kesalahan tersebut bukan semata-mata karena kelalaian Anda.",
        "Menjelaskan bahwa printer yang Anda gunakan untuk mencetak laporan sempat bermasalah.",
        "Meminta maaf dan menjelaskan jika keterlambatan Anda mengumpulkan laporan kerja adalah karena printer perusahaan bermasalah.",
        "Tidak terima, karena seharusnya perusahaan juga memfasilitasi semua sarana penunjang kerja."
      ],
      answer: 0,
      explanation: "Seorang profesional bertanggung jawab atas hasil kerjanya. Meminta maaf tanpa mengambinghitamkan peralatan menunjukkan kedewasaan bersikap."
    },
    {
      id: 75,
      category: "Tes Karakteristik Pribadi (TKP) - Profesionalisme",
      question: "Andi (Kabag) diminta Yanto (Atasan) mengawasi pegawai secara ketat karena banyak yang bolos/lambat. Yanto juga berpesan agar Andi memegang rahasia ke mana ia pergi karena tugasnya rahasia. Hari kedua, datang tamu pejabat penting provinsi memaksa meminta informasi ke mana Yanto pergi karena urusan darurat. Tindakan Anda selaku Andi...",
      options: [
        "Tetap tidak mengatakan kemana Yanto pergi karena sudah berjanji.",
        "Memberi tahu ke mana atasanya pergi mengingat kondisi genting yang terjadi.",
        "Berjanji akan segera menghubungi Yanto tetapi tetap memberitahu kemana Yanto pergi.",
        "Mengatakan tidak tahu kemana Yanto pergi.",
        "Mengatakan kepada tamu dari provinsi bahwa Anda tidak mempunyai kewenangan untuk memberikan informasi tersebut."
      ],
      answer: 4,
      explanation: "Menolak memberikan informasi rahasia secara profesional dengan menjelaskan batasan kewenangan adalah langkah terbaik menjaga komitmen rahasia jabatan."
    },
    {
      id: 76,
      category: "Tes Karakteristik Pribadi (TKP) - Anti Radikalisme",
      question: "Anda menyaksikan video di YouTube tentang bahaya radikalisme digital. Presiden meminta publik mengisi ruang digital dengan konten positif. Sebagai ASN, tindakan apa yang akan Anda lakukan?",
      options: [
        "Tetap aktif di media sosial dan membentengi diri agar terhindar dari paham radikalisme.",
        "Lebih mawas diri dan turut membantu mengedukasi masyarakat untuk mewaspadai radikalisme berbasis digital serta menyebarkan konten positif.",
        "Menghindari media sosial karena takut terpapar paham radikalisme.",
        "Fokus menjalankan tanggung jawab pekerjaan dan mendukung upaya pemerintah melawan radikalisme.",
        "Menggelar diskusi dengan teman sesama ASN agar bisa deteksi dini jika ada teman yang terpapar."
      ],
      answer: 1,
      explanation: "Sebagai ASN, peran aktif mengedukasi masyarakat dan menyebarkan konten positif sangat penting untuk menangkal bahaya radikalisme digital."
    },
    {
      id: 77,
      category: "Tes Karakteristik Pribadi (TKP) - Anti Radikalisme",
      question: "Suatu hari, terjadi musibah tanah longsor yang menimpa tetangga berbeda agama dengan Anda hingga kehilangan tempat tinggal. Sikap Anda...",
      options: [
        "Saya yakin solidaritas masyarakat sangat tinggi sehingga sudah banyak warga yang membantu.",
        "Saya akan ikut membantu memperbaiki rumah tetangga tersebut dengan tenaga dan materi sebagai bentuk toleransi.",
        "Saya akan mengajak masyarakat yang tinggal di sekitar untuk menyumbang demi meringankan beban.",
        "Saya akan mengingatkan ketua RT setempat untuk memberikan bantuan kepada tetangga tersebut.",
        "Saya akan berpartisipasi memberikan sumbangan dengan menyisihkan sebagian uang saku/gaji dan mengajak masyarakat menyumbang dikoordinir ketua RT."
      ],
      answer: 4,
      explanation: "Tindakan tolong-menolong tanpa memandang perbedaan keyakinan secara terorganisasi melalui RT menunjukkan kepedulian sosial yang inklusif."
    },
    {
      id: 78,
      category: "Tes Karakteristik Pribadi (TKP) - Anti Radikalisme",
      question: "Rekan kerja baru Anda bercerita bahwa ia dahulu pernah terlibat dalam organisasi radikal yang dilarang pemerintah, namun kini sudah keluar karena sadar akan bahayanya. Sikap Anda...",
      options: [
        "Seketika menjauhi rekan kerja tersebut karena dianggap masih berpotensi radikal.",
        "Mengajak diskusi tentang Pancasila dan merangkul rekan kerja tersebut agar tidak terjerumus kembali.",
        "Memaki rekan kerja tersebut bahwa ia memiliki catatan hitam.",
        "Melaporkan kepada atasan agar sesegera mungkin memecat rekan tersebut.",
        "Mendengarkan dengan baik ceritanya dan menjaga kerahasiaannya agar tidak menyebar sebagai aib."
      ],
      answer: 1,
      explanation: "Merangkul dan menguatkan pemahaman nilai kebangsaan rekan kerja yang telah sadar adalah langkah bela negara yang humanis dan solutif."
    },
    {
      id: 79,
      category: "Tes Karakteristik Pribadi (TKP) - Anti Radikalisme",
      question: "Rekan kerja Anda di loket pelayanan bersikap kasar dan malas-malasan kepada seorang pelanggan tertentu dengan alasan pelanggan tersebut 'tidak sealiran' dengannya. Sikap Anda...",
      options: [
        "Membiarkan kondisi tersebut karena Anda juga tidak sealiran dengan pelanggan tadi.",
        "Mengambil alih pelayanan pada loket tersebut dan melayani pelanggan dengan ramah serta sepenuh hati.",
        "Mengambil alih pelayanan loket tersebut meskipun dengan terpaksa.",
        "Mendiamkan saja kondisi tersebut seakan tidak terjadi apa-apa.",
        "Memanggil pelanggan tersebut untuk pindah ke loket Anda agar Anda berikan pelayanan terbaik."
      ],
      answer: 1,
      explanation: "Pelayanan publik wajib diberikan secara setara dan profesional tanpa memandang perbedaan kelompok atau pemikiran."
    },
    {
      id: 80,
      category: "Tes Karakteristik Pribadi (TKP) - Anti Radikalisme",
      question: "Saat ini banyak pertikaian bernuansa SARA. Anda dimintai pendapat selaku guru SD agar nilai-nilai Pancasila dapat diterima anak usia sekolah dasar dengan baik. Usulan Anda...",
      options: [
        "Menanamkan pentingnya nilai persatuan dan kesatuan dengan cara sederhana seperti permainan, kerja bakti, dsb.",
        "Mengajarkan pentingnya toleransi dan tenggang rasa secara lisan di kelas.",
        "Menambah jam kegiatan belajar mengajar untuk mata pelajaran Pendidikan Pancasila.",
        "Menerapkan sistem reward poin materiil agar nilai Pancasila diserap baik.",
        "Mengajak orang tua murid ikut mendidik putra-putrinya dengan nilai Pancasila di rumah."
      ],
      answer: 0,
      explanation: "Pembelajaran Pancasila untuk anak usia dasar paling efektif dilakukan melalui metode belajar sambil bermain dan aktivitas kelompok yang menyenangkan."
    },
    {
      id: 81,
      category: "Tes Karakteristik Pribadi (TKP) - Pelayanan Publik",
      question: "Anda bekerja di bagian pelayanan publik dan perusahaan menerapkan standar excelent service. Sistem ini krusial bagi kemajuan perusahaan. Tindakan Anda...",
      options: [
        "Mempelajari lagi bagaimana penerapan excelent service.",
        "Mengusulkan dan mengikuti program training pelayanan terjadwal untuk seluruh karyawan.",
        "Mempelajari dan memperdalam pengetahuan tentang excelent service secara mandiri.",
        "Mencari informasi di internet mengenai teori-teori excelent service.",
        "Mendatangkan mentor ahli luar untuk membimbing kembali para staf."
      ],
      answer: 1,
      explanation: "Excellent service hanya terwujud jika seluruh lini karyawan memiliki pemahaman dan keterampilan pelayanan yang setara melalui pelatihan terstruktur."
    },
    {
      id: 82,
      category: "Tes Karakteristik Pribadi (TKP) - Pelayanan Publik",
      question: "Seorang ibu-ibu tua menyerobot antrean pelayanan Anda dengan alasan ia sudah lelah mengantre lama, sementara Anda sedang melayani pelanggan lain. Sikap Anda...",
      options: [
        "Meminta teman kerja lain untuk mengambil alih pelayanannya.",
        "Memintanya kembali ke antrean secara santun sambil menjelaskan pelanggan lain juga sudah mengantre lama.",
        "Mendiamkan ibu tersebut dan berpura-pura tidak memedulikan.",
        "Meminta izin kepada pelanggan yang sedang dilayani untuk mendahulukannya agar tidak ricuh.",
        "Memintanya kembali ke antrean secara tegas dan kaku."
      ],
      answer: 1,
      explanation: "Keadilan dan asas kepatuhan antrean harus dijaga secara konsisten. Menjelaskan secara santun namun tegas adalah tindakan pelayanan publik yang matang."
    },
    {
      id: 83,
      category: "Tes Karakteristik Pribadi (TKP) - Pelayanan Publik",
      question: "Anda datang ke kantor lebih pagi untuk mengerjakan tugas pribadi. Sebelum jam pelayanan resmi dibuka, seorang pelanggan datang membutuhkan pelayanan darurat. Tindakan Anda...",
      options: [
        "Membiarkannya menunggu karena jam pelayanan memang belum resmi dimulai.",
        "Menanyakan kepada rekan kerja lain yang sudah datang untuk melayaninya.",
        "Menginformasikan jam operasional pelayanan dan memintanya menunggu.",
        "Langsung memberikan pelayanan penuh tanpa memeriksa kelengkapan.",
        "Menanyakan keperluannya, memeriksa kelengkapan berkasnya, menginformasikan tempat pengambilan nomor antrean, dan memintanya bersabar."
      ],
      answer: 4,
      explanation: "Membantu pelanggan memeriksa kelengkapan administrasi sebelum jam operasional dimulai mengoptimalkan waktu tunggu pelanggan dan mencegah kesalahan berkas."
    },
    {
      id: 84,
      category: "Tes Karakteristik Pribadi (TKP) - Pelayanan Publik",
      question: "Antrean loket Anda sangat penuh sesak. Anda mendapati ada seorang kakek lansia dan ibu hamil besar ikut mengantre di barisan belakang. Tindakan Anda...",
      options: [
        "Memberikan prioritas jalur antrean khusus secara langsung kepada ibu hamil dan lansia tersebut.",
        "Berpura-pura tidak melihat posisi mereka dalam antrean umum.",
        "Memberikan perlakuan antrean yang sama demi keadilan operasional.",
        "Memperhatikan kondisi mereka dengan perasaan iba tanpa mengambil tindakan nyata.",
        "Berdiskusi dengan atasan terlebih dahulu sebelum memutuskan memberi antrean khusus."
      ],
      answer: 0,
      explanation: "Penyediaan layanan prioritas bagi kelompok rentan (lansia, disabilitas, ibu hamil) adalah standar mutlak pelayanan publik yang inklusif."
    },
    {
      id: 85,
      category: "Tes Karakteristik Pribadi (TKP) - Pelayanan Publik",
      question: "Hari ini suasana hati Anda sedang sangat buruk karena masalah pribadi di rumah, sementara Anda harus segera menghadapi antrean klien. Sikap Anda...",
      options: [
        "Menenangkan diri sejenak sebisanya, lalu tetap melayani pelanggan secara profesional dan optimal.",
        "Meminta rekan sejawat menggantikan posisi Anda sementara Anda menenangkan diri.",
        "Tetap melayani pelanggan meskipun dengan ekspresi wajah murung dan tidak stabil.",
        "Menolak memberikan pelayanan karena emosi sedang terganggu.",
        "Izin pulang kerja lebih awal dengan alasan kurang enak badan."
      ],
      answer: 0,
      explanation: "Pemisahan masalah pribadi dengan profesionalitas kerja adalah kunci integritas dan kematangan emosi petugas pelayanan."
    },
    {
      id: 86,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Dalam acara outbound, tim Anda diejek oleh tim lawan karena sering menderita kekalahan pada lomba-lomba sebelumnya. Sikap Anda menyikapi hal ini...",
      options: [
        "Mengalah saja demi kedamaian acara agar tidak kotor-kotoran.",
        "Jika nanti kalah lagi, saya memilih beristirahat di penginapan saja.",
        "Kalah sudah biasa, namun khusus cabang ini saya yakin tim kami pemenangnya.",
        "Merencanakan ejekan balasan yang lebih parah jika nanti tim kami menang.",
        "Menjaga soliditas tim, fokus berjuang maksimal, dengan motto kalah-menang tetap kompak."
      ],
      answer: 4,
      explanation: "Membangun jejaring kerja menuntut kemampuan menjaga soliditas kelompok dan menyikapi persaingan secara suportif dan gembira."
    },
    {
      id: 87,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Perusahaan Anda menerapkan sistem IT baru, namun performa kerja karyawan tidak menunjukkan kemajuan signifikan karena gagap teknologi. Tindakan Anda selaku pimpinan...",
      options: [
        "Mengadakan program pelatihan/diklat teknologi terstruktur bagi seluruh karyawan demi peningkatan kapasitas.",
        "Berusaha memberi pengetahuan bahwa teknologi itu penting dalam bekerja.",
        "Mengganti sistem IT tersebut dengan perangkat lunak lain yang lebih mahal.",
        "Kembali menggunakan metode manual lama sambil mencari solusi alternatif.",
        "Menghapus divisi IT karena dirasa hanya membuang anggaran tanpa dampak."
      ],
      answer: 0,
      explanation: "Teknologi tidak akan efektif tanpa peningkatan kapasitas penggunanya. Pemimpin yang bijak berinvestasi pada peningkatan keahlian SDM."
    },
    {
      id: 88,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Tim kerja Anda diberi tugas tambahan yang deadline-nya sama dengan tugas pertama. Mengingat tugas pertama juga cukup rumit, maka sikap Anda sebagai ketua tim kerja adalah...",
      options: [
        "Menerimanya dan merasa tertantang untuk segera menyelesaikan tugas bersama teman-teman.",
        "Menerima dan memikirkan risikonya bersama teman-teman.",
        "Menolaknya dengan tegas demi kenyamanan tim, karena tugas pertama saja sudah cukup rumit.",
        "Meminta pimpinan berpikir lagi, agar mengalihkan tugas kepada tim kerja lainnya.",
        "Meminta perpanjangan tenggat waktu yang sangat lama tanpa memulai pengerjaan."
      ],
      answer: 0,
      explanation: "Menyikapi tantangan kerja secara positif dan bersinergi dengan tim adalah kunci keberhasilan penanganan beban kerja ganda."
    },
    {
      id: 89,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Anda memimpin sebuah tim dari berbagai lulusan universitas terkemuka. Kinerja tim anda sangat bagus. menurut anda apa penyebabnya...",
      options: [
        "Seluruh anggota tim bekerja dengan profesional dalam menyelesaikan tugas.",
        "Semua anggota tim menjiwai tujuan tim.",
        "Anggota tim masing masing mempunyai potensi yang bagus di setiap bidangnya.",
        "Akibat pentingnya menjaga kekompakan, bermusyawarah mufakat, bekerja dengan disiplin.",
        "Motivasi yang mengena kepada seluruh anggota Tim."
      ],
      answer: 1,
      explanation: "Kekuatan terbesar tim hebat bukan hanya kapasitas individu, melainkan kesamaan arah dan penjiwaan mendalam terhadap tujuan bersama (shared goals)."
    },
    {
      id: 90,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Lingkungan kantor instansi tempat Anda bekerja menjadi sangat kotor, akibat terkena banjir semalam, yang di luar dugaan cukup besar. Karena petugas cleaning service di tempat kerja Anda sangat terbatas, maka sebagai pimpinan Anda...",
      options: [
        "Mengerahkan seluruh pegawai membersihkan kantor, tanpa peduli pangkat dan jabatannya.",
        "Hanya menyuruh pegawai yang golongannya masih rendah saja.",
        "Meminta petugas cleaning service untuk kerja lembur.",
        "Meminta semua pegawai untuk pulang, karena kondisi kantor tidak condusif untuk digunakan.",
        "Menyalahkan kepala daerah di media sosial, atas terjadinya banjir tersebut."
      ],
      answer: 0,
      explanation: "Dalam situasi krisis organisasi, gotong royong tanpa sekat birokrasi memperkuat jejaring kebersamaan."
    },
    {
      id: 91,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Rahmad mengerjakan tugas tim dengan bersungguh-sungguh sehingga dinilai bagus oleh atasannya. Namun ternyata ada salah seorang teman di tim tersebut mengaku bahwa dialah yang mengerjakannya, padahal semua itu adalah kerja Rahmad sendiri. Sikap apa yang diambil jika Anda sebagai Rahmad?",
      options: [
        "Menegur teman Anda karena telah melakukan pengakuan terhadap hasil kerja yang bukan dilakukannya.",
        "Mencari bukti-bukti bahwa Anda sendiri yang mengerjakan dan memberikannya kepada atasan.",
        "Membiarkannya dan memaklumi sikap teman Anda tersebut, karena mungkin saja ia sedang haus pengakuan.",
        "Memakluminya dan menjadikan Anda menjadi semakin terpacu untuk berprestasi lebih baik.",
        "Kecewa dan terpaksa berhenti berteman dengan teman Anda tersebut."
      ],
      answer: 1,
      explanation: "Integritas profesional menuntut kejujuran atribusi karya. Menyelesaikan klaim sepihak secara objektif dengan bukti adalah langkah terbaik."
    },
    {
      id: 92,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Bayu dan Rifai memiliki pandangan politik yang berbeda. Mereka berdua sering terlibat debat yang cukup panjang dan tajam saat sedang berada di kantor. Hal tersebut kadang membuat pegawai lain di kantor merasa terganggu. Hal apakah yang sebaiknya dilakukan oleh Zulfikar sebagai atasan...",
      options: [
        "Membiarkan saja, karena perbedaan pandangan politik adalah sesuatu yang wajar saja.",
        "Meminta pegawai yang merasa terganggu untuk segera memberi tahu Bayu dan Rifai.",
        "Memberikan arahan kepada seluruh pegawai di kantor agar selalu menghargai perbedaan pandangan politik dan menjaga kondusivitas.",
        "Mengadakan pertemuan rutin untuk memfasilitasi debat, agar dapat menyampaikan pandangan.",
        "Memberikan contoh diskusi yang baik kepada semua pegawai."
      ],
      answer: 2,
      explanation: "Atasan wajib memelihara lingkungan kerja kondusif dengan mengarahkan seluruh pegawai agar memisahkan urusan politik dengan tugas dinas."
    },
    {
      id: 93,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Dalam suatu kerja tim, Doni ditunjuk sebagai Koordinator team anda. Setelah sekian lama, anda dan teman-teman tim merasa Doni tidak mampu mengatur kinerja tim sesuai jadwal pengerjaan, yang anda lakukan?",
      options: [
        "Mengadakan rapat untuk menyelesaikan pekerjaan tim tanpa Doni.",
        "Mengajukan diri sebagai koordinator tim menggantikan Doni.",
        "Bersama-sama dengan teman tim menemui pembimbing untuk meminta Koordinator diganti.",
        "Menyemangati dan membantu Doni agar pekerjaan dapat selesai tepat waktu.",
        "Kerja tim sesuai dengan keputusan Doni."
      ],
      answer: 3,
      explanation: "Jejaring kerja yang sehat mengedepankan kolaborasi saat salah satu anggota tim mengalami kesulitan demi pengerjaan proyek tepat waktu."
    },
    {
      id: 94,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Saya adalah seorang teknisi pada sebuah perusahaan terkemuka. Suatu hari terjadi kerusakan mesin yang sangat vital pada kantor cabang kami, dan harus diselesaikan dengan segera. Padahal saat itu saya sedang mengerjakan perbaikan pada mesin di kantor lain yang jaraknya sangat jauh. Untuk mengatasi hal ini, maka Saya akan...",
      options: [
        "Meminta atasan di kantor untuk menugaskan teknisi lain yang sedang tidak melakukan pekerjaan.",
        "Segera menyelesaikan pekerjaan Saya dan menuju ke sana untuk memperbaikinya.",
        "Menuju ke sana untuk memperbaikinya dengan segera.",
        "Menghubungi rekan teknisi yang dekat dengan lokasi mesin dan memintanya untuk memperbaikinya.",
        "Menuju kesana untuk memperbaikinya dan meminta teman untuk menyelesaikan pekerjaan yang sedang Saya kerjakan saat ini."
      ],
      answer: 3,
      explanation: "Delegasi dan kolaborasi dengan jejaring terdekat adalah langkah koordinasi taktis paling efisien dalam penyelesaian masalah mendesak."
    },
    {
      id: 95,
      category: "Tes Karakteristik Pribadi (TKP) - Jejaring Kerja",
      question: "Anda seorang mahasiswa yang mendapatkan tugas kelompok berkelompok dan dijadwalkan presentasi besok. Anda dipilih sebagai ketua. Anda sudah mengetahui kemampuan akademis rekan satu tim (ada yang pasif, pandai, kurang aktif). Bagaimana sikap anda?",
      options: [
        "Membagi tugas penyusunan materi sesuai dengan kemampuan akademis masing-masing.",
        "Membagi tugas penyusunan materi sama rata kepada seluruh anggota tanpa memandang kemampuan.",
        "Membagi tugas penyusunan materi hanya kepada anggota yang pandai saja.",
        "Membagi tugas penyusunan materi sesuai kapasitas (ada yang fokus penyusunan materi utama, ada yang menangani pencetakan/presentasi visual).",
        "Membagi tugas penyusunan materi sama rata disertai ancaman pengeluaran dari keanggotaan kelompok."
      ],
      answer: 3,
      explanation: "Sebagai ketua kelompok, membagi porsi tugas secara efisien sesuai porsi kapabilitas anggota mengoptimalkan luaran kerja tim."
    },
    {
      id: 96,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Saat saya pulang naik Moda Transportasi Terpadu (MRT), saya iseng kepoin instagram kenalan baru di kafe tadi. Betapa terpesonanya saya, saat saya melihat bahwa ia telah mengunggah foto kami berdua. Saya lantas tertawa terpingkal-pingkal karena pose foto kami diambil secara diam-diam, seolah-olah sedang melakukan hal-hal konyol. Saya dipandangi beberapa orang penumpang dengan tatapan seolah-olah seperti saya ini orang gila. Sikap saya...",
      options: [
        "Sepertinya orang-orang syirik dengan kebahagiaan saya, saya harus mengendalikan diri.",
        "Supaya citra diri saya terjaga, saya akan tunjukkan foto tersebut kepada mereka.",
        "Inikah yang namanya cinta, dunia bak milik berdua, saya tidak bisa berhenti tertawa.",
        "Saya akan memohon maaf kepada penumpang yang terganggu dan kembali biasa saja.",
        "Saya tersinggung , saya pelototi mereka, dan akan segera turun di stasiun berikutnya."
      ],
      answer: 3,
      explanation: "Mawas diri dalam ruang publik dan bersedia meminta maaf atas ketidaknyamanan yang ditimbulkan adalah sikap sosial budaya yang dewasa."
    },
    {
      id: 97,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Saya memiliki tetangga yang sangat tidak saya suka karena sering membicarakan hal-hal yang buruk tentang Saya. Kebetulan bulan ini pertemuan RT di lingkungan saya akan diadakan di rumah orang tersebut. Saya akan...",
      options: [
        "Tetap menghadiri pertemuan RT tersebut seperti biasa, lupakan saja masalah tersebut.",
        "Tetap menghadiri pertemuan RT tersebut seperti biasa dan menggunakannya untuk mengklarifikasi.",
        "Tetap menghadiri pertemuan RT tersebut seperti biasa dan memperbaiki hubungan saya dengan orang tersebut.",
        "Tidak menghadiri pertemuan RT tersebut, tidak munafik, saya malas bertemu.",
        "Hadir sebentar saja dalam pertemuan RT tersebut, lalu mencari alasan agar dapat cepat pergi."
      ],
      answer: 2,
      explanation: "Mengutamakan kerukunan bertetangga dan silaturahmi warga di atas sentimen pribadi menunjukkan kematangan bersikap."
    },
    {
      id: 98,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Pada saat tetangga saya mantu, diadakan pesta dangdutan tiga hari tiga malam. Saya jenuh dengan musik dangdut tersebut apabila diputar tiada henti seperti ini. Padahal itu tradisi lingkungan. Sikap Anda...",
      options: [
        "Mereka perlu diberi teguran, saya akan mengadukan hal ini kepada pihak berwenang via sosial media.",
        "Kearifan lokal seperti ini akan saya maklumi sepenuhnya.",
        "Saya menghormati acara tetangga, jadi saya mengalah, saya akan menginap di tempat kerabat sementara waktu.",
        "Saya akan menghubungi PLN setempat untuk mematikan jaringan listrik agar acaranya bubar.",
        "Pak RT akan saya mintai tolong untuk memberi nasihat agar acara tidak terlalu berlebihan dan berisik sampai larut."
      ],
      answer: 4,
      explanation: "Menyelesaikan konflik bertetangga secara damai dan normatif lewat mediasi ketua RT adalah langkah sosial terbaik."
    },
    {
      id: 99,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Anda seorang staf admin utama yang menerima data. Anda dinyatakan salah dalam mengirimkan laporan oleh salah seorang manager karena ada data dari staf admin bawahan Anda dari divisi lain yang belum terhitung. Staf divisi lain itu meminta maaf karena mengirim data kurang akurat. Tindakan Anda...",
      options: [
        "Meminta maaf kepada manajer tersebut atas kurang akuratnya data yang dikirim, lalu berjanji mengirim resmi laporan dan menegur dengan keras.",
        "Meminta maaf kepada manajer tersebut atas kurang akuratnya data yang dikirim, lalu berjanji mengirim revisi laporan sambil menyampaikan kronologis.",
        "Meminta maaf kepada manajer tersebut atas kurang akuratnya data, berjanji mengirimkan resmi segera, lalu berdiskusi membimbing staf tersebut agar mengerti kesalahannya.",
        "Meminta maaf kepada manajer tersebut atas kurang akuratnya data yang dikirim, lalu berjanji mengirim revisi laporan sambil melaporkan kelalaian divisi lain.",
        "Meminta maaf kepada manajer tersebut atas kurang akuratnya data yang dikirim, lalu menjanjikan laporan revisi dikirim sendiri oleh staf bersangkutan."
      ],
      answer: 2,
      explanation: "Sebagai koordinator utama, Anda bertanggung jawab penuh atas kualitas akhir laporan. Meminta maaf kepada manajer dan membina bawahan secara konstruif adalah tindakan kepemimpinan beretika."
    },
    {
      id: 100,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Bawahan andalan Anda yang memegang peran kunci proyek panik meminta izin meninggalkan rapat pengerjaan karena anaknya harus dilarikan ke UGD. Tindakan Anda selaku manajer...",
      options: [
        "Mengizinkan bawahan Anda tersebut untuk segera menyusul ke UGD mengingat keluarga merupakan hal terpenting juga.",
        "Mengizinkan bawahan Anda tersebut untuk segera menyusul ke UGD dan memberitahukan kepadanya untuk tetap tenang, serta mengingatkan deadline.",
        "Mengizinkan bawahan Anda dan mengingatkannya agar bershabar, tetap tenang dan tidak panik, kemudian mendelegasikan tugas pentingnya sementara waktu.",
        "Mengizinkan bawahan Anda tersebut untuk segera menyusul ke UGD dan memberikan semangat ke bawahan Anda.",
        "Mengizinkan bawahan Anda dengan memberikan semangat serta dukungan moril yang mendalam agar cobaan yang dihadapi dapat dilewati."
      ],
      answer: 2,
      explanation: "Kemanusiaan dan empati keluarga harus diutamakan dalam keadaan darurat medis. Memberikan izin dengan ketenangan moral membantu karyawan menangani krisis keluarganya dengan baik."
    },
    {
      id: 101,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Dalam kaitannya dengan perubahan yang banyak terjadi di lingkungan kerja, seperti perubahan atasan, penggantian rekan kerja dalam satu tim, perpindahan area survei di lapangan dan sebagainya, maka saya dinilai sebagai seseorang yang...",
      options: [
        "Mudah menyesuaikan diri dengan lingkungan yang baru.",
        "Butuh waktu untuk bergaul secara akrab dengan orang lain.",
        "Mempunyai keinginan tinggi untuk mengetahui kegiatan orang lain.",
        "Cenderung kurang adaptif terhadap perubahan.",
        "Mempunyai pergaulan yang tidak luas dimasyarakat."
      ],
      answer: 0,
      explanation: "Kapasitas beradaptasi secara cepat dengan lingkungan baru adalah kompetensi sosial budaya esensial dalam dinamika dunia kerja modern."
    },
    {
      id: 102,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Kawan Anda memiliki istri yang akan melahirkan. Karena tidak memiliki biaya rumah sakit, maka dia meminjam uang dari Anda, padahal uang Anda hanya cukup untuk kebutuhan sehari-hari. Maka yang akan Anda lakukan...",
      options: [
        "Saya meminta maaf and mengatakan sebenarnya bahwa saya tidak punya uang untuk dipinjamkan.",
        "Saya pinjamkan sisa uang saya yang sedikit tersebut.",
        "Saya menolak meminjamkan uang saya karena itu hanya cukup untuk kebutuhan sehari-hari.",
        "Saya akan memberikan solusi dengan membantunya mencarikan bantuan pinjaman darurat dari rekan atau koperasi.",
        "Saya menyarankan agar dia meminjam dari orang lain."
      ],
      answer: 3,
      explanation: "Membantu mencarikan solusi alternatif saat kapasitas finansial pribadi terbatas menunjukkan empati kemanusiaan yang aktif dan cerdas."
    },
    {
      id: 103,
      category: "Tes Karakteristik Pribadi (TKP) - Sosial Budaya",
      question: "Ketika anda makan di sebelah anda ada orang yang bau badan, bagaimana sikap anda?",
      options: [
        "Cepat cepat selesaikan makan lalu pergi.",
        "Cuek saja dan pura pura tidak terjadi apa apa.",
        "Biasa saja selagi tidak mengganggu anda secara berlebihan.",
        "Menyuruhnya pindah tempat duduk dengan dalih akan ada saudara anda yang akan duduk.",
        "Mencari posisi makan yang lebih nyaman dan aman agar Anda tidak terganggu secara tidak sopan."
      ],
      answer: 1,
      explanation: "Toleransi dan menjaga martabat/perasaan orang lain di ruang publik adalah bentuk kedewasaan etika sosial."
    },
    {
      id: 104,
      category: "Tes Karakteristik Pribadi (TKP) - Teknologi Informasi (TIK)",
      question: "Di perusahaan Anda baru saja memperbaruhi salah satu perangkat IT guna mempermudah karyawan menyelesaikan tugasnya. Sikap Anda adalah…",
      options: [
        "Mengajak rekan-rekan Anda untuk mencari informasi bagaimana mengoperasikan perangkat tersebut di waktu kosong.",
        "Mencari informasi mengenai pengoperasian perangkat tersebut Bersama rekan-rekan Anda.",
        "Meminta orang lain untuk mengajar Anda dan rekan-rekan Anda cara mengoperasikan perangkat tersebut.",
        "Mencari informasi di internet (panduan operasional) dan mempelajarinya bersama rekan-rekan Anda secara proaktif.",
        "Mengajak rekan-rekan Anda mencari informasi terkiat pengoperasian perangkat tersebut sepulang jam kantor."
      ],
      answer: 3,
      explanation: "Memanfaatkan internet secara proaktif untuk menguasai teknologi baru bersama tim menunjukkan penguasaan TIK yang mandiri."
    },
    {
      id: 105,
      category: "Tes Karakteristik Pribadi (TKP) - Teknologi Informasi (TIK)",
      question: "Anda melakukan kesalahan fatal daam tugas karena kurangnya pemahaman tentang tekhnologi informasi. Yang Anda lakukan…",
      options: [
        "Mencari jalan keluar dari permasalahan yang saya hadapi dan mengevaluasi sistem pengisian secara mandiri.",
        "Mengundang ahli IT untuk memberikan pengetahuan kepada saya tentang cara penggunaan tekhnologi informasi.",
        "Mengundang ahli IT untuk memberikan pengetahuan informasi kepada saya tentang pentingnya tekhnologi informasi.",
        "Membahas permasalahan yang saya hadapi dengan rekan kerja.",
        "Melapor pada atasan dan mengikuti petunjuknya."
      ],
      answer: 0,
      explanation: "Bertanggung jawab memulihkan kekeliruan dengan proaktif mencari solusi teknis sebelum melaporkannya adalah wujud pematangan kompetensi kerja."
    }
  ]
};

// Global State
let currentUser = null;
let authMode = 'login';

// Practice Quiz State (10 Soal Cepat)
let quizQuestions = ADMIN_CONFIG.practiceQuestions;
let currentQuizIndex = 0;
let quizAnswers = {};
let quizTimer = null;
let quizTimeLeft = 15 * 60;

// Tryout Premium Simulator State (105 Soal Komplit)
let simQuestions = ADMIN_CONFIG.tryoutQuestions;
let currentSimIndex = 0;
let simAnswers = {};
let simDoubtful = {};
let simTimer = null;
let simTimeLeft = 90 * 60; // 90 menit
let hasAccessToTryout = false;

// SPA Navigation dengan Dukungan Riwayat Browser (Back & Forward)
function navigateTo(targetView, pushState = true) {
  // Sembunyikan semua section
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.add('hidden');
  });

  // Tampilkan section target
  const targetElement = document.getElementById(`view-${targetView}`);
  if (targetElement) {
    targetElement.classList.remove('hidden');
  }

  // Jika navigasi diinisiasi oleh user click, daftarkan ke history browser
  if (pushState) {
    history.pushState({ view: targetView }, "", `#${targetView}`);
  }

  // Desain Responsif: Otomatis sembunyikan mobile drawer jika terbuka
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileDrawer) {
    mobileDrawer.classList.add('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handler saat tombol Back / Forward ditekan di browser
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.view) {
    navigateTo(event.state.view, false);
  } else {
    // Jika tidak ada state sebelumnya (fallback ke home)
    navigateTo('home', false);
  }
});

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-drawer');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// ==========================================
// NOTIFICATION BANNER UTILITIES
// ==========================================
function showAlert(message, duration = 6000) {
  const banner = document.getElementById('custom-alert');
  const text = document.getElementById('custom-alert-text');
  if (text) text.innerText = message;
  if (banner) banner.classList.remove('hidden');
  
  setTimeout(() => {
    dismissAlert();
  }, duration);
}

function dismissAlert() {
  const banner = document.getElementById('custom-alert');
  if (banner) banner.classList.add('hidden');
}

// ==========================================
// ADMIN RENDER LOGIC
// ==========================================
function renderPromoCodes() {
  const container = document.getElementById('promo-codes-container');
  if (!container) return;
  container.innerHTML = '';
  
  ADMIN_CONFIG.promoCodes.forEach(promo => {
    const div = document.createElement('div');
    div.className = "bg-stone-900 border border-stone-800 rounded-2xl p-5 hover:border-maroon transition-all flex flex-col justify-between";
    div.innerHTML = `
      <div>
        <span class="text-[10px] text-maroon-light bg-maroon/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-3">${promo.category}</span>
        <p class="text-stone-400 text-xs mb-1">${promo.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between">
        <span class="text-sm font-bold tracking-wider font-mono text-gold">${promo.code}</span>
        <button onclick="copyToClipboard('${promo.code}')" class="text-xs bg-maroon hover:bg-maroon-light text-white px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-semibold">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i> Salin
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderBooks() {
  const container = document.getElementById('books-container');
  if (!container) return;
  container.innerHTML = '';

  ADMIN_CONFIG.books.forEach(book => {
    const card = document.createElement('div');
    card.className = "bg-stone-950 border border-stone-800 rounded-3xl p-4 flex flex-col justify-between hover:border-maroon/60 transition-all shadow-xl group";
    card.innerHTML = `
      <div class="relative overflow-hidden rounded-2xl bg-stone-900 mb-4 flex items-center justify-center p-6 h-64">
        <span class="absolute top-2 left-2 bg-maroon text-white font-bold text-[9px] px-2 py-0.5 rounded-full z-10">${book.tag}</span>
        <img src="${book.image}" alt="${book.title}" class="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src='https://placehold.co/300x400/800000/FFFFFF?text=Buku+Al+Faiz'">
      </div>
      <div class="space-y-3">
        <h3 class="font-bold text-white text-base leading-snug line-clamp-2 h-12">${book.title}</h3>
        <div class="flex items-center justify-between border-t border-stone-900 pt-3">
          <div>
            <span class="block text-[10px] text-stone-500">Harga Spesial</span>
            <span class="text-gold font-bold text-lg">${book.price}</span>
          </div>
          <a href="${book.link}" target="_blank" class="bg-maroon hover:bg-maroon-light text-white font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-1">
            Beli via Shopee <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function copyToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  showAlert(`Kode "${text}" berhasil disalin!`);
}

// User Authentication
function openAuthModal(mode = 'login') {
  authMode = mode;
  const title = document.getElementById('auth-modal-title');
  const desc = document.getElementById('auth-modal-desc');
  const submitBtn = document.getElementById('auth-submit-btn');
  const toggleDesc = document.getElementById('auth-toggle-desc');
  const toggleBtn = document.getElementById('auth-toggle-btn');

  if (mode === 'login') {
    title.innerText = "Masuk Akun";
    desc.innerText = "Akses modul belajar dan rekam progres simulasi CAT.";
    submitBtn.innerText = "Masuk Sekarang";
    toggleDesc.innerText = "Belum punya akun?";
    toggleBtn.innerText = "Daftar Baru";
  } else {
    title.innerText = "Daftar Akun Baru";
    desc.innerText = "Buat akun belajar gratis Anda hanya dalam beberapa detik.";
    submitBtn.innerText = "Buat Akun";
    toggleDesc.innerText = "Sudah punya akun?";
    toggleBtn.innerText = "Masuk Saja";
  }

  document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function toggleAuthMode() {
  openAuthModal(authMode === 'login' ? 'register' : 'login');
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value;
  const pass = document.getElementById('auth-password').value;

  if (typeof auth !== 'undefined' && auth !== null) {
    if (authMode === 'login') {
      auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
          showAlert("Selamat datang kembali! Anda berhasil masuk.");
          closeAuthModal();
        })
        .catch(err => {
          showAlert(`Gagal Masuk: ${err.message}`);
        });
    } else {
      auth.createUserWithEmailAndPassword(email, pass)
        .then(() => {
          showAlert("Registrasi akun baru berhasil! Anda otomatis masuk.");
          closeAuthModal();
        })
        .catch(err => {
          showAlert(`Gagal Daftar: ${err.message}`);
        });
    }
  } else {
    showAlert("Sistem otentikasi Firebase tidak tersedia di server saat ini.");
  }
}

function logoutUser() {
  if (typeof auth !== 'undefined' && auth !== null) {
    auth.signOut().then(() => {
      showAlert("Berhasil keluar dari akun.");
      hasAccessToTryout = false;
      document.getElementById('tryout-simulator-panel').classList.add('hidden');
      document.getElementById('tryout-results-panel').classList.add('hidden');
      document.getElementById('tryout-purchase-screen').classList.remove('hidden');
    });
  }
}

// 10-Item Practice Quiz Controllers
function startPracticeQuiz() {
  currentQuizIndex = 0;
  quizAnswers = {};
  quizTimeLeft = 15 * 60;

  document.getElementById('quiz-welcome').classList.add('hidden');
  document.getElementById('quiz-result-panel').classList.add('hidden');
  document.getElementById('quiz-active-panel').classList.remove('hidden');

  renderQuizQuestion();
  renderQuizMap();

  if (quizTimer) clearInterval(quizTimer);
  quizTimer = setInterval(() => {
    quizTimeLeft--;
    const mins = Math.floor(quizTimeLeft / 60);
    const secs = quizTimeLeft % 60;
    const display = document.getElementById('quiz-timer-display');
    if (display) display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (quizTimeLeft <= 0) {
      clearInterval(quizTimer);
      showAlert("Waktu Latihan telah habis! Mengirimkan lembar jawaban otomatis.");
      calculateQuizResult();
    }
  }, 1000);
}

function renderQuizQuestion() {
  const q = quizQuestions[currentQuizIndex];
  document.getElementById('quiz-category').innerText = q.category;
  document.getElementById('current-question-num').innerText = currentQuizIndex + 1;
  document.getElementById('quiz-question-text').innerText = q.question;

  const optContainer = document.getElementById('quiz-options-container');
  optContainer.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((opt, index) => {
    const isSelected = quizAnswers[currentQuizIndex] === index;
    const btn = document.createElement('button');
    btn.onclick = () => selectQuizAnswer(index);
    btn.className = `w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
      isSelected 
        ? 'bg-maroon/20 border-maroon text-white ring-2 ring-maroon/50' 
        : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-900'
    }`;
    
    btn.innerHTML = `
      <span class="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm ${
        isSelected ? 'bg-maroon text-white' : 'bg-stone-800 text-stone-400'
      }">${letters[index]}</span>
      <span class="text-sm mt-0.5 leading-relaxed">${opt}</span>
    `;
    optContainer.appendChild(btn);
  });

  document.getElementById('quiz-prev-btn').disabled = currentQuizIndex === 0;
  
  document.querySelectorAll('.q-map-btn').forEach((btn, idx) => {
    if (idx === currentQuizIndex) {
      btn.className = "q-map-btn w-8 h-8 rounded-lg font-bold text-xs bg-gold text-black transition-all";
    } else if (quizAnswers[idx] !== undefined) {
      btn.className = "q-map-btn w-8 h-8 rounded-lg font-bold text-xs bg-green-900 text-white transition-all";
    } else {
      btn.className = "q-map-btn w-8 h-8 rounded-lg font-bold text-xs bg-stone-800 text-stone-400 transition-all";
    }
  });
}

function renderQuizMap() {
  const grid = document.getElementById('questions-grid-map');
  if (!grid) return;
  grid.innerHTML = '';
  quizQuestions.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.onclick = () => { currentQuizIndex = idx; renderQuizQuestion(); };
    btn.className = "q-map-btn w-8 h-8 rounded-lg font-bold text-xs bg-stone-800 text-stone-400 transition-all";
    btn.innerText = idx + 1;
    grid.appendChild(btn);
  });
}

function selectQuizAnswer(index) {
  quizAnswers[currentQuizIndex] = index;
  renderQuizQuestion();
}

function prevQuestion() {
  if (currentQuizIndex > 0) {
    currentQuizIndex--;
    renderQuizQuestion();
  }
}

// Navigasi lanjut kuis cepat
function nextQuestion() {
  if (currentQuizIndex < quizQuestions.length - 1) {
    currentQuizIndex++;
    renderQuizQuestion();
  } else {
    confirmFinishQuiz();
  }
}

function confirmFinishQuiz() {
  if (confirm("Apakah Anda yakin ingin menyelesaikan simulasi latihan soal ini sekarang?")) {
    clearInterval(quizTimer);
    calculateQuizResult();
  }
}

function calculateQuizResult() {
  let correct = 0;
  let wrong = 0;

  quizQuestions.forEach((q, idx) => {
    if (quizAnswers[idx] === q.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  const score = correct * 10;
  const accuracy = Math.round((correct / quizQuestions.length) * 100);

  document.getElementById('quiz-score-num').innerText = score;
  document.getElementById('quiz-correct-count').innerText = correct;
  document.getElementById('quiz-wrong-count').innerText = wrong;
  document.getElementById('quiz-accuracy-pct').innerText = `${accuracy}%`;

  const explanationContainer = document.getElementById('quiz-explanations-list');
  explanationContainer.innerHTML = '';

  quizQuestions.forEach((q, idx) => {
    const isUserCorrect = quizAnswers[idx] === q.answer;
    const letters = ['A', 'B', 'C', 'D', 'E'];
    
    const expDiv = document.createElement('div');
    expDiv.className = "bg-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3";
    expDiv.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-gold">${q.category} - Soal ${idx + 1}</span>
        <span class="text-xs px-2.5 py-1 rounded-full font-bold ${
          isUserCorrect ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
        }">${isUserCorrect ? 'Benar (+10)' : 'Salah / Tidak Dijawab'}</span>
      </div>
      <p class="text-sm font-semibold text-white leading-relaxed">${q.question}</p>
      <div class="bg-stone-900 p-3.5 rounded-xl border border-stone-800 text-xs text-stone-300">
        <span class="block text-gold font-bold mb-1">Pilihan Terbaik: ${letters[q.answer]}. ${q.options[q.answer]}</span>
        <span class="block text-stone-400 mt-2"><strong>Pembahasan:</strong> ${q.explanation}</span>
      </div>
    `;
    explanationContainer.appendChild(expDiv);
  });

  if (currentUser) {
    saveUserQuizScore(currentUser.uid, score, correct, accuracy);
  }

  document.getElementById('quiz-active-panel').classList.add('hidden');
  document.getElementById('quiz-result-panel').classList.remove('hidden');
}

function saveUserQuizScore(uid, score, correct, accuracy) {
  if (typeof db !== 'undefined' && db !== null) {
    db.collection('artifacts').doc(appId).collection('users').doc(uid).collection('quiz_history').add({
      score: score,
      correctCount: correct,
      accuracy: accuracy,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(e => console.error("Gagal menyimpan hasil kuis:", e));
  }
}

function loadUserData(uid) {
  if (typeof db !== 'undefined' && db !== null) {
    db.collection('artifacts').doc(appId).collection('users').doc(uid).collection('quiz_history')
      .orderBy('timestamp', 'desc').limit(1).get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          showAlert(`Halo! Skor latihan terakhir Anda di database kami adalah ${data.score} (${data.correctCount} Soal Benar)`);
        }
      }).catch((e) => console.log("Belum ada riwayat / Firebase index dibatasi:", e));
  }
}

// 105-Item Simulator Controllers
function handleTryoutPurchase() {
  if (!currentUser) {
    showAlert("Silakan buat akun atau masuk terlebih dahulu untuk membeli tryout agar riwayat Anda tercatat.");
    openAuthModal('login');
    return;
  }

  const method = document.getElementById('pay-method').value;
  document.getElementById('pay-method-display').innerText = method === 'QRIS' ? 'QRIS / E-Wallet (Otomatis)' : 'Transfer Bank';

  if (method === 'QRIS') {
    document.getElementById('qris-area').classList.remove('hidden');
    document.getElementById('bank-area').classList.add('hidden');
  } else {
    document.getElementById('qris-area').classList.add('hidden');
    document.getElementById('bank-area').classList.remove('hidden');
  }

  document.getElementById('payment-modal').classList.remove('hidden');
}

function closePaymentModal() {
  document.getElementById('payment-modal').classList.add('hidden');
}

function simulatedPaymentSuccess() {
  hasAccessToTryout = true;
  closePaymentModal();
  showAlert("Pembayaran Rp 5.000 sukses dideteksi! Akses Tryout Premium Part 1 Telah Diaktifkan.");

  if (currentUser && typeof db !== 'undefined' && db !== null) {
    db.collection('artifacts').doc(appId).collection('users').doc(currentUser.uid).collection('transactions').add({
      product: "Tryout Premium SKD Part 1",
      price: 5000,
      status: "SUCCESS",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(e => console.error(e));
  }

  document.getElementById('tryout-purchase-screen').classList.add('hidden');
  document.getElementById('tryout-simulator-panel').classList.remove('hidden');
  startSimulatorExam();
}

function startSimulatorExam() {
  currentSimIndex = 0;
  simAnswers = {};
  simDoubtful = {};
  simTimeLeft = 90 * 60;

  renderSimulatorQuestion();
  renderSimulatorNavGrid();

  if (simTimer) clearInterval(simTimer);
  simTimer = setInterval(() => {
    simTimeLeft--;
    const mins = Math.floor(simTimeLeft / 60);
    const secs = simTimeLeft % 60;
    const display = document.getElementById('sim-timer');
    if (display) display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (simTimeLeft <= 0) {
      clearInterval(simTimer);
      showAlert("Waktu simulasi CAT habis! Menyimpan lembar kerja secara otomatis.");
      submitSimulatorTest();
    }
  }, 1000);
}

function renderSimulatorQuestion() {
  const q = simQuestions[currentSimIndex];
  document.getElementById('sim-q-num').innerText = currentSimIndex + 1;
  document.getElementById('sim-q-cat').innerText = q.category;
  document.getElementById('sim-q-text').innerText = q.question;

  const figContainer = document.getElementById('sim-figural-container');
  if (q.isFigural && q.figuralSvg) {
    figContainer.innerHTML = q.figuralSvg;
    figContainer.classList.remove('hidden');
  } else {
    figContainer.innerHTML = '';
    figContainer.classList.add('hidden');
  }

  const optContainer = document.getElementById('sim-options-container');
  optContainer.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((opt, index) => {
    const isSelected = simAnswers[currentSimIndex] === index;
    const btn = document.createElement('button');
    btn.onclick = () => selectSimAnswer(index);
    btn.className = `w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
      isSelected 
        ? 'bg-maroon/20 border-maroon text-white ring-2 ring-maroon/50' 
        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-850'
    }`;
    
    btn.innerHTML = `
      <span class="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm ${
        isSelected ? 'bg-maroon text-white' : 'bg-stone-800 text-stone-400'
      }">${letters[index]}</span>
      <span class="text-sm mt-0.5 leading-relaxed">${opt}</span>
    `;
    optContainer.appendChild(btn);
  });

  updateSimulatorNavButtons();
  updateProgressCount();
}

function updateProgressCount() {
  const answeredCount = Object.keys(simAnswers).length;
  document.getElementById('sim-progress-indicator').innerText = `${answeredCount} dari 105 Terisi`;
}

// Handler pemilihan jawaban CAT simulator
function selectSimAnswer(index) {
  simAnswers[currentSimIndex] = index;
  renderSimulatorQuestion();
  renderSimulatorNavGrid();
}

function toggleDoubtful() {
  simDoubtful[currentSimIndex] = !simDoubtful[currentSimIndex];
  renderSimulatorQuestion();
  renderSimulatorNavGrid();
}

function prevSimQuestion() {
  if (currentSimIndex > 0) {
    currentSimIndex--;
    renderSimulatorQuestion();
  }
}

// Navigasi lanjut soal simulasi
function nextSimQuestion() {
  if (currentSimIndex < simQuestions.length - 1) {
    currentSimIndex++;
    renderSimulatorQuestion();
  }
}

// Render navigasi lembar jawaban simulator
function renderSimulatorNavGrid() {
  const grid = document.getElementById('sim-navigation-grid');
  if (!grid) return;
  grid.innerHTML = '';

  simQuestions.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.onclick = () => { currentSimIndex = idx; renderSimulatorQuestion(); };
    btn.innerText = idx + 1;
    
    let btnClass = "w-full py-2.5 text-center rounded text-[11px] font-bold transition-all ";
    if (simDoubtful[idx]) {
      btnClass += "bg-yellow-500 text-black";
    } else if (simAnswers[idx] !== undefined) {
      btnClass += "bg-green-600 text-white";
    } else {
      btnClass += "bg-stone-800 border border-stone-700 text-stone-400 hover:text-white";
    }

    btn.className = btnClass;
    grid.appendChild(btn);
  });
}

function updateSimulatorNavButtons() {
  const btns = document.querySelectorAll('#sim-navigation-grid button');
  btns.forEach((btn, idx) => {
    if (idx === currentSimIndex) {
      btn.classList.add('ring-2', 'ring-white', 'scale-110', 'z-10');
    } else {
      btn.classList.remove('ring-2', 'ring-white', 'scale-110', 'z-10');
    }
  });
}

function confirmExitSimulator() {
  if (confirm("Apakah Anda yakin ingin keluar dari sesi ujian? Progres pengerjaan Anda saat ini tidak akan disimpan di database.")) {
    clearInterval(simTimer);
    hasAccessToTryout = false;
    document.getElementById('tryout-simulator-panel').classList.add('hidden');
    document.getElementById('tryout-purchase-screen').classList.remove('hidden');
    showAlert("Sesi ujian dihentikan.");
  }
}

function submitSimulatorTest() {
  const answeredCount = Object.keys(simAnswers).length;
  const unansweredCount = simQuestions.length - answeredCount;
  
  let confirmMsg = `Apakah Anda yakin ingin menyelesaikan ujian sekarang?\n\n- Terjawab: ${answeredCount} Soal\n- Belum Dijawab: ${unansweredCount} Soal`;
  
  if (confirm(confirmMsg)) {
    clearInterval(simTimer);
    
    let correct = 0;
    let wrong = 0;
    simQuestions.forEach((q, idx) => {
      if (simAnswers[idx] === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    document.getElementById('sim-res-correct').innerText = correct;
    document.getElementById('sim-res-wrong').innerText = wrong;
    document.getElementById('sim-res-score').innerText = `${correct} / 105`;
    
    const passed = correct >= 68; // Passing grade minimal 68 benar dari 105 soal
    const statusEl = document.getElementById('sim-res-status');
    if (passed) {
      statusEl.innerText = "LULUS PASSING GRADE";
      statusEl.className = "text-sm font-extrabold uppercase tracking-widest text-green-400 mt-1";
    } else {
      statusEl.innerText = "BELUM LULUS PG";
      statusEl.className = "text-sm font-extrabold uppercase tracking-widest text-red-500 mt-1";
    }

    document.getElementById('tryout-simulator-panel').classList.add('hidden');
    document.getElementById('tryout-results-panel').classList.remove('hidden');

    if (currentUser && typeof db !== 'undefined' && db !== null) {
      db.collection('artifacts').doc(appId).collection('users').doc(currentUser.uid).collection('tryout_results').add({
        correctAnswers: correct,
        wrongAnswers: wrong,
        status: passed ? "PASS" : "FAIL",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(e => console.error(e));
    }
  }
}

function restartSimulatorTest() {
  document.getElementById('tryout-results-panel').classList.add('hidden');
  document.getElementById('tryout-simulator-panel').classList.remove('hidden');
  startSimulatorExam();
}

// ==========================================
// ONLOAD SYSTEM INITIALIZATION & FIREBASE INIT
// ==========================================
window.onload = function() {
  // Amankan pemuatan ikon Lucide
  if (typeof lucide !== 'undefined') {
    try {
      lucide.createIcons();
    } catch (e) {
      console.error("Gagal memuat ikon Lucide:", e);
    }
  } else {
    console.warn("Lucide Icons tidak terdeteksi.");
  }
  
  // Amankan pemuatan status autentikasi dari Firebase
  if (typeof auth !== 'undefined' && auth !== null) {
    try {
      auth.onAuthStateChanged((user) => {
        if (user) {
          currentUser = user;
          const profile = document.getElementById('user-profile');
          const mobileProfile = document.getElementById('mobile-user-profile');
          const authBtns = document.getElementById('auth-buttons');
          const mobileAuthBtns = document.getElementById('mobile-auth-buttons');

          if (profile) profile.classList.remove('hidden');
          if (mobileProfile) mobileProfile.classList.remove('hidden');
          if (authBtns) authBtns.classList.add('hidden');
          if (mobileAuthBtns) mobileAuthBtns.classList.add('hidden');
          
          const emailDisplay = document.getElementById('user-display-email');
          const mobileEmailDisplay = document.getElementById('mobile-user-email');
          if (emailDisplay) emailDisplay.innerText = user.email;
          if (mobileEmailDisplay) mobileEmailDisplay.innerText = user.email;
          
          const payEmailInput = document.getElementById('pay-email');
          if (payEmailInput) payEmailInput.value = user.email;
          
          loadUserData(user.uid);
        } else {
          currentUser = null;
          const profile = document.getElementById('user-profile');
          const mobileProfile = document.getElementById('mobile-user-profile');
          const authBtns = document.getElementById('auth-buttons');
          const mobileAuthBtns = document.getElementById('mobile-auth-buttons');

          if (profile) profile.classList.add('hidden');
          if (mobileProfile) mobileProfile.classList.add('hidden');
          if (authBtns) authBtns.classList.remove('hidden');
          if (mobileAuthBtns) mobileAuthBtns.classList.remove('hidden');
        }
      });
    } catch (e) {
      console.error("Firebase auth handler error:", e);
    }
  } else {
    console.warn("Firebase Auth tidak terdeteksi atau gagal dimuat.");
  }

  // Render Promo & Buku ke UI secara aman
  try {
    renderPromoCodes();
    renderBooks();
  } catch (e) {
    console.error("Render komponen UI gagal:", e);
  }

  // ROUTING AWAL secara aman
  try {
    const initialView = window.location.hash.replace('#', '') || 'home';
    navigateTo(initialView, false);
    history.replaceState({ view: initialView }, "", window.location.hash || '#home');
  } catch (e) {
    console.error("Inisialisasi navigasi awal gagal:", e);
  }
};