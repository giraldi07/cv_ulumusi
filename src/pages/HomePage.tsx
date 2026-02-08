import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Clock,
  Truck,
  Globe,
  Package,
  ArrowRight,
  MapPin,
  Users,
  ThumbsUp,
  AlertCircle,
  Zap,
  ShieldCheck,
  ChevronRight,
  Star
} from 'lucide-react';
import { Section } from '../components/Section';
import { TrackingResult } from '../components/TrackingResult';
import { ClientsCarousel } from '../components/ClientsCarousel';
import { CountUp } from '../components/CountUp';
import { useNavigation } from '../contexts/NavigationContext';
import { findShipmentByResi } from '../data/mockShipments';
import { clients } from '../data/clients';
import type { Shipment } from '../types/shipment';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
        setTrackingError('Mohon masukkan nomor resi Anda');
        setIsSearching(false);
        return;
      }
      const shipment = findShipmentByResi(resiNumber);
      if (shipment) {
        setTrackingResult(shipment);
      } else {
        setTrackingError('Resi tidak ditemukan. Cek kembali nomor Anda.');
      }
      setIsSearching(false);
    }, 800);
  };

  const handleCloseTracking = () => {
    setTrackingResult(null);
    setTrackingInput('');
  };

  return (
    <div className="overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          {/* UBAH: Background blob orange jadi custom red */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#AB1F24]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[10s]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Hero Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-3 w-3">
                {/* UBAH: Dot status ping */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AB1F24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#AB1F24]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                #1 Logistics Partner 2024
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Kirim Paket <br className="hidden lg:block" />
              <span className="relative whitespace-nowrap">
                {/* UBAH: Gradient Text Utama */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#AB1F24] to-red-500">Tanpa Batas.</span>
                {/* UBAH: Underline effect */}
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#AB1F24]/20 dark:bg-[#AB1F24]/30 -rotate-1 z-0"></span>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Layanan logistik modern dengan teknologi tracking real-time. Kami memastikan setiap pengiriman sampai tepat waktu, aman, dan transparan.
            </motion.p>

            {/* Tracking Search Box - Floating Style */}
            <motion.div variants={fadeInUp} className="relative w-full max-w-xl mx-auto lg:mx-0">
               {/* UBAH: Glow effect di belakang search bar */}
               <div className="absolute -inset-1 bg-gradient-to-r from-[#AB1F24] to-red-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
               <form 
                onSubmit={handleTrackingSearch} 
                className="relative flex items-center bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10"
              >
                <div className="pl-4 text-slate-400">
                  <Search size={24} />
                </div>
                <input
                  type="text"
                  placeholder="Masukkan Nomor Resi (Contoh: ULU-2024...)"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  className="w-full bg-transparent border-none p-4 focus:ring-0 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 font-semibold"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  // UBAH: Tombol utama search (bg dan shadow)
                  className="hidden sm:flex items-center gap-2 px-8 py-4 bg-[#AB1F24] hover:bg-[#8a191d] text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(171,31,36,0.39)] hover:shadow-[0_6px_20px_rgba(171,31,36,0.23)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSearching ? <Clock className="animate-spin" size={20}/> : <span className="flex items-center gap-2">Lacak <ArrowRight size={18}/></span>}
                </button>
                
                {/* Mobile Button (Icon Only) */}
                <button
                  type="submit"
                  disabled={isSearching}
                  // UBAH: Tombol mobile
                  className="sm:hidden p-4 bg-[#AB1F24] text-white rounded-xl"
                >
                  {isSearching ? <Clock className="animate-spin" size={20}/> : <ArrowRight size={20}/>}
                </button>
              </form>

              {/* Error Message Toast */}
              <AnimatePresence>
                {trackingError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.9 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute top-full mt-4 left-0 right-0 z-20 flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900 rounded-xl text-red-600 dark:text-red-400 shadow-xl backdrop-blur-sm"
                  >
                    <AlertCircle className="shrink-0" size={20} />
                    <span className="text-sm font-bold">{trackingError}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Quick Stats / Trust Signals */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
               {[
                 { label: 'Terpercaya', val: '4.9/5', icon: Star, color: 'text-yellow-500' },
                 { label: 'Jangkauan', val: 'Seluruh ID', icon: Globe, color: 'text-blue-500' },
                 // UBAH: Icon Kecepatan jadi warna custom
                 { label: 'Kecepatan', val: '1 Hari', icon: Zap, color: 'text-[#AB1F24]' }
               ].map((stat, i) => (
                 <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 backdrop-blur-sm">
                    <stat.icon className={stat.color} size={18} fill="currentColor" fillOpacity={0.2} />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{stat.label}</span>
                      <span className="text-sm font-black text-slate-800 dark:text-slate-200">{stat.val}</span>
                    </div>
                 </div>
               ))}
            </motion.div>
          </motion.div>

          {/* Hero Image / Visual Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white dark:border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Logistics Worker"
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out transform-gpu"
                style={{ willChange: 'transform' }}
              />
              {/* Floating Glass Card */}
              <div className="absolute bottom-8 left-8 right-8 z-20 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white shadow-xl">
                 <div className="flex items-center justify-between mb-2">
                    {/* UBAH: Text accent */}
                    <span className="text-xs font-bold uppercase tracking-widest text-[#AB1F24]">Live Status</span>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                 </div>
                 <div className="flex items-center gap-4">
                    {/* UBAH: Icon background */}
                    <div className="h-12 w-12 rounded-full bg-[#AB1F24] flex items-center justify-center">
                       <Truck size={24} className="text-white"/>
                    </div>
                    <div>
                       <p className="font-bold text-lg">Pengiriman Aktif</p>
                       <p className="text-sm text-white/70">1,240+ Paket sedang bergerak</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Decoration Pattern */}
            <div className="absolute -bottom-10 -right-10 z-0">
               <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                     <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        {/* UBAH: Dot color */}
                        <circle cx="2" cy="2" r="2" className="text-[#AB1F24]/30" fill="currentColor" />
                     </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#dot-pattern)" />
               </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- CLIENTS CAROUSEL --- */}
      <div className="py-10 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <ClientsCarousel clients={clients} autoPlay={true} autoPlaySpeed={3000} />
      </div>

      {/* --- SERVICES SECTION (Modern Grid) --- */}
      <Section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            {/* UBAH: Title accent */}
            <h2 className="text-[#AB1F24] font-black text-sm uppercase tracking-widest mb-4">Layanan Unggulan</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Solusi Logistik untuk <br/> Setiap Skala Bisnis.
            </h3>
          </div>
          <button 
            onClick={() => setCurrentPage('services')} 
            className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-bold shadow-sm hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
          >
            Lihat Semua Layanan
            {/* UBAH: Button arrow accent */}
            <div className="bg-[#AB1F24]/10 p-1 rounded-full group-hover:translate-x-1 transition-transform">
               <ChevronRight size={16} className="text-[#AB1F24]"/>
            </div>
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Truck, 
              title: 'Land Transport', 
              desc: 'Armada lengkap dari Blind Van hingga Wingbox untuk distribusi darat yang efisien.',
              bg: 'bg-blue-50 dark:bg-blue-900/10',
              accent: 'text-blue-600'
            },
            { 
              icon: Globe, 
              title: 'Cargo Logistics', 
              desc: 'Solusi pengiriman volume besar antarpulau dengan biaya kompetitif.',
              // UBAH: Card accent background dan text
              bg: 'bg-[#AB1F24]/10',
              accent: 'text-[#AB1F24]'
            },
            { 
              icon: Package, 
              title: 'Door to Door', 
              desc: 'Layanan penjemputan VIP langsung dari lokasi Anda ke tujuan.',
              bg: 'bg-green-50 dark:bg-green-900/10',
              accent: 'text-green-600'
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className={service.accent} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              {/* UBAH: Link hover color */}
              <div className="flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#AB1F24] transition-colors cursor-pointer">
                Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-2"/>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- STATS & TRUST (Bento Grid) --- */}
      <div className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             
             {/* Main Title Block */}
             <div className="lg:col-span-2 bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group">
                 {/* UBAH: Glow effect */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#AB1F24] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                 <div className="relative z-10">
                    {/* UBAH: Small text */}
                    <h2 className="text-[#AB1F24] font-bold tracking-[0.2em] text-xs uppercase mb-3">Why Choose Us</h2>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">Pertumbuhan Anda,<br/>Prioritas Kami.</h3>
                    <p className="text-slate-400">Kami mengkombinasikan kecepatan, keamanan, dan teknologi untuk memberikan pengalaman logistik terbaik.</p>
                 </div>
             </div>

             {/* Stat Cards */}
             {[
               { icon: Users, val: 5000, suffix: '+', label: 'Happy Clients', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/10' },
               { icon: MapPin, val: 34, suffix: '', label: 'Provinsi Covered', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/10' },
               { icon: ThumbsUp, val: 99, suffix: '%', label: 'Satisfaction Rate', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/10' },
               { icon: ShieldCheck, val: 100, suffix: '%', label: 'Insurance Protection', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/10' }
             ].map((stat, i) => (
                <div key={i} className={`rounded-[2.5rem] p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col items-start justify-center hover:bg-white dark:hover:bg-slate-800 transition-colors`}>
                   <div className={`p-3 rounded-xl ${stat.bg} mb-4`}>
                      <stat.icon size={24} className={stat.color} />
                   </div>
                   <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">
                      <CountUp end={stat.val} duration={2.5} />{stat.suffix}
                   </div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
             ))}
           </div>
        </div>
      </div>

      {/* --- CTA SECTION (Modern) --- */}
      <div className="px-4 pb-20 pt-10 bg-white dark:bg-slate-950">
        {/* UBAH: CTA Gradient Background */}
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#AB1F24] to-red-900 dark:from-[#AB1F24] dark:to-red-950 overflow-hidden relative shadow-2xl shadow-red-900/20">
           {/* Background Patterns */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
           <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white rounded-full blur-[150px] opacity-20"></div>
           
           <div className="relative z-10 px-8 py-20 md:py-24 text-center">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                 Siap Mengirim Paket?
             </h2>
             {/* UBAH: Text color to match red theme */}
             <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
                 Bergabung dengan ribuan bisnis yang telah mempercayakan distribusi produk mereka kepada CV. ULUMUSI.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  // UBAH: Button CTA Utama text color
                  className="px-10 py-5 bg-white text-[#AB1F24] font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Hubungi Kami
                </button>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  // UBAH: Button Secondary background
                  className="px-10 py-5 bg-red-900/40 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-red-900/60 transition-all"
                >
                  Cek Ongkir
                </button>
             </div>
           </div>
        </div>
      </div>

      {/* Tracking Modal */}
      {trackingResult && <TrackingResult shipment={trackingResult} onClose={handleCloseTracking} />}
      
    </div>
  );
};