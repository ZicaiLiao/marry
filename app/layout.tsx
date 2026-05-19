import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marry.local"),
  title: {
    default: "Marry",
    template: "%s | Marry"
  },
  description:
    "A bilingual wedding-inspired platform for romantic stories, refined planning ideas, and lightweight wedding tools.",
  openGraph: {
    title: "Marry",
    description:
      "A bilingual wedding-inspired platform for romantic stories, refined planning ideas, and lightweight wedding tools.",
    type: "website"
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
