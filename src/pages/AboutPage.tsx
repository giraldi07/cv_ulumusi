import { Section } from '../components/Section';

export const AboutPage = () => (
  <div className="bg-slate-50 dark:bg-slate-900 transition-colors duration-500 min-h-screen">
    {/* Hero Section */}
    <div className="pt-32 pb-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tentang CV. ULUMUSI</h1>
          <p className="text-xl opacity-90">
            Mitra terpercaya logistik dan pengiriman untuk mengembangkan bisnis Anda ke seluruh nusantara
          </p>
        </div>
      </Section>
    </div>

    {/* Intro Section */}
    <Section>
      <div className="py-12 grid md:grid-cols-2 gap-16 items-center">
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
            Perjalanan Kami
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Didirikan dengan visi untuk menghubungkan nusantara, CV. ULUMUSI telah tumbuh menjadi
            salah satu penyedia jasa ekspedisi yang handal dan terpercaya. Kami mengutamakan integritas,
            transparansi, dan kepuasan pelanggan dalam setiap paket yang kami antarkan.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            Dengan jaringan yang tersebar di seluruh Indonesia, armada modern yang terawat, dan tim 
            profesional yang berpengalaman, kami siap mendukung pertumbuhan bisnis Anda melalui solusi 
            logistik yang efisien, aman, dan tepat waktu.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Visi</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Menjadi perusahaan ekspedisi terdepan di Indonesia yang mengutamakan kecepatan, keamanan, dan inovasi.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Misi</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Memberikan layanan logistik prima dengan harga kompetitif, dukungan teknologi terkini, dan customer service terbaik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* Statistics Section */}
    <Section>
      <div className="py-12 border-y border-slate-200 dark:border-slate-700">
        <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Pencapaian Kami
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Tahun Melayani</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">5000+</div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Klien Bisnis</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">34</div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Provinsi Jangkauan</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">99.2%</div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Kepuasan Pelanggan</p>
          </div>
        </div>
      </div>
    </Section>

    {/* Core Values Section */}
    <Section>
      <div className="py-12">
        <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Nilai-Nilai Inti Kami
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Integritas</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Kami berkomitmen untuk selalu transparan, jujur, dan dapat diandalkan dalam setiap 
              transaksi bisnis dengan klien kami.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Efisiensi</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Dengan sistem manajemen logistik terdepan, kami memastikan setiap pengiriman tepat waktu 
              dan biaya operasional optimal.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Keamanan</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Setiap paket ditangani dengan standar keamanan tertinggi, asuransi komprehensif, dan 
              tracking real-time untuk ketenangan pikiran Anda.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Expertise Section */}
    <Section>
      <div className="py-12 bg-white dark:bg-slate-800 rounded-2xl px-8 md:px-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Keahlian & Layanan
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white mr-3">✓</span>
              Logistik Nasional
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Pengiriman ke seluruh nusantara dengan jaringan mitra distribusi terpercaya di setiap 
              kota besar dan daerah terpencil.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white mr-3">✓</span>
              Manajemen Gudang
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Fasilitas penyimpanan modern dengan sistem inventory management yang canggih dan 
              climate-controlled storage untuk produk khusus.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white mr-3">✓</span>
              Tracking & Monitoring
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Sistem tracking real-time 24/7 yang memungkinkan Anda memantau posisi paket kapan saja, 
              di mana saja, melalui aplikasi mobile kami.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white mr-3">✓</span>
              Konsultasi Bisnis
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Tim ahli kami siap membantu mengoptimalkan strategi logistik bisnis Anda untuk efisiensi 
              maksimal dan penghematan biaya.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Call to Action Section */}
    <Section>
      <div className="py-12 text-center">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Siap Bermitra Dengan Kami?
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Hubungi tim kami hari ini untuk mendiskusikan solusi logistik terbaik untuk kebutuhan bisnis Anda.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Hubungi Kami
        </a>
      </div>
    </Section>
  </div>
);
