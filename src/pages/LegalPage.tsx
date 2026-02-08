import { motion } from 'framer-motion';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { Section } from '../components/Section';
import { useNavigation } from '../contexts/NavigationContext';

export const LegalPage = ({ type }: { type: 'privacy' | 'terms' }) => {
  const { setCurrentPage } = useNavigation();

  const content = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Kebijakan Privasi CV. ULUMUSI',
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      lastUpdated: '01 Januari 2026',
      sections: [
        {
          h: '1. Informasi yang Kami Kumpulkan',
          p: 'Kami mengumpulkan informasi identitas pribadi (seperti nama, alamat, nomor telepon, dan email) hanya ketika Anda secara sukarela memberikannya kepada kami untuk keperluan pengiriman barang dan layanan logistik.'
        },
        {
          h: '2. Penggunaan Informasi',
          p: 'Informasi Anda digunakan untuk memproses pengiriman, memberikan update status resi, menanggapi pertanyaan layanan pelanggan, dan meningkatkan kualitas operasional armada kami.'
        },
        {
          h: '3. Keamanan Data',
          p: 'Kami menerapkan standar keamanan enkripsi digital untuk melindungi data Anda dari akses yang tidak sah. Data fisik pengiriman dijaga ketat di fasilitas pergudangan kami.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Syarat & Ketentuan Pengiriman',
      icon: <FileText className="text-orange-500" size={32} />,
      lastUpdated: '01 Januari 2026',
      sections: [
        {
          h: '1. Ketentuan Barang',
          p: 'Pengirim wajib memastikan barang tidak termasuk dalam kategori barang terlarang (narkotika, senjata api, bahan peledak, atau barang yang melanggar hukum Indonesia).'
        },
        {
          h: '2. Tanggung Jawab Pengemasan',
          p: 'Pengirim bertanggung jawab atas pengemasan internal barang. CV. ULUMUSI menyediakan layanan packing tambahan (kayu/bubble wrap) untuk meminimalisir risiko kerusakan.'
        },
        {
          h: '3. Klaim Asuransi',
          p: 'Klaim atas kerusakan atau kehilangan barang wajib diajukan maksimal 1x24 jam setelah barang diterima dengan melampirkan bukti video unboxing dan nomor resi resmi.'
        }
      ]
    }
  };

  const active = content[type];

  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Kembali</span>
          </button>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none mb-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-50 dark:bg-orange-500/10 rounded-2xl">
                {active.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                  {active.title}
                </h1>
                <p className="text-slate-500 text-sm font-medium italic">Terakhir diperbarui: {active.lastUpdated}</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Harap baca {active.title} ini dengan seksama untuk memahami komitmen kami terhadap keamanan dan kenyamanan layanan Anda di CV. ULUMUSI.
            </p>
          </motion.div>

          {/* Body Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 px-4"
          >
            {active.sections.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  {item.h}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.p}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contact Box */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 dark:bg-orange-600 text-white">
            <h4 className="font-black mb-2 uppercase tracking-wide">Punya Pertanyaan Hukum?</h4>
            <p className="text-slate-400 dark:text-orange-100 text-sm mb-4">
              Hubungi tim legal kami melalui email di <span className="font-bold text-white underline">legal@ulumusi.com</span> untuk penjelasan lebih lanjut.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};