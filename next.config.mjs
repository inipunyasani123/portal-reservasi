/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/website-reservasi: PintuWeb meneruskan path /website-reservasi
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/website-reservasi',
  // Gambar statis + varian siap pakai (lihat app/gambar-loader.js): tidak memakai kuota Image Optimization Vercel.
  images: { loader: 'custom', loaderFile: './app/gambar-loader.js', deviceSizes: [320, 480, 640, 800, 960, 1280, 1600], imageSizes: [160, 240] },
  async redirects() {
    // Alamat lama portal-reservasi.pintuweb.id di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/website-reservasi', basePath: false, permanent: true },
      { source: '/:lama((?!website-reservasi(?:/|$)).+)', destination: 'https://www.pintuweb.id/website-reservasi', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
