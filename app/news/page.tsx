export const metadata = {
  title: "News & Updates | Akash Marsalin",
  description:
    "Latest research updates, publications, conference presentations, awards, and academic milestones of Akash Marsalin.",
};

export default function NewsPage() {
  const newsItems = [
    {
      year: "2026",
      items: [
        {
          title:
            "Presented Research at the 15th International Conference on the Scientific and Clinical Applications of Magnetic Carriers",
          date: "May 2026",
          icon: "🌍",
          summary:
            "Presented research at Sorbonne University, Paris, France.",
        },
        {
          title: "Received ANRF International Travel Support",
          date: "2026",
          icon: "✈️",
          summary:
            "Received ANRF International Travel Support to present research in France.",
        },
        {
          title:
            "Presented Eu³⁺-Doped Fe₃O₄ Mesocrystals for Magneto–Optic Synergistic Cancer Therapy and Bioimaging",
          date: "2026",
          icon: "🎤",
          summary:
            "Presented research at AFMD-2026.",
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          title: "Received the Best Oral Presentation Award",
          date: "2025",
          icon: "🏆",
          summary:
            "Received the Best Oral Presentation Award at SMARTBIO-2025, VIT-AP University.",
        },
        {
          title: "Published First Research Article",
          date: "2025",
          icon: "📖",
          summary:
            "Published my first research article in Journal of Materials Chemistry B.",
        },
        {
          title: "Published First Review Article",
          date: "2025",
          icon: "📚",
          summary:
            "Published my first review article in Journal of Solid State Chemistry.",
        },
        {
          title: "Presented Research at ICANN 2025",
          date: "December 2025",
          icon: "🎤",
          summary:
            "Presented research at the 9th International Conference on Advanced Nanomaterials and Nanotechnology, IIT Guwahati.",
        },
        {
          title: "Presented Research at ICONN 2025",
          date: "March 2025",
          icon: "🎤",
          summary:
            "Presented research at the 8th International Conference on Nanoscience and Nanotechnology, SRMIST.",
        },
      ],
    },
    {
      year: "2024",
      items: [
        {
          title: "Springer Conference Proceeding Accepted for Publication",
          date: "2024",
          icon: "📖",
          summary:
            "Conference proceeding on Fe₃O₄ and CoFe₂O₄ nanoclusters was accepted for publication by Springer Nature.",
        },
        {
          title: "Presented Research at IEMDST-2024",
          date: "July 2024",
          icon: "🎤",
          summary:
            "Presented research at the International Conference on Emerging Multifunctional Materials and Devices for Sustainable Technologies, NIT Warangal.",
        },
        {
          title: "Presented Research at iReAd MAGMA-2024",
          date: "November 2024",
          icon: "🎤",
          summary:
            "Presented ongoing doctoral research at the International Workshop on Recent Advancements in Magnetism and Magnetic Materials, VIT-AP University.",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: "Joined the Key Laboratory of Emergent Materials",
          date: "2023",
          icon: "🎓",
          summary:
            "Joined the Key Laboratory of Emergent Materials (KLEM) as a Ph.D. Research Scholar.",
        },
        {
          title: "Started Research on Magnetic Mesocrystals",
          date: "2023",
          icon: "🔬",
          summary:
            "Started research on magnetic mesocrystals via non-classical crystallization for magnetic hyperthermia applications.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#03395d] via-[#0b4c70] to-[#377697] text-white">

        {/* Decorative glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">

          <div className="mx-auto max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#bcecef] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#5df8d9]" />
              Research Timeline
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              News & Updates
            </h1>

            <div className="mx-auto mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9]" />

            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              Research milestones, publications, conference presentations,
              awards, and academic achievements.
            </p>

          </div>

        </div>
      </section>


{/* =====================================================
    TIMELINE
===================================================== */}
<section className="relative overflow-hidden px-6 py-20 md:py-24">

  {/* Background decoration */}
  <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />
  <div className="absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

  <div className="relative mx-auto max-w-5xl">

    {newsItems.map((yearGroup) => (

      <div key={yearGroup.year} className="mb-16 last:mb-0">

        {/* Year heading */}
        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#03395d] text-sm font-bold text-[#5df8d9]">
            {yearGroup.year.slice(2)}
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#377697]">
              Timeline
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-[#03395d] md:text-3xl">
              {yearGroup.year}
            </h2>
          </div>

          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#6fd2d8]/50 to-transparent sm:block" />

        </div>


        {/* Compact Timeline */}
        <div className="relative ml-5 border-l border-[#6fd2d8]/40 pl-7 md:ml-6 md:pl-8">

          {yearGroup.items.map((item, index) => (

            <article
              key={item.title}
              className="group relative mb-5 last:mb-0"
            >

              {/* Timeline dot */}
              <span className="absolute -left-[34px] top-5 h-3 w-3 rounded-full border-2 border-white bg-[#377697] ring-1 ring-[#6fd2d8]/50 transition group-hover:scale-125 group-hover:bg-[#5df8d9] md:-left-[38px]" />


              {/* Compact Card */}
              <div className="relative max-w-3xl rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition duration-300 hover:border-[#6fd2d8] hover:shadow-md">

                <div className="flex gap-4">

                  {/* Small icon */}
                  <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#03395d]/5 text-base sm:flex">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">

                    {/* Date */}
                    <div className="mb-1.5 flex items-center gap-2">

                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#377697]">
                        {item.date}
                      </span>

                      <span className="text-slate-300">
                        •
                      </span>

                      <span className="font-mono text-[10px] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>


                    {/* Title */}
                    <h3 className="text-base font-semibold leading-snug text-[#03395d] transition-colors group-hover:text-[#377697] md:text-lg">
                      {item.title}
                    </h3>


                    {/* Summary */}
                    <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                      {item.summary}
                    </p>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    ))}

  </div>

</section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl bg-gradient-to-br from-[#03395d] to-[#377697] px-7 py-10 text-white shadow-xl md:px-12 md:py-12">

            <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

              <div>

                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#6fd2d8]">
                  Explore Further
                </p>

                <h2 className="text-2xl font-bold md:text-3xl">
                  Discover my research and publications.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                  Explore the research themes, publications, and scientific
                  work behind these academic milestones.
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="/research"
                  className="rounded-full bg-[#5df8d9] px-6 py-3 text-sm font-semibold text-[#03395d] transition hover:bg-[#6fd2d8]"
                >
                  Research
                </a>

                <a
                  href="/publications"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Publications
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

