import { newsItems } from "../../data/newsItems";
import Image from "next/image";
import Link from "next/link";
import SubHero from "../../components/SubHero";

export default function FeaturedPage() {
  const featured = newsItems.filter((item) => item.featured);

  return (
    <>
      <SubHero title="Featured Stories" breadcrumb="Featured" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, idx) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="block bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute top-2 left-2 bg-primary text-text-light text-xs font-semibold px-2 py-1 rounded">
                  Featured
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
                  {item.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
