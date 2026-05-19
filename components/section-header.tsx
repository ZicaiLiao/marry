type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-header__eyebrow">{eyebrow}</span>
      <h2 className="section-header__title">{title}</h2>
      <p className="section-header__body">{body}</p>
    </div>
  );
}
