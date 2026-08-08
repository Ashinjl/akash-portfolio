export const metadata = {
  title: "Publications | Akash Research Group",
};

const dummyPublications = [
  {
    id: "1",
    title: "Exploring Quantum Neural Networks",
    excerpt:
      "A brief overview of how quantum computing principles can be leveraged to enhance neural network computation.",
    date: "2025-10-12",
    cover:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "AI in Climate Modeling: The Future of Predictions",
    excerpt:
      "Machine learning models are reshaping how we predict and respond to global climate change challenges.",
    date: "2025-09-05",
    cover:
      "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Ethical Challenges in AI-Generated Research",
    excerpt:
      "A look into the ethical implications of using generative AI in academic and scientific publications.",
    date: "2025-08-20",
    cover:
      "https://images.unsplash.com/photo-1581091012184-5c1b1a37d2b8?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Publications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dummyPublications.map((pub) => (
          <div
            key={pub.id}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition bg-white flex flex-col"
          >
            {pub.cover && (
              <img
                src={pub.cover}
                alt={pub.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{pub.excerpt}</p>
              <p className="text-sm text-gray-400">{pub.date}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
