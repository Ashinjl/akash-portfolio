import { getPublicationBySlug } from "@/lib/publications";
import { notFound } from "next/navigation";
import Image from "next/image";
import { marked } from "marked";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;

  const publication = getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  const html = await marked.parse(publication.content || "");

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Publication Header */}
        <header className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">

          {/* Journal */}
          {publication.journal && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              {publication.journal}
            </p>
          )}

          {/* Title */}
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {publication.title}
          </h1>

          {/* Date */}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Published {publication.date}</span>

            {publication.volume && (
              <span>Volume {publication.volume}</span>
            )}

            {publication.issue && (
              <span>Issue {publication.issue}</span>
            )}

            {publication.pages && (
              <span>Pages {publication.pages}</span>
            )}
          </div>

          {/* Cover */}
          {publication.cover && (
            <div className="mt-8 overflow-hidden rounded-xl">
              <Image
                src={publication.cover}
                alt={publication.title}
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          {/* Abstract */}
          {publication.abstract && (
            <section className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Abstract
              </h2>

              <p className="mt-3 text-base leading-8 text-slate-600">
                {publication.abstract}
              </p>
            </section>
          )}

          {/* Keywords */}
          {publication.keywords?.length > 0 && (
            <section className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Keywords
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {publication.keywords.map((keyword: string) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </section>
          )}
        </header>

        {/* Publication Content */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10 lg:px-14">

          <article
className=" prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-h1:mb-10 prose-h1:text-3xl prose-h1:leading-tight prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-4 prose-h2:text-2xl prose-h2:leading-tight prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-xl prose-p:my-5 prose-p:text-slate-700 prose-p:leading-8 prose-ul:my-6 prose-li:my-2 prose-li:text-slate-700 prose-li:leading-7 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:my-8 prose-img:rounded-xl prose-img:shadow-sm prose-table:text-sm prose-blockquote:my-8 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-lg prose-blockquote:py-2 "
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </div>

        {/* Back button */}
        <div className="mt-8">
          <a
            href="/publications"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            ← Back to Publications
          </a>
        </div>

      </div>
    </main>
  );
}