// Clients/Partners data dengan logo yang stabil dan tidak error
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
    logo: 'https://placehold.co/400x400/1e293b/ffffff?text=MU',
    category: 'Manufacturing',
    description: 'Perusahaan manufaktur terkemuka',
  },
  {
    id: 'cv-indonesia-jaya',
    name: 'CV. Indonesia Jaya',
    logo: 'https://placehold.co/400x400/b91c1c/ffffff?text=IJ',
    category: 'Retail',
    description: 'Distributor retail nasional',
  },
  {
    id: 'pt-nusantara-makmur',
    name: 'PT. Nusantara Makmur',
    logo: 'https://placehold.co/400x400/15803d/ffffff?text=NM',
    category: 'Trading',
    description: 'Perusahaan trading internasional',
  },
  {
    id: 'pt-bersama-maju',
    name: 'PT. Bersama Maju',
    logo: 'https://placehold.co/400x400/0369a1/ffffff?text=BM',
    category: 'Technology',
    description: 'Solusi teknologi bisnis',
  },
  {
    id: 'cv-sukses-bersama',
    name: 'CV. Sukses Bersama',
    logo: 'https://placehold.co/400x400/7c3aed/ffffff?text=SB',
    category: 'E-Commerce',
    description: 'Platform e-commerce terpercaya',
  },
  {
    id: 'pt-maju-lancar',
    name: 'PT. Maju Lancar',
    logo: 'https://placehold.co/400x400/ea580c/ffffff?text=ML',
    category: 'Automotive',
    description: 'Distributor otomotif',
  },
  {
    id: 'cv-rumahku-logistik',
    name: 'CV. Rumahku Logistik',
    logo: 'https://placehold.co/400x400/475569/ffffff?text=RL',
    category: 'Logistics',
    description: 'Partner logistik strategis',
  },
  {
    id: 'pt-ceria-ekspres',
    name: 'PT. Ceria Ekspres',
    logo: 'https://placehold.co/400x400/db2777/ffffff?text=CE',
    category: 'Courier',
    description: 'Layanan ekspres terpercaya',
  },
  {
    id: 'cv-terpercaya-sejati',
    name: 'CV. Terpercaya Sejati',
    logo: 'https://placehold.co/400x400/0f172a/ffffff?text=TS',
    category: 'Wholesale',
    description: 'Distributor wholesale',
  },
  {
    id: 'pt-harmoni-bisnis',
    name: 'PT. Harmoni Bisnis',
    logo: 'https://placehold.co/400x400/0891b2/ffffff?text=HB',
    category: 'Consulting',
    description: 'Konsultan bisnis profesional',
  },
  {
    id: 'cv-pengembang-usaha',
    name: 'CV. Pengembang Usaha',
    logo: 'https://placehold.co/400x400/4d7c0f/ffffff?text=PU',
    category: 'UMKM',
    description: 'Pengembang usaha mikro',
  },
  {
    id: 'pt-harapan-multilogistik',
    name: 'PT. Harapan Multilogistik',
    logo: 'https://placehold.co/400x400/2563eb/ffffff?text=HM',
    category: 'Logistics',
    description: 'Solusi multilogistik terpadu',
  },
];

// Function untuk mendapatkan clients yang duplikat untuk infinite carousel
export const getDuplicatedClients = (): Client[] => {
  return [...clients, ...clients, ...clients];
};