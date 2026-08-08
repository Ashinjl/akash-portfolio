"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base font-medium tracking-wide text-gray-500 uppercase mb-5">
              Ph.D. Research Scholar · Nanomaterials Researcher
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Akash Marsalin
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-8">
              Researching multifunctional magnetic mesocrystals for
              cancer theranostics and next-generation biomedical
              nanotechnology.
            </p>

            <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
              I am a Ph.D. Research Scholar in the Department of Physics
              and Nanotechnology at SRM Institute of Science and Technology
              (SRMIST), working as a member of the Key Laboratory of
              Emergent Materials (KLEM).
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Explore My Research
                <ArrowRight size={18} />
              </Link>

              <a href="/resume.pdf" download className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-50 transition" >
              Download Resume
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH FOCUS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-3">
              Research Focus
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Nanomaterials for cancer theranostics
            </h2>

            <p className="text-gray-600 leading-relaxed">
              My doctoral research focuses on designing multifunctional
              magnetic mesocrystals that integrate therapeutic and diagnostic
              capabilities into a single nanoplatform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResearchCard
              title="Magnetic Mesocrystals"
              desc="Hierarchically assembled magnetic nanostructures for biomedical applications."
            />

            <ResearchCard
              title="Magnetic Hyperthermia"
              desc="Magnetic nanomaterials designed for localized heat generation in cancer treatment."
            />

            <ResearchCard
              title="Photothermal Therapy"
              desc="Nanoplatforms engineered to convert light into heat for cancer therapy."
            />

            <ResearchCard
              title="Bioimaging"
              desc="Rare-earth-doped magnetic nanomaterials for fluorescence imaging and multimodal applications."
            />
          </div>
        </div>
      </section>

      {/* RESEARCH OVERVIEW */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-3">
                Current Research
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                From materials science to precision medicine
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                My work explores Fe₃O₄-based magnetic mesocrystals and their
                potential to combine magnetic hyperthermia, photothermal
                therapy, targeted drug delivery, and fluorescence bioimaging.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                By tailoring crystal growth, morphology, rare-earth doping,
                and surface functionality, I aim to develop multifunctional
                nanomaterials that can support more effective and personalized
                cancer treatment.
              </p>

              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
              >
                View research areas
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard number="2023" label="Joined KLEM" />
              <StatCard number="2+" label="Journal Articles" />
              <StatCard number="2026" label="International Research Presentation" />
              <StatCard number="1" label="Best Oral Presentation Award" />
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-3">
                Selected Publications
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Research contributions
              </h2>

              <p className="text-gray-600">
                Selected research and review articles on mesocrystals,
                magnetic nanomaterials, and biomedical applications.
              </p>
            </div>

            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-gray-900 font-medium whitespace-nowrap"
            >
              View all publications
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PublicationCard
              year="2025"
              journal="Journal of Materials Chemistry B"
              title="Multifunctional Fe₃O₄ Mesocrystals for Cancer Therapy"
              desc="Integrating magnetic hyperthermia and targeted drug delivery."
            />

            <PublicationCard
              year="2025"
              journal="Journal of Solid State Chemistry"
              title="From Formation to Functionality: Insights into Mesocrystal Development and Applications"
              desc="A comprehensive review of mesocrystal formation, synthesis, characterization, and applications."
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-3">
              Academic Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Recent highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <HighlightCard
              title="International Presentation"
              desc="Presented research at Sorbonne University, Paris, France, in 2026."
            />

            <HighlightCard
              title="ANRF Travel Support"
              desc="Received ANRF International Travel Support to present research internationally."
            />

            <HighlightCard
              title="Best Oral Presentation"
              desc="Received the Best Oral Presentation Award at SMARTBIO-2025."
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-gray-900 font-medium"
            >
              View news and updates
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / PERSONAL */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-3">
            Beyond Research
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Science, creativity, and continuous learning
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Beyond the laboratory, I enjoy photography, badminton, travelling,
            anime, and exploring emerging technologies. My experiences in
            sports, photography, and media have strengthened my teamwork,
            creativity, leadership, and communication skills.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
          >
            Learn more about me
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-400 mb-3">
            Collaboration
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            Interested in research collaboration?
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            I am interested in interdisciplinary collaborations in
            nanomaterials, magnetic materials, biomedical nanotechnology,
            cancer theranostics, and related areas.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* --------------------------------
   REUSABLE COMPONENTS
--------------------------------- */

function ResearchCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
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
      className="group border border-gray-200 rounded-2xl p-7 hover:shadow-md transition bg-white"
    >
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <span>{year}</span>
        <span>•</span>
        <span>{journal}</span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-5">
        {desc}
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900">
        View publication
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

function HighlightCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-7 bg-white">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
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
    <div className="border border-gray-200 rounded-2xl p-6 bg-white text-center">
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {number}
      </div>

      <div className="text-sm text-gray-600">
        {label}
      </div>
    </div>
  );
}
