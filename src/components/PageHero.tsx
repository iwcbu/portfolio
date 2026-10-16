import type { ReactNode } from 'react';
import { HeroMedia } from './HeroMedia';

type Props = { label: string; title: string; subtitle?: string; variant?: string; children?: ReactNode };
 const fileNames: Record<string, string> = {
  "about": "home-bg.mp4",
};

export function PageHero({ label, title, subtitle, variant = 'general', children }: Props) {
  return <section className={`page-hero page-hero--${variant}`} aria-labelledby="page-heading">
    <div className="page-hero-atmosphere" aria-hidden="true" />
    <HeroMedia fileName={ fileNames[variant] } />
    <div className="page-hero-inner page-width">
      <p className="eyebrow">{label}</p>
      <h1 id="page-heading">{title}<span className="accent">.</span></h1>
      {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      {children}
    </div>
    <span className="page-hero-scroll" aria-hidden="true">Scroll to explore ↓</span>
  </section>;
}
