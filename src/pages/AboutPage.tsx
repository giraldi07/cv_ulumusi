import { Section } from '../components/Section';

export const AboutPage = () => (
  <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 min-h-screen">
    <Section>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1768796373307-fc2f843660f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=format&fit=crop&w=800&q=80"
            alt="Warehouse Team"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-orange-600 p-8 rounded-2xl text-white shadow-xl hidden md:block">
            <p className="text-4xl font-bold mb-1">10+</p>
            <p className="text-sm opacity-90">Tahun Pengalaman</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Mengenal CV. ULUMUSI
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Didirikan dengan visi untuk menghubungkan nusantara, CV. ULUMUSI telah tumbuh menjadi
            salah satu penyedia jasa ekspedisi yang handal. Kami mengutamakan integritas dan
            kepuasan pelanggan dalam setiap paket yang kami antarkan.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            Dengan jaringan yang tersebar luas dan armada yang terawat, kami siap mendukung
            pertumbuhan bisnis Anda melalui solusi logistik yang efisien.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Visi</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Menjadi perusahaan ekspedisi terdepan yang mengutamakan kecepatan dan keamanan.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Misi</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Memberikan layanan prima dengan harga kompetitif serta dukungan teknologi terkini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);
