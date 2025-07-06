import { Analytics } from "@vercel/analytics/next";
import Layout from "../components/Layout";
import "../styles/globals.css";

export const metadata = {
  title: "Whatson Gambia - Culture, News & Lifestyle",
  description:
    "Discover the latest news, culture, tourism and lifestyle stories from The Gambia.",
  openGraph: {
    title: "Whatson Gambia",
    description: "Your go-to source for Gambian culture, news and lifestyle.",
    url: "https://whatson-gambia.com",
    siteName: "Whatson Gambia",
    images: [
      {
        url: "https://source.unsplash.com/featured/?gambia",
        width: 800,
        height: 600,
        alt: "Whatson Gambia",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatson Gambia",
    description: "Your go-to source for Gambian culture, news and lifestyle.",
    images: ["https://source.unsplash.com/featured/?gambia"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" }, // ✅ this line
    ],
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
