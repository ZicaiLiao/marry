import { Locale, LocaleContent } from "@/lib/types";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  locale: Locale;
  content: LocaleContent;
  children: React.ReactNode;
};

export function SiteShell({ locale, content, children }: SiteShellProps) {
  return (
    <div className="page-shell">
      <SiteHeader locale={locale} nav={content.nav} />
      <main>{children}</main>
      <SiteFooter content={content} />
    </div>
  );
}
