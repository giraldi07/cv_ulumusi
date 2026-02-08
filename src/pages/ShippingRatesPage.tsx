import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Scale, MapPin, Package, 
  Info, ArrowRight, Truck, Zap, Clock, 
  Box, Globe, ShieldCheck, Sparkles,
  Filter, Star, TrendingUp, MapPinned, Layers,
  DollarSign, AlertCircle,
  X, Navigation, Building2, Users
} from 'lucide-react';
import { Section } from '../components/Section';
import { 
  shippingRates, 
  ShippingRate, 
  getPopularRoutes, 
  getAllProvinces, 
  searchDestination 
} from '../data/ongkir';

type ServiceFilter = 'all' | 'express' | 'sameDay' | 'nextDay' | 'reguler' | 'ekonomis' | 'cargo';

export const ShippingRatesPage = () => {
  const [search, setSearch] = useState('');
  const [weight, setWeight] = useState<number>(1);
  const [selectedResult, setSelectedResult] = useState<ShippingRate | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [compareMode, setCompareMode] = useState(false);
  const [compareList, setCompareList] = useState<ShippingRate[]>([]);

  const provinces = useMemo(() => getAllProvinces(), []);
  const popularRoutes = useMemo(() => getPopularRoutes(), []);

  const suggestions = useMemo(() => {
    if (search.length < 2) return [];
    
    let results = searchDestination(search);
    
    if (selectedProvince !== 'all') {
      results = results.filter(r => r.province === selectedProvince);
    }
    
    return results.slice(0, 10);
  }, [search, selectedProvince]);

  const handleCalculate = (rate: ShippingRate) => {
    setIsCalculating(true);
    setSelectedResult(null);
    setSearch(rate.destination);
    
    setTimeout(() => {
      setSelectedResult(rate);
      setIsCalculating(false);
    }, 1500);
  };

  const addToCompare = (rate: ShippingRate) => {
    if (compareList.length < 3 && !compareList.find(r => r.destination === rate.destination)) {
      setCompareList([...compareList, rate]);
    }
  };

  const removeFromCompare = (destination: string) => {
    setCompareList(compareList.filter(r => r.destination !== destination));
  };

  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getServiceConfig = () => [
    { 
      key: 'express' as const, 
      type: 'Express', 
      icon: Zap, 
      color: 'blue', 
      bg: 'bg-blue-500',
      desc: 'Super Cepat',
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      key: 'sameDay' as const, 
      type: 'Same Day', 
      icon: Clock, 
      color: 'emerald', 
      bg: 'bg-emerald-500',
      desc: 'Hari yang Sama',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    { 
      key: 'nextDay' as const, 
      type: 'Next Day', 
      icon: TrendingUp, 
      color: 'orange', 
      bg: 'bg-orange-500',
      desc: 'Besok Sampai',
      gradient: 'from-orange-500 to-orange-600'
    },
    { 
      key: 'reguler' as const, 
      type: 'Reguler', 
      icon: Package, 
      color: 'violet', 
      bg: 'bg-violet-500',
      desc: 'Handal & Efisien',
      gradient: 'from-violet-500 to-violet-600'
    },
    { 
      key: 'ekonomis' as const, 
      type: 'Ekonomis', 
      icon: DollarSign, 
      color: 'green', 
      bg: 'bg-green-500',
      desc: 'Hemat Budget',
      gradient: 'from-green-500 to-green-600'
    },
    { 
      key: 'cargo' as const, 
      type: 'Cargo', 
      icon: Box, 
      color: 'purple', 
      bg: 'bg-purple-500',
      desc: 'Partai Besar',
      gradient: 'from-purple-500 to-purple-600',
      isCargo: true
    },
    { 
      key: 'cargoTrucking' as const, 
      type: 'Cargo Trucking', 
      icon: Truck, 
      color: 'indigo', 
      bg: 'bg-indigo-500',
      desc: 'Volume Besar',
      gradient: 'from-indigo-500 to-indigo-600',
      isCargo: true
    },
  ];

  return (
    <div className="relative pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden transition-colors duration-500">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-[0.1] invert dark:invert-0" />
      </div>

      <Section>
        <div className="max-w-7xl mx-auto relative z-10 px-4">
          
          {/* --- HEADER SECTION --- */}
          <div className="text-center mb-12 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200/50 dark:border-orange-800/30 rounded-2xl mb-2 backdrop-blur-md"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Smart Pricing Engine v3.0</span>
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
              className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 font-medium"
            >
              Platform estimasi pengiriman terlengkap dari <span className="text-slate-900 dark:text-slate-200 font-bold">Serang</span> ke <span className="text-orange-600 dark:text-orange-400 font-bold">{shippingRates.length}+ kota</span> di seluruh Indonesia dengan tarif real-time.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              {[
                { icon: MapPinned, value: `${shippingRates.length}+`, label: 'Kota Terjangkau' },
                { icon: Package, value: '7', label: 'Layanan Berbeda' },
                { icon: Users, value: '50K+', label: 'Pengguna Aktif' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
                    <stat.icon size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-black text-slate-900 dark:text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- MAIN CALCULATOR CARD --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white dark:border-slate-800/50 mb-10"
          >
            <div className="space-y-6">
              {/* Top Controls */}
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl font-bold text-sm transition-colors"
                >
                  <Filter size={16} />
                  Filter {showFilters ? '▲' : '▼'}
                </button>
                <button
                  onClick={() => setCompareMode(!compareMode)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    compareMode 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Layers size={16} />
                  Bandingkan ({compareList.length}/3)
                </button>
              </div>

              {/* Filters Panel */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid md:grid-cols-2 gap-4 pb-4 border-b border-slate-200 dark:border-slate-800"
                  >
                    <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 block">Filter Provinsi</label>
                      <select
                        value={selectedProvince}
                        onChange={(e) => setSelectedProvince(e.target.value)}
                        className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium text-sm outline-none focus:border-orange-500"
                      >
                        <option value="all">Semua Provinsi</option>
                        {provinces.map(prov => (
                          <option key={prov} value={prov}>{prov}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 block">Filter Layanan</label>
                      <select
                        value={serviceFilter}
                        onChange={(e) => setServiceFilter(e.target.value as ServiceFilter)}
                        className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium text-sm outline-none focus:border-orange-500"
                      >
                        <option value="all">Semua Layanan</option>
                        <option value="express">Express</option>
                        <option value="sameDay">Same Day</option>
                        <option value="nextDay">Next Day</option>
                        <option value="reguler">Reguler</option>
                        <option value="ekonomis">Ekonomis</option>
                        <option value="cargo">Cargo</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Input Row */}
              <div className="grid md:grid-cols-12 gap-6 items-end">
                {/* Origin */}
                <div className="md:col-span-3 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2 ml-2">
                    <MapPin size={12} className="text-orange-500" /> Titik Jemput
                  </label>
                  <div className="p-4 bg-slate-100/50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/50 dark:border-slate-700/30 text-slate-700 dark:text-slate-300 font-bold italic">
                    Serang, Banten
                  </div>
                </div>

                {/* Weight */}
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2 ml-2">
                    <Scale size={12} className="text-orange-500" /> Berat
                  </label>
                  <div className="relative group">
                    <input 
                      type="number" 
                      min="1"
                      max="1000"
                      value={weight}
                      onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full p-4 pl-6 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-orange-500 dark:focus:border-orange-500 rounded-2xl text-slate-900 dark:text-white font-black transition-all outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-slate-400 dark:text-slate-500">KG</span>
                  </div>
                </div>

                {/* Destination */}
                <div className="md:col-span-7 space-y-3 relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2 ml-2">
                    <Globe size={12} className="text-orange-500" /> Kota Tujuan
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Cari kota, provinsi, atau area..."
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
                        className="absolute z-50 w-full mt-2 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl max-h-96 overflow-y-auto"
                      >
                        {suggestions.map((rate, idx) => (
                          <div
                            key={idx}
                            className="group border-b border-slate-100 dark:border-slate-800 last:border-none"
                          >
                            <button
                              onClick={() => handleCalculate(rate)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-all"
                            >
                              <div className="flex-1">
                                <div className="font-bold text-sm flex items-center gap-2">
                                  {rate.destination}
                                  {rate.popularRoute && <Star size={12} className="text-orange-500 group-hover:text-white fill-current" />}
                                </div>
                                <div className="text-xs opacity-70">{rate.province} • {rate.distance} km</div>
                              </div>
                              {compareMode && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addToCompare(rate);
                                  }}
                                  className="ml-4 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 group-hover:bg-white/20 rounded-lg text-xs font-bold"
                                >
                                  + Bandingkan
                                </button>
                              )}
                              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-4" />
                            </button>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compare Panel */}
          <AnimatePresence>
            {compareMode && compareList.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-10 bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-3xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-black text-lg">Perbandingan Kota</h3>
                  <button
                    onClick={() => setCompareList([])}
                    className="text-white/80 hover:text-white text-sm font-bold"
                  >
                    Hapus Semua
                  </button>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {compareList.map((rate, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl text-white">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-black">{rate.destination}</div>
                          <div className="text-xs opacity-80">{rate.distance} km</div>
                        </div>
                        <button
                          onClick={() => removeFromCompare(rate.destination)}
                          className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="space-y-1 text-xs">
                        <div>Express: <span className="font-bold">{formatIDR(rate.services.express.price * weight)}</span></div>
                        <div>Reguler: <span className="font-bold">{formatIDR(rate.services.reguler.price * weight)}</span></div>
                        <div>Ekonomis: <span className="font-bold">{formatIDR(rate.services.ekonomis.price * weight)}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Popular Routes */}
          {!selectedResult && !isCalculating && search.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-6 mb-6">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 whitespace-nowrap flex items-center gap-2">
                  <Star size={14} className="text-orange-500" /> Rute Populer
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularRoutes.slice(0, 8).map((rate, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleCalculate(rate)}
                    className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all text-left shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
                        <Navigation size={18} />
                      </div>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{rate.distance} km</span>
                    </div>
                    <h3 className="font-black text-slate-900 dark:text-white mb-1">{rate.destination}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{rate.province}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-600 dark:text-slate-400">Dari</span>
                      <span className="text-sm font-black text-orange-600 dark:text-orange-400">
                        {formatIDR(rate.services.reguler.price * weight)}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* --- RESULTS AREA --- */}
          <div className="min-h-[400px]">
            {isCalculating && <LoadingState />}

            <AnimatePresence>
              {selectedResult && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 size={24} />
                        <h2 className="text-2xl md:text-3xl font-black">{selectedResult.destination}</h2>
                        {selectedResult.popularRoute && (
                          <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                            ⭐ Populer
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{selectedResult.province}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Navigation size={14} />
                          <span>{selectedResult.distance} km dari Serang</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package size={14} />
                          <span>Berat: {weight} kg</span>
                        </div>
                      </div>
                    </div>
                    {compareMode && !compareList.find(r => r.destination === selectedResult.destination) && (
                      <button
                        onClick={() => addToCompare(selectedResult)}
                        className="px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-white/90 transition-colors"
                      >
                        + Tambah ke Perbandingan
                      </button>
                    )}
                  </div>

                  {/* Coverage Areas */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                      <MapPinned size={14} /> Area Cakupan Pengiriman
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedResult.coverageArea.map((area, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 whitespace-nowrap">
                        Opsi Pengiriman
                      </h2>
                      <div className="h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {getServiceConfig().map((service, i) => {
                        const serviceData = selectedResult.services[service.key];
                        if (!serviceData.available) return null;
                        if (serviceFilter !== 'all' && service.key !== serviceFilter) return null;

                        const finalWeight = service.isCargo 
                          ? Math.max((serviceData as any).minWeight ?? weight, weight) 
                          : weight;

                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-orange-500/50 transition-all overflow-hidden relative"
                          >
                            {/* Decorative Accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-[0.05] dark:opacity-[0.1] rounded-full -translate-y-14 translate-x-14 group-hover:scale-150 transition-transform duration-700`} />
                            
                            <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center ${service.bg} text-white shadow-lg relative z-10`}>
                              <service.icon size={22} />
                            </div>
                            
                            <h3 className="font-black text-slate-900 dark:text-white text-lg mb-1">{service.type}</h3>
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mb-6 uppercase tracking-wider">
                              {service.desc}
                            </p>
                            
                            <div className="space-y-4">
                              <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                                {formatIDR(serviceData.price * finalWeight)}
                              </p>
                              
                              <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-2 text-[10px] font-black text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-3 py-1.5 rounded-xl border border-orange-100 dark:border-orange-500/20">
                                  <Clock size={12} /> {serviceData.etd}
                                </div>
                                
                                {service.isCargo && (
                                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
                                    <Scale size={12} /> Min. {(serviceData as any).minWeight}kg
                                  </div>
                                )}
                                
                                {service.key === 'sameDay' && (serviceData as any).cutoffTime && (
                                  <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-100 dark:border-blue-500/20">
                                    <AlertCircle size={12} /> Cutoff {(serviceData as any).cutoffTime}
                                  </div>
                                )}
                              </div>

                              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                                  <div className="flex justify-between">
                                    <span>Harga per kg:</span>
                                    <span className="font-bold">{formatIDR(serviceData.price)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Total berat:</span>
                                    <span className="font-bold">{finalWeight} kg</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Trust Footer */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-slate-800/50">
                    {[
                      { icon: ShieldCheck, title: 'Asuransi Penuh', text: 'Perlindungan barang hingga 100% nilai deklarasi dengan klaim mudah.' },
                      { icon: Truck, title: 'Real-time Tracking', text: 'Pantau posisi barang Anda setiap detik via aplikasi mobile atau web.' },
                      { icon: Info, title: 'Tarif Transparan', text: 'Harga final tanpa biaya tambahan tersembunyi. Yang tertera = yang dibayar.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h4>
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