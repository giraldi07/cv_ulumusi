import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Users,
  ThumbsUp,
  AlertCircle,
} from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { TrackingResult } from '../components/TrackingResult';
import { ClientsCarousel } from '../components/ClientsCarousel';
import { CountUp } from '../components/CountUp';
import { useNavigation } from '../contexts/NavigationContext';
import { findShipmentByResi } from '../data/mockShipments';
import { clients } from '../data/clients';
import type { Shipment } from '../types/shipment';

export const HomePage = () => {
  const { setCurrentPage } = useNavigation();
  const [trackingInput, setTrackingInput] = useState('');
  const [trackingResult, setTrackingResult] = useState<Shipment | null>(null);
  const [trackingError, setTrackingError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackingSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTrackingError('');
    setTrackingResult(null);

    // Simulate API call delay
    setTimeout(() => {
      const resiNumber = trackingInput.trim().toUpperCase();

      if (!resiNumber) {
        setTrackingError('Silakan masukkan nomor resi');
        setIsSearching(false);
        return;
      }

      const shipment = findShipmentByResi(resiNumber);

      if (shipment) {
        setTrackingResult(shipment);
      } else {
        setTrackingError('Nomor resi tidak ditemukan. Silakan periksa kembali nomor resi Anda.');
      }

      setIsSearching(false);
    }, 500);
  };

  const handleCloseTracking = () => {
    setTrackingResult(null);
    setTrackingInput('');
  };

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
              <form onSubmit={handleTrackingSearch} className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/40 flex flex-col sm:flex-row gap-2 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300">
                <div className="flex-1 flex items-center px-4 h-14">
                  <Search className="text-slate-400 mr-3" size={20} />
                  <input
                    type="text"
                    placeholder="Lacak nomor resi Anda..."
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="h-14 px-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSearching ? 'Mencari...' : 'Lacak'}
                </button>
              </form>

              {/* Error Message */}
              {trackingError && (
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                  <p className="text-sm text-red-700 dark:text-red-300">{trackingError}</p>
                </div>
              )}
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
      <div className="relative my-8">
        <div className="mx-auto w-11/12">
          <div className="relative">
            <div className="h-1 rounded-full bg-gradient-to-r from-transparent via-orange-300/60 to-transparent dark:via-orange-600/60 opacity-100 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-orange-200/40 to-transparent dark:from-transparent dark:via-orange-600/30 dark:to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Clients Section */}
      <div className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        {/* subtle decorative shapes - tuned for light/dark */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden md:block absolute -top-10 -left-16 w-80 h-80 rounded-full bg-orange-400/6 dark:bg-orange-500/20 blur-3xl mix-blend-screen" />
          <div className="hidden md:block absolute -bottom-10 -right-16 w-96 h-96 rounded-full bg-red-400/6 dark:bg-red-500/18 blur-3xl mix-blend-screen" />
        </div>

        <Section>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-orange-500 dark:text-orange-400 font-semibold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-400 block"></span>
                Dipercaya Oleh Ribuan Perusahaan
                <span className="w-12 h-1 bg-gradient-to-l from-transparent to-orange-400 block"></span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                Mitra Bisnis Kami
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
                Lebih dari 5000 perusahaan di berbagai industri mempercayai CV. ULUMUSI untuk kebutuhan logistik mereka
              </p>
            </motion.div>

            {/* Clients Carousel */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-12">
              <ClientsCarousel
                clients={clients}
                autoPlay={true}
                autoPlaySpeed={4500}
              />
            </motion.div>

            {/* Trust Stats - simplified & animated */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-6 py-10 px-6 md:px-10 bg-white/5 dark:bg-white/2 backdrop-blur-md border border-white/10 dark:border-white/6 rounded-3xl"
            >
              <div className="flex flex-col items-center gap-3 py-6">
                <div className="p-3 bg-white/5 dark:bg-white/6 rounded-full">
                  <Users className="text-orange-400" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  <CountUp end={5000} duration={2.2} />+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Klien Aktif</div>
              </div>

              <div className="flex flex-col items-center gap-3 py-6">
                <div className="p-3 bg-white/5 dark:bg-white/6 rounded-full">
                  <ThumbsUp className="text-yellow-400" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  <CountUp end={'99.2%'} duration={2} />
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Kepuasan Pelanggan</div>
              </div>

              <div className="flex flex-col items-center gap-3 py-6">
                <div className="p-3 bg-white/5 dark:bg-white/6 rounded-full">
                  <MapPin className="text-rose-400" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  <CountUp end={34} duration={1.6} />
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Provinsi Jangkauan</div>
              </div>
            </motion.div>
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

      {/* Tracking Result Modal */}
      {trackingResult && <TrackingResult shipment={trackingResult} onClose={handleCloseTracking} />}
    </>
  );
};
