import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Scale, MapPin, Calculator, Package, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '../components/Section';
import { shippingRates, ShippingRate } from '../data/ongkir';

export const ShippingRatesPage = () => {
  const [search, setSearch] = useState('');
  const [weight, setWeight] = useState<number>(1);
  const [selectedResult, setSelectedResult] = useState<ShippingRate | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Filter kota berdasarkan input
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
    
    // Simulasi loading "canggih"
    setTimeout(() => {
      setSelectedResult(rate);
      setIsCalculating(false);
    }, 8000); // 0.8 detik
  };

  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full mb-4"
            >
              <Calculator size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Rate Calculator</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              CEK <span className="text-orange-600">ONGKIR</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Estimasi biaya pengiriman transparan dari Serang ke seluruh kota besar di Indonesia.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Origin (Fixed) */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Dari (Origin)</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-600" size={20} />
                  <input 
                    type="text" 
                    value="Serang, Banten (Head Office)" 
                    disabled
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-slate-900 dark:text-white font-semibold italic cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Weight Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Berat (Kg)</label>
                <div className="relative">
                  <Scale className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-600" size={20} />
                  <input 
                    type="number" 
                    min="1"
                    value={weight}
                    onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-orange-500 rounded-2xl text-slate-900 dark:text-white font-bold transition-all outline-none"
                  />
                </div>
              </div>

              {/* Destination Search */}
              <div className="md:col-span-2 space-y-2 relative">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Tujuan (Destination)</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-600" size={20} />
                  <input 
                    type="text" 
                    placeholder="Masukkan nama kota tujuan..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-orange-500 rounded-2xl text-slate-900 dark:text-white font-bold transition-all outline-none"
                  />
                </div>

                {/* Suggestions Dropdown */}
                <AnimatePresence>
                  {suggestions.length > 0 && !selectedResult && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {suggestions.map((rate, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleCalculate(rate)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-none"
                        >
                          <span className="font-bold text-slate-900 dark:text-white">{rate.destination}</span>
                          <ArrowRight size={16} className="text-orange-500" />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="min-h-[400px]">
            {isCalculating && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mb-4" />
                <p className="text-slate-500 animate-pulse font-medium tracking-widest uppercase text-xs">Menghubungkan ke Server...</p>
              </div>
            )}

            <AnimatePresence>
              {selectedResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-[2px] flex-1 bg-slate-200 dark:bg-slate-800" />
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Hasil Kalkulasi</h2>
                    <div className="h-[2px] flex-1 bg-slate-200 dark:bg-slate-800" />
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { type: 'Reguler', price: selectedResult.reguler, time: '2-3 Hari', icon: Package, color: 'orange' },
                      { type: 'Next Day', price: selectedResult.nextDay, time: '1 Hari', icon: Calculator, color: 'blue' },
                      { type: 'Same Day', price: selectedResult.sameDay, time: '6-8 Jam', icon: Calculator, color: 'green' },
                      { type: 'Kargo', price: selectedResult.cargo, time: '5-7 Hari', icon: Calculator, color: 'purple', isCargo: true },
                    ].map((service, i) => (
                      service.price > 0 && (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl hover:border-orange-500 transition-all group"
                        >
                          <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-${service.color}-500/10 text-${service.color}-500`}>
                            <service.icon size={20} />
                          </div>
                          <h3 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-1">{service.type}</h3>
                          <p className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                            {formatIDR(service.isCargo ? service.price * Math.max(10, weight) : service.price * weight)}
                          </p>
                          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                            <span>{service.time}</span>
                            {service.isCargo && <span>Min 10kg</span>}
                          </div>
                        </motion.div>
                      )
                    ))}
                  </div>

                  {/* Note */}
                  <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800 flex items-start gap-4">
                    <Info className="text-blue-500 shrink-0" size={20} />
                    <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
                      Harga di atas adalah estimasi dasar. Biaya tambahan mungkin berlaku untuk barang pecah belah (packing kayu), asuransi, atau wilayah yang sulit dijangkau. Hubungi CS untuk harga FIX.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
};