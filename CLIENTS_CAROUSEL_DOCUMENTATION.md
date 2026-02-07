# Dokumentasi Clients Carousel - CV ULUMUSI

## 📋 Overview

Fitur Clients Carousel menampilkan mitra bisnis dengan desain elegan, modern, dan profesional. Carousel secara otomatis scrolling dengan halus dan menampilkan logo perusahaan setiap mitra.

## 🗂️ Struktur File

```
src/
├── data/
│   └── clients.ts                      # Data clients dengan logo URLs
├── components/
│   └── ClientsCarousel.tsx             # Komponen carousel interactive
└── pages/
    └── HomePage.tsx                    # Integration dengan Trusted Clients Section
```

## 📦 Features

### 1. **Auto-Play Carousel**
- Scrolling otomatis setiap 4 detik (dapat dikonfigurasi)
- Transisi smooth dan halus (duration 700ms)
- Auto-play berhenti saat user interaksi, resume setelah 5 detik inaktivity

### 2. **Responsive Design**
- Desktop: 6 items di layar
- Tablet: Otomatis scale sesuai viewport
- Mobile: Smooth scrolling dengan navigation buttons
- Gradient overlays di left dan right untuk visual elegance

### 3. **Interactive Elements**
- **Navigation Buttons**: Previous/Next buttons dengan hover effects
- **Dots Indicator**: Menunjukkan posisi carousel, clickable untuk jump to slide
- **Logo Display**: Setiap client menampilkan logo perusahaan
- **Hover Effects**: Cards expand dengan shadow dan color transitions

### 4. **Smart Logo Handling**
- Support untuk image URLs dari berbagai sumber
- Fallback mechanism: Jika logo gagal load, tampilkan placeholder dengan initial huruf
- Smooth image loading dengan error handling

## 🎨 Design Features

### Client Card:
```
┌─────────────────────────┐
│   ↓ Logo img (4:4)      │
│   Company Name          │
│   Category (optional)   │
└─────────────────────────┘
```

### Visual Effects:
- **Gradient Overlays**: Fade effect di edges untuk elegant look
- **Glass Morphism**: Semi-transparent cards dengan backdrop blur
- **Smooth Animations**: 300ms transitions untuk interactivity
- **Dark Mode**: Full support dengan proper contrast

### Colors:
- Primary: Orange/Red gradients (hover state)
- Background: White/semi-transparent dengan dark mode support
- Borders: Subtle white borders dengan hover enhancement

## 💾 Data Structure

### Client Interface:
```typescript
interface Client {
  id: string;                    // Unique identifier
  name: string;                  // Nama perusahaan
  logo: string;                  // URL gambar logo
  category?: string;             // Kategori bisnis (optional)
  description?: string;          // Deskripsi (optional)
}
```

### Contoh Data:
```typescript
{
  id: 'pt-mitra-utama',
  name: 'PT. Mitra Utama',
  logo: 'https://images.unsplash.com/photo-1560264357-8d9766f54598?...',
  category: 'Manufacturing',
  description: 'Perusahaan manufaktur terkemuka',
}
```

## 🎯 Props Configuration

### ClientsCarousel Props:
```typescript
interface ClientsCarouselProps {
  clients: Client[];                    // Array of clients
  autoPlay?: boolean;                   // Enable auto-play (default: true)
  autoPlaySpeed?: number;               // Milliseconds between slides (default: 4000)
  itemsPerView?: number;                // Items visible (default: 6)
}
```

### Usage Example:
```tsx
<ClientsCarousel 
  clients={clients}
  autoPlay={true}
  autoPlaySpeed={4000}
  itemsPerView={6}
/>
```

## 🔄 Carousel Logic

### Auto-Play Flow:
```
1. Component mount
   ↓
2. useEffect starts interval timer
   ↓
3. Every 4 seconds: currentIndex ++
   ↓
4. CSS transition: translateX animation
   ↓
5. Loop back to index 0 when reaching end
```

### User Interaction:
```
1. User clicks navigation button or dot
   ↓
2. setIndex directly, setAutoPlay(false)
   ↓
3. Clear existing interval
   ↓
4. After 5 seconds inactivity → resume auto-play
```

