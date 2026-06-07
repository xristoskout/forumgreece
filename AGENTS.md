<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Goal
Tours page is now a pure Viator widget index with compact region pills + visual region cards + inline widget per destination.

## Key Design Decisions
- "Our Picks" manual curation removed entirely — only Viator widgets remain
- No toggle, filters, search bar, sort, or pagination
- Two entry points per region: compact pills + image cards
- Both pills and cards select the same region and open the widget below
- Region cards without a Viator widget mapping show "Coming Soon" state
- Hero has `pt-24` (96px) to clear fixed nav bar (~86px)
- Viator partner ID: `P00298401`

## Progress
- [x] Hero cleaned up (toggle removed, `pt-24`, 70vh, gradient adjusted)
- [x] "Our Picks" removed entirely, `tourExperiences` export deleted
- [x] Region pills: compact flex-wrap of all 20+ regions
- [x] Region image cards: 2/3/4-col grid below pills
- [x] Inline Viator widget slides in when a region is selected (pills or cards)
- [x] Dead code removed (REGION_GROUPS, useMemo, AnimatePresence, etc.)

## Troubleshooting
- `.next` cache corruption → 404 on dynamic routes: `rm -rf .next && npm run dev`

## Relevant Files
- `app/[lang]/tours/all/tours-directory-client.tsx` — Main component
- `app/[lang]/tours/all/page.tsx` — Metadata, SEO
- `lib/experiences.ts` — `VIATOR_WIDGET_MAPPING` (20 region→UUID entries)
- `components/viator-widget.tsx` — Client component loading Viator script
