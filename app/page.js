import { getImageProps } from 'next/image';
import { Ticket, ArrowDown, ArrowUpRight, MessageCircle, CalendarCheck, LayoutGrid, BellRing, ShieldCheck, BarChart3, Smartphone, ClipboardList, MousePointerClick, CheckCheck, ChevronDown } from 'lucide-react';
import { templates, slugOf } from './components/templates-data';
import { MULAI_WAKTU, LANJUT, GALERI_LAIN, BACA_JUGA, PINTUWEB, PAKET, WA_DISPLAY, JENIS, LOGO, wa } from './components/pintuweb';
import { GaleriLain, BilahLengket, Sorot } from './components/interaktif';

const WA = wa(`Halo PintuWeb, saya tertarik ${JENIS}. Boleh minta info?`);
const BASE = '/website-reservasi/images/rsv';

// Gambar kartu: <picture> dengan potret ponsel (< 768 px) dan gambar desktop. Varian statis (tanpa optimizer Vercel).
function gambarKartu(t, slug) {
  const desk = getImageProps({ src: t.image, alt: '', width: 1600, height: 1000, sizes: '(max-width: 1279px) 100vw, 620px' }).props;
  const ponsel = `${BASE}/${slug}-m`;
  return { desk, ponselSet: `${ponsel}-320.webp 320w, ${ponsel}-480.webp 480w, ${ponsel}-640.webp 640w, ${ponsel}.webp 780w` };
}
const N = templates.length;

const FASILITAS = [
  { icon: LayoutGrid, title: 'Pilih langsung', desc: 'Tamu tinggal klik meja, kursi, atau jam yang masih kosong.' },
  { icon: CalendarCheck, title: 'Jam sudah pas', desc: 'Pakai jam WIB. Jam yang sudah lewat otomatis tertutup.' },
  { icon: BellRing, title: 'Ada kode pesanan', desc: 'Pesanan masuk ke WhatsApp atau email usahamu.' },
  { icon: ShieldCheck, title: 'Ikut aturan usahamu', desc: 'Hari libur, tarif akhir pekan, dan batas pesan bisa diatur.' },
  { icon: BarChart3, title: 'Cek pesanan sendiri', desc: 'Tamu bisa melihat dan membatalkan pesanannya.' },
  { icon: Smartphone, title: 'Enak dibuka di HP', desc: 'Tamu bisa memesan dari ponsel tanpa pasang aplikasi.' },
];

const BOARDING = [
  { icon: ClipboardList, no: 'GATE 1', title: 'Ceritakan usahamu', desc: 'Restoran, klinik, atau futsal? Kasih tahu cara pelangganmu memesan.' },
  { icon: MousePointerClick, no: 'GATE 2', title: 'Pilih contoh', desc: 'Pilih yang paling mirip dengan usahamu.' },
  { icon: CheckCheck, no: 'GATE 3', title: 'Kami sesuaikan', desc: 'Menu, jam buka, dan tampilan kami atur.' },
  { icon: Ticket, no: 'GATE 4', title: 'Siap dipakai', desc: 'Pelangganmu bisa langsung memesan.' },
];

const INFO = [
  { q: 'Apa bedanya kelima contoh ini?', a: 'Cara memilihnya beda: meja untuk restoran, tanggal untuk hotel, jam untuk klinik dan futsal, kursi untuk bioskop. Pilih yang paling mirip usahamu.' },
  { q: 'Apakah pesanan masuk ke WhatsApp saya?', a: 'Di contoh ini belum, karena hanya untuk dicoba. Di website milikmu, pesanan kami sambungkan ke WhatsApp atau email.' },
  { q: 'Berapa biayanya?', a: `Paket ${PAKET.nama} mulai ${PAKET.mulai} sampai ${PAKET.sampai}. Harga pasti ada di penawaran sebelum mulai.` },
  { q: 'Berapa lama pengerjaannya?', a: `Sekitar ${PAKET.waktu}, tergantung aturan khusus usahamu.` },
  { q: 'Bisa dibuka di HP?', a: 'Bisa. Pelangganmu bisa memesan dari ponsel tanpa pasang aplikasi.' },
  { q: 'Jam buka dan jumlah meja bisa diatur?', a: 'Bisa. Hari libur, jam buka, jumlah meja atau kamar, dan lama pesan mengikuti usahamu.' },
];

