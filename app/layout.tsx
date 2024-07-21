import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K1SH0R",
  description: "Passionate about AI & ML, eager to make a difference. Explore my portfolio showcasing early projects and potential for growth.",
  applicationName: "K1SH0R Portfolio",
  authors: {name: "Kishor Ramanan", url: "https://kishorramanan.com"},
  keywords: ["kishor ramanan's portfolio", "projects", "showcase", "personal website", "developer portfolio", "ai ml"],
  creator: "Kishor Ramanan",
  robots: {
    index: true,
    follow: true
  },
  generator: "redacted",
  publisher: "redacted",
  openGraph: {
    type: "website",
    url: "kishorramanan.com",
    title: "K1SH0R's Portfolio",
    description: "Passionate about AI & ML, eager to make a difference. Explore my portfolio showcasing early projects and potential for growth.",
    siteName: "K1SH0R",
    images: {
      url: "https://kishorramanan.com/k1sh0r.jpg"
    }
  },
  twitter: {
    title: "K1SH0R's Portfolio",
    description: "Passionate about AI & ML, eager to make a difference. Explore my portfolio showcasing early projects and potential for growth.",
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://kishorramanan.com/k1sh0r.jpg"
  },
  verification: {
    google: "BFy0BaRnN0vs70nzTUFq19M6VH3aQDpH25mbxzP752k",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
