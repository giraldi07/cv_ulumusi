import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  CheckCircle2,
  Building2, 
  Truck, 
  Cpu, 
  Globe, 
  BarChart3,
  Quote
} from 'lucide-react';
import { Section } from '../components/Section';
import { CountUp } from '../components/CountUp';

// Data untuk Timeline Sejarah
const milestones = [
  {
    year: "2014",
    title: "The Foundation",
    desc: "CV. ULUMUSI resmi berdiri di garasi kecil dengan armada terbatas, namun memiliki visi besar untuk menstandarisasi distribusi lokal.",
    icon: Building2,
  },
  {
    year: "2017",
    title: "Regional Expansion",
    desc: "Membuka 5 kantor cabang strategis di Sumatera & Jawa, mempercepat konektivitas antarpulau hingga 40%.",
    icon: Truck,
  },
  {
    year: "2019",
    title: "Digital Transformation",
    desc: "Meluncurkan sistem TMS (Transport Management System) berbasis Cloud, memberikan transparansi data real-time kepada klien.",
    icon: Cpu,
  },
  {
    year: "2022",
    title: "Strategic Partnership",
    desc: "Dipercaya sebagai mitra logistik eksklusif bagi 3 perusahaan FMCG multinasional terbesar di Indonesia.",
    icon: ShieldCheck,
  },
  {
    year: "2024",
    title: "Strategic BUMN Partnership",
    desc: "Dipercaya oleh PT. Surveyor Indonesia untuk menangani distribusi logistik Express lintas wilayah (Banten - Jabar - Jakarta) secara berkelanjutan.", // Berdasarkan data Invoice [cite: 1, 2, 4, 6]
    icon: ShieldCheck,
  },
  {
    year: "2025",
    title: "Service Excellence Expansion",
    desc: "Memperluas jangkauan layanan Express hingga ke pelosok Sukabumi dan Pandeglang dengan tingkat presisi pengiriman harian yang tinggi.", // Berdasarkan data Invoice 2025 
    icon: Rocket,
  },
];

