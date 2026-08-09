"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  GraduationCap,
  BookOpen,
  Fingerprint,
  Users,
  Linkedin,
} from "lucide-react";

const socialLinks = [
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=YOUR_ID", // TODO: replace with your real Scholar URL
    icon: BookOpen,
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0002-7574-391X",
    icon: Fingerprint,
  },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Akash-Marsalin",
    icon: Users,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-marsalin-90bbb9227/",
    icon: Linkedin,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-800">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#03395d] via-[#0b4c70] to-[#377697] text-white">

        {/* Decorative background */}
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#6fd2d8]/10 blur-3xl sm:-right-32 sm:-top-32 sm:h-80 sm:w-80" />
        <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-[#5df8d9]/10 blur-3xl sm:-bottom-32 sm:h-72 sm:w-72" />

        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">

          <div className="grid gap-10 md:grid-cols-[1.35fr_0.85fr] md:items-center md:gap-14">

            {/* =================================================
                HERO TEXT
            ================================================== */}
            <div>

              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#bcecef] backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.16em]">
                <GraduationCap
                  size={14}
                  className="shrink-0 sm:h-[15px] sm:w-[15px]"
                />
                <span>Ph.D. Research Scholar · Nanomaterials</span>
              </div>

              <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
                Akash Marsalin
              </h1>

              <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9] sm:mb-7 sm:w-20" />

              <p className="mb-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl sm:leading-relaxed md:mb-8 md:text-2xl">
                Developing multifunctional magnetic mesocrystals for
                cancer theranostics and next-generation biomedical
                nanotechnology.
              </p>

              {/* <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 md:mb-10">
                Ph.D. Research Scholar, Department of Physics and
                Nanotechnology, SRM Institute of Science and Technology
                (SRMIST) — Key Laboratory of Emergent Materials (KLEM),
                under the guidance of Dr. Rajaboopathi Mani.
              </p> */}

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

                <Link
                  href="/research"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5df8d9] px-6 py-3 font-semibold text-[#03395d] shadow-lg shadow-black/10 transition hover:bg-[#6fd2d8]"
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
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:border-[#6fd2d8] hover:bg-white/15"
                >
                  <Download size={17} />
                  Download CV
                </a>

              </div>

              {/* =================================================
                  RESEARCH PROFILES
              ================================================== */}
              <div className="mt-8 sm:mt-10">

                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#bcecef] sm:text-xs sm:tracking-[0.18em]">
                  Research Profiles
                </p>

                <div className="flex flex-wrap items-center gap-3">

                  {socialLinks.map(({ name, href, icon: Icon }) => (

                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#6fd2d8] hover:bg-white/20"
                    >
                      <Icon
                        size={18}
                        className="transition group-hover:text-[#6fd2d8]"
                      />
                    </a>

                  ))}

                </div>

              </div>

            </div>


{/* =================================================
    HERO PHOTO
================================================== */}
<div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] md:mx-0">

  {/* Soft ambient glow */}
  <div className="absolute -inset-8 rounded-[2rem] bg-[#5df8d9]/10 blur-3xl" />

  {/* Single clean frame */}
  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm">

    <div className="relative aspect-[3/4] w-full">

      <Image
        src="/profile.png"
        alt="Akash Marsalin"
        fill
        priority
        sizes="(max-width: 639px) 320px, (max-width: 767px) 360px, 400px"
        className="object-cover object-top"
      />

      {/* Gentle bottom gradient for badge legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#03395d]/70 via-[#03395d]/10 to-transparent" />

    </div>

    {/* Caption sits inside the frame, not overlapping the edge awkwardly */}
    <div className="absolute inset-x-0 bottom-0 px-5 py-4">
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#6fd2d8]">
        Research Scholar
      </p>
      <p className="mt-0.5 text-sm font-semibold text-white">
        Nanomaterials &amp; Theranostics
      </p>
    </div>

  </div>

  {/* One restrained accent — top-right only */}
  {/* <div className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5df8d9] shadow-lg shadow-[#5df8d9]/25 sm:h-12 sm:w-12">
    <div className="h-3 w-3 rounded-full bg-[#03395d]" />
  </div> */}

</div>

          </div>
        </div>
      </section>


      {/* =====================================================
          QUICK STATS
      ====================================================== */}
      <section className="relative z-10 -mt-8 px-5 sm:-mt-10 sm:px-6">

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">

          <StatCard number="3+" label="Years in Research" />
          <StatCard number="2+" label="Publications" />
          <StatCard number="7+" label="Conferences" />
          <StatCard number="8+" label="Citations" />

        </div>

      </section>


      {/* =====================================================
          RESEARCH FOCUS
      ====================================================== */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 md:py-24">

        <div className="absolute -right-24 top-0 h-56 w-56 rounded-full bg-[#6fd2d8]/10 blur-3xl sm:-right-0 sm:h-72 sm:w-72" />

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-10 max-w-3xl sm:mb-12">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#377697] sm:text-sm sm:tracking-[0.18em]">
              Research Focus
            </p>

            <div className="mb-4 h-1 w-10 rounded-full bg-[#6fd2d8] sm:mb-5 sm:w-12" />

            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#03395d] sm:text-3xl md:mb-5 md:text-4xl">
              Multifunctional nanomaterials for cancer theranostics
            </h2>

            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              My doctoral research focuses on engineering Fe₃O₄-based
              magnetic mesocrystals with integrated therapeutic and
              diagnostic functions for biomedical applications.
            </p>

          </div>


          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">

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
      {/* <section className="border-y border-slate-200 bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 md:py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">

            <div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#377697] sm:text-sm sm:tracking-[0.18em]">
                Publications
              </p>

              <div className="mb-4 h-1 w-10 rounded-full bg-[#6fd2d8] sm:w-12" />

              <h2 className="text-2xl font-bold tracking-tight text-[#03395d] sm:text-3xl md:text-4xl">
                Selected work
              </h2>

            </div>

            <Link
              href="/publications"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#377697]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#03395d] transition hover:border-[#377697] hover:bg-[#03395d] hover:text-white"
            >
              View all publications

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>


          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">

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
      </section> */}


      {/* =====================================================
          ABOUT ME
      ====================================================== */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 md:py-24">

        <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-[#5df8d9]/10 blur-3xl sm:-left-32 sm:h-72 sm:w-72" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.75fr_1.5fr] md:items-start">

            <div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#377697] sm:text-sm sm:tracking-[0.18em]">
                About Me
              </p>

              <div className="mb-4 h-1 w-10 rounded-full bg-[#6fd2d8] sm:mb-5 sm:w-12" />

              <h2 className="text-2xl font-bold tracking-tight text-[#03395d] sm:text-3xl md:text-4xl">
                Beyond the laboratory.
              </h2>

            </div>


            <div className="max-w-3xl">

              <p className="mb-5 border-l-2 border-[#6fd2d8] pl-4 text-base leading-7 text-slate-600 sm:mb-6 sm:pl-6 sm:text-lg sm:leading-8">
                My journey in research began with magnetic nanomaterials
                during my master's studies in Physics, which led me
                toward biomedical nanotechnology and my current doctoral
                research.
              </p>

              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Outside research, I enjoy badminton and photography, with
                several years of experience in sports, media production,
                and team leadership. These experiences continue to shape
                my creativity, discipline, and approach to collaboration.
              </p>

            </div>

          </div>

        </div>
      </section>

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
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg sm:p-6">

      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#377697] to-[#5df8d9] transition-all duration-300 group-hover:w-full" />

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#03395d]/5 text-[#377697] sm:mb-5">
        <span className="h-2 w-2 rounded-full bg-[#6fd2d8]" />
      </div>

      <h3 className="mb-2 text-base font-bold text-[#03395d] sm:mb-3 sm:text-lg">
        {title}
      </h3>

      <p className="text-sm leading-6 text-slate-600 sm:leading-7">
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
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg sm:p-7"
    >

      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#377697] to-[#5df8d9]" />

      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm sm:mb-4 sm:gap-3">

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

      <h3 className="mb-3 text-lg font-bold leading-snug text-[#03395d] transition group-hover:text-[#377697] sm:text-xl">
        {title}
      </h3>

      <p className="mb-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
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
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-6">

      <div className="mb-1 text-2xl font-bold tracking-tight text-[#03395d] md:text-3xl">
        {number}
      </div>

      <div className="text-sm leading-6 text-slate-600">
        {label}
      </div>

    </div>
  );
}