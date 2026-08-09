
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";

export const metadata = {
  title: "Contact | Akash Marsalin",
  description:
    "Contact information and research profiles of Akash Marsalin, Ph.D. Research Scholar at SRM Institute of Science and Technology.",
};

const contactDetails = [
  {
    icon: UserRound,
    label: "Researcher",
    value: "Akash Marsalin",
    description: "Ph.D. Research Scholar",
  },
  {
    icon: Building2,
    label: "Department",
    value: "Physics & Nanotechnology",
    description: "SRM Institute of Science and Technology",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chengalpattu",
    description: "Tamil Nadu, India",
  },
];

const emails = [
  {
    label: "Institutional Email",
    email: "am2025@srmist.edu.in",
  },
  {
    label: "Personal Email",
    email: "akashsamuel01@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#03395d] via-[#0b4c70] to-[#377697] text-white">
        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#bcecef] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#5df8d9]" />
              Contact
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>

            <div className="mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9]" />

            <p className="max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              For research collaboration, scientific discussion, academic
              opportunities, or professional enquiries, I would be happy to
              connect.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        {/* Background decoration */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#5df8d9]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
              Contact Information
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              Academic & Research Contact
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              I am currently pursuing doctoral research in Physics and
              Nanotechnology, with a focus on multifunctional magnetic
              nanomaterials and biomedical applications.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#03395d]/5 text-[#377697] transition duration-300 group-hover:bg-[#03395d] group-hover:text-[#5df8d9]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#377697]">
                    {item.label}
                  </p>

                  <h3 className="text-xl font-semibold text-[#03395d]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EMAIL
      ====================================================== */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Intro */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
                Email
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
                Let&apos;s start a conversation
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Email is the best way to reach me for research discussions,
                collaborations, conference-related communication, or academic
                enquiries.
              </p>
            </div>

            {/* Email Cards */}
            <div className="space-y-4">
              {emails.map((item) => (
                <a
                  key={item.email}
                  href={`mailto:${item.email}`}
                  className="group flex items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#03395d]/5 text-[#377697] transition group-hover:bg-[#03395d] group-hover:text-[#5df8d9]">
                      <Mail size={21} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {item.label}
                      </p>

                      <p className="truncate text-base font-semibold text-[#03395d] sm:text-lg">
                        {item.email}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#377697]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH CONNECTION
      ====================================================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#03395d] to-[#377697] px-7 py-10 text-white shadow-xl md:px-12 md:py-12">
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#5df8d9]/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#6fd2d8]">
                  Research Collaboration
                </p>

                <h2 className="max-w-2xl text-2xl font-bold md:text-3xl">
                  Interested in working together?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                  I welcome interdisciplinary collaborations involving
                  magnetic nanomaterials, mesocrystals, cancer theranostics,
                  magnetic hyperthermia, photothermal therapy, drug delivery,
                  and biomedical nanotechnology.
                </p>
              </div>

              <a
                href="mailto:am2025@srmist.edu.in"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#5df8d9] px-6 py-3 text-sm font-semibold text-[#03395d] transition hover:bg-[#6fd2d8]"
              >
                Send an Email
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACKNOWLEDGEMENT
      ====================================================== */}
      <section className="border-t border-slate-200 bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="border-l-2 border-[#6fd2d8] pl-6 md:pl-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
              Acknowledgement
            </p>

            <h2 className="mb-5 text-2xl font-bold text-[#03395d] md:text-3xl">
              With gratitude
            </h2>

            <p className="text-base leading-8 text-slate-600">
              I would like to express my sincere gratitude to my research
              supervisor, Dr. Rajaboopathi Mani, for his continuous guidance,
              encouragement, and support throughout my doctoral journey. I also
              thank my colleagues at the Key Laboratory of Emergent Materials
              (KLEM), the Department of Physics and Nanotechnology, SRM
              Institute of Science and Technology, my collaborators, friends,
              and family for their unwavering support and encouragement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

