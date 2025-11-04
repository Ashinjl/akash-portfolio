"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Akash’s Research Group
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Advancing knowledge in data science, AI, and computational modeling.
          We explore how machine intelligence can solve real-world problems.
        </p>
        <Link
          href="/research"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Explore Our Research <ArrowRight size={18} />
        </Link>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          The Akash Research Group brings together scientists and engineers
          working on applied AI, sustainable computing, and intelligent systems.
          Our mission is to create impactful research that bridges theory and
          practical innovation.
        </p>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-20 max-w-6xl mx-auto">
        <Card
          title="Research"
          desc="Discover our ongoing projects and areas of expertise."
          href="/research"
        />
        <Card
          title="Publications"
          desc="Browse our latest research papers and academic outputs."
          href="/publications"
        />
        <Card
          title="Blog"
          desc="Read our thoughts on technology, science, and innovation."
          href="/blogs"
        />
      </section>

      {/* CONTACT CTA */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Interested in collaborating or joining?
        </h3>
        <Link
          href="/contact"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition bg-white"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <span className="text-gray-900 font-medium inline-flex items-center gap-1">
        Learn more <ArrowRight size={16} />
      </span>
    </Link>
  );
}
