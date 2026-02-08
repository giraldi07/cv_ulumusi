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
  }
];