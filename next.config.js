/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig