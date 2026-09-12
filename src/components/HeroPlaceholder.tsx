/**
 * Stands in for the new hero until it is designed. Fills its parent the way
 * the real hero must: one full screen inside the splash, content height on
 * narrow viewports. Every string comes from content/hero.json.
 */
export interface HeroPlaceholderData {
  eyebrow: string;
  headline: string;
  note: string;
  cta: { label: string; href: string };
}

export function HeroPlaceholder({ data }: { data: HeroPlaceholderData }) {
  return (
    <div className="hero-slot">
      <div className="hero-slot-body">
        <p className="hero-slot-eyebrow">{data.eyebrow}</p>
        <h1 className="hero-slot-headline">{data.headline}</h1>
        <p className="hero-slot-note">{data.note}</p>
        <a className="hero-slot-cta" href={data.cta.href}>
          {data.cta.label}
        </a>
      </div>
    </div>
  );
}
