"use client";

import { useEffect } from "react";
import { Locale } from "@/lib/types";

type LocaleDocumentProps = {
  locale: Locale;
};

export function LocaleDocument({ locale }: LocaleDocumentProps) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return null;
}
