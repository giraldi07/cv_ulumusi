import { useState } from 'react';
import { Truck, Clock, Package, Globe, Users, ShieldCheck, X, CheckCircle2, MapPin, DollarSign, Zap } from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';

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
}

const services: ServiceDetails[] = [
  {
    icon: Truck,
    title: 'Reguler Service',
    description: 'Estimasi sampai 2-3 hari kerja dengan harga paling ekonomis.',
    fullDescription: 'Layanan pengiriman reguler kami adalah pilihan terbaik untuk pengiriman barang yang tidak terburu-buru. Dengan jaringan distribusi yang luas, kami menjamin barang Anda sampai dengan aman meskipun membutuhkan waktu lebih.',
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
    coverage: '34 Provinsi di Indonesia'
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
    coverage: 'Jangkauan ekspansi penuh'
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
    coverage: 'Kota-kota besar (Jakarta, Bandung, Surabaya, dll)'
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
    coverage: 'Semua pulau utama Indonesia'
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
    coverage: 'Jakarta, Bandung, Surabaya & sekitarnya'
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
    coverage: 'Domestik & internasional'
  }
];

const Modal = ({ service, onClose }: { service: ServiceDetails | null; onClose: () => void }) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-0 animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 md:p-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Icon size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Description */}
          <div>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={20} className="text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-slate-900 dark:text-white">Waktu Pengiriman</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{service.estimatedTime}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={20} className="text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-slate-900 dark:text-white">Harga</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{service.pricing}</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={20} className="text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-slate-900 dark:text-white">Jangkauan</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{service.coverage}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 size={24} className="text-orange-600" />
              Fitur Layanan
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 size={24} className="text-green-600" />
              Keuntungan
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl border border-orange-200 dark:border-slate-500">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tertarik dengan layanan ini?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran harga terbaik.
            </p>
            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 rounded-lg transition-all hover:scale-105">
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

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
              onClick={() => setSelectedService(service)}
              className="cursor-pointer"
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

      {/* Modal */}
      <Modal service={selectedService} onClose={() => setSelectedService(null)} />

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
