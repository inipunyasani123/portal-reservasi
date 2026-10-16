import Image from 'next/image';
import { Ticket, ArrowDown, ArrowUpRight, MessageCircle, CalendarCheck, LayoutGrid, BellRing, ShieldCheck, BarChart3, Smartphone, ClipboardList, MousePointerClick, CheckCheck, ChevronDown } from 'lucide-react';
import { templates, slugOf } from './components/templates-data';
import { LANJUT, GALERI_LAIN, PINTUWEB, PAKET, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya tertarik aplikasi reservasi. Boleh minta info?');
const N = templates.length;

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
  { icon: MousePointerClick, no: 'GATE 2', title: 'Pilih Paradigma', desc: `${N === 5 ? 'Lima' : N} pola teruji — pilih yang paling cocok dengan operasionalmu.` },
  { icon: CheckCheck, no: 'GATE 3', title: 'Kustomisasi', desc: 'Menu, jam buka, denah, dan branding kami sesuaikan.' },
  { icon: Ticket, no: 'GATE 4', title: 'Boarding', desc: 'Sistem live — pelangganmu mulai reservasi hari itu juga.' },
];

const INFO = [
  { q: 'Apakah reservasi masuk ke WhatsApp saya?', a: 'Di demo, pesanan hanya disimpan di peramban pengunjung — tidak ada yang dikirim. Saat dipasang untuk usahamu, kami sambungkan ke WhatsApp, email, atau basis data supaya setiap pesanan sampai ke kamu.' },
  { q: 'Berapa biaya membuat sistem reservasi seperti ini?', a: `Paket ${PAKET.nama} PintuWeb ${PAKET.mulai}–${PAKET.sampai}, dikerjakan ${PAKET.waktu}: kalender & slot ketersediaan, konfirmasi lewat WhatsApp/email, dashboard admin, dan opsi DP online. Angka pastinya tertulis di penawaran sebelum mulai.` },
  { q: 'Bagaimana mencegah dobel booking?', a: 'Di demo, slot yang sudah terisi tertutup di perangkat yang sama. Versi terpasang memakai basis data bersama, jadi slot yang diambil satu tamu langsung tertutup untuk semua tamu.' },
  { q: 'Bisakah jam operasional dan kapasitas diatur?', a: 'Bisa penuh: hari libur, jam buka-tutup, jumlah meja/kamar/lapangan, hingga durasi per sesi — semua mengikuti aturan usahamu.' },
  { q: 'Usaha saya tidak ada di lima kategori itu — tetap bisa?', a: 'Tetap bisa. Lima template ini adalah paradigma (denah, kalender, antrian, grid jadwal, kursi). Hampir semua bisnis booking cocok dengan salah satunya — kami sesuaikan istilah dan alurnya.' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: INFO.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      <span className={`grid shrink-0 place-items-center bg-oranyer text-navy ${kecil ? 'h-8 w-8 rounded-md' : 'h-9 w-9 rounded-lg border-2 border-navy shadow-[3px_3px_0_var(--color-navy)]'}`}><Ticket size={kecil ? 15 : 17} aria-hidden="true" /></span>
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
      <nav aria-label="Jejak" className="bg-navy text-xs text-kremr">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-1.5 sm:px-6">
          <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Website Reservasi</li>
        </ol>
      </nav>

      <header className="sticky top-0 z-40 border-b-2 border-navy bg-kremr/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold uppercase tracking-wide">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 font-display text-xs font-bold uppercase tracking-wide text-mutedr md:flex">
            <a href="#tiket" className="transition hover:text-oranyer-ink">Tiket</a>
            <a href="#fasilitas" className="transition hover:text-oranyer-ink">Fasilitas</a>
            <a href="#boarding" className="transition hover:text-oranyer-ink">Alur</a>
            <a href="#info" className="transition hover:text-oranyer-ink">Informasi</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-lg border-2 border-navy bg-navy px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer-ink sm:px-5">
            Booking Demo
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero — departure board */}
        <section className="px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="naik inline-block rounded-full border-2 border-navy bg-white px-4 py-1.5 text-xs font-bold shadow-[3px_3px_0_var(--color-navy)]">
                {N} aplikasi · {N} paradigma booking
              </span>
              <h1 className="mt-6 font-display text-[2.9rem] font-extrabold uppercase leading-[0.95] sm:text-7xl">
                Antri itu <span className="text-oranyer-ink">kuno</span>.<br />Reservasi itu <span className="text-oranyer-ink">sekarang</span>.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mutedr">
                Meja restoran, kamar hotel, janji dokter, lapangan futsal, sampai kursi bioskop — lima cara booking, masing-masing dengan halaman dalam yang bisa dicoba.
              </p>
            </div>

            {/* Papan keberangkatan: tiap baris menaut ke tiketnya */}
            <div className="board naik naik-2 mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border-2 border-navy shadow-[6px_6px_0_rgba(16,32,63,0.2)] sm:mt-10">
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

            <div className="mt-7 flex flex-col items-center gap-3 text-center sm:mt-8">
              <a href="#tiket" className="inline-flex min-h-11 items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-navy underline-offset-4 hover:underline">
                Ambil tiketmu <ArrowDown size={15} aria-hidden="true" />
              </a>
              {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
              <p className="text-xs uppercase tracking-wide text-mutedr">Tarif mulai <strong className="font-display text-base text-oranyer-ink">{PAKET.mulai}</strong> <span className="whitespace-nowrap"><span aria-hidden="true" className="mx-1">·</span>pengerjaan {PAKET.waktu}</span></p>
            </div>
          </div>
        </section>

        {/* Tiket */}
        <section id="tiket" aria-label="Lima aplikasi reservasi" className="scroll-mt-[62px] px-4 pb-16 sm:px-6 sm:pb-20">
          <ul className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
            {templates.map((t) => {
              const slug = slugOf(t);
              return (
                <li key={t.kode} id={slug} className="tiket scroll-mt-[72px] grid md:grid-cols-[1.15fr_0.85fr]">
                  {/* Badan tiket: pratinjau (tautan untuk tetikus; papan ketik memakai tombol "Coba demo") */}
                  <div className="relative overflow-hidden rounded-t-[0.9rem] border-b-2 border-dashed border-navy/35 md:rounded-l-[0.9rem] md:rounded-tr-none md:border-b-0 md:border-r-2">
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="group block" tabIndex={-1} aria-hidden="true">
                      <div className="relative aspect-[16/9] md:h-full md:min-h-[290px]">
                        <Image src={t.image} alt="" fill sizes="(max-width: 767px) calc(100vw - 36px), 620px" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
                      </div>
                    </a>
                    <span className="pointer-events-none absolute left-3 top-3 rounded-md border-2 border-navy bg-oranyer px-2.5 py-1 font-display text-xs font-bold uppercase text-navy sm:left-4 sm:top-4" aria-hidden="true">{t.emoji} {t.name}</span>
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
                      <div className="flex gap-2">
                        <a href={t.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-navy px-4 font-display text-xs font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer-ink">
                          Coba demo<span className="sr-only"> {t.merek} (tab baru)</span> <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                        <a href={wa(`Halo PintuWeb, saya tertarik aplikasi reservasi ${t.name.toLowerCase()} seperti ${t.merek}. Boleh minta info?`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-lg border-2 border-navy px-4 font-display text-xs font-bold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-kremr">
                          Pesan<span className="sr-only"> sistem seperti {t.merek} lewat WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Fasilitas terminal */}
        <section id="fasilitas" aria-labelledby="judul-fasilitas" className="scroll-mt-[62px] border-t-2 border-navy bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Fasilitas Terminal</p>
              <h2 id="judul-fasilitas" className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Semua penerbangan <span className="text-oranyer-ink">full service</span></h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-mutedr sm:mx-auto sm:mt-4">Apapun paradigma yang kamu pilih, fitur intinya sama lengkap.</p>
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
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Alur Boarding</p>
              <h2 id="judul-boarding" className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Empat gerbang menuju <span className="text-oranyer-ink">lepas landas</span></h2>
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
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-oranyer-ink">Pusat Informasi</p>
              <h2 id="judul-info" className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Sebelum <span className="text-oranyer-ink">take-off</span></h2>
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
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">Bisnismu berikutnya yang dipanggil</h2>
            <p className="mt-4 text-sm text-kremr/80">Sistem reservasi untuk usahamu — mulai dari salah satu paradigma ini.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-oranyer px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-navy transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={16} aria-hidden="true" /> Chat WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="board border-t border-kremr/10 px-4 pb-6 pt-10 text-kremr/75 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold uppercase tracking-wide text-kremr"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">Lima paradigma booking untuk restoran, hotel, klinik, futsal, dan bioskop.</p>
          </div>
          <nav aria-labelledby="kaki-terminal" className="text-sm">
            <p id="kaki-terminal" className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-oranyer">Terminal</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#tiket" className="inline-block py-1 transition hover:text-kremr">Koleksi Tiket</a></li>
              <li><a href="#fasilitas" className="inline-block py-1 transition hover:text-kremr">Fasilitas</a></li>
              <li><a href="#boarding" className="inline-block py-1 transition hover:text-kremr">Alur Boarding</a></li>
              <li><a href="#info" className="inline-block py-1 transition hover:text-kremr">Pusat Informasi</a></li>
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
          <p className="mt-6 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-kremr/70">Terminal lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-kremr/25 underline-offset-4 transition hover:text-kremr hover:decoration-oranyer">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-kremr/10 pt-5 text-[11px] text-kremr/70 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Website Reservasi — no show, no cry.
        </p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
