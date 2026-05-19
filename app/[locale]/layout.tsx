import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { isLocale, locales } from "@/lib/i18n";
import { getLocaleContent } from "@/lib/site-data";
import { Locale } from "@/lib/types";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocaleLayoutProps): Promise<Metadata> {
  const locale = params.locale;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getLocaleContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      languages: {
        "zh-CN": "/zh",
        en: "/en"
      }
    }
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getLocaleContent(locale as Locale);

  return <SiteShell locale={locale as Locale} content={content}>{children}</SiteShell>;
}
