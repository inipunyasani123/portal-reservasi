// Data 5 aplikasi reservasi. `halaman` = halaman dalam yang bisa dicoba langsung.
export const templates = [
  {
    kode: 'RSV-001', name: 'Restoran', merek: 'Pawon Lirih', emoji: '🍽️',
    paradigma: 'Pilih meja di denah',
    description: 'Masakan rumahan Jawa di Yogyakarta. Pilih hari, jam, dan jumlah tamu, lalu klik meja yang kosong — lengkap dengan zona dan kapasitas meja.',
    image: '/website-reservasi/images/rsv/restoran.webp', terjual: 6, url: 'https://reservasi-restoran.pintuweb.id',
    detail: { kolom1: ['MEJA', 'T6'], kolom2: ['TAMU', '6'] },
    halaman: [['/menu', 'Menu'], ['/rombongan', 'Rombongan'], ['/reservasi', 'Reservasi saya']],
  },
  {
    kode: 'RSV-002', name: 'Hotel', merek: 'Tanjung Lengkung', emoji: '🛎️',
    paradigma: 'Check-in — check-out',
    description: 'Penginapan kecil di pesisir timur Lombok. Ketersediaan dihitung per malam, tarif akhir pekan terpisah, rincian pajak & layanan jelas.',
    image: '/website-reservasi/images/rsv/hotel.webp', terjual: 2, url: 'https://reservasi-hotel.pintuweb.id',
    detail: { kolom1: ['IN', '14:00'], kolom2: ['OUT', '12:00'] },
    halaman: [['/kamar', 'Kamar & vila'], ['/kamar/vila', 'Vila Kolam'], ['/pesanan', 'Pesanan saya']],
  },
  {
    kode: 'RSV-003', name: 'Klinik', merek: 'Klinik Rumpun Waras', emoji: '🩺',
    paradigma: 'Slot jam praktik dokter',
    description: 'Klinik keluarga. Pilih dokter, lalu tanggal di hari praktiknya dan slot 30 menit yang kosong — dapat nomor urut dan daftar persiapan.',
    image: '/website-reservasi/images/rsv/klinik.webp', terjual: 1, url: 'https://reservasi-klinik.pintuweb.id',
    detail: { kolom1: ['POLI', 'ANAK'], kolom2: ['NO.', '04'] },
    halaman: [['/dokter', 'Jadwal dokter'], ['/?dokter=d3', 'Dokter gigi'], ['/janji', 'Janji saya']],
  },
  {
    kode: 'RSV-004', name: 'Futsal', merek: 'Gelanggang Petang', emoji: '⚽',
    paradigma: 'Grid jam × lapangan',
    description: 'Tiga lapangan indoor. Harga sore, jam emas, dan malam tampil di tiap kotak; pilih sampai empat jam sekaligus, atau cari lawan sparring.',
    image: '/website-reservasi/images/rsv/futsal.webp', terjual: 0, url: 'https://reservasi-futsal.pintuweb.id',
    detail: { kolom1: ['COURT', 'B'], kolom2: ['SLOT', '19:00'] },
    halaman: [['/harga', 'Harga & aturan'], ['/sparring', 'Cari lawan'], ['/jadwal-saya', 'Jadwal saya']],
  },
  {
    kode: 'RSV-005', name: 'Bioskop', merek: 'Bioskop Kelir', emoji: '🎬',
    paradigma: 'Pilih kursi di studio',
    description: 'Bioskop satu layar dengan 96 kursi. Program tayang harian tanpa jam bertumpuk, lalu pilih kursi baris demi baris.',
    image: '/website-reservasi/images/rsv/bioskop.webp', terjual: 0, url: 'https://reservasi-bioskop.pintuweb.id',
    detail: { kolom1: ['STUDIO', '1'], kolom2: ['SEAT', 'E-07'] },
    halaman: [['/film', 'Sedang tayang'], ['/film/gerhana-terakhir', 'Detail film'], ['/tiket', 'Tiket saya']],
  },
];
