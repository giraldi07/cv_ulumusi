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

  // FIX: Scroll ke atas setiap kali halaman berubah
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Gunakan 'instant' agar user tidak melihat proses scrolling-nya (lebih natural untuk ganti halaman)
    });
  }, [currentPage, serviceDetailId, newsDetailId]); // Trigger jalan saat page atau ID detail berubah

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
