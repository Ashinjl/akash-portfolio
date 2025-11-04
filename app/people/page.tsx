import Image from "next/image";

export const metadata = {
  title: "People | Akash Research Group",
  description:
    "Meet the dedicated researchers and collaborators of the Akash Research Group.",
};

export default function PeoplePage() {
  const members = [
    {
      name: "Dr. Akash Kumar",
      role: "Principal Investigator",
      image: "/people/akash.jpg",
    },
    {
      name: "Neha Sharma",
      role: "Research Fellow – Machine Learning",
      image: "/people/neha.jpg",
    },
    {
      name: "Ravi Patel",
      role: "Data Scientist",
      image: "/people/ravi.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          A diverse and passionate team dedicated to advancing AI, data science,
          and computational research.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {members.map((person) => (
          <div
            key={person.name}
            className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition bg-white"
          >
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">{person.name}</h3>
            <p className="text-gray-600">{person.role}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
