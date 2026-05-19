import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { StoryCard } from "@/components/story-card";
import { ToolPreviewCard } from "@/components/tool-preview-card";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent } from "@/lib/site-data";

type LocalePageProps = {
  params: {
    locale: string;
  };
};

export default function LocaleHomePage({ params }: LocalePageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);

  return (
    <>
      <Hero hero={content.home.hero} />

      <section className="container section">
        <SectionHeader {...content.home.proposition} />
        <div className="grid-three">
          {content.home.proposition.items.map((item, index) => (
            <article key={item.title} className="feature-card">
              <span className="feature-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader {...content.home.featuredStories} />
        <div className="story-grid">
          {content.stories.map((story) => (
            <StoryCard
              key={story.title}
              story={story}
              href={`/${params.locale}/stories`}
              linkLabel={params.locale === "zh" ? "进入故事" : "Read more"}
            />
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader {...content.home.services} />
        <div className="service-grid">
          {content.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader {...content.home.tools} />
        <div className="tool-grid">
          {content.tools.map((tool) => (
            <ToolPreviewCard key={tool.title} tool={tool} />
          ))}
        </div>
      </section>

      <CTASection cta={content.home.cta} />
    </>
  );
}
