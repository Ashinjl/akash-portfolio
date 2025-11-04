"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We welcome collaboration opportunities, research partnerships, and
          student inquiries. Reach out using the form or email below.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Or email us directly at{" "}
            <a
              href="mailto:akashgroup@example.com"
              className="text-gray-900 font-medium hover:underline"
            >
              akashgroup@example.com
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Office: Department of Computer Science, Example University
          </p>
        </div>
      </section>
    </main>
  );
}
