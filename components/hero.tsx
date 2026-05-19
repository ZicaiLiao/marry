import Link from "next/link";
import { LocaleContent } from "@/lib/types";

type HeroProps = {
  hero: LocaleContent["home"]["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <section className="container hero">
      <div className="hero__content">
        <div>
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__body">{hero.body}</p>
          <div className="hero__actions">
            <Link href={hero.primaryHref} className="button">
              {hero.primaryCta}
            </Link>
            <Link href={hero.secondaryHref} className="button-secondary">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hero__stats">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__frame" />
        <div className="hero__visual-copy">
          <strong>{hero.visualQuote}</strong>
          <p>{hero.visualBody}</p>
        </div>
      </div>
    </section>
  );
}
