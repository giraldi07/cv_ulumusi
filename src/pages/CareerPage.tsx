import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowUpRight, Star, Users, Coffee, Heart } from 'lucide-react';
import { Section } from '../components/Section';

const jobs = [
  {
    id: 1,
    role: "Fleet Operations Manager",
    type: "Full-time",
    location: "Serang, Banten",
    category: "Operations",
    salary: "Competitive"
  },
  {
    id: 2,
    role: "Senior Fullstack Developer",
    type: "Remote / Hybrid",
    location: "Jakarta",
    category: "Technology",
    salary: "Top Tier"
  },
  {
    id: 3,
    role: "Supply Chain Analyst",
    type: "Full-time",
    location: "Tangerang",
    category: "Logistics",
    salary: "Competitive"
  }
];

const perks = [
  { icon: Heart, title: "Wellness Package", desc: "Asuransi kesehatan menyeluruh untuk Anda dan keluarga." },
  { icon: Coffee, title: "Kultur Dinamis", desc: "Lingkungan kerja yang suportif, modern, dan tanpa sekat birokrasi." },
  { icon: Star, title: "Growth Path", desc: "Program pelatihan dan jenjang karir yang terukur secara transparan." },
  { icon: Users, title: "Tim Hebat", desc: "Bekerja bersama talenta terbaik di industri logistik Indonesia." },
];

export const CareerPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
        <Section>
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Bangun Masa Depan <br />
              <span className="text-orange-600">Logistik Nusantara</span>
            </motion.h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Kami mencari inovator, pemimpi, dan pelaksana untuk bergabung dalam misi besar kami melakukan transformasi distribusi di Indonesia.
            </p>
          </div>
        </Section>
      </section>

      {/* Perks Section */}
      <Section className="pb-24">
        <div className="grid md:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <perk.icon className="text-orange-600 mb-6" size={32} />
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{perk.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Job Openings */}
      <div className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <Section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Posisi Terbuka</h2>
              <p className="text-slate-500">Temukan peran yang sesuai dengan passion Anda.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-sm font-bold">All Departments</span>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ x: 10 }}
                className="group p-6 md:p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-600">{job.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                    <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-slate-400 uppercase font-bold">Salary Range</p>
                    <p className="text-slate-900 dark:text-white font-bold">{job.salary}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-orange-600 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <ArrowUpRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};