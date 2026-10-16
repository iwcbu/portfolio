import type { CSSProperties, ReactNode } from 'react';

type Props = { slug: string; className?: string };

/** Decorative project identifiers. Replace with real project artwork whenever available. */
export function ProjectIcon({ slug, className = '' }: Props) {
    const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
    const symbols: Record<string, ReactNode> = {
      'omen-ne': <><path d="M12 63c16-23 27-25 40-5 12 17 25 14 44-10"/><path d="M12 81c16-23 27-25 40-5 12 17 25 14 44-10"/><circle cx="79" cy="28" r="9"/></>,
      'bmw-inventory': <><rect x="17" y="19" width="74" height="70" rx="9"/><path d="M17 42h74M42 42v47M66 42v47M28 30h22"/><path d="m70 29 6 6 11-13"/></>,
      'chess-bot': <><path d="M38 87h39M44 76h27l-5-22 9-10-17-20-17 20 9 10-6 22Z"/><circle cx="58" cy="38" r="3"/><path d="M49 76h19"/></>,
      'bure': <><path d="M20 89V36l24-13 24 13v53M68 49l20 10v30M32 44h8M50 44h8M32 58h8M50 58h8M32 72h8M50 72h8M80 69v7M14 89h80"/></>,
      'raft-consensus': <>
      <rect x="35" y="12" width="30" height="24" rx="3"/>
      <rect x="8" y="62" width="30" height="24" rx="3"/>
      <rect x="62" y="62" width="30" height="24" rx="3"/>
      <path d="M50 36V48M23 62V48H77V62"/>
      <path d="M41 20h12M41 28h7M14 70h12M14 78h7M68 70h12M68 78h7"/>
      </>,
      'partout': <>
  {/* Piston head */}
  <rect x="34" y="14" width="40" height="28" rx="2"/>
  <path d="M34 21H74M34 28H74"/>

  {/* Wrist pin */}
  <circle cx="54" cy="34" r="6"/>

  {/* Straight shaft */}
  <path d="M47 42V71M61 42V71"/>

  {/* Circular bottom bearing */}
  <circle cx="54" cy="83" r="15"/>
  <circle cx="54" cy="83" r="9"/>
</>,
      
};
  return <div className={`project-icon project-icon--${slug} ${className}`} style={{'--icon-offset': '0px'} as CSSProperties} aria-hidden="true">
  <svg viewBox="0 0 108 108" {...common}>{symbols[slug] ?? <circle cx="54" cy="54" r="30"/>}</svg>
  </div>;
}
