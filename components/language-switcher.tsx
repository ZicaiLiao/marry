"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/lib/i18n";
import { Locale } from "@/lib/types";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="lang-switcher" aria-label="Language switcher">
      {locales.map((targetLocale) => {
        const nextPath = pathname.replace(`/${locale}`, `/${targetLocale}`) || `/${targetLocale}`;

        return (
          <Link
            key={targetLocale}
            href={nextPath}
            className={targetLocale === locale ? "active" : undefined}
            hrefLang={targetLocale}
            lang={targetLocale}
          >
            {targetLocale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
