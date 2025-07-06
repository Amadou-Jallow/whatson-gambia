import SubHero from "../../components/SubHero";
import Pagination from "../../components/Pagination";
import { newsItems } from "../../data/newsItems";

export default function NewsPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen">
      <SubHero title="News" breadcrumb="Home / News" />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Pagination
          items={newsItems}
          itemsPerPage={6}
          basePath="/lifestyle"
          title="Culture. Fashion. Everyday Vibes."
        />
      </section>
    </main>
  );
}
