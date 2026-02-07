import {
  Search,
  Clock,
  Truck,
  Globe,
  Package,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Award,
} from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { useNavigation } from '../contexts/NavigationContext';

export const HomePage = () => {
  const { setCurrentPage } = useNavigation();

  return (
    <>
      {/* Hero Section - Modern & Powerful */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-slate-100/30 to-transparent dark:via-slate-800/30 rounded-bl-[200px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-900/50 cursor-default">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Partner Logistik Terpercaya
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Kirim Paket{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 animate-pulse">
                Lebih Cepat
              </span>{' '}
              & Aman.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Solusi pengiriman barang terpadu untuk seluruh Indonesia. Dengan jaringan luas, armada modern, dan layanan pelanggan 24/7, kami siap mendukung kesuksesan bisnis Anda.
            </p>

            {/* Tracking & CTA */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/40 flex flex-col sm:flex-row gap-2 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300">
                <div className="flex-1 flex items-center px-4 h-14">
                  <Search className="text-slate-400 mr-3" size={20} />
                  <input
                    type="text"
                    placeholder="Lacak nomor resi Anda..."
                    className="w-full bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 text-base"
                  />
                </div>
                <button className="h-14 px-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105">
                  Lacak
                </button>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} className="text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">Asuransi Barang</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Clock size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">Tepat Waktu</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">Jangkauan Luas</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Award size={20} className="text-yellow-600 dark:text-yellow-400" />
                </div>
                <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">Terpercaya</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Logistics Delivery Truck"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[550px] hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-8 right-8 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-6 shadow-xl backdrop-blur-sm bg-opacity-95 max-w-xs transform hover:scale-110 transition-transform duration-300">
              <h4 className="font-bold text-lg mb-2">Jangkauan Nasional</h4>
              <p className="text-sm opacity-90">Melayani pengiriman ke 34 provinsi dengan kecepatan dan keamanan terjamin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent dark:via-orange-600"></div>

      {/* Trusted Clients Section */}
      <div className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <Section>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
                <span className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-400"></span>
                Dipercaya Oleh Ribuan Perusahaan
                <span className="w-12 h-1 bg-gradient-to-l from-transparent to-orange-400"></span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mitra Bisnis Kami
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                Lebih dari 5000 perusahaan di berbagai industri mempercayai CV. ULUMUSI untuk kebutuhan logistik mereka
              </p>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
              {[
                { name: 'PT. Mitra Utama', color: 'from-blue-500 to-blue-600' },
                { name: 'CV. Indonesia Jaya', color: 'from-green-500 to-green-600' },
                { name: 'PT. Nusantara Makmur', color: 'from-purple-500 to-purple-600' },
                { name: 'PT. Bersama Maju', color: 'from-pink-500 to-pink-600' },
                { name: 'CV. Sukses Bersama', color: 'from-indigo-500 to-indigo-600' },
                { name: 'PT. Maju Lancar', color: 'from-cyan-500 to-cyan-600' },
                { name: 'CV. Rumahku Logistik', color: 'from-yellow-500 to-yellow-600' },
                { name: 'PT. Ceria Ekspres', color: 'from-red-500 to-red-600' },
                { name: 'CV. Terpercaya Sejati', color: 'from-emerald-500 to-emerald-600' },
                { name: 'PT. Harmoni Bisnis', color: 'from-violet-500 to-violet-600' },
                { name: 'CV. Pengembang Usaha', color: 'from-orange-500 to-orange-600' },
                { name: 'PT. Harapan Multilogistik', color: 'from-teal-500 to-teal-600' },
              ].map((client, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-orange-400/50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/40"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <span className="text-white font-bold text-2xl md:text-3xl">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-white text-center text-xs md:text-sm font-semibold group-hover:text-orange-300 transition-colors duration-300">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Stats */}
            <div className="grid md:grid-cols-3 gap-8 py-12 px-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
              {[
                { number: '5000+', label: 'Klien Aktif' },
                { number: '99.2%', label: 'Kepuasan Pelanggan' },
                { number: '34', label: 'Provinsi Jangkauan' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center transform hover:scale-110 transition-transform duration-300">
                  <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-slate-300 text-base md:text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Services Section - Enhanced */}
      <Section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-sm mb-3">
            Solusi Terlengkap
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Layanan Pengiriman Kami
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai solusi logistik terintegrasi untuk memenuhi kebutuhan bisnis Anda
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Truck}
            title="Transportasi Darat"
            description="Armada truk modern untuk pengiriman antar kota dan provinsi dengan jadwal keberangkatan rutin setiap hari dan GPS tracking real-time."
          />
          <ServiceCard
            icon={Globe}
            title="Kargo Logistik"
            description="Layanan pengiriman kargo dalam jumlah besar untuk kebutuhan bisnis dan korporasi dengan tarif kompetitif dan asuransi penuh."
          />
          <ServiceCard
            icon={Package}
            title="Door to Door"
            description="Layanan penjemputan dari lokasi Anda dan pengiriman langsung ke tujuan dengan penanganan barang yang profesional dan aman."
          />
        </div>
        <div className="mt-16 text-center">
          <Button variant="outline" onClick={() => setCurrentPage('services')} className="group">
            Lihat Semua Layanan <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="py-24 bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-sm mb-3">
            Keunggulan Kami
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mengapa Memilih CV. ULUMUSI?
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '⚡', title: 'Pengiriman Cepat', desc: 'Sistem logistik optimal untuk pengiriman tepat waktu' },
            { icon: '🛡️', title: 'Keamanan Terjamin', desc: 'Asuransi penuh dan tracking 24/7 untuk setiap paket' },
            { icon: '💰', title: 'Harga Kompetitif', desc: 'Tarif terbaik dengan kualitas layanan premium' },
            { icon: '🤝', title: 'Customer Service', desc: 'Tim support responsif siap membantu kapan saja' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Mulai Menggunakan Layanan Kami?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Hubungi tim kami hari ini untuk mendiskusikan solusi logistik terbaik untuk bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setCurrentPage('contact')} className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-slate-100 transition-all hover:scale-105 shadow-xl">
              Hubungi Kami Sekarang
            </button>
            <button onClick={() => setCurrentPage('services')} className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all hover:scale-105">
              Lihat Layanan Lengkap
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};
