import { InquiryForm } from "@/components/inquiry-form";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent, siteConfig } from "@/lib/site-data";

type AboutPageProps = {
  params: {
    locale: string;
  };
};

export default function AboutPage({ params }: AboutPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);

  return (
    <>
      <section className="container page-intro">
        <span className="page-intro__eyebrow">{content.aboutPage.eyebrow}</span>
        <h1 className="page-intro__title">{content.aboutPage.title}</h1>
        <p className="page-intro__body">{content.aboutPage.body}</p>
      </section>

      <section className="container section">
        <InquiryForm
          locale={params.locale}
          content={content.aboutPage.form}
          destinationEmail={siteConfig.email}
        />
      </section>

      <section className="container section">
        <div className="contact-grid">
          {content.aboutPage.notes.map((note) => (
            <article key={note.title} className="contact-card">
              <span className="contact-card__label">{note.label}</span>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              {note.href ? (
                <a href={note.href} target={note.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {note.href.replace("mailto:", "")}
                </a>
              ) : (
                <p className="contact-grid__note">{siteConfig.wechat}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
