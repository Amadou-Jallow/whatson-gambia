"use client";
import { useState } from "react";
import ContentGrid from "./ContentGrid";

export default function Pagination({
  items,
  itemsPerPage = 6,
  basePath,
  title,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const pagedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <ContentGrid title={title} items={pagedItems} basePath={basePath} />

      <div className="flex justify-center mt-8 space-x-2 flex-wrap">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded ${
            currentPage === 1
              ? "bg-border text-text/50 cursor-not-allowed"
              : "bg-surface text-text hover:bg-primary hover:text-white"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-2 py-1 rounded ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-surface text-text hover:bg-primary hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 rounded ${
            currentPage === totalPages
              ? "bg-border text-text/50 cursor-not-allowed"
              : "bg-surface text-text hover:bg-primary hover:text-white"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
}