// Panduan memilih: tiap pola dipetakan ke jenis usaha.
const PANDUAN = [
  { kode: 'RSV-001', pola: 'Pilih meja', cocok: 'Restoran, kafe, dan rumah makan.', logika: 'Tamu klik meja kosong di denah.' },
  { kode: 'RSV-002', pola: 'Pilih tanggal menginap', cocok: 'Hotel kecil, vila, dan homestay.', logika: 'Tamu pilih tanggal masuk dan keluar.' },
  { kode: 'RSV-003', pola: 'Pilih jam', cocok: 'Klinik, salon, dan barbershop.', logika: 'Tamu pilih jam yang kosong, lalu dapat nomor antrean.' },
  { kode: 'RSV-004', pola: 'Pilih jam dan lapangan', cocok: 'Futsal, badminton, studio, dan ruang rapat.', logika: 'Tamu sewa per jam dan bisa ambil beberapa jam.' },
  { kode: 'RSV-005', pola: 'Pilih kursi', cocok: 'Bioskop kecil, teater, dan acara bertempat duduk.', logika: 'Tamu pilih film, jam, lalu kursi.' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: INFO.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      {/* Logo pintu asli PintuWeb (367×512). Di latar gelap diberi alas putih membulat. */}
      <span className={`grid shrink-0 place-items-center ${kecil ? 'rounded-md bg-white px-1.5 py-1' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="" width={367} height={512} className={kecil ? 'h-7 w-auto' : 'h-[30px] w-auto'} />
      </span>
      <span className="flex flex-col text-left leading-none">
        PintuWeb{' '}
        <span className={`mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${kecil ? 'text-oranyer' : 'text-oranyer-ink'}`}>Website Reservasi</span>
      </span>
    </>
  );
}

export default function PortalReservasi() {
  return (
    <div id="top" className="min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="relative z-50 bg-navy text-xs text-kremr">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-0.5 sm:px-6">
          <ol className="flex items-center gap-2">
            <li><a href={PINTUWEB} className="inline-flex min-h-9 items-center font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
            <li aria-hidden="true" className="opacity-60">/</li>
            <li aria-current="page">Reservasi &amp; Booking</li>
          </ol>
          <GaleriLain daftar={GALERI_LAIN} base={PINTUWEB} />
        </div>
      </nav>

      <header className="sticky top-0 z-40 border-b-2 border-navy bg-kremr/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg sm:text-xl font-extrabold uppercase tracking-wide">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 font-display text-xs font-bold uppercase tracking-wide text-mutedr md:flex">
            <a href="#tiket" className="transition hover:text-oranyer-ink">Contoh</a>
            <a href="#panduan" className="transition hover:text-oranyer-ink">Pilih Contoh</a>
            <a href="#fasilitas" className="transition hover:text-oranyer-ink">Fitur</a>
            <a href="#boarding" className="transition hover:text-oranyer-ink">Cara Pesan</a>
            <a href="#info" className="transition hover:text-oranyer-ink">Tanya Jawab</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-lg border-2 border-navy bg-navy px-3 py-2 font-display text-[13px] font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer-ink sm:px-5 sm:text-sm">
            Pesan sistem booking<span className="sr-only"> lewat WhatsApp (tab baru)</span>
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero — departure board */}
        <section id="hero" className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="naik inline-block rounded-full border-2 border-navy bg-white px-4 py-1.5 text-xs font-bold shadow-[3px_3px_0_var(--color-navy)]">
                {N} contoh · bisa dicoba
              </span>
              <h1 className="mt-4 font-display text-[2.3rem] font-extrabold uppercase leading-[0.95] sm:mt-6 sm:text-7xl">
                Antri itu <span className="text-oranyer-ink">kuno</span>.<br />Reservasi itu <span className="text-oranyer-ink">sekarang</span>.
              </h1>
              <p className="mx-auto mt-5 hidden max-w-xl text-sm sm:block leading-relaxed text-mutedr">
                Pesan meja, kamar, jam dokter, lapangan, atau kursi bioskop. Semuanya bisa kamu coba.
              </p>
            </div>

            {/* Ponsel: tombol utama + strip demo geser (potret ponsel), menaut ke kartu masing-masing */}
            <div className="mt-5 sm:hidden">
              <a href="#tiket" className="mx-auto flex min-h-11 w-full max-w-xs items-center justify-center gap-2 rounded-lg border-2 border-navy bg-oranyer px-4 font-display text-sm font-bold uppercase tracking-wide text-navy shadow-[3px_3px_0_var(--color-navy)]">
                Lihat {N} demo <ArrowDown size={15} aria-hidden="true" />
              </a>
              <ul aria-label="Demo reservasi, geser ke samping" className="strip -mx-4 mt-4 flex gap-3 overflow-x-auto px-4 pb-2">
                {templates.map((t) => {
                  const slug = slugOf(t);
                  return (
                    <li key={t.kode} className="w-[112px] shrink-0">
                      <a href={`#${slug}`} className="block rounded-lg border-2 border-navy bg-white shadow-[3px_3px_0_rgba(16,32,63,0.2)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`${BASE}/${slug}-m-320.webp`} alt="" width={112} height={150} loading="eager" className="aspect-[3/4] w-full rounded-t-[0.4rem] object-cover object-top" />
                        <span className="block px-2 py-1.5 font-display text-[13px] font-extrabold uppercase leading-tight">{t.name}<span className="block font-mono text-[9px] font-bold tracking-wide text-mutedr">{t.merek}</span></span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-2 text-center text-[11px] uppercase tracking-wide text-mutedr">Tarif mulai <strong className="font-display text-sm text-oranyer-ink">{PAKET.mulai}</strong> · {PAKET.waktu}</p>
            </div>

            {/* Papan keberangkatan: tiap baris menaut ke tiketnya */}
            <div className="board naik naik-2 mx-auto mt-8 hidden max-w-2xl overflow-hidden rounded-xl border-2 border-navy shadow-[6px_6px_0_rgba(16,32,63,0.2)] sm:mt-10 sm:block">
              <div className="flex items-center justify-between border-b border-kremr/20 px-4 py-2.5 text-[11px] uppercase sm:px-5">
                <span>■ Papan Reservasi</span><span className="text-oranyer">Demo<span className="hidden sm:inline"> · bisa dicoba</span></span>
              </div>
              <ul className="divide-y divide-kremr/10 text-sm">
                {templates.map((t, i) => (
                  <li key={t.kode}>
                    <a href={`#${slugOf(t)}`} className="baris grid min-h-11 grid-cols-[5.5rem_1fr_auto] items-center gap-3 px-4 py-2.5 transition hover:bg-kremr/10 sm:grid-cols-[6.5rem_7.5rem_1fr_auto] sm:px-5" style={{ animationDelay: `${0.25 + i * 0.1}s` }}>
                      <span className="text-oranyer">{t.kode}</span>
                      <span className="font-bold uppercase">{t.name}</span>
                      <span className="hidden truncate text-kremr/80 sm:block">{t.paradigma}</span>
                      <span className="text-emerald-300">OPEN ▸</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 hidden flex-col items-center gap-3 text-center sm:mt-8 sm:flex">
              <a href="#tiket" className="inline-flex min-h-11 items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-navy underline-offset-4 hover:underline">
                Ambil tiketmu <ArrowDown size={15} aria-hidden="true" />
              </a>
              {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
              <p className="text-xs uppercase tracking-wide text-mutedr">Tarif mulai <strong className="font-display text-base text-oranyer-ink">{PAKET.mulai}</strong> <span className="whitespace-nowrap"><span aria-hidden="true" className="mx-1">·</span>pengerjaan {PAKET.waktu}</span></p>
            </div>
          </div>
        </section>

        {/* Tiket */}
        <section id="tiket" aria-label="Contoh website reservasi" className="scroll-mt-[62px] px-4 pb-16 sm:px-6 sm:pb-20">
          <ul className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
            {templates.map((t) => {
              const slug = slugOf(t);
              const g = gambarKartu(t, slug);
              return (
                <li key={t.kode} id={slug} data-demo className="tiket scroll-mt-[72px] grid md:grid-cols-[1.15fr_0.85fr]">
                  {/* Badan tiket: pratinjau (tautan untuk tetikus; papan ketik memakai tombol "Coba demo") */}
                  <div className="relative overflow-hidden rounded-t-[0.9rem] border-b-2 border-dashed border-navy/35 md:rounded-l-[0.9rem] md:rounded-tr-none md:border-b-0 md:border-r-2">
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="group block md:h-full" tabIndex={-1} aria-hidden="true">
                      <div className="relative aspect-[390/460] md:aspect-auto md:h-full md:min-h-[290px]">
                        <picture>
                          <source media="(max-width: 767px)" srcSet={g.ponselSet} sizes="calc(100vw - 36px)" />
                          { }
                          <img src={g.desk.src} srcSet={g.desk.srcSet} sizes={g.desk.sizes} alt="" width={1600} height={1000} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
                        </picture>
                      </div>
                    </a>
                    <span className="pointer-events-none absolute bottom-3 left-3 rounded-md border-2 border-navy bg-oranyer px-2.5 py-1 font-display text-xs font-bold uppercase text-navy md:bottom-auto md:left-4 md:top-4" aria-hidden="true">{t.emoji} {t.name}</span>
                  </div>

                  {/* Stub tiket */}
                  <div className="flex flex-col justify-between p-5 sm:p-6 md:p-7">
                    <div>
                      <div className="flex items-center justify-between text-[11px] uppercase text-mutedr">
                        <span>{t.kode}</span><span>Boarding · Web App</span>
                      </div>
                      <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-none">{t.merek}</h2>
                      <p className="mt-1 font-bold text-oranyer-ink">{t.paradigma}</p>
                      <p className="mt-3 text-[13px] leading-relaxed text-mutedr sm:text-sm">{t.description}</p>
                      <dl className="mt-4 grid grid-cols-2 gap-3 text-center">
                        {[t.detail.kolom1, t.detail.kolom2].map(([k, v]) => (
                          <div key={k} className="flex flex-col-reverse rounded-lg border border-navy/20 bg-kremr px-3 py-1.5 sm:py-2">
                            <dt className="text-[10px] uppercase text-mutedr">{k}</dt>
                            <dd className="font-display text-lg font-extrabold">{v}</dd>
                          </div>
                        ))}
                      </dl>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Halaman dalam ${t.merek}`}>
                        {t.halaman.map(([href, label]) => (
                          <li key={href}><a href={t.url + href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1 rounded-md border border-navy/30 px-2.5 text-xs font-bold transition hover:border-oranyer-ink hover:text-oranyer-ink">{label} <ArrowUpRight size={12} aria-hidden="true" /></a></li>
                        ))}
                      </ul>
                    </div>
                    <div className="perf mt-5 flex flex-wrap items-center justify-between gap-3 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1" aria-hidden="true">
                          {Array.from({ length: 12 }).map((_, k) => <span key={k} className={`w-1 rounded ${k >= 8 ? 'hidden sm:inline-block' : 'inline-block'} ${k % 3 ? 'h-6 bg-navy' : 'h-6 bg-navy/40'}`} />)}
                        </div>
                        {/* Stempel: tiket yang sudah terjual */}
                        {t.terjual > 0 && <span className="-rotate-6 rounded border-2 border-oranyer-ink px-2 py-0.5 font-display text-xs font-bold uppercase tracking-wide text-oranyer-ink">{t.terjual} terjual</span>}
                      </div>
                      <p className="w-full text-[11px] uppercase tracking-wide text-mutedr">Sistem seperti ini: <strong className="font-display text-sm text-oranyer-ink">{MULAI_WAKTU}</strong></p>
                      <div className="flex flex-wrap gap-2">
                        <a href={t.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-navy px-4 font-display text-xs font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer-ink">
                          Coba demo<span className="sr-only"> {t.merek} (tab baru)</span> <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                        <a href={wa(`Halo PintuWeb, saya mau ${JENIS} seperti contoh ${t.merek} (${t.url}). Boleh minta info?`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-lg border-2 border-navy px-4 font-display text-xs font-bold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-kremr">
                          Pesan yang mirip<span className="sr-only"> dengan {t.merek} lewat WhatsApp (tab baru)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Panduan memilih paradigma */}
        <section id="panduan" aria-labelledby="judul-panduan" className="scroll-mt-[62px] border-t-2 border-navy px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Pilih yang Cocok</p>
              <h2 id="judul-panduan" className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Usahamu cocok yang <span className="text-oranyer-ink">mana?</span></h2>
            </div>
            <dl className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
              {PANDUAN.map((p) => (
                <div key={p.kode} className="rounded-xl border-2 border-navy bg-white p-5 shadow-[4px_4px_0_rgba(16,32,63,0.15)]">
                  <dt className="font-display text-xl font-extrabold uppercase leading-tight"><span className="block font-mono text-[10px] font-bold tracking-[0.15em] text-mutedr">{p.kode}</span>{p.pola}</dt>
                  <dd className="mt-2 text-[13px] leading-relaxed text-mutedr"><strong className="text-navy">Cocok untuk:</strong> {p.cocok}</dd>
                  <dd className="mt-2 text-[13px] leading-relaxed text-mutedr"><strong className="text-navy">Cara kerja:</strong> {p.logika}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Fasilitas terminal */}
        <section id="fasilitas" aria-labelledby="judul-fasilitas" className="scroll-mt-[62px] border-t-2 border-navy bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Fitur</p>
              <h2 id="judul-fasilitas" className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Fitur yang <span className="text-oranyer-ink">kamu dapat</span></h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-mutedr sm:mx-auto sm:mt-4">Semua contoh punya fitur ini.</p>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {FASILITAS.map((f) => (
                <li key={f.title} className="flex items-start gap-4 rounded-xl border-2 border-navy bg-kremr p-4 shadow-[4px_4px_0_rgba(16,32,63,0.15)] transition sm:block sm:p-6 sm:hover:-translate-y-1 sm:hover:shadow-[6px_6px_0_rgba(232,93,38,0.35)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border-2 border-navy bg-navy text-kremr"><f.icon size={20} aria-hidden="true" /></span>
                  <div className="sm:mt-4">
                    <h3 className="font-display text-lg font-extrabold uppercase leading-tight">{f.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-mutedr sm:mt-1.5 sm:text-sm">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alur boarding */}
        <section id="boarding" aria-labelledby="judul-boarding" className="scroll-mt-[62px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Cara Pesan</p>
              <h2 id="judul-boarding" className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Empat langkah <span className="text-oranyer-ink">mudah</span></h2>
            </div>
            <ol className="relative mt-8 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              <span className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-navy/30 lg:block" aria-hidden="true" />
              <span className="absolute bottom-6 left-7 top-6 border-l-2 border-dashed border-navy/30 sm:hidden" aria-hidden="true" />
              {BOARDING.map((b) => (
                <li key={b.no} className="relative flex items-start gap-4 sm:block sm:text-center">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-xl border-2 border-navy bg-oranyer text-navy shadow-[4px_4px_0_var(--color-navy)] sm:mx-auto"><b.icon size={22} aria-hidden="true" /></span>
                  <div>
                    <p className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer-ink sm:mt-3">{b.no}</p>
                    <h3 className="mt-0.5 font-display text-lg font-extrabold uppercase sm:mt-1">{b.title}</h3>
                    <p className="mt-1 max-w-[19rem] text-[13px] leading-relaxed text-mutedr sm:mx-auto sm:mt-1.5 sm:max-w-[15rem] sm:text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Informasi (FAQ): <details> bawaan, satu terbuka sekaligus */}
        <section id="info" aria-labelledby="judul-info" className="scroll-mt-[62px] border-t-2 border-navy bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Tanya Jawab</p>
              <h2 id="judul-info" className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Yang sering <span className="text-oranyer-ink">ditanya</span></h2>
            </div>
            <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
              {INFO.map((t, i) => (
                <details key={t.q} name="faq-reservasi" open={i === 0} className="tanya group rounded-xl border-2 border-navy bg-kremr shadow-[4px_4px_0_rgba(16,32,63,0.15)] open:shadow-[5px_5px_0_rgba(232,93,38,0.5)]">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-base font-extrabold leading-snug">{t.q}</span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border-2 border-navy bg-white transition group-open:rotate-180 group-open:bg-oranyer" aria-hidden="true">
                      <ChevronDown size={15} />
                    </span>
                  </summary>
                  <div className="border-t-2 border-dashed border-navy/25 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-mutedr">{t.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="board border-t-2 border-navy px-4 py-16 text-center sm:px-6">
          <div className="mx-auto max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-oranyer">Now boarding</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">Siap terima pesanan online?</h2>
            <p className="mt-4 text-sm text-kremr/80">Ceritakan usahamu, kami bantu buatkan.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-oranyer px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-navy transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={16} aria-hidden="true" /> Chat WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer id="kaki" className="board border-t border-kremr/10 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-10 text-kremr/75 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold uppercase tracking-wide text-kremr"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">Contoh website reservasi untuk restoran, hotel, klinik, futsal, dan bioskop.</p>
          </div>
          <nav aria-labelledby="kaki-terminal" className="text-sm">
            <p id="kaki-terminal" className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Menu</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#tiket" className="inline-block py-1 transition hover:text-kremr">Semua Contoh</a></li>
              <li><a href="#fasilitas" className="inline-block py-1 transition hover:text-kremr">Fitur</a></li>
              <li><a href="#boarding" className="inline-block py-1 transition hover:text-kremr">Cara Pesan</a></li>
              <li><a href="#info" className="inline-block py-1 transition hover:text-kremr">Tanya Jawab</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Hubungi</p>
            <ul className="mt-3 space-y-1">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-kremr">WhatsApp <span className="whitespace-nowrap tracking-normal">{WA_DISPLAY}</span></a></li>
              <li><a href={PINTUWEB} className="inline-block py-1 transition hover:text-kremr">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-6xl border-t border-kremr/10 pt-8 text-sm">
          <p id="lanjut-pintuweb" className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 rounded-md border-2 border-kremr/30 px-3 font-display text-xs font-bold uppercase tracking-wide text-kremr transition hover:border-oranyer hover:bg-oranyer hover:text-navy">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Baca juga</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {BACA_JUGA.map((l) => (
              <li key={l.href}><a href={l.href} className="inline-flex min-h-9 items-center gap-1 underline decoration-kremr/25 underline-offset-4 transition hover:text-kremr hover:decoration-oranyer">{l.label} <ArrowUpRight size={13} aria-hidden="true" /></a></li>
            ))}
          </ul>
          <p className="mt-6 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-kremr/70">Galeri lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-kremr/25 underline-offset-4 transition hover:text-kremr hover:decoration-oranyer">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-kremr/10 pt-5 text-[11px] text-kremr/70 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Website Reservasi
        </p>
      </footer>
      <BilahLengket waHref={WA} />
      <Sorot />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
