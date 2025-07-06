import SubHero from "../../components/SubHero";
import { tourismItems } from "../../data/tourism";
import Pagination from "../../components/Pagination";

export default function TourismPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen">
      <SubHero title="Tourism" breadcrumb="Home / Tourism" />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Pagination
          items={tourismItems}
          itemsPerPage={6}
          basePath="/lifestyle"
          title="Culture. Fashion. Everyday Vibes."
        />
      </section>
    </main>
  );
}
