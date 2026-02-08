import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Clock,
  Truck,
  Globe,
  Package,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Award,
  Users,
  ThumbsUp,
  AlertCircle,
  Zap,
  ShieldCheck,
  Banknote,
  Headphones,
} from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { TrackingResult } from '../components/TrackingResult';
import { ClientsCarousel } from '../components/ClientsCarousel';
import { CountUp } from '../components/CountUp';
import { useNavigation } from '../contexts/NavigationContext';
import { findShipmentByResi } from '../data/mockShipments';
import { clients } from '../data/clients';
import type { Shipment } from '../types/shipment';

export const HomePage = () => {
  const { setCurrentPage } = useNavigation();
  const [trackingInput, setTrackingInput] = useState('');
  const [trackingResult, setTrackingResult] = useState<Shipment | null>(null);
  const [trackingError, setTrackingError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackingSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTrackingError('');
    setTrackingResult(null);

    setTimeout(() => {
      const resiNumber = trackingInput.trim().toUpperCase();
      if (!resiNumber) {
        setTrackingError('Silakan masukkan nomor resi');
        setIsSearching(false);
        return;
      }
      const shipment = findShipmentByResi(resiNumber);
      if (shipment) {
        setTrackingResult(shipment);
      } else {
        setTrackingError('Nomor resi tidak ditemukan. Silakan periksa kembali nomor resi Anda.');
      }
      setIsSearching(false);
    }, 800);
  };

  const handleCloseTracking = () => {
    setTrackingResult(null);
    setTrackingInput('');
  };

  return (
    <>
      {/* Hero Section - High Performance Logistics */}
      <div className="relative pt-32 pb-20 md:pt-52 md:pb-40 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Fast & Reliable Logistics</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Efisienkan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Rantai Pasok
              </span><br />
              Bisnis Anda.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              CV. ULUMUSI menghadirkan solusi pengiriman end-to-end yang cerdas, transparan, dan terintegrasi untuk mendukung akselerasi bisnis Anda di seluruh Nusantara.
            </p>

            {/* Main Tracking Form */}
            <div className="relative group max-w-xl">
              <form 
                onSubmit={handleTrackingSearch} 
                className="relative bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl shadow-slate-200 dark:shadow-none flex flex-col sm:flex-row gap-2 border border-slate-200 dark:border-slate-800 group-focus-within:border-orange-500 transition-all duration-300"
              >
                <div className="flex-1 flex items-center px-4 h-14">
                  <Search className="text-slate-400 mr-3" size={22} />
                  <input
                    type="text"
                    placeholder="Masukkan Nomor Resi (Contoh: REG-12345)..."
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="h-14 px-10 bg-slate-900 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {isSearching ? 'Loading...' : 'Lacak Sekarang'}
                </button>
              </form>
              
              {trackingError && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-14 left-0 right-0 flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg text-red-600 dark:text-red-400 text-sm font-medium"
                >
                  <AlertCircle size={16} />
                  {trackingError}
                </motion.div>
              )}
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              {[
                { icon: ShieldCheck, label: 'Safe Delivery', color: 'text-green-500' },
                { icon: Clock, label: 'On Time', color: 'text-blue-500' },
                { icon: Globe, label: 'National Network', color: 'text-purple-500' }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                  <item.icon size={18} className={item.color} />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white dark:border-slate-900">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Logistics Distribution"
                className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
                  <Truck className="text-orange-600" size={32} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">100%</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Safe Delivery</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Keamanan barang Anda adalah prioritas utama kami dengan sistem proteksi ganda.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust Section - Clients */}
      <div className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-slate-400 dark:text-slate-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">Strategic Partners</h2>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">Dipercaya oleh industri terkemuka di Indonesia</p>
          </div>
          <ClientsCarousel clients={clients} autoPlay={true} autoPlaySpeed={7000} />
          
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Users, end: 5000, label: 'Klien Korporat', color: 'bg-orange-500' },
              { icon: ThumbsUp, end: 99, suffix: '.2%', label: 'Tingkat Kepuasan', color: 'bg-blue-600' },
              { icon: MapPin, end: 34, label: 'Provinsi Tercover', color: 'bg-red-600' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-colors hover:bg-white dark:hover:bg-slate-900">
                <div className={`${stat.color} p-4 rounded-2xl text-white mb-6 shadow-lg`}>
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                  <CountUp end={stat.end} duration={2.5} />{stat.suffix || '+'}
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Solusi Logistik Menyeluruh Untuk Kebutuhan Anda.
            </h3>
          </div>
          <Button variant="outline" onClick={() => setCurrentPage('services')} className="group border-2 hover:bg-slate-900 hover:text-white transition-all">
            Lihat Detail <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Truck, title: 'Land Transport', desc: 'Distribusi darat dengan sistem tracking GPS real-time dan jadwal harian yang presisi.' },
            { icon: Globe, title: 'Enterprise Cargo', desc: 'Solusi kargo volume besar dengan skema kontrak yang fleksibel dan efisien bagi perusahaan.' },
            { icon: Package, title: 'Door to Door', desc: 'Kemudahan penjemputan dan pengantaran langsung ke titik tujuan dengan keamanan maksimal.' }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.desc}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us - Modernized Cards */}
      <Section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs mb-4">Core Strengths</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white">Standar Layanan Kami</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: 'Express Delivery', desc: 'Sistem rute tercepat yang memastikan paket tiba sesuai estimasi.', color: 'text-orange-500' },
            { icon: ShieldCheck, title: 'Fully Insured', desc: 'Setiap pengiriman dilindungi asuransi untuk ketenangan pikiran Anda.', color: 'text-green-500' },
            { icon: Banknote, title: 'Cost Efficient', desc: 'Optimasi biaya pengiriman tanpa mengurangi kualitas pelayanan.', color: 'text-blue-500' },
            { icon: Headphones, title: '24/7 Priority', desc: 'Dukungan tim operasional profesional yang siap membantu kapan saja.', color: 'text-purple-500' },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-orange-500/20 shadow-sm"
            >
              <div className={`${item.color} mb-6`}>
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section - Enterprise Style */}
      <div className="px-6 py-12">
        <Section className="py-20 bg-slate-900 dark:bg-orange-600 rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Siap Mengoptimalkan Logistik Anda Sekarang?
            </h2>
            <p className="text-xl text-slate-300 dark:text-orange-50 opacity-90 mb-10 max-w-2xl mx-auto">
              Mari diskusikan bagaimana layanan kami dapat membantu menekan biaya operasional dan mempercepat distribusi bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-orange-100 transition-all active:scale-95 shadow-2xl"
              >
                Konsultasi Gratis
              </button>
              <button 
                onClick={() => setCurrentPage('services')} 
                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
              >
                Pelajari Layanan
              </button>
            </div>
          </div>
        </Section>
      </div>

      {trackingResult && <TrackingResult shipment={trackingResult} onClose={handleCloseTracking} />}
    </>
  );
};