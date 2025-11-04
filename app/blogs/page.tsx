import Link from "next/link";

export const metadata = {
  title: "Blogs | Akash Research Group",
  description:
    "Read insights, articles, and updates from the Akash Research Group.",
};

export default function BlogsPage() {
  const blogs = [
    {
      title: "The Future of AI Research",
      description:
        "A deep dive into how artificial intelligence is transforming research across industries and disciplines.",
      date: "October 28, 2025",
      link: "#",
    },
    {
      title: "Data Ethics in Modern Science",
      description:
        "Exploring responsible AI development and the importance of ethical data practices in research.",
      date: "November 2, 2025",
      link: "#",
    },
    {
      title: "Collaborative Innovation",
      description:
        "How open collaboration between institutions drives rapid innovation and better outcomes.",
      date: "November 3, 2025",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Stay up to date with the latest news, research highlights, and
          discussions from our group.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.title}
            className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-500 text-sm mb-3">{blog.date}</p>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <Link href={blog.link} className="text-blue-600 hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
