// Clients/Partners data dengan logo perusahaan nyata
export interface Client {
  id: string;
  name: string;
  logo: string;
  category?: string;
  description?: string;
}

export const clients: Client[] = [
  {
    id: 'pt-mitra-utama',
    name: 'PT. Mitra Utama',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop&q=80',
    category: 'Manufacturing',
    description: 'Perusahaan manufaktur terkemuka',
  },
  {
    id: 'cv-indonesia-jaya',
    name: 'CV. Indonesia Jaya',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop&q=80',
    category: 'Retail',
    description: 'Distributor retail nasional',
  },
  {
    id: 'pt-nusantara-makmur',
    name: 'PT. Nusantara Makmur',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&q=80',
    category: 'Trading',
    description: 'Perusahaan trading internasional',
  },
  {
    id: 'pt-bersama-maju',
    name: 'PT. Bersama Maju',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop&q=80',
    category: 'Technology',
    description: 'Solusi teknologi bisnis',
  },
  {
    id: 'cv-sukses-bersama',
    name: 'CV. Sukses Bersama',
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&q=80',
    category: 'E-Commerce',
    description: 'Platform e-commerce terpercaya',
  },
  {
    id: 'pt-maju-lancar',
    name: 'PT. Maju Lancar',
    logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&q=80',
    category: 'Automotive',
    description: 'Distributor otomotif',
  },
  {
    id: 'cv-rumahku-logistik',
    name: 'CV. Rumahku Logistik',
    logo: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=400&fit=crop&q=80',
    category: 'Logistics',
    description: 'Partner logistik strategis',
  },
  {
    id: 'pt-ceria-ekspres',
    name: 'PT. Ceria Ekspres',
    logo: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=400&fit=crop&q=80',
    category: 'Courier',
    description: 'Layanan ekspres terpercaya',
  },
  {
    id: 'cv-terpercaya-sejati',
    name: 'CV. Terpercaya Sejati',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop&q=80',
    category: 'Wholesale',
    description: 'Distributor wholesale',
  },
  {
    id: 'pt-harmoni-bisnis',
    name: 'PT. Harmoni Bisnis',
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80',
    category: 'Consulting',
    description: 'Konsultan bisnis profesional',
  },
  {
    id: 'cv-pengembang-usaha',
    name: 'CV. Pengembang Usaha',
    logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop&q=80',
    category: 'UMKM',
    description: 'Pengembang usaha mikro',
  },
  {
    id: 'pt-harapan-multilogistik',
    name: 'PT. Harapan Multilogistik',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&q=80',
    category: 'Logistics',
    description: 'Solusi multilogistik terpadu',
  },
  {
    id: 'pt-global-express',
    name: 'PT. Global Express',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&q=80',
    category: 'Courier',
    description: 'Jasa pengiriman global',
  },
  {
    id: 'cv-mitra-sejahtera',
    name: 'CV. Mitra Sejahtera',
    logo: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop&q=80',
    category: 'Trading',
    description: 'Partner dagang terpercaya',
  },
  {
    id: 'pt-teknologi-maju',
    name: 'PT. Teknologi Maju',
    logo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop&q=80',
    category: 'Technology',
    description: 'Inovasi teknologi terdepan',
  },
  {
    id: 'cv-distribusi-nusantara',
    name: 'CV. Distribusi Nusantara',
    logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&q=80',
    category: 'Distribution',
    description: 'Jaringan distribusi nasional',
  },
  {
    id: 'pt-sentosa-cargo',
    name: 'PT. Sentosa Cargo',
    logo: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&q=80',
    category: 'Cargo',
    description: 'Spesialis kargo heavy duty',
  },
  {
    id: 'cv-makmur-jaya',
    name: 'CV. Makmur Jaya',
    logo: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=400&fit=crop&q=80',
    category: 'Manufacturing',
    description: 'Manufaktur berkualitas tinggi',
  },
];

// Function untuk mendapatkan clients yang duplikat untuk infinite carousel
export const getDuplicatedClients = (): Client[] => {
  return [...clients, ...clients, ...clients];
};