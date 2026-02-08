import { useNavigation, PageType } from '../contexts/NavigationContext';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../images/logo-ulumusi.png';

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
            {/* Bagian Logo Baru */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src={logoImg} 
                  alt="Logo CV. ULUMUSI" 
                  className="h-14 w-auto object-contain" 
                />
              </div>
              <h2 className="text-md font-bold tracking-tight">CV. ULUMUSI</h2>
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
              Komp. RSS PEMDA Blok B 2 No. 7
              <br />
              RT.02/08 Banjarsari
              <br />
              Cipocok Jaya
              <br />
              Banten, Indonesia
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CV. ULUMUSI. All rights reserved.</p>
          <div className="flex gap-6">
            <button 
                onClick={() => handleNavigation('privacy')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
            </button>
            <button 
                onClick={() => handleNavigation('terms')} 
                className="hover:text-white transition-colors cursor-pointer"
            >
                Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};