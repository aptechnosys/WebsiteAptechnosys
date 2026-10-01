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
      // 1. Root / home
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // 2. Redirect /privacy to the real working /privacy-policy page
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      // 3. Homepage section anchors
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
      // 4. Old builder API cleanup
      {
        source: "/_api/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;