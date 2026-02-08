import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Scale, MapPin, Package, 
  Info, ArrowRight, Truck, Zap, Clock, 
  Box, Globe, ShieldCheck, Sparkles, ChevronRight
} from 'lucide-react';
import { Section } from '../components/Section';
import { shippingRates, ShippingRate } from '../data/ongkir';

export const ShippingRatesPage = () => {
  const [search, setSearch] = useState('');
  const [weight, setWeight] = useState<number>(1);
  const [selectedResult, setSelectedResult] = useState<ShippingRate | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const suggestions = useMemo(() => {
    if (search.length < 2) return [];
    return shippingRates.filter(rate => 
      rate.destination.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleCalculate = (rate: ShippingRate) => {
    setIsCalculating(true);
    setSelectedResult(null);
    setSearch(rate.destination);
    
    setTimeout(() => {
      setSelectedResult(rate);
      setIsCalculating(false);
    }, 1500);
  };

  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="relative pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden transition-colors duration-500">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-[0.1] invert dark:invert-0" />
      </div>

      <Section>
        <div className="max-w-5xl mx-auto relative z-10 px-4">
          
          {/* --- HEADER SECTION --- */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200/50 dark:border-orange-800/30 rounded-2xl mb-2 backdrop-blur-md"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Smart Pricing Engine v2.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter"
            >
              CEK <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-red-400">ONGKIR</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 font-medium"
            >
              Estimasi pengiriman instan dari <span className="text-slate-900 dark:text-slate-200 font-bold">Serang</span> ke seluruh Indonesia dengan tarif transparan.
            </motion.p>
          </div>

          {/* --- MAIN CALCULATOR CARD --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white dark:border-slate-800/50 mb-16"
          >
            <div className="grid md:grid-cols-12 gap-6 items-end">
              {/* Origin */}
              <div className="md:col-span-4 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2 ml-2">
                  <MapPin size={12} className="text-orange-500" /> Titik Jemput
                </label>
                <div className="p-4 bg-slate-100/50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/50 dark:border-slate-700/30 text-slate-700 dark:text-slate-300 font-bold italic">
                  Serang, Banten
                </div>
              </div>

              {/* Weight */}
              <div className="md:col-span-3 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2 ml-2">
                  <Scale size={12} className="text-orange-500" /> Berat Paket
                </label>
                <div className="relative group">
                  <input 
                    type="number" 
                    min="1"
                    value={weight}
                    onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full p-4 pl-6 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-orange-500 dark:focus:border-orange-500 rounded-2xl text-slate-900 dark:text-white font-black transition-all outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-slate-400 dark:text-slate-500">KG</span>
                </div>
              </div>

              {/* Destination */}
              <div className="md:col-span-5 space-y-3 relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2 ml-2">
                  <Globe size={12} className="text-orange-500" /> Kota Tujuan
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Contoh: Jakarta, Surabaya..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-orange-500 dark:focus:border-orange-500 rounded-2xl text-slate-900 dark:text-white font-black transition-all outline-none"
                  />
                </div>

                {/* Suggestions Dropdown */}
                <AnimatePresence>
                  {suggestions.length > 0 && !selectedResult && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-50 w-full mt-2 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                      {suggestions.map((rate, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleCalculate(rate)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-all group border-b border-slate-100 dark:border-slate-800 last:border-none"
                        >
                          <span className="font-bold">{rate.destination}</span>
                          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* --- RESULTS AREA --- */}
          <div className="min-h-[400px]">
            {isCalculating && <LoadingState />}

            <AnimatePresence>
              {selectedResult && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                  <div className="flex items-center gap-6">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 whitespace-nowrap">Opsi Pengiriman Terbaik</h2>
                    <div className="h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { type: 'Reguler', price: selectedResult.reguler, time: '2-3 Hari', icon: Package, color: 'orange', desc: 'Handal & Efisien', bg: 'bg-orange-500' },
                      { type: 'Next Day', price: selectedResult.nextDay, time: '1 Hari', icon: Zap, color: 'blue', desc: 'Besok Sampai', bg: 'bg-blue-500' },
                      { type: 'Same Day', price: selectedResult.sameDay, time: '6-8 Jam', icon: Clock, color: 'emerald', desc: 'Hari yang Sama', bg: 'bg-emerald-500' },
                      { type: 'Kargo', price: selectedResult.cargo, time: '5-7 Hari', icon: Box, color: 'purple', isCargo: true, desc: 'Partai Besar', bg: 'bg-purple-500' },
                    ].map((service, i) => (
                      service.price > 0 && (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-orange-500/50 transition-all overflow-hidden relative"
                        >
                          {/* Decorative Accent */}
                          <div className={`absolute top-0 right-0 w-24 h-24 ${service.bg} opacity-[0.03] dark:opacity-[0.07] rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700`} />
                          
                          <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center ${service.bg} text-white shadow-lg shadow-${service.color}-500/20`}>
                            <service.icon size={22} />
                          </div>
                          
                          <h3 className="font-black text-slate-900 dark:text-white text-lg mb-1">{service.type}</h3>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mb-6 uppercase tracking-wider">{service.desc}</p>
                          
                          <div className="space-y-3">
                            <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                              {formatIDR(service.isCargo ? service.price * Math.max(10, weight) : service.price * weight)}
                            </p>
                            <div className="flex items-center gap-2 text-[10px] font-black text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-3 py-1.5 rounded-xl w-fit border border-orange-100 dark:border-orange-500/20">
                              <Clock size={12} /> {service.time}
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </div>

                  {/* Trust Footer */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-slate-800/50">
                    {[
                      { icon: ShieldCheck, title: 'Asuransi Penuh', text: 'Perlindungan barang hingga 100% nilai deklarasi.' },
                      { icon: Truck, title: 'Real-time Tracking', text: 'Pantau posisi barang Anda setiap detik.' },
                      { icon: Info, title: 'Tarif Transparan', text: 'Harga final tanpa biaya tambahan tersembunyi.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center py-20 space-y-6">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-slate-200 dark:border-slate-800 border-t-orange-500 rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Truck className="text-orange-500 animate-bounce" size={24} />
      </div>
    </div>
    <div className="text-center">
      <p className="text-slate-900 dark:text-white font-black tracking-widest uppercase text-sm">Menghitung Tarif...</p>
      <p className="text-slate-500 dark:text-slate-500 text-xs">Menganalisa rute terbaik untuk pengiriman Anda</p>
    </div>
  </div>
);