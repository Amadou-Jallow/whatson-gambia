import SubHero from "../../components/SubHero";
import Image from "next/image";

export default function About() {
  const team = [
    { name: "Awa Jobe", role: "Editor-in-Chief", img: "/team/awa.jpg" },
    { name: "Modou Sillah", role: "Senior Reporter", img: "/team/modou.jpg" },
    { name: "Fatou Touray", role: "Lifestyle Editor", img: "/team/fatou.jpg" },
  ];

  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen">
      <SubHero title="About Us" breadcrumb="Home / About" />

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-text-light dark:text-text-dark mb-6">
          Who We Are
        </h1>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
          What's On Gambia is your premier source for authentic Gambian culture,
          lifestyle, tourism, and news. We celebrate the vibrant spirit and rich
          heritage of The Gambia, bringing stories that inspire and connect our
          community locally and internationally.
        </p>

        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-4">
            Our Mission
          </h2>
          <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
            To inform, entertain, and unite Gambians and friends of The Gambia
            by sharing compelling stories, cultural insights, and trusted news,
            while promoting the beauty and potential of our beloved nation.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
              Integrity
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We prioritize honesty and accuracy in every story we tell.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
              Community
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70">
              Building a connected Gambian community through shared experiences.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
              Innovation
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70">
              Embracing new media and ideas to stay relevant and engaging.
            </p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Meet The Team
          </h2>
          <p className="text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed max-w-xl">
            Our team of passionate writers, editors, and creators are dedicated
            to showcasing the best of Gambian life and culture every single day.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map(({ name, role, img }) => (
              <div
                key={name}
                className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6 text-center"
              >
                <div className="relative mx-auto mb-4 w-28 h-28 rounded-full overflow-hidden">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    sizes="112px"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
                  {name}
                </h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
