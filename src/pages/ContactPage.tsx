import { MapPin, Phone, Mail } from 'lucide-react';
import { FormEvent } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';

export const ContactPage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 min-h-screen">
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Hubungi Kami
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Kantor Pusat</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Jl. Lintas Sumatera No. 123
                    <br />
                    Kec. Ulumusi, Kab. Empat Lawang
                    <br />
                    Sumatera Selatan, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                    Telepon / WhatsApp
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">+62 812 3456 7890</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    (Senin - Sabtu, 08:00 - 17:00)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">cs@ulumusi-logistik.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" placeholder="Nama Depan" required />
                <Input type="text" placeholder="Nama Belakang" required />
              </div>
              <Input type="email" placeholder="Alamat Email" required />
              <Textarea rows={4} placeholder="Tulis pesan Anda disini..." required />
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
