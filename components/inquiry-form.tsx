"use client";

import { useEffect, useMemo, useState } from "react";
import { Locale, LocaleContent } from "@/lib/types";

type InquiryFormProps = {
  locale: Locale;
  content: LocaleContent["aboutPage"]["form"];
  destinationEmail: string;
};

type InquiryDraft = {
  names: string;
  email: string;
  city: string;
  date: string;
  guestCount: string;
  budget: string;
  focus: string;
  note: string;
};

type SubmitState = "idle" | "sending" | "success" | "error" | "unavailable";

const inquiryStorageKey = (locale: Locale) => `marry:${locale}:inquiry`;

const emptyDraft: InquiryDraft = {
  names: "",
  email: "",
  city: "",
  date: "",
  guestCount: "",
  budget: "",
  focus: "",
  note: ""
};

function readStoredDraft(locale: Locale) {
  if (typeof window === "undefined") {
    return emptyDraft;
  }

  const savedDraft = window.localStorage.getItem(inquiryStorageKey(locale));

  return savedDraft
    ? {
        ...emptyDraft,
        ...(JSON.parse(savedDraft) as InquiryDraft)
      }
    : emptyDraft;
}

export function InquiryForm({
  locale,
  content,
  destinationEmail
}: InquiryFormProps) {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [saved, setSaved] = useState(false);
  const [draft, setDraft] = useState<InquiryDraft>(emptyDraft);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  useEffect(() => {
    setDraft(readStoredDraft(locale));
    setHasHydrated(true);
  }, [locale]);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    window.localStorage.setItem(inquiryStorageKey(locale), JSON.stringify(draft));
  }, [draft, hasHydrated, locale]);

  const updateField = (field: keyof InquiryDraft, value: string) => {
    setSaved(false);
    setSubmitState("idle");
    setDraft((current) => ({
      ...current,
      [field]: value
    }));
  };

  const summaryLines = useMemo(() => {
    const pairs = [
      [content.namesLabel, draft.names],
      [content.emailLabel, draft.email],
      [content.cityLabel, draft.city],
      [content.dateLabel, draft.date],
      [content.guestLabel, draft.guestCount],
      [content.budgetLabel, draft.budget],
      [content.focusLabel, draft.focus],
      [content.noteLabel, draft.note]
    ].filter(([, value]) => value.trim().length > 0);

    return pairs.map(([label, value]) => `${label}: ${value}`);
  }, [content, draft]);

  const mailtoHref = useMemo(() => {
    const subject =
      locale === "zh"
        ? `Marry 咨询 - ${draft.names || draft.city || "新的婚礼咨询"}`
        : `Marry Inquiry - ${draft.names || draft.city || "New Wedding Inquiry"}`;

    const lines =
      summaryLines.length > 0
        ? summaryLines
        : [
            locale === "zh"
              ? "你好，我想进一步了解 Marry 的婚礼服务。"
              : "Hello, I would love to learn more about Marry's wedding services."
          ];

    return `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [destinationEmail, draft.city, draft.names, locale, summaryLines]);

  const saveDraft = () => {
    window.localStorage.setItem(inquiryStorageKey(locale), JSON.stringify(draft));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1500);
  };

  const clearDraft = () => {
    setDraft(emptyDraft);
    window.localStorage.removeItem(inquiryStorageKey(locale));
    setSaved(false);
    setSubmitState("idle");
  };

  const submitDraft = async () => {
    setSubmitState("sending");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          locale,
          ...draft
        })
      });

      if (response.ok) {
        setSubmitState("success");
        return;
      }

      if (response.status === 503) {
        setSubmitState("unavailable");
        return;
      }

      setSubmitState("error");
    } catch {
      setSubmitState("error");
    }
  };

  const submitMessage =
    submitState === "success"
      ? content.successMessage
      : submitState === "error"
        ? content.errorMessage
        : submitState === "unavailable"
          ? content.unavailableMessage
          : null;

  return (
    <div className="inquiry-layout">
      <article className="tool-panel">
        <div className="tool-panel__header">
          <div>
            <span className="eyebrow">Inquiry</span>
            <h2 className="tool-panel__title">{content.title}</h2>
            <p className="tool-panel__body">{content.body}</p>
          </div>
        </div>

        <div className="inquiry-form">
          <label className="field">
            <span className="field__label">{content.namesLabel}</span>
            <input
              className="field__input"
              value={draft.names}
              placeholder={content.namesPlaceholder}
              onChange={(event) => updateField("names", event.target.value)}
            />
          </label>

          <label className="field">
            <span className="field__label">{content.emailLabel}</span>
            <input
              className="field__input"
              type="email"
              value={draft.email}
              placeholder={content.emailPlaceholder}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>

          <div className="field-row">
            <label className="field">
              <span className="field__label">{content.cityLabel}</span>
              <input
                className="field__input"
                value={draft.city}
                placeholder={content.cityPlaceholder}
                onChange={(event) => updateField("city", event.target.value)}
              />
            </label>

            <label className="field">
              <span className="field__label">{content.dateLabel}</span>
              <input
                className="field__input"
                type="date"
                value={draft.date}
                onChange={(event) => updateField("date", event.target.value)}
              />
            </label>
          </div>

          <div className="field-row">
            <label className="field">
              <span className="field__label">{content.guestLabel}</span>
              <input
                className="field__input"
                value={draft.guestCount}
                placeholder={content.guestPlaceholder}
                onChange={(event) => updateField("guestCount", event.target.value)}
              />
            </label>

            <label className="field">
              <span className="field__label">{content.budgetLabel}</span>
              <select
                className="field__input"
                value={draft.budget}
                onChange={(event) => updateField("budget", event.target.value)}
              >
                <option value="">-</option>
                {content.budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span className="field__label">{content.focusLabel}</span>
            <select
              className="field__input"
              value={draft.focus}
              onChange={(event) => updateField("focus", event.target.value)}
            >
              <option value="">-</option>
              {content.focusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span className="field__label">{content.noteLabel}</span>
            <textarea
              className="field__textarea field__textarea--tall"
              value={draft.note}
              placeholder={content.notePlaceholder}
              onChange={(event) => updateField("note", event.target.value)}
            />
          </label>
        </div>

        <div className="planner-actions">
          <button type="button" className="button planner-button" onClick={submitDraft}>
            {submitState === "sending" ? content.sendingLabel : content.submitLabel}
          </button>
          <button type="button" className="button-secondary inquiry-secondary" onClick={saveDraft}>
            {saved ? (locale === "zh" ? "已保存" : "Saved") : content.saveLabel}
          </button>
          <button type="button" className="planner-reset" onClick={clearDraft}>
            {content.clearLabel}
          </button>
        </div>
        {submitMessage ? (
          <p className={`form-status form-status--${submitState}`}>{submitMessage}</p>
        ) : null}
        <p className="field__hint">{content.draftHint}</p>
      </article>

      <article className="tool-panel">
        <div className="tool-panel__header">
          <div>
            <span className="eyebrow">Summary</span>
            <h2 className="tool-panel__title">{content.summaryTitle}</h2>
            <p className="tool-panel__body">
              {summaryLines.length > 0 ? content.draftHint : content.summaryEmpty}
            </p>
          </div>
        </div>

        {summaryLines.length > 0 ? (
          <div className="summary-list">
            {summaryLines.map((line) => (
              <div key={line} className="summary-list__item">
                {line}
              </div>
            ))}
          </div>
        ) : (
          <div className="summary-empty">{content.summaryEmpty}</div>
        )}

        <a href={mailtoHref} className="button inquiry-mailto">
          {content.mailtoLabel}
        </a>
      </article>
    </div>
  );
}
