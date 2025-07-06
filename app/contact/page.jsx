"use client";
import Link from "next/link";
import { useState } from "react";
import { MessageSquare, Phone, MapPin } from "lucide-react";
import Button from "../../components/Button";
import SubHero from "../../components/SubHero";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen">
      <SubHero title="Contact Us" />
      <div className="max-w-4xl mx-auto my-20 p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-text-light dark:text-text-dark">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-semibold mb-2 text-text-light dark:text-text-dark"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full p-3 border border-border-light rounded-md shadow-sm dark:bg-background-dark dark:border-border-dark dark:text-text-dark focus:outline-focus-primary focus:ring-2 focus:ring-focus-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-2 text-text-light dark:text-text-dark"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 border border-border-light rounded-md shadow-sm dark:bg-background-dark dark:border-border-dark dark:text-text-dark focus:outline-focus-primary focus:ring-2 focus:ring-focus-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-semibold mb-2 text-text-light dark:text-text-dark"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full p-3 border border-border-light rounded-md shadow-sm dark:bg-background-dark dark:border-border-dark dark:text-text-dark focus:outline-focus-primary focus:ring-2 focus:ring-focus-primary resize-y"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>

          {status && (
            <p className="mt-4 text-primary font-semibold text-center">
              {status}
            </p>
          )}
        </form>

        <section className="mt-16 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">
            Our Contact Info
          </h2>
          <ul className="space-y-4 text-text-light/80 dark:text-text-dark/80 text-lg">
            <li className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-primary" />
              <Link
                href="mailto:media@whatson-gambia.com"
                className="hover:underline"
              >
                media@whatson-gambia.com
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <Link href="tel:+447404798649" className="hover:underline">
                +44 7404 798649
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Banjul, The Gambia</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
