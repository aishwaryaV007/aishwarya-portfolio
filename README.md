# Aishwarya Vollala, Portfolio

My personal portfolio: selected projects with real screenshots and recordings, experience, education, skills and contact details.

Built with **React** and **Vite**, styled with plain CSS. The font (Source Sans 3) is served from the site itself, so there are no third-party requests, cookies or analytics.

## Structure

```text
portfolio/
├── public/
│   ├── Aishwarya_Vollala_Resume.pdf   # resume offered for download
│   ├── projects/                      # real screenshots and the ExamShield app recording
│   └── favicon.svg
├── src/
│   ├── data.js               # all the content: profile, links, projects, experience, skills
│   ├── components/
│   │   ├── Header.jsx        # sticky nav with a mobile menu
│   │   ├── Hero.jsx          # name, focus, resume and profile links
│   │   ├── Projects.jsx      # project layout (alternating, stacked or text-only)
│   │   ├── ProjectMedia.jsx  # screenshots, phone screens or a screen recording
│   │   ├── Experience.jsx    # internships and leadership
│   │   ├── About.jsx         # education, achievements, skills
│   │   └── Contact.jsx       # email and profiles
│   ├── useReveal.js          # fades sections in the first time they scroll into view
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # design tokens at the top, motion at the bottom
└── vite.config.js
```

To change any text on the site, edit `src/data.js`.

All animation is turned off for visitors who set "reduce motion" on their device; they see every section straight away. To add a project visual, put the file in `public/projects/` and set the project's `media` field.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is written to `dist/`, ready for Vercel or GitHub Pages.
