import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="WhatsOn Gambia Logo"
              width={140}
              height={40}
              className="object-contain mx-auto sm:mx-0"
              priority
            />
          </Link>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="flex space-x-4 max-md:justify-center">
            <li>
              <Link
                href="/about"
                className="hover:text-primary dark:hover:text-primary-dark"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary dark:hover:text-primary-dark"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <div className="space-x-4">
            <Link
              href="https://facebook.com/whatson-gambia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary-dark"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com/whatson-gambia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary-dark"
            >
              Twitter
            </Link>
            <Link
              href="https://instagram.com/whatson-gambia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary-dark"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        © {new Date().getFullYear()} What's On Gambia. All rights reserved.
      </div>
    </footer>
  );
}
