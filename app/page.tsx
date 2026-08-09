"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, Linkedin, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.9fr] md:items-center">

            {/* Text */}
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-gray-500">
                <GraduationCap size={14} />
                Ph.D. Research Scholar · Nanomaterials
              </p>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Akash Marsalin
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
                Developing multifunctional magnetic mesocrystals for
                cancer theranostics and next-generation biomedical
                nanotechnology.
              </p>

              <p className="mb-10 max-w-xl text-base leading-8 text-gray-600">
                Ph.D. Research Scholar, Department of Physics and
                Nanotechnology, SRM Institute of Science and Technology
                (SRMIST) — Key Laboratory of Emergent Materials (KLEM),
                under the guidance of Dr. Rajaboopathi Mani.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                  Explore Research
                  <ArrowRight size={18} />
                </Link>

{/* Download CV */} <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-50" > <Download size={17} /> Download CV </a>
              </div>


            </div>

            {/* Photo */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm md:mx-0">
              <Image
                src="/profile.jpg"
                alt="Akash Marsalin"
                fill
                priority
                className="object-cover"
              />
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
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-gray-500">
              Research Focus
            </p>
            <h2 className="mb-5 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Multifunctional nanomaterials for cancer theranostics
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              My doctoral research focuses on engineering Fe₃O₄-based
              magnetic mesocrystals with integrated therapeutic and
              diagnostic functions for biomedical applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-gray-500">
                Publications
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                Selected work
              </h2>
            </div>

            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              View all publications
              <ArrowRight size={16} />
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
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.5fr] md:items-start">

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-gray-500">
                About Me
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                Beyond the laboratory.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="mb-5 text-lg leading-8 text-gray-600">
                My journey in research began with magnetic nanomaterials
                during my master's studies in Physics, which led me
                toward biomedical nanotechnology and my current doctoral
                research.
              </p>
              <p className="mb-6 text-lg leading-8 text-gray-600">
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

function ResearchCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-7 text-gray-600">{desc}</p>
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
      className="group rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <span>{year}</span>
        <span>•</span>
        <span>{journal}</span>
      </div>

      <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900 transition group-hover:text-gray-600">
        {title}
      </h3>

      <p className="mb-5 leading-7 text-gray-600">{desc}</p>

      <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900">
        View publication
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
      <div className="mb-1 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
        {number}
      </div>
      <div className="text-sm leading-6 text-gray-600">{label}</div>
    </div>
  );
}