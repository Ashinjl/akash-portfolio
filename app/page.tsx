"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#03395d] via-[#0b4c70] to-[#377697] text-white">

        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-14 md:grid-cols-[1.35fr_0.85fr] md:items-center">

            {/* Text */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#bcecef] backdrop-blur-sm">
                <GraduationCap size={15} />
                Ph.D. Research Scholar · Nanomaterials
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                Akash Marsalin
              </h1>

              <div className="mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9]" />

              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-100 md:text-2xl">
                Developing multifunctional magnetic mesocrystals for
                cancer theranostics and next-generation biomedical
                nanotechnology.
              </p>

              <p className="mb-10 max-w-2xl text-base leading-8 text-slate-200">
                Ph.D. Research Scholar, Department of Physics and
                Nanotechnology, SRM Institute of Science and Technology
                (SRMIST) — Key Laboratory of Emergent Materials (KLEM),
                under the guidance of Dr. Rajaboopathi Mani.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="/research"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#5df8d9] px-6 py-3 font-semibold text-[#03395d] shadow-lg shadow-black/10 transition hover:bg-[#6fd2d8]"
                >
                  Explore Research
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:border-[#6fd2d8] hover:bg-white/15"
                >
                  <Download size={17} />
                  Download CV
                </a>

              </div>

            </div>


            {/* Photo */}
            <div className="relative mx-auto w-full max-w-sm md:mx-0">

              <div className="absolute -inset-3 rounded-[2rem] border border-[#6fd2d8]/20" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">

                <Image
                  src="/profile.png"
                  alt="Akash Marsalin"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl border border-[#6fd2d8]/30 bg-[#03395d]/80 backdrop-blur-md" />

              <div className="absolute -right-3 -top-3 h-12 w-12 rounded-xl bg-[#5df8d9]" />

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          STATS STRIP
      ====================================================== */}
      {/* <section className="border-b border-gray-100 px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
          <StatCard number="4+" label="Years in nanomaterials research" />
          <StatCard number="2" label="Peer-reviewed publications" />
          <StatCard number="7" label="Conference presentations" />
          <StatCard number="KLEM" label="Lab affiliation, SRMIST" />
        </div>
      </section> */}


      {/* =====================================================
          RESEARCH FOCUS
      ====================================================== */}
      <section className="relative px-6 py-20 md:py-24">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-12 max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
              Research Focus
            </p>

            <div className="mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              Multifunctional nanomaterials for cancer theranostics
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              My doctoral research focuses on engineering Fe₃O₄-based
              magnetic mesocrystals with integrated therapeutic and
              diagnostic functions for biomedical applications.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <ResearchCard
              title="Magnetic Mesocrystals"
              desc="Controlled assembly and engineering of hierarchically structured magnetic nanomaterials."
            />

            <ResearchCard
              title="Magnetic Hyperthermia"
              desc="Magnetic nanomaterials for localized heat generation and cancer treatment."
            />

            <ResearchCard
              title="Drug Delivery"
              desc="Functional nanoplatforms for controlled and targeted therapeutic delivery."
            />

            <ResearchCard
              title="Bioimaging"
              desc="Fluorescent and magnetic nanomaterials for biomedical imaging and nanothermometry."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          SELECTED PUBLICATIONS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 md:py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
                Publications
              </p>

              <div className="mb-4 h-1 w-12 rounded-full bg-[#6fd2d8]" />

              <h2 className="text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
                Selected work
              </h2>

            </div>

            <Link
              href="/publications"
              className="group inline-flex items-center gap-2 rounded-full border border-[#377697]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#03395d] transition hover:border-[#377697] hover:bg-[#03395d] hover:text-white"
            >
              View all publications
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            <PublicationCard
              year="2025"
              journal="Journal Name"
              title="Title of your publication goes here"
              desc="Short one- to two-line summary of the paper's contribution and findings."
            />

            <PublicationCard
              year="2024"
              journal="Journal Name"
              title="Title of another publication"
              desc="Short one- to two-line summary of the paper's contribution and findings."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT ME
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-20 md:py-24">

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-[0.75fr_1.5fr] md:items-start">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
                About Me
              </p>

              <div className="mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

              <h2 className="text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
                Beyond the laboratory.
              </h2>

            </div>


            <div className="max-w-3xl">

              <p className="mb-6 border-l-2 border-[#6fd2d8] pl-6 text-lg leading-8 text-slate-600">
                My journey in research began with magnetic nanomaterials
                during my master's studies in Physics, which led me
                toward biomedical nanotechnology and my current doctoral
                research.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                Outside research, I enjoy badminton and photography, with
                several years of experience in sports, media production,
                and team leadership. These experiences continue to shape
                my creativity, discipline, and approach to collaboration.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT / FOOTER CTA
      ====================================================== */}
      {/* <section className="border-t border-gray-100 bg-gray-900 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Let's connect.
            </h2>
            <p className="mt-2 max-w-md text-gray-400">
              Open to collaborations, research discussions, and
              opportunities in biomedical nanotechnology.
            </p>
          </div> */}

      {/* Get in touch */}
      {/* <a href="mailto:your.email@srmist.edu.in" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100" > <Mail size={17} /> Get in touch </a>
        </div>
      </section> */}

    </main>
  );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function ResearchCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg">

      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#377697] to-[#5df8d9] transition-all duration-300 group-hover:w-full" />

      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#03395d]/5 text-[#377697]">
        <span className="h-2 w-2 rounded-full bg-[#6fd2d8]" />
      </div>

      <h3 className="mb-3 text-lg font-bold text-[#03395d]">
        {title}
      </h3>

      <p className="text-sm leading-7 text-slate-600">
        {desc}
      </p>

    </div>
  );
}


function PublicationCard({
  year,
  journal,
  title,
  desc,
}: {
  year: string;
  journal: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href="/publications"
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg"
    >

      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#377697] to-[#5df8d9]" />

      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">

        <span className="font-semibold text-[#377697]">
          {year}
        </span>

        <span className="text-slate-300">
          •
        </span>

        <span className="text-slate-500">
          {journal}
        </span>

      </div>

      <h3 className="mb-3 text-xl font-bold leading-snug text-[#03395d] transition group-hover:text-[#377697]">
        {title}
      </h3>

      <p className="mb-5 leading-7 text-slate-600">
        {desc}
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#377697]">

        View publication

        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />

      </span>

    </Link>
  );
}


function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
      <div className="mb-1 text-2xl font-bold tracking-tight text-[#03395d] md:text-3xl">
        {number}
      </div>

      <div className="text-sm leading-6 text-slate-600">
        {label}
      </div>
    </div>
  );
}

