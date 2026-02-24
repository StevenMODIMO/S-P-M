# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js (App Router) project.
- `src/app/` holds routes, layouts, and metadata files (`layout.tsx`, `page.tsx`, `manifest.ts`, etc.).
- `src/components/`, `src/hooks/`, `src/context/`, `src/lib/` contain UI components, React hooks, context providers, and shared utilities.
- `public/` stores static assets, including PWA files like `sw.js` and `offline.html`.
- Build artifacts live in `.next/` (do not edit by hand).

## Build, Test, and Development Commands
Use npm scripts defined in `package.json`:
- `npm run dev` starts the dev server with Turbopack.
- `npm run build` creates a production build in `.next/`.
- `npm run start` serves the production build.
- `npm run lint` runs Next.js linting.

## Coding Style & Naming Conventions
- Language: TypeScript + React. JSX runtime is `react-jsx`.
- Formatting: no explicit formatter configured (no Prettier config found). Keep changes minimal and consistent with nearby code.
- Naming: components in `PascalCase`, hooks in `useCamelCase`, utility functions in `camelCase`.
- Paths: prefer `@/*` imports for `src/*` when useful.

## Testing Guidelines
No test framework is configured and no test scripts exist. If tests are added, use a clear naming pattern like `*.test.ts(x)` and add a matching npm script (e.g., `npm run test`). Call out any test gaps in PRs.

## Commit & Pull Request Guidelines
Recent commit history mixes plain, sentence-style messages (e.g., “added full PWA caching and offline mode”) with merge commits created by GitHub. There is no strict convention enforced.
- Commits: keep messages short, imperative or descriptive, and specific.
- PRs: include a clear summary, list key changes, and add screenshots for UI changes (e.g., updated layout or PWA install UI).

## Security & Configuration Tips
- Environment values live in `.env` (do not commit secrets).
- PWA assets are in `public/` (`sw.js`, `offline.html`) and manifest metadata in `src/app/manifest.ts`.
