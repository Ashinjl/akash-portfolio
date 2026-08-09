import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#377697]/20 bg-[#03395d] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* About */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6fd2d8]/10 ring-1 ring-[#6fd2d8]/20">
                <span className="text-lg font-semibold text-[#5df8d9]">
                  A
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold tracking-tight text-white">
                  Akash Marsalin
                </h4>

                <p className="text-xs uppercase tracking-[0.16em] text-[#6fd2d8]">
                  Ph.D. Research Scholar
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Ph.D. Research Scholar
              <br />
              Department of Physics and Nanotechnology
              <br />
              SRM Institute of Science and Technology (SRMIST)
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#6fd2d8]">
              Quick Links
            </h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <li>
                <Link
                  href="/research"
                  className="text-white/65 transition hover:text-[#5df8d9]"
                >
                  Research
                </Link>
              </li>

              <li>
                <Link
                  href="/publications"
                  className="text-white/65 transition hover:text-[#5df8d9]"
                >
                  Publications
                </Link>
              </li>

              <li>
                <Link
                  href="/conference-awards"
                  className="text-white/65 transition hover:text-[#5df8d9]"
                >
                  Conferences & Awards
                </Link>
              </li>

              <li>
                <Link
                  href="/skills-experience"
                  className="text-white/65 transition hover:text-[#5df8d9]"
                >
                  Skills & Experience
                </Link>
              </li>

              <li>
                <Link
                  href="/news"
                  className="text-white/65 transition hover:text-[#5df8d9]"
                >
                  News & Updates
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/65 transition hover:text-[#5df8d9]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#6fd2d8]">
              Get in Touch
            </h4>

            <div className="space-y-3 text-sm">

              <p className="leading-6 text-white/65">
                <span className="font-medium text-white/85">
                  Email
                </span>
                <br />

                <a
                  href="mailto:am2025@srmist.edu.in"
                  className="transition hover:text-[#5df8d9]"
                >
                  am2025@srmist.edu.in
                </a>
              </p>

              <p>
                <a
                  href="mailto:akashsamuel01@gmail.com"
                  className="text-white/65 transition hover:text-[#5df8d9]"
                >
                  akashsamuel01@gmail.com
                </a>
              </p>

              <p className="text-white/65">
                Chengalpattu, Tamil Nadu, India
              </p>

              <p className="pt-2 text-white/65">
                <span className="font-medium text-white/85">
                  ORCID
                </span>{" "}
                0009-0002-7574-391X
              </p>

            </div>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Akash Marsalin. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5df8d9]" />
            <span className="text-xs tracking-wide text-white/45">
              Nanomaterials · Biomedical Research · Cancer Theranostics
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

