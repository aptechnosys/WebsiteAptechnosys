/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  compress: true,
  poweredByHeader: false,

  async redirects() {
    return [
      // 1. Root / home cleanup
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // 2. Redirect /privacy to the real /privacy-policy page
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      // 3. Old builder API cleanup
      {
        source: "/_api/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;