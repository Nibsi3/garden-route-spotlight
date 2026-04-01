# garden route spotlight

![status](https://img.shields.io/badge/status-active-16a34a)
![stack](https://img.shields.io/badge/stack-next.js%20%7C%20typescript-111827)
![type](https://img.shields.io/badge/type-local_discovery-0ea5e9)

![garden route spotlight preview](https://opengraph.githubassets.com/1/Nibsi3/garden-route-spotlight)

Local discovery platform for Garden Route businesses with structured listings, search-friendly categories, and map-aware browsing.

## Snapshot
- **Core value:** make regional businesses easier to discover and compare.
- **Architecture:** modular App Router setup with reusable components/hooks.
- **Data layer:** curated listing data with script-assisted updates.

## What it does
- Aggregates local business listings into searchable, structured sections.
- Supports map/address workflows and category-driven exploration.
- Uses script-assisted data handling for content updates.

## Stack
- Next.js + React + TypeScript
- App Router project structure with modular components/hooks

## Local development
```bash
npm install
npm run dev
```

Build and run:
```bash
npm run build
npm run start
```

## Repository layout
- `app/` route definitions and page composition
- `components/` UI and content building blocks
- `hooks/` reusable state/data helpers
- `lib/` configuration and domain logic
- `data/` project content sources

## Practical next improvements
- Add end-to-end tests for map and listing filters.
- Add lightweight admin import flow for business updates.
- Add category-level analytics for discovery behavior.
