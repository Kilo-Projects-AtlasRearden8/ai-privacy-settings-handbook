# STATUS

AI Privacy Settings Handbook — Asdale Dynamics, LLC

## What was built

A beginner-friendly manual for privacy and data-training settings in popular AI apps and assistants, delivered two ways:

- **`docs/`** — 8 Markdown pages:
  - `00-intro.md` — introduction and how to use the guide
  - `01-what-gets-stored.md` — what AI apps keep about your chats, app by app
  - `02-opt-out-training.md` — step-by-step opt-out instructions for ChatGPT, Claude, Gemini, Copilot, Perplexity, Meta AI, Grok, and local AI
  - `03-deleting-history.md` — how to delete chat history per app, plus what "deleted" really means
  - `04-safe-sharing.md` — what is and isn't safe to paste into an AI
  - `05-workplace-health-cautions.md` — workplace cautions and health-data/HIPAA cautions (education only, never medical advice)
  - `06-printable-checklist.md` — a printable one-page checklist
  - `07-help-links.md` — official help links for each company
- **`static/`** — a small static website mirroring every doc page as HTML (9 pages) with shared CSS. No build step; open any `.html` file in a browser.
- **`README.md`** — project overview; credits Asdale Dynamics, LLC.
- **`LICENSE`** — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`.
- **`package.json` + `verify.js`** — verification script (`npm test` / `npm run lint`).
- **`STATUS.md`** — this file.

All pages are dated October 27, 2026 and written in plain English with official help links.

## How to run it

- Read the manual: open any file in `docs/` (Markdown) or `static/` (HTML) in a browser or text editor.
- The static site needs no build step: open `static/index.html` and navigate.
- Run verification: `npm test` (same as `npm run lint`). Checks files exist, LICENSE copyright line, README credit, page dates, internal link resolution, and help-link URLs.

## Verification results

`npm test` — all checks passed:

- 22 required files present
- LICENSE contains the exact copyright line `Copyright (c) 2026 Asdale Dynamics, LLC` and is MIT
- README credits Asdale Dynamics, LLC
- All 8 docs pages are dated October 27, 2026
- Every page links to `style.css`
- All internal HTML links resolve (no broken links)
- Help-links doc contains 10 external official URLs
- Printable checklist contains checkbox items

Exit code: 0.

## Known gaps

- Links to official help pages were checked as of October 27, 2026 only; companies change URLs and settings over time. Users should verify against the live help pages before acting on sensitive data.
- The static site is hand-written HTML, not generated from the Markdown. If docs are edited, `static/` must be updated by hand to match.
- No automated spell-check or HTML validation beyond the `verify.js` checks.
- This is general education, not legal or medical advice. Workplace policies and laws such as HIPAA override anything in this guide.

## Repository notes

- Git initialized locally; one commit. Never pushed, no remote created, no workflows added.
- No secrets, API keys, or personal data in any file.
- Committed as the existing git identity (Dylan Asdale / dylanasdale@users.noreply.github.com), no Co-authored-by trailers.
