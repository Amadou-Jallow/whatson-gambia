import { tourismItems } from "../data/tourism";
import ContentGrid from "./ContentGrid";

export default function TourismSection() {
  const spotsToShow = tourismItems.slice(0, 3);

  return (
    <section className="py-12 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">
          Tourism & Travel
        </h2>
        <ContentGrid items={spotsToShow} basePath="/tourism" />
      </div>
    </section>
  );
}
