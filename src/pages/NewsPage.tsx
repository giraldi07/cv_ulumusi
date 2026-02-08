import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Section } from '../components/Section';
import { useNavigation } from '../contexts/NavigationContext'; // Import context
import { newsArticles } from '../data/newsData'; // Import data terpisah

export const NewsPage = () => {
  const { setCurrentPage } = useNavigation(); // Ambil fungsi navigasi

  const handleArticleClick = (id: number) => {
    setCurrentPage('news-detail'); // Pindah halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 pt-20">
      <Section className="py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
              Wawasan & <br /><span className="text-orange-600">Berita Terkini</span>
            </h1>
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

        {/* Featured Post (Artikel Pertama di Data) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => handleArticleClick(newsArticles[0].id)}
          className="relative rounded-[3rem] overflow-hidden group cursor-pointer mb-20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
          <img 
            src={newsArticles[0].image} 
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Featured"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
            <span className="px-4 py-1.5 rounded-full bg-orange-600 text-white text-xs font-bold uppercase mb-4 inline-block">Featured</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              {newsArticles[0].title}
            </h2>
            <div className="flex items-center gap-6 text-slate-300 text-sm">
              <span className="flex items-center gap-2"><User size={16} /> {newsArticles[0].author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> {newsArticles[0].date}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article, i) => ( // Start dari index 1 karena index 0 jadi Featured
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleArticleClick(article.id)}
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
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
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