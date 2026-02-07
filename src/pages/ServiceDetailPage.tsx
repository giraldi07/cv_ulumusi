import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Check, DollarSign, MapPin, Zap } from 'lucide-react';
import { Section } from '../components/Section';
import { useNavigation } from '../contexts/NavigationContext';

interface ServiceDetails {
  icon: any;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  pricing: string;
  estimatedTime: string;
  coverage: string;
  images: string[];
  longDescription?: string;
}

const services: ServiceDetails[] = [
  {
    icon: null,
    title: 'Reguler Service',
    description: 'Estimasi sampai 2-3 hari kerja dengan harga paling ekonomis.',
    fullDescription: 'Layanan pengiriman reguler kami adalah pilihan terbaik untuk pengiriman barang yang tidak terburu-buru. Dengan jaringan distribusi yang luas, kami menjamin barang Anda sampai dengan aman meskipun membutuhkan waktu lebih.',
    longDescription: 'Layanan Reguler Service dari CV. ULUMUSI dirancang untuk memenuhi kebutuhan pengiriman barang dengan pilihan terjangkau namun tetap terpercaya. Dengan pengalaman lebih dari 10 tahun di industri logistik, kami memahami pentingnya ketepatan waktu dan keamanan untuk bisnis Anda. Jaringan distribusi kami yang tersebar di 34 provinsi memastikan barang Anda dapat diantar ke seluruh nusantara dengan profesional dan terukur.',
    features: [
      'Pengiriman ke seluruh Indonesia',
      'Gratis asuransi dasar untuk paket standar',
      'Tracking real-time 24/7',
      'Kemasan standar aman',
      'Pembayaran fleksibel (tunai/transfer)',
      'Dokumentasi lengkap & resi resmi'
    ],
    benefits: [
      'Harga paling murah dibanding service lain',
      'Cocok untuk pengiriman barang general',
      'Sistem tracking transparan',
      'Customer service responsif',
      'Gudang aman tersebar di banyak lokasi',
      'Asuransi perlindungan standar'
    ],
    pricing: 'Mulai dari Rp 25.000',
    estimatedTime: '2-3 hari kerja (antar kota)',
    coverage: '34 Provinsi di Indonesia',
    images: [
      'https://images.unsplash.com/photo-1553531889-e6cf89d45abc?w=1200&q=80',
      'https://images.unsplash.com/photo-1453612908626-e4e99ce417d0?w=1200&q=80',
      'https://images.unsplash.com/photo-1578575437980-863b12388b86?w=1200&q=80'
    ]
  },
  {
    icon: null,
    title: 'Next Day Service',
    description: 'Kirim hari ini, sampai besok. Prioritas kecepatan tinggi.',
    fullDescription: 'Untuk kebutuhan Anda yang mendesak, Next Day Service adalah solusi sempurna. Barang Anda akan diprioritaskan dan dijamin sampai dalam 24 jam kerja dengan layanan express yang handal.',
    longDescription: 'Next Day Service adalah layanan premium kami yang dirancang untuk kebutuhan pengiriman dengan timeline yang ketat. Dengan sistem manajemen logistik yang canggih dan tim yang berdedikasi, kami menjamin barang Anda sampai tepat waktu. Setiap paket mendapatkan prioritas handling khusus dan dapat dilacak secara real-time melalui GPS technology terkini.',
    features: [
      'Pengiriman dalam 24 jam kerja',
      'Asuransi basic included',
      'Prioritas handling & pengiriman',
      'Sistem tracking GPS real-time',
      'Penjemputan sesuai jadwal',
      'Garansi uang kembali jika telat'
    ],
    benefits: [
      'Kecepatan tinggi untuk kebutuhan mendesak',
      'Layanan premium dengan harga terjangkau',
      'Garansi tepat waktu atau uang kembali',
      'Dedicated driver profesional',
      'Handling package yang ekstra hati-hati',
      'Update status real-time ke ponsel Anda'
    ],
    pricing: 'Mulai dari Rp 75.000',
    estimatedTime: '24 jam kerja (same route)',
    coverage: 'Jangkauan ekspansi penuh',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
      'https://images.unsplash.com/photo-1453612908626-e4e99ce417d0?w=1200&q=80'
    ]
  },
  {
    icon: null,
    title: 'Same Day Service',
    description: 'Pengiriman dalam kota yang sampai di hari yang sama.',
    fullDescription: 'Same Day Service adalah layanan tercepat kami untuk pengiriman dalam kota. Barang dikirim dan sampai dalam waktu 4-6 jam, sempurna untuk kebutuhan dokumen, barang urgent, atau pickup emergency.',
    longDescription: 'Same Day Service adalah solusi logistik tercepat kami untuk kebutuhan pengiriman intra-kota yang sangat urgent. Dengan armada kendaraan yang modern dan strategis, kami mampu menjamin pengiriman dalam waktu 4-6 jam untuk area perkotaan utama. Layanan ini perfect untuk dokumen penting, barang urgent, atau kebutuhan last-minute Anda.',
    features: [
      'Pengiriman 4-6 jam dalam kota',
      'Asuransi penuh included',
      'Multiple pickup locations',
      'GPS tracking real-time',
      'Confirm delivery dengan foto',
      'Bonus packaging premium'
    ],
    benefits: [
      'Tercepat untuk area urban',
      'Perfect untuk dokumen & paket urgent',
      'Driver profesional & ramah',
      'Transparent pricing tanpa biaya tersembunyi',
      'Foto bukti delivery otomatis',
      'Kontak driver langsung tersedia'
    ],
    pricing: 'Mulai dari Rp 50.000',
    estimatedTime: '4-6 jam (dalam kota)',
    coverage: 'Kota-kota besar (Jakarta, Bandung, Surabaya, dll)',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
      'https://images.unsplash.com/photo-1533050487297-86d3d3a76f48?w=1200&q=80',
      'https://images.unsplash.com/photo-1553531889-e6cf89d45abc?w=1200&q=80'
    ]
  },
  {
    icon: null,
    title: 'Kargo Laut',
    description: 'Solusi hemat untuk pengiriman barang berat antar pulau.',
    fullDescription: 'Kargo laut kami menawarkan solusi hemat untuk pengiriman barang dalam jumlah besar antar pulau Indonesia. Dengan armada kapal yang modern dan jaringan pelabuhan yang luas, kami siap melayani kebutuhan logistik Anda.',
    longDescription: 'Kargo Laut adalah layanan logistik maritim kami yang menawarkan solusi hemat untuk pengiriman barang dalam jumlah besar antar pulau di Indonesia. Dengan armada kapal yang modern dan memenuhi standar keselamatan internasional, kami menjamin barang Anda dapat dikirim dengan aman dan efisien ke seluruh nusantara.',
    features: [
      'Pengiriman antar pulau',
      'Cocok untuk barang berat & voluminous',
      'Container & break bulk tersedia',
      'Handling profesional di pelabuhan',
      'Asuransi cargo lengkap',
      'Customs clearance assistance'
    ],
    benefits: [
      'Harga yang sangat kompetitif per unit',
      'Kapal modern dengan standar keselamatan tinggi',
      'Jangkauan ke seluruh pulau Indonesia',
      'Tim berpengalaman dalam customs',
      'Tracking terpercaya & transparan',
      'Asuransi comprehensive tersedia'
    ],
    pricing: 'Mulai dari Rp 500.000/ton',
    estimatedTime: '5-7 hari (antar pulau)',
    coverage: 'Semua pulau utama Indonesia',
    images: [
      'https://images.unsplash.com/photo-1578575437980-863b12388b86?w=1200&q=80',
      'https://images.unsplash.com/photo-1519643381401-62a08dc9b50d?w=1200&q=80',
      'https://images.unsplash.com/photo-1556421329-c8ca191ce70a?w=1200&q=80'
    ]
  },
  {
    icon: null,
    title: 'Pindahan Rumah',
    description: 'Jasa angkut dan pindahan rumah/kantor terima beres.',
    fullDescription: 'Layanan pindahan rumah dan kantor kami memberikan solusi lengkap dari packing hingga setting ulang. Tim profesional kami akan menangani semua barang berharga Anda dengan hati-hati dan efisien.',
    longDescription: 'Pindahan Rumah adalah layanan all-in-one kami yang mengurus semua aspek relokasi Anda dari A sampai Z. Tim profesional kami yang berpengalaman akan memastikan semua barang Anda dikemas dengan aman, ditransportasikan dengan teliti, dan ditempatkan kembali sesuai keinginan Anda di lokasi baru.',
    features: [
      'Packing & unpacking profesional',
      'Furniture protection khusus',
      'Kru berpengalaman & terlatih',
      'Asuransi keseluruhan included',
      'Dibongkar & dipasang kembali',
      'Jaminan barang sampai lengkap'
    ],
    benefits: [
      'Hemat waktu dan tenaga Anda',
      'Barang aman & terorganisir',
      'Proses cepat namun teliti',
      'Kru yang courteous & profesional',
      'Tidak ada barang yang tertinggal',
      'Layanan all-inclusive tanpa biaya tambahan'
    ],
    pricing: 'Sesuai estimasi (mulai Rp 2.000.000)',
    estimatedTime: '1-3 hari (tergantung volume)',
    coverage: 'Jakarta, Bandung, Surabaya & sekitarnya',
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80'
    ]
  },
  {
    icon: null,
    title: 'Packing Kayu',
    description: 'Layanan tambahan pelindung ekstra untuk barang pecah belah.',
    fullDescription: 'Packing kayu kami adalah layanan proteksi eksklusif untuk barang-barang berharga dan mudah rusak. Dikemas dengan standar internasional, cocok untuk pengiriman jarak jauh atau barang antik/electronics.',
    longDescription: 'Packing Kayu adalah layanan proteksi premium kami untuk barang-barang berharga yang memerlukan perlindungan maksimal. Menggunakan material berkualitas tinggi dan teknik packing yang telah teruji secara internasional, kami memastikan barang antik, elektronik, atau benda seni Anda sampai dengan sempurna.',
    features: [
      'Packing kayu custom size',
      'Padding busa premium included',
      'Wooden crate profesional',
      'Waterproof protection',
      'Asuransi all-risk included',
      'Sertifikat packing internasional'
    ],
    benefits: [
      'Proteksi maksimal untuk barang berharga',
      'Cocok untuk art, antik, electronics',
      'Standar packaging internasional',
      'Tidak ada risiko kerusakan',
      'Asuransi penuh untuk 100% nilai barang',
      'Tracking lengkap sampai tujuan'
    ],
    pricing: 'Mulai dari Rp 150.000/unit',
    estimatedTime: 'Sesuai jadwal pengiriman utama',
    coverage: 'Domestik & internasional',
    images: [
      'https://images.unsplash.com/photo-1608993691422-5cce72b2e3cd?w=1200&q=80',
      'https://images.unsplash.com/photo-1600507423169-9c580c3be3bd?w=1200&q=80',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80'
    ]
  }
];

