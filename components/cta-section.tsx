import Link from "next/link";
import { LocaleContent } from "@/lib/types";

type CTASectionProps = {
  cta: LocaleContent["home"]["cta"];
};

export function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="container section">
      <div className="cta-section">
        <h2 className="cta-section__title">{cta.title}</h2>
        <p className="cta-section__body">{cta.body}</p>
        <div className="cta-section__actions">
          <Link href={cta.primaryHref} className="button">
            {cta.primaryCta}
          </Link>
          <Link href={cta.secondaryHref} className="button-secondary">
            {cta.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
