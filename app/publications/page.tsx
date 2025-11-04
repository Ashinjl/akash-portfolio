import Link from "next/link";

export const metadata = {
  title: "Publications | Akash Research Group",
  description: "Browse research papers and scholarly outputs by Akash Group.",
};

export default function PublicationsPage() {
  const publications = [
    {
      title: "Deep Learning Approaches for Sustainable Urban Mobility",
      authors: "Akash S., Sharma P., and Lee K.",
      journal: "IEEE Transactions on Intelligent Systems, 2024",
      link: "#",
    },
    {
      title: "Interpretable AI Models for Clinical Decision Support",
      authors: "Akash S., Patel R., and Kim J.",
      journal: "Nature Machine Intelligence, 2023",
      link: "#",
    },
    {
      title: "Data-Driven Optimization for Renewable Energy Networks",
      authors: "Akash S. and Nguyen L.",
      journal: "Applied Energy Journal, 2022",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Publications
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our research outputs are published in top-tier international journals
          and conferences. Browse our selected publications below.
        </p>
      </section>

      {/* PUBLICATION LIST */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-10">
        {publications.map((pub, i) => (
          <div
            key={i}
            className="border-b border-gray-200 pb-6 last:border-none"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {pub.title}
            </h3>
            <p className="text-gray-700 text-sm mb-1">{pub.authors}</p>
            <p className="text-gray-500 text-sm mb-2 italic">{pub.journal}</p>
            <Link
              href={pub.link}
              className="text-gray-900 font-medium hover:underline"
            >
              View Paper →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
