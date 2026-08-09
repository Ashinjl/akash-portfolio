export const metadata = {
  title: "Skills & Experience | Akash Marsalin",
  description:
    "Technical expertise, professional memberships, leadership experience, and activities beyond research.",
};

const technicalSkills = [
  {
    title: "Biological & Biomedical Techniques",
    description:
      "Techniques and experimental approaches relevant to biomedical nanotechnology and cancer theranostics.",
    skills: [],
  },
  {
    title: "Nanomaterial Synthesis",
    description:
      "Synthesis and engineering of multifunctional magnetic nanomaterials and mesocrystalline structures.",
    skills: [],
  },
  {
    title: "Characterization Techniques",
    description:
      "Structural, magnetic, optical, and surface characterization approaches used in nanomaterials research.",
    skills: [],
  },
  {
    title: "Software & Data Analysis",
    description:
      "Scientific software and computational tools used for materials characterization, data analysis, and modelling.",
    skills: [
      "OriginPro",
      "GSAS-II",
      "FullProf Suite",
      "ImageJ",
      "COMSOL Multiphysics",
      "XPS Peak4",
      "Microsoft Office Suite",
    ],
  },
];

const memberships = [
  "American Physical Society (APS)",
  "American Chemical Society (ACS)",
  "ResearchGate",
  "Google Scholar",
  "ORCID",
];

export default function SkillsExperiencePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#03395d] via-[#0b4c70] to-[#377697] text-white">
        {/* Decorative glows */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#bcecef] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#5df8d9]" />
              Skills & Experience
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Research Skills, Experience & Beyond
            </h1>

            <div className="mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#6fd2d8] to-[#5df8d9]" />

            <p className="max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
              Technical expertise, scientific tools, professional
              involvement, leadership experience, and the activities that
              shape my work beyond the laboratory.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNICAL SKILLS
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        {/* Background glows */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#6fd2d8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
              Technical Expertise
            </p>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              Research & Technical Skills
            </h2>

            <p className="leading-7 text-slate-600">
              My technical experience spans nanomaterial synthesis,
              characterization, scientific data analysis, and computational
              tools supporting research in magnetic nanomaterials and
              biomedical applications.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {technicalSkills.map((category, index) => (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#377697] to-[#5df8d9]" />

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#03395d]/5 text-sm font-bold text-[#377697] transition group-hover:bg-[#03395d] group-hover:text-[#5df8d9]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-[#03395d]">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {category.skills.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#6fd2d8]/40 bg-[#03395d]/5 px-3 py-1.5 text-xs font-medium text-[#377697]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="text-xs italic text-slate-400">
                      Additional techniques developed through doctoral
                      research and laboratory training.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL MEMBERSHIPS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
              Professional Engagement
            </p>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              Professional Memberships
            </h2>

            <p className="leading-7 text-slate-600">
              Engagement with scientific organizations and academic platforms
              that support research communication, collaboration, and
              professional development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {memberships.map((membership, index) => (
              <div
                key={membership}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#03395d]/5 text-sm font-bold text-[#377697] group-hover:bg-[#03395d] group-hover:text-[#5df8d9]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="text-sm font-semibold text-slate-700">
                  {membership}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ====================================================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
                Leadership & Service
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
                Leadership beyond research
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Experiences outside the laboratory have helped strengthen my
                communication, organization, teamwork, and leadership skills.
              </p>
            </div>

            <div className="relative border-l-2 border-[#6fd2d8]/40 pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#377697]" />

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:border-[#6fd2d8] hover:shadow-lg">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#03395d]/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#377697]">
                    3 Years
                  </span>

                  <span className="font-mono text-xs text-slate-400">
                    Leadership
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#03395d]">
                  Media Team Leader
                </h3>

                <p className="mt-2 text-sm font-medium text-[#377697]">
                  Jesus With Us Church · Karungal, Tamil Nadu, India
                </p>

                <p className="mt-5 leading-7 text-slate-600">
                  Served as a Media Team Leader for three years, planning
                  meetings, coordinating activities, and mentoring team
                  members. This experience strengthened my leadership,
                  communication, decision-making, and organizational skills
                  while teaching me how to manage multiple responsibilities in
                  collaborative environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BEYOND RESEARCH
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20 md:py-24">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#5df8d9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#377697]">
              Beyond Research
            </p>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#03395d] md:text-4xl">
              Interests beyond the laboratory
            </h2>

            <p className="leading-7 text-slate-600">
              Research is only one part of my journey. Sports, photography,
              and media production have played an important role in developing
              creativity, discipline, teamwork, and communication.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Sports */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#03395d]/5 text-[#377697]">
                  <span className="text-xl">01</span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Sports
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-[#03395d]">
                Sports & Teamwork
              </h3>

              <p className="leading-7 text-slate-600">
                Sports have always been an important part of my life. I
                represented both my college and club handball teams for nearly
                four years, competing at the state level. These experiences
                taught me teamwork, resilience, discipline, and perseverance.
                I continue to stay active by playing badminton, which helps
                maintain physical fitness and mental well-being.
              </p>
            </div>

            {/* Photography */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6fd2d8] hover:shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#03395d]/5 text-[#377697]">
                  <span className="text-xl">02</span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Creative Work
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-[#03395d]">
                Photography & Media
              </h3>

              <p className="leading-7 text-slate-600">
                Photography is one of my favorite creative pursuits. For more
                than six years, I have been involved in photography,
                videography, and live media production at Jesus With Us
                Church, Karungal, Tamil Nadu, India.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Through this experience, I have developed skills in visual
                storytelling, DSLR camera operation, live streaming,
                multimedia production, and event documentation. Photography
                has strengthened my creativity, attention to detail, and
                ability to observe the world from different perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
      ====================================================== */}
      <section className="border-t border-slate-200 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-br from-[#03395d] to-[#377697] px-7 py-10 text-white shadow-xl md:px-12 md:py-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6fd2d8]">
              A Broader Perspective
            </p>

            <h2 className="max-w-3xl text-2xl font-bold md:text-3xl">
              Combining scientific curiosity with creativity, teamwork, and
              continuous learning.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">
              My experiences across research, leadership, sports, and creative
              work continue to shape the way I approach scientific problems,
              collaboration, and personal growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

