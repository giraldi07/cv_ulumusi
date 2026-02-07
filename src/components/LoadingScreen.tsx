import { Package } from 'lucide-react';

export const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 z-50 flex items-center justify-center">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Animated Package Icon */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Background Circle */}
          <div className="absolute inset-0 border-4 border-transparent border-t-orange-600 border-r-orange-600 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-red-600 rounded-full animate-spin-reverse"></div>

          {/* Package Icon */}
          <Package size={40} className="text-orange-600 dark:text-orange-500 relative z-10" />
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            CV. ULUMUSI
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 tracking-wider">
            Mempersiapkan pengalaman terbaik
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
      `}</style>
    </div>
  );
};
