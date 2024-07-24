import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kishor Ramanan T | AI & ML Enthusiast | SIST",
  description: "Explore the portfolio of Kishor Ramanan, showcasing early projects and potential for growth in AI and ML.",
  authors: [{name: "Kishor Ramanan", url: "https://kishorramanan.com"}],
  keywords: [
    "Kishor Ramanan portfolio",
    "AI projects", 
    "ML projects",
    "projects", 
    "showcase", 
    "portfolio", 
    "developer",
    "developer portfolio",
    "AI ML developer",
    "natural language processing",
    "computer vision",
    "data analysis",
  ],
  creator: "Kishor Ramanan",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kishorramanan.com",
    title: "Kishor Ramanan T | AI & ML Enthusiast | SIST",
    description: "Explore the portfolio of Kishor Ramanan, showcasing early projects and potential for growth in AI and ML.",
    siteName: "Kishor Ramanan T | AI & ML Enthusiast | SIST",
    images: [
      {
        url: "https://kishorramanan.com/k1sh0r.jpg",
        width: 1200,
        height: 630,
        alt: "Kishor Ramanan's Portfolio"
      }
    ]
  },
  twitter: {
    title: "Kishor Ramanan T | AI & ML Enthusiast | SIST",
    description: "Explore the portfolio of Kishor Ramanan, showcasing early projects and potential for growth in AI and ML.",
    card: "summary_large_image",
    site: "@Kishor1445",
    creator: "@Kishor1445",
    images: [
      {
        url: "https://kishorramanan.com/k1sh0r.jpg",
        width: 1200,
        height: 630,
        alt: "Kishor Ramanan's Portfolio"
      }
    ]
  },
  verification: {
    google: "BFy0BaRnN0vs70nzTUFq19M6VH3aQDpH25mbxzP752k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kishor Ramanan",
    "url": "https://kishorramanan.com",
    "image": "https://kishorramanan.com/k1sh0r.jpg",
    "jobTitle": "AI & ML Enthusiast",
    "sameAs": [
      "https://www.linkedin.com/in/kishor1445",
      "https://github.com/kishor1445",
      "https://twitter.com/Kishor1445",
      "https://www.youtube.com/channel/UC7D_DDumfbanMD9DkY7a9xA",
    ]
  };
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kishorramanan.com" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
