import SubHero from "../../components/SubHero";
import Pagination from "../../components/Pagination";
import { lifestyleItems } from "../../data/lifestyle";

export default function LifestylePage() {
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen">
      <SubHero title="Lifestyle" breadcrumb="Home / Lifestyle" />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Pagination
          items={lifestyleItems}
          itemsPerPage={6}
          basePath="/lifestyle"
          title="Culture. Fashion. Everyday Vibes."
        />
      </section>
    </main>
  );
}
