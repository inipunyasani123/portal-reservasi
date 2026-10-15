'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Ticket, ArrowDown, ArrowUpRight, MessageCircle, CalendarCheck, LayoutGrid, BellRing, ShieldCheck, BarChart3, Smartphone, ClipboardList, MousePointerClick, CheckCheck, ChevronDown } from 'lucide-react';
import { templates } from './components/templates-data';
import { LANJUT, GALERI_LAIN, PINTUWEB } from './components/pintuweb';

const WA = 'https://wa.me/6285190931399?text=Halo%2C%20saya%20tertarik%20aplikasi%20reservasi%20di%20PintuWeb';

const FASILITAS = [
  { icon: LayoutGrid, title: 'Denah Interaktif', desc: 'Tamu memilih meja, kursi, atau slot langsung dari denah visual — bukan menebak dari daftar.' },
  { icon: CalendarCheck, title: 'Jam sesuai WIB', desc: 'Tanggal dan jam dihitung di perangkat tamu dalam WIB; slot yang sudah lewat otomatis tertutup.' },
  { icon: BellRing, title: 'Konfirmasi dengan kode', desc: 'Setiap pesanan mendapat kode dan ringkasan. Saat dipasang, ringkasan itu bisa diteruskan ke WhatsApp atau email usahamu.' },
  { icon: ShieldCheck, title: 'Aturan usaha', desc: 'Hari libur, hari praktik, tarif akhir pekan, batas kursi per transaksi — semuanya aturan di data, bukan hiasan.' },
  { icon: BarChart3, title: 'Halaman "punya saya"', desc: 'Tamu melihat dan membatalkan pesanannya sendiri, lengkap dengan batas batal gratis.' },
  { icon: Smartphone, title: 'Ramah ponsel', desc: 'Diuji di lebar 360 px — denah, grid jadwal, dan peta kursi tetap bisa dipakai.' },
];

const BOARDING = [
  { icon: ClipboardList, no: 'GATE 1', title: 'Check-In Kebutuhan', desc: 'Restoran? Klinik? Futsal? Ceritakan alur booking usahamu.' },
  { icon: MousePointerClick, no: 'GATE 2', title: 'Pilih Paradigma', desc: 'Lima pola teruji — pilih yang paling cocok dengan operasionalmu.' },
  { icon: CheckCheck, no: 'GATE 3', title: 'Kustomisasi', desc: 'Menu, jam buka, denah, dan branding kami sesuaikan.' },
  { icon: Ticket, no: 'GATE 4', title: 'Boarding', desc: 'Sistem live — pelangganmu mulai reservasi hari itu juga.' },
];

const INFO = [
  { q: 'Apakah reservasi masuk ke WhatsApp saya?', a: 'Di demo, pesanan hanya disimpan di peramban pengunjung — tidak ada yang dikirim. Saat dipasang untuk usahamu, kami sambungkan ke WhatsApp, email, atau basis data supaya setiap pesanan sampai ke kamu.' },
  { q: 'Berapa biaya membuat sistem reservasi seperti ini?', a: 'Paket Sistem Reservasi Online PintuWeb Rp2,5 juta–Rp6 juta, dikerjakan 1–2 minggu: kalender & slot ketersediaan, konfirmasi lewat WhatsApp/email, dashboard admin, dan opsi DP online. Angka pastinya tertulis di penawaran sebelum mulai.' },
  { q: 'Bagaimana mencegah dobel booking?', a: 'Di demo, slot yang sudah terisi tertutup di perangkat yang sama. Versi terpasang memakai basis data bersama, jadi slot yang diambil satu tamu langsung tertutup untuk semua tamu.' },
  { q: 'Bisakah jam operasional dan kapasitas diatur?', a: 'Bisa penuh: hari libur, jam buka-tutup, jumlah meja/kamar/lapangan, hingga durasi per sesi — semua mengikuti aturan usahamu.' },
  { q: 'Usaha saya tidak ada di lima kategori itu — tetap bisa?', a: 'Tetap bisa. Lima template ini adalah paradigma (denah, kalender, antrian, grid jadwal, kursi). Hampir semua bisnis booking cocok dengan salah satunya — kami sesuaikan istilah dan alurnya.' },
];

