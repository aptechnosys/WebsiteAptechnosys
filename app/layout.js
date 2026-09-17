import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.aptechnosys.com"),

  title: {
    default: "Aptechnosys | Custom Software & Web Development Company",
    template: "%s | Aptechnosys",
  },

  description:
    "Aptechnosys builds custom web applications, enterprise software, mobile applications, business portals, dashboards, and digital solutions for startups, SMEs, and enterprises. 50+ projects delivered globally.",

  keywords: [
    "Aptechnosys",
    "software development company",
    "custom software development",
    "web development company",
    "web application development",
    "mobile app development",
    "Flutter development",
    "enterprise software development",
    "business portal development",
    "dashboard development",
    "Next.js development",
    "React development",
    "Node.js development",
    "UI UX design",
    "API development",
    "SEO services",
    "Mira Road software company",
    "Thane software development company",
    "Mumbai software development company",
  ],

  authors: [
    {
      name: "Aptechnosys",
      url: "https://www.aptechnosys.com",
    },
  ],

  creator: "Aptechnosys",
  publisher: "Aptechnosys",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.aptechnosys.com",
    siteName: "Aptechnosys",

    title: "Aptechnosys | Custom Software & Web Development Company",

    description:
      "Custom software, web applications, mobile apps, enterprise solutions, dashboards, and digital services by Aptechnosys.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aptechnosys - Custom Software & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Aptechnosys | Custom Software & Web Development",

    description:
      "Custom software, web applications, mobile apps, enterprise solutions, and digital products.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Structured Data
|--------------------------------------------------------------------------
*/

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",

      "@id": "https://www.aptechnosys.com/#organization",

      name: "Aptechnosys",

      url: "https://www.aptechnosys.com",

      description:
        "Custom software development and digital solutions company.",

      logo: {
        "@type": "ImageObject",
        url: "https://www.aptechnosys.com/logo.jpg",
      },

      sameAs: [
        "https://github.com/aptechnosys",
      ],

      /*
       * Keep foundingDate only if this has been
       * officially confirmed by the company.
       */
      // foundingDate: "2019",
    },

    {
      "@type": "WebSite",

      "@id": "https://www.aptechnosys.com/#website",

      url: "https://www.aptechnosys.com",

      name: "Aptechnosys",

      publisher: {
        "@id": "https://www.aptechnosys.com/#organization",
      },

      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Google Fonts */}

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <meta
          name="theme-color"
          content="#09090b"
        />
      </head>

      <body
        className="bg-white text-zinc-900 dark:bg-[#09090b] dark:text-white antialiased"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
        }}
        suppressHydrationWarning
      >
        <ThemeProvider>

          {/* Global Navigation */}
          <Navbar />

          {/* Page Content */}
          {children}

          {/* Global Footer */}
          <Footer />

          {/* Floating WhatsApp */}
          <FloatingWhatsapp />

        </ThemeProvider>
      </body>
    </html>
  );
}