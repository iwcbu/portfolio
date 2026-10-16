# Portfolio V2 — Codex guidance

## Purpose and priorities
This is a personal software engineering portfolio for a recent Boston University computer science graduate focused on backend development and data engineering. It should help recruiters understand the owner's work quickly while also conveying their interests in surfing, motorsports, and skiing.

**Top priority: ship a credible, fast, accessible site soon.** Prefer incremental changes to prolonged polish. Do not rebuild the app, change the design direction, or add major libraries without a clear reason and confirmation from me after explaining your reasoning.

## Approved design direction
- Cinematic, minimal, modern; inspired by the full width video hero treatment of the BMW Group careers site, **not** a copy of it.
- Palette: charcoal black `#101318`, steel grey `#192332`, dark blue `#294c78`, baby blue `#92caff`, off white `#f4f7fc`. Related shades already defined in `src/styles.css` are fine. Avoid the earlier olive/khaki palette.
- Strong typography, atmospheric imagery, generous deliberate spacing, readable content, understated transitions.
- The site is **multipage**, not one huge scrolling landing page. However, individual pages should have substantial, useful content below their hero sections.
- Photography and subtle looping video should support personality, not compete with engineering evidence. Avoid gimmicky effects, carousels, page transitions, elaborate animations, or Three.js.
- On widescreen displays, project listing rows should include a visual panel/icon at the right; hide or adjust these responsibly on narrow displays. Eventually replace generic artwork with authentic project screenshots where available.

## Information architecture
Current routes are defined in `src/main.tsx`:
- `/` — Homepage: cinematic hero, short positioning statement and prominent link to projects, then selected project previews.
- `/projects` — Hero followed by a clear list of engineering projects with desktop visual panels.
- `/projects/:slug` — Individual project details.
- `/about` — Hero followed by a longer, genuinely personal narrative: background and engineering interests, professional experience, outside interests (surfing, motorsports, skiing), then a **Connect** section.
- `/contact` — Redirects to `/about#connect`. Do **not** reintroduce a standalone contact page unless there is enough content to justify it and you have confirmation from me to do so.

Navigation should let recruiters reach Projects immediately; About and Connect should also be obvious. Keep the header and footer consistent throughout the site.

## Hero and project page layout
- Every main page should begin with an atmospheric, large hero, with the page's content below. Keep the shared visual language of the homepage.
- Project detail pages specifically begin with the **hero visual before the project title**, not between the title and description.
- Beneath the hero, show project title and summary, followed by a two column layout on desktop:
  - **Wider left column:** full project description, problem, approach, tradeoffs, and engineering work.
  - **Narrower right column:** Highlights and Tech Stack (and a repository link where available).
- Stack these columns naturally on mobile.
- Do not add empty sections merely to make pages longer; add concrete detail and relevant visuals.

## Technologies and where to edit
- React 19, TypeScript, Vite, React Router, plain CSS, Vercel. No backend required for this portfolio.
- Routes and app shell: `src/main.tsx`.
- Site header/footer: `src/components/SiteHeader.tsx`, `SiteFooter.tsx`.
- Homepage video/background: `src/components/HeroMedia.tsx`; shared inside-page hero: `src/components/PageHero.tsx`.
- Page implementations: `src/pages/Home.tsx`, `Projects.tsx`, `ProjectDetail.tsx`, `About.tsx`.
- Project content and metadata: `src/data/projects.ts`. Project artwork: `src/components/ProjectIcon.tsx`.
- Styles and responsive breakpoints: `src/styles.css`.
- Public assets: `public/images/` and `public/videos/`. Media files may not exist yet; preserve graceful CSS/still-image fallbacks.
- Note: `src/pages/Contact.tsx` may remain from an earlier iteration but is not an active route.

## Content and factual accuracy
- Feature **Omen NE**, **BMW Inventory Data Automation**, **MyChessBot**, and **BURE**. Present these as real work with honest scope, not as invented production systems.
- Omen NE: NOAA buoy and weather observation ingestion, transformation, alignment, and surf condition visualization work in progress. Do not claim completed forecasting models or deployed live predictions unless the owner confirms them.
- BMW Inventory Data Automation: Python inventory extraction and Excel workbook automation; approximately 384 vehicles processed in about five minutes versus up to 36 hours of manual work. Attribute metrics carefully and do not imply it was a company wide platform.
- MyChessBot: Python chess engine with minimax, alpha beta pruning, move ordering, and a React/FastAPI interface. Benchmark depth five search improvement from ~10 ms to ~2 ms; qualify as the owner's benchmark rather than a general performance claim.
- BURE: Partner/class project using scraped rental listings, cleaning, regression models, and a Django interface. Do not omit the collaborative nature or invent new features.
- Write like a real person: concise, specific, natural, confident without buzzwords. Don't invent employers, skill proficiency, metrics, deployed features, or success stories. If content is uncertain, leave a clearly marked TODO and ask the owner.
- About should feel personal without overwhelming visitors: engineering curiosity, automotive background, outdoor interests, and how these connect to the kinds of problems the owner likes solving.

## Accessibility, mobile and performance
- Design mobile first; test phone, tablet, and wide desktop widths. Prevent horizontal overflow and awkward hero text clipping.
- Use semantic headings/landmarks, descriptive links and alt text, keyboard accessible navigation, visible focus styles, sufficient contrast, and a working skip link.
- Background video must be muted, looping, `playsInline`, with a poster/fallback and a visible pause/play control. Respect `prefers-reduced-motion`; do not require video playback to understand the page. Do not autoplay several simultaneous videos.
- Optimize real image/video assets before shipping; avoid heavyweight runtime libraries and content jumps.
- Preserve sensible SEO metadata and direct navigation to deep routes (Vercel configuration exists).

## Working rules for Codex
1. Inspect existing files and preserve the established layout/components before making changes.
2. Prefer small, focused patches rather than rewriting whole pages or the stylesheet. `src/styles.css` already contains layered additions; avoid unnecessarily duplicating selectors.
3. Don't silently change the color palette, typography direction, page structure, project claims, or routes.
4. Keep designs consistent across pages and breakpoints. Avoid placeholder prose presented as a finished fact.
5. For each change, run `npm run build` when dependencies are available, inspect errors, and describe what was and wasn't tested.
6. Treat the current site as a strong baseline: prioritize replacing placeholder media, refining factual copy, checking mobile/accessibility, and publishing to Vercel over adding flashy features.
