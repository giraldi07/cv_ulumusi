// Testing Documentation for Tracking Feature
// Gunakan nomor resi berikut untuk testing fitur tracking

export const AVAILABLE_RESI_FOR_TESTING = [
  {
    resi: 'ULU-2024-001',
    status: 'delivered',
    description: 'Pengiriman sudah selesai - Laptop Dell ke Bandung',
  },
  {
    resi: 'ULU-2024-002',
    status: 'in-transit',
    description: 'Sedang dalam perjalanan - Pakaian ke Medan',
  },
  {
    resi: 'ULU-2024-003',
    status: 'in-delivery',
    description: 'Sedang diantar - Smart Home System ke Tangerang',
  },
  {
    resi: 'ULU-2024-004',
    status: 'picked-up',
    description: 'Sudah diambil - Buku-buku ke Yogyakarta',
  },
  {
    resi: 'ULU-2024-005',
    status: 'pending',
    description: 'Menunggu pickup - Perhiasan ke Depok',
  },
];

// Untuk testing, coba salah satu resi di atas dengan format uppercase atau lowercase
// Contoh: masukkan 'ULU-2024-001' atau 'ulu-2024-001' pada form tracking
