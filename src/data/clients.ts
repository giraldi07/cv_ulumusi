// Clients/Partners data dengan logo perusahaan logistik nyata
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
    logo: 'https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg',
    category: 'Manufacturing',
    description: 'Perusahaan manufaktur terkemuka',
  },
  {
    id: 'cv-indonesia-jaya',
    name: 'CV. Indonesia Jaya',
    logo: 'https://cdn.brandfetch.io/idv0ZbfQqf/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Retail',
    description: 'Distributor retail nasional',
  },
  {
    id: 'pt-nusantara-makmur',
    name: 'PT. Nusantara Makmur',
    logo: 'https://cdn.brandfetch.io/id5aN1Q7um/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Trading',
    description: 'Perusahaan trading internasional',
  },
  {
    id: 'pt-bersama-maju',
    name: 'PT. Bersama Maju',
    logo: 'https://cdn.brandfetch.io/id-73xAc5N/w/4257/h/1708/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Technology',
    description: 'Solusi teknologi bisnis',
  },
  {
    id: 'cv-sukses-bersama',
    name: 'CV. Sukses Bersama',
    logo: 'https://cdn.worldvectorlogo.com/logos/tiki.svg',
    category: 'E-Commerce',
    description: 'Platform e-commerce terpercaya',
  },
  {
    id: 'pt-maju-lancar',
    name: 'PT. Maju Lancar',
    logo: 'https://cdn.brandfetch.io/idoNEUGQIT/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Automotive',
    description: 'Distributor otomotif',
  },
  {
    id: 'cv-rumahku-logistik',
    name: 'CV. Rumahku Logistik',
    logo: 'https://cdn.brandfetch.io/idM8YfuE41/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Logistics',
    description: 'Partner logistik strategis',
  },
  {
    id: 'pt-ceria-ekspres',
    name: 'PT. Ceria Ekspres',
    logo: 'https://imgs.search.brave.com/9OlJrqKYi2-hN56X1oDP7TR8TGlxQiI8br7rsDqSAjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/SzNaVW52VVNWTW9u/RGxDc0JtSGhrLTB4/dmVCV05ndGxBRTdJ/Q3VQSGRSRnBkdU80/ZW9mZ000YXgzQ2RB/ZVVOUGVDd0FzLTRf/YUhSTmdaSThuT3lr/WjFlV0JsT3JjN005/NW5iMl9kT1ZKRjJx/Q1BOU0tiNUM4VV9B/M3hSeWl3VGVISXBH/MUo1QVZ4MGcvczE2/MDAvTG9nbytTaUNl/cGF0K0Vrc3ByZXMu/cG5n',
    category: 'Courier',
    description: 'Layanan ekspres terpercaya',
  },
  {
    id: 'cv-terpercaya-sejati',
    name: 'CV. Terpercaya Sejati',
    logo: 'https://imgs.search.brave.com/hc19JoZATvKMtd1Syx3vYuD1hITMpxL42xxRtQDsT2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzEvbmluamEt/eHByZXNzLWxvZ28t/cG5nX3NlZWtsb2dv/LTMzOTkzNy5wbmc',
    category: 'Wholesale',
    description: 'Distributor wholesale',
  },
  {
    id: 'pt-harmoni-bisnis',
    name: 'PT. Harmoni Bisnis',
    logo: 'https://imgs.search.brave.com/Swd6HtPN3WMeERJ4QriZ6_-_OqPTTzDHtsNMlXRgeYQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnBlbmdhamFydGVr/bm8uY28uaWQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTEv/bG9nby1hbnRlcmFq/YS1wbmctMTEtMTAy/NHgxMDI0LmpwZw',
    category: 'Consulting',
    description: 'Konsultan bisnis profesional',
  },
  {
    id: 'cv-pengembang-usaha',
    name: 'CV. Pengembang Usaha',
    logo: 'https://brandlogos.net/wp-content/uploads/2025/03/spx_express-logo_brandlogos.net_7avqk-768x313.png',
    category: 'UMKM',
    description: 'Pengembang usaha mikro',
  },
  {
    id: 'pt-harapan-multilogistik',
    name: 'PT. Harapan Multilogistik',
    logo: 'https://cdn.brandfetch.io/idi5zd-u9v/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Logistics',
    description: 'Solusi multilogistik terpadu',
  },
  {
    id: 'pt-global-express',
    name: 'PT. Global Express',
    logo: 'https://cdn.worldvectorlogo.com/logos/sap.svg',
    category: 'Courier',
    description: 'Jasa pengiriman global',
  },
  {
    id: 'cv-mitra-sejahtera',
    name: 'CV. Mitra Sejahtera',
    logo: 'https://cdn.brandfetch.io/idawOgYOsG/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Trading',
    description: 'Partner dagang terpercaya',
  },
  {
    id: 'pt-teknologi-maju',
    name: 'PT. Teknologi Maju',
    logo: 'https://cdn.brandfetch.io/id_eF5X4DY/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    category: 'Technology',
    description: 'Inovasi teknologi terdepan',
  },
  {
    id: 'cv-distribusi-nusantara',
    name: 'CV. Distribusi Nusantara',
    logo: 'https://cdn.worldvectorlogo.com/logos/tokopedia-1.svg',
    category: 'Distribution',
    description: 'Jaringan distribusi nasional',
  },
  {
    id: 'pt-sentosa-cargo',
    name: 'PT. Sentosa Cargo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bukalapak_%282020%29.svg',
    category: 'Cargo',
    description: 'Spesialis kargo heavy duty',
  },
  {
    id: 'cv-makmur-jaya',
    name: 'CV. Makmur Jaya',
    logo: 'https://cdn.worldvectorlogo.com/logos/lazada-2.svg',
    category: 'Manufacturing',
    description: 'Manufaktur berkualitas tinggi',
  },
  {
    id: 'pt-indo-cargo',
    name: 'PT. Indo Cargo',
    logo: 'https://cdn.worldvectorlogo.com/logos/grab.svg',
    category: 'Cargo',
    description: 'Solusi kargo terpadu',
  },
  {
    id: 'cv-express-mandiri',
    name: 'CV. Express Mandiri',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Gojek_logo_2022.svg',
    category: 'Express',
    description: 'Layanan express 24 jam',
  },
];

// Function untuk mendapatkan clients yang duplikat untuk infinite carousel
export const getDuplicatedClients = (): Client[] => {
  return [...clients, ...clients, ...clients];
};