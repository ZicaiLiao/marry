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
          body={content.home.services.body}
        />
        <div className="grid-two">
          {content.servicesPage.process.map((step, index) => (
            <article key={step} className="feature-card">
              <span className="feature-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <p>
                {params.locale === "zh"
                  ? "每一步都围绕关系感、体验感与执行可行性展开，确保审美判断能落地。"
                  : "Each step balances emotional intent, guest experience, and what can truly be executed well."}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