export default function PortalReservasi() {
  const [buka, setBuka] = useState(0);
  return (
    <div id="top" className="min-h-screen">
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-navy text-kremr text-xs">
        <ol className="mx-auto flex max-w-6xl px-4 sm:px-6 items-center gap-2 py-1.5">
          <li><a href="https://www.pintuweb.id" className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Website Reservasi</li>
        </ol>
      </nav>
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b-2 border-navy bg-kremr/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold uppercase tracking-wide">
            <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-navy bg-oranyer text-navy shadow-[3px_3px_0_var(--color-navy)]"><Ticket size={17} /></span>
            <span className="flex flex-col leading-none">
              PintuWeb{' '}
              <span className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-oranyer-ink">Website Reservasi</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 font-display text-xs font-bold uppercase tracking-wide text-mutedr md:flex" role="navigation" aria-label="Navigasi">
            <a href="#tiket" className="transition hover:text-oranyer-ink">Tiket</a>
            <a href="#fasilitas" className="transition hover:text-oranyer-ink">Fasilitas</a>
            <a href="#boarding" className="transition hover:text-oranyer-ink">Alur</a>
            <a href="#info" className="transition hover:text-oranyer-ink">Informasi</a>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-navy bg-navy px-5 py-2 font-display text-sm font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer">
            Booking Demo
          </a>
        </nav>
      </header>

      {/* Hero — departure board */}
      <section className="px-4 pt-14 pb-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="inline-block rounded-full border-2 border-navy bg-white px-4 py-1.5 text-xs font-bold shadow-[3px_3px_0_var(--color-navy)]">
              5 aplikasi · 5 paradigma booking
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl">
              Antri itu <span className="text-oranyer-ink">kuno</span>.<br />Reservasi itu <span className="text-oranyer-ink">sekarang</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mutedr">
              Meja restoran, kamar hotel, janji dokter, lapangan futsal, sampai kursi bioskop — lima cara booking, masing-masing dengan halaman dalam yang bisa dicoba.
            </p>
          </motion.div>

          {/* Papan keberangkatan */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="board mx-auto mt-10 max-w-2xl overflow-hidden rounded-xl border-2 border-navy shadow-[6px_6px_0_rgba(16,32,63,0.2)]">
            <div className="flex items-center justify-between border-b border-kremr/20 px-5 py-2.5 text-[11px] uppercase">
              <span>■ Papan Reservasi</span><span className="text-oranyer">● DEMO</span>
            </div>
            <div className="divide-y divide-kremr/10 text-sm">
              {templates.map((t, i) => (
                <motion.a key={t.kode} href={`#${t.name.toLowerCase()}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.12 }} className="flex items-center justify-between px-5 py-2.5 transition hover:bg-kremr/10">
                  <span className="text-oranyer">{t.kode}</span>
                  <span className="font-bold uppercase">{t.name}</span>
                  <span className="hidden text-kremr/75 sm:block">{t.paradigma}</span>
                  <span className="text-emerald-400">OPEN ▸</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <a href="#tiket" className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-navy underline-offset-4 hover:underline">
              Ambil tiketmu <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Tiket cards */}
      <section id="tiket" className="scroll-mt-20 px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          {templates.map((t, i) => (
            <motion.article
              key={t.kode}
              id={t.name.toLowerCase()}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="tiket grid md:grid-cols-[1.15fr_0.85fr]"
            >
              {/* Preview (badan tiket) */}
              <a href={t.url} className="group relative block overflow-hidden rounded-t-[0.9rem] border-b-2 border-dashed border-navy/35 md:rounded-l-[0.9rem] md:rounded-tr-none md:border-b-0 md:border-r-2" aria-label={`Buka demo ${t.merek}`}>
                <div className="relative aspect-[16/10] md:h-full md:min-h-[290px]">
                  <Image src={t.image} alt="" fill sizes="(max-width:768px) 100vw, 55vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" priority={i === 0} />
                </div>
                <span className="absolute left-4 top-4 rounded-md border-2 border-navy bg-oranyer px-2.5 py-1 font-display text-xs font-bold uppercase text-navy">{t.emoji} {t.name}</span>
              </a>

              {/* Stub tiket */}
              <div className="flex flex-col justify-between p-6 md:p-7">
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase text-mutedr">
                    <span>{t.kode}</span><span>Boarding · Web App</span>
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-extrabold uppercase">{t.merek}</h2>
                  <p className="font-bold text-oranyer-ink">{t.paradigma}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mutedr">{t.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    {[t.detail.kolom1, t.detail.kolom2].map(([k, v]) => (
                      <div key={k} className="rounded-lg border border-navy/20 bg-kremr px-3 py-2">
                        <p className="text-[10px] uppercase text-mutedr">{k}</p>
                        <p className="font-display text-lg font-extrabold">{v}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Halaman ${t.merek}`}>
                    {t.halaman.map(([href, label]) => (
                      <li key={href}><a href={t.url + href} className="inline-flex items-center gap-1 rounded-md border border-navy/30 px-2.5 py-1 text-xs font-bold transition hover:border-oranyer-ink hover:text-oranyer-ink">{label} <ArrowUpRight size={12} aria-hidden="true" /></a></li>
                    ))}
                  </ul>
                </div>
                <div className="perf mt-5 flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1" aria-hidden="true">
                      {Array.from({ length: 14 }).map((_, k) => <span key={k} className={`w-1 rounded ${k >= 9 ? 'hidden sm:inline-block' : 'inline-block'} ${k % 3 ? 'h-6 bg-navy' : 'h-6 bg-navy/40'}`} />)}
                    </div>
                    {/* Stempel: tiket yang sudah terjual */}
                    {t.terjual > 0 && <span className="-rotate-6 rounded border-2 border-oranyer-ink px-2 py-0.5 font-display text-xs font-bold uppercase tracking-wide text-oranyer-ink">{t.terjual} terjual</span>}
                  </div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer">
                    Pesan <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Fasilitas terminal */}
      <section id="fasilitas" className="scroll-mt-20 border-t-2 border-navy bg-white px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Fasilitas Terminal</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Semua penerbangan <span className="text-oranyer-ink">full service</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mutedr">Apapun paradigma yang kamu pilih, fitur intinya sama lengkap.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FASILITAS.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-xl border-2 border-navy bg-kremr p-6 shadow-[4px_4px_0_rgba(16,32,63,0.15)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(232,93,38,0.35)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg border-2 border-navy bg-navy text-kremr"><f.icon size={20} /></span>
                <h3 className="mt-4 font-display text-lg font-extrabold uppercase">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mutedr">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alur boarding */}
      <section id="boarding" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Alur Boarding</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Empat gerbang menuju <span className="text-oranyer-ink">lepas landas</span></h2>
          </div>
          <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-navy/30 lg:block" aria-hidden="true" />
            {BOARDING.map((b, i) => (
              <motion.div
                key={b.no}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative text-center"
              >
                <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-xl border-2 border-navy bg-oranyer text-navy shadow-[4px_4px_0_var(--color-navy)]"><b.icon size={22} /></span>
                <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer-ink">{b.no}</p>
                <h3 className="mt-1 font-display text-lg font-extrabold uppercase">{b.title}</h3>
                <p className="mx-auto mt-1.5 max-w-[15rem] text-sm leading-relaxed text-mutedr">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi (FAQ) */}
      <section id="info" className="scroll-mt-20 border-t-2 border-navy bg-white px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Pusat Informasi</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Sebelum <span className="text-oranyer-ink">take-off</span></h2>
          </div>
          <div className="mt-10 space-y-4">
            {INFO.map((t, i) => {
              const open = buka === i;
              return (
                <div key={t.q} className={`rounded-xl border-2 border-navy bg-kremr transition ${open ? 'shadow-[5px_5px_0_rgba(232,93,38,0.5)]' : 'shadow-[4px_4px_0_rgba(16,32,63,0.15)]'}`}>
                  <button type="button" onClick={() => setBuka(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                    <span className="font-display text-base font-extrabold leading-snug">{t.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border-2 border-navy transition ${open ? 'rotate-180 bg-oranyer text-navy' : 'bg-white'}`}>
                      <ChevronDown size={15} />
                    </span>
                  </button>
                  {open && (
                    <div className="border-t-2 border-dashed border-navy/25 px-6 py-4">
                      <p className="text-sm leading-relaxed text-mutedr">{t.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="board border-t-2 border-navy px-4 py-16 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-oranyer">Now boarding</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">Bisnismu berikutnya yang dipanggil</h2>
          <p className="mt-4 text-sm text-kremr/80">Sistem reservasi untuk usahamu — mulai dari salah satu paradigma ini.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-oranyer px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-navy transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Chat WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="board border-t border-kremr/10 px-4 pb-6 pt-10 text-kremr/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 font-display text-lg font-extrabold uppercase tracking-wide text-kremr sm:justify-start">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-oranyer text-navy"><Ticket size={15} /></span>
              <span className="flex flex-col text-left leading-none">
                PintuWeb{' '}
                <span className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-oranyer">Website Reservasi</span>
              </span>
            </p>
            <p className="mt-2 text-sm leading-relaxed">Lima paradigma booking untuk restoran, hotel, klinik, futsal, dan bioskop.</p>
          </div>
          <nav aria-label="Tautan footer" className="text-sm">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Terminal</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#tiket" className="transition hover:text-kremr">Koleksi Tiket</a></li>
              <li><a href="#fasilitas" className="transition hover:text-kremr">Fasilitas</a></li>
              <li><a href="#boarding" className="transition hover:text-kremr">Alur Boarding</a></li>
              <li><a href="#info" className="transition hover:text-kremr">Pusat Informasi</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Hubungi</p>
            <ul className="mt-3 space-y-2">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="transition hover:text-kremr">WhatsApp +62 851 9093 1399</a></li>
              <li><a href="https://www.pintuweb.id" className="transition hover:text-kremr">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-6xl border-t border-kremr/10 pt-8 text-center text-sm sm:text-left">
          <p id="lanjut-pintuweb" className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex items-center gap-1.5 rounded-md border-2 border-kremr/30 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-kremr transition hover:border-oranyer hover:bg-oranyer hover:text-navy">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-kremr/60">Terminal lain</p>
          <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="underline decoration-kremr/25 underline-offset-4 transition hover:text-kremr hover:decoration-oranyer">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-kremr/10 pt-5 text-center text-[11px] text-kremr/70">
          © {new Date().getFullYear()} PintuWeb · Galeri Website Reservasi — no show, no cry.
        </p>
      </footer>
    </div>
  );
}
