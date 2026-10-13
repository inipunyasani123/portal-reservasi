/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/website-reservasi: PintuWeb meneruskan path /website-reservasi
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/website-reservasi',
  async redirects() {
    // Alamat lama portal-reservasi-nu.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/website-reservasi', basePath: false, permanent: true },
      { source: '/:lama((?!website-reservasi(?:/|$)).+)', destination: 'https://www.pintuweb.id/website-reservasi', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
