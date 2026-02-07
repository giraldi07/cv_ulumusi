import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Client } from '../data/clients';

interface ClientsCarouselProps {
  clients: Client[];
  autoPlay?: boolean;
  autoPlaySpeed?: number; // used to influence duration
}

export const ClientsCarousel = ({
  clients,
  autoPlay = true,
  autoPlaySpeed = 4500,
}: ClientsCarouselProps) => {
  const extended = useMemo(() => [...clients, ...clients], [clients]);

  const duration = useMemo(() => {
    const base = Math.max(12, Math.round((clients.length || 6) * 1.6));
    const speedFactor = Math.max(1, Math.round(autoPlaySpeed / 2000));
    return base * speedFactor;
  }, [clients.length, autoPlaySpeed]);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative py-6">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-slate-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-slate-900 to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6 items-center"
          style={{ width: 'max-content' }}
          animate={autoPlay ? { x: ['0%', '-50%'] } : { x: 0 }}
          transition={autoPlay ? { repeat: Infinity, ease: 'linear', duration } : {}}
        >
          {extended.map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center px-3 md:px-4">
              <div className="w-32 h-14 sm:w-36 sm:h-16 md:w-44 md:h-18 lg:w-56 lg:h-20 rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain p-1 md:p-2 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.objectFit = 'cover';
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
