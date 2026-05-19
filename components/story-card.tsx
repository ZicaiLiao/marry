import Link from "next/link";
import { StoryItem } from "@/lib/types";

type StoryCardProps = {
  story: StoryItem;
  href: string;
  linkLabel: string;
};

export function StoryCard({ story, href, linkLabel }: StoryCardProps) {
  return (
    <article className="story-card">
      <div className="story-card__media" />
      <div className="story-card__content">
        <span className="eyebrow">
          {story.location} · {story.season}
        </span>
        <h3>{story.title}</h3>
        <p>{story.subtitle}</p>
        <p>{story.summary}</p>
        <div className="story-card__meta">
          {story.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <Link href={href} className="story-card__link">
          {linkLabel} →
        </Link>
      </div>
    </article>
  );
}
