import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Research | Akash Research Group",
  description:
    "Explore the research areas and ongoing projects at Akash Research Group.",
};

export default function ResearchPage() {
  const projects = [
    {
      title: "AI for Sustainable Systems",
      description:
        "We explore how artificial intelligence can optimize energy use, transportation, and urban infrastructure for a sustainable future.",
      image: "/research/sustainable-ai.jpg",
      link: "#",
    },
    {
      title: "Computational Neuroscience",
      description:
        "Our team investigates brain-inspired computational models to understand and replicate cognitive processes using AI systems.",
      image: "/research/neuroscience.jpg",
      link: "#",
    },
    {
      title: "Data-Driven Healthcare",
      description:
        "We leverage machine learning and data analytics to develop predictive models for improving healthcare diagnostics and decision-making.",
      image: "/research/healthcare.jpg",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Our Research
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          We are driven by curiosity and collaboration — working across
          disciplines to push the boundaries of data science, AI, and
          computation.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition bg-white flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{proj.description}</p>
              <Link
                href={proj.link}
                className="text-gray-900 font-medium hover:underline mt-auto"
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