export const ServiceDetailPage = ({ serviceId }: { serviceId: number }) => {
  const { setCurrentPage, setServiceDetailId } = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (serviceId < 0 || serviceId >= services.length) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <Section>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Service Not Found</h1>
            <button
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
              Kembali ke Layanan
            </button>
          </div>
        </Section>
      </div>
    );
  }

  const service = services[serviceId];
  const previousService = serviceId > 0 ? serviceId - 1 : services.length - 1;
  const nextService = serviceId < services.length - 1 ? serviceId + 1 : 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  return (
    <div className="pt-20 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 min-h-screen">
      {/* Back Button */}
      <Section className="mb-0">
        <button
          onClick={() => setCurrentPage('services')}
          className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali ke Layanan
        </button>
      </Section>

      {/* Hero Image Carousel */}
      <div className="w-full h-64 sm:h-96 md:h-[500px] bg-slate-900 overflow-hidden group relative">
        <img
          src={service.images[currentImageIndex]}
          alt={`${service.title} - ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Navigation Buttons */}
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-orange-600/80 hover:bg-orange-700 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-orange-600/80 hover:bg-orange-700 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="sm:w-7 sm:h-7" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {service.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'bg-orange-500 w-8 h-2.5 sm:w-10 sm:h-3'
                      : 'bg-white/60 hover:bg-white/80 w-2.5 h-2.5 sm:w-3 sm:h-3'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">{service.title}</h1>
          <p className="text-sm sm:text-lg text-white/90">{service.description}</p>
        </div>
      </div>

      <Section>
        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-5 rounded-lg sm:rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={20} className="text-blue-600 dark:text-blue-400" />
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Waktu</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">{service.estimatedTime}</p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-5 rounded-lg sm:rounded-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={20} className="text-green-600 dark:text-green-400" />
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Harga</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">{service.pricing}</p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 sm:p-5 rounded-lg sm:rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} className="text-purple-600 dark:text-purple-400" />
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Jangkauan</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">{service.coverage}</p>
          </div>
        </div>

        {/* Main Description */}
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Tentang Layanan Ini</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{service.fullDescription}</p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{service.longDescription}</p>
        </div>

        {/* Four Column Layout: Features & Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-orange-200 dark:border-orange-800">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Check className="text-orange-600" size={20} />
              </div>
              Fitur Layanan
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-600"></div>
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Check className="text-green-600" size={20} />
              </div>
              Keuntungan
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 p-8 sm:p-12 rounded-xl sm:rounded-2xl text-white mb-16 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Siap Menggunakan Layanan Ini?</h3>
          <p className="text-sm sm:text-base text-white/90 mb-6 max-w-2xl">
            Hubungi tim profesional kami sekarang untuk konsultasi gratis dan dapatkan penawaran khusus sesuai kebutuhan Anda.
          </p>
          <button className="bg-white text-orange-600 hover:bg-slate-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-300 hover:shadow-lg">
            Hubungi Kami Sekarang
          </button>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between gap-4 mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={() => {
              setServiceDetailId(previousService);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:block">Sebelumnya</span>
          </button>

          {/* Service Navigation Dots */}
          <div className="flex gap-2 flex-wrap justify-center">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setServiceDetailId(idx);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === serviceId
                    ? 'bg-orange-600 w-8'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-orange-400'
                }`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              setServiceDetailId(nextService);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            <span className="hidden sm:block">Berikutnya</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </Section>
    </div>
  );
};
