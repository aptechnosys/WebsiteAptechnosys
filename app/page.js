import Hero from "@/components/Hero"
import Trust from "@/components/Trust"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Process from "@/components/Process"
import TechStack from "@/components/TechStack"
import Results from "@/components/Results"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import ScrollToTop from "@/components/ScrollToTop"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"

export default function Home() {
  return (
    <div
      className="animate-fade-in"
      style={{ animationFillMode: "both" }}
    >
      <main>

        <Hero />

        {/* Idea → Product */}
        <section className="pt-24 pb-20 sm:pt-28 sm:pb-28">
          <div className="container-custom">

            <div className="text-center mb-10 sm:mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500 mb-4">
                From Idea to Product
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                From concept to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">
                  production
                </span>
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
                See how an initial idea transforms into a polished digital product.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage="/images/idea-sketch-wide.png"
              afterImage="/images/idea-final-wide.png"
            />

          </div>
        </section>

        <Trust />
        <Services />
        <Projects />
        <Process />
        <TechStack />
        <Results />
        <Testimonials />
        <FAQ />
        <Contact />

      </main>

      <ScrollToTop />
    </div>
  )
}