import SubHero from "../../components/SubHero";
import { exclusiveItems } from "../../data/exclusive";
import Pagination from "../../components/Pagination";

export default function ExclusivePage() {
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen">
      <SubHero title="Exclusive" breadcrumb="Home / Exclusive" />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Pagination
          items={exclusiveItems}
          itemsPerPage={6}
          basePath="/exclusive"
          title="Culture. Fashion. Everyday Vibes."
        />
      </section>
    </main>
  );
}
