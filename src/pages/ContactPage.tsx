import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Linkedin 
} from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import HeroImageContact from '../images/cs-ulumusi.jpg';

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman pesan
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset setelah 5 detik
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Kantor Pusat',
      detail: 'Komp. RSS PEMDA Blok B 2 No. 7, RT.02/08 Banjarsari Cipocok Jaya',
      subDetail: 'Serang, Banten, Indonesia',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Phone,
      title: 'WhatsApp & Call',
      detail: '+62 818 0853 0188',
      subDetail: 'Senin - Sabtu (08:00 - 17:00)',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'cv.ulumusi@gmail.com',
      subDetail: 'Respon dalam 1x24 jam',
      // UBAH: Warna icon email ke Merah
      color: 'text-[#AB1F24]',
      bg: 'bg-[#AB1F24]/10'
    }
  ];

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 transition-colors duration-500 min-h-screen">
      
      {/* --- HERO SECTION DENGAN BACKGROUND IMAGE --- */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-slate-900">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroImageContact} 
            alt="Customer Service Ulu Musi" 
            className="w-full h-full object-cover"
          />
          {/* Overlay Gelap: Menggunakan opacity 70% agar teks putih terlihat jelas di tengah */}
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
          
          {/* Efek Glow Merah di tengah untuk memperkuat branding */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#AB1F24] rounded-full blur-[150px] opacity-20" />
        </div>
        
        <Section className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto flex flex-col items-center" // mx-auto & items-center untuk centering
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              Get In <span className="text-[#AB1F24]">Touch</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Ada pertanyaan mengenai logistik atau butuh penawaran khusus? 
              Tim kami siap membantu mencarikan solusi terbaik untuk Anda.
            </p>
          </motion.div>
        </Section>
      </section>

      {/* --- INFO CARDS --- */}
      <Section className="-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <div className={`w-14 h-14 rounded-2xl ${info.bg} ${info.color} flex items-center justify-center mb-6`}>
                <info.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{info.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-1">{info.detail}</p>
              <p className="text-slate-400 dark:text-slate-500 text-sm">{info.subDetail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- FORM & MAP SECTION --- */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-8">
              {/* UBAH: Icon box ke Merah */}
              <div className="p-2 bg-[#AB1F24] rounded-lg text-white">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Kirim Pesan</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Nama Lengkap</label>
                        <Input placeholder="John Doe" required className="bg-white dark:bg-slate-800" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Perusahaan</label>
                        <Input placeholder="PT. Logistik Jaya" className="bg-white dark:bg-slate-800" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Alamat Email</label>
                      <Input type="email" placeholder="john@example.com" required className="bg-white dark:bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Pesan Anda</label>
                      <Textarea rows={5} placeholder="Bagaimana kami bisa membantu Anda?" required className="bg-white dark:bg-slate-800" />
                    </div>
                    {/* UBAH: Button Background & Hover ke Merah */}
                    <Button 
                      type="submit" 
                      className="w-full py-4 bg-[#AB1F24] hover:bg-[#8e191d] text-white rounded-2xl flex items-center justify-center gap-2 group transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Kirim Sekarang <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={48} />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Pesan Terkirim!</h4>
                    <p className="text-slate-500">Terima kasih telah menghubungi CV. Ulu Musi. Tim kami akan segera merespon pesan Anda.</p>
                    {/* UBAH: Text color ke Merah */}
                    <button 
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#AB1F24] font-bold hover:underline"
                    >
                      Kirim pesan lain
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Map & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.042857430932!2d106.1669281!3d-6.1249495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418b39860c4969%3A0x6e78872e616c6804!2sRSS%20Pemda!5e0!3m2!1sid!2sid!4v1707000000000!5m2!1sid!2sid" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-0"
                loading="lazy"
                title="CV Ulu Musi Location"
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Live Office Status: Open
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-slate-900 rounded-[2.5rem] text-white">
              <div>
                <h4 className="text-lg font-bold mb-1">Follow Our Journey</h4>
                <p className="text-slate-400 text-sm">Dapatkan update logistik terbaru setiap hari.</p>
              </div>
              <div className="flex gap-4 mt-6 md:mt-0">
                {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                  <button 
                    key={idx}
                    /* UBAH: Hover background ke Merah */
                    className="w-12 h-12 bg-white/10 hover:bg-[#AB1F24] rounded-2xl flex items-center justify-center transition-all hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- FAQ MINI SECTION --- */}
      <Section className="pb-24">
        <div className="border-t border-slate-100 dark:border-slate-800 pt-16 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* UBAH: Icon color ke Merah */}
              <Clock className="text-[#AB1F24]" size={20} />
              <h5 className="font-bold dark:text-white uppercase tracking-widest text-sm">Jam Operasional</h5>
            </div>
            <p className="text-slate-500 text-sm">Setiap Senin sampai Sabtu pukul 08:00 - 17:00 WIB. Hari Minggu dan libur nasional kantor tutup, namun tracking online tetap aktif 24/7.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="text-blue-600" size={20} />
              <h5 className="font-bold dark:text-white uppercase tracking-widest text-sm">Respon Cepat</h5>
            </div>
            <p className="text-slate-500 text-sm">Butuh bantuan urgent? Kami sarankan menghubungi via WhatsApp untuk respon instan dari tim support lapangan kami.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-emerald-600" size={20} />
              <h5 className="font-bold dark:text-white uppercase tracking-widest text-sm">Kunjungan Kantor</h5>
            </div>
            <p className="text-slate-500 text-sm">Silakan buat janji temu melalui email atau telepon jika ingin mendiskusikan kontrak kerjasama logistik jangka panjang di kantor kami.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};