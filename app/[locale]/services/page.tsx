import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent } from "@/lib/site-data";

type ServicesPageProps = {
  params: {
    locale: string;
  };
};

export default function ServicesPage({ params }: ServicesPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);

  return (
    <>
      <section className="container page-intro">
        <span className="page-intro__eyebrow">{content.servicesPage.eyebrow}</span>
        <h1 className="page-intro__title">{content.servicesPage.title}</h1>
        <p className="page-intro__body">{content.servicesPage.body}</p>
      </section>

      <section className="container section">
        <div className="service-grid">
          {content.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader
          eyebrow={content.servicesPage.eyebrow}
          title={content.servicesPage.processTitle}
          body={content.servicesPage.processBody}
        />
        <div className="grid-two">
          {content.servicesPage.process.map((step, index) => (
            <article key={step.title} className="feature-card">
              <span className="feature-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader
          eyebrow={content.servicesPage.eyebrow}
          title={content.servicesPage.packagesTitle}
          body={content.servicesPage.packagesBody}
        />
        <div className="service-grid">
          {content.servicesPage.packages.map((item) => (
            <article key={item.title} className="package-card">
              <div className="package-card__meta">
                <span className="eyebrow">{item.priceNote}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="package-card__ideal">{item.idealFor}</p>
              <ul>
                {item.includes.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader
          eyebrow={content.servicesPage.eyebrow}
          title={content.servicesPage.casesTitle}
          body={content.servicesPage.casesBody}
        />
        <div className="grid-two">
          {content.servicesPage.cases.map((item) => (
            <article key={item.title} className="case-card">
              <div className="story-card__meta">
                <span className="chip">{item.location}</span>
                <span className="chip">{item.season}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul>
                {item.deliverables.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
              <div className="case-card__result">{item.result}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader
          eyebrow={content.servicesPage.eyebrow}
          title={content.servicesPage.faqTitle}
          body={content.servicesPage.faqBody}
        />
        <div className="faq-list">
          {content.servicesPage.faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
