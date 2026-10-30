import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /website-reservasi) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
const rp = (n) => (n >= 1e6 ? `Rp${String(n / 1e6).replace('.', ',')} juta` : `Rp${n / 1e3} ribu`);

export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "sistem-reservasi" dari PintuWeb/app/lib/packages.ts (harga, waktu).
 * Satu-satunya tempat angka bisnis di portal ini: hero dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Sistem Reservasi Online',
  mulai: rp(P('sistem-reservasi').mulai),
  sampai: rp(P('sistem-reservasi').sampai),
  waktu: P('sistem-reservasi').waktu,
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). Urutan dan label sama di semua portal. */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'website-reservasi');

/** Paket harga (lib/packages.ts: sistem-reservasi), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#sistem-reservasi`, label: 'Harga paket Sistem Reservasi' },
  { href: `${PINTUWEB}/services/website-custom`, label: 'Jasa website custom & aplikasi web' },
  { href: `${PINTUWEB}/demo#reservasi`, label: 'Semua demo PintuWeb' },
];

/** Artikel pendamping di PintuWeb ("Baca juga"). */
export const BACA_JUGA = [
  { href: `${PINTUWEB}/artikel/sistem-booking-online`, label: 'Sistem booking online: kapan perlu dan biayanya' },
];

/** Jenis layanan untuk pesan WhatsApp dan label tombol. */
export const JENIS = 'sistem reservasi online';
export const MULAI_WAKTU = `mulai ${PAKET.mulai} · ${PAKET.waktu}`;
export const LOGO = '/website-reservasi/logo-pintuweb.png';
