import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#377697]/20 bg-[#03395d] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-10">

          {/* =================================================
              ABOUT
          ================================================== */}
          <div className="min-w-0">

            <div className="mb-4 flex items-center gap-3 sm:mb-5">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#6fd2d8]/10 ring-1 ring-[#6fd2d8]/20 sm:h-10 sm:w-10">

                <span className="text-base font-semibold text-[#5df8d9] sm:text-lg">
                  AM
                </span>

              </div>


              <div className="min-w-0">

                <h4 className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">
                  Akash Marsalin
                </h4>

                <p className="text-[10px] uppercase tracking-[0.14em] text-[#6fd2d8] sm:text-xs sm:tracking-[0.16em]">
                  Ph.D. Research Scholar
                </p>

              </div>

            </div>


            <p className="max-w-sm text-sm leading-6 text-white/65 sm:leading-7">
              Ph.D. Research Scholar
              <br />
              Department of Physics and Nanotechnology
              <br />
              SRM Institute of Science and Technology (SRMIST)
            </p>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>

            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#6fd2d8] sm:mb-5 sm:text-sm">
              Quick Links
            </h4>


            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm sm:gap-x-6 sm:gap-y-3">

              <li>
                <Link
                  href="/research"
                  className="inline-block text-white/65 transition hover:text-[#5df8d9]"
                >
                  Research
                </Link>
              </li>


              <li>
                <Link
                  href="/publications"
                  className="inline-block text-white/65 transition hover:text-[#5df8d9]"
                >
                  Publications
                </Link>
              </li>


              <li>
                <Link
                  href="/conference-awards"
                  className="inline-block text-white/65 transition hover:text-[#5df8d9]"
                >
                  Conferences & Awards
                </Link>
              </li>


              <li>
                <Link
                  href="/skills-experience"
                  className="inline-block text-white/65 transition hover:text-[#5df8d9]"
                >
                  Skills & Experience
                </Link>
              </li>


              <li>
                <Link
                  href="/news"
                  className="inline-block text-white/65 transition hover:text-[#5df8d9]"
                >
                  News & Updates
                </Link>
              </li>


              <li>
                <Link
                  href="/contact"
                  className="inline-block text-white/65 transition hover:text-[#5df8d9]"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}
          <div className="min-w-0">

            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#6fd2d8] sm:mb-5 sm:text-sm">
              Get in Touch
            </h4>


            <div className="space-y-3 text-sm">

              {/* University email */}
              <div className="min-w-0">

                <span className="font-medium text-white/85">
                  Email
                </span>

                <a
                  href="mailto:am2025@srmist.edu.in"
                  className="mt-1 block break-all text-white/65 transition hover:text-[#5df8d9]"
                >
                  am2025@srmist.edu.in
                </a>

              </div>


              {/* Personal email */}
              <a
                href="mailto:akashsamuel01@gmail.com"
                className="block break-all text-white/65 transition hover:text-[#5df8d9]"
              >
                akashsamuel01@gmail.com
              </a>


              {/* Location */}
              <p className="text-white/65">
                Chengalpattu, Tamil Nadu, India
              </p>


              {/* ORCID */}
              <p className="pt-1 text-white/65 sm:pt-2">

                <span className="font-medium text-white/85">
                  ORCID
                </span>{" "}

                <span className="break-all">
                  0009-0002-7574-391X
                </span>

              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6 md:flex-row md:items-center md:justify-between md:gap-6">

          {/* Copyright */}
          <p className="text-xs leading-5 text-white/45">
            &copy; {new Date().getFullYear()} Akash Marsalin.
            <span className="hidden sm:inline">
              {" "}All rights reserved.
            </span>
            <span className="sm:hidden">
              {" "}All rights reserved.
            </span>
          </p>


          {/* Research areas */}
          <div className="flex max-w-full items-start gap-2 sm:items-center">

            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5df8d9] sm:mt-0" />

            <span className="text-xs leading-5 tracking-wide text-white/45">
              Nanomaterials · Biomedical Research · Cancer Theranostics
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}