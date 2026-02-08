import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Client } from '../data/clients';

interface ClientsCarouselProps {
  clients: Client[];
  autoPlay?: boolean;
  autoPlaySpeed?: number;
}

export const ClientsCarousel = ({
  clients,
  autoPlay = true,
  autoPlaySpeed = 4500, // Nilai default dari HomePage (ms)
}: ClientsCarouselProps) => {
  // Kita pakai 3x duplikasi supaya loopnya tidak pernah putus di layar lebar (Ultra-wide)
  const extendedClients = useMemo(() => [...clients, ...clients, ...clients], [clients]);

  // Perbaikan Logika Kecepatan:
  // Kita konversi 4500ms menjadi durasi detik yang masuk akal untuk geser 1/3 bagian
  const duration = useMemo(() => {
    return autoPlaySpeed > 100 ? autoPlaySpeed / 150 : autoPlaySpeed; 
    // Jika input 4500, maka durasi jadi 30 detik (pas untuk kecepatan smooth)
  }, [autoPlaySpeed]);

  return (
    <div className="w-full overflow-hidden group">
      <div 
        className="relative flex overflow-hidden py-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <motion.div
          className="flex flex-nowrap gap-6 md:gap-10 items-center"
          animate={autoPlay ? { x: ['0%', '-33.333%'] } : { x: 0 }}
          transition={
            autoPlay 
              ? { 
                  repeat: Infinity, 
                  ease: 'linear', 
                  duration: duration,
                  repeatType: 'loop' 
                } 
              : {}
          }
          style={{ width: 'max-content' }}
        >
          {extendedClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center group/item"
            >
              <div className="
                w-36 h-16       /* Ukuran Mobile */
                md:w-52 md:h-24 /* Ukuran Desktop */
                px-4 py-3 md:px-8 md:py-6
                bg-white/50 dark:bg-slate-900/40 
                backdrop-blur-sm
                border border-slate-200/50 dark:border-slate-800/50 
                rounded-2xl 
                flex items-center justify-center
                transition-all duration-500
                hover:border-orange-500/40 hover:bg-white dark:hover:bg-slate-800
                hover:shadow-xl hover:shadow-orange-500/5
                hover:-translate-y-1
              "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="
                    max-w-full max-h-full 
                    object-contain 
                    filter grayscale opacity-60 
                    group-hover/item:grayscale-0 group-hover/item:opacity-100 
                    transition-all duration-500
                  "
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};