import { Analytics } from "@vercel/analytics/next";
import Layout from "../components/Layout";
import "../styles/globals.css";

export const metadata = {
  title: "Whatson Gambia - Culture, News & Lifestyle",
  description:
    "Discover the latest news, culture, tourism and lifestyle stories from The Gambia.",
  openGraph: {
    title: "Whatson Gambia - Culture, News & Lifestyle",
    description:
      "Discover the latest news, culture, tourism and lifestyle stories from The Gambia.",
    url: "https://whatson-gambia.vercel.app",
    siteName: "Whatson Gambia",
    images: [
      {
        url: "https://whatson-gambia.vercel.app/og-image.png", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "Whatson Gambia",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatson Gambia",
    description: "Discover the latest updates from The Gambia.",
    images: ["https://whatson-gambia.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
