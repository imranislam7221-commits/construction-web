# MOU Construction — Corporate Website

A high-fidelity, industrial-brutalist marketing site for **MOU Construction**, a
heavy-engineering and infrastructure firm. Built as a statically exported
Next.js application.

## Tech Stack

- **Framework:** Next.js 15 (App Router), static export (`output: 'export'`)
- **UI:** React 19, Tailwind CSS 3
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** lucide-react

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build → static site in `out/` |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_CONTACT_ENDPOINT` — a form backend URL (e.g. Formspree / Web3Forms)
  the Contact form POSTs to. If unset, the form validates and shows a success
  state but does **not** transmit (dev-only fallback).

## Project Structure

```
src/
  app/            # Routes: / (home), /about, /machinery, /projects
  components/
    home/         # Hero, Services, Contact, IndustrialMarquee
    layout/       # Navbar, Footer
    ui/           # FadeIn (shared client-side motion wrapper)
  data/           # projects & services content
```

## Deployment

`output: 'export'` produces a fully static site in `out/`, deployable to any
static host (Vercel, Netlify, GitHub Pages, S3/CloudFront, etc.):

```bash
npm run build   # generates ./out
```

## Notes

- Demo imagery is loaded from Unsplash — replace with owned assets before production.
- Content (projects, machinery, contact details) is placeholder; edit in `src/data/` and the relevant components.
