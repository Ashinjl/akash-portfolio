"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const galleryItems = [
  {
    src: "/gallery/image-1.jpg",
    title: "Research Presentation",
    category: "Conferences",
    description:
      "Presenting research on multifunctional magnetic mesocrystals.",
  },
  {
    src: "/gallery/image-2.jpg",
    title: "International Conference",
    category: "Conferences",
    description:
      "Research presentation at an international scientific conference.",
  },
  {
    src: "/gallery/image-3.jpg",
    title: "Laboratory Research",
    category: "Research",
    description:
      "Experimental work on magnetic nanomaterials and mesocrystals.",
  },
  {
    src: "/gallery/image-4.jpg",
    title: "Scientific Presentation",
    category: "Conferences",
    description:
      "Sharing research findings with the scientific community.",
  },
  {
    src: "/gallery/image-5.jpg",
    title: "Research Group",
    category: "Research",
    description:
      "Academic and research activities with colleagues.",
  },
  {
    src: "/gallery/image-6.jpg",
    title: "Conference Participation",
    category: "Conferences",
    description:
      "Participation in a scientific conference and research exchange.",
  },
  {
    src: "/gallery/image-7.jpg",
    title: "Best Oral Presentation Award",
    category: "Awards",
    description:
      "Recognition for research presented at SMARTBIO-2025.",
  },
  {
    src: "/gallery/image-8.jpg",
    title: "Academic Workshop",
    category: "Workshops",
    description:
      "Participating in an academic and professional research workshop.",
  },
  {
    src: "/gallery/image-9.jpg",
    title: "Research Activities",
    category: "Research",
    description:
      "Research activities related to multifunctional nanomaterials.",
  },
  {
    src: "/gallery/image-10.jpg",
    title: "Scientific Event",
    category: "Conferences",
    description:
      "Connecting with researchers and exchanging scientific ideas.",
  },
  {
    src: "/gallery/image-11.jpg",
    title: "Academic Milestone",
    category: "Awards",
    description:
      "A memorable milestone during my doctoral research journey.",
  },
  {
    src: "/gallery/image-12.jpg",
    title: "Beyond the Laboratory",
    category: "Academic Life",
    description:
      "Moments from academic life beyond research activities.",
  },
];

const categories = [
  "All",
  "Research",
  "Conferences",
  "Awards",
  "Workshops",
  "Academic Life",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[number] | null
  >(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#03395d] via-[#0b4c70] to-[#377697] text-white">
        {/* Decorative glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#bcecef] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#5df8d9]" />
              Visual Archive
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Gallery
            </h1>

            <div className="mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9]" />

            <p className="max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              A collection of moments from my research, conferences,
              presentations, workshops, awards, and academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTERS + GALLERY
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-16 md:py-20">
        {/* Background decoration */}
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
                Selected Moments
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
                Research & Academic Journey
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 md:text-right">
              Explore selected moments from scientific meetings, laboratory
              work, academic events, and milestones.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-[#03395d] text-[#5df8d9] shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#6fd2d8] hover:text-[#377697]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* =================================================
              MASONRY GALLERY
          ================================================== */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredItems.map((item, index) => (
              <article
                key={item.src}
                className="group mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-xl"
                >
                  {/* Image */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    priority={index < 3}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03395d]/90 via-[#03395d]/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-[#03395d]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#bcecef] opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-200">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5df8d9] text-[#03395d]">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
              <p className="text-slate-500">
                No images available in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#021f32]/95 p-5 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1800}
              height={1400}
              className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <div className="mt-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6fd2d8]">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {selectedImage.title}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-gradient-to-br from-[#03395d] to-[#377697] px-7 py-10 text-white shadow-xl md:px-12 md:py-12">
            <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6fd2d8]">
                  Explore Further
                </p>

                <h2 className="text-2xl font-bold md:text-3xl">
                  Discover the research behind these moments.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                  Explore my research interests, publications, conferences,
                  awards, and academic milestones.
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

