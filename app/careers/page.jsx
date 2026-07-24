"use client";

import { jobs } from "@/data/jobs";
import {
  Briefcase,
  MapPin,
  Clock3,
  Building2,
  Mail,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="section-padding bg-white dark:bg-[#09090b]">
      <div className="container-custom">
         {/* arrow button */}
         <div className="container-custom pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        {/* Hero */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="text-cyan-500 uppercase tracking-[0.25em] text-sm font-semibold">
            Careers
          </span>

          <h1 className="mt-4 text-5xl font-bold text-zinc-900 dark:text-white">
            Join <span className="text-gradient">APTechnosys</span>
          </h1>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Work with a passionate team building software, mobile apps,
            enterprise solutions and digital products for businesses worldwide.
          </p>
        </div>

        {/* Jobs */}

        <div className="space-y-8">

          {jobs.map((job) => (

            <div
              key={job.id}
              className="glass rounded-3xl border border-zinc-900/10 dark:border-white/10 p-8"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

                <div className="flex-1">

                  <div className="flex items-center gap-3 mb-4">

                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                      {job.title}
                    </h2>

                    <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                      {job.status}
                    </span>

                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    {job.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">

                    <div className="flex items-center gap-3">
                      <MapPin size={18} />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-3">
                      <Building2 size={18} />
                      {job.department}
                    </div>

                    <div className="flex items-center gap-3">
                      <Briefcase size={18} />
                      {job.employmentType}
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3 size={18} />
                      {job.experience}
                    </div>

                  </div>

                  <h3 className="font-semibold mb-4 text-zinc-900 dark:text-white">
                    Skills Required
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-8">

                    {job.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full border px-4 py-2 text-sm"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                  <h3 className="font-semibold mb-4 text-zinc-900 dark:text-white">
                    Responsibilities
                  </h3>

                  <div className="grid md:grid-cols-2 gap-3">

                    {job.responsibilities.map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          className="text-cyan-500 mt-1"
                          size={18}
                        />

                        <span>{item}</span>

                      </div>

                    ))}

                  </div>

                </div>

                <div className="lg:w-72">

                  <div className="glass rounded-2xl p-6 border">

                    <h3 className="font-bold text-lg mb-5">
                      Job Details
                    </h3>

                    <div className="space-y-4 text-sm">

                      <p>
                        <strong>Work Mode:</strong><br />
                        {job.workMode}
                      </p>

                      <p>
                        <strong>Openings:</strong><br />
                        {job.openings}
                      </p>

                      <p>
                        <strong>Salary:</strong><br />
                        {job.salary}
                      </p>

                    </div>

                    <a
                      href={`mailto:${job.applyEmail}?subject=Application for ${job.title}`}
                      className="mt-8 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white py-3 font-semibold transition"
                    >
                      <Mail size={18} />
                      Apply Now
                      <ArrowRight size={18} />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}