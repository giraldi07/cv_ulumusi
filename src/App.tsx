import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { useEffect, useState } from 'react';
import { ShippingRatesPage } from './pages/ShippingRatesPage';
import { LegalPage } from './pages/LegalPage';
import { CareerPage } from './pages/CareerPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { WelcomePopup } from './components/WelcomePopup';

// Menambahkan props interface agar AppContent tahu status loading dari parent
interface AppContentProps {
  isAppLoading: boolean;
}

const AppContent = ({ isAppLoading }: AppContentProps) => {
  const { currentPage, serviceDetailId, newsDetailId } = useNavigation();
  const [showWelcome, setShowWelcome] = useState(false);

  // LOGIKA POPUP: Muncul 2 detik SETELAH loading selesai
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
    
    // Hanya jalankan timer jika loading sudah selesai (false) dan user belum pernah lihat popup
    if (!isAppLoading && !hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 2000); // Jeda 2 detik (2000ms)
      
      return () => clearTimeout(timer);
    }
  }, [isAppLoading]); // Trigger ulang ketika status loading berubah

  const handleClosePopup = () => {
    setShowWelcome(false);
    sessionStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  // FIX: Scroll ke atas setiap kali halaman berubah
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [currentPage, serviceDetailId, newsDetailId]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'service-detail':
        return <ServiceDetailPage serviceId={serviceDetailId ?? 0} />;
      case 'contact':
        return <ContactPage />;
      case 'shipping-rates':
        return <ShippingRatesPage />;
      case 'career':
        return <CareerPage />;
      case 'news':
        return <NewsPage />;
      case 'news-detail': 
        return <NewsDetailPage articleId={newsDetailId ?? 1} />;
      case 'privacy': 
        return <LegalPage type="privacy" />;
      case 'terms': 
        return <LegalPage type="terms" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased transition-colors duration-500 bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="min-h-screen">{renderPage()}</main>
      <Footer />
      
      {/* Welcome Popup */}
      <WelcomePopup isOpen={showWelcome} onClose={handleClosePopup} />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 4.2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <NavigationProvider>
        {/* Layar Loading Utama */}
        <LoadingScreen isLoading={isLoading} />
        
        {/* Meneruskan status isLoading ke AppContent */}
        <AppContent isAppLoading={isLoading} />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;