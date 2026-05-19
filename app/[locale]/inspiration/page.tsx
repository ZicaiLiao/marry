import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent, siteConfig } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

type InspirationPageProps = {
  params: {
    locale: string;
  };
};

export function generateMetadata({ params }: InspirationPageProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const content = getLocaleContent(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    slug: "inspiration",
    title: content.pageMeta.inspiration.title,
    description: content.pageMeta.inspiration.description,
    keywords: content.pageMeta.inspiration.keywords,
    image: "/images/hero-detail.jpg"
  });
}

export default function InspirationPage({ params }: InspirationPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.pageMeta.inspiration.title,
    description: content.pageMeta.inspiration.description,
    url: `${siteConfig.siteUrl}/${params.locale}/inspiration`,
    inLanguage: params.locale
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <section className="container page-intro">
        <span className="page-intro__eyebrow">{content.inspirationPage.eyebrow}</span>
        <h1 className="page-intro__title">{content.inspirationPage.title}</h1>
        <p className="page-intro__body">{content.inspirationPage.body}</p>
      </section>

      <section className="container section">
        <div className="mosaic-layout">
          <article className="mosaic-card mosaic-card--tall" />
          <div className="mosaic-stack">
            <article className="mosaic-card mosaic-card--short" />
            <article className="mosaic-card mosaic-card--short" />
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="list-grid">
          {content.inspirationPage.themes.map((theme) => (
            <article key={theme.title} className="list-card">
              <span className="eyebrow">{content.inspirationPage.eyebrow}</span>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
