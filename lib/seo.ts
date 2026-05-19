import type { Metadata } from "next";
import { Locale } from "@/lib/types";
import { siteConfig } from "@/lib/site-data";

function buildLocalePath(locale: Locale, slug = "") {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function buildPageMetadata({
  locale,
  title,
  description,
  keywords,
  slug = "",
  image = siteConfig.defaultOgImage
}: {
  locale: Locale;
  title: string;
  description: string;
  keywords?: string[];
  slug?: string;
  image?: string;
}): Metadata {
  const path = buildLocalePath(locale, slug);
  const siblingPath = slug ? `/${slug}` : "";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: {
        "zh-CN": `/zh${siblingPath}`,
        en: `/en${siblingPath}`
      }
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.brand,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.brand} ${title}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
