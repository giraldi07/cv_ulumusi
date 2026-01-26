import { Truck, Clock, Package, Globe, Users, ShieldCheck } from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';

const services = [
  {
    icon: Truck,
    title: 'Reguler Service',
    description: 'Estimasi sampai 2-3 hari kerja dengan harga paling ekonomis.',
  },
  {
    icon: Clock,
    title: 'Next Day Service',
    description: 'Kirim hari ini, sampai besok. Prioritas kecepatan tinggi.',
  },
  {
    icon: Package,
    title: 'Same Day Service',
    description: 'Pengiriman dalam kota yang sampai di hari yang sama.',
  },
  {
    icon: Globe,
    title: 'Kargo Laut',
    description: 'Solusi hemat untuk pengiriman barang berat antar pulau.',
  },
  {
    icon: Users,
    title: 'Pindahan Rumah',
    description: 'Jasa angkut dan pindahan rumah/kantor terima beres.',
  },
  {
    icon: ShieldCheck,
    title: 'Packing Kayu',
    description: 'Layanan tambahan pelindung ekstra untuk barang pecah belah.',
  },
];

export const ServicesPage = () => (
  <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 min-h-screen">
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Layanan Lengkap Kami
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Apapun kebutuhan pengiriman Anda, dari dokumen kecil hingga kargo berat, CV. ULUMUSI
          memiliki solusi yang tepat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  </div>
);
