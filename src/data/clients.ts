// Clients/Partners data dengan logo profesional menggunakan UI Avatars
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
    logo: 'https://ui-avatars.com/api/?name=Mitra+Utama&size=400&background=1e293b&color=ffffff&bold=true&format=svg',
    category: 'Manufacturing',
    description: 'Perusahaan manufaktur terkemuka',
  },
  {
    id: 'cv-indonesia-jaya',
    name: 'CV. Indonesia Jaya',
    logo: 'https://ui-avatars.com/api/?name=Indonesia+Jaya&size=400&background=ea580c&color=ffffff&bold=true&format=svg',
    category: 'Retail',
    description: 'Distributor retail nasional',
  },
  {
    id: 'pt-nusantara-makmur',
    name: 'PT. Nusantara Makmur',
    logo: 'https://ui-avatars.com/api/?name=Nusantara+Makmur&size=400&background=15803d&color=ffffff&bold=true&format=svg',
    category: 'Trading',
    description: 'Perusahaan trading internasional',
  },
  {
    id: 'pt-bersama-maju',
    name: 'PT. Bersama Maju',
    logo: 'https://ui-avatars.com/api/?name=Bersama+Maju&size=400&background=0369a1&color=ffffff&bold=true&format=svg',
    category: 'Technology',
    description: 'Solusi teknologi bisnis',
  },
  {
    id: 'cv-sukses-bersama',
    name: 'CV. Sukses Bersama',
    logo: 'https://ui-avatars.com/api/?name=Sukses+Bersama&size=400&background=7c3aed&color=ffffff&bold=true&format=svg',
    category: 'E-Commerce',
    description: 'Platform e-commerce terpercaya',
  },
  {
    id: 'pt-maju-lancar',
    name: 'PT. Maju Lancar',
    logo: 'https://ui-avatars.com/api/?name=Maju+Lancar&size=400&background=dc2626&color=ffffff&bold=true&format=svg',
    category: 'Automotive',
    description: 'Distributor otomotif',
  },
  {
    id: 'cv-rumahku-logistik',
    name: 'CV. Rumahku Logistik',
    logo: 'https://ui-avatars.com/api/?name=Rumahku+Logistik&size=400&background=475569&color=ffffff&bold=true&format=svg',
    category: 'Logistics',
    description: 'Partner logistik strategis',
  },
  {
    id: 'pt-ceria-ekspres',
    name: 'PT. Ceria Ekspres',
    logo: 'https://ui-avatars.com/api/?name=Ceria+Ekspres&size=400&background=db2777&color=ffffff&bold=true&format=svg',
    category: 'Courier',
    description: 'Layanan ekspres terpercaya',
  },
  {
    id: 'cv-terpercaya-sejati',
    name: 'CV. Terpercaya Sejati',
    logo: 'https://ui-avatars.com/api/?name=Terpercaya+Sejati&size=400&background=0f172a&color=ffffff&bold=true&format=svg',
    category: 'Wholesale',
    description: 'Distributor wholesale',
  },
  {
    id: 'pt-harmoni-bisnis',
    name: 'PT. Harmoni Bisnis',
    logo: 'https://ui-avatars.com/api/?name=Harmoni+Bisnis&size=400&background=0891b2&color=ffffff&bold=true&format=svg',
    category: 'Consulting',
    description: 'Konsultan bisnis profesional',
  },
  {
    id: 'cv-pengembang-usaha',
    name: 'CV. Pengembang Usaha',
    logo: 'https://ui-avatars.com/api/?name=Pengembang+Usaha&size=400&background=4d7c0f&color=ffffff&bold=true&format=svg',
    category: 'UMKM',
    description: 'Pengembang usaha mikro',
  },
  {
    id: 'pt-harapan-multilogistik',
    name: 'PT. Harapan Multilogistik',
    logo: 'https://ui-avatars.com/api/?name=Harapan+Multi&size=400&background=2563eb&color=ffffff&bold=true&format=svg',
    category: 'Logistics',
    description: 'Solusi multilogistik terpadu',
  },
  {
    id: 'pt-global-express',
    name: 'PT. Global Express',
    logo: 'https://ui-avatars.com/api/?name=Global+Express&size=400&background=0284c7&color=ffffff&bold=true&format=svg',
    category: 'Courier',
    description: 'Jasa pengiriman global',
  },
  {
    id: 'cv-mitra-sejahtera',
    name: 'CV. Mitra Sejahtera',
    logo: 'https://ui-avatars.com/api/?name=Mitra+Sejahtera&size=400&background=059669&color=ffffff&bold=true&format=svg',
    category: 'Trading',
    description: 'Partner dagang terpercaya',
  },
  {
    id: 'pt-teknologi-maju',
    name: 'PT. Teknologi Maju',
    logo: 'https://ui-avatars.com/api/?name=Teknologi+Maju&size=400&background=7c2d12&color=ffffff&bold=true&format=svg',
    category: 'Technology',
    description: 'Inovasi teknologi terdepan',
  },
  {
    id: 'cv-distribusi-nusantara',
    name: 'CV. Distribusi Nusantara',
    logo: 'https://ui-avatars.com/api/?name=Distribusi+Nusantara&size=400&background=be123c&color=ffffff&bold=true&format=svg',
    category: 'Distribution',
    description: 'Jaringan distribusi nasional',
  },
  {
    id: 'pt-sentosa-cargo',
    name: 'PT. Sentosa Cargo',
    logo: 'https://ui-avatars.com/api/?name=Sentosa+Cargo&size=400&background=6366f1&color=ffffff&bold=true&format=svg',
    category: 'Cargo',
    description: 'Spesialis kargo heavy duty',
  },
  {
    id: 'cv-makmur-jaya',
    name: 'CV. Makmur Jaya',
    logo: 'https://ui-avatars.com/api/?name=Makmur+Jaya&size=400&background=ca8a04&color=ffffff&bold=true&format=svg',
    category: 'Manufacturing',
    description: 'Manufaktur berkualitas tinggi',
  },
];

// Function untuk mendapatkan clients yang duplikat untuk infinite carousel
export const getDuplicatedClients = (): Client[] => {
  return [...clients, ...clients, ...clients];
};