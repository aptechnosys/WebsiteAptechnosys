"use client"

import { useState, useEffect } from "react"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About Us", href: "#tech" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "#faq" },
]

// Small SVG icon for the "View Work" button
const SparkleIcon = () => (
  <svg
    className="w-4 h-4 mr-2 text-zinc-500 dark:text-zinc-300"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l1.9 5.7L20 9.6l-6.1 1.9L12 17l-1.9-5.5L4 9.6l6.1-1.9L12 2z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)

    window.addEventListener("scroll", handler, { passive: true })

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [])

  return (
    <>
      <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4">
        <div className="mx-auto max-w-7xl">
          <div
            className={`rounded-[1.35rem] border shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-colors duration-300 ${
              scrolled
                ? "bg-white/95 border-zinc-900/[0.08] dark:bg-[#09090b]/95 dark:border-white/[0.08]"
                : "bg-white/80 border-zinc-900/[0.06] dark:bg-[#09090b]/80 dark:border-white/[0.06]"
            }`}
          >
            <nav className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-5 lg:px-6">
              
              {/* Logo */}
              <a href="/" className="flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt="ApTechnosys Logo"
                className="h-11 w-11 rounded-full object-contain"
              />

                <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                  AP<span className="text-blue-500">Technosys</span>
                </span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-900/5 dark:hover:bg-white/5 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-2">
                <ThemeToggle />
                <Button variant="ghost" asChild>
                  <a href="#projects">
                    <SparkleIcon />
                    View Work
                  </a>
                </Button>

                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a href="#contact">
                    Get in Touch
                    <ArrowRightIcon />
                  </a>
                </Button>
              </div>

              {/* Mobile Controls */}
              <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-900/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed left-3 right-3 top-20 z-40 rounded-2xl border border-zinc-900/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#09090b] p-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-900/5 dark:hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full" asChild>
              <a href="#projects" onClick={() => setMobileOpen(false)}>
                <SparkleIcon />
                View Work
              </a>
            </Button>

            <Button className="w-full bg-blue-600" asChild>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Get in Touch
                <ArrowRightIcon />
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
