import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Akash Research Group
          </h4>
          <p className="text-gray-600 text-sm">
            Exploring data science, AI, and computational research to build
            real-world impact.
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
              <Link href="/blogs" className="hover:text-gray-900">
                Blogs
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
          <p className="text-gray-600 text-sm mb-2">
            <strong>Email:</strong> akashgroup@example.com
          </p>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Akash Research Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
