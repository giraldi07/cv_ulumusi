export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string; 
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const newsArticles: Article[] = [
  {
    id: 1,
    title: "Optimasi Rute Logistik Menggunakan AI: Masa Depan Distribusi",
    excerpt: "Bagaimana integrasi kecerdasan buatan dapat menekan biaya operasional hingga 30% dan mempercepat pengiriman...",
    category: "Technology",
    author: "Budi Santoso",
    authorRole: "Head of Operations",
    date: "12 Feb 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "Innovation", "Efficiency"],
    content: `
      <p>Dalam era digital yang berkembang pesat, <strong>CV. ULUMUSI</strong> mulai mengadopsi teknologi Artificial Intelligence (AI) untuk merevolusi cara kami mendistribusikan paket. Sistem ini bekerja dengan menganalisis ribuan titik data secara real-time.</p>
      <br/>
      <h3>Bagaimana AI Membantu Pengiriman?</h3>
      <p>AI kami tidak hanya melihat jarak terpendek, tetapi juga memprediksi kemacetan berdasarkan waktu, kondisi cuaca, hingga potensi perbaikan jalan. Hal ini memungkinkan kurir kami untuk selalu berada di rute yang paling efisien.</p>
      <br/>
      <blockquote>"Efisiensi bukan hanya soal kecepatan, tapi soal ketepatan janji kepada pelanggan."</blockquote>
      <br/>
      <p>Dengan pengurangan jarak tempuh yang tidak perlu, kami juga berkontribusi pada pengurangan emisi karbon, menjadikan layanan kami lebih ramah lingkungan namun tetap kompetitif secara biaya.</p>
    `
  },
  {
    id: 2,
    title: "CV. ULUMUSI Resmikan Hub Baru di Surabaya",
    excerpt: "Ekspansi strategis di Jawa Timur untuk memperkuat layanan last-mile delivery bagi pelaku UMKM lokal...",
    category: "Company News",
    author: "Admin",
    authorRole: "Corporate Secretary",
    date: "05 Feb 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Expansion", "Surabaya", "UMKM"],
    content: `
      <p>Surabaya menjadi titik fokus baru bagi ekspansi CV. ULUMUSI tahun ini. Dengan peresmian Hub terbaru di wilayah industri Rungkut, kami berharap dapat mempercepat arus barang di Jawa Timur.</p>
      <br/>
      <p>Hub ini dilengkapi dengan sistem sortir otomatis yang mampu menangani hingga 10.000 paket per hari. Fokus utama kami adalah membantu pelaku UMKM lokal agar produk mereka bisa sampai ke tangan konsumen di luar pulau dengan lebih cepat.</p>
    `
  },
  {
    id: 3,
    title: "Tips Mengelola Supply Chain di Musim Hujan",
    excerpt: "Menghadapi tantangan cuaca ekstrem dengan strategi mitigasi resiko logistik yang tepat dan efektif...",
    category: "Logistics Tips",
    author: "Siti Aminah",
    authorRole: "Logistics Consultant",
    date: "28 Jan 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Tips", "Safety", "Weather"],
    content: `
      <p>Musim hujan seringkali menjadi momok bagi dunia logistik. Banjir dan jalanan licin dapat menghambat estimasi waktu tiba (ETA). Berikut adalah beberapa strategi yang kami terapkan di CV. ULUMUSI:</p>
      <br/>
      <ul>
        <li><strong>Proteksi Ekstra:</strong> Selalu gunakan double wrap plastik untuk paket yang rentan air.</li>
        <li><strong>Pemantauan Cuaca:</strong> Integrasi API cuaca pada sistem dispatching.</li>
        <li><strong>Maintenance Armada:</strong> Pengecekan ban dan sistem pengereman secara berkala setiap minggu.</li>
      </ul>
      <br/>
      <p>Dengan persiapan yang matang, kualitas pengiriman tidak akan berkurang meskipun cuaca sedang tidak bersahabat.</p>
    `
  },
  {
    id: 4,
    title: "Transformasi Digital: Tracking Real-Time untuk Transparansi Maksimal",
    excerpt: "Sistem pelacakan canggih yang memungkinkan pelanggan memantau paket mereka setiap detik perjalanan...",
    category: "Technology",
    author: "Andi Wijaya",
    authorRole: "IT Solutions Manager",
    date: "19 Jan 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["Digital", "Tracking", "Customer Service"],
    content: `
      <p>Transparansi adalah kunci kepercayaan pelanggan. CV. ULUMUSI menghadirkan sistem tracking real-time yang terintegrasi dengan GPS dan notifikasi otomatis, memastikan pelanggan selalu tahu di mana paket mereka berada.</p>
      <br/>
      <h3>Fitur Unggulan Sistem Tracking Kami</h3>
      <p>Sistem kami dilengkapi dengan <strong>push notification</strong> otomatis yang memberi tahu pelanggan saat paket masuk sortir, keluar gudang, dalam perjalanan, hingga tiba di tujuan. Semua informasi tersedia dalam satu dashboard yang mudah diakses.</p>
      <br/>
      <blockquote>"Pelanggan tidak hanya ingin paket cepat sampai, tapi juga ingin tahu prosesnya."</blockquote>
      <br/>
      <p>Dengan teknologi ini, tingkat kepuasan pelanggan meningkat drastis. Komplain berkurang hingga 40% karena pelanggan merasa lebih dilibatkan dan memiliki kontrol terhadap pengiriman mereka.</p>
      <br/>
      <h3>Integrasi dengan E-Commerce</h3>
      <p>Sistem tracking kami juga terintegrasi langsung dengan platform e-commerce populer seperti Tokopedia, Shopee, dan Bukalapak, memudahkan seller untuk memantau seluruh pesanan dalam satu tempat tanpa perlu berpindah aplikasi.</p>
    `
  },
  {
    id: 5,
    title: "Program Pelatihan Kurir: Investasi untuk Layanan Berkualitas",
    excerpt: "Meningkatkan kompetensi SDM melalui pelatihan berkala tentang customer service dan keselamatan kerja...",
    category: "Company News",
    author: "Dewi Lestari",
    authorRole: "HR & Training Director",
    date: "10 Jan 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    tags: ["Training", "HR", "Quality"],
    content: `
      <p>Di balik setiap pengiriman yang sukses, ada kurir yang profesional dan terlatih. CV. ULUMUSI menyadari bahwa sumber daya manusia adalah aset terpenting dalam industri logistik.</p>
      <br/>
      <p>Setiap bulan, kami mengadakan program pelatihan komprehensif yang mencakup berbagai aspek penting dalam pekerjaan kurir, mulai dari handling barang fragile, komunikasi dengan pelanggan, hingga prosedur keselamatan berkendara.</p>
      <br/>
      <h3>Modul Pelatihan Unggulan</h3>
      <ul>
        <li><strong>Customer Service Excellence:</strong> Cara berkomunikasi yang baik dengan pelanggan dalam berbagai situasi</li>
        <li><strong>Safe Riding Training:</strong> Teknik berkendara defensif dan aman di berbagai kondisi jalan</li>
        <li><strong>Package Handling:</strong> Metode penanganan paket sesuai kategori dan tingkat kerentanan</li>
        <li><strong>Emergency Response:</strong> Prosedur darurat saat menghadapi masalah di lapangan</li>
      </ul>
      <br/>
      <blockquote>"Kurir kami bukan hanya pengantar paket, tapi juga brand ambassador CV. ULUMUSI di lapangan."</blockquote>
      <br/>
      <p>Hasilnya? Turn-over karyawan menurun signifikan, dan rating kepuasan pelanggan terhadap kurir mencapai 4.8 dari 5. Investasi pada SDM adalah investasi pada masa depan perusahaan.</p>
    `
  },
  {
    id: 6,
    title: "Cold Chain Logistics: Solusi Pengiriman Produk Fresh dan Frozen",
    excerpt: "Teknologi rantai dingin untuk menjaga kesegaran produk makanan dan farmasi selama distribusi...",
    category: "Logistics Tips",
    author: "Dr. Hendra Kusuma",
    authorRole: "Cold Chain Specialist",
    date: "03 Jan 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cold Chain", "Technology", "Food Safety"],
    content: `
      <p>Pengiriman produk yang memerlukan suhu terkontrol seperti makanan segar, frozen food, dan obat-obatan memerlukan penanganan khusus. CV. ULUMUSI kini menyediakan layanan <strong>cold chain logistics</strong> dengan standar internasional.</p>
      <br/>
      <h3>Apa Itu Cold Chain?</h3>
      <p>Cold chain adalah sistem logistik yang menjaga produk pada suhu tertentu mulai dari penyimpanan, pengangkutan, hingga pengiriman ke konsumen akhir. Sistem ini sangat krusial untuk menjaga kualitas dan keamanan produk.</p>
      <br/>
      <p>Armada cold chain kami dilengkapi dengan:</p>
      <ul>
        <li><strong>Refrigerated trucks</strong> dengan kontrol suhu -25°C hingga +25°C</li>
        <li><strong>Temperature monitoring system</strong> real-time berbasis IoT</li>
        <li><strong>Backup cooling system</strong> untuk antisipasi kerusakan mesin</li>
        <li><strong>Insulated packaging</strong> berlapis untuk double protection</li>
      </ul>
      <br/>
      <blockquote>"Dalam cold chain, setiap derajat celcius dan setiap menit sangat berharga untuk menjaga kualitas produk."</blockquote>
      <br/>
      <h3>Aplikasi di Berbagai Industri</h3>
      <p>Layanan ini sangat cocok untuk bisnis:</p>
      <ul>
        <li>Restoran dan catering yang membutuhkan bahan baku segar</li>
        <li>Apotek dan rumah sakit untuk pengiriman vaksin dan obat-obatan</li>
        <li>Industri makanan beku dan ice cream</li>
        <li>E-commerce grocery dan fresh market online</li>
      </ul>
      <br/>
      <p>Dengan sertifikasi HACCP dan ISO 22000, CV. ULUMUSI memastikan setiap produk tiba dalam kondisi optimal, menjaga kepercayaan konsumen dan reputasi brand Anda.</p>
    `
  },
  {
    id: 7,
    title: "Keberlanjutan Lingkungan: Program Go Green di Industri Logistik",
    excerpt: "Komitmen CV. ULUMUSI mengurangi jejak karbon melalui armada ramah lingkungan dan packaging biodegradable...",
    category: "Company News",
    author: "Ir. Bambang Prasetyo",
    authorRole: "Sustainability Manager",
    date: "27 Des 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sustainability", "Green", "Environment"],
    content: `
      <p>Industri logistik memiliki tanggung jawab besar terhadap lingkungan. Emisi kendaraan, konsumsi bahan bakar, dan limbah packaging adalah beberapa dampak yang perlu dimitigasi. CV. ULUMUSI berkomitmen untuk operasional yang lebih hijau.</p>
      <br/>
      <h3>Inisiatif Go Green Kami</h3>
      <p>Program keberlanjutan kami mencakup beberapa aspek utama:</p>
      <br/>
      <h4>1. Transisi ke Kendaraan Listrik</h4>
      <p>Kami menargetkan 40% armada menggunakan kendaraan listrik pada 2027. Saat ini, 15 unit motor listrik sudah beroperasi untuk pengiriman dalam kota, mengurangi emisi CO2 hingga 3 ton per bulan.</p>
      <br/>
      <h4>2. Packaging Ramah Lingkungan</h4>
      <p>Kami mengganti plastik bubble wrap dengan bahan biodegradable seperti honeycomb paper dan cornstarch packaging. Kardus yang kami gunakan juga 100% dari bahan daur ulang.</p>
      <br/>
      <h4>3. Optimasi Rute untuk Efisiensi BBM</h4>
      <p>Dengan bantuan AI, kami berhasil mengurangi konsumsi bahan bakar hingga 25% melalui perencanaan rute yang lebih efisien, sekaligus mengurangi emisi.</p>
      <br/>
      <blockquote>"Logistik yang baik bukan hanya cepat dan murah, tapi juga bertanggung jawab terhadap planet kita."</blockquote>
      <br/>
      <h3>Program Tree Planting</h3>
      <p>Setiap 1.000 paket yang terkirim, CV. ULUMUSI menanam 1 pohon melalui kerjasama dengan organisasi lingkungan. Hingga kini, lebih dari 5.000 pohon telah ditanam di berbagai wilayah Jawa dan Bali.</p>
      <br/>
      <p>Keberlanjutan bukan hanya trend, tapi investasi untuk generasi mendatang. Dengan langkah nyata ini, kami berharap dapat menginspirasi industri logistik lainnya untuk turut peduli lingkungan.</p>
    `
  },
  {
    id: 8,
    title: "Strategi Menghadapi Peak Season: Lebaran dan Tahun Baru",
    excerpt: "Persiapan matang menghadapi lonjakan volume pengiriman saat periode sibuk dengan manajemen kapasitas optimal...",
    category: "Logistics Tips",
    author: "Rudi Hermawan",
    authorRole: "Operations Director",
    date: "20 Des 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
    tags: ["Peak Season", "Strategy", "Operations"],
    content: `
      <p>Peak season adalah ujian sebenarnya bagi perusahaan logistik. Volume paket bisa meningkat 300-400% saat Lebaran dan akhir tahun. Persiapan yang tidak matang bisa berakibat fatal pada kualitas layanan.</p>
      <br/>
      <h3>Tantangan Peak Season</h3>
      <p>Beberapa tantangan utama yang dihadapi:</p>
      <ul>
        <li>Lonjakan volume yang tidak terprediksi dengan akurat</li>
        <li>Keterbatasan kapasitas gudang dan armada</li>
        <li>Kesulitan merekrut tenaga kerja musiman</li>
        <li>Kemacetan lalu lintas yang lebih parah dari biasanya</li>
      </ul>
      <br/>
      <h3>Strategi CV. ULUMUSI</h3>
      <p>Untuk mengantisipasi peak season, kami menerapkan beberapa strategi proaktif:</p>
      <br/>
      <h4>1. Forecasting Berbasis Data Historis</h4>
      <p>Kami menganalisis data 3-5 tahun terakhir untuk memprediksi volume dan pola pengiriman. Machine learning membantu kami membuat proyeksi yang lebih akurat hingga level kecamatan.</p>
      <br/>
      <h4>2. Rekrutmen dan Training Dini</h4>
      <p>Sejak 2 bulan sebelum peak season, kami mulai merekrut dan melatih kurir musiman. Mereka mendapat pelatihan intensif selama 1 minggu sebelum turun ke lapangan.</p>
      <br/>
      <h4>3. Ekspansi Temporary Hubs</h4>
      <p>Kami menyewa gudang tambahan di lokasi strategis sebagai hub sementara untuk menyerap lonjakan volume. Ini mengurangi beban hub utama dan mempercepat proses sortir.</p>
      <br/>
      <h4>4. Shift Kerja Extended</h4>
      <p>Selama peak season, hub kami beroperasi 24/7 dengan sistem 3 shift. Proses sortir dan dispatching tidak pernah berhenti untuk memaksimalkan throughput.</p>
      <br/>
      <blockquote>"Persiapan yang matang hari ini menentukan kepuasan pelanggan besok."</blockquote>
      <br/>
      <h3>Komunikasi Proaktif dengan Pelanggan</h3>
      <p>Transparansi adalah kunci. Kami selalu mengkomunikasikan estimasi waktu yang realistis kepada pelanggan dan memberikan update berkala. Lebih baik underpromise dan overdeliver daripada sebaliknya.</p>
      <br/>
      <p>Dengan persiapan komprehensif ini, CV. ULUMUSI berhasil mempertahankan service level 95%+ bahkan di puncak peak season tahun lalu.</p>
    `
  },
  {
    id: 9,
    title: "Cross-Border Logistics: Ekspansi ke Pasar Regional ASEAN",
    excerpt: "Membuka jalur pengiriman internasional ke negara tetangga dengan customs clearance yang efisien...",
    category: "Company News",
    author: "Linda Tanujaya",
    authorRole: "International Business Manager",
    date: "15 Des 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=1200&q=80",
    tags: ["International", "ASEAN", "Expansion"],
    content: `
      <p>Seiring pertumbuhan e-commerce cross-border, permintaan pengiriman internasional meningkat pesat. CV. ULUMUSI menjawab kebutuhan ini dengan membuka layanan pengiriman ke Malaysia, Singapura, Thailand, dan Vietnam.</p>
      <br/>
      <h3>Kompleksitas Pengiriman Internasional</h3>
      <p>Berbeda dengan pengiriman domestik, cross-border logistics melibatkan banyak pihak dan regulasi:</p>
      <ul>
        <li>Dokumen customs dan bea cukai yang berbeda setiap negara</li>
        <li>Restricted items yang bervariasi per destinasi</li>
        <li>Pajak impor dan handling fee</li>
        <li>Koordinasi dengan partner logistics lokal</li>
      </ul>
      <br/>
      <h3>Solusi End-to-End Kami</h3>
      <p>CV. ULUMUSI menyediakan layanan one-stop solution untuk kemudahan pelanggan:</p>
      <br/>
      <h4>1. Customs Clearance Assistance</h4>
      <p>Tim berpengalaman kami membantu pelanggan mengurus dokumen seperti Commercial Invoice, Packing List, dan Certificate of Origin. Kami juga memberikan konsultasi terkait klasifikasi barang dan perhitungan bea masuk.</p>
      <br/>
      <h4>2. Kemitraan dengan Logistics Terpercaya</h4>
      <p>Di setiap negara tujuan, kami bermitra dengan ekspedisi lokal yang sudah terbukti reliable untuk memastikan last-mile delivery berjalan lancar.</p>
      <br/>
      <h4>3. Competitive Pricing</h4>
      <p>Dengan volume consolidation, kami bisa menawarkan harga yang kompetitif. Pengiriman ke Singapura misalnya, mulai dari Rp 45.000/kg dengan estimasi 3-5 hari kerja.</p>
      <br/>
      <blockquote>"Batas negara bukan lagi hambatan untuk UMKM Indonesia go international."</blockquote>
      <br/>
      <h3>Success Story: UMKM Batik Tembus Pasar Malaysia</h3>
      <p>Salah satu klien kami, produsen batik dari Solo, kini rutin mengirim 200+ paket per bulan ke Malaysia melalui layanan kami. Dengan handling yang proper dan dokumentasi yang lengkap, tingkat return hanya 1%.</p>
      <br/>
      <h3>Roadmap Ekspansi 2026</h3>
      <p>Tahun ini, kami menargetkan menambah 3 negara baru: Filipina, Brunei, dan Kamboja. Kami juga sedang finalisasi kerjasama untuk rute langsung Jakarta-Bangkok untuk mempercepat lead time.</p>
      <br/>
      <p>Ekspansi ini bukan hanya untuk CV. ULUMUSI, tapi untuk membantu seller Indonesia meraih pasar yang lebih luas dan meningkatkan ekonomi bangsa.</p>
    `
  }
];