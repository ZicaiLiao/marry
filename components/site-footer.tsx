import { siteConfig } from "@/lib/site-data";
import { LocaleContent } from "@/lib/types";

type SiteFooterProps = {
  content: LocaleContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__title">{content.footer.title}</p>
          <p className="footer__meta">{content.footer.note}</p>
        </div>
        <div className="footer__meta">
          <div>{siteConfig.email}</div>
          <div>{siteConfig.instagram}</div>
          <div>{siteConfig.wechat}</div>
        </div>
      </div>
    </footer>
  );
}
