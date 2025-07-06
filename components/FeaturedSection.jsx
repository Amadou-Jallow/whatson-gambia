import Link from "next/link";
import { newsItems } from "../data/newsItems";
import FeaturedGrid from "../components/FeaturedGrid";

export default function FeaturedSection() {
  const featured = newsItems.filter((item) => item.featured).slice(0, 3);

  return (
    <section className="py-12 bg-surface-light dark:bg-surface-dark z-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Featured Stories
          </h2>
          <Link
            href="/featured"
            className="text-sm font-medium text-text-light dark:text-text-dark hover:underline"
          >
            View All
          </Link>
        </div>
        <FeaturedGrid items={featured} basePath="/news" />
      </div>
    </section>
  );
}
