import { createContext, useContext, useState, ReactNode } from 'react';

export type PageType = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail' 
  | 'contact' 
  | 'shipping-rates' 
  | 'privacy' 
  | 'terms' 
  | 'career' 
  | 'news' 
  | 'news-detail';

interface NavigationContextType {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  serviceDetailId: number | null;
  setServiceDetailId: (id: number | null) => void;
  // Tambahkan ini agar komponen lain bisa mengenali newsDetailId
  newsDetailId: number | null;
  setNewsDetailId: (id: number | null) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [serviceDetailId, setServiceDetailId] = useState<number | null>(null);
  // State untuk menyimpan ID berita yang sedang dibaca
  const [newsDetailId, setNewsDetailId] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        serviceDetailId,
        setServiceDetailId,
        // Daftarkan state dan fungsi setter ke provider
        newsDetailId,
        setNewsDetailId,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};