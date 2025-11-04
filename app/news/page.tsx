export const metadata = {
  title: "News | Akash Research Group",
  description:
    "Discover the latest news, media coverage, and event highlights from the Akash Research Group.",
};

export default function NewsPage() {
  const newsItems = [
    {
      title: "Akash Research Group Wins National AI Grant",
      date: "October 15, 2025",
      summary:
        "The team received recognition for pioneering AI models that support sustainable development.",
      link: "#",
    },
    {
      title: "New Partnership with Tech Innovations Lab",
      date: "November 1, 2025",
      summary:
        "A new collaboration aims to explore cutting-edge AI for medical diagnostics and real-world deployment.",
      link: "#",
    },
    {
      title: "Akash Kumar Speaks at Global Data Summit 2025",
      date: "November 3, 2025",
      summary:
        "Dr. Akash Kumar presented insights on ethical AI and interdisciplinary research collaboration.",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Highlights</h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Follow our latest achievements, partnerships, and contributions to the research community.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-8">
        {newsItems.map((item) => (
          <div
            key={item.title}
            className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white"
          >
            <p className="text-gray-500 text-sm">{item.date}</p>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-3">{item.summary}</p>
            <a href={item.link} className="text-blue-600 hover:underline">
              Read more →
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
