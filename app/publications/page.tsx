
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    slug: "formation-to-functionality",
    type: "Journal Article",
    title:
      "From Formation to Functionality: Insights into Mesocrystal Development and Applications",
    date: "2025",
    journal: "Journal of Solid State Chemistry",
    volume: "347",
    pages: "125331",
    abstract:
      "This comprehensive review discusses the evolution of mesocrystal research, covering non-classical crystallization mechanisms, synthesis strategies, characterization techniques, and applications in catalysis, sensing, energy storage, environmental remediation, and biomedicine. The article highlights recent advances and future opportunities in mesocrystal engineering, serving as a valuable reference for researchers entering this rapidly growing field.",
    highlights: [
      "Comprehensive review of mesocrystal formation mechanisms.",
      "Comparison of synthesis approaches.",
      "Biomedical and energy-related applications.",
      "Future perspectives for multifunctional mesocrystals.",
    ],
    keywords: [
      "Mesocrystals",
      "Non-Classical Crystallization",
      "Nanomaterials",
      "Biomedical Applications",
      "Review",
    ],
  },
  {
    slug: "multifunctional-fe3o4-mesocrystals",
    type: "Journal Article",
    title:
      "Multifunctional Fe₃O₄ Mesocrystals for Cancer Therapy: Integrating Hyperthermia and Targeted Drug Delivery",
    date: "2025",
    journal: "Journal of Materials Chemistry B",
    abstract:
      "This research presents the development of multifunctional Fe₃O₄ mesocrystals with enhanced magnetic properties for combined magnetic hyperthermia and targeted drug delivery. The study demonstrates how controlled mesocrystal engineering can improve drug-loading efficiency, magnetic heating performance, and therapeutic potential, making these nanostructures promising candidates for next-generation cancer theranostics.",
    highlights: [
      "Development of highly ordered Fe₃O₄ mesocrystals.",
      "Enhanced magnetic hyperthermia efficiency.",
      "Controlled drug loading and release.",
      "Potential platform for multifunctional cancer therapy.",
    ],
    keywords: [
      "Fe₃O₄ Mesocrystals",
      "Magnetic Hyperthermia",
      "Drug Delivery",
      "Cancer Theranostics",
      "Nanomedicine",
    ],
  },

 {
    slug: "fe3o4-cofe2o4-nanoclusters",
    type: "Conference Proceeding",
    title:
      "Investigation of Structural and Magnetic Property of Fe₃O₄ and CoFe₂O₄ Nanoclusters for Biomedical Application",
    date: "2024",
    journal: "Springer Nature Conference Proceedings",
    abstract:
      "This conference paper investigates the synthesis, structural characterization, and magnetic behavior of Fe₃O₄ and CoFe₂O₄ nanoclusters for biomedical applications. The work explores how composition and crystal structure influence magnetic properties, providing insights into the development of magnetic nanomaterials for magnetic hyperthermia and related biomedical technologies.",
    highlights: [
      "Synthesis and structural investigation of Fe₃O₄ and CoFe₂O₄ nanoclusters.",
      "Analysis of structural and magnetic properties.",
      "Investigation of composition-dependent magnetic behavior.",
      "Potential applications in magnetic hyperthermia and biomedicine.",
    ],
    keywords: [
      "Fe₃O₄",
      "CoFe₂O₄",
      "Nanoclusters",
      "Magnetic Materials",
      "Biomedical Applications",
      "Magnetic Hyperthermia",
    ],
  },

];

