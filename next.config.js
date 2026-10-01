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
      // 1. Root and legacy home route
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // 2. Sections/pages flagged in Search Console
      // (Change '/#section' to dedicated routes like '/services' if you create standalone pages for them)
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
      // 3. Privacy Policy (redirect to your active route, e.g., '/privacy' or '/')
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      // 4. Legacy site-builder / Wix API queries
      {
        source: "/_api/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;