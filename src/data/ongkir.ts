// src/data/ongkir.ts

export interface ShippingRate {
  destination: string;
  reguler: number;
  nextDay: number;
  sameDay: number;
  cargo: number; // Minimal 10kg atau 50kg
}

export const shippingRates: ShippingRate[] = [
  { destination: 'Jakarta', reguler: 10000, nextDay: 18000, sameDay: 25000, cargo: 3500 },
  { destination: 'Bandung', reguler: 12000, nextDay: 22000, sameDay: 30000, cargo: 4000 },
  { destination: 'Surabaya', reguler: 25000, nextDay: 45000, sameDay: 60000, cargo: 6000 },
  { destination: 'Medan', reguler: 35000, nextDay: 65000, sameDay: 0, cargo: 8500 },
  { destination: 'Makassar', reguler: 40000, nextDay: 75000, sameDay: 0, cargo: 10000 },
  { destination: 'Yogyakarta', reguler: 18000, nextDay: 35000, sameDay: 45000, cargo: 5000 },
  { destination: 'Semarang', reguler: 20000, nextDay: 38000, sameDay: 48000, cargo: 5500 },
  { destination: 'Palembang', reguler: 22000, nextDay: 40000, sameDay: 0, cargo: 6500 },
  { destination: 'Denpasar', reguler: 30000, nextDay: 55000, sameDay: 0, cargo: 7500 },
];