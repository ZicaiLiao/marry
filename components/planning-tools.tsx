"use client";

import { useEffect, useMemo, useState } from "react";
import {
  GuestItem,
  GuestStatus,
  Locale,
  LocaleContent,
  TimelineStage,
  TimelineStatus
} from "@/lib/types";

type PlanningToolsProps = {
  locale: Locale;
  content: LocaleContent["toolsPage"];
  checklistGroups: LocaleContent["checklistGroups"];
  budgetItems: LocaleContent["budgetItems"];
  timelineStages: TimelineStage[];
};

type TimelinePlan = {
  note: string;
  status: TimelineStatus;
};

type GuestDraft = Omit<GuestItem, "id">;

const checklistStorageKey = (locale: Locale) => `marry:${locale}:checklist`;
const budgetStorageKey = (locale: Locale) => `marry:${locale}:budget`;
const timelineStorageKey = (locale: Locale) => `marry:${locale}:timeline`;
const guestStorageKey = (locale: Locale) => `marry:${locale}:guests`;

const emptyGuestDraft: GuestDraft = {
  name: "",
  side: "",
  status: "pending",
  table: "",
  note: ""
};

function readStoredChecklist(locale: Locale) {
  if (typeof window === "undefined") {
    return {};
  }

  const savedChecklist = window.localStorage.getItem(checklistStorageKey(locale));

  return savedChecklist ? (JSON.parse(savedChecklist) as Record<string, boolean>) : {};
}

function readStoredBudget(locale: Locale, fallback: Record<string, number>) {
  if (typeof window === "undefined") {
    return fallback;
  }

  const savedBudget = window.localStorage.getItem(budgetStorageKey(locale));

  return savedBudget
    ? {
        ...fallback,
        ...(JSON.parse(savedBudget) as Record<string, number>)
      }
    : fallback;
}

function readStoredTimeline(locale: Locale) {
  if (typeof window === "undefined") {
    return {};
  }

  const savedTimeline = window.localStorage.getItem(timelineStorageKey(locale));

  return savedTimeline ? (JSON.parse(savedTimeline) as Record<string, TimelinePlan>) : {};
}

function readStoredGuests(locale: Locale) {
  if (typeof window === "undefined") {
    return [];
  }

  const savedGuests = window.localStorage.getItem(guestStorageKey(locale));

  return savedGuests ? (JSON.parse(savedGuests) as GuestItem[]) : [];
}

function buildSummaryText({
  locale,
  checklistGroups,
  checkedItems,
  budgetItems,
  budgetValues,
  timelineStages,
  timelinePlans,
  guests,
  currencySymbol
}: {
  locale: Locale;
  checklistGroups: PlanningToolsProps["checklistGroups"];
  checkedItems: Record<string, boolean>;
  budgetItems: PlanningToolsProps["budgetItems"];
  budgetValues: Record<string, number>;
  timelineStages: TimelineStage[];
  timelinePlans: Record<string, TimelinePlan>;
  guests: GuestItem[];
  currencySymbol: string;
}) {
  const allTasks = checklistGroups.flatMap((group) => group.items);
  const completedCount = allTasks.filter((item) => checkedItems[item.id]).length;
  const totalBudget = Object.values(budgetValues).reduce(
    (sum, value) => sum + (Number.isFinite(value) ? value : 0),
    0
  );
  const budgetHighlights = budgetItems
    .slice()
    .sort((left, right) => (budgetValues[right.id] ?? 0) - (budgetValues[left.id] ?? 0))
    .slice(0, 3)
    .map((item) => `${item.label}: ${currencySymbol}${(budgetValues[item.id] ?? 0).toLocaleString()}`);
  const timelineHighlights = timelineStages
    .map((stage) => ({
      ...stage,
      plan: timelinePlans[stage.id]
    }))
    .filter((stage) => stage.plan && (stage.plan.status !== "todo" || stage.plan.note.trim().length > 0))
    .map((stage) => {
      const note = stage.plan?.note.trim();
      return `${stage.month} - ${stage.title}${note ? `: ${note}` : ""}`;
    });
  const guestConfirmed = guests.filter((guest) => guest.status === "confirmed").length;
  const guestPending = guests.filter((guest) => guest.status === "pending").length;

  const lines =
    locale === "zh"
      ? [
          "Marry Planning Snapshot",
          "",
          `清单进度：${completedCount}/${allTasks.length}`,
          `预算总额：${currencySymbol}${totalBudget.toLocaleString()}`,
          `重点预算：${budgetHighlights.join(" / ") || "待填写"}`,
          `时间线重点：${timelineHighlights.join(" / ") || "待填写"}`,
          `宾客统计：总数 ${guests.length} / 已确认 ${guestConfirmed} / 待回复 ${guestPending}`
        ]
      : [
          "Marry Planning Snapshot",
          "",
          `Checklist progress: ${completedCount}/${allTasks.length}`,
          `Total budget: ${currencySymbol}${totalBudget.toLocaleString()}`,
          `Budget priorities: ${budgetHighlights.join(" / ") || "To be added"}`,
          `Timeline highlights: ${timelineHighlights.join(" / ") || "To be added"}`,
          `Guest count: ${guests.length} / Confirmed ${guestConfirmed} / Pending ${guestPending}`
        ];

  return lines.join("\n");
}

