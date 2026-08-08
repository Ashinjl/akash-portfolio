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
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          News & Updates
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Research milestones, publications, conference presentations,
          awards, and academic achievements.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        {newsItems.map((yearGroup) => (
          <div key={yearGroup.year} className="mb-16">
            {/* Year */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {yearGroup.year}
              </h2>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* News Items */}
            <div className="relative ml-2 border-l border-gray-200">
              {yearGroup.items.map((item) => (
                <article
                  key={item.title}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-gray-900" />

                  <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xl">{item.icon}</span>

                      <span className="text-sm text-gray-500">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}