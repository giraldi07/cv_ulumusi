import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Box, Truck, Globe, LucideIcon } from 'lucide-react';

/**
 * --- ANIMATION VARIANTS ---
 */
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 } 
  },
  exit: {
    opacity: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1], // Custom Cubic Bezier untuk kesan premium
      when: "afterChildren" 
    }
  }
};

const childVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

/**
 * --- SUB-COMPONENTS ---
 */
const BackgroundDecor = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Ambient Glows - Dioptimalkan dengan GPU acceleration */}
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-orange-500/10 rounded-full blur-[100px] will-change-transform" 
    />
    <motion.div 
      animate={{ 
        scale: [1.1, 1, 1.1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[100px] will-change-transform" 
    />
    
    {/* Tech Grid Pattern */}
    <div 
      className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
      style={{ 
        backgroundImage: `radial-gradient(#9C92AC 0.5px, transparent 0.5px)`,
        backgroundSize: '24px 24px'
      }} 
    />
  </div>
);

export const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  const [counter, setCounter] = useState(0);

  // Simulasi progress angka untuk kesan "System Loading"
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setCounter(prev => (prev < 99 ? prev + 1 : 99));
      }, 30);
      return () => clearInterval(interval);
    } else {
      setCounter(100);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] selection:bg-orange-500/30"
        >
          <BackgroundDecor />

          {/* --- MAIN CONTENT --- */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* RADAR & ICON SECTION */}
            <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
              {/* Radar Pulses */}
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 1, ease: "circOut" }}
                  className="absolute inset-0 border border-orange-500/20 rounded-full"
                />
              ))}

              {/* Spinning Orbit */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[0.5px] border-dashed border-slate-300 dark:border-slate-700 rounded-full"
              />

              {/* Delivery Truck Tracker */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-white dark:bg-slate-900 p-2 rounded-xl shadow-xl border border-orange-500/20"
                  >
                    <Truck size={18} className="text-orange-500 fill-orange-500/10" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Center Core */}
              <div className="relative group">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center opacity-20"
                >
                  <Globe size={90} className="text-slate-400" strokeWidth={0.5} />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
                >
                  <Box size={56} className="text-slate-800 dark:text-white" strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            {/* TEXT SECTION */}
            <div className="text-center space-y-3 px-6">
              <motion.div variants={childVariants} className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-black tracking-[0.3em] text-slate-800 dark:text-white uppercase">
                  CV. <span className="text-orange-500">ULUMUSI</span>
                </h1>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">
                    Logistics & Supply Chain
                  </p>
                  <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
                </div>
              </motion.div>

              {/* PROGRESS BAR SECTION */}
              <motion.div 
                variants={childVariants}
                className="pt-6 flex flex-col items-center gap-3"
              >
                <div className="relative w-64 h-[4px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${counter}%` }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-400 to-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                  />
                </div>
                
                <div className="flex justify-between w-64 px-1">
                  <span className="text-[9px] font-mono text-slate-400 animate-pulse">
                    {counter < 100 ? 'PROCESSING_CORE...' : 'SYSTEM_READY'}
                  </span>
                  <span className="text-[9px] font-mono text-orange-500 font-bold">
                    {counter}%
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* FOOTER INFO */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 text-center"
          >
            <p className="text-[10px] font-mono text-slate-400/60 dark:text-slate-600 tracking-widest uppercase">
              Secure Connection Established
            </p>
            <div className="mt-2 flex justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
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