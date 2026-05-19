import type { Metadata } from "next";
import { PlanningTools } from "@/components/planning-tools";
import { StructuredData } from "@/components/structured-data";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent, siteConfig } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

type ToolsPageProps = {
  params: {
    locale: string;
  };
};

export function generateMetadata({ params }: ToolsPageProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const content = getLocaleContent(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    slug: "tools",
    title: content.pageMeta.tools.title,
    description: content.pageMeta.tools.description,
    keywords: content.pageMeta.tools.keywords,
    image: "/images/hero-secondary.jpg"
  });
}

export default function ToolsPage({ params }: ToolsPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.pageMeta.tools.title,
    description: content.pageMeta.tools.description,
    url: `${siteConfig.siteUrl}/${params.locale}/tools`,
    inLanguage: params.locale
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <section className="container page-intro">
        <span className="page-intro__eyebrow">{content.toolsPage.eyebrow}</span>
        <h1 className="page-intro__title">{content.toolsPage.title}</h1>
        <p className="page-intro__body">{content.toolsPage.body}</p>
      </section>

      <PlanningTools
        locale={params.locale}
        content={content.toolsPage}
        checklistGroups={content.checklistGroups}
        budgetItems={content.budgetItems}
        timelineStages={content.timelineStages}
      />
    </>
  );
}
