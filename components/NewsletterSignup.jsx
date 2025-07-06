import Button from "./Button";

export default function NewsletterSignup() {
  return (
    <section className="bg-primary/10 dark:bg-background-dark py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">
          Stay in the Loop!
        </h2>
        <p className="text-text-light/70 dark:text-text-dark/70 mb-6">
          Subscribe to get the latest news, culture, and events in The Gambia.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark"
          />
          <Button className="px-6 py-2" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
