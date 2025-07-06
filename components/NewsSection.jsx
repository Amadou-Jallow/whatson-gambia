import Link from "next/link";
import { newsItems } from "../data/newsItems";
import ContentGrid from "./ContentGrid";

export default function NewsSection() {
  const news = newsItems.slice(0, 3);

  return (
    <section className="py-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Latest News
          </h2>
          <Link
            href="/news-archive"
            className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:underline"
          >
            View Archive
          </Link>
        </div>
        <ContentGrid items={news} basePath="/news" />
      </div>
    </section>
  );
}
