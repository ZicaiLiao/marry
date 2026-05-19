import { PlanningTools } from "@/components/planning-tools";
import { isLocale } from "@/lib/i18n";
import { getLocaleContent } from "@/lib/site-data";

type ToolsPageProps = {
  params: {
    locale: string;
  };
};

export default function ToolsPage({ params }: ToolsPageProps) {
  if (!isLocale(params.locale)) {
    return null;
  }

  const content = getLocaleContent(params.locale);

  return (
    <>
      <section className="container page-intro">
        <span className="page-intro__eyebrow">{content.toolsPage.eyebrow}</span>
        <h1 className="page-intro__title">{content.toolsPage.title}</h1>
        <p className="page-intro__body">{content.toolsPage.body}</p>
      </section>

      <PlanningTools
        locale={params.locale}
        content={content.toolsPage}
        checklistGroups={content.checklistGroups}
        budgetItems={content.budgetItems}
      />
    </>
  );
}
