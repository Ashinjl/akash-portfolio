export const metadata = {
  title: "Contact | Akash Marsalin",
  description:
    "Contact information and research profiles of Akash Marsalin, Ph.D. Research Scholar at SRM Institute of Science and Technology.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Contact
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Akash Marsalin
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Akash Marsalin</p>
                <p className="text-gray-600">Ph.D. Research Scholar</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Department</p>
                <p className="text-gray-600">
                  Department of Physics and Nanotechnology
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Institution</p>
                <p className="text-gray-600">
                  SRM Institute of Science and Technology (SRMIST)
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600">
                  Chengalpattu, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Email
            </h2>

            <div className="space-y-4">
              <a
                href="mailto:am2025@srmist.edu.in"
                className="block text-gray-700 hover:text-gray-900 hover:underline"
              >
                am2025@srmist.edu.in
              </a>

              <a
                href="mailto:akashsamuel01@gmail.com"
                className="block text-gray-700 hover:text-gray-900 hover:underline"
              >
                akashsamuel01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgement */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Acknowledgement
          </h2>

          <p className="text-gray-700 leading-8">
            I would like to express my sincere gratitude to my research
            supervisor, Dr. Rajaboopathi Mani, for his continuous guidance,
            encouragement, and support throughout my doctoral journey. I also
            thank my colleagues at the Key Laboratory of Emergent Materials
            (KLEM), the Department of Physics and Nanotechnology, SRM Institute
            of Science and Technology, my collaborators, friends, and family
            for their unwavering support and encouragement.
          </p>
        </div>
      </section>
    </main>
  );
}

