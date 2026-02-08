import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Shipment, STATUS_DETAILS, SERVICE_TYPES } from '../types/shipment';

export const generateShipmentPDF = (shipment: Shipment) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const statusDetail = STATUS_DETAILS[shipment.status];
  const serviceDetail = SERVICE_TYPES[shipment.serviceType];
  const primaryColor = [234, 88, 12]; // Orange-600 (CV ULUMUSI Brand)

  // --- HEADER SECTION ---
  // Background Header
  doc.setFillColor(30, 41, 59); // Slate-800
  doc.rect(0, 0, 210, 40, 'F');
  
  // Logo / Brand Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('CV. ULUMUSI', 15, 20);
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('PROFESSIONAL LOGISTICS SOLUTION', 15, 26);

  // Receipt Label
  doc.setFontSize(14);
  doc.text('BUKTI PENGIRIMAN', 150, 20, { align: 'left' });
  doc.setFontSize(10);
  doc.text(shipment.resiNumber, 150, 27, { align: 'left' });

  // --- SHIPMENT INFORMATION ---
  let currentY = 50;

  // Garis Pemisah
  doc.setDrawColor(234, 88, 12);
  doc.setLineWidth(0.5);
  doc.line(15, currentY, 195, currentY);

  // Grid Pengirim & Penerima
  currentY += 10;
  doc.setTextColor(100, 116, 139); // Slate-500
  doc.setFontSize(8);
  doc.text('PENGIRIM:', 15, currentY);
  doc.text('PENERIMA:', 110, currentY);

  currentY += 5;
  doc.setTextColor(15, 23, 42); // Slate-900
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(shipment.sender.name, 15, currentY);
  doc.text(shipment.receiver.name, 110, currentY);

  currentY += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(shipment.sender.city, 15, currentY);
  doc.text(shipment.receiver.city, 110, currentY);

  // --- DETAIL PAKET TABLE ---
  currentY += 15;
  autoTable(doc, {
    startY: currentY,
    head: [['Deskripsi Isi', 'Layanan', 'Berat', 'Asuransi', 'Total Biaya']],
    body: [[
      shipment.content,
      serviceDetail.label,
      `${shipment.weight} Kg`,
      shipment.insurancePrice ? 'Aktif' : 'Tidak',
      `Rp ${shipment.totalPrice.toLocaleString('id-ID')}`
    ]],
    headStyles: { fillColor: [248, 250, 252], textColor: [15, 23, 42], fontStyle: 'bold' },
    styles: { fontSize: 9, cellPadding: 5 },
    theme: 'grid'
  });

  // --- TRACKING HISTORY ---
  currentY = (doc as any).lastAutoTable.finalY + 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('RIWAYAT PERJALANAN (TRACKING HISTORY)', 15, currentY);

  const historyData = [...shipment.trackingHistory]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .map(event => [
      new Date(event.timestamp).toLocaleString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
      `${event.status.toUpperCase()}\n${event.city}`,
      event.description + (event.note ? `\nNote: ${event.note}` : '')
    ]);

  autoTable(doc, {
    startY: currentY + 5,
    head: [['Waktu', 'Lokasi', 'Keterangan']],
    body: historyData,
    headStyles: { fillColor: [30, 41, 59] },
    columnStyles: {
      0: { cellWidth: 40 },
      1: { cellWidth: 40 },
      2: { cellWidth: 'auto' }
    },
    styles: { fontSize: 8 },
  });

  // --- FOOTER & TANDA TANGAN ---
  const finalY = (doc as any).lastAutoTable.finalY + 20;
  
  // Disclaimer
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  const disclaimer = "Dokumen ini sah dan dihasilkan secara otomatis oleh sistem CV. ULUMUSI. Tidak memerlukan tanda tangan basah.";
  doc.text(disclaimer, 105, finalY + 30, { align: 'center' });

  // Metadata
  const dateGenerated = new Date().toLocaleString('id-ID');
  doc.text(`Dicetak pada: ${dateGenerated}`, 15, 285);
  doc.text(`Halaman 1 / 1`, 195, 285, { align: 'right' });

  // Simpan PDF
  doc.save(`Resi_ULUMUSI_${shipment.resiNumber}.pdf`);
};