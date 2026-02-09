import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, ShieldCheck, ArrowRight, Globe, Zap } from 'lucide-react';
import logo from '../images/logo-ulumusi.png';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1], 
      staggerChildren: 0.08, 
      delayChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    y: 20,
    transition: { duration: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4 } 
  }
};

export const WelcomePopup = ({ isOpen, onClose }: WelcomePopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-4 overflow-hidden">
          {/* Overlay - Smoother Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Main Card - Ukuran disesuaikan (max-w-sm ke md) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-[400px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            {/* Ambient Background Glow - Diperkecil supaya gak norak */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#AB1F24]/10 rounded-full blur-3xl" />
            
            {/* Close Button - Lebih kecil & sleek */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20 text-slate-400 hover:text-[#AB1F24]"
            >
              <X size={20} />
            </button>

            <div className="relative p-8 md:p-10 flex flex-col items-center">
              
              {/* Logo - Ukuran lebih proporsional */}
              <motion.div variants={itemVariants} className="mb-6">
                <img 
                  src={logo} 
                  alt="Logo Ulumusi" 
                  className="h-14 w-auto object-contain" 
                />
              </motion.div>

              {/* Text Header */}
              <motion.div variants={itemVariants} className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  Welcome to <br/>
                  <span className="text-[#AB1F24]">CV. ULUMUSI</span>
                </h2>
                <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  Solusi pengiriman profesional untuk ekspansi bisnis Anda.
                </p>
              </motion.div>

              {/* Feature Grid - Lebih rapet & mobile friendly */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 w-full mb-8">
                <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <ShieldCheck size={20} className="text-[#AB1F24]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Secure</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <Zap size={20} className="text-[#AB1F24]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Fast</span>
                </div>
              </motion.div>

              {/* CTA Button - Tetap bold tapi gak over-height */}
              <motion.button
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full py-4 bg-[#AB1F24] hover:bg-[#8e1a1e] text-white font-bold rounded-2xl shadow-lg shadow-red-900/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Eksplorasi Sekarang</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.div variants={itemVariants} className="mt-6 flex items-center gap-2 text-slate-400">
                <Globe size={12} />
                <span className="text-[10px] font-medium tracking-wide italic">Trusted Logistics Partner</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};