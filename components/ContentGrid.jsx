import Image from "next/image";
import Link from "next/link";

export default function ContentGrid({ title, items, basePath, renderCard }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {title && (
        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8">
          {title}
        </h2>
      )}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`${basePath}/${item.slug}`}
            className="group block"
          >
            {renderCard ? (
              renderCard(item)
            ) : (
              <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="p-4">
                  {item.date && (
                    <time className="text-sm text-text-light dark:text-text-dark">
                      {item.date}
                    </time>
                  )}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-text-light dark:text-text-dark line-clamp-2">
                      {item.title}
                    </h3>
                    {item.trending && (
                      <span className="inline-block text-xs bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300 px-3 py-1 rounded-full whitespace-nowrap">
                        Trending
                      </span>
                    )}
                  </div>
                  {item.summary && (
                    <p className="mt-2 text-text-light dark:text-text-dark text-sm">
                      {item.summary}
                    </p>
                  )}
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
