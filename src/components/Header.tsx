import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation, PageType } from '../contexts/NavigationContext';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { Button } from './Button';
import logoLight from '../images/logo-light.png';
import logoDark from '../images/logo-dark.png';

// Menu Utama (Desktop & Mobile)
const navItems: { id: PageType; label: string }[] = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang Kami' },
  { id: 'services', label: 'Layanan' },
  { id: 'contact', label: 'Hubungi' },
];

// Menu Tambahan (Hanya Mobile)
const extraMobileItems: { id: PageType; label: string }[] = [
  { id: 'career', label: 'Karir' },
  { id: 'news', label: 'Berita & Artikel' },
];

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation();
  const scrolled = useScrollEffect(20);

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <div className="flex items-center justify-center overflow-hidden">
              <img 
                src={isDarkMode ? logoDark : logoLight} 
                alt="Logo CV. ULUMUSI" 
                className="h-8 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'text-[#AB1F24]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#AB1F24] dark:hover:text-red-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button
              onClick={() => handleNavigation('shipping-rates')}
              className="!py-2.5 !px-5 text-sm"
            >
              Cek Ongkir
            </Button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-24 px-8 md:hidden animate-fade-in overflow-y-auto">
          <div className="flex flex-col gap-6 pb-10">
            {/* Render Menu Utama */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-2xl font-bold text-left transition-colors ${
                  currentPage === item.id
                    ? 'text-[#AB1F24]'
                    : 'text-slate-900 dark:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Render Menu Tambahan (Hanya Mobile) */}
            {extraMobileItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-2xl font-bold text-left transition-colors ${
                  currentPage === item.id
                    ? 'text-[#AB1F24]'
                    : 'text-slate-900 dark:text-white opacity-80' 
                }`}
              >
                {item.label}
              </button>
            ))}

            <hr className="border-slate-200 dark:border-slate-800 my-2" />
            
            <Button className="w-full justify-center py-4 text-lg" onClick={() => handleNavigation('shipping-rates')}>
              Cek Ongkir Sekarang
            </Button>
          </div>
        </div>
      )}
    </>
  );
};