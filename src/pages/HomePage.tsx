import {
  Search,
  ShieldCheck,
  Clock,
  Truck,
  Globe,
  Package,
} from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { useNavigation } from '../contexts/NavigationContext';

export const HomePage = () => {
  const { setCurrentPage } = useNavigation();

  return (
    <>
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-100 dark:bg-slate-800/50 rounded-l-[100px] transform translate-x-1/4 skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Partner Logistik Terpercaya
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Kirim Paket{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Lebih Cepat
              </span>{' '}
              & Aman.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
              CV. ULUMUSI hadir sebagai solusi pengiriman barang Anda. Melayani pengiriman darat,
              laut, dan udara dengan jangkauan luas dan harga kompetitif.
            </p>

            <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/30 max-w-md flex flex-col sm:flex-row gap-2 border border-slate-100 dark:border-slate-700">
              <div className="flex-1 flex items-center px-4 h-14">
                <Search className="text-slate-400 mr-3" />
                <input
                  type="text"
                  placeholder="Masukkan Nomor Resi..."
                  className="w-full bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
                />
              </div>
              <button className="h-14 px-8 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange-600/20">
                Lacak
              </button>
            </div>

            <div className="pt-4 flex gap-6 text-slate-500 dark:text-slate-400 font-medium text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-orange-500" /> Asuransi Barang
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-orange-500" /> Tepat Waktu
              </span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 rounded-[2rem] rotate-6 opacity-20 transform translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Logistics Delivery Truck"
              className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 max-w-xs border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Status Terbaru</p>
                  <p className="font-bold text-slate-900 dark:text-white">Paket Tiba di Tujuan</p>
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 w-full h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-wider uppercase mb-2">
            Layanan Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Solusi Pengiriman Terintegrasi
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Truck}
            title="Transportasi Darat"
            description="Armada truk lengkap untuk pengiriman antar kota dan provinsi dengan jadwal keberangkatan rutin setiap hari."
          />
          <ServiceCard
            icon={Globe}
            title="Kargo Logistik"
            description="Layanan pengiriman kargo dalam jumlah besar untuk kebutuhan bisnis dan korporasi dengan tarif ekonomis."
          />
          <ServiceCard
            icon={Package}
            title="Door to Door"
            description="Layanan penjemputan paket dari lokasi Anda dan diantar langsung ke depan pintu penerima."
          />
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" onClick={() => setCurrentPage('services')}>
            Lihat Semua Layanan
          </Button>
        </div>
      </Section>
    </>
  );
};
