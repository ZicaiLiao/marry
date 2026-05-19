import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Marry",
    template: "%s | Marry"
  },
  description:
    "A bilingual wedding-inspired platform for romantic stories, refined planning ideas, and lightweight wedding tools.",
  applicationName: "Marry",
  authors: [{ name: "Marry" }],
  creator: "Marry",
  publisher: "Marry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Marry",
    description:
      "A bilingual wedding-inspired platform for romantic stories, refined planning ideas, and lightweight wedding tools.",
    type: "website",
    url: siteConfig.siteUrl,
    siteName: "Marry",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Marry wedding platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marry",
    description:
      "A bilingual wedding-inspired platform for romantic stories, refined planning ideas, and lightweight wedding tools.",
    images: [siteConfig.defaultOgImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
