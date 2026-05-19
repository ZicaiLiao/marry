import { isLocale } from "@/lib/i18n";
import { getLocaleContent } from "@/lib/site-data";

type InspirationPageProps = {
  params: {
    locale: string;
  };
};

export default function InspirationPage({ params }: InspirationPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);

  return (
    <>
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
