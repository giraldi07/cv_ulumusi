import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft, 
  Check, 
  DollarSign, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Info,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { Section } from '../components/Section';
import { useNavigation } from '../contexts/NavigationContext';

// --- Interface & Data (Tetap sama namun ditambahkan metadata jika perlu) ---
interface ServiceDetails {
  title: string;
  description: string;
  fullDescription: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  pricing: string;
  estimatedTime: string;
  coverage: string;
  images: string[];
}

const services: ServiceDetails[] = [
  {
    title: 'Reguler Service',
    description: 'Solusi logistik paling ekonomis untuk kebutuhan harian.',
    fullDescription: 'Layanan pengiriman reguler kami adalah pilihan terbaik untuk pengiriman barang yang tidak terburu-buru dengan efisiensi biaya maksimal.',
    longDescription: 'Layanan Reguler Service dari CV. ULUMUSI dirancang untuk memenuhi kebutuhan pengiriman barang dengan pilihan terjangkau namun tetap terpercaya. Dengan pengalaman lebih dari 10 tahun, kami memastikan setiap jengkal Nusantara terjangkau oleh bisnis Anda tanpa harus menguras anggaran.',
    features: ['Pengiriman ke 34 Provinsi', 'Tracking Real-time', 'Asuransi Dasar', 'Dokumentasi Digital'],
    benefits: ['Harga Kompetitif', 'Jaringan Luas', 'Handling Profesional', 'Customer Support 24/7'],
    pricing: 'Mulai Rp 25.000',
    estimatedTime: '2-3 Hari Kerja',
    coverage: 'Seluruh Indonesia',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1526620155639-e79a670cf559?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Next Day Service',
    description: 'Prioritas tinggi, kirim hari ini sampai besok pagi.',
    fullDescription: 'Untuk kebutuhan mendesak yang memerlukan penanganan kilat. Barang Anda akan diprioritaskan di setiap titik transit.',
    longDescription: 'Next Day Service menggunakan jalur distribusi udara dan darat tercepat. Setiap paket mendapatkan label "Priority" dan diawasi ketat oleh tim monitoring kami untuk memastikan SLA 24 jam terpenuhi dengan sempurna.',
    features: ['Prioritas Handling', 'SLA 24 Jam', 'SMS/WhatsApp Notif', 'Garansi Tepat Waktu'],
    benefits: ['Kecepatan Maksimal', 'Keamanan Terjamin', 'Efisiensi Waktu', 'Layanan Door-to-Door'],
    pricing: 'Mulai Rp 75.000',
    estimatedTime: '1 Hari (Besok Sampai)',
    coverage: 'Kota Besar & Satelit',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553531088-df340101fc3f?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Same Day Service',
    description: 'Layanan instan dalam kota hanya dalam hitungan jam.',
    fullDescription: 'Solusi tercepat untuk dokumen penting atau paket urgent intra-kota. Pickup langsung, antar langsung.',
    longDescription: 'Same Day Service adalah andalan para pelaku UMKM dan korporasi untuk pengiriman dokumen atau produk yang memerlukan waktu sampai di hari yang sama (4-6 jam). Didukung oleh armada motor dan mobil yang responsif.',
    features: ['Kurir Khusus', 'Foto Bukti Delivery', 'Direct Tracking GPS', 'Tanpa Transit'],
    benefits: ['Super Cepat', 'Resiko Rusak Rendah', 'Kepuasan Pelanggan', 'Hemat Gudang'],
    pricing: 'Mulai Rp 50.000',
    estimatedTime: '4-6 Jam Kerja',
    coverage: 'Area Metropolitan',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533050487297-86d3d3a76f48?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Kargo Laut',
    description: 'Efisien untuk barang bervolume besar antar pulau.',
    fullDescription: 'Solusi pengiriman partai besar (LCL/FCL) melalui jalur laut dengan biaya yang sangat terukur.',
    longDescription: 'Kargo Laut kami menghubungkan pelabuhan-pelabuhan utama di Indonesia. Sangat cocok untuk distribusi alat berat, bahan bangunan, atau stok barang dagangan dalam jumlah tonase.',
    features: ['Sistem LCL & FCL', 'Container Monitoring', 'Handling Port-to-Port', 'Asuransi Cargo'],
    benefits: ['Biaya Termurah/kg', 'Kapasitas Tak Terbatas', 'Keamanan Maritim', 'Jangkauan Pelosok'],
    pricing: 'Mulai Rp 500rb/ton',
    estimatedTime: '5-10 Hari Kerja',
    coverage: 'Nasional (Inter-island)',
    images: [
      'https://images.unsplash.com/photo-1578575437980-863b12388b86?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1496048646313-330519b3ad47?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519643381401-62a08dc9b50d?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Pindahan Rumah',
    description: 'Layanan relokasi lengkap, terima beres tanpa pusing.',
    fullDescription: 'Kami mengurus semua dari packing, loading, hingga setting ulang di lokasi baru.',
    longDescription: 'Pindahan bukan lagi masalah. Tim kru profesional kami terlatih menangani barang pecah belah dan furniture besar dengan standar safety tinggi. Tersedia jasa bongkar pasang AC & Furniture.',
    features: ['Packing Kayu/Bubble', 'Kru Profesional', 'Trucking Khusus', 'Setting Ulang'],
    benefits: ['Bebas Stress', 'Barang Terorganisir', 'Asuransi All-Risk', 'Waktu Fleksibel'],
    pricing: 'Berdasarkan Estimasi',
    estimatedTime: '1-3 Hari',
    coverage: 'Seluruh Jawa-Sumatera',
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Packing Kayu',
    description: 'Proteksi ekstra maksimal untuk barang sangat berharga.',
    fullDescription: 'Layanan penambahan proteksi fisik menggunakan kayu berkualitas untuk menjamin keamanan 100%.',
    longDescription: 'Wajib digunakan untuk pengiriman elektronik, pecah belah, mesin, atau barang antik. Packing dibuat custom sesuai dimensi barang Anda untuk mencegah benturan selama perjalanan.',
    features: ['Custom Size Crate', 'Bantalan Inner Foam', 'Waterproof Layer', 'Segel Keamanan'],
    benefits: ['Zero Damage Risk', 'Standar Cargo Udara', 'Ketenangan Pikiran', 'Sertifikasi Packing'],
    pricing: 'Mulai Rp 150.000',
    estimatedTime: '+1 Jam Handling',
    coverage: 'Tersedia di Semua Cabang',
    images: [
      'https://images.unsplash.com/photo-1608993691422-5cce72b2e3cd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600507423169-9c580c3be3bd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577720643272-265efda13e0a?auto=format&fit=crop&q=80'
    ]
  }
];

export const ServiceDetailPage = ({ serviceId }: { serviceId: number }) => {
  const { setCurrentPage, setServiceDetailId } = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (serviceId < 0 || serviceId >= services.length) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold dark:text-white">Service Not Found</h1>
        <button onClick={() => setCurrentPage('services')} className="mt-4 text-orange-600 underline">Back</button>
      </div>
    );
  }

  const service = services[serviceId];
  const nextService = (serviceId + 1) % services.length;
  const prevService = (serviceId - 1 + services.length) % services.length;

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* --- HERO IMAGE & NAVIGATION --- */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={service.images[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={service.title}
          />
        </AnimatePresence>

        {/* Glassmorphism Header Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-950/90" />
        
        <div className="absolute top-8 left-0 right-0 z-30">
          <Section className="flex justify-between items-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-orange-600 transition-all shadow-xl"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-wider">Layanan Kami</span>
            </button>

            <div className="flex gap-2">
              {service.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === currentImageIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </Section>
        </div>

        {/* Hero Title Container */}
        <div className="absolute inset-0 flex items-end pb-20">
          <Section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded">Featured Service</span>
                <div className="h-[1px] w-12 bg-orange-500/50" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
                {service.title.split(' ')[0]} <span className="text-orange-500">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* --- QUICK STATS --- */}
      <div className="relative z-40 -mt-16">
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock, label: 'Estimasi Waktu', value: service.estimatedTime, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { icon: DollarSign, label: 'Estimasi Biaya', value: service.pricing, color: 'text-green-500', bg: 'bg-green-500/10' },
              { icon: MapPin, label: 'Cakupan Wilayah', value: service.coverage, color: 'text-purple-500', bg: 'bg-purple-500/10' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-6"
              >
                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* --- CONTENT SECTION --- */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Detailed Info */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Info className="text-orange-600" size={20} />
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">Deep Insights</h2>
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                Bagaimana Layanan Ini <br /> Membantu Bisnis Anda?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border-l-4 border-orange-600 italic text-slate-700 dark:text-slate-300">
                "{service.longDescription}"
              </div>
            </div>

            {/* List Features with Custom Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <PackageCheck className="text-orange-600" /> Spesifikasi
                </h4>
                <ul className="space-y-4">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 rounded-full bg-orange-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <ShieldCheck className="text-green-600" /> Benefit
                </h4>
                <ul className="space-y-4">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <Check className="text-green-600" size={18} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Contact Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-8">
                <h4 className="text-3xl font-black">Konsultasi <br /> Gratis Sekarang</h4>
                <p className="text-slate-400">Hubungi pakar logistik kami untuk mendapatkan penawaran harga khusus sesuai volume pengiriman Anda.</p>
                <div className="space-y-4">
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-xl shadow-orange-600/20"
                  >
                    Minta Penawaran <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-500 font-bold uppercase tracking-widest">Respon cepat dalam 15 menit</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* --- PAGINATION NAVIGATION --- */}
      <div className="bg-slate-50 dark:bg-slate-900/50 py-12 border-y border-slate-100 dark:border-slate-800">
        <Section>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <button 
              onClick={() => { setServiceDetailId(prevService); window.scrollTo(0,0); }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                <ChevronLeft />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Previous Service</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{services[prevService].title}</p>
              </div>
            </button>

            <div className="hidden md:flex gap-3">
              {services.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === serviceId ? 'bg-orange-600 scale-125' : 'bg-slate-300 dark:bg-slate-700'}`} 
                />
              ))}
            </div>

            <button 
              onClick={() => { setServiceDetailId(nextService); window.scrollTo(0,0); }}
              className="flex items-center gap-4 group text-right"
            >
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Service</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{services[nextService].title}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                <ChevronRight />
              </div>
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
};