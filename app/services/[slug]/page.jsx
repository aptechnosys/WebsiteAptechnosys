import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
} from "lucide-react"

import { serviceDetails } from "@/data/services"
import { services } from "@/data/site"

const accentMap = {
  blue: {
    text: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    gradient: "from-blue-500/15 to-cyan-500/10",
  },

  violet: {
    text: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    gradient: "from-violet-500/15 to-purple-500/10",
  },

  fuchsia: {
    text: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
    gradient: "from-fuchsia-500/15 to-pink-500/10",
  },

  cyan: {
    text: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/15 to-teal-500/10",
  },

  orange: {
    text: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    gradient: "from-orange-500/15 to-red-500/10",
  },

  pink: {
    text: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    gradient: "from-pink-500/15 to-rose-500/10",
  },

  yellow: {
    text: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    gradient: "from-yellow-500/15 to-amber-500/10",
  },

  emerald: {
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    gradient: "from-emerald-500/15 to-green-500/10",
  },
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    return {
      title: "Service Not Found | Aptechnosys",
    }
  }

  return {
    title: `${service.title} Services | Aptechnosys`,
    description:
      service.heroDescription || service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} Services | Aptechnosys`,
      description:
        service.heroDescription || service.description,
      url: `/services/${slug}`,
      siteName: "Aptechnosys",
      type: "website",
    },
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params

  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }

  const serviceInfo = services.find(
    (item) => item.slug === slug
  )

  const accent =
    accentMap[serviceInfo?.accent] || accentMap.blue

  const relatedServices = services
    .filter((item) => item.slug !== slug)
    .slice(0, 4)

  return (
    <main className="bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors duration-300">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className={`
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[350px]
            rounded-full
            blur-3xl
            bg-gradient-to-br
            ${accent.gradient}
            opacity-70
            pointer-events-none
          `}
        />

        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-zinc-500
              dark:text-zinc-400
              hover:text-zinc-900
              dark:hover:text-white
              transition-colors
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="mt-10 max-w-4xl">
            <span
              className={`
                inline-flex
                px-3
                py-1.5
                rounded-full
                border
                ${accent.border}
                ${accent.bg}
                ${accent.text}
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
              `}
            >
              {service.shortTitle || service.title}
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {service.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              {service.heroDescription ||
                service.description}
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
                  hover:bg-blue-500
                  transition-all
                  shadow-lg
                  shadow-blue-600/20
                "
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  border
                  border-zinc-900/[0.08]
                  dark:border-white/[0.08]
                  text-zinc-900
                  dark:text-white
                  font-semibold
                  hover:bg-zinc-100
                  dark:hover:bg-white/[0.05]
                  transition-all
                "
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES + USE CASES
      ====================================================== */}

      <section className="pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Capabilities */}

            <div
              className="
                rounded-3xl
                border
                border-zinc-900/[0.07]
                dark:border-white/[0.07]
                bg-zinc-50
                dark:bg-white/[0.02]
                p-7
                md:p-9
              "
            >
              <span
                className={`
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  ${accent.text}
                `}
              >
                What We Provide
              </span>

              <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                Built around your requirements
              </h2>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We combine practical development experience with
                modern technologies to build solutions around your
                business goals and workflows.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {(service.capabilities || []).map(
                  (item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        p-4
                        rounded-xl
                        bg-white
                        dark:bg-white/[0.03]
                        border
                        border-zinc-900/[0.05]
                        dark:border-white/[0.05]
                      "
                    >
                      <CheckCircle2
                        className={`
                          w-5
                          h-5
                          ${accent.text}
                          shrink-0
                          mt-0.5
                        `}
                      />

                      <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Use Cases */}

            <div
              className={`
                rounded-3xl
                border
                ${accent.border}
                bg-gradient-to-br
                ${accent.gradient}
                p-7
                md:p-9
              `}
            >
              <div
                className={`
                  w-12
                  h-12
                  rounded-2xl
                  ${accent.bg}
                  flex
                  items-center
                  justify-center
                `}
              >
                <Layers3
                  className={`w-6 h-6 ${accent.text}`}
                />
              </div>

              <h2 className="mt-6 text-2xl md:text-3xl font-bold">
                Where this service fits
              </h2>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our solutions can support different digital products,
                operational workflows, and business requirements.
              </p>

              <div className="mt-7 space-y-4">
                {(service.useCases || []).map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`
                          mt-2
                          w-1.5
                          h-1.5
                          rounded-full
                          shrink-0
                          ${accent.text}
                        `}
                        style={{
                          backgroundColor:
                            "currentColor",
                        }}
                      />

                      <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <section className="py-24 bg-zinc-50 dark:bg-white/[0.02]">
        <div className="container-custom">
          <span
            className={`
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              ${accent.text}
            `}
          >
            Technology
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Technologies we work with
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We choose technologies according to project requirements,
            performance needs, integrations, scalability, and long-term
            maintainability.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {(service.technologies || []).map(
              (technology) => (
                <span
                  key={technology}
                  className="
                    px-4
                    py-2.5
                    rounded-xl
                    border
                    border-zinc-900/[0.07]
                    dark:border-white/[0.08]
                    bg-white
                    dark:bg-white/[0.03]
                    text-sm
                    font-medium
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SIMPLE PROCESS
      ====================================================== */}

      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span
              className={`
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                ${accent.text}
              `}
            >
              Our Process
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              From idea to production
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              A straightforward process keeps requirements,
              development, testing, and delivery aligned.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "We understand the business problem and project requirements.",
              },
              {
                number: "02",
                title: "Plan",
                description:
                  "We define the architecture, scope, technology, and milestones.",
              },
              {
                number: "03",
                title: "Build",
                description:
                  "We develop, integrate, test, and refine the solution.",
              },
              {
                number: "04",
                title: "Launch",
                description:
                  "We deploy the product and prepare it for production use.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-zinc-900/[0.07]
                  dark:border-white/[0.07]
                  bg-white
                  dark:bg-white/[0.02]
                  p-6
                "
              >
                <span
                  className={`
                    text-sm
                    font-bold
                    ${accent.text}
                  `}
                >
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      {service.faqs?.length > 0 && (
        <section className="py-24 bg-zinc-50 dark:bg-white/[0.02]">
          <div className="container-custom">
            <span
              className={`
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                ${accent.text}
              `}
            >
              FAQ
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Common questions
            </h2>

            <div className="mt-10 max-w-4xl space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="
                    group
                    rounded-2xl
                    border
                    border-zinc-900/[0.07]
                    dark:border-white/[0.07]
                    bg-white
                    dark:bg-white/[0.02]
                    p-6
                  "
                >
                  <summary
                    className="
                      list-none
                      cursor-pointer
                      flex
                      items-center
                      justify-between
                      gap-6
                      font-semibold
                    "
                  >
                    <span>{faq.question}</span>

                    <span
                      className="
                        shrink-0
                        text-2xl
                        text-zinc-400
                        transition-transform
                        duration-200
                        group-open:rotate-45
                      "
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          RELATED SERVICES
      ====================================================== */}

      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <span
                className={`
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  ${accent.text}
                `}
              >
                More Services
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                Explore our other services
              </h2>
            </div>

            <Link
              href="/services"
              className={`
                inline-flex
                items-center
                gap-2
                font-semibold
                text-sm
                ${accent.text}
              `}
            >
              View all services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="
                  group
                  flex
                  flex-col
                  h-full
                  rounded-2xl
                  border
                  border-zinc-900/[0.07]
                  dark:border-white/[0.07]
                  bg-white
                  dark:bg-white/[0.02]
                  p-5
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  transition-all
                  duration-300
                "
              >
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>

                <span
                  className="
                    mt-auto
                    pt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-blue-500
                  "
                >
                  Explore
                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </span>
              </Link>
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
              rounded-3xl
              bg-zinc-950
              border
              border-white/[0.08]
              px-8
              py-14
              md:px-12
              md:py-16
              overflow-hidden
              relative
            "
          >
            <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                Start Your Project
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                Ready to build something?
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Tell us what you're building and what you need.
                We'll help you define the right technical approach.
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
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}