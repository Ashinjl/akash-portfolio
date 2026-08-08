import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Akash Marsalin
          </h4>

          <p className="text-gray-600 text-sm leading-6">
            Ph.D. Research Scholar
            <br />
            Department of Physics and Nanotechnology
            <br />
            SRM Institute of Science and Technology (SRMIST)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Quick Links
          </h4>

          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <Link href="/research" className="hover:text-gray-900">
                Research
              </Link>
            </li>

            <li>
              <Link href="/publications" className="hover:text-gray-900">
                Publications
              </Link>
            </li>

            <li>
              <Link
                href="/conference-awards"
                className="hover:text-gray-900"
              >
                Conferences & Awards
              </Link>
            </li>

            <li>
              <Link
                href="/skills-experience"
                className="hover:text-gray-900"
              >
                Skills & Experience
              </Link>
            </li>

            <li>
              <Link href="/news" className="hover:text-gray-900">
                News & Updates
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Get in Touch
          </h4>

          <div className="text-gray-600 text-sm space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:am2025@srmist.edu.in"
                className="hover:text-gray-900 hover:underline"
              >
                am2025@srmist.edu.in
              </a>
            </p>

            <p>
              <a
                href="mailto:akashsamuel01@gmail.com"
                className="hover:text-gray-900 hover:underline"
              >
                akashsamuel01@gmail.com
              </a>
            </p>

            <p>
              Chengalpattu, Tamil Nadu, India
            </p>

            <p className="pt-2">
              ORCID: 0009-0002-7574-391X
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Akash Marsalin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

