import { Truck, Clock, Package, Globe, Users, ShieldCheck } from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
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
}

const services: ServiceDetails[] = [
  {
    icon: Truck,
    title: 'Reguler Service',
    description: 'Estimasi sampai 2-3 hari kerja dengan harga paling ekonomis.',
    fullDescription: 'Layanan pengiriman reguler kami adalah pilihan terbaik untuk pengiriman barang yang tidak terburu-buru. Dengan jaringan distribusi yang luas, kami jamin barang Anda sampai dengan aman meskipun membutuhkan waktu lebih.',
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
      'https://images.unsplash.com/photo-1553531889-e6cf89d45abc?w=800&q=80',
      'https://images.unsplash.com/photo-1453612908626-e4e99ce417d0?w=800&q=80',
      'https://images.unsplash.com/photo-1578575437980-863b12388b86?w=800&q=80'
    ]
  },
  {
    icon: Clock,
    title: 'Next Day Service',
    description: 'Kirim hari ini, sampai besok. Prioritas kecepatan tinggi.',
    fullDescription: 'Untuk kebutuhan Anda yang mendesak, Next Day Service adalah solusi sempurna. Barang Anda akan diprioritaskan dan dijamin sampai dalam 24 jam kerja dengan layanan express yang handal.',
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
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      'https://images.unsplash.com/photo-1453612908626-e4e99ce417d0?w=800&q=80'
    ]
  },
  {
    icon: Package,
    title: 'Same Day Service',
    description: 'Pengiriman dalam kota yang sampai di hari yang sama.',
    fullDescription: 'Same Day Service adalah layanan tercepat kami untuk pengiriman dalam kota. Barang dikirim dan sampai dalam waktu 4-6 jam, sempurna untuk kebutuhan dokumen, barang urgent, atau pickup emergency.',
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
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      'https://images.unsplash.com/photo-1533050487297-86d3d3a76f48?w=800&q=80',
      'https://images.unsplash.com/photo-1553531889-e6cf89d45abc?w=800&q=80'
    ]
  },
  {
    icon: Globe,
    title: 'Kargo Laut',
    description: 'Solusi hemat untuk pengiriman barang berat antar pulau.',
    fullDescription: 'Kargo laut kami menawarkan solusi hemat untuk pengiriman barang dalam jumlah besar antar pulau Indonesia. Dengan armada kapal yang modern dan jaringan pelabuhan yang luas, kami siap melayani kebutuhan logistik Anda.',
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
      'https://images.unsplash.com/photo-1578575437980-863b12388b86?w=800&q=80',
      'https://images.unsplash.com/photo-1519643381401-62a08dc9b50d?w=800&q=80',
      'https://images.unsplash.com/photo-1556421329-c8ca191ce70a?w=800&q=80'
    ]
  },
  {
    icon: Users,
    title: 'Pindahan Rumah',
    description: 'Jasa angkut dan pindahan rumah/kantor terima beres.',
    fullDescription: 'Layanan pindahan rumah dan kantor kami memberikan solusi lengkap dari packing hingga setting ulang. Tim profesional kami akan menangani semua barang berharga Anda dengan hati-hati dan efisien.',
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
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Packing Kayu',
    description: 'Layanan tambahan pelindung ekstra untuk barang pecah belah.',
    fullDescription: 'Packing kayu kami adalah layanan proteksi eksklusif untuk barang-barang berharga dan mudah rusak. Dikemas dengan standar internasional, cocok untuk pengiriman jarak jauh atau barang antik/electronics.',
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
      'https://images.unsplash.com/photo-1608993691422-5cce72b2e3cd?w=800&q=80',
      'https://images.unsplash.com/photo-1600507423169-9c580c3be3bd?w=800&q=80',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
    ]
  }
];

export const ServicesPage = () => {
  const { setCurrentPage, setServiceDetailId } = useNavigation();

  const handleServiceClick = (serviceId: number) => {
    setServiceDetailId(serviceId);
    setCurrentPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 min-h-screen">
      <Section>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Layanan Lengkap Kami
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Apapun kebutuhan pengiriman Anda, dari dokumen kecil hingga kargo berat, CV. ULUMUSI
            memiliki solusi yang tepat untuk bisnis Anda. Klik setiap layanan untuk melihat detail lengkapnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => handleServiceClick(idx)}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
