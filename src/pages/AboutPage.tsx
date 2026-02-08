import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Users2, 
  Globe2, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Section } from '../components/Section';
import { CountUp } from '../components/CountUp';

export const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* --- HERO SECTION: Parallax Impression --- */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-900/60 z-10" /> {/* Overlay */}
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover scale-110"
            alt="Logistics Background"
          />
        </motion.div>

        <Section className="relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] uppercase bg-orange-600 text-white rounded-full">
              Established Since 2014
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              CV. <span className="text-orange-500">ULUMUSI</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
              Arsitek logistik terpadu yang mendedikasikan presisi dan integritas untuk menghubungkan setiap jengkal Nusantara.
            </p>
          </motion.div>
        </Section>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-20" />
      </section>

      {/* --- INTRO: The Narrative --- */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80"
              alt="Operational Team"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-slate-50 dark:border-slate-900"
            />
            <div className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl z-20 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
                  <Award className="text-orange-600" size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">10+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Tahun Eksistensi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4">Our Narrative</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">
                Bukan Sekedar Pengiriman, Tapi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Kepercayaan</span>.
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Berawal dari visi sederhana di tahun 2014, CV. ULUMUSI lahir untuk menjawab tantangan kompleksitas logistik di Indonesia. Kami memahami bahwa setiap paket mengandung harapan dan janji bisnis Anda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Sistem Tracking Terintegrasi', 'Asuransi Pengiriman Penuh', 'Armada Milik Sendiri', 'Tim Operasional 24/7'].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                  <CheckCircle2 className="text-orange-500" size={20} />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- VISION & MISSION: Modern Split Grid --- */}
      <div className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-100 dark:border-slate-800">
        <Section>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-lg shadow-orange-500/20">
                <Target className="text-white" size={32} />
              </div>
              <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Visi Kami</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed italic">
                "Menjadi katalisator utama pertumbuhan ekonomi nasional melalui ekosistem logistik yang paling efisien, cerdas, dan terpercaya di Indonesia."
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 dark:bg-orange-600 p-12 rounded-[3rem] shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 -rotate-3">
                <Rocket className="text-white" size={32} />
              </div>
              <h4 className="text-3xl font-black mb-6">Misi Kami</h4>
              <ul className="space-y-4 opacity-90 text-lg">
                <li className="flex gap-3">
                  <span className="font-bold text-orange-400">01.</span>
                  Mengoptimalkan rantai pasok klien dengan teknologi mutakhir.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-400">02.</span>
                  Membangun jaringan distribusi yang menjangkau area remote (3T).
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-400">03.</span>
                  Menjamin keamanan aset klien sebagai prioritas tertinggi.
                </li>
              </ul>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* --- CORE VALUES: Interactive Cards --- */}
      <Section className="py-24">
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4">Core Principles</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white">Pilar Keunggulan Kami</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: "Integritas Tanpa Kompromi", 
              desc: "Kejujuran adalah fondasi. Kami memberikan data real-time tanpa ada yang disembunyikan.",
              color: "blue"
            },
            { 
              icon: Zap, 
              title: "Agilitas & Inovasi", 
              desc: "Beradaptasi cepat dengan perubahan pasar dan teknologi untuk efisiensi biaya Anda.",
              color: "orange"
            },
            { 
              icon: Globe2, 
              title: "Konektivitas Nasional", 
              desc: "Memahami geografis Indonesia sedalam kami memahami kebutuhan bisnis Anda.",
              color: "red"
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-orange-500/30 transition-all shadow-sm hover:shadow-2xl hover:shadow-orange-500/5 text-center"
            >
              <div className="mb-8 inline-block p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                <value.icon size={42} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{value.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- STATS: Impact in Numbers --- */}
      <div className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Section className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Klien Aktif', end: 5000, suffix: '+', icon: Users2 },
              { label: 'Jangkauan Kota', end: 450, suffix: '+', icon: Globe2 },
              { label: 'Ketepatan Waktu', end: 98, suffix: '%', icon: TrendingUp },
              { label: 'Proyek Selesai', end: 120, suffix: 'K', icon: CheckCircle2 },
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-center text-orange-500 mb-2">
                  <stat.icon size={32} />
                </div>
                <div className="text-5xl md:text-6xl font-black text-white italic tracking-tighter">
                  <CountUp end={stat.end} duration={3} />{stat.suffix}
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* --- CALL TO ACTION --- */}
      <Section className="py-24">
        <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-10 space-y-10"
          >
            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              Ingin Mengetahui Lebih Dalam <br /> Tentang Solusi Kami?
            </h3>
            <p className="text-xl text-orange-50 opacity-90 max-w-2xl mx-auto">
              Buka peluang baru bagi efisiensi bisnis Anda. Mari berdiskusi bagaimana kami dapat membantu akselerasi distribusi produk Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-white text-orange-600 font-black rounded-2xl hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2">
                Download Company Profile <ArrowRight size={20} />
              </button>
              <a href="/contact" className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                Hubungi Direksi
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};