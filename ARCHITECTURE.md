# Portfolio architecture

This portfolio is designed as a compact evidence-led product, not a decorated résumé. Its job is to make three things easy to understand: what Surya works on, how he thinks, and what changed because of the work.

## Product structure

The homepage is the fast path. It establishes backend-focused positioning and production evidence before showing selected work, experience, capabilities, and contact. It deliberately stays at five primary sections so a hiring manager can understand the profile in 30–60 seconds.

Project pages are the evidence path. They reuse structured data from `src/data/data.js` and follow one consistent narrative:

1. The real constraint
2. The system that addressed it
3. The decisions that shaped the solution
4. The measurable or externally recognized outcome

Writing is the depth path. MDX files are discovered automatically with `import.meta.glob`, so publishing a new note requires one file rather than a separate registry update.

## Signature interaction

`SystemCore.jsx` explains a bulk-ingestion request moving through intake, validation, batch processing, and recovery. It sits inside the Infor experience story, connecting the interaction directly to Surya's production experience with 10,000+ record pipeline runs.

The trace is intentionally interactive but not required for comprehension:

- each stage is a real button and can be inspected directly;
- the trace is user-controlled and never advances unexpectedly;
- each stage reveals a plain-language responsibility;
- the mobile layout becomes a readable two-by-two control grid;
- telemetry uses only claims supported by portfolio data, avoiding decorative fake precision.

## Content model

`src/data/data.js` is the content boundary. Components own presentation and behavior; the data file owns biography, work history, metrics, technologies, and case-study copy. This keeps repeated facts consistent across homepage, case studies, and résumé.

Each project provides:

- a stable `slug` for routing;
- summary content for the homepage and résumé;
- links to a live product or repository when available;
- a `caseStudy` object with challenge, system, decisions, flow, and outcome.
- a Proof Pack that distinguishes inspectable live/source artifacts from evidence that is not publicly available.

## Content quality gate

`scripts/validate-content.mjs` runs before every production build. It validates the real data source rather than a duplicate fixture, including:

- required person, project, experience, and case-study fields;
- object and array shapes plus every rendered array item;
- unique, URL-safe case-study slugs;
- HTTP(S)-only public links;
- ownership, constraint, reflection, measurement notes, and evidence artifacts;
- unique artifact labels and explicit unavailable-evidence states.

The validator reports all discovered issues with data paths in one run so content errors are actionable instead of failing later during rendering.

## Visual system

The interface uses warm paper, near-black ink, and clay as the only dominant accent. Newsreader carries expressive headlines; Instrument Sans handles product copy; DM Mono is reserved for labels and telemetry. Motion communicates state or hierarchy rather than adding background decoration.

Responsive behavior is handled in the shared stylesheet. The system trace compresses its labels and telemetry on narrow screens, architecture flows change from horizontal to vertical, and case-study facts stack without changing their reading order.

## Quality gates

Before shipping:

```bash
npm run lint
npm run build
```

Visual QA should cover `/`, all `/work/:slug` routes, `/writing`, an article, and `/resume` at desktop and mobile widths. Reduced-motion behavior and keyboard focus should be checked in a real browser.
