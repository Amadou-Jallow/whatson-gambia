import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import NewsSection from "../components/NewsSection";
import TourismSection from "../components/TourismSection";
import NewsletterSignup from "../components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <NewsSection />
      <TourismSection />
      <NewsletterSignup />
    </>
  );
}
