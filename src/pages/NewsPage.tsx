import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Section } from '../components/Section';

const articles = [
  {
    id: 1,
    title: "Optimasi Rute Logistik Menggunakan AI: Masa Depan Distribusi",
    excerpt: "Bagaimana integrasi kecerdasan buatan dapat menekan biaya operasional hingga 30% dan mempercepat pengiriman...",
    category: "Technology",
    author: "Budi Santoso",
    date: "12 Feb 2026",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "CV. ULUMUSI Resmikan Hub Baru di Surabaya",
    excerpt: "Ekspansi strategis di Jawa Timur untuk memperkuat layanan last-mile delivery bagi pelaku UMKM lokal...",
    category: "Company News",
    author: "Admin",
    date: "05 Feb 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Tips Mengelola Supply Chain di Musim Hujan",
    excerpt: "Menghadapi tantangan cuaca ekstrem dengan strategi mitigasi resiko logistik yang tepat dan efektif...",
    category: "Logistics Tips",
    author: "Siti Aminah",
    date: "28 Jan 2026",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"
  }
];

export const NewsPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 pt-20">
      <Section className="py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">Wawasan & <br /><span className="text-orange-600">Berita Terkini</span></h1>
            <p className="text-slate-500 dark:text-slate-400">Update terbaru seputar dunia logistik dan CV. ULUMUSI.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari artikel..." 
              className="pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-80"
            />
          </div>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[3rem] overflow-hidden group cursor-pointer mb-20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
          <img 
            src={articles[0].image} 
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Featured"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
            <span className="px-4 py-1.5 rounded-full bg-orange-600 text-white text-xs font-bold uppercase mb-4 inline-block">Featured</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              {articles[0].title}
            </h2>
            <div className="flex items-center gap-6 text-slate-300 text-sm">
              <span className="flex items-center gap-2"><User size={16} /> {articles[0].author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> {articles[0].date}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="rounded-[2.5rem] overflow-hidden mb-6 aspect-video">
                <img 
                  src={article.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={article.title}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest">
                  <Tag size={14} /> {article.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={20} className="text-orange-600" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
};