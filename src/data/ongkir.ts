// src/data/ongkir.ts

export interface ShippingRate {
  destination: string;
  province: string;
  postalCode: string;
  distance: number; // in km
  services: {
    // Express Services
    express: {
      price: number;
      etd: string; // estimated time delivery
      available: boolean;
    };
    sameDay: {
      price: number;
      etd: string;
      available: boolean;
      cutoffTime: string; // order before this time
    };
    nextDay: {
      price: number;
      etd: string;
      available: boolean;
    };
    // Regular Services
    reguler: {
      price: number;
      etd: string;
      available: boolean;
    };
    ekonomis: {
      price: number;
      etd: string;
      available: boolean;
    };
    // Cargo Services
    cargo: {
      price: number; // per kg
      etd: string;
      available: boolean;
      minWeight: number;
    };
    cargoTrucking: {
      price: number; // per kg
      etd: string;
      available: boolean;
      minWeight: number;
    };
  };
  // Additional info
  coverageArea: string[];
  popularRoute: boolean;
}

export const shippingRates: ShippingRate[] = [
  // JABODETABEK - Tier 1
  {
    destination: 'Jakarta Pusat',
    province: 'DKI Jakarta',
    postalCode: '10110',
    distance: 95,
    popularRoute: true,
    coverageArea: ['Gambir', 'Tanah Abang', 'Menteng', 'Senen', 'Cempaka Putih', 'Johar Baru', 'Kemayoran', 'Sawah Besar'],
    services: {
      express: { price: 12000, etd: '4-6 jam', available: true },
      sameDay: { price: 28000, etd: '6-8 jam', available: true, cutoffTime: '14:00' },
      nextDay: { price: 20000, etd: '1 hari', available: true },
      reguler: { price: 10000, etd: '1-2 hari', available: true },
      ekonomis: { price: 7000, etd: '2-3 hari', available: true },
      cargo: { price: 3500, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2800, etd: '3-4 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postalCode: '12110',
    distance: 100,
    popularRoute: true,
    coverageArea: ['Kebayoran Baru', 'Kebayoran Lama', 'Pesanggrahan', 'Cilandak', 'Pasar Minggu', 'Jagakarsa', 'Mampang Prapatan', 'Pancoran', 'Tebet', 'Setiabudi'],
    services: {
      express: { price: 12000, etd: '4-6 jam', available: true },
      sameDay: { price: 28000, etd: '6-8 jam', available: true, cutoffTime: '14:00' },
      nextDay: { price: 20000, etd: '1 hari', available: true },
      reguler: { price: 10000, etd: '1-2 hari', available: true },
      ekonomis: { price: 7000, etd: '2-3 hari', available: true },
      cargo: { price: 3500, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2800, etd: '3-4 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Jakarta Barat',
    province: 'DKI Jakarta',
    postalCode: '11220',
    distance: 85,
    popularRoute: true,
    coverageArea: ['Cengkareng', 'Grogol Petamburan', 'Taman Sari', 'Tambora', 'Kebon Jeruk', 'Kalideres', 'Palmerah', 'Kembangan'],
    services: {
      express: { price: 11000, etd: '4-6 jam', available: true },
      sameDay: { price: 26000, etd: '6-8 jam', available: true, cutoffTime: '14:00' },
      nextDay: { price: 18000, etd: '1 hari', available: true },
      reguler: { price: 9500, etd: '1-2 hari', available: true },
      ekonomis: { price: 6500, etd: '2-3 hari', available: true },
      cargo: { price: 3200, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2600, etd: '3-4 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Jakarta Timur',
    province: 'DKI Jakarta',
    postalCode: '13330',
    distance: 110,
    popularRoute: true,
    coverageArea: ['Matraman', 'Pulo Gadung', 'Jatinegara', 'Kramat Jati', 'Pasar Rebo', 'Cakung', 'Duren Sawit', 'Makasar', 'Cipayung', 'Ciracas'],
    services: {
      express: { price: 13000, etd: '4-7 jam', available: true },
      sameDay: { price: 30000, etd: '7-9 jam', available: true, cutoffTime: '13:00' },
      nextDay: { price: 21000, etd: '1 hari', available: true },
      reguler: { price: 11000, etd: '1-2 hari', available: true },
      ekonomis: { price: 7500, etd: '2-3 hari', available: true },
      cargo: { price: 3800, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 3000, etd: '3-4 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Jakarta Utara',
    province: 'DKI Jakarta',
    postalCode: '14440',
    distance: 105,
    popularRoute: true,
    coverageArea: ['Koja', 'Kelapa Gading', 'Tanjung Priok', 'Pademangan', 'Penjaringan', 'Cilincing'],
    services: {
      express: { price: 12500, etd: '4-6 jam', available: true },
      sameDay: { price: 29000, etd: '6-8 jam', available: true, cutoffTime: '13:30' },
      nextDay: { price: 20500, etd: '1 hari', available: true },
      reguler: { price: 10500, etd: '1-2 hari', available: true },
      ekonomis: { price: 7200, etd: '2-3 hari', available: true },
      cargo: { price: 3600, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2900, etd: '3-4 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Tangerang',
    province: 'Banten',
    postalCode: '15111',
    distance: 35,
    popularRoute: true,
    coverageArea: ['Tangerang Kota', 'Cipondoh', 'Karawaci', 'Periuk', 'Cibodas', 'Neglasari', 'Batuceper', 'Benda', 'Jatiuwung', 'Larangan', 'Pinang'],
    services: {
      express: { price: 8000, etd: '3-5 jam', available: true },
      sameDay: { price: 18000, etd: '5-7 jam', available: true, cutoffTime: '15:00' },
      nextDay: { price: 12000, etd: '1 hari', available: true },
      reguler: { price: 6000, etd: '1-2 hari', available: true },
      ekonomis: { price: 4000, etd: '2-3 hari', available: true },
      cargo: { price: 2500, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2000, etd: '2-3 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Tangerang Selatan',
    province: 'Banten',
    postalCode: '15310',
    distance: 50,
    popularRoute: true,
    coverageArea: ['Serpong', 'Ciputat', 'Pamulang', 'Pondok Aren', 'Bintaro', 'BSD', 'Setu'],
    services: {
      express: { price: 9000, etd: '3-5 jam', available: true },
      sameDay: { price: 20000, etd: '5-7 jam', available: true, cutoffTime: '15:00' },
      nextDay: { price: 14000, etd: '1 hari', available: true },
      reguler: { price: 7000, etd: '1-2 hari', available: true },
      ekonomis: { price: 5000, etd: '2-3 hari', available: true },
      cargo: { price: 2800, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2200, etd: '2-3 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Bekasi',
    province: 'Jawa Barat',
    postalCode: '17112',
    distance: 60,
    popularRoute: true,
    coverageArea: ['Bekasi Kota', 'Bekasi Barat', 'Bekasi Timur', 'Bekasi Selatan', 'Bekasi Utara', 'Jatiasih', 'Bantar Gebang', 'Pondok Gede', 'Jatisampurna', 'Mustika Jaya', 'Pondok Melati', 'Rawalumbu'],
    services: {
      express: { price: 10000, etd: '4-6 jam', available: true },
      sameDay: { price: 22000, etd: '6-8 jam', available: true, cutoffTime: '14:00' },
      nextDay: { price: 15000, etd: '1 hari', available: true },
      reguler: { price: 8000, etd: '1-2 hari', available: true },
      ekonomis: { price: 5500, etd: '2-3 hari', available: true },
      cargo: { price: 3000, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2400, etd: '2-3 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Depok',
    province: 'Jawa Barat',
    postalCode: '16411',
    distance: 75,
    popularRoute: true,
    coverageArea: ['Beji', 'Pancoran Mas', 'Cimanggis', 'Sawangan', 'Sukmajaya', 'Limo', 'Cinere', 'Tapos', 'Cilodong', 'Cipayung', 'Bojongsari'],
    services: {
      express: { price: 11000, etd: '4-6 jam', available: true },
      sameDay: { price: 24000, etd: '6-8 jam', available: true, cutoffTime: '14:00' },
      nextDay: { price: 16000, etd: '1 hari', available: true },
      reguler: { price: 9000, etd: '1-2 hari', available: true },
      ekonomis: { price: 6000, etd: '2-3 hari', available: true },
      cargo: { price: 3200, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2500, etd: '2-3 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Bogor',
    province: 'Jawa Barat',
    postalCode: '16111',
    distance: 90,
    popularRoute: true,
    coverageArea: ['Bogor Tengah', 'Bogor Utara', 'Bogor Selatan', 'Bogor Timur', 'Bogor Barat', 'Tanah Sareal', 'Cibinong', 'Gunung Putri', 'Citeureup', 'Jonggol'],
    services: {
      express: { price: 12000, etd: '5-7 jam', available: true },
      sameDay: { price: 26000, etd: '7-9 jam', available: true, cutoffTime: '13:00' },
      nextDay: { price: 18000, etd: '1 hari', available: true },
      reguler: { price: 10000, etd: '1-2 hari', available: true },
      ekonomis: { price: 6500, etd: '2-3 hari', available: true },
      cargo: { price: 3500, etd: '2-3 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 2800, etd: '3-4 hari', available: true, minWeight: 50 }
    }
  },

  // JAWA BARAT - Tier 2
  {
    destination: 'Bandung',
    province: 'Jawa Barat',
    postalCode: '40111',
    distance: 145,
    popularRoute: true,
    coverageArea: ['Bandung Kota', 'Bandung Barat', 'Bandung Kulon', 'Bandung Wetan', 'Cimahi', 'Margahayu', 'Dayeuhkolot', 'Baleendah', 'Soreang', 'Cicalengka'],
    services: {
      express: { price: 15000, etd: '8-12 jam', available: true },
      sameDay: { price: 35000, etd: '10-14 jam', available: true, cutoffTime: '10:00' },
      nextDay: { price: 24000, etd: '1 hari', available: true },
      reguler: { price: 13000, etd: '2-3 hari', available: true },
      ekonomis: { price: 9000, etd: '3-4 hari', available: true },
      cargo: { price: 4200, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 3500, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Cirebon',
    province: 'Jawa Barat',
    postalCode: '45111',
    distance: 220,
    popularRoute: true,
    coverageArea: ['Kejaksan', 'Lemahwungkuk', 'Pekalipan', 'Harjamukti', 'Kesambi', 'Plumbon', 'Palimanan', 'Weru'],
    services: {
      express: { price: 18000, etd: '1 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 28000, etd: '1-2 hari', available: true },
      reguler: { price: 15000, etd: '2-3 hari', available: true },
      ekonomis: { price: 11000, etd: '3-4 hari', available: true },
      cargo: { price: 5000, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 4200, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Sukabumi',
    province: 'Jawa Barat',
    postalCode: '43111',
    distance: 115,
    popularRoute: false,
    coverageArea: ['Sukabumi Kota', 'Cikole', 'Gunung Puyuh', 'Lembursitu', 'Warudoyong', 'Cisaat', 'Palabuhanratu', 'Cibadak'],
    services: {
      express: { price: 14000, etd: '8-10 jam', available: true },
      sameDay: { price: 32000, etd: '10-12 jam', available: true, cutoffTime: '11:00' },
      nextDay: { price: 22000, etd: '1-2 hari', available: true },
      reguler: { price: 12000, etd: '2-3 hari', available: true },
      ekonomis: { price: 8500, etd: '3-4 hari', available: true },
      cargo: { price: 4000, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 3300, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Tasikmalaya',
    province: 'Jawa Barat',
    postalCode: '46111',
    distance: 265,
    popularRoute: false,
    coverageArea: ['Tasikmalaya Kota', 'Cihideung', 'Cipedes', 'Tawang', 'Indihiang', 'Kawalu', 'Mangkubumi', 'Bungursari', 'Tamansari', 'Purbaratu'],
    services: {
      express: { price: 20000, etd: '1 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 32000, etd: '1-2 hari', available: true },
      reguler: { price: 17000, etd: '2-3 hari', available: true },
      ekonomis: { price: 12000, etd: '3-4 hari', available: true },
      cargo: { price: 5500, etd: '3-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 4500, etd: '4-6 hari', available: true, minWeight: 50 }
    }
  },

  // JAWA TENGAH - Tier 2
  {
    destination: 'Semarang',
    province: 'Jawa Tengah',
    postalCode: '50111',
    distance: 425,
    popularRoute: true,
    coverageArea: ['Semarang Tengah', 'Semarang Utara', 'Semarang Selatan', 'Semarang Timur', 'Semarang Barat', 'Genuk', 'Pedurungan', 'Candisari', 'Gajahmungkur', 'Tembalang', 'Banyumanik', 'Gunungpati', 'Tugu', 'Ngaliyan', 'Mijen', 'Gayamsari'],
    services: {
      express: { price: 25000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 40000, etd: '1-2 hari', available: true },
      reguler: { price: 22000, etd: '2-3 hari', available: true },
      ekonomis: { price: 15000, etd: '3-4 hari', available: true },
      cargo: { price: 5800, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 4800, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Solo (Surakarta)',
    province: 'Jawa Tengah',
    postalCode: '57111',
    distance: 485,
    popularRoute: true,
    coverageArea: ['Laweyan', 'Serengan', 'Pasar Kliwon', 'Jebres', 'Banjarsari', 'Karanganyar', 'Sukoharjo', 'Kartasura'],
    services: {
      express: { price: 27000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 43000, etd: '1-2 hari', available: true },
      reguler: { price: 23000, etd: '2-3 hari', available: true },
      ekonomis: { price: 16000, etd: '3-5 hari', available: true },
      cargo: { price: 6000, etd: '3-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 5000, etd: '4-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Yogyakarta',
    province: 'DI Yogyakarta',
    postalCode: '55111',
    distance: 520,
    popularRoute: true,
    coverageArea: ['Yogyakarta Kota', 'Sleman', 'Bantul', 'Godean', 'Gamping', 'Depok', 'Mlati', 'Kasihan', 'Sewon', 'Ngaglik', 'Kalasan'],
    services: {
      express: { price: 28000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 45000, etd: '1-2 hari', available: true },
      reguler: { price: 20000, etd: '2-3 hari', available: true },
      ekonomis: { price: 14000, etd: '3-4 hari', available: true },
      cargo: { price: 5200, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 4300, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Purwokerto',
    province: 'Jawa Tengah',
    postalCode: '53111',
    distance: 380,
    popularRoute: false,
    coverageArea: ['Purwokerto Timur', 'Purwokerto Barat', 'Purwokerto Selatan', 'Purwokerto Utara', 'Banyumas', 'Sokaraja', 'Purbalingga'],
    services: {
      express: { price: 24000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 38000, etd: '1-2 hari', available: true },
      reguler: { price: 19000, etd: '2-3 hari', available: true },
      ekonomis: { price: 13000, etd: '3-4 hari', available: true },
      cargo: { price: 5000, etd: '3-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 4100, etd: '4-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Tegal',
    province: 'Jawa Tengah',
    postalCode: '52111',
    distance: 310,
    popularRoute: false,
    coverageArea: ['Tegal Barat', 'Tegal Timur', 'Tegal Selatan', 'Margadana', 'Slawi', 'Adiwerna'],
    services: {
      express: { price: 22000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 35000, etd: '1-2 hari', available: true },
      reguler: { price: 18000, etd: '2-3 hari', available: true },
      ekonomis: { price: 12500, etd: '3-4 hari', available: true },
      cargo: { price: 4800, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 3900, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },

  // JAWA TIMUR - Tier 2
  {
    destination: 'Surabaya',
    province: 'Jawa Timur',
    postalCode: '60111',
    distance: 760,
    popularRoute: true,
    coverageArea: ['Surabaya Pusat', 'Surabaya Utara', 'Surabaya Selatan', 'Surabaya Timur', 'Surabaya Barat', 'Gubeng', 'Wonokromo', 'Rungkut', 'Mulyorejo', 'Genteng', 'Tegalsari', 'Sawahan', 'Kenjeran', 'Bulak', 'Semampir', 'Pabean Cantian', 'Krembangan', 'Tambaksari', 'Simokerto', 'Pakal', 'Asemrowo', 'Sukomanunggal', 'Tandes', 'Benowo', 'Sambikerep', 'Lakarsantri', 'Wiyung', 'Dukuh Pakis', 'Gayungan', 'Jambangan', 'Wonocolo', 'Tenggilis Mejoyo', 'Gunung Anyar', 'Sukolilo'],
    services: {
      express: { price: 32000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 50000, etd: '1-2 hari', available: true },
      reguler: { price: 27000, etd: '2-3 hari', available: true },
      ekonomis: { price: 18000, etd: '3-4 hari', available: true },
      cargo: { price: 6500, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 5300, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Malang',
    province: 'Jawa Timur',
    postalCode: '65111',
    distance: 850,
    popularRoute: true,
    coverageArea: ['Malang Kota', 'Lowokwaru', 'Blimbing', 'Klojen', 'Kedungkandang', 'Sukun', 'Batu', 'Singosari', 'Lawang', 'Kepanjen'],
    services: {
      express: { price: 35000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 55000, etd: '2 hari', available: true },
      reguler: { price: 29000, etd: '2-3 hari', available: true },
      ekonomis: { price: 20000, etd: '3-5 hari', available: true },
      cargo: { price: 7000, etd: '3-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 5800, etd: '4-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Kediri',
    province: 'Jawa Timur',
    postalCode: '64111',
    distance: 700,
    popularRoute: false,
    coverageArea: ['Kediri Kota', 'Mojoroto', 'Kota Kediri', 'Pesantren', 'Pare', 'Gurah', 'Gampengrejo'],
    services: {
      express: { price: 30000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 48000, etd: '2 hari', available: true },
      reguler: { price: 26000, etd: '2-3 hari', available: true },
      ekonomis: { price: 18000, etd: '3-5 hari', available: true },
      cargo: { price: 6300, etd: '3-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 5200, etd: '4-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Jember',
    province: 'Jawa Timur',
    postalCode: '68111',
    distance: 950,
    popularRoute: false,
    coverageArea: ['Jember Kota', 'Kaliwates', 'Sumbersari', 'Patrang', 'Arjasa', 'Pakusari', 'Kencong'],
    services: {
      express: { price: 38000, etd: '2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 60000, etd: '2-3 hari', available: true },
      reguler: { price: 32000, etd: '3-4 hari', available: true },
      ekonomis: { price: 22000, etd: '4-5 hari', available: true },
      cargo: { price: 7500, etd: '4-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 6200, etd: '5-6 hari', available: true, minWeight: 50 }
    }
  },

  // SUMATERA - Tier 3
  {
    destination: 'Palembang',
    province: 'Sumatera Selatan',
    postalCode: '30111',
    distance: 610,
    popularRoute: true,
    coverageArea: ['Ilir Barat I', 'Ilir Timur I', 'Ilir Timur II', 'Seberang Ulu I', 'Seberang Ulu II', 'Bukit Kecil', 'Gandus', 'Jakabaring', 'Plaju', 'Sako', 'Kemuning'],
    services: {
      express: { price: 28000, etd: '1-2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 45000, etd: '2 hari', available: true },
      reguler: { price: 24000, etd: '2-3 hari', available: true },
      ekonomis: { price: 17000, etd: '3-4 hari', available: true },
      cargo: { price: 7000, etd: '3-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 5800, etd: '4-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Lampung (Bandar Lampung)',
    province: 'Lampung',
    postalCode: '35111',
    distance: 280,
    popularRoute: true,
    coverageArea: ['Tanjung Karang', 'Telukbetung', 'Kedaton', 'Rajabasa', 'Tanjung Senang', 'Sukabumi', 'Kemiling', 'Metro'],
    services: {
      express: { price: 22000, etd: '1 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 35000, etd: '1-2 hari', available: true },
      reguler: { price: 18000, etd: '2-3 hari', available: true },
      ekonomis: { price: 13000, etd: '3-4 hari', available: true },
      cargo: { price: 5500, etd: '3-4 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 4500, etd: '4-5 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Medan',
    province: 'Sumatera Utara',
    postalCode: '20111',
    distance: 1850,
    popularRoute: true,
    coverageArea: ['Medan Kota', 'Medan Barat', 'Medan Timur', 'Medan Utara', 'Medan Selatan', 'Medan Polonia', 'Medan Petisah', 'Medan Helvetia', 'Medan Sunggal', 'Medan Amplas', 'Medan Denai', 'Medan Tuntungan', 'Deli Serdang', 'Binjai'],
    services: {
      express: { price: 45000, etd: '2-3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 70000, etd: '2-3 hari', available: true },
      reguler: { price: 38000, etd: '3-4 hari', available: true },
      ekonomis: { price: 28000, etd: '4-5 hari', available: true },
      cargo: { price: 9000, etd: '4-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 7500, etd: '5-7 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Pekanbaru',
    province: 'Riau',
    postalCode: '28111',
    distance: 1100,
    popularRoute: true,
    coverageArea: ['Pekanbaru Kota', 'Sukajadi', 'Sail', 'Lima Puluh', 'Senapelan', 'Pekanbaru Barat', 'Marpoyan Damai', 'Tampan', 'Payung Sekaki', 'Rumbai', 'Tenayan Raya'],
    services: {
      express: { price: 40000, etd: '2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 62000, etd: '2-3 hari', available: true },
      reguler: { price: 34000, etd: '3-4 hari', available: true },
      ekonomis: { price: 25000, etd: '4-5 hari', available: true },
      cargo: { price: 8500, etd: '4-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 7000, etd: '5-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Padang',
    province: 'Sumatera Barat',
    postalCode: '25111',
    distance: 1300,
    popularRoute: false,
    coverageArea: ['Padang Barat', 'Padang Timur', 'Padang Utara', 'Padang Selatan', 'Koto Tangah', 'Nanggalo', 'Kuranji', 'Pauh', 'Lubuk Begalung', 'Lubuk Kilangan', 'Bungus Teluk Kabung'],
    services: {
      express: { price: 42000, etd: '2-3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 65000, etd: '2-3 hari', available: true },
      reguler: { price: 36000, etd: '3-4 hari', available: true },
      ekonomis: { price: 26000, etd: '4-5 hari', available: true },
      cargo: { price: 8800, etd: '4-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 7300, etd: '5-7 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Jambi',
    province: 'Jambi',
    postalCode: '36111',
    distance: 750,
    popularRoute: false,
    coverageArea: ['Jambi Kota', 'Telanaipura', 'Jambi Selatan', 'Jelutung', 'Pasar Jambi', 'Pelayangan', 'Danau Teluk', 'Kota Baru', 'Muara Bulian'],
    services: {
      express: { price: 35000, etd: '2 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 55000, etd: '2-3 hari', available: true },
      reguler: { price: 30000, etd: '3-4 hari', available: true },
      ekonomis: { price: 22000, etd: '4-5 hari', available: true },
      cargo: { price: 7800, etd: '4-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 6500, etd: '5-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Bengkulu',
    province: 'Bengkulu',
    postalCode: '38111',
    distance: 900,
    popularRoute: false,
    coverageArea: ['Bengkulu Kota', 'Gading Cempaka', 'Teluk Segara', 'Ratu Agung', 'Ratu Samban', 'Muara Bangkahulu', 'Selebar', 'Kampung Melayu', 'Singaran Pati'],
    services: {
      express: { price: 38000, etd: '2-3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 58000, etd: '2-3 hari', available: true },
      reguler: { price: 32000, etd: '3-4 hari', available: true },
      ekonomis: { price: 24000, etd: '4-5 hari', available: true },
      cargo: { price: 8200, etd: '4-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 6800, etd: '5-7 hari', available: true, minWeight: 50 }
    }
  },

  // KALIMANTAN - Tier 3
  {
    destination: 'Pontianak',
    province: 'Kalimantan Barat',
    postalCode: '78111',
    distance: 950,
    popularRoute: true,
    coverageArea: ['Pontianak Kota', 'Pontianak Utara', 'Pontianak Timur', 'Pontianak Selatan', 'Pontianak Barat', 'Pontianak Tenggara', 'Sungai Raya', 'Kubu Raya'],
    services: {
      express: { price: 42000, etd: '2-3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 68000, etd: '3 hari', available: true },
      reguler: { price: 36000, etd: '3-4 hari', available: true },
      ekonomis: { price: 27000, etd: '4-5 hari', available: true },
      cargo: { price: 9500, etd: '4-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 8000, etd: '5-7 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Banjarmasin',
    province: 'Kalimantan Selatan',
    postalCode: '70111',
    distance: 1100,
    popularRoute: true,
    coverageArea: ['Banjarmasin Tengah', 'Banjarmasin Barat', 'Banjarmasin Timur', 'Banjarmasin Selatan', 'Banjarmasin Utara', 'Banjarbaru', 'Martapura'],
    services: {
      express: { price: 45000, etd: '2-3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 72000, etd: '3 hari', available: true },
      reguler: { price: 38000, etd: '3-5 hari', available: true },
      ekonomis: { price: 29000, etd: '4-6 hari', available: true },
      cargo: { price: 10000, etd: '5-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 8500, etd: '6-8 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Balikpapan',
    province: 'Kalimantan Timur',
    postalCode: '76111',
    distance: 1650,
    popularRoute: true,
    coverageArea: ['Balikpapan Kota', 'Balikpapan Utara', 'Balikpapan Timur', 'Balikpapan Selatan', 'Balikpapan Barat', 'Balikpapan Tengah', 'Sepinggan'],
    services: {
      express: { price: 50000, etd: '3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 80000, etd: '3-4 hari', available: true },
      reguler: { price: 43000, etd: '4-5 hari', available: true },
      ekonomis: { price: 32000, etd: '5-6 hari', available: true },
      cargo: { price: 11000, etd: '5-7 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 9500, etd: '6-8 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Samarinda',
    province: 'Kalimantan Timur',
    postalCode: '75111',
    distance: 1750,
    popularRoute: false,
    coverageArea: ['Samarinda Kota', 'Samarinda Ulu', 'Samarinda Ilir', 'Samarinda Utara', 'Samarinda Seberang', 'Palaran', 'Loa Janan Ilir', 'Sungai Pinang'],
    services: {
      express: { price: 52000, etd: '3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 82000, etd: '3-4 hari', available: true },
      reguler: { price: 44000, etd: '4-5 hari', available: true },
      ekonomis: { price: 33000, etd: '5-6 hari', available: true },
      cargo: { price: 11500, etd: '5-7 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 9800, etd: '6-8 hari', available: true, minWeight: 50 }
    }
  },

  // SULAWESI - Tier 3
  {
    destination: 'Makassar',
    province: 'Sulawesi Selatan',
    postalCode: '90111',
    distance: 1750,
    popularRoute: true,
    coverageArea: ['Makassar Kota', 'Ujung Pandang', 'Wajo', 'Bontoala', 'Makassar Utara', 'Tamalate', 'Mariso', 'Mamajang', 'Rappocini', 'Panakkukang', 'Tallo', 'Ujung Tanah', 'Biringkanaya', 'Tamalanrea'],
    services: {
      express: { price: 50000, etd: '3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 80000, etd: '3-4 hari', available: true },
      reguler: { price: 43000, etd: '4-5 hari', available: true },
      ekonomis: { price: 32000, etd: '5-6 hari', available: true },
      cargo: { price: 10500, etd: '5-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 9000, etd: '6-7 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Manado',
    province: 'Sulawesi Utara',
    postalCode: '95111',
    distance: 2400,
    popularRoute: false,
    coverageArea: ['Manado Kota', 'Wanea', 'Malalayang', 'Sario', 'Wenang', 'Tikala', 'Paal Dua', 'Mapanget', 'Singkil', 'Tuminting', 'Bunaken'],
    services: {
      express: { price: 58000, etd: '3-4 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 90000, etd: '4 hari', available: true },
      reguler: { price: 50000, etd: '5-6 hari', available: true },
      ekonomis: { price: 38000, etd: '6-7 hari', available: true },
      cargo: { price: 12500, etd: '6-8 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 10500, etd: '7-9 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Palu',
    province: 'Sulawesi Tengah',
    postalCode: '94111',
    distance: 2100,
    popularRoute: false,
    coverageArea: ['Palu Barat', 'Palu Timur', 'Palu Selatan', 'Palu Utara', 'Tatanga', 'Ulujadi', 'Mantikulore', 'Tawaeli'],
    services: {
      express: { price: 55000, etd: '3-4 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 85000, etd: '4 hari', available: true },
      reguler: { price: 48000, etd: '5-6 hari', available: true },
      ekonomis: { price: 36000, etd: '6-7 hari', available: true },
      cargo: { price: 12000, etd: '6-8 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 10000, etd: '7-9 hari', available: true, minWeight: 50 }
    }
  },

  // BALI & NUSA TENGGARA - Tier 3
  {
    destination: 'Denpasar (Bali)',
    province: 'Bali',
    postalCode: '80111',
    distance: 1100,
    popularRoute: true,
    coverageArea: ['Denpasar', 'Badung', 'Kuta', 'Seminyak', 'Sanur', 'Ubud', 'Gianyar', 'Tabanan', 'Canggu', 'Jimbaran', 'Nusa Dua'],
    services: {
      express: { price: 38000, etd: '2-3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 60000, etd: '2-3 hari', available: true },
      reguler: { price: 32000, etd: '3-4 hari', available: true },
      ekonomis: { price: 24000, etd: '4-5 hari', available: true },
      cargo: { price: 8000, etd: '4-5 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 6700, etd: '5-6 hari', available: true, minWeight: 50 }
    }
  },
  {
    destination: 'Mataram (Lombok)',
    province: 'Nusa Tenggara Barat',
    postalCode: '83111',
    distance: 1300,
    popularRoute: false,
    coverageArea: ['Mataram', 'Ampenan', 'Cakranegara', 'Sekarbela', 'Selaparang', 'Sandubaya', 'Senggigi', 'Praya'],
    services: {
      express: { price: 45000, etd: '3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 70000, etd: '3-4 hari', available: true },
      reguler: { price: 38000, etd: '4-5 hari', available: true },
      ekonomis: { price: 28000, etd: '5-6 hari', available: true },
      cargo: { price: 9500, etd: '5-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 8000, etd: '6-7 hari', available: true, minWeight: 50 }
    }
  },

  // PAPUA & MALUKU - Tier 4
  {
    destination: 'Jayapura',
    province: 'Papua',
    postalCode: '99111',
    distance: 3800,
    popularRoute: false,
    coverageArea: ['Jayapura Utara', 'Jayapura Selatan', 'Abepura', 'Heram', 'Muara Tami'],
    services: {
      express: { price: 75000, etd: '4-5 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 120000, etd: '5-6 hari', available: true },
      reguler: { price: 65000, etd: '6-7 hari', available: true },
      ekonomis: { price: 50000, etd: '7-9 hari', available: true },
      cargo: { price: 18000, etd: '8-10 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 0, etd: '-', available: false, minWeight: 50 }
    }
  },
  {
    destination: 'Ambon',
    province: 'Maluku',
    postalCode: '97111',
    distance: 3200,
    popularRoute: false,
    coverageArea: ['Ambon Kota', 'Sirimau', 'Nusaniwe', 'Baguala', 'Teluk Ambon', 'Leitimur Selatan'],
    services: {
      express: { price: 70000, etd: '4-5 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 110000, etd: '5 hari', available: true },
      reguler: { price: 60000, etd: '6-7 hari', available: true },
      ekonomis: { price: 48000, etd: '7-8 hari', available: true },
      cargo: { price: 16000, etd: '8-9 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 0, etd: '-', available: false, minWeight: 50 }
    }
  },

  // ADDITIONAL CITIES
  {
    destination: 'Batam',
    province: 'Kepulauan Riau',
    postalCode: '29111',
    distance: 1200,
    popularRoute: true,
    coverageArea: ['Batam Kota', 'Nagoya', 'Lubuk Baja', 'Sekupang', 'Batu Aji', 'Nongsa', 'Bengkong', 'Sagulung', 'Sei Beduk'],
    services: {
      express: { price: 43000, etd: '2-3 hari', available: true },
      sameDay: { price: 0, etd: '-', available: false, cutoffTime: '-' },
      nextDay: { price: 68000, etd: '3 hari', available: true },
      reguler: { price: 37000, etd: '3-4 hari', available: true },
      ekonomis: { price: 28000, etd: '4-5 hari', available: true },
      cargo: { price: 9800, etd: '4-6 hari', available: true, minWeight: 10 },
      cargoTrucking: { price: 8200, etd: '5-7 hari', available: true, minWeight: 50 }
    }
  },
];

// Helper functions
export const getPopularRoutes = () => {
  return shippingRates.filter(rate => rate.popularRoute);
};

export const getCitiesByProvince = (province: string) => {
  return shippingRates.filter(rate => rate.province === province);
};

export const getAllProvinces = () => {
  return [...new Set(shippingRates.map(rate => rate.province))].sort();
};

export const searchDestination = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return shippingRates.filter(rate => 
    rate.destination.toLowerCase().includes(lowerQuery) ||
    rate.province.toLowerCase().includes(lowerQuery) ||
    rate.coverageArea.some(area => area.toLowerCase().includes(lowerQuery))
  );
};