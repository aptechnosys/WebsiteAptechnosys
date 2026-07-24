"use client"

import { Code2, Globe, Link2, Mail, ArrowUpRight, ExternalLink } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "Dashboard Development", href: "#services" },
    { label: "Enterprise Applications", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "API Development", href: "#services" },
  ],

  Company: [
    { label: "About Us", href: "#tech" },
    { label: "Our Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "/careers" },
  ],

  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#09090b] border-t border-zinc-900/[0.06] dark:border-white/[0.06] transition-colors duration-300">

      <div className="container-custom py-12 sm:py-16">
        <div className="relative glass rounded-2xl border border-zinc-900/[0.08] dark:border-white/[0.08] p-6 sm:p-8 md:p-12 overflow-hidden transition-transform duration-300 hover:-translate-y-1">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/5 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">

            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                Ready to start building?
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                Get a free consultation and project estimate within 24 hours.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 self-center md:self-auto flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-xl shadow-blue-500/30"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

          </div>
        </div>
      </div>

      <div className="container-custom pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">

          <div className="sm:col-span-2 lg:col-span-2 mt-[31px]">

            <a href="/" className="flex items-center gap-2.5 mb-5 justify-center sm:justify-start">

              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>

              <span className="text-zinc-900 dark:text-white font-semibold text-lg">
                Aptechnosys
              </span>

            </a>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6 mx-auto sm:mx-0 text-center sm:text-left">
              Premium software development for startups and businesses ready to compete at the highest level.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">

              {[
                { Icon: Globe, href: "#", label: "Website" },
                { Icon: Link2, href: "https://www.linkedin.com", label: "LinkedIn" },
                { Icon: ExternalLink, href: "https://github.com/aptechnosys", label: "GitHub" },
                { Icon: Mail, href: "mailto:support@aptechnosys.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-zinc-900/[0.08] dark:border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900/20 dark:hover:border-white/20 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}

            </div>

          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div
              key={category}
              className="text-center sm:text-left mt-0 sm:mt-[31px]"
            >

              <h4 className="text-zinc-900 dark:text-white text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h4>

              <ul className="space-y-3">

                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        <div className="border-t border-zinc-900/[0.06] dark:border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Aptechnosys. All rights reserved.
          </p>

          <p className="text-zinc-700 text-xs">
            Built with Next.js · Hosted on Vercel
          </p>

        </div>

      </div>

    </footer>
  )
}