/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
    },
    // Habilita el acceso a la carpeta "app" para personalizar la estructura de tu aplicación
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
        pathname: "/weather/64x64/**",
      },
    ],
  },
};

module.exports = nextConfig;
