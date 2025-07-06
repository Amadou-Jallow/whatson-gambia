import { tourismItems } from "../../../data/tourism";
import ContentDetail from "../../../components/ContentDetail";

export async function generateStaticParams() {
  return tourismItems.map((item) => ({ slug: item.slug }));
}

export default async function TourismArticle({ params }) {
  const { slug } = await params;

  const item = tourismItems.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <p className="p-8 text-primary font-semibold bg-background-light dark:bg-background-dark">
        Article not found
      </p>
    );
  }

  return <ContentDetail item={item} section="Tourism" />;
}