## 📱 Responsive Behavior

### Desktop (lg, xl):
- 6 items visible per view
- Full width carousel with gradient overlays
- Navigation buttons always visible

### Tablet (md):
- Adaptive item width calculation
- Same layout structure
- Touch-friendly navigation

### Mobile (sm):
- 6 items still visible (scrollable)
- Smaller card dimensions
- Optimized spacing

## 🎪 Logo Management

### Logo Sources:
Currently using Unsplash images as placeholders. Untuk production:

1. **Replace dengan Real Logos:**
   ```typescript
   logo: 'https://yourcdn.com/logos/pt-mitra-utama.png'
   ```

2. **Local Assets:**
   ```typescript
   logo: '/assets/logos/pt-mitra-utama.png'
   ```

3. **CDN Hosted:**
   ```typescript
   logo: 'https://cdn.company.com/logos/...'
   ```

### Fallback Strategy:
Jika image gagal load, sistem secara otomatis menampilkan SVG placeholder:
```svg
<rect fill="#e5e7eb" width="100" height="100"/>
<text x="50" y="50">A</text>  {/* First letter of company name */}
```

## 🔧 Maintenance & Extension

### Menambah Client Baru:
Edit `src/data/clients.ts`:
```typescript
export const clients: Client[] = [
  // ... existing clients
  {
    id: 'new-company',
    name: 'PT. New Company',
    logo: 'https://example.com/logo.png',
    category: 'Category',
  },
];
```

### Mengubah Kecepatan Auto-Play:
```tsx
<ClientsCarousel 
  autoPlaySpeed={3000}  // Lebih cepat
  // atau
  autoPlaySpeed={6000}  // Lebih lambat
/>
```

### Mengubah Jumlah Items per View:
```tsx
<ClientsCarousel 
  itemsPerView={5}  // Atau jumlah lainnya
/>
```

### Disable Auto-Play:
```tsx
<ClientsCarousel 
  clients={clients}
  autoPlay={false}
/>
```

## 🎨 Customization

### Mengubah Card Styling:
Edit `ClientsCarousel.tsx` - section `<div className="group h-32 w-full ..."`

### Mengubah Transition Speed:
- `duration-700` = 700ms carousel slide duration
- `duration-300` = 300ms hover effects
- `duration-500` = 500ms auto-play indicator

### Mengubah Colors:
- `from-orange-400 to-red-400` = Gradient colors
- `hover:border-orange-400/50` = Hover border color
- `bg-white/5` = Background opacity

## 📊 Performance Notes

- **Smooth 60fps**: CSS transforms untuk animation smoothness
- **Efficient Re-renders**: Memoization of client elements
- **Lazy Loading Ready**: Image loading dapat ditingkatkan dengan native lazy loading
- **No External Libraries**: Pure React + Tailwind CSS

## 🚀 Future Enhancements

Fitur yang bisa ditambahkan:
1. **Lazy Image Loading**: Implement native `loading="lazy"`
2. **Touch Gestures**: Swipe support untuk mobile
3. **Analytics**: Track which clients get hovered/clicked
4. **Client Links**: Navigasi ke halaman detail client
5. **Filter by Category**: Filter clients by industry
6. **Custom Indicators**: Replace dots dengan custom icons

## 🔐 Accessibility

- Semantic button elements dengan `aria-label`
- Keyboard navigation ready (arrow keys dapat ditambahkan)
- High contrast colors untuk readability
- Proper focus states untuk keyboard users

## 📈 Integration Notes

### Dengan Navigation:
```tsx
// Bisa dikombinasikan dengan routing
<ClientsCarousel 
  clients={clients.filter(c => c.category === selectedCategory)}
/>
```

### Dengan API:
```typescript
// Replace hard-coded clients dengan API data
const [clients, setClients] = useState<Client[]>([]);

useEffect(() => {
  fetch('/api/clients')
    .then(res => res.json())
    .then(data => setClients(data));
}, []);
```

---

**Dibuat untuk CV. ULUMUSI - Modern Logistics Solutions**
