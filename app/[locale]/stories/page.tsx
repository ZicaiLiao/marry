import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { StoryCard } from "@/components/story-card";
import { StructuredData } from "@/components/structured-data";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent, siteConfig } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

type StoriesPageProps = {
  params: {
    locale: string;
  };
};

export function generateMetadata({ params }: StoriesPageProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const content = getLocaleContent(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    slug: "stories",
    title: content.pageMeta.stories.title,
    description: content.pageMeta.stories.description,
    keywords: content.pageMeta.stories.keywords,
    image: "/images/story-cover.jpg"
  });
}

export default function StoriesPage({ params }: StoriesPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.pageMeta.stories.title,
    description: content.pageMeta.stories.description,
    url: `${siteConfig.siteUrl}/${params.locale}/stories`,
    inLanguage: params.locale
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <section className="container page-intro">
        <span className="page-intro__eyebrow">{content.storiesPage.eyebrow}</span>
        <h1 className="page-intro__title">{content.storiesPage.title}</h1>
        <p className="page-intro__body">{content.storiesPage.body}</p>
      </section>

      <section className="container section">
        <article className="story-spotlight">
          <div className="story-spotlight__media" />
          <div className="story-spotlight__content">
            <span className="eyebrow">{content.storiesPage.spotlightEyebrow}</span>
            <h2 className="section-header__title">{content.storiesPage.spotlightTitle}</h2>
            <p>{content.storiesPage.spotlightBody}</p>
          </div>
        </article>
      </section>

      <section className="container section">
        <SectionHeader
          eyebrow={content.home.featuredStories.eyebrow}
          title={content.home.featuredStories.title}
          body={content.home.featuredStories.body}
        />
        <div className="story-grid">
          {content.stories.map((story) => (
            <StoryCard
              key={story.title}
              story={story}
              href={`/${params.locale}/about`}
              linkLabel={params.locale === "zh" ? "继续了解" : "Continue"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
