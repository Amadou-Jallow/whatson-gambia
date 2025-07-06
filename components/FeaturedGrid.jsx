import ContentGrid from "./ContentGrid";
import Image from "next/image";

export default function FeaturedGrid(props) {
  return (
    <ContentGrid
      {...props}
      renderCard={(item) => (
        <div className="relative bg-surface-light dark:bg-surface-dark rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <span className="absolute top-2 left-2 bg-primary text-black text-xs font-bold px-2 py-1 rounded shadow-lg z-10 select-none pointer-events-none">
            FEATURED
          </span>

          <div className="relative w-full h-48">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>
          <div className="p-4">
            {item.date && (
              <time className="text-sm text-text-light dark:text-text-dark">
                {item.date}
              </time>
            )}
            <h3 className="mt-2 text-lg font-semibold text-text-light dark:text-text-dark">
              {item.title}
            </h3>
            {item.summary && (
              <p className="mt-2 text-text-light dark:text-text-dark text-sm">
                {item.summary}
              </p>
            )}
          </div>
        </div>
      )}
    />
  );
}
