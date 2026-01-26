import { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  link = '#'
}: ServiceCardProps) => (
  <div className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
    <div className="relative z-10">
      <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-orange-600/30 group-hover:rotate-6 transition-transform">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-orange-600 dark:text-orange-400 mt-4 font-medium hover:gap-2 transition-all"
      >
        Selengkapnya <ChevronRight size={16} className="ml-1" />
      </a>
    </div>
  </div>
);
