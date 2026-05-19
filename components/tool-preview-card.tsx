import Link from "next/link";
import { ToolItem } from "@/lib/types";

type ToolPreviewCardProps = {
  tool: ToolItem;
  linkLabel: string;
};

export function ToolPreviewCard({ tool, linkLabel }: ToolPreviewCardProps) {
  return (
    <article className="tool-card">
      <span className="eyebrow">{tool.status}</span>
      <h3>{tool.title}</h3>
      <p>{tool.description}</p>
      <div className="tool-card__meta">
        {tool.highlights.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
      <Link href={tool.href} className="tool-card__link">
        {linkLabel} →
      </Link>
    </article>
  );
}
