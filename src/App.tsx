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

const AppContent = () => {
  const { currentPage, serviceDetailId, newsDetailId } = useNavigation();

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
      case 'career': // Case baru untuk Karir
        return <CareerPage />;
      case 'news':   // Case baru untuk Berita
        return <NewsPage />;
      case 'news-detail': return <NewsDetailPage articleId={newsDetailId ?? 1} />;
      case 'privacy': return <LegalPage type="privacy" />; // Panggil komponen baru
      case 'terms': return <LegalPage type="terms" />;     // Panggil komponen baru
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased transition-colors duration-500 bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="min-h-screen">{renderPage()}</main>
      <Footer />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and disappear when mounted
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <NavigationProvider>
        <LoadingScreen isLoading={isLoading} />
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
