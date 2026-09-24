import Link from "next/link"
import {
  Globe,
  Code2,
  Smartphone,
  Building2,
  LayoutDashboard,
  Palette,
  Zap,
  Shield,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

import { services } from "@/data/site"

export const metadata = {
  title: "Software Development Services",
  description:
    "Explore Aptechnosys software development services including web development, custom software, mobile apps, enterprise applications, dashboards, APIs, UI/UX design, and ongoing support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software Development Services",
    description:
      "Web, mobile, custom software, APIs, dashboards, UI/UX, enterprise applications, and ongoing support.",
    url: "/services",
    siteName: "Aptechnosys",
    type: "website",
  },
}

const iconMap = {
  Globe,
  Code2,
  Smartphone,
  Building2,
  LayoutDashboard,
  Palette,
  Zap,
  Shield,
}

const accentMap = {
  blue: {
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "hover:border-blue-500/30",
    text: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },

  violet: {
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "hover:border-violet-500/30",
    text: "text-violet-500",
    iconBg: "bg-violet-500/10",
  },

  fuchsia: {
    gradient: "from-fuchsia-500/10 to-pink-500/10",
    border: "hover:border-fuchsia-500/30",
    text: "text-fuchsia-500",
    iconBg: "bg-fuchsia-500/10",
  },

  cyan: {
    gradient: "from-cyan-500/10 to-teal-500/10",
    border: "hover:border-cyan-500/30",
    text: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
  },

  orange: {
    gradient: "from-orange-500/10 to-red-500/10",
    border: "hover:border-orange-500/30",
    text: "text-orange-500",
    iconBg: "bg-orange-500/10",
  },

  pink: {
    gradient: "from-pink-500/10 to-rose-500/10",
    border: "hover:border-pink-500/30",
    text: "text-pink-500",
    iconBg: "bg-pink-500/10",
  },

  yellow: {
    gradient: "from-yellow-500/10 to-amber-500/10",
    border: "hover:border-yellow-500/30",
    text: "text-yellow-500",
    iconBg: "bg-yellow-500/10",
  },

  emerald: {
    gradient: "from-emerald-500/10 to-green-500/10",
    border: "hover:border-emerald-500/30",
    text: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
}

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, users, goals, requirements, and technical needs.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the project scope, architecture, technology stack, milestones, and delivery approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our development process focuses on clean implementation, testing, integration, and continuous feedback.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy the product, verify the production environment, and help you move forward with ongoing improvements.",
  },
]

const benefits = [
  "Business-focused development",
  "Modern and maintainable technology",
  "Responsive web and mobile experiences",
  "Scalable application architecture",
  "API and third-party integrations",
  "Post-launch technical support",
]

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors duration-300">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-500/10 blur-3xl rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-500">
              Our Services
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Software solutions built around
              <span className="text-gradient block">
                your business needs.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
              From websites and mobile applications to custom business
              software, APIs, dashboards, and ongoing support, we build
              digital products designed around real requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  bg-blue-600
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-blue-600/20
                  hover:bg-blue-500
                  transition-all
                "
              >
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  border
                  border-zinc-900/10
                  dark:border-white/10
                  text-zinc-900
                  dark:text-white
                  font-semibold
                  hover:bg-zinc-100
                  dark:hover:bg-white/5
                  transition-all
                "
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Globe
              const styles =
                accentMap[service.accent] || accentMap.blue

              const slug =
                service.slug ||
                service.title
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")

              return (
                <Link
                  key={service.title}
                  href={`/services/${slug}`}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    min-h-[300px]
                    rounded-2xl
                    border
                    border-zinc-900/[0.07]
                    dark:border-white/[0.07]
                    bg-zinc-50
                    dark:bg-white/[0.02]
                    p-6
                    overflow-hidden
                    ${styles.border}
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    dark:hover:shadow-black/20
                  `}
                >
                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-br
                      ${styles.gradient}
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                    `}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className={`
                        w-11
                        h-11
                        rounded-xl
                        ${styles.iconBg}
                        flex
                        items-center
                        justify-center
                        mb-6
                      `}
                    >
                      <Icon
                        className={`w-5 h-5 ${styles.text}`}
                      />
                    </div>

                    <h2 className="text-lg font-semibold">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>

                    <div
                      className={`
                        mt-auto
                        pt-7
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        ${styles.text}
                      `}
                    >
                      Explore service
                      <ArrowUpRight
                        className="
                          w-4
                          h-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WORK WITH US
      ====================================================== */}
      <section className="py-24 bg-zinc-50 dark:bg-white/[0.02]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-500">
                Why Aptechnosys
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                Technology that supports
                <span className="text-gradient block">
                  real business goals.
                </span>
              </h2>

              <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                We focus on understanding the problem first, then selecting
                the right technologies and architecture to build a practical
                solution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="
                    flex
                    items-start
                    gap-3
                    p-4
                    rounded-xl
                    border
                    border-zinc-900/[0.06]
                    dark:border-white/[0.06]
                    bg-white
                    dark:bg-white/[0.02]
                  "
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />

                  <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-500">
              Our Process
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              From idea to
              <span className="text-gradient">
                {" "}
                production.
              </span>
            </h2>

            <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              A practical development process focused on clarity,
              communication, quality, and reliable delivery.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="
                  relative
                  rounded-2xl
                  border
                  border-zinc-900/[0.07]
                  dark:border-white/[0.07]
                  p-6
                  bg-white
                  dark:bg-white/[0.02]
                "
              >
                <span className="text-sm font-bold text-violet-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="pb-24">
        <div className="container-custom">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-zinc-900/[0.07]
              dark:border-white/[0.08]
              bg-zinc-950
              px-8
              py-14
              md:px-12
              md:py-16
            "
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400">
                Let's Build
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
                Have a project in mind?
              </h2>

              <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
                Tell us what you're building, what problem you're solving,
                and what you need. We'll help you shape the right technical
                solution.
              </p>

              <Link
                href="/#contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  bg-white
                  text-zinc-900
                  font-semibold
                  hover:bg-zinc-100
                  transition-all
                "
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}