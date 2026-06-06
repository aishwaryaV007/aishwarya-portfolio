# Aishwarya's Developer Portfolio 🚀

Welcome to my personal developer portfolio! This is a modern, high-performance, single-page application built to showcase my software architecture skills, featured creations, and professional journey.

The design is built with a **dark-first aesthetic**, using vibrant gradients, glassmorphism, responsive elements, and smooth interactions.

---

## 🛠️ Tech Stack & Libraries
* **Frontend Core**: [React.js](https://react.dev/) & [Vite](https://vite.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (integrating direct plugin imports) & Vanilla CSS variables for smooth light/dark theme shifts
* **Icons**: [Lucide React](https://lucide.dev/) & customized inline SVGs
* **Fonts**: Google Fonts (`Outfit` & `Inter`)

---

## ✨ Key Features
1. **Glassmorphic Navigation**: Sticky header with page scrolling anchors, responsive slide-out mobile drawer, and dynamic active section triggers.
2. **Interactive Hero Section**: Highlighting technical domains with automated typing loops and floating, hover-responsive engineering tags.
3. **Arsenal Skills Dashboard**: Categorized display (Frontend, Backend, Database, Cloud/DevOps) enabling quick switches and animated percentage indicators.
4. **Filterable Projects Grid**: Card interface displaying stack tags and category filters (All, Full-Stack, Frontend, Backend). Cards support click overlays showing detailed project features and repository code links.
5. **Timeline Experience**: Alternating bulleted milestones detailing corporate experience and outcomes.
6. **SQLite Mock Console Database**: Fully validated Contact Form connected to a local storage mock controller to simulate database entry log tables.
7. **Theme Toggle (Dark & Light Mode)**: Smooth shifting color-scheme variables persisted inside local client storage.

---

## 📁 Repository Structure
```text
Portfolio/
├── public/                 # Static public assets (icons.svg, favicon.svg)
├── src/
│   ├── assets/             # Branding logos & vector icons
│   ├── components/         # Modular layout sections
│   │   ├── Navbar.jsx      # Sticky responsive navigation & theme toggler
│   │   ├── Hero.jsx        # Tagline, typing loops, and floating items
│   │   ├── Skills.jsx      # Interactive capabilities charts
│   │   ├── Projects.jsx    # Project cards, filter headers, and overlay modals
│   │   ├── Experience.jsx  # Milestone chronology timeline
│   │   ├── Contact.jsx     # Validated form and SQLite storage logs
│   │   └── Icons.jsx       # Custom inline SVG brand components
│   ├── App.jsx             # Main layout assembly
│   ├── main.jsx            # DOM compiler mount
│   └── index.css           # Tailwind v4 configuration and custom keyframe animations
├── vite.config.js          # Vite build plugin definitions
└── package.json            # Scripts & project dependencies
```

---

## 🚀 Local Installation & Run

Follow these simple steps to run this project on your system:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Clone and Install Dependencies
Navigate into the project directory and install the necessary dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Vite HMR server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 4. Create Production Build
Generate fully minimized static files ready for hosting:
```bash
npm run build
```
The compiled artifacts will be written to the `dist/` directory.
