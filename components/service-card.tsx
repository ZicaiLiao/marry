import { ServiceItem } from "@/lib/types";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      <span className="eyebrow">{service.highlights[0]}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="service-card__cta">{service.cta} →</div>
    </article>
  );
}
