"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubHero({ title }) {
  const pathname = usePathname();
  const page = pathname.replace("/", "");

  return (
    <section className="relative bg-surface-light dark:bg-surface-dark py-5 px-6 overflow-hidden z-0 shadow">
      <svg
        className="absolute top-0 left-0 w-full opacity-5 z-0"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
          fill="#CE1126"
        />
        <path
          d="M0,75 C360,135 1080,15 1440,75 L1440,120 L0,120 Z"
          fill="#FFFFFF"
        />
        <path
          d="M0,90 C360,150 1080,30 1440,90 L1440,120 L0,120 Z"
          fill="#0033A0"
        />
        <path
          d="M0,105 C360,165 1080,45 1440,105 L1440,120 L0,120 Z"
          fill="#FFFFFF"
        />
        <path
          d="M0,120 C360,180 1080,60 1440,120 L1440,120 L0,120 Z"
          fill="#3A7728"
        />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark">
          {title}
        </h1>
        <nav className="text-sm mb-3 text-text-light dark:text-text-dark mt-5">
          <Link href="/" className="hover:underline hover:font-semibold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={pathname}
            className="hover:underline hover:font-semibold capitalize"
          >
            {page || "Page"}
          </Link>
        </nav>
      </div>
    </section>
  );
}
