# Dokumentasi Fitur Tracking Resi - CV ULUMUSI

## 📋 Overview

Fitur tracking resi telah diimplementasikan dengan struktur data yang profesional dan mengikuti standar jasa ekspedisi Indonesia seperti JNE. Sistem ini dirancang untuk mudah di-maintain dan scalable.

## 🗂️ Struktur File

```
src/
├── types/
│   └── shipment.ts                 # Type definitions & interfaces
├── data/
│   ├── mockShipments.ts            # Data dummy shipment
│   └── testingGuide.ts             # Panduan testing
├── components/
│   └── TrackingResult.tsx          # Komponen modal tracking result
└── pages/
    └── HomePage.tsx                # Updated dengan tracking functionality
```

## 📦 Fitur-Fitur Utama

### 1. **Struktur Data Shipment**
File: `src/types/shipment.ts`

Mencakup:
- **ShipmentStatus**: pending, picked-up, in-transit, in-delivery, delivered, cancelled, returned
- **ServiceType**: regular, express, overnight, economy, premium
- **Shipment Interface**: Informasi lengkap paket dengan tracking history
- **TrackingEvent**: Detail setiap event dalam perjalanan paket

### 2. **Mock Data (Database Dummy)**
File: `src/data/mockShipments.ts`

- 5 contoh shipment dengan berbagai status
- Tracking history yang realistis
- Informasi pengirim dan penerima lengkap
- Fungsi `findShipmentByResi()` untuk pencarian

### 3. **Tracking Result Component**
File: `src/components/TrackingResult.tsx`

Menampilkan:
- Status paket dengan progress bar visual
- Informasi pengirim dan penerima
- Detail paket (isi, berat, biaya)
- Timeline tracking dengan event history
- Catatan dan estimasi pengiriman
- Responsive design untuk mobile & desktop

### 4. **HomePage Integration**
File: `src/pages/HomePage.tsx`

Update:
- Form input untuk mencari resi
- State management untuk tracking
- Error handling dengan pesan yang jelas
- Modal popup untuk menampilkan hasil
- Loading state saat pencarian

## 🔍 Cara Kerja Fitur Tracking

### Flow Aplikasi:

```
1. User memasukkan no. resi di form
   ↓
2. Form di-submit dan state isSearching diaktifkan
   ↓
3. Fungsi handleTrackingSearch mengambil input
   ↓
4. Nomor resi diubah ke uppercase (case-insensitive)
   ↓
5. findShipmentByResi() mencari di mockShipments
   ↓
6. Jika ditemukan → tampilkan TrackingResult modal
   Jika tidak ditemukan → tampilkan error message
```

## 🧪 Testing Guide

### Resi yang Tersedia untuk Testing:

| No. Resi | Status | Deskripsi |
|----------|--------|-----------|
| `ULU-2024-001` | ✅ Delivered | Laptop ke Bandung (selesai) |
| `ULU-2024-002` | 🚚 In Transit | Pakaian ke Medan (perjalanan) |
| `ULU-2024-003` | 🏃 In Delivery | Smart Home ke Tangerang (diantar) |
| `ULU-2024-004` | 📦 Picked Up | Buku ke Yogyakarta (diambil) |
| `ULU-2024-005` | ⏳ Pending | Perhiasan ke Depok (menunggu) |

### Cara Testing:
1. Buka halaman Home
2. Scroll ke section "Kirim Paket Lebih Cepat"
3. Masukkan salah satu nomor resi di atas (case-insensitive)
4. Klik tombol "Lacak"
5. Lihat modal dengan detail lengkap tracking

## 💾 Data Structure Details

### Shipment Object:
```typescript
{
  resiNumber: "ULU-2024-001"           // Unique identifier
  serviceType: "express"                // Jenis layanan
  status: "delivered"                   // Status pengiriman
  sender: { ... }                       // Info pengirim
  receiver: { ... }                     // Info penerima
  content: "Laptop Dell"                // Isi paket
  weight: 2.5                           // Berat (kg)
  totalPrice: 185000                    // Biaya pengiriman
  insurancePrice: 25000                 // Biaya asuransi
  estimatedDelivery: Date               // Perkiraan tiba
  actualDelivery: Date                  // Waktu diterima
  trackingHistory: [
    {
      timestamp: Date
      status: ShipmentStatus
      location: string
      city: string
      description: string
      note?: string
    },
    // ... lebih banyak events
  ]
}
```

## 🎨 UI/UX Features

### TrackingResult Modal:
- **Hero Header**: Nomor resi + tombol close
- **Status Overview**: Visual icon, label, progress bar
- **Service Info**: Tipe layanan dengan deskripsi
- **Pengirim & Penerima**: Informasi lengkap dengan icon
- **Detail Paket**: Grid 4 kolom (isi, berat, biaya, asuransi)
- **Timeline Tracking**: 
  - Dots dan lines untuk visualisasi progress
  - Event cards dengan timestamp
  - Location dan city info
  - Catatan khusus jika ada
- **Delivery Info**: Estimasi dan tanggal actual delivery
- **Catatan Penting**: Highlighted dengan background khusus

### Responsive Design:
- Mobile: Single column layout
- Tablet: 2 columns untuk beberapa section
- Desktop: Full layout dengan 4 columns untuk detail paket

## 🔧 Maintenance & Extension

### Untuk Menambah Data Shipment Baru:
Edit `src/data/mockShipments.ts` dan tambahkan entry baru ke `mockShipments` object.

### Untuk Menambah Status Baru:
1. Update `ShipmentStatus` type di `src/types/shipment.ts`
2. Tambahkan status detail di `STATUS_DETAILS` constant

### Untuk Menambah Service Type Baru:
1. Update `ServiceType` di `src/types/shipment.ts`
2. Tambahkan di `SERVICE_TYPES` dengan label dan deskripsi

### Integration dengan Backend API:
Replace `mockShipments` dan `findShipmentByResi()` dengan API call:

```typescript
const findShipmentByResi = async (resiNumber: string) => {
  const response = await fetch(`/api/shipments/${resiNumber}`);
  return response.json();
};
```

## 📱 States Management

HomePage menggunakan local state untuk:
- `trackingInput`: Input value dari form
- `trackingResult`: Shipment data jika ditemukan
- `trackingError`: Error message jika resi tidak ditemukan
- `isSearching`: Loading state saat pencarian

## ✨ Design Highlights

1. **Gradient Colors**: Orange-to-Red untuk primary actions
2. **Dark Mode Support**: Full dark mode integration dengan Tailwind
3. **Smooth Animations**: Transitions dan animations untuk better UX
4. **Accessibility**: Proper button states, error handling
5. **Modern UI**: Cards, badges, timeline visual
6. **Professional Typography**: Bold headlines, clear information hierarchy

## 🚀 Performance Notes

- Form validation di client-side
- Simulated API call dengan 500ms delay (dapat disesuaikan)
- Modal tetap di-render saat ditampilkan (tidak unmount)
- Efficient re-renders dengan proper state management

---

**Dibuat untuk CV. ULUMUSI - Professional Logistics Solution**
