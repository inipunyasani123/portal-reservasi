'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowUpRight, MessageCircle, Ticket } from 'lucide-react';

/** Menu "Galeri lain": tombol + daftar tautan absolut. Esc menutup dan mengembalikan fokus, klik di luar menutup. */
export function GaleriLain({ daftar, base }) {
  const [buka, setBuka] = useState(false);
  const kotak = useRef(null);
  const tombol = useRef(null);

  useEffect(() => {
    if (!buka) return undefined;
    const klik = (e) => { if (kotak.current && !kotak.current.contains(e.target)) setBuka(false); };
    const tuts = (e) => { if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); } };
    const keluar = (e) => { if (kotak.current && !kotak.current.contains(e.relatedTarget) && e.relatedTarget) setBuka(false); };
    document.addEventListener('pointerdown', klik);
    document.addEventListener('keydown', tuts);
    const el = kotak.current;
    el?.addEventListener('focusout', keluar);
    return () => { document.removeEventListener('pointerdown', klik); document.removeEventListener('keydown', tuts); el?.removeEventListener('focusout', keluar); };
  }, [buka]);

  return (
    <div ref={kotak} className="relative ms-auto">
      <button ref={tombol} type="button" aria-expanded={buka} aria-controls="menu-galeri-lain" onClick={() => setBuka((b) => !b)} className="inline-flex min-h-9 items-center gap-1 rounded-md px-2 font-semibold underline-offset-4 hover:underline">
        Galeri lain <ChevronDown size={13} aria-hidden="true" className={`transition ${buka ? 'rotate-180' : ''}`} />
      </button>
      {buka && (
        <ul id="menu-galeri-lain" aria-label="Galeri lain di PintuWeb" className="absolute end-0 top-full z-50 mt-1 max-h-[70vh] w-60 overflow-y-auto rounded-xl border-2 border-kremr bg-navy p-1.5 shadow-[4px_4px_0_rgba(255,122,26,0.6)]">
          {daftar.map((g) => (
            <li key={g.path}>
              <a href={`${base}/${g.path}`} className="flex min-h-10 items-center justify-between gap-2 rounded-md px-3 font-display text-sm font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer hover:text-navy">
                {g.label} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Bilah aksi lengket di ponsel: muncul setelah hero lewat, sembunyi saat footer terlihat. */
export function BilahLengket({ waHref }) {
  const [tampil, setTampil] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('hero');
    const kaki = document.getElementById('kaki');
    if (!hero || !kaki || !('IntersectionObserver' in window)) return undefined;
    let lewat = false; let kakiTerlihat = false;
    const perbarui = () => setTampil(lewat && !kakiTerlihat);
    const o1 = new IntersectionObserver(([e]) => { lewat = !e.isIntersecting && e.boundingClientRect.top < 0; perbarui(); });
    const o2 = new IntersectionObserver(([e]) => { kakiTerlihat = e.isIntersecting; perbarui(); });
    o1.observe(hero); o2.observe(kaki);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t-2 border-kremr/30 bg-navy px-3 pt-2.5 transition duration-300 md:hidden ${tampil ? 'translate-y-0' : 'invisible translate-y-full'}`} style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}>
      <div className="mx-auto flex max-w-md gap-2">
        <a href="#tiket" className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border-2 border-kremr px-3 font-display text-sm font-bold uppercase tracking-wide text-kremr">
          <Ticket size={15} aria-hidden="true" /> Lihat demo
        </a>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 flex-[1.3] items-center justify-center gap-1.5 rounded-lg bg-oranyer px-3 font-display text-sm font-bold uppercase tracking-wide text-navy">
          <MessageCircle size={15} aria-hidden="true" /> Pesan via WhatsApp<span className="sr-only"> (tab baru)</span>
        </a>
      </div>
    </div>
  );
}

/** Tautan langsung #slug: gulir ke kartu (memperhitungkan header lengket) dan beri cincin sorot ±2 detik. */
export function Sorot() {
  useEffect(() => {
    let timer;
    const pergi = (hash, dariKlik) => {
      const id = decodeURIComponent((hash || '').replace(/^#/, ''));
      const el = id && document.getElementById(id);
      if (!el || !el.hasAttribute('data-demo')) return;
      const kurang = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: kurang || !dariKlik ? 'auto' : 'smooth', block: 'start' });
      document.querySelectorAll('[data-sorot]').forEach((n) => n.removeAttribute('data-sorot'));
      el.setAttribute('data-sorot', '');
      clearTimeout(timer);
      timer = setTimeout(() => el.removeAttribute('data-sorot'), 2200);
    };
    const awal = setTimeout(() => pergi(window.location.hash, false), 150);
    const ubah = () => pergi(window.location.hash, true);
    const klik = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (a && a.getAttribute('href') === window.location.hash) pergi(window.location.hash, true);
    };
    window.addEventListener('hashchange', ubah);
    document.addEventListener('click', klik);
    return () => { clearTimeout(awal); clearTimeout(timer); window.removeEventListener('hashchange', ubah); document.removeEventListener('click', klik); };
  }, []);
  return null;
}
