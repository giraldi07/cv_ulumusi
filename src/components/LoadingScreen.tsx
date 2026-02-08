import { motion, AnimatePresence } from 'framer-motion';
import { Box, Truck } from 'lucide-react';

export const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 dark:bg-slate-950 overflow-hidden"
        >
          {/* --- BACKGROUND DECORATION --- */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* LOGO ANIMATION AREA */}
            <div className="relative w-32 h-32 mb-12">
              {/* Outer Orbit Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-slate-300 dark:border-slate-700 rounded-full"
              />
              
              {/* Pulsing Core */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-4 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-xl"
              />

              {/* Moving Delivery Truck on Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 bg-white dark:bg-slate-900 shadow-xl rounded-lg border border-slate-100 dark:border-slate-800">
                  <Truck size={16} className="text-orange-600" />
                </div>
              </motion.div>

              {/* Central Package Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Box size={44} className="text-slate-900 dark:text-white" strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            {/* BRANDING TEXT */}
            <div className="text-center space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-2xl font-black tracking-[0.3em] text-slate-900 dark:text-white uppercase">
                  CV. ULUMUSI
                </h1>
                <div className="h-0.5 w-12 bg-orange-500 mt-1 rounded-full" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] pl-2"
              >
                Connecting Nations
              </motion.p>
            </div>

            {/* PROGRESS BAR (MODERN REPLACEMENT FOR DOTS) */}
            <div className="mt-10 w-48 h-[2px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              />
            </div>
          </div>
          
          {/* VERSION TAG */}
          <div className="absolute bottom-8 text-[9px] font-mono text-slate-300 dark:text-slate-800 tracking-tighter">
            SYS-V.2.0.6 // STABLE_READY
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};