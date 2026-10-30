// Data 5 aplikasi reservasi. `halaman` = halaman dalam yang bisa dicoba langsung.
export const templates = [
  {
    kode: 'RSV-001', name: 'Restoran', merek: 'Pawon Lirih', emoji: '🍽️',
    paradigma: 'Pilih meja di denah',
    description: 'Restoran masakan Jawa di Yogyakarta. Coba pilih meja kosong dan pesan.',
    image: '/website-reservasi/images/rsv/restoran.webp', terjual: 6, url: 'https://reservasi-restoran.pintuweb.id',
    detail: { kolom1: ['MEJA', 'T6'], kolom2: ['TAMU', '6'] },
    halaman: [['/menu', 'Menu'], ['/rombongan', 'Rombongan'], ['/reservasi', 'Reservasi saya']],
  },
  {
    kode: 'RSV-002', name: 'Hotel', merek: 'Tanjung Lengkung', emoji: '🛎️',
    paradigma: 'Pilih tanggal menginap',
    description: 'Penginapan kecil di Lombok. Coba pilih tanggal dan lihat rincian harganya.',
    image: '/website-reservasi/images/rsv/hotel.webp', terjual: 2, url: 'https://reservasi-hotel.pintuweb.id',
    detail: { kolom1: ['IN', '14:00'], kolom2: ['OUT', '12:00'] },
    halaman: [['/kamar', 'Kamar & vila'], ['/kamar/vila', 'Vila Kolam'], ['/pesanan', 'Pesanan saya']],
  },
  {
    kode: 'RSV-003', name: 'Klinik', merek: 'Klinik Rumpun Waras', emoji: '🩺',
    paradigma: 'Pilih jam dokter',
    description: 'Klinik keluarga. Coba pilih dokter dan jam, lalu dapat nomor antrean.',
    image: '/website-reservasi/images/rsv/klinik.webp', terjual: 1, url: 'https://reservasi-klinik.pintuweb.id',
    detail: { kolom1: ['POLI', 'ANAK'], kolom2: ['NO.', '04'] },
    halaman: [['/dokter', 'Jadwal dokter'], ['/?dokter=d3', 'Dokter gigi'], ['/janji', 'Janji saya']],
  },
  {
    kode: 'RSV-004', name: 'Futsal', merek: 'Gelanggang Petang', emoji: '⚽',
    paradigma: 'Pilih jam dan lapangan',
    description: 'Tiga lapangan futsal indoor. Coba sewa lapangan per jam dan lihat harganya.',
    image: '/website-reservasi/images/rsv/futsal.webp', terjual: 0, url: 'https://reservasi-futsal.pintuweb.id',
    detail: { kolom1: ['COURT', 'B'], kolom2: ['SLOT', '19:00'] },
    halaman: [['/harga', 'Harga & aturan'], ['/sparring', 'Cari lawan'], ['/jadwal-saya', 'Jadwal saya']],
  },
  {
    kode: 'RSV-005', name: 'Bioskop', merek: 'Bioskop Kelir', emoji: '🎬',
    paradigma: 'Pilih kursi bioskop',
    description: 'Bioskop satu layar dengan 96 kursi. Coba pilih film dan kursimu.',
    image: '/website-reservasi/images/rsv/bioskop.webp', terjual: 0, url: 'https://reservasi-bioskop.pintuweb.id',
    detail: { kolom1: ['STUDIO', '1'], kolom2: ['SEAT', 'E-07'] },
    halaman: [['/film', 'Sedang tayang'], ['/film/gerhana-terakhir', 'Detail film'], ['/tiket', 'Tiket saya']],
  },
];

/** "https://reservasi-restoran.pintuweb.id" -> "restoran" (sama dengan slug demo di PintuWeb/app/lib/demos.ts). */
export const slugOf = (t) => new URL(t.url).hostname.split('.')[0].replace(/^reservasi-/, '');
