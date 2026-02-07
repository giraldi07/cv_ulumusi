// Shipment Status Types
export type ShipmentStatus = 'pending' | 'picked-up' | 'in-transit' | 'in-delivery' | 'delivered' | 'cancelled' | 'returned';

// Service Type (mengikuti standar jasa ekspedisi Indonesia)
export type ServiceType = 'regular' | 'express' | 'overnight' | 'economy' | 'premium';

// Single tracking event
export interface TrackingEvent {
  id: string;
  timestamp: Date;
  status: ShipmentStatus;
  location: string;
  city: string;
  description: string;
  note?: string;
}

// Sender/Receiver Information
export interface ContactInfo {
  name: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
}

// Main Shipment Interface
export interface Shipment {
  resiNumber: string;
  serviceType: ServiceType;
  status: ShipmentStatus;
  sender: ContactInfo;
  receiver: ContactInfo;
  content: string;
  weight: number; // in kg
  totalPrice: number;
  insurancePrice?: number;
  estimatedDelivery: Date;
  actualDelivery?: Date;
  currentLocation: string;
  currentCity: string;
  trackingHistory: TrackingEvent[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tracking Response
export interface TrackingResponse {
  success: boolean;
  data?: Shipment;
  message: string;
}

// Service Details
export const SERVICE_TYPES: Record<ServiceType, { label: string; description: string; estimatedDays: number }> = {
  regular: {
    label: 'Regular',
    description: 'Pengiriman standar dengan waktu 3-5 hari kerja',
    estimatedDays: 5,
  },
  express: {
    label: 'Express',
    description: 'Pengiriman cepat 1-2 hari kerja',
    estimatedDays: 2,
  },
  overnight: {
    label: 'Overnight',
    description: 'Pengiriman keesokan pagi untuk area tertentu',
    estimatedDays: 1,
  },
  economy: {
    label: 'Economy',
    description: 'Pengiriman ekonomis 5-7 hari kerja',
    estimatedDays: 7,
  },
  premium: {
    label: 'Premium',
    description: 'Layanan premium dengan free asuransi dan tracking khusus',
    estimatedDays: 2,
  },
};

// Status Details
export const STATUS_DETAILS: Record<ShipmentStatus, { label: string; color: string; icon: string }> = {
  pending: {
    label: 'Menunggu Pickup',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    icon: '📋',
  },
  'picked-up': {
    label: 'Sudah Diambil',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    icon: '📦',
  },
  'in-transit': {
    label: 'Dalam Perjalanan',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    icon: '🚚',
  },
  'in-delivery': {
    label: 'Sedang Diantar',
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    icon: '🏃',
  },
  delivered: {
    label: 'Sudah Diterima',
    color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    icon: '✅',
  },
  cancelled: {
    label: 'Dibatalkan',
    color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    icon: '❌',
  },
  returned: {
    label: 'Dikembalikan',
    color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    icon: '↩️',
  },
};
