import { Truck } from 'lucide-react';
import { useNavigation, PageType } from '../contexts/NavigationContext';

export const Footer = () => {
  const { setCurrentPage } = useNavigation();

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                <Truck size={24} />
              </div>
              <h2 className="text-2xl font-bold">CV. ULUMUSI</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Mitra logistik terpercaya Anda. Mengirimkan paket dengan amanah, cepat, dan aman
              hingga ke tujuan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-orange-500">Layanan</h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Regular Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kargo Udara
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Transportasi Laut
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pergudangan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-orange-500">Perusahaan</h3>
            <ul className="space-y-4 text-slate-400">
              <li
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() => handleNavigation('about')}
              >
                Tentang Kami
              </li>
              <li
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() => handleNavigation('services')}
              >
                Karir
              </li>
              <li
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() => handleNavigation('contact')}
              >
                Hubungi Kami
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Berita & Artikel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-orange-500">Alamat Kantor</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Jalan Raya Lintas Sumatera
              <br />
              Kecamatan Ulumusi
              <br />
              Kabupaten Empat Lawang
              <br />
              Sumatera Selatan
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer text-sm font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer text-sm font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer text-sm font-bold"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CV. ULUMUSI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
