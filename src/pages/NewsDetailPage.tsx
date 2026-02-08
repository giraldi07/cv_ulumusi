import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Tag, Clock, ChevronRight, Facebook, Twitter, Link2 } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { newsArticles } from '../data/newsData';
import { Section } from '../components/Section';

export const NewsDetailPage = ({ articleId }: { articleId: number }) => {
  const { setCurrentPage, setNewsDetailId } = useNavigation();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const article = newsArticles.find(a => a.id === articleId) || newsArticles[0];
  const relatedArticles = newsArticles.filter(a => a.id !== articleId).slice(0, 3);

  const handleSwitchArticle = (id: number) => {
    setNewsDetailId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen">
      {/* progress bar premium */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Spacer untuk header */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section dengan Parallax Effect */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-50 dark:to-slate-950 z-10" />
          <img src={article.image} className="w-full h-full object-cover" alt={article.title} />
        </motion.div>

        <Section className="relative z-20 h-full flex flex-col justify-end pb-12">
          <div className="max-w-4xl">
            <motion.button 
              onClick={() => setCurrentPage('news')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group flex items-center gap-2 text-white/90 hover:text-orange-400 mb-8 w-fit transition-all bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
              <span className="text-sm font-bold tracking-wide">Kembali ke Berita</span>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <span className="px-4 py-1.5 bg-orange-600 text-white rounded-lg text-xs font-black uppercase tracking-[0.2em]">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 text-slate-200 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-600 p-[2px]">
                    <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center font-black text-white text-xl">
                      {article.author[0]}
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-black text-base">{article.author}</p>
                    <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">{article.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <Calendar size={16} className="text-orange-500" />
                    <span className="text-sm font-medium">{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <Clock size={16} className="text-orange-500" />
                    <span className="text-sm font-medium">{article.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Main Content Area */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Social Share Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] [writing-mode:vertical-lr] mb-4">Bagikan</span>
              <button className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm text-slate-700 dark:text-slate-300"><Facebook size={18}/></button>
              <button className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm text-slate-700 dark:text-slate-300"><Twitter size={18}/></button>
              <button className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm text-slate-700 dark:text-slate-300"><Link2 size={18}/></button>
            </div>
          </div>

          {/* Article Body */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50">
              <article 
                className="
                  prose prose-lg md:prose-xl max-w-none
                  [&>*]:text-slate-700 dark:[&>*]:text-slate-300
                  [&>h1]:text-slate-900 dark:[&>h1]:text-white [&>h1]:font-black [&>h1]:tracking-tight
                  [&>h2]:text-slate-900 dark:[&>h2]:text-white [&>h2]:font-black [&>h2]:tracking-tight
                  [&>h3]:text-slate-900 dark:[&>h3]:text-white [&>h3]:font-black [&>h3]:tracking-tight
                  [&>h4]:text-slate-900 dark:[&>h4]:text-white [&>h4]:font-black [&>h4]:tracking-tight
                  [&>h5]:text-slate-900 dark:[&>h5]:text-white [&>h5]:font-black
                  [&>h6]:text-slate-900 dark:[&>h6]:text-white [&>h6]:font-black
                  [&>p]:text-slate-700 dark:[&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-6
                  [&>ul]:text-slate-700 dark:[&>ul]:text-slate-300 [&>ul>li]:text-slate-700 dark:[&>ul>li]:text-slate-300
                  [&>ol]:text-slate-700 dark:[&>ol]:text-slate-300 [&>ol>li]:text-slate-700 dark:[&>ol>li]:text-slate-300
                  [&>strong]:text-slate-900 dark:[&>strong]:text-white [&>strong]:font-bold
                  [&>em]:text-slate-700 dark:[&>em]:text-slate-300
                  [&>a]:text-orange-600 dark:[&>a]:text-orange-400 [&>a]:no-underline hover:[&>a]:underline
                  [&>blockquote]:border-l-4 [&>blockquote]:border-orange-500 [&>blockquote]:bg-slate-50 dark:[&>blockquote]:bg-slate-800/50 [&>blockquote]:p-8 [&>blockquote]:rounded-2xl [&>blockquote]:not-italic [&>blockquote]:font-medium [&>blockquote]:text-slate-700 dark:[&>blockquote]:text-slate-300
                  [&>code]:text-orange-600 dark:[&>code]:text-orange-400 [&>code]:bg-slate-100 dark:[&>code]:bg-slate-800 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm
                  [&>pre]:bg-slate-100 dark:[&>pre]:bg-slate-800 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto
                  [&>pre>code]:text-slate-700 dark:[&>pre>code]:text-slate-300 [&>pre>code]:bg-transparent
                  [&>img]:rounded-2xl [&>img]:shadow-lg [&>img]:my-8
                  [&_p>strong]:text-slate-900 dark:[&_p>strong]:text-white
                  [&_li>strong]:text-slate-900 dark:[&_li>strong]:text-white
                  [&_blockquote>p]:text-slate-700 dark:[&_blockquote>p]:text-slate-300
                "
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
              
              <div className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-3">
                  {article.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-2xl text-xs font-black text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer capitalize">
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Box Mobile */}
            <div className="mt-10 p-8 rounded-[2.5rem] bg-orange-600 text-white flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-black">
                {article.author[0]}
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-black">Ditulis oleh {article.author}</h4>
                <p className="opacity-90 leading-relaxed mt-2 text-sm italic">Berdedikasi untuk memberikan informasi logistik paling akurat dan terkini untuk kemajuan ekosistem distribusi di Indonesia.</p>
              </div>
            </div>
          </div>

          {/* Sidebar Right - Trending/Related */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 space-y-10">
              <div className="relative">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  Trending <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                </h4>
                <div className="space-y-8">
                  {relatedArticles.map(item => (
                    <motion.div 
                      key={item.id} 
                      whileHover={{ x: 5 }}
                      className="group cursor-pointer flex flex-col gap-3"
                      onClick={() => handleSwitchArticle(item.id)}
                    >
                      <div className="overflow-hidden rounded-2xl h-32">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{item.category}</span>
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h5>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase">
                          <span>{item.date}</span>
                          <ChevronRight size={12} className="text-orange-600" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter Small Card */}
              <div className="p-6 rounded-[2rem] bg-slate-900 dark:bg-orange-600 text-white space-y-4 shadow-2xl shadow-orange-500/20">
                <h5 className="font-black text-lg leading-tight">Jangan Lewatkan Berita Kami</h5>
                <p className="text-xs opacity-80 leading-relaxed">Dapatkan update mingguan seputar logistik langsung ke email Anda.</p>
                <input type="email" placeholder="Email Anda" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
                <button className="w-full bg-white text-slate-900 font-black py-2 rounded-xl text-sm hover:bg-slate-100 transition-colors">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};