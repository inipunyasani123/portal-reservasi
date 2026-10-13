import './globals.css';
import { Barlow_Condensed, Space_Mono } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], variable: '--font-barlow', weight: ['600', '700', '800'] });
const spacemono = Space_Mono({ subsets: ['latin'], variable: '--font-spacemono', weight: ['400', '700'] });


const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalReservasi","description":"Koleksi 5 aplikasi booking","url":"https://www.pintuweb.id/website-reservasi","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://www.pintuweb.id"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"PintuWeb","item":"https://www.pintuweb.id"},{"@type":"ListItem","position":2,"name":"Website Reservasi","item":"https://www.pintuweb.id/website-reservasi"}]}};

export const metadata = {
  metadataBase: new URL("https://www.pintuweb.id/website-reservasi"),
  title: "PortalReservasi — Lima Cara Mengambil Antrian",
  description: "Lima aplikasi reservasi dengan paradigma berbeda: denah meja restoran, rentang tanggal hotel, slot praktik dokter, grid lapangan futsal, dan peta kursi bioskop.",
  applicationName: "PortalReservasi",
  keywords: ["template booking", "aplikasi reservasi", "sistem booking", "koleksi template reservasi"],
  authors: [{ name: "PortalReservasi" }],
  creator: "PortalReservasi",
  publisher: "PortalReservasi",
  alternates: { canonical: "https://www.pintuweb.id/website-reservasi" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.pintuweb.id/website-reservasi",
    siteName: "PortalReservasi",
    title: "PortalReservasi — Lima Cara Mengambil Antrian",
    description: "Lima aplikasi reservasi dengan paradigma berbeda: denah meja restoran, rentang tanggal hotel, slot praktik dokter, grid lapangan futsal, dan peta kursi bioskop.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalReservasi — Lima Cara Mengambil Antrian" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalReservasi — Lima Cara Mengambil Antrian",
    description: "Lima aplikasi reservasi dengan paradigma berbeda: denah meja restoran, rentang tanggal hotel, slot praktik dokter, grid lapangan futsal, dan peta kursi bioskop.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${barlow.variable} ${spacemono.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
