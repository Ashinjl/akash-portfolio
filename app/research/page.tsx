import Link from "next/link";
import {
  ArrowRight,
  Atom,
  FlaskConical,
  Microscope,
  Pill,
  Radiation,
  Sparkles,
  Thermometer,
} from "lucide-react";

export const metadata = {
  title: "Research | Akash Marsalin",
  description:
    "Research on multifunctional magnetic mesocrystals, cancer theranostics, magnetic hyperthermia, photothermal therapy, drug delivery, and biomedical nanotechnology.",
};

const researchAreas = [
  {
    title: "Magnetic Mesocrystals",
    icon: Atom,
    description:
      "Design and synthesis of hierarchically assembled magnetic mesocrystals through non-classical crystallization for biomedical applications.",
  },
  {
    title: "Magnetic Hyperthermia",
    icon: Thermometer,
    description:
      "Development of magnetic nanomaterials capable of generating localized heat under alternating magnetic fields for cancer treatment.",
  },
  {
    title: "Photothermal Therapy",
    icon: Radiation,
    description:
      "Engineering multifunctional nanoplatforms that efficiently convert light into heat for minimally invasive cancer therapy.",
  },
  {
    title: "Cancer Theranostics",
    icon: Microscope,
    description:
      "Combining therapeutic and diagnostic functionalities into a single nanomaterial platform for personalized medicine.",
  },
  {
    title: "Drug Delivery",
    icon: Pill,
    description:
      "Development of targeted drug delivery systems capable of controlled release and improved therapeutic efficiency.",
  },
  {
    title: "Luminescent Nanomaterials",
    icon: Sparkles,
    description:
      "Design of rare-earth-doped magnetic nanomaterials for fluorescence imaging and multimodal biomedical applications.",
  },
  {
    title: "Nanothermometry",
    icon: Thermometer,
    description:
      "Development of luminescent probes capable of monitoring local temperature during therapeutic procedures.",
  },
  {
    title: "Biomedical Nanotechnology",
    icon: FlaskConical,
    description:
      "Applying nanotechnology to improve disease diagnosis, treatment, and healthcare through multifunctional materials.",
  },
];

const researchHighlights = [
  "Developed multifunctional Fe₃O₄ mesocrystals for magnetic hyperthermia and targeted drug delivery.",
  "Investigated rare-earth-doped magnetic mesocrystals for magneto-optical cancer therapy and fluorescence bioimaging.",
  "Explored the integration of magnetic hyperthermia, photothermal therapy, drug delivery, and imaging into multifunctional nanoplatforms.",
  "Presented research at national and international conferences, including Sorbonne University, Paris, IIT Guwahati, SRMIST, NIT Warangal, and VIT-AP University.",
];

const researchPipeline = [
  {
    number: "01",
    title: "Material Design",
    description:
      "Engineering Fe₃O₄-based magnetic mesocrystals with controlled morphology, structure, and composition.",
  },
  {
    number: "02",
    title: "Functionalization",
    description:
      "Tailoring crystal growth, rare-earth doping, and surface functionality to introduce desired magnetic and optical properties.",
  },
  {
    number: "03",
    title: "Characterization",
    description:
      "Studying structural, magnetic, optical, and surface properties to understand material–function relationships.",
  },
  {
    number: "04",
    title: "Biomedical Application",
    description:
      "Evaluating the potential of multifunctional nanomaterials for hyperthermia, photothermal therapy, drug delivery, and bioimaging.",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#03395d] via-[#0b4c70] to-[#377697] text-white">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#bcecef] backdrop-blur-sm">
              <Atom size={15} />
              Research
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Multifunctional Nanomaterials for Cancer Theranostics
            </h1>

            <div className="mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9]" />

            <p className="max-w-3xl text-xl leading-relaxed text-slate-100 md:text-2xl">
              Designing magnetic mesocrystals that bring together therapy,
              targeted delivery, and imaging within multifunctional
              nanoplatforms.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH OVERVIEW
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-20 md:py-24">

        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
                Research Overview
              </p>

              <div className="mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03395d] md:text-4xl">
                From materials science to precision medicine
              </h2>

            </div>

            <div className="space-y-6 text-slate-600 leading-8">

              <p>
                Cancer remains one of the world's leading health challenges,
                creating an urgent need for therapeutic approaches that are
                more effective, minimally invasive, and capable of targeting
                tumors with high precision.
              </p>

              <p>
                My doctoral research focuses on the design, synthesis, and
                application of multifunctional magnetic mesocrystals for
                cancer theranostics. These hierarchically assembled
                nanostructures exhibit unique structural, magnetic, and optical
                properties that make them attractive candidates for biomedical
                applications.
              </p>

              <p>
                A major objective of my research is to engineer Fe₃O₄-based
                mesocrystals capable of integrating magnetic hyperthermia,
                photothermal therapy, targeted drug delivery, and fluorescence
                bioimaging into a unified therapeutic platform.
              </p>

              <p>
                By tailoring crystal growth, morphology, rare-earth doping,
                and surface functionality, I aim to improve therapeutic
                efficiency while enabling simultaneous imaging and treatment.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORE RESEARCH PLATFORM
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-20 md:py-24">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-14 max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
              Core Research
            </p>

            <div className="mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              A multifunctional magnetic nanoplatform
            </h2>

            <p className="leading-8 text-slate-600">
              The central theme of my research is the development of
              multifunctional magnetic mesocrystals that combine multiple
              therapeutic and diagnostic functions within a single platform.
            </p>

          </div>


          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#03395d] via-[#377697] to-[#5df8d9]" />

            <div className="grid items-center gap-8 md:grid-cols-3">

              <PlatformItem
                title="Magnetic Hyperthermia"
                text="Localized heat generation under an alternating magnetic field."
              />

              <div className="flex flex-col items-center justify-center py-8 text-center md:py-0">

                <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-[#6fd2d8]/50 bg-[#03395d]/5 shadow-sm">

                  <Atom
                    size={42}
                    strokeWidth={1.5}
                    className="text-[#377697]"
                  />

                </div>

                <h3 className="text-xl font-bold text-[#03395d]">
                  Fe₃O₄
                </h3>

                <p className="mt-1 text-sm font-medium text-[#377697]">
                  Magnetic Mesocrystal
                </p>

              </div>

              <PlatformItem
                title="Photothermal Therapy"
                text="Light-to-heat conversion for minimally invasive therapy."
              />

            </div>


            <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 md:grid-cols-3">

              <PlatformItem
                title="Targeted Drug Delivery"
                text="Controlled drug loading and release for improved therapeutic efficiency."
              />

              <PlatformItem
                title="Fluorescence Bioimaging"
                text="Optical functionality for visualization and multimodal imaging."
              />

              <PlatformItem
                title="Nanothermometry"
                text="Monitoring local temperature during therapeutic procedures."
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH AREAS
      ====================================================== */}
      <section className="relative px-6 py-20 md:py-24">

        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-14 max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
              Research Areas
            </p>

            <div className="mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              Areas of investigation
            </h2>

            <p className="leading-8 text-slate-600">
              My research brings together materials science, nanotechnology,
              physics, chemistry, and biomedicine to develop advanced
              nanomaterials for healthcare applications.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg"
                >

                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#377697] to-[#5df8d9] transition-all duration-300 group-hover:w-full" />

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#03395d]/5 text-[#377697] transition group-hover:bg-[#03395d] group-hover:text-[#5df8d9]">

                    <Icon size={21} strokeWidth={1.7} />

                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[#03395d]">
                    {area.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH APPROACH
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#03395d] px-6 py-20 text-white md:py-24">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-14 max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#6fd2d8]">
              Research Approach
            </p>

            <div className="mb-5 h-1 w-12 rounded-full bg-[#5df8d9]" />

            <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">
              From synthesis to biomedical evaluation
            </h2>

            <p className="leading-8 text-slate-300">
              My research combines advanced nanomaterial synthesis, structural
              characterization, magnetic measurements, optical studies, and
              biological evaluation to understand how material properties
              influence biomedical performance.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-4">

            {researchPipeline.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8]/40 hover:bg-white/10"
              >

                <span className="font-mono text-sm font-semibold text-[#6fd2d8]">
                  {item.number}
                </span>

                <h3 className="mt-4 mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH HIGHLIGHTS
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-20 md:py-24">

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
                Research Highlights
              </p>

              <div className="mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03395d] md:text-4xl">
                Progress throughout my doctoral research
              </h2>

            </div>


            <div className="space-y-0">

              {researchHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group flex gap-5 border-b border-slate-200 py-6 first:pt-0"
                >

                  <span className="font-mono text-sm font-semibold text-[#377697]">
                    0{index + 1}
                  </span>

                  <p className="leading-8 text-slate-600 transition group-hover:text-[#03395d]">
                    {highlight}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CURRENT DIRECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-20 md:py-24">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
            Current Direction
          </p>

          <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
            Toward integrated cancer therapy and imaging
          </h2>

          <p className="mx-auto mb-8 max-w-3xl leading-8 text-slate-600">
            My current research is directed toward integrating magnetic
            hyperthermia, photothermal therapy, drug delivery, and imaging
            into a single multifunctional nanoplatform. The long-term goal is
            to contribute to nanomaterials that support precision medicine
            and more effective cancer treatment.
          </p>

          <Link
            href="/publications"
            className="group inline-flex items-center gap-2 rounded-full bg-[#03395d] px-6 py-3 font-semibold text-white shadow-lg shadow-[#03395d]/10 transition hover:bg-[#377697]"
          >
            Explore Publications
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="border-t border-slate-200 px-6 py-16">

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#03395d]">
              Interested in research collaboration?
            </h2>

            <p className="text-slate-600">
              I welcome opportunities for interdisciplinary research and
              scientific collaboration.
            </p>

          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#377697]/30 bg-white px-6 py-3 font-semibold text-[#03395d] transition hover:border-[#377697] hover:bg-[#03395d] hover:text-white"
          >
            Get in Touch
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   PLATFORM ITEM
========================================================= */

function PlatformItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">

      <div className="mx-auto mb-4 h-1 w-8 rounded-full bg-gradient-to-r from-[#377697] to-[#5df8d9]" />

      <h3 className="mb-2 text-lg font-bold text-[#03395d]">
        {title}
      </h3>

      <p className="mx-auto max-w-xs text-sm leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

