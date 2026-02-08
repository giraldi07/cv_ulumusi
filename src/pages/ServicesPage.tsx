import { motion } from 'framer-motion';
import { 
  Truck, Clock, Package, Globe, Users, ShieldCheck, 
  ArrowRight, CheckCircle2, Star, Sparkles 
} from 'lucide-react';
import { Section } from '../components/Section';
import { useNavigation } from '../contexts/NavigationContext';

// Interface tetap sama, namun kita tambahkan properti 'color' untuk variasi visual
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
  color: string;
}

const services: ServiceDetails[] = [
  {
    icon: Truck,
    title: 'Reguler Service',
    color: 'orange',
    description: 'Estimasi sampai 2-3 hari kerja dengan harga paling ekonomis.',
    fullDescription: 'Layanan pengiriman reguler kami adalah pilihan terbaik untuk pengiriman barang yang tidak terburu-buru.',
    features: ['Pengiriman ke seluruh Indonesia', 'Tracking real-time 24/7', 'Kemasan standar aman'],
    benefits: ['Harga paling murah', 'Sistem tracking transparan'],
    pricing: 'Mulai dari Rp 25.000',
    estimatedTime: '2-3 hari kerja',
    coverage: '34 Provinsi di Indonesia',
    images: ['https://images.unsplash.com/photo-1553531889-e6cf89d45abc?w=800&q=80']
  },
  {
    icon: Clock,
    title: 'Next Day Service',
    color: 'blue',
    description: 'Kirim hari ini, sampai besok. Prioritas kecepatan tinggi.',
    fullDescription: 'Barang Anda akan diprioritaskan dan dijamin sampai dalam 24 jam kerja.',
    features: ['Pengiriman 24 jam', 'Prioritas handling', 'Garansi uang kembali'],
    benefits: ['Kecepatan tinggi', 'Dedicated driver'],
    pricing: 'Mulai dari Rp 75.000',
    estimatedTime: '24 jam kerja',
    coverage: 'Jangkauan ekspansi penuh',
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80']
  },
  {
    icon: Package,
    title: 'Same Day Service',
    color: 'emerald',
    description: 'Pengiriman dalam kota yang sampai di hari yang sama.',
    fullDescription: 'Same Day Service adalah layanan tercepat kami untuk pengiriman dalam kota.',
    features: ['4-6 jam sampai', 'Foto bukti delivery', 'GPS Tracking'],
    benefits: ['Tercepat area urban', 'Perfect untuk dokumen'],
    pricing: 'Mulai dari Rp 50.000',
    estimatedTime: '4-6 jam',
    coverage: 'Kota-kota besar',
    images: ['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80']
  },
  {
    icon: Globe,
    title: 'Kargo Laut',
    color: 'purple',
    description: 'Solusi hemat untuk pengiriman barang berat antar pulau.',
    fullDescription: 'Menawarkan solusi hemat untuk pengiriman barang dalam jumlah besar antar pulau.',
    features: ['Antar pulau', 'Container & break bulk', 'Cargo Insurance'],
    benefits: ['Harga kompetitif/ton', 'Tim customs profesional'],
    pricing: 'Mulai Rp 500.000/ton',
    estimatedTime: '5-7 hari',
    coverage: 'Seluruh Pulau Indonesia',
    images: ['https://images.unsplash.com/photo-1578575437980-863b12388b86?w=800&q=80']
  },
  {
    icon: Users,
    title: 'Pindahan',
    color: 'pink',
    description: 'Jasa angkut dan pindahan rumah/kantor terima beres.',
    fullDescription: 'Tim profesional kami akan menangani barang berharga Anda dari packing hingga setting.',
    features: ['Packing profesional', 'Kru terlatih', 'Furniture protection'],
    benefits: ['Hemat tenaga', 'Proses terorganisir'],
    pricing: 'Mulai Rp 2.000.000',
    estimatedTime: '1-3 hari',
    coverage: 'Jawa & Sumatera',
    images: ['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80']
  },
  {
    icon: ShieldCheck,
    title: 'Packing Kayu',
    color: 'amber',
    description: 'Layanan tambahan pelindung ekstra untuk barang pecah belah.',
    fullDescription: 'Proteksi eksklusif untuk barang berharga dikemas standar internasional.',
    features: ['Custom wooden crate', 'Padding busa premium', 'Sertifikat Internasional'],
    benefits: ['Proteksi maksimal', 'Zero damage risk'],
    pricing: 'Mulai Rp 150.000',
    estimatedTime: 'Sesuai jadwal utama',
    coverage: 'Domestik & Int.',
    images: ['https://images.unsplash.com/photo-1608993691422-5cce72b2e3cd?w=800&q=80']
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
    <div className="relative pt-32 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <Section>
        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* --- HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/30 shadow-sm"
            >
              <Sparkles size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Our Premium Logistics</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter"
            >
              SOLUSI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-red-400">TERBAIK</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
            >
              Dari dokumen mendesak hingga kargo antar pulau, <span className="text-slate-900 dark:text-slate-100 font-bold underline decoration-orange-500/30">CV. ULUMUSI</span> menghadirkan layanan logistik yang presisi, aman, dan transparan.
            </motion.p>
          </div>

          {/* --- SERVICES GRID --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleServiceClick(idx)}
                className="group relative cursor-pointer"
              >
                {/* Background Card */}
                <div className="relative h-full bg-white dark:bg-slate-900/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800/50 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-orange-500/50 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                  
                  {/* Glowing Accent */}
                  <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${service.color}-500 opacity-[0.03] dark:opacity-[0.08] rounded-full group-hover:scale-[3] transition-transform duration-700`} />
                  
                  {/* Icon Area */}
                  <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 group-hover:bg-orange-600 transition-colors duration-500`}>
                    <service.icon size={28} className="text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features Snippet */}
                    <ul className="py-4 space-y-2">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          <CheckCircle2 size={12} className="text-emerald-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Info */}
                    <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pricing</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-200">{service.pricing.split(' ')[2]}++</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- TRUST BADGE --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 p-8 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/30">
                <Star fill="currentColor" />
              </div>
              <div>
                <h4 className="text-xl font-black italic">Trusted by 1000+ Businesses</h4>
                <p className="text-slate-400 text-sm font-medium">Layanan logistik dengan tingkat keamanan barang 99.9%.</p>
              </div>
            </div>
            <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all active:scale-95 whitespace-nowrap">
              KONSULTASI GRATIS
            </button>
          </motion.div>

        </div>
      </Section>
    </div>
  );
};