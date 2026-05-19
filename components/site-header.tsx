"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { Locale, NavItem } from "@/lib/types";
import { LanguageSwitcher } from "./language-switcher";

type SiteHeaderProps = {
  locale: Locale;
  nav: NavItem[];
};

export function SiteHeader({ locale, nav }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={`/${locale}`} className="site-brand" aria-label={`${siteConfig.brand} home`}>
          <span className="site-brand__mark">{siteConfig.brand}</span>
          <span className="site-brand__line">{siteConfig.strapline}</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? "×" : "≡"}
        </button>

        <div id="site-nav" className={`site-nav${open ? " site-nav--open" : ""}`}>
          <nav className="site-nav__links" aria-label="Primary">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
