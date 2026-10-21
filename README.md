# Aishwarya Vollala — Portfolio

My personal portfolio: projects, experience, leadership, skills and contact details, on one page.

Built with **React** and **Vite**, styled with plain CSS to match my resume (Source Sans 3, navy and blue).

## Structure

```text
portfolio/
├── public/
│   ├── Aishwarya_Vollala_Resume.pdf   # resume offered for download
│   └── favicon.svg
├── src/
│   ├── data.js            # all the content: profile, links, projects, experience, skills
│   ├── components/
│   │   ├── Header.jsx      # sticky nav with a mobile menu
│   │   ├── Hero.jsx        # name, education, summary, resume and social links
│   │   ├── Projects.jsx    # project cards with stack and links
│   │   ├── Experience.jsx  # internships timeline
│   │   ├── Leadership.jsx  # positions of responsibility and achievements
│   │   ├── Skills.jsx      # grouped skill tags
│   │   ├── Contact.jsx     # email, LinkedIn, GitHub, Instagram
│   │   ├── Section.jsx     # shared section wrapper
│   │   └── SocialIcons.jsx # GitHub / LinkedIn / Instagram SVG icons
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── vite.config.js
```

To change any text on the site, edit `src/data.js`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
```

The static site is written to `dist/`, ready for Vercel or GitHub Pages.
