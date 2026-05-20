# BioNorth Website

Marketing site for [BioNorth Tech](https://github.com/bionorthtech) — a team of high-school
students building deep tech.

- **The mission** — a closed-loop brain-computer interface that detects freezing of gait in
  Parkinson's disease and restores movement with precision neuromuscular stimulation.
- **Side projects** — including [AiMetr](https://github.com/bionorthtech/AiMetr), a
  multi-provider AI usage monitor with a desktop pet and ESP32-S3 hardware companion.

## Tech stack

Vite + React (`react-router-dom`). Single-page app, deployed as a static site to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── main.jsx            # React root + router
├── App.jsx             # routes + shared layout
├── theme.css           # design tokens, layout utilities, responsive rules
├── components/         # Nav, Footer, EEGWave, Reveal
├── pages/              # Home (the mission), SideProjects (AiMetr)
└── data/content.js     # site content constants
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages at `https://bionorthtech.github.io/BioNorth-Main/`.

**One-time setup:** in repo **Settings → Pages**, set **Source = "GitHub Actions"**.

### Custom domain (bionorth.us)

To serve from `bionorth.us` instead of the project path:

1. Set `base: "/"` in `vite.config.js`.
2. Add `public/CNAME` containing `bionorth.us`.
3. Configure the domain's DNS and the custom domain in Settings → Pages.
