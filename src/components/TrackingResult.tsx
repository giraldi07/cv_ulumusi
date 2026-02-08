import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  MapPin, CheckCircle2, Truck, X, Package, 
  ShieldCheck, Clock, Copy, Share2, AlertCircle, 
  Check, ChevronRight, Box
} from 'lucide-react';
import { Shipment, STATUS_DETAILS, SERVICE_TYPES } from '../types/shipment';

// --- ANIMATION VARIANTS ---
const modalVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const contentVariants: Variants = {
  hidden: { y: '100%', opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 300, staggerChildren: 0.1 } as any
  },
  exit: { y: '100%', opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } as any }
};

interface TrackingResultProps {
  shipment: Shipment;
  onClose: () => void;
}

export const TrackingResult = ({ shipment, onClose }: TrackingResultProps) => {
  const [copied, setCopied] = useState(false);
  const statusDetail = STATUS_DETAILS[shipment.status];
  const serviceDetail = SERVICE_TYPES[shipment.serviceType];
  
  // Sort history terbaru paling atas
  const sortedHistory = [...shipment.trackingHistory].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(shipment.resiNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const calculateProgress = () => {
    const statusOrder = ['pending', 'picked-up', 'in-transit', 'in-delivery', 'delivered'];
    const currentStatusIndex = statusOrder.indexOf(shipment.status);
    return Math.max(5, ((currentStatusIndex + 1) / statusOrder.length) * 100);
  };

  return (
    <AnimatePresence>
      <motion.div 
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-50 flex items-end md:items-center justify-center sm:p-4"
      >
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-slate-50 dark:bg-slate-900 w-full max-w-5xl h-[92vh] md:h-[85vh] rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative"
        >
          {/* --- HEADER SECTION (Glassmorphic Gradient) --- */}
          <div className="relative bg-slate-900 text-white shrink-0 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

            <div className="relative z-10 p-6 md:p-10 pb-16 md:pb-20">
              {/* Top Navigation */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-orange-400">
                      {serviceDetail.label}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">
                      Est. {new Date(shipment.estimatedDelivery).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <div className="group flex items-center gap-3 cursor-pointer" onClick={handleCopy}>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
                      {shipment.resiNumber}
                    </h2>
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
                      {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-slate-400 group-hover:text-white" />}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
                    <Share2 size={18} />
                  </button>
                  <button onClick={onClose} className="p-3 bg-orange-600 hover:bg-orange-500 rounded-xl transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Progress Bar (Desktop & Mobile Optimized) */}
              <div className="relative mt-8">
                {/* Track Line */}
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${calculateProgress()}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 shadow-[0_0_15px_#f59e0b]"
                  />
                </div>
                
                {/* Dots & Labels */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-[1%]">
                  {['pending', 'picked-up', 'in-transit', 'in-delivery', 'delivered'].map((s, i) => {
                     const isCompleted = i <= ['pending', 'picked-up', 'in-transit', 'in-delivery', 'delivered'].indexOf(shipment.status);
                     return (
                      <div key={i} className="flex flex-col items-center gap-3 group">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.2 }}
                          className={`w-4 h-4 rounded-full border-[3px] z-10 transition-all duration-500 ${
                            isCompleted ? 'bg-slate-900 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)] scale-110' : 'bg-slate-900 border-slate-700'
                          }`}
                        />
                        <span className={`hidden md:block text-[10px] font-bold uppercase tracking-widest absolute top-6 transition-colors ${
                          isCompleted ? 'text-orange-400' : 'text-slate-600'
                        }`}>
                          {s.replace('-', ' ')}
                        </span>
                      </div>
                     )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* --- SCROLLABLE CONTENT --- */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-50 dark:bg-slate-950/50 relative -mt-6 rounded-t-[2rem] z-20">
             <div className="p-6 md:p-10 space-y-8 max-w-6xl mx-auto">
              
              {/* 1. Status Hero Card */}
              <motion.section variants={itemVariants} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-4xl md:text-5xl text-orange-600">
                    {statusDetail.icon}
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full shadow-lg shadow-green-500/40" 
                  />
                </div>
                
                <div className="text-center md:text-left flex-1 z-10">
                  <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Status Terkini</h4>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    {statusDetail.label}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1.5 font-medium">
                    Posisi: <span className="text-slate-900 dark:text-slate-200 font-bold">{sortedHistory[0].location}</span>
                  </p>
                </div>

                <div className="w-full md:w-auto p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex items-center justify-between md:flex-col md:items-end gap-1">
                   <div className="flex items-center gap-2 text-orange-600">
                      <Clock size={16} />
                      <span className="font-bold text-xs uppercase tracking-wider">Update</span>
                   </div>
                   <div className="text-right">
                      <p className="text-lg font-black text-slate-900 dark:text-white">
                        {new Date(sortedHistory[0].timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400">
                        {new Date(sortedHistory[0].timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                      </p>
                   </div>
                </div>
              </motion.section>

              {/* 2. Bento Grid Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Route Card (Spans 2 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    {/* Origin */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                         <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center"><MapPin size={16}/></div>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pengirim</p>
                      </div>
                      <p className="font-bold text-lg dark:text-white leading-tight">{shipment.sender.name}</p>
                      <p className="text-sm text-slate-500 mt-1">{shipment.sender.city}</p>
                    </div>

                    {/* Connector Visual (Mobile: Vertical, Desktop: Horizontal) */}
                    <div className="hidden md:flex flex-col items-center justify-center px-4 opacity-50">
                      <div className="w-full h-[2px] border-t-2 border-dashed border-slate-300 dark:border-slate-700 w-32 relative">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 p-1">
                            <Truck size={16} className="text-slate-400"/>
                         </div>
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="flex-1 md:text-right">
                       <div className="flex items-center md:justify-end gap-3 mb-3">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest order-2 md:order-1">Penerima</p>
                         <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center order-1 md:order-2"><CheckCircle2 size={16}/></div>
                      </div>
                      <p className="font-bold text-lg dark:text-white leading-tight">{shipment.receiver.name}</p>
                      <p className="text-sm text-slate-500 mt-1">{shipment.receiver.city}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Specs Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
                  <SpecCard icon={Package} label="Isi Paket" value={shipment.content} color="text-purple-500" />
                  <SpecCard icon={Box} label="Berat" value={`${shipment.weight} Kg`} color="text-blue-500" />
                  <SpecCard icon={ShieldCheck} label="Asuransi" value={shipment.insurancePrice ? 'Aktif' : 'Tidak'} color="text-green-500" />
                  <SpecCard icon={Truck} label="Layanan" value={serviceDetail.label} color="text-orange-500" />
                </motion.div>
              </div>

              {/* 3. Timeline */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-4 mb-6">
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">RIWAYAT PERJALANAN</h4>
                  <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                </div>

                <div className="relative pl-4 space-y-0">
                  {/* Vertical Line */}
                  <div className="absolute top-4 bottom-4 left-[27px] w-[2px] bg-slate-200 dark:bg-slate-800" />
                  
                  {sortedHistory.map((event, index) => (
                    <div key={index} className="relative pl-12 pb-8 group last:pb-0">
                      {/* Dot Indicator */}
                      <div className={`absolute left-0 top-0 w-[56px] flex justify-center`}>
                        <div className={`w-3.5 h-3.5 rounded-full border-[3px] z-10 transition-all ${
                          index === 0 
                            ? 'bg-orange-600 border-white dark:border-slate-900 shadow-[0_0_0_4px_rgba(234,88,12,0.2)]' 
                            : 'bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900'
                        }`} />
                      </div>

                      {/* Content Card */}
                      <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                        index === 0 
                        ? 'bg-white dark:bg-slate-800 border-orange-200 dark:border-orange-900/30 shadow-lg shadow-orange-500/5' 
                        : 'bg-transparent border-transparent hover:bg-white hover:dark:bg-slate-900 hover:border-slate-200 hover:dark:border-slate-800'
                      }`}>
                         <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                           <p className={`font-bold text-sm uppercase tracking-wide ${index === 0 ? 'text-orange-600' : 'text-slate-500'}`}>
                             {event.city}
                           </p>
                           <time className="text-[11px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md self-start md:self-auto">
                             {new Date(event.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} • {new Date(event.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                           </time>
                         </div>
                         <p className={`text-base font-bold leading-snug ${index === 0 ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                           {event.description}
                         </p>
                         {event.note && (
                           <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium">
                             <AlertCircle size={12} />
                             {event.note}
                           </div>
                         )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

             </div>
          </div>

          {/* --- FOOTER (Call to Action) --- */}
          <div className="p-4 md:p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0 z-30">
            <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
               <span>Unduh Bukti Pengiriman</span>
               <ChevronRight size={16} />
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- SUB-COMPONENT ---
const SpecCard = ({ icon: Icon, label, value, color }: any) => (
  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center items-start shadow-sm hover:shadow-md transition-shadow">
    <Icon className={`${color} mb-2`} size={20} />
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
    <p className="text-sm font-bold text-slate-800 dark:text-white truncate w-full">{value}</p>
  </div>
);