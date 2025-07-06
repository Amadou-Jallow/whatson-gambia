"use client";
import { useState, useEffect } from "react";

export default function ArchivePagination({
  items = [],
  itemsPerPage = 6,
  renderItem,
  resetTrigger = [],
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [...resetTrigger]);

  return (
    <div>
      {paginatedItems.map(renderItem)}

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
              onClick={() => setCurrentPage(i + 1)}
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
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className={`px-2 py-1 rounded ${
              currentPage === totalPages
                ? "bg-border text-text/50 cursor-not-allowed"
                : "bg-surface text-text hover:bg-primary hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
