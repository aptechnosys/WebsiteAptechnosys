/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  compress: true,
  poweredByHeader: false,

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/_api/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig