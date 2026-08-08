
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Brain,
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
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-5">
              Research
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-7">
              Multifunctional Nanomaterials for Cancer Theranostics
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl">
              Designing magnetic mesocrystals that bring together therapy,
              targeted delivery, and imaging within multifunctional
              nanoplatforms.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH OVERVIEW */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
                Research Overview
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                From materials science to precision medicine
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
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

      {/* CORE RESEARCH PLATFORM */}
      <section className="py-20 md:py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
              Core Research
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
              A multifunctional magnetic nanoplatform
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The central theme of my research is the development of
              multifunctional magnetic mesocrystals that combine multiple
              therapeutic and diagnostic functions within a single platform.
            </p>
          </div>

          {/* CENTRAL PLATFORM */}
          <div className="border border-gray-200 rounded-3xl bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <PlatformItem
                title="Magnetic Hyperthermia"
                text="Localized heat generation under an alternating magnetic field."
              />

              <div className="flex flex-col items-center justify-center text-center py-8 md:py-0">
                <div className="w-28 h-28 rounded-full border border-gray-300 flex items-center justify-center mb-5">
                  <Atom size={42} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  Fe₃O₄
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Magnetic Mesocrystal
                </p>
              </div>

              <PlatformItem
                title="Photothermal Therapy"
                text="Light-to-heat conversion for minimally invasive therapy."
              />
            </div>

            <div className="mt-10 pt-10 border-t border-gray-200 grid md:grid-cols-3 gap-8">
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

      {/* RESEARCH AREAS */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
              Research Areas
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
              Areas of investigation
            </h2>

            <p className="text-gray-600 leading-relaxed">
              My research brings together materials science, nanotechnology,
              physics, chemistry, and biomedicine to develop advanced
              nanomaterials for healthcare applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-gray-900 group-hover:text-white transition">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {area.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH APPROACH */}
      <section className="py-20 md:py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400 mb-4">
              Research Approach
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              From synthesis to biomedical evaluation
            </h2>

            <p className="text-gray-300 leading-relaxed">
              My research combines advanced nanomaterial synthesis, structural
              characterization, magnetic measurements, optical studies, and
              biological evaluation to understand how material properties
              influence biomedical performance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {researchPipeline.map((item) => (
              <div
                key={item.number}
                className="border border-gray-700 rounded-2xl p-6"
              >
                <span className="text-sm text-gray-500 font-mono">
                  {item.number}
                </span>

                <h3 className="text-xl font-semibold mt-4 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH HIGHLIGHTS */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
                Research Highlights
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Progress throughout my doctoral research
              </h2>
            </div>

            <div className="space-y-5">
              {researchHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-gray-200 pb-5"
                >
                  <span className="text-sm font-mono text-gray-400 pt-1">
                    0{index + 1}
                  </span>

                  <p className="text-gray-600 leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT DIRECTION */}
      <section className="py-20 md:py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
            Current Direction
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Toward integrated cancer therapy and imaging
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
            My current research is directed toward integrating magnetic
            hyperthermia, photothermal therapy, drug delivery, and imaging
            into a single multifunctional nanoplatform. The long-term goal is
            to contribute to nanomaterials that support precision medicine
            and more effective cancer treatment.
          </p>

          <Link
            href="/publications"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Explore Publications
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Interested in research collaboration?
            </h2>

            <p className="text-gray-600">
              I welcome opportunities for interdisciplinary research and
              scientific collaboration.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition whitespace-nowrap"
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
   COMPONENTS
--------------------------------- */

function PlatformItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
        {text}
      </p>
    </div>
  );
}

