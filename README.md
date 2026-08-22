# jamalomosun.github.io

[![Deploy to GitHub Pages](https://github.com/jamalomosun/jamalomosun.github.io/actions/workflows/deploy.yml/badge.svg)](https://jamalomosun.github.io)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)

The personal portfolio and academic research showcase of **Jamal Omosun** — CS & Mathematics student at Carleton College and Caltech SURF Scholar.

This site blends a sci-fi CLI terminal aesthetic with modern readability standards, featuring software engineering projects, academic research preprints, dynamic Substack article feeds, and accessible interactive UI elements.

---

## 🛠 Tech Stack & Integrations

| Domain | Technology / Tool | Implementation Detail |
| :--- | :--- | :--- |
| **Frontend Framework** | React (18+) | Component-based single-page architecture built for fast client-side rendering. |
| **Routing** | React Router (`react-router-dom`) | Declarative client-side routing with active navigation states and accessible route management. |
| **Build Tooling** | Vite | Ultra-fast development server and optimized bundle generation. |
| **Styling System** | Pure CSS3 (Vanilla) | Modern design tokens via CSS Custom Properties (`var()`), fluid grid layouts, and custom keyframe SVG animations. |
| **Typography** | Google Fonts | Dual-typeface setup: `Inter` for prose readability and `Fira Code` for terminal aesthetics. |
| **External API** | Substack RSS + `rss2json` | Serverless RSS-to-JSON integration fetching live articles from `jamalomosun.substack.com`. |
| **Hosting & CI/CD** | GitHub Pages (`gh-pages`) | Static hosting deployed directly via build workflows. |

---

## 📂 Repository Structure

```text
jamalomosun.github.io/
├── public/
│   ├── Resume.pdf                  # Downloadable resume
│   ├── CS Comps Poster.pdf         # Research artifact
│   ├── Research_Poster_Presentation_SURF2025.pdf
│   └── favicon.svg                 # Browser icon
├── src/
│   ├── App.jsx                     # Router config, navbar, and core page layout
│   ├── main.jsx                    # React entry point
│   ├── styles.css                  # Global design system tokens, themes, and keyframes
│   └── components/
│       ├── Projects.jsx            # Featured software engineering showcase
│       ├── Research.jsx            # Caltech SURF & VURP academic research showcase
│       ├── Substack.jsx            # Client-side Substack RSS parser & card renderer
│       └── Footer.jsx              # SVG animated reactor core and accessibility status
├── package.json                    # Project dependencies and deployment scripts
└── README.md                       # Repository documentation
