# Surya Prabhas — Portfolio

A product-focused portfolio for a backend-focused full-stack engineer working across enterprise services, data processing, LLM integrations, and product interfaces. The site combines direct editorial typography, a user-controlled pipeline explainer, evidence-led project case studies, and an MDX writing section.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- MDX with frontmatter
- Vercel Analytics

## Structure

```text
src/
├── components/
│   ├── sections/        # Homepage sections
│   ├── Nav.jsx
│   └── SystemCore.jsx   # Interactive bulk-ingestion pipeline trace
├── data/data.js         # Portfolio content
├── lib/posts.js         # MDX post discovery and metadata
├── pages/               # Case studies, writing, resume, and error routes
├── posts/               # One MDX file per published article
├── App.jsx
└── index.css            # Tokens, global styles, and 3D treatments
```

Update biography, experience, projects, and skills in `src/data/data.js`. Each project includes a structured `caseStudy` object that powers `/work/:slug`. Publish writing by adding an `.mdx` file with frontmatter to `src/posts/`.

## Routes

- `/` — portfolio overview and selected work
- `/work/:slug` — data-driven engineering case study
- `/writing` and `/writing/:slug` — MDX writing index and article
- `/resume` — web résumé with PDF download

The interaction and content decisions behind the current build are documented in [ARCHITECTURE.md](./ARCHITECTURE.md).

## Development

```bash
npm install
npm run dev
```

Before shipping:

```bash
npm run validate:content
npm run lint
npm run build
```

Content validation checks project slugs, required case-study fields, evidence artifacts, public URLs, and route uniqueness before every production build.
