import Image from "next/image";
import SubHero from "./SubHero";

export default function ContentDetail({ item, section }) {
  return (
    <>
      <SubHero title={item.title} breadcrumb={`${section} / ${item.title}`} />

      <main className="max-w-4xl mx-auto p-6">
        {item.date && (
          <time className="block text-sm text-text-light dark:text-text-dark mb-4">
            {new Date(item.date).toLocaleDateString()}
          </time>
        )}

        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </div>

        <article className="prose dark:prose-invert max-w-none text-text-light dark:text-text-dark">
          {item.content.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </main>
    </>
  );
}
