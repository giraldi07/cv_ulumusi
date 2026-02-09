import { useEffect, useState } from 'react'; // Hapus 'React' karena tidak dibaca
import { motion, AnimatePresence, Variants, useSpring, useTransform } from 'framer-motion';
import { Truck, Globe } from 'lucide-react';
import logoUlumusi from '../images/logo-ulumusi.png';

/**
 * --- ANIMATION VARIANTS ---
 */
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1],
      when: "afterChildren" 
    }
  }
};

const childVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  },
};

const BackgroundDecor = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
        rotate: [0, 45, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-orange-500/10 rounded-full blur-[120px] will-change-transform" 
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: [0.1, 0.2, 0.1],
        rotate: [0, -45, 0]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[120px] will-change-transform" 
    />
    <div 
      className="absolute inset-0 opacity-[0.05]" 
      style={{ 
        backgroundImage: `radial-gradient(circle, #9C92AC 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} 
    />
  </div>
);

export const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  const [rawProgress, setRawProgress] = useState(0);
  
  const springProgress = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  // Transform value menjadi integer
  const displayProgress = useTransform(springProgress, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setRawProgress(prev => {
          const next = prev + Math.random() * 15;
          return next > 99 ? 99 : next;
        });
      }, 600);
      return () => clearInterval(interval);
    } else {
      setRawProgress(100);
    }
  }, [isLoading]);

  useEffect(() => {
    springProgress.set(rawProgress);
  }, [rawProgress, springProgress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fdfdfd] dark:bg-[#020617] overflow-hidden"
        >
          <BackgroundDecor />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* LOGO & RADAR SECTION */}
            <div className="relative w-56 h-56 mb-12 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
                  className="absolute inset-0 border border-orange-500/10 rounded-full"
                />
              ))}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-orange-500/20">
                  <Truck size={16} className="text-orange-500" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <div className="relative p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-2xl border border-white/20">
                  <img 
                    src={logoUlumusi} 
                    alt="Logo Ulumusi" 
                    className="w-24 h-24 object-contain drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-orange-500/5 blur-2xl -z-10 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
              >
                <Globe size={220} strokeWidth={1} className="text-slate-900 dark:text-white" />
              </motion.div>
            </div>

            {/* BRAND SECTION */}
            <div className="text-center space-y-6">
              <motion.div variants={childVariants} className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white italic">
                  ULUMUSI<span className="text-orange-500">.</span>
                </h1>
                <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-[0.6em] ml-[0.6em]">
                  Logistics Excellence
                </p>
              </motion.div>

              {/* PROGRESS BAR SECTION */}
              <motion.div 
                variants={childVariants}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative w-72 h-[6px] bg-slate-200 dark:bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    style={{ width: `${rawProgress}%` }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  />
                </div>
                
                <div className="flex items-center gap-4 font-mono">
                   <span className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                    {rawProgress < 100 ? 'Initializing System' : 'Ready to Launch'}
                  </span>
                  <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />
                  
                  {/* FIX: Memasukkan MotionValue ke dalam children motion.span */}
                  <div className="flex text-sm font-bold text-orange-500">
                    <motion.span className="min-w-[3ch]">
                      {displayProgress}
                    </motion.span>
                    <span>%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* BOTTOM DECOR */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 flex flex-col items-center gap-3"
          >
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 h-1 bg-orange-500 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};