import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, CheckCircle2, Calendar, Truck, 
  X, Package, ShieldCheck, Clock, MapIcon, 
  ChevronRight, ArrowDown, Copy, Share2, AlertCircle
} from 'lucide-react';
import { Shipment, STATUS_DETAILS, SERVICE_TYPES } from '../types/shipment';

interface TrackingResultProps {
  shipment: Shipment;
  onClose: () => void;
}

export const TrackingResult = ({ shipment, onClose }: TrackingResultProps) => {
  const statusDetail = STATUS_DETAILS[shipment.status];
  const serviceDetail = SERVICE_TYPES[shipment.serviceType];
  const sortedHistory = [...shipment.trackingHistory].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const calculateProgress = () => {
    const statusOrder = ['pending', 'picked-up', 'in-transit', 'in-delivery', 'delivered'];
    const currentStatusIndex = statusOrder.indexOf(shipment.status);
    return ((currentStatusIndex + 1) / statusOrder.length) * 100;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-50 flex items-center justify-center p-0 md:p-4"
    >
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[100dvh] md:h-auto md:max-h-[90vh] md:rounded-[3rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border border-white/10"
      >
        {/* --- DYNAMIC HERO HEADER --- */}
        <div className="relative bg-slate-900 p-8 md:p-12 text-white overflow-hidden shrink-0">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-orange-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                  {serviceDetail.label}
                </span>
                <span className="text-slate-400 text-xs font-medium">Est. Tiba: {new Date(shipment.estimatedDelivery).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter flex items-center gap-4">
                {shipment.resiNumber}
                <button className="p-2 hover:bg-white/10 rounded-xl transition-all active:scale-90" onClick={() => navigator.clipboard.writeText(shipment.resiNumber)}>
                  <Copy size={20} className="text-slate-400" />
                </button>
              </h2>
            </div>
            
            <div className="flex gap-3">
              <button className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10">
                <Share2 size={20} />
              </button>
              <button onClick={onClose} className="p-4 bg-orange-600 hover:bg-orange-700 rounded-2xl transition-all shadow-lg shadow-orange-600/20">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* --- SMART TRACKER BAR --- */}
          <div className="relative mt-12 mb-4">
            <div className="absolute inset-0 flex items-center justify-between px-2">
              {['pending', 'picked-up', 'in-transit', 'in-delivery', 'delivered'].map((s, i) => (
                <div key={i} className={`w-3 h-3 rounded-full border-2 z-10 transition-all duration-700 ${i <= ['pending', 'picked-up', 'in-transit', 'in-delivery', 'delivered'].indexOf(shipment.status) ? 'bg-orange-500 border-orange-500 shadow-[0_0_10px_#ea580c]' : 'bg-slate-800 border-slate-700'}`} />
              ))}
            </div>
            <div className="h-[2px] w-full bg-slate-800 rounded-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${calculateProgress()}%` }}
                className="h-full bg-orange-500 shadow-[0_0_15px_#ea580c]"
              />
            </div>
            {/* Animated Truck Icon */}
            <motion.div 
              animate={{ left: `${calculateProgress()}%` }}
              className="absolute top-[-25px] -translate-x-1/2 transition-all duration-1000"
            >
              <div className="bg-orange-600 p-2 rounded-lg shadow-xl border-2 border-slate-900">
                <Truck size={16} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12 bg-slate-50 dark:bg-slate-950">
          
          {/* Status highlight card */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-5xl">
                {statusDetail.icon}
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full" 
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h4 className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-1">Kondisi Paket</h4>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                {statusDetail.label}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
                Update terakhir di <span className="text-slate-900 dark:text-white underline decoration-orange-500 underline-offset-4">{sortedHistory[0].location}</span>
              </p>
            </div>
            <div className="w-full md:w-auto p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl">
               <div className="flex items-center gap-3 text-orange-600 mb-2">
                  <Clock size={18} />
                  <span className="font-bold text-sm">Waktu Lokal</span>
               </div>
               <p className="text-xl font-black dark:text-white">14:30 <span className="text-sm font-normal text-slate-400">WIB</span></p>
            </div>
          </section>

          {/* Details Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Sender & Receiver Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Origin</p>
                  <p className="font-bold dark:text-white">{shipment.sender.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{shipment.sender.address}, {shipment.sender.city}</p>
                </div>
              </div>
              
              <div className="relative pl-5 border-l-2 border-dashed border-slate-200 dark:border-slate-800 py-2 ml-5">
                <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 p-1">
                  <ArrowDown size={14} className="text-slate-300" />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Destination</p>
                  <p className="font-bold dark:text-white">{shipment.receiver.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{shipment.receiver.address}, {shipment.receiver.city}</p>
                </div>
              </div>
            </div>

            {/* Package Specs */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Kategori', value: shipment.content, icon: Package, color: 'text-purple-500' },
                { label: 'Berat Total', value: `${shipment.weight} KG`, icon: ScaleIcon, color: 'text-blue-500' },
                { label: 'Layanan', value: serviceDetail.label, icon: Truck, color: 'text-orange-500' },
                { label: 'Proteksi', value: shipment.insurancePrice ? 'Asuransi Aktif' : 'Standar', icon: ShieldCheck, color: 'text-green-500' },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                  <item.icon className={`${item.color} mb-3`} size={24} />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm font-bold dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Riwayat Pengiriman</h4>
              <span className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 tracking-widest">{sortedHistory.length} POIN TRACKING</span>
            </div>

            <div className="space-y-4">
              {sortedHistory.map((event, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={event.id} 
                  className={`group relative flex gap-6 p-6 rounded-[2rem] transition-all ${index === 0 ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/20' : 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-orange-200'}`}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${index === 0 ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                      {index === 0 ? <Truck size={20} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <p className={`text-xs font-bold uppercase tracking-widest ${index === 0 ? 'text-orange-100' : 'text-orange-600'}`}>
                        {event.city}
                      </p>
                      <time className={`text-[10px] font-medium ${index === 0 ? 'text-orange-100' : 'text-slate-400'}`}>
                        {new Date(event.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} • {new Date(event.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                      </time>
                    </div>
                    <p className={`font-bold text-lg leading-tight ${index === 0 ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {event.description}
                    </p>
                    {event.note && (
                      <p className={`text-sm mt-2 flex items-center gap-2 ${index === 0 ? 'text-orange-100/80' : 'text-slate-500'}`}>
                        <AlertCircle size={14} /> {event.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* --- FOOTER ACTION --- */}
        <div className="p-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6 shrink-0">
          <div className="flex items-center gap-4">
             <div className="flex -space-x-3">
                {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200" />)}
             </div>
             <p className="text-xs text-slate-500 font-medium">Tim Ulu Musi siap membantu operasional pengiriman Anda.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto md:ml-auto">
            <button className="flex-1 md:flex-none px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95">
              Butuh Bantuan?
            </button>
            <button className="flex-1 md:flex-none px-10 py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 shadow-lg shadow-orange-600/30 transition-all active:scale-95">
              Cetak Label
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Helper icon
const ScaleIcon = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
)