export default function PublicationsPage() {
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

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#bcecef] backdrop-blur-sm">
              <BookOpen size={15} />
              Research Publications
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Publications
            </h1>

            <div className="mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9]" />

            <p className="max-w-3xl text-xl leading-relaxed text-slate-100 md:text-2xl">
              Selected research contributions in multifunctional magnetic
              mesocrystals, nanomaterials, and biomedical applications.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          PUBLICATIONS
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-20 md:py-24">

        {/* Decorative background */}
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          {/* Section heading */}
          {/* <div className="mb-14 max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
              Selected Work
            </p>

            <div className="mb-5 h-1 w-12 rounded-full bg-[#6fd2d8]" />

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              Research contributions
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              A selection of research work focused on mesocrystal engineering,
              magnetic nanomaterials, cancer theranostics, and biomedical
              nanotechnology.
            </p>

          </div> */}


          {/* Publication Cards */}
          <div className="space-y-8">

            {publications.map((publication, index) => (

              <article
                key={publication.slug}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-xl"
              >

                {/* Top accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#03395d] via-[#377697] to-[#5df8d9]" />

                <div className="p-7 sm:p-10 md:p-12">

                  {/* Publication metadata */}
                  <div className="mb-6 flex flex-wrap items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#03395d] text-sm font-bold text-[#5df8d9]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                      <span className="rounded-full bg-[#03395d]/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#377697]">
                      {publication.type}
                      </span>
                    <span className="text-sm font-medium text-slate-400">
                      {publication.date}
                    </span>

                  </div>


                  {/* Title */}
                  <h2 className="max-w-4xl text-2xl font-bold leading-tight text-[#03395d] transition-colors group-hover:text-[#377697] sm:text-3xl">
                    {publication.title}
                  </h2>


                  {/* Journal information */}
                  <div className="mt-7 rounded-2xl border border-[#6fd2d8]/30 bg-gradient-to-r from-[#03395d]/[0.03] to-[#6fd2d8]/[0.06] p-5">

                    <p className="font-bold text-[#03395d]">
                      {publication.journal}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">

                      <span>{publication.date}</span>

                      {publication.volume && (
                        <>
                          <span className="text-[#6fd2d8]">•</span>
                          <span>Volume {publication.volume}</span>
                        </>
                      )}

                      {publication.pages && (
                        <>
                          <span className="text-[#6fd2d8]">•</span>
                          <span>Pages {publication.pages}</span>
                        </>
                      )}

                    </div>

                  </div>


                  {/* Abstract */}
                  <div className="mt-9">

                    <div className="mb-3 flex items-center gap-3">

                      <div className="h-6 w-1 rounded-full bg-[#6fd2d8]" />

                      <h3 className="text-lg font-bold text-[#03395d]">
                        Abstract
                      </h3>

                    </div>

                    <p className="max-w-5xl text-base leading-8 text-slate-600">
                      {publication.abstract}
                    </p>

                  </div>


                  {/* Research Highlights */}
                  <div className="mt-9">

                    <div className="mb-5 flex items-center gap-3">

                      <div className="h-6 w-1 rounded-full bg-[#377697]" />

                      <h3 className="text-lg font-bold text-[#03395d]">
                        Research Highlights
                      </h3>

                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">

                      {publication.highlights.map((highlight) => (

                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-[#6fd2d8]/40 hover:bg-[#6fd2d8]/5"
                        >

                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5df8d9] ring-4 ring-[#5df8d9]/10" />

                          <span className="text-sm leading-7 text-slate-600">
                            {highlight}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* Keywords */}
                  <div className="mt-9">

                    <div className="mb-4 flex items-center gap-3">

                      <div className="h-6 w-1 rounded-full bg-[#6fd2d8]" />

                      <h3 className="text-lg font-bold text-[#03395d]">
                        Keywords
                      </h3>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {publication.keywords.map((keyword) => (

                        <span
                          key={keyword}
                          className="rounded-full border border-[#377697]/20 bg-[#03395d]/[0.03] px-3.5 py-1.5 text-sm font-medium text-[#377697] transition hover:border-[#6fd2d8] hover:bg-[#6fd2d8]/10"
                        >
                          {keyword}
                        </span>

                      ))}

                    </div>

                  </div>




                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH CTA
      ====================================================== */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-16">

        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">

          <div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#377697]">
              Continue Exploring
            </p>

            <h2 className="text-2xl font-bold text-[#03395d] md:text-3xl">
              Explore the research behind these publications.
            </h2>

          </div>

          <Link
            href="/research"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#03395d] px-6 py-3 font-semibold text-white shadow-lg shadow-[#03395d]/10 transition hover:bg-[#377697]"
          >
            Explore Research

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
