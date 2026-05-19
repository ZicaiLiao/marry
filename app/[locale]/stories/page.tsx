import { SectionHeader } from "@/components/section-header";
import { StoryCard } from "@/components/story-card";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent } from "@/lib/site-data";

type StoriesPageProps = {
  params: {
    locale: string;
  };
};

export default function StoriesPage({ params }: StoriesPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);

  return (
    <>
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
