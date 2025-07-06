import { exclusiveItems } from "../../../data/exclusive";
import ContentDetail from "../../../components/ContentDetail";

export async function generateStaticParams() {
  return exclusiveItems.map((item) => ({ slug: item.slug }));
}

export default async function ExclusiveArticle({ params }) {
  const { slug } = await params;

  const item = exclusiveItems.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <p className="p-8 text-primary font-semibold bg-background-light dark:bg-background-dark">
        Article not found
      </p>
    );
  }

  return <ContentDetail item={item} section="Exclusive" />;
}
