# Aishwarya Vollala, Portfolio

My personal portfolio, laid out like a programming contest: each project is a "problem" with a statement, constraints, my part, the stack and a verdict, alongside real screenshots and recordings.

Built with **React** and **Vite**, styled with plain CSS. The font (Source Sans 3) is served from the site itself, so there are no third-party requests, cookies or analytics.

## Structure

```text
portfolio/
├── public/
│   ├── Aishwarya_Vollala_Resume.pdf   # resume offered for download
│   ├── aishwarya.webp                 # profile photo in the hero
│   ├── projects/                      # real screenshots and the ExamShield app recording
│   └── favicon.svg
├── src/
│   ├── data.js               # all the content: profile, links, projects, experience, skills
│   ├── components/
│   │   ├── Header.jsx        # sticky nav with a mobile menu
│   │   ├── Hero.jsx          # name, focus, stats strip, resume and profile links
│   │   ├── Projects.jsx      # problem list table and one section per problem
│   │   ├── ProjectMedia.jsx  # screenshots, phone screens or a screen recording
│   │   ├── Experience.jsx    # history: internships, roles and hackathons
│   │   ├── About.jsx         # education, patent, certifications, toolkit
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