function createGuestId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `guest-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function PlanningTools({
  locale,
  content,
  checklistGroups,
  budgetItems,
  timelineStages
}: PlanningToolsProps) {
  const defaultBudgetValues = useMemo(
    () =>
      Object.fromEntries(
        budgetItems.map((item) => [item.id, item.defaultAmount])
      ) as Record<string, number>,
    [budgetItems]
  );
  const [hasHydrated, setHasHydrated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [budgetValues, setBudgetValues] = useState<Record<string, number>>(defaultBudgetValues);
  const [timelinePlans, setTimelinePlans] = useState<Record<string, TimelinePlan>>({});
  const [guests, setGuests] = useState<GuestItem[]>([]);
  const [guestDraft, setGuestDraft] = useState<GuestDraft>(emptyGuestDraft);

  useEffect(() => {
    setCheckedItems(readStoredChecklist(locale));
    setBudgetValues(readStoredBudget(locale, defaultBudgetValues));
    setTimelinePlans(readStoredTimeline(locale));
    setGuests(readStoredGuests(locale));
    setHasHydrated(true);
  }, [defaultBudgetValues, locale]);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    window.localStorage.setItem(checklistStorageKey(locale), JSON.stringify(checkedItems));
  }, [checkedItems, hasHydrated, locale]);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    window.localStorage.setItem(budgetStorageKey(locale), JSON.stringify(budgetValues));
  }, [budgetValues, hasHydrated, locale]);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    window.localStorage.setItem(timelineStorageKey(locale), JSON.stringify(timelinePlans));
  }, [hasHydrated, locale, timelinePlans]);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    window.localStorage.setItem(guestStorageKey(locale), JSON.stringify(guests));
  }, [guests, hasHydrated, locale]);

  const allTasks = checklistGroups.flatMap((group) => group.items);
  const completedCount = allTasks.filter((item) => checkedItems[item.id]).length;
  const totalBudget = useMemo(
    () =>
      Object.values(budgetValues).reduce(
        (sum, value) => sum + (Number.isFinite(value) ? value : 0),
        0
      ),
    [budgetValues]
  );
  const averageBudget = totalBudget / budgetItems.length;
  const activeTimelineCount = timelineStages.filter((stage) => {
    const plan = timelinePlans[stage.id];
    return plan && (plan.status !== "todo" || plan.note.trim().length > 0);
  }).length;
  const confirmedGuests = guests.filter((guest) => guest.status === "confirmed").length;
  const pendingGuests = guests.filter((guest) => guest.status === "pending").length;
  const summaryText = useMemo(
    () =>
      buildSummaryText({
        locale,
        checklistGroups,
        checkedItems,
        budgetItems,
        budgetValues,
        timelineStages,
        timelinePlans,
        guests,
        currencySymbol: content.budget.currencySymbol
      }),
    [
      budgetItems,
      budgetValues,
      checkedItems,
      checklistGroups,
      content.budget.currencySymbol,
      guests,
      locale,
      timelinePlans,
      timelineStages
    ]
  );

  const toggleChecklistItem = (id: string) => {
    setCheckedItems((current) => ({
      ...current,
      [id]: !current[id]
    }));
  };

  const updateBudgetValue = (id: string, value: number) => {
    setBudgetValues((current) => ({
      ...current,
      [id]: value
    }));
  };

  const updateTimelineStatus = (id: string, status: TimelineStatus) => {
    setTimelinePlans((current) => ({
      ...current,
      [id]: {
        note: current[id]?.note ?? "",
        status
      }
    }));
  };

  const updateTimelineNote = (id: string, note: string) => {
    setTimelinePlans((current) => ({
      ...current,
      [id]: {
        note,
        status: current[id]?.status ?? "todo"
      }
    }));
  };

  const updateGuestDraft = (field: keyof GuestDraft, value: string) => {
    setGuestDraft((current) => ({
      ...current,
      [field]: value
    }));
  };

  const addGuest = () => {
    if (!guestDraft.name.trim()) {
      return;
    }

    setGuests((current) => [
      ...current,
      {
        id: createGuestId(),
        ...guestDraft,
        name: guestDraft.name.trim(),
        side: guestDraft.side.trim(),
        table: guestDraft.table.trim(),
        note: guestDraft.note.trim()
      }
    ]);
    setGuestDraft(emptyGuestDraft);
  };

  const updateGuest = (id: string, field: keyof GuestDraft, value: string) => {
    setGuests((current) =>
      current.map((guest) => (guest.id === id ? { ...guest, [field]: value } : guest))
    );
  };

  const removeGuest = (id: string) => {
    setGuests((current) => current.filter((guest) => guest.id !== id));
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const resetPlanner = () => {
    setCheckedItems({});
    setBudgetValues(defaultBudgetValues);
    setTimelinePlans({});
    setGuests([]);
    setGuestDraft(emptyGuestDraft);
    window.localStorage.removeItem(checklistStorageKey(locale));
    window.localStorage.removeItem(budgetStorageKey(locale));
    window.localStorage.removeItem(timelineStorageKey(locale));
    window.localStorage.removeItem(guestStorageKey(locale));
  };

  return (
    <section className="container section">
      <div className="planner-grid">
        <article className="tool-panel">
          <div className="tool-panel__header">
            <div>
              <span className="eyebrow">{content.eyebrow}</span>
              <h2 className="tool-panel__title">{content.checklist.title}</h2>
              <p className="tool-panel__body">{content.checklist.body}</p>
            </div>
          </div>

          <div className="tool-panel__summary">
            <span className="summary-pill">
              {content.checklist.progressLabel}: {completedCount}/{allTasks.length}
            </span>
            <span className="summary-pill">
              {content.checklist.phaseLabel}: {checklistGroups.length}
            </span>
            <span className="summary-pill">
              {content.checklist.doneLabel}: {completedCount} {content.checklist.emptyCurrency}
            </span>
          </div>

          {checklistGroups.map((group) => (
            <div key={group.id} className="checklist-group">
              <h4>{group.title}</h4>
              <div className="checklist-items">
                {group.items.map((item) => {
                  const checked = Boolean(checkedItems[item.id]);

                  return (
                    <label
                      key={item.id}
                      className={`checklist-item${checked ? " checklist-item--done" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleChecklistItem(item.id)}
                      />
                      <div>
                        <div className="checklist-item__task">{item.task}</div>
                        <div className="checklist-item__note">{item.note}</div>
                      </div>
                      <span className="chip">{checked ? content.checklist.doneLabel : group.title}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </article>

        <article className="tool-panel">
          <div className="tool-panel__header">
            <div>
              <span className="eyebrow">{content.eyebrow}</span>
              <h2 className="tool-panel__title">{content.budget.title}</h2>
              <p className="tool-panel__body">{content.budget.body}</p>
            </div>
          </div>

          <div className="tool-panel__summary">
            <span className="summary-pill">
              {content.budget.totalLabel}: {content.budget.currencySymbol}
              {totalBudget.toLocaleString()}
            </span>
            <span className="summary-pill">
              {content.budget.averageLabel}: {content.budget.currencySymbol}
              {Math.round(averageBudget).toLocaleString()}
            </span>
            <span className="summary-pill">
              {content.checklist.totalLabel}: {budgetItems.length}
            </span>
          </div>

          <div className="budget-list">
            {budgetItems.map((item) => {
              const amount = budgetValues[item.id] ?? 0;
              const share = totalBudget > 0 ? (amount / totalBudget) * 100 : 0;

              return (
                <div key={item.id} className="budget-item">
                  <div>
                    <h4>{item.label}</h4>
                    <div className="budget-item__meta">{item.tip}</div>
                    <div className="budget-item__bar">
                      <span style={{ width: `${Math.min(share, 100)}%` }} />
                    </div>
                    <div className="budget-item__meta">
                      {content.budget.shareLabel}: {share.toFixed(1)}%
                    </div>
                  </div>

                  <div className="budget-item__amount">
                    <span>{content.budget.currencySymbol}</span>
                    <input
                      className="budget-input"
                      type="number"
                      min="0"
                      step="100"
                      value={amount}
                      onChange={(event) => updateBudgetValue(item.id, Number(event.target.value))}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>

      <div className="planner-support-grid">
        <article className="tool-panel tool-panel--wide">
          <div className="tool-panel__header">
            <div>
              <span className="eyebrow">{content.eyebrow}</span>
              <h2 className="tool-panel__title">{content.timeline.title}</h2>
              <p className="tool-panel__body">{content.timeline.body}</p>
            </div>
          </div>

          <div className="tool-panel__summary">
            <span className="summary-pill">
              {content.timeline.summaryLabel}: {activeTimelineCount}/{timelineStages.length}
            </span>
            <span className="summary-pill">{content.timeline.monthLabel}: 12</span>
            <span className="summary-pill">
              {content.timeline.noteLabel}: {activeTimelineCount}
            </span>
          </div>

          <div className="timeline-list">
            {timelineStages.map((stage) => {
              const plan = timelinePlans[stage.id] ?? { note: "", status: "todo" as TimelineStatus };

              return (
                <article key={stage.id} className="timeline-card">
                  <div className="timeline-card__meta">
                    <span className="eyebrow">{stage.month}</span>
                    <select
                      className="timeline-select"
                      aria-label={`${stage.title} status`}
                      value={plan.status}
                      onChange={(event) => updateTimelineStatus(stage.id, event.target.value as TimelineStatus)}
                    >
                      {Object.entries(content.timeline.statuses).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.focus}</p>
                  <label className="field">
                    <span className="field__label">{content.timeline.noteLabel}</span>
                    <textarea
                      className="field__textarea"
                      value={plan.note}
                      onChange={(event) => updateTimelineNote(stage.id, event.target.value)}
                    />
                  </label>
                </article>
              );
            })}
          </div>
        </article>

        <article className="tool-panel">
          <div className="tool-panel__header">
            <div>
              <span className="eyebrow">{content.eyebrow}</span>
              <h2 className="tool-panel__title">{content.plannerSummary.title}</h2>
              <p className="tool-panel__body">{content.plannerSummary.body}</p>
            </div>
          </div>

          <pre className="planner-summary">{summaryText}</pre>
          <div className="planner-actions">
            <button type="button" className="button planner-button" onClick={copySummary}>
              {copied ? content.plannerSummary.copiedCta : content.plannerSummary.copyCta}
            </button>
            <button type="button" className="planner-reset" onClick={resetPlanner}>
              {content.plannerSummary.resetCta}
            </button>
          </div>
        </article>
      </div>

      <article className="tool-panel planner-guest-panel">
        <div className="tool-panel__header">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="tool-panel__title">{content.guestManager.title}</h2>
            <p className="tool-panel__body">{content.guestManager.body}</p>
          </div>
        </div>

        <div className="tool-panel__summary">
          <span className="summary-pill">
            {content.guestManager.totalLabel}: {guests.length}
          </span>
          <span className="summary-pill">
            {content.guestManager.confirmedLabel}: {confirmedGuests}
          </span>
          <span className="summary-pill">
            {content.guestManager.pendingLabel}: {pendingGuests}
          </span>
        </div>

        <div className="guest-form">
          <div className="field-row">
            <label className="field">
              <span className="field__label">{content.guestManager.nameLabel}</span>
              <input
                className="field__input"
                value={guestDraft.name}
                placeholder={content.guestManager.namePlaceholder}
                onChange={(event) => updateGuestDraft("name", event.target.value)}
              />
            </label>

            <label className="field">
              <span className="field__label">{content.guestManager.sideLabel}</span>
              <input
                className="field__input"
                value={guestDraft.side}
                placeholder={content.guestManager.sidePlaceholder}
                onChange={(event) => updateGuestDraft("side", event.target.value)}
              />
            </label>
          </div>

          <div className="field-row field-row--guest">
            <label className="field">
              <span className="field__label">{content.guestManager.statusLabel}</span>
              <select
                className="field__input"
                value={guestDraft.status}
                onChange={(event) => updateGuestDraft("status", event.target.value as GuestStatus)}
              >
                {Object.entries(content.guestManager.statuses).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span className="field__label">{content.guestManager.tableLabel}</span>
              <input
                className="field__input"
                value={guestDraft.table}
                placeholder={content.guestManager.tablePlaceholder}
                onChange={(event) => updateGuestDraft("table", event.target.value)}
              />
            </label>
          </div>

          <label className="field">
            <span className="field__label">{content.guestManager.noteLabel}</span>
            <textarea
              className="field__textarea"
              value={guestDraft.note}
              placeholder={content.guestManager.notePlaceholder}
              onChange={(event) => updateGuestDraft("note", event.target.value)}
            />
          </label>

          <div className="planner-actions">
            <button type="button" className="button planner-button" onClick={addGuest}>
              {content.guestManager.addLabel}
            </button>
          </div>
        </div>

        <div className="guest-list">
          {guests.length > 0 ? (
            guests.map((guest) => (
              <article key={guest.id} className="guest-card">
                <div className="guest-card__top">
                  <div className="guest-card__identity">
                    <input
                      className="field__input"
                      value={guest.name}
                      onChange={(event) => updateGuest(guest.id, "name", event.target.value)}
                    />
                    <input
                      className="field__input"
                      value={guest.side}
                      placeholder={content.guestManager.sidePlaceholder}
                      onChange={(event) => updateGuest(guest.id, "side", event.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="planner-reset guest-card__remove"
                    onClick={() => removeGuest(guest.id)}
                  >
                    {locale === "zh" ? "删除" : "Remove"}
                  </button>
                </div>

                <div className="guest-card__grid">
                  <label className="field">
                    <span className="field__label">{content.guestManager.statusLabel}</span>
                    <select
                      className="field__input"
                      value={guest.status}
                      onChange={(event) => updateGuest(guest.id, "status", event.target.value as GuestStatus)}
                    >
                      {Object.entries(content.guestManager.statuses).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="field">
                    <span className="field__label">{content.guestManager.tableLabel}</span>
                    <input
                      className="field__input"
                      value={guest.table}
                      placeholder={content.guestManager.tablePlaceholder}
                      onChange={(event) => updateGuest(guest.id, "table", event.target.value)}
                    />
                  </label>
                </div>

                <label className="field">
                  <span className="field__label">{content.guestManager.noteLabel}</span>
                  <textarea
                    className="field__textarea"
                    value={guest.note}
                    placeholder={content.guestManager.notePlaceholder}
                    onChange={(event) => updateGuest(guest.id, "note", event.target.value)}
                  />
                </label>
              </article>
            ))
          ) : (
            <div className="summary-empty">{content.guestManager.emptyLabel}</div>
          )}
        </div>
      </article>
    </section>
  );
}
