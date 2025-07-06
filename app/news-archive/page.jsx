"use client";
import Link from "next/link";
import { newsItems } from "../../data/newsItems";
import SubHero from "../../components/SubHero";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import ArchivePagination from "../../components/ArchivePagination";

export default function NewsArchive() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("all");

  const years = [
    ...new Set(newsItems.map((item) => new Date(item.date).getFullYear())),
  ];

  const filteredNews = newsItems.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchYear =
      year === "all" || new Date(item.date).getFullYear().toString() === year;
    return matchSearch && matchYear;
  });

  return (
    <>
      <SubHero title="News Archive" breadcrumb="Archive" />

      <main className="max-w-5xl mx-auto p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="relative w-full sm:w-1/2">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light dark:text-text-dark"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border-light rounded-md dark:bg-background-dark dark:text-text-dark dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-focus-primary"
            />
          </div>

          <div className="relative w-full sm:w-40">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="appearance-none w-full px-4 py-2 border border-border-light rounded-md dark:bg-background-dark dark:text-text-dark dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-focus-primary"
            >
              <option value="all">All Years</option>
              {years
                .sort((a, b) => b - a)
                .map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-light dark:text-text-dark pointer-events-none"
              size={18}
            />
          </div>
        </div>

        {filteredNews.length === 0 ? (
          <p className="text-text-light dark:text-text-dark">No news found.</p>
        ) : (
          <ArchivePagination
            items={filteredNews}
            itemsPerPage={6}
            resetTrigger={[search, year]}
            renderItem={({ id, title, date, slug }) => (
              <li
                key={id}
                className="py-5 list-none border-b border-border-light dark:border-border-dark"
              >
                <Link
                  href={`/news/${slug}`}
                  className="block text-lg font-semibold text-text-light dark:text-text-dark hover:underline"
                >
                  {title}
                </Link>
                <time className="block text-sm text-text-light/70 dark:text-text-dark/70">
                  {new Date(date).toLocaleDateString()}
                </time>
              </li>
            )}
          />
        )}
      </main>
    </>
  );
}
