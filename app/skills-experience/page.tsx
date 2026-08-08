export const metadata = {
  title: "Skills & Experience | Akash Research Group",
  description:
    "Technical skills, professional memberships, leadership experience, and activities beyond research.",
};

const technicalSkills = {
  "Nanomaterial Synthesis": [
    "Hydrothermal Synthesis",
    "Solvothermal Synthesis",
    "Mesocrystal Engineering",
    "Rare-Earth Doping",
    "Surface Functionalization",
  ],
  "Characterization Techniques": [
    "Powder X-Ray Diffraction (XRD)",
    "Field Emission Scanning Electron Microscopy (FESEM)",
    "Transmission Electron Microscopy (TEM)",
    "High-Resolution TEM (HRTEM)",
    "Fourier Transform Infrared Spectroscopy (FTIR)",
    "UV–Visible Spectroscopy",
    "Photoluminescence Spectroscopy",
    "Vibrating Sample Magnetometry (VSM)",
    "Dynamic Light Scattering (DLS)",
    "Zeta Potential Analysis",
  ],
  "Biological & Biomedical Techniques": [
    "Magnetic Hyperthermia Evaluation",
    "Drug Loading and Release Studies",
    "Cell Culture Handling",
    "Cytotoxicity Analysis",
    "Fluorescence Imaging",
  ],
  "Software & Data Analysis": [
    "OriginPro",
    "GSAS-II",
    "FullProf Suite",
    "ImageJ",
    "COMSOL Multiphysics",
    "XPS Peak4",
    "Microsoft Office Suite",
  ],
};

const memberships = [
  "American Physical Society (APS)",
  "American Chemical Society (ACS)",
  "ResearchGate",
  "Google Scholar",
  "ORCID",
];

const workshops = [
  {
    title: "Nanomaterial Synthesis",
    items: technicalSkills["Nanomaterial Synthesis"],
  },
];

export default function SkillsExperiencePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Skills & Experience
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Technical expertise, professional memberships, leadership
          experience, and activities beyond research.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-bold">Technical Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-5 text-xl font-semibold">{category}</h3>

              <ul className="space-y-3 text-gray-600">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">
          Professional Memberships
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {memberships.map((membership) => (
            <div
              key={membership}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center font-medium"
            >
              {membership}
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">Leadership & Service</h2>


        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="mb-2 text-2xl font-semibold">
            Media Team Leader
          </h3>

          <p className="mb-5 text-gray-500">
            Jesus With Us Church, Karungal, Tamil Nadu, India
          </p>

          <p className="leading-7 text-gray-600">
            Served as a Media Team Leader for three years, planning meetings,
            coordinating, and mentoring team members. This experience
            strengthened my leadership, communication, decision-making, and
            organizational skills while teaching me how to effectively manage
            multiple responsibilities in collaborative environments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 pb-24">
        <h2 className="mb-4 text-3xl font-bold">Beyond Research</h2>


        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-2xl font-semibold">Sports</h3>

            <p className="leading-7 text-gray-600">
              Sports have always been an important part of my life. I
              represented both my college and club handball teams for nearly
              four years, competing at the state level. These experiences
              taught me teamwork, resilience, discipline, and the importance
              of perseverance. Today, I continue to stay active by playing
              badminton, which helps me maintain physical fitness and mental
              well-being.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-2xl font-semibold">
              Photography & Media
            </h3>

            <p className="leading-7 text-gray-600">
              Photography is one of my favorite creative pursuits. For more
              than six years, I have been involved in photography,
              videography, and live media production at Jesus With Us Church,
              Karungal, Tamil Nadu, India.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Through this experience, I have developed skills in visual
              storytelling, DSLR camera operation, live streaming, multimedia
              production, and event documentation. Photography has enhanced my
              creativity, attention to detail, and ability to observe the
              world from different perspectives.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

