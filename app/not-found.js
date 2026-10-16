import Link from 'next/link';
import { templates } from './components/templates-data';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main id="konten" className="flex min-h-screen flex-col items-center justify-center bg-kremr px-6 text-center text-navy">
      <p className="bg-navy px-3 py-1 font-mono text-xs uppercase tracking-widest text-kremr">GATE 404</p>
      <h1 className="mt-5 font-display text-5xl font-extrabold uppercase sm:text-6xl">Tujuan tidak ditemukan</h1>
      <p className="mt-4 max-w-md font-mono text-sm text-mutedr">Halaman ini tidak ada di papan keberangkatan. {templates.length} sistem reservasi menunggu di halaman utama.</p>
      <Link href="/" className="mt-8 bg-oranyer-ink px-6 py-3 font-mono text-sm font-bold uppercase text-white transition hover:bg-navy">Kembali ke papan</Link>
    </main>
  );
}
