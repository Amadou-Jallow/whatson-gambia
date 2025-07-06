"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Exclusive", href: "/exclusive" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "Tourism", href: "/tourism" },
    { name: "Advertising", href: "/advertising" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/" || href === "/news-archive") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-surface-light dark:bg-surface-dark shadow-md sticky top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center w-20 h-8">
          <Image
            src="/logo.png"
            alt="What's On Gambia Logo"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm hover:font-bold transition-all ease-in-out ${
                isActive(link.href)
                  ? "text-primary font-bold"
                  : "text-text-light hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-text-light dark:text-text-dark"
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-sm hover:font-bold transition-all ease-in-out ${
                isActive(link.href)
                  ? "text-primary font-bold"
                  : "text-text-light hover:text-primary"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
