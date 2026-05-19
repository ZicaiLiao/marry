"use client";

import { useEffect, useMemo, useState } from "react";
import { Locale, LocaleContent } from "@/lib/types";

type PlanningToolsProps = {
  locale: Locale;
  content: LocaleContent["toolsPage"];
  checklistGroups: LocaleContent["checklistGroups"];
  budgetItems: LocaleContent["budgetItems"];
};

const checklistStorageKey = (locale: Locale) => `marry:${locale}:checklist`;
const budgetStorageKey = (locale: Locale) => `marry:${locale}:budget`;

function readStoredChecklist(locale: Locale) {
  if (typeof window === "undefined") {
    return {};
  }

  const savedChecklist = window.localStorage.getItem(checklistStorageKey(locale));

  return savedChecklist ? (JSON.parse(savedChecklist) as Record<string, boolean>) : {};
}

function readStoredBudget(
  locale: Locale,
  fallback: Record<string, number>
) {
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

export function PlanningTools({
  locale,
  content,
  checklistGroups,
  budgetItems
}: PlanningToolsProps) {
  const defaultBudgetValues = useMemo(
    () =>
      Object.fromEntries(
        budgetItems.map((item) => [item.id, item.defaultAmount])
      ) as Record<string, number>,
    [budgetItems]
  );
  const [hasHydrated, setHasHydrated] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [budgetValues, setBudgetValues] = useState<Record<string, number>>(
    defaultBudgetValues
  );

  useEffect(() => {
    setCheckedItems(readStoredChecklist(locale));
    setBudgetValues(readStoredBudget(locale, defaultBudgetValues));
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

  const allTasks = checklistGroups.flatMap((group) => group.items);
  const completedCount = allTasks.filter((item) => checkedItems[item.id]).length;
  const totalBudget = useMemo(
    () => Object.values(budgetValues).reduce((sum, value) => sum + (Number.isFinite(value) ? value : 0), 0),
    [budgetValues]
  );
  const averageBudget = totalBudget / budgetItems.length;

  const toggleChecklistItem = (id: string) => {
    setCheckedItems((current) => {
      const next = {
        ...current,
        [id]: !current[id]
      };

      window.localStorage.setItem(checklistStorageKey(locale), JSON.stringify(next));
      return next;
    });
  };

  const updateBudgetValue = (id: string, value: number) => {
    setBudgetValues((current) => {
      const next = {
        ...current,
        [id]: value
      };

      window.localStorage.setItem(budgetStorageKey(locale), JSON.stringify(next));
      return next;
    });
  };

  return (
    <section className="container section">
      <div className="tool-grid">
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
                      onChange={(event) =>
                        updateBudgetValue(item.id, Number(event.target.value))
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
