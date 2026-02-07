import { MapPin, Phone, CheckCircle2, Calendar, Truck } from 'lucide-react';
import { Shipment, STATUS_DETAILS, SERVICE_TYPES } from '../types/shipment';

interface TrackingResultProps {
  shipment: Shipment;
  onClose: () => void;
}

export const TrackingResult = ({ shipment, onClose }: TrackingResultProps) => {
  const statusDetail = STATUS_DETAILS[shipment.status];
  const serviceDetail = SERVICE_TYPES[shipment.serviceType];
  const sortedHistory = [...shipment.trackingHistory].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const calculateProgress = () => {
    const statusOrder = ['pending', 'picked-up', 'in-transit', 'in-delivery', 'delivered'];
    const currentStatusIndex = statusOrder.indexOf(shipment.status);
    return ((currentStatusIndex + 1) / statusOrder.length) * 100;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 md:p-8">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-sm opacity-90 mb-1">No. Resi</p>
              <h2 className="text-2xl md:text-3xl font-bold">{shipment.resiNumber}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Status Overview */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Status Pengiriman</h3>
            <div className={`p-6 rounded-2xl border-2 ${statusDetail.color}`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{statusDetail.icon}</span>
                <div>
                  <p className="text-sm opacity-75">Status Saat Ini</p>
                  <p className="text-xl md:text-2xl font-bold">{statusDetail.label}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs opacity-75">
                  <span>Pickup</span>
                  <span>Transit</span>
                  <span>Delivery</span>
                  <span>Delivered</span>
                </div>
                <div className="w-full bg-black/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-500"
                    style={{ width: `${calculateProgress()}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Service Info */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="text-sm text-blue-600 dark:text-blue-300">
                <span className="font-semibold">{serviceDetail.label} • </span>
                {serviceDetail.description}
              </p>
            </div>
          </div>

          {/* Key Information Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                Pengirim
              </h4>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900 dark:text-white">{shipment.sender.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <MapPin className="inline w-4 h-4 mr-2 text-orange-600" />
                  {shipment.sender.address}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {shipment.sender.city}, {shipment.sender.province} {shipment.sender.postalCode}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <Phone className="inline w-4 h-4 mr-2 text-orange-600" />
                  {shipment.sender.phone}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                Penerima
              </h4>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900 dark:text-white">{shipment.receiver.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="inline w-4 h-4 mr-2 text-red-600" />
                  {shipment.receiver.address}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {shipment.receiver.city}, {shipment.receiver.province} {shipment.receiver.postalCode}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <Phone className="inline w-4 h-4 mr-2 text-red-600" />
                  {shipment.receiver.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              Detail Paket
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl">
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Isi Paket</p>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">{shipment.content}</p>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl">
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Berat</p>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">{shipment.weight} kg</p>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl">
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Biaya Pengiriman</p>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  Rp {shipment.totalPrice.toLocaleString('id-ID')}
                </p>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl">
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Asuransi</p>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  {shipment.insurancePrice ? `Rp ${shipment.insurancePrice.toLocaleString('id-ID')}` : 'Tidak Aktif'}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              Riwayat Pengiriman
            </h4>
            <div className="space-y-3">
              {sortedHistory.map((event, index) => {
                const isLatest = index === 0;
                const eventStatus = STATUS_DETAILS[event.status];

                return (
                  <div key={event.id} className="flex gap-4">
                    {/* Timeline Dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all ${
                          isLatest
                            ? 'bg-orange-600 border-orange-600 shadow-lg shadow-orange-500/50'
                            : 'bg-slate-300 dark:bg-slate-600 border-slate-400 dark:border-slate-500'
                        }`}
                      />
                      {index !== sortedHistory.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-orange-300 to-slate-300 dark:from-orange-800 dark:to-slate-700 my-1" />
                      )}
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 pb-4">
                      <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white">{event.description}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                              <Calendar className="inline w-3 h-3 mr-1" />
                              {formatDate(event.timestamp)}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${eventStatus.color}`}>
                            {eventStatus.icon} {eventStatus.label}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          {event.location}, {event.city}
                        </p>
                        {event.note && (
                          <p className="text-sm text-orange-600 dark:text-orange-400 mt-2 italic font-medium">
                            💡 {event.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Notes */}
          {shipment.notes && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <span className="font-semibold">📝 Catatan: </span>
                {shipment.notes}
              </p>
            </div>
          )}

          {/* Expected Delivery Info */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-slate-600 dark:text-slate-400">Estimasi Tiba</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {new Date(shipment.estimatedDelivery).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              {shipment.actualDelivery && (
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Sudah Diterima</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">
                    {new Date(shipment.actualDelivery).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600 p-6 md:p-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
          >
            Tutup
          </button>
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all hover:scale-105">
            Hubungi Support
          </button>
        </div>
      </div>
    </div>
  );
};
