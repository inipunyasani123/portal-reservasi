// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /website-reservasi) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';

/** Delapan galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'website-reservasi');

/** Paket harga (lib/packages.ts: sistem-reservasi), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#sistem-reservasi`, label: 'Harga paket Sistem Reservasi' },
  { href: `${PINTUWEB}/services/website-custom`, label: 'Jasa website custom & aplikasi web' },
  { href: `${PINTUWEB}/demo#reservasi`, label: 'Semua demo PintuWeb' },
];
