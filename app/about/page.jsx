import Link from "next/link"
import Image from "next/image"
import { aboutData } from "../../data/about"

export const metadata = {
  title: "About APTechnosys",
  description:
    "Learn about APTechnosys, our journey, founder, team and approach to building software, mobile applications, enterprise solutions and digital products.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  const { company, founder, journey } = aboutData

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#08080a] dark:text-white">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-16">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">
              About Us
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Building Technology
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                That Moves Businesses Forward
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
              {company.tagline}
            </p>

          </div>
        </div>
      </section>


      {/* =========================
          COMPANY OVERVIEW
      ========================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Content */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Technology built around your business
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              {company.overview}
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              Our approach focuses on understanding business requirements and
              bringing together the right combination of technology, design,
              development and support.
            </p>

          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-4xl font-bold text-cyan-500 dark:text-cyan-400">
                50+
              </div>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Projects successfully executed
              </p>
            </div>


            <div className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-4xl font-bold text-purple-500 dark:text-purple-400">
                Global
              </div>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Clients and projects worldwide
              </p>
            </div>


            <div className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-4xl font-bold text-blue-500 dark:text-blue-400">
                2 Week
              </div>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Sprint development model
              </p>
            </div>


            <div className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-4xl font-bold text-pink-500 dark:text-pink-400">
                360°
              </div>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Digital technology solutions
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          JOURNEY
      ========================== */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">

        <div className="pointer-events-none absolute right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">

          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
              Our Journey
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              From ideas to digital solutions
            </h2>

            <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
              Our journey has been shaped by technology, collaboration and a
              focus on solving real business requirements.
            </p>

          </div>


          <div className="relative mt-16">

            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 hidden h-[calc(100%-20px)] w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:block" />

            <div className="space-y-10">

              {journey.map((item) => (
                <div
                  key={item.number}
                  className="relative grid gap-6 md:grid-cols-[40px_160px_1fr] md:items-start"
                >

                  {/* Number */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-white text-sm font-bold text-cyan-600 dark:bg-[#08080a] dark:text-cyan-400">
                    {item.number}
                  </div>


                  {/* Title */}
                  <h3 className="pt-2 text-xl font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>


                  {/* Description */}
                  <div className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                    <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* =========================
          DELIVERY MODEL
      ========================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-zinc-900/10 bg-gradient-to-br from-zinc-50 to-white p-8 dark:border-white/10 dark:from-white/[0.06] dark:to-white/[0.02] sm:p-12">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                  How We Work
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  A structured approach to development
                </h2>

              </div>

              <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                {company.deliveryModel}
              </p>

            </div>


            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

              {[
                "Discovery",
                "Planning",
                "Design",
                "Development",
                "Testing & Support",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-zinc-900/10 bg-zinc-100 p-5 dark:border-white/10 dark:bg-black/20"
                >

                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-white">
                    {step}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FOUNDER
      ========================== */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Meet Our Founder
            </h2>

          </div>


          <div className="grid overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-2">

            {/* Founder image */}
            <div className="relative min-h-[420px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">

              <Image
                src={founder.image}
                alt={`${founder.name} - ${founder.role} at APTechnosys`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            </div>


            {/* Founder content */}
            <div className="flex flex-col justify-center p-8 sm:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                {founder.role}
              </p>

              <h3 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
                {founder.name}
              </h3>

              <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
                {founder.description}
              </p>

              <div className="mt-8 h-px w-full bg-zinc-900/10 dark:bg-white/10" />

              <p className="mt-6 text-sm leading-7 text-zinc-500">
                Leading with a focus on technology, collaboration and
                delivering meaningful digital solutions for businesses.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          ORGANISATION
      ========================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-zinc-900/10 bg-zinc-50 p-8 dark:border-white/10 dark:bg-white/[0.03] sm:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
              Our Organisation
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Collaboration across every project
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
              APTechnosys operates through a collaborative structure where
              different functions work together according to project and
              client requirements.
            </p>


            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Project Management",
                "Business Development",
                "Marketing",
                "Developers",
                "Designers",
                "Technical Support",
              ].map((team) => (
                <span
                  key={team}
                  className="rounded-full border border-zinc-900/10 bg-white px-5 py-3 text-sm text-zinc-700 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-300"
                >
                  {team}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="px-6 pb-28 pt-20 sm:px-10 lg:px-16">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 text-center sm:p-14">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              Let's Build Together
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Have an idea or a business challenge?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
              Let's discuss how APTechnosys can help turn your requirements
              into a practical digital solution.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Start a Conversation →
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}