import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-background-light dark:bg-background-dark overflow-hidden">
      <svg
        className="absolute top-10 left-0 w-full opacity-20 z-0"
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

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-text-light dark:text-text-dark sm:text-5xl">
          Discover The Heartbeat of Gambia
        </h1>
        <p className="mt-4 text-lg text-text-light dark:text-text-dark">
          Your daily guide to news, culture, and travel in The Gambia.
        </p>
        <Button href="/news-archive" className="mt-8">
          Explore News
        </Button>
      </div>
    </section>
  );
}
