# Agent notes — oSystems website

- **Stack:** Astro 5 (static output) + React 19 islands + Tailwind v4 (via `@tailwindcss/vite`). Not Next.js — `next` is not installed; ignore any Next.js conventions.
- **Structure:** `src/pages/*.astro` are thin route wrappers around `src/views/*.tsx`. Shared UI in `src/components/`, design tokens in `src/lib/tokens.ts`, layout in `src/layouts/Base.astro`.
- **Styling:** mostly inline-style objects built from `src/lib/tokens.ts` (ported from the design prototype), not Tailwind classes. Follow that idiom.
- **Images:** only files referenced from `src/` live in `public/uploads/`. Source artwork goes to `originals/uploads/`; unused WebP variants to `originals/unused/`.
- **Copy drafts:** `docs/models/*.html` are standalone marketing/copy prototypes, not part of the build.
- **Verify:** `npm run lint && npm run typecheck && npm run build`.