export const AboutPage = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Parallax Effect untuk Hero
  const { scrollYProgress: pageScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const y = useTransform(pageScroll, [0, 1], [0, -300]);
  const opacity = useTransform(pageScroll, [0, 0.5], [1, 0]);

  // Progress Bar untuk Timeline Line
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useSpring(timelineScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/70 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-20" />
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover scale-110 grayscale-[30%]"
            alt="Logistics Background"
          />
        </motion.div>

        {/* Hero Content */}
        <Section className="relative z-30 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              {/* UBAH: Dot pulse color */}
              <span className="w-2 h-2 rounded-full bg-[#AB1F24] animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Since 2014</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none">
              The Story of <br/>
              {/* UBAH: Gradient Text Title */}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#AB1F24] to-red-500">ULUMUSI</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Sebuah perjalanan dedikasi merajut konektivitas Nusantara melalui solusi logistik yang presisi dan berintegritas.
            </p>
          </motion.div>
        </Section>
      </section>

      {/* --- INTRO: Narrative --- */}
      <Section className="py-24 bg-white dark:bg-slate-950">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* UBAH: Border color outline image */}
            <div className="absolute top-10 left-10 w-full h-full border-2 border-[#AB1F24]/20 rounded-[3rem] z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Meeting"
              className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full"
            />
            {/* Float Card */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700 max-w-[200px]">
              {/* UBAH: Quote Icon Color */}
              <Quote className="text-[#AB1F24] mb-2" size={24} />
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 italic">"Trust is the currency of logistics."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              {/* UBAH: Subheading color */}
              <h2 className="text-[#AB1F24] font-bold text-xs uppercase tracking-[0.3em] mb-3">Our Narrative</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">
                {/* UBAH: Underline color */}
                Kami Tidak Hanya Mengirim Barang, Kami Mengirim <span className="underline decoration-[#AB1F24] decoration-4 underline-offset-4">Kepastian</span>.
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Di tengah kompleksitas geografis Indonesia, CV. ULUMUSI hadir sebagai jembatan. Kami memulai langkah kecil dengan keyakinan besar: bahwa logistik bukan sekadar memindahkan barang dari titik A ke B, melainkan tentang menjaga amanah dan memastikan roda bisnis klien kami terus berputar tanpa hambatan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               {[
                 { title: 'Armada Terawat', desc: 'Pemeliharaan rutin standar ATPM.' },
                 { title: 'Driver Terlatih', desc: 'Sertifikasi safety driving berkala.' },
                 { title: 'Tracking 24/7', desc: 'Monitoring real-time via satelit.' },
                 { title: 'Support Responsif', desc: 'CS siap membantu kendala Anda.' }
               ].map((item, i) => (
                 // UBAH: Border kiri list
                 <div key={i} className="flex flex-col border-l-4 border-[#AB1F24]/30 dark:border-slate-800 pl-4 py-1">
                    <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- DATA PROOF: Jangkauan Operasional --- */}
      <Section className="py-12">
        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h4 className="text-[#AB1F24] font-bold text-sm uppercase mb-2">Track Record Nyata</h4>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Distribusi Terukur & Terpercaya</h3>
              <p className="text-slate-500 text-sm">Berdasarkan data operasional 2024-2025, kami konsisten menjaga ritme pengiriman harian untuk mitra strategis kami.</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Rute Utama', val: 'Cilegon - Bogor' }, // Berdasarkan Destination Sentul Bogor [cite: 1, 2, 6]
                { label: 'Layanan', val: '100% Express' }, // Berdasarkan Service Column [cite: 1, 2, 7]
                { label: 'Klien Strategis', val: 'Surveyor Indonesia' }, // Berdasarkan Customer [cite: 1, 2]
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase font-black mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- TIMELINE HISTORY (Zig-Zag Animation) --- */}
      <div className="bg-slate-50 dark:bg-slate-900/30 py-32 overflow-hidden border-y border-slate-200 dark:border-slate-900">
        <Section>
          <div className="text-center mb-24">
            {/* UBAH: Subheading color */}
            <h2 className="text-[#AB1F24] font-black text-xs uppercase tracking-[0.3em] mb-4">Milestones</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Jejak Langkah Kami</h3>
          </div>

          <div ref={timelineRef} className="relative max-w-6xl mx-auto">
            
            {/* --- Center Line (Desktop) & Left Line (Mobile) --- */}
            {/* Line Base (Abu-abu) */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-200 dark:bg-slate-800 rounded-full" />
            
            {/* Line Progress (Oranye -> Red Custom - Mengikuti Scroll) */}
            <motion.div 
              style={{ scaleY, originY: 0 }} 
              // UBAH: Gradient timeline dan shadow glow
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#AB1F24] via-[#AB1F24] to-red-900 rounded-full shadow-[0_0_20px_rgba(171,31,36,0.6)] z-10" 
            />

            <div className="space-y-12 md:space-y-24">
              {milestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* SPACER (Untuk membuat layout zig-zag di desktop) */}
                    <div className="hidden md:block w-[45%]" />

                    {/* CENTRAL DOT / ICON */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      // UBAH: Border dan Shadow dot
                      className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-900 border-4 border-[#AB1F24] rounded-full flex items-center justify-center shadow-xl shadow-[#AB1F24]/20"
                    >
                      {/* UBAH: Icon color */}
                      <item.icon className="text-[#AB1F24] w-5 h-5 md:w-7 md:h-7" strokeWidth={2} />
                    </motion.div>

                    {/* CONTENT CARD */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -100 : 100 }} 
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                      className="w-full md:w-[45%] pl-20 md:pl-0"
                    >
                      <div className={`
                          relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-lg border border-slate-100 dark:border-slate-800 
                          /* UBAH: Hover state border dan shadow */
                          hover:border-[#AB1F24] hover:shadow-2xl hover:shadow-[#AB1F24]/10 transition-all duration-300 group
                          ${isEven ? 'md:text-right' : 'md:text-left'}
                       `}>
                          {/* Arrow Connector */}
                          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-t border-r border-slate-100 dark:border-slate-800 rotate-45 
                             /* UBAH: Arrow border hover */
                             ${isEven ? '-right-2 border-l-0 border-b-0 group-hover:border-[#AB1F24]' : '-left-2 border-t-0 border-r-0 border-l border-b group-hover:border-[#AB1F24]'}
                          `} />

                        {/* UBAH: Year Gradient Text */}
                        <span className="block text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#AB1F24] to-red-600 mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      </div>

      {/* --- OUR TRUSTED ROUTES (Visual Version) --- */}
      <Section className="py-24 bg-white dark:bg-slate-950">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Kiri: Deskripsi & Partner */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AB1F24]/10 border border-[#AB1F24]/20 text-[#AB1F24] text-[10px] font-black uppercase tracking-widest mb-6">
              <Globe size={12} /> Operational Reach
            </div>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
              Konektivitas <br/> 
              <span className="text-[#AB1F24]">Tanpa Batas.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Berdasarkan data operasional harian kami, rute-rute ini merupakan tulang punggung distribusi dokumen dan logistik kritikal bagi mitra strategis kami di wilayah Jawa Barat dan Banten.
            </p>
            
            {/* Partner Card */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#AB1F24]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">Main Strategic Partner</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
                  <Building2 className="text-[#AB1F24]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">PT. Surveyor Indonesia</p>
                  <p className="text-xs text-slate-500">Logistics Partnership Since 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kanan: Route Cards dengan Visual Ikon */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[
              { from: 'Cilegon', to: 'Sentul Bogor', icon: '🏭', desc: 'Industrial Hub' },
              { from: 'Kab. Sukabumi', to: 'Sentul Bogor', icon: '⛰️', desc: 'Regional Logistics' },
              { from: 'Pandeglang', to: 'Sentul Bogor', icon: '🌊', desc: 'West Banten Access' },
              { from: 'Pelabuhan Ratu', to: 'Sentul Bogor', icon: '⚓', desc: 'Coastal Connection' }
            ].map((route, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#AB1F24]/10 hover:border-[#AB1F24]/30"
              >
                {/* Ikon Kota sebagai Watermark */}
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity">
                  {route.icon}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-black rounded-lg uppercase">Active Route</span>
                    <Zap size={16} className="text-[#AB1F24] animate-pulse" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Origin</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">{route.from}</p>
                    </div>

                    {/* Animated Connector */}
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#AB1F24]"></div>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#AB1F24] to-transparent relative">
                        <motion.div 
                          initial={{ left: "0%" }}
                          animate={{ left: "100%" }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-[#AB1F24] rounded-full shadow-[0_0_8px_#AB1F24]"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Destination</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">{route.to}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-500 font-medium">Service: <span className="text-slate-900 dark:text-white font-bold">Express Delivery</span></p>
                    <p className="text-[10px] text-slate-400 mt-1">{route.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- VISION & MISSION (Modern Cards) --- */}
      <Section className="py-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-900 dark:bg-slate-800 text-white p-10 lg:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              {/* UBAH: Background Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#AB1F24] rounded-full blur-[120px] opacity-40"></div>
              <div className="relative z-10">
                {/* UBAH: Icon color */}
                <Target size={48} className="text-[#AB1F24] mb-6" />
                <h4 className="text-3xl font-black mb-6">Our Vision</h4>
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  "Menjadi tulang punggung logistik nasional yang paling adaptif, menghubungkan setiap potensi ekonomi di Indonesia dengan dunia."
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              // UBAH: Background Card Mission (Main Color)
              className="bg-[#AB1F24] dark:bg-[#8a191d] text-white p-10 lg:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[120px] opacity-20"></div>
               <div className="relative z-10">
                <Rocket size={48} className="text-white mb-6" />
                <h4 className="text-3xl font-black mb-6">Our Mission</h4>
                <ul className="space-y-4">
                  {/* UBAH: List text color menjadi agak merah/putih agar blend */}
                  <li className="flex items-start gap-4">
                    <span className="mt-1 p-1 bg-white/20 rounded-full"><CheckCircle2 size={14}/></span>
                    <span className="text-red-50 font-medium text-lg">Inovasi teknologi berkelanjutan.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 p-1 bg-white/20 rounded-full"><CheckCircle2 size={14}/></span>
                    <span className="text-red-50 font-medium text-lg">Ekspansi jaringan ke area terpencil.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 p-1 bg-white/20 rounded-full"><CheckCircle2 size={14}/></span>
                    <span className="text-red-50 font-medium text-lg">SDM profesional dan berintegritas.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
      </Section>

      {/* --- STATS SECTION --- */}
      <div className="py-24 bg-slate-950 border-t border-slate-900">
        <Section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { 
                label: 'Partner Korporasi', 
                end: 50, 
                suffix: '+', 
                icon: Users2,
                desc: 'Termasuk BUMN & FMCG' 
              },
              { 
                label: 'Titik Distribusi', 
                end: 150, 
                suffix: '+', 
                icon: Globe2,
                desc: 'Jawa Barat & Banten' 
              },
              { 
                label: 'SLA Express', 
                end: 99, 
                suffix: '%', 
                icon: TrendingUp,
                desc: 'Ketepatan Waktu Kirim' 
              },
              { 
                label: 'Tonase Pertahun', 
                end: 850, 
                suffix: 'T+', 
                icon: BarChart3,
                desc: 'Volume Muatan Terkelola' 
              },
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                {/* Icon dengan Glow Effect saat Hover */}
                <div className="flex justify-center text-slate-600 group-hover:text-[#AB1F24] transition-all mb-4 transform group-hover:scale-110 duration-300">
                  <stat.icon size={36} className="group-hover:drop-shadow-[0_0_10px_rgba(171,31,36,0.5)]" />
                </div>
                
                {/* Angka Utama */}
                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-1">
                  <CountUp end={stat.end} duration={3} />{stat.suffix}
                </div>
                
                {/* Label Utama */}
                <p className="text-[#AB1F24] font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                  {stat.label}
                </p>
                
                {/* Deskripsi Tambahan (Penjelasan dari data invoice) */}
                <p className="text-slate-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* --- CTA SECTION --- */}
      <Section className="py-24 pb-32">
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           {/* UBAH: Blob CTA */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AB1F24]/30 rounded-full blur-[100px] mix-blend-screen"></div>
           
           <div className="relative z-10 p-12 md:p-24 text-center">
             <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Siap Bermitra?</h3>
             <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Diskusikan kebutuhan logistik spesifik perusahaan Anda bersama tim ahli kami.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  className="px-8 py-4 bg-[#AB1F24] hover:bg-[#8a191d] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#AB1F24]/25 flex items-center justify-center gap-2"
                  onClick={() => {
                    const subject = encodeURIComponent("Konsultasi Layanan Logistik CV. ULUMUSI");
                    const body = encodeURIComponent("Halo Tim Sales ULUMUSI,\n\nSaya ingin berdiskusi mengenai kebutuhan pengiriman perusahaan kami...");
                    window.location.href = `mailto:cv.ulumusi@gmail.com?subject=${subject}&body=${body}`;
                  }}
                >
                  Hubungi Tim Sales <ArrowRight size={20}/>
                </button>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
};