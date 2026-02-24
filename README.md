# Steven Modimo Portfolio

This repository contains a personal portfolio site built with Next.js (App Router) and TypeScript. It highlights projects, skills, and a dashboard experience, with a focus on fast navigation, modern UI, and PWA capabilities (offline fallback + install prompt).

![Project Preview](public/modimo.jpg)

## What This Project Includes
- App Router structure under `src/app/` with routes like `dashboard/` and `projects/`.
- Reusable UI components in `src/components/` and shared helpers in `src/lib/`.
- PWA support via `public/sw.js`, `public/offline.html`, and `src/app/manifest.ts`.

## Run LocallyC:\Users\Jeff\OneDrive\Desktop\spm\src\app\opengraph-image.png
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Build and Serve Production
```bash
npm run build
npm run start
```

## Key Scripts
- `npm run dev`: starts Next.js with Turbopack.
- `npm run build`: creates a production build.
- `npm run start`: serves the production build.
- `npm run lint`: runs Next.js linting.
