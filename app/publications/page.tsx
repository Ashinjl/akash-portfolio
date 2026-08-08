import Link from "next/link";

const publications = [
  {
    slug: "formation-to-functionality",
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
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Research Publications
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Publications
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Selected research contributions in multifunctional magnetic
            mesocrystals, nanomaterials, and biomedical applications.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-10">
          {publications.map((publication, index) => (
            <article
              key={publication.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="p-7 sm:p-10">
                {/* Number */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>

                  <span className="text-sm font-medium uppercase tracking-wider text-slate-500">
                    Journal Article
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                  {publication.title}
                </h2>

                {/* Journal Information */}
                <div className="mt-5 border-l-4 border-blue-600 bg-slate-50 px-5 py-4">
                  <p className="font-semibold text-slate-900">
                    {publication.journal}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {publication.date}
                    {publication.volume &&
                      ` · Volume ${publication.volume}`}
                    {publication.pages &&
                      ` · Pages ${publication.pages}`}
                  </p>
                </div>

                {/* Abstract */}
                <div className="mt-8">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    Abstract
                  </h3>

                  <p className="text-base leading-8 text-slate-600">
                    {publication.abstract}
                  </p>
                </div>

                {/* Research Highlights */}
                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Research Highlights
                  </h3>

                  <ul className="space-y-3">
                    {publication.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                        <span className="leading-7">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Keywords */}
                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Keywords
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read More
                <div className="mt-9 border-t border-slate-200 pt-6">
                  <Link
                    href={`/publications/${publication.slug}`}
                    className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                  >
                    View Publication
                    <span className="ml-2">→</span>
                  </Link>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

