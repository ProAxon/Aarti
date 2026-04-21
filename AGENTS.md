# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14 frontend-only** education LMS site (AARTI). There is no backend, database, or authentication system — all data is hardcoded in components.

### Running the application

- `npm run dev` starts the Next.js dev server on port 3000 (see `package.json` scripts).
- `npm run lint` runs ESLint; `npm run build` runs a production build with type checking.
- See `README.md` for full details on project structure and pages.

### Gotchas

- Running `npm run build` before or during `npm run dev` can cause stale `.next` cache errors (e.g. "Cannot find module './635.js'"). If this happens, delete `.next/` and restart the dev server.
- The `/contribute` page's form POSTs to `/api/donations`, but no API route exists — the form submission will fail at runtime. This is expected.
- Login/register forms are stubs (`console.log` + `alert`), not wired to a backend.
