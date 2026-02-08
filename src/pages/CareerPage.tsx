import { useRef } from 'react'; // Tambahkan useRef
import { motion, Variants } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';
import { Section } from '../components/Section';

// Import Data dan Types
import { JOBS_DATA, PERKS_DATA } from '../data/careerData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: 'spring', stiffness: 100 } 
  }
};

export const CareerPage = () => {
  // 1. Inisialisasi Ref untuk scroll target
  const jobsSectionRef = useRef<HTMLDivElement>(null);

  // 2. Fungsi untuk handle smooth scroll
  const scrollToJobs = () => {
    jobsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3. Fungsi untuk handle email
  const handleOpenApplication = () => {
    const subject = encodeURIComponent("Open Application - [Nama Anda]");
    const body = encodeURIComponent("Halo Tim HRD ULUMUSI,\n\nSaya tertarik untuk bergabung dengan tim Anda. Terlampir CV dan Portofolio saya.");
    window.location.href = `mailto:cv.ulumusi@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pt-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} /> Join the Revolution
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tighter">
                Bangun Masa Depan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Logistik Nusantara
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-10">
                Kami mencari inovator, pemimpi, dan pelaksana untuk bergabung dalam misi besar kami melakukan transformasi distribusi digital di seluruh penjuru negeri.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* AKSI: Scroll ke area jobs */}
                <button 
                  onClick={scrollToJobs}
                  className="px-8 py-4 bg-slate-900 dark:bg-orange-600 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-orange-600/20"
                >
                  Lihat Posisi <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-medium italic">
                  "Budaya kerja di ULUMUSI sangat fleksibel dan fokus pada hasil nyata."
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </section>

      {/* --- PERKS SECTION --- */}
      <section className="py-24 bg-white dark:bg-slate-900/30">
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Kenapa Bergabung Dengan Kami?</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS_DATA.map((perk, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -10 }} className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
                <div className={`w-16 h-16 rounded-2xl ${perk.color} flex items-center justify-center mb-8`}>
                  <perk.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{perk.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </section>

      {/* --- JOBS SECTION (Diberi Ref) --- */}
      <section 
        ref={jobsSectionRef} 
        className="py-24 relative scroll-mt-20"
      >
        <div className="absolute inset-0 bg-slate-900 dark:bg-slate-950 -skew-y-3 origin-right translate-y-20 -z-10" />
        <Section>
          <h2 className="text-4xl font-black text-white mb-16">Posisi Terbuka</h2>
          <div className="grid gap-6">
            {JOBS_DATA.map((job) => (
              <motion.div key={job.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.01 }} className="group relative p-8 md:p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer shadow-lg overflow-hidden">
                <div className="relative z-10 flex-1 space-y-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-[10px] font-black uppercase">{job.category}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors tracking-tight">{job.role}</h3>
                  <div className="flex flex-wrap gap-6 text-slate-500 text-sm">
                    <span className="flex items-center gap-2"><MapPin size={18} className="text-orange-500"/> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={18} className="text-orange-500"/> {job.type}</span>
                  </div>
                </div>
                <div className="relative z-10 flex items-center gap-8">
                  <div className="text-right hidden md:block">
                    <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Salary Range</p>
                    <p className="text-xl text-slate-900 dark:text-white font-black">{job.salary}</p>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-slate-900 dark:bg-slate-800 group-hover:bg-orange-600 text-white flex items-center justify-center transition-all">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24">
        <Section>
          <div className="relative rounded-[4rem] bg-orange-600 p-12 md:p-24 text-center overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-8">Belum menemukan posisi yang tepat?</h2>
              {/* AKSI: Redirect ke email */}
              <button 
                onClick={handleOpenApplication}
                className="px-10 py-5 bg-white text-orange-600 rounded-2xl font-black text-lg hover:bg-slate-100 active:scale-95 transition-all shadow-xl"
              >
                Kirim Open Application
              </button>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
};