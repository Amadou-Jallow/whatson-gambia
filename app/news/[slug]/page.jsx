import { newsItems } from "../../../data/newsItems";
import ContentDetail from "../../../components/ContentDetail";

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default async function NewsArticle({ params }) {
  const { slug } = await params;

  const item = newsItems.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <p className="p-8 text-primary font-semibold bg-background-light dark:bg-background-dark">
        Article not found
      </p>
    );
  }

  return <ContentDetail item={item} section="News" />;
}
