import SubHero from "../../components/SubHero";
import VideoWithFallback from "../../components/VideoWithFallback";
import Button from "../../components/Button";

export default function AdvertisingPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen">
      <SubHero title="Advertise With Us" breadcrumb="Home / Advertising" />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-text-light dark:text-text-dark mb-4">
            Boost Your Brand with Whatson-Gambia
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-light/80 dark:text-text-dark/80 leading-relaxed">
            Looking to reach a vibrant, youthful, and digital-savvy audience?
            Whatson-Gambia is the country’s most visited entertainment and
            lifestyle website. With thousands of readers and a strong social
            media presence, your message won’t go unnoticed.
          </p>
        </header>

        <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg mb-16">
          <VideoWithFallback className="w-full h-[360px] sm:h-[480px]" />
        </div>

        <section aria-labelledby="features-title" className="mb-20">
          <h3
            id="features-title"
            className="text-3xl font-semibold text-center text-text-light dark:text-text-dark mb-10"
          >
            Why Advertise With Us?
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wide Reach",
                desc: "Reach tens of thousands of monthly readers and social media followers.",
              },
              {
                title: "Youth-Focused",
                desc: "Target young, energetic, trend-conscious Gambians both at home and abroad.",
              },
              {
                title: "Custom Campaigns",
                desc: "We help you craft the right message — banners, social media, shoutouts & more.",
              },
              {
                title: "Affordable Rates",
                desc: "Flexible pricing for startups, SMEs, and established brands alike.",
              },
              {
                title: "Trusted Platform",
                desc: "Our audience trusts us for reliable, entertaining, and community-driven stories.",
              },
              {
                title: "Creative Exposure",
                desc: "We bring creativity to your brand — from visuals to copy and reach.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-md p-6 border border-border-light dark:border-border-dark hover:shadow-xl transition transform hover:scale-[1.03]"
              >
                <h4 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                  {feature.title}
                </h4>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary dark:bg-primary-dark rounded-xl p-10 text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="text-3xl font-bold text-background-dark dark:text-background-dark mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-background-dark mb-6">
            Email us today to learn more about pricing, packages, and how we can
            help grow your brand.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            className="text-primary dark:text-primary-dark"
          >
            Contact Us
          </Button>
        </section>
      </section>
    </main>
  );
}
