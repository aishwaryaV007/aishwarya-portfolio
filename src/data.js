// All portfolio content lives here, so updating the site means editing this file only.

export const profile = {
  name: 'Aishwarya Vollala',
  role: 'Backend and mobile developer',
  intro:
    'I build backend systems, mobile apps and machine learning projects. Co-founder of CodeVault and a Computer Science (Data Science) student at SNIST, Hyderabad.',
  resume: '/Aishwarya_Vollala_Resume.pdf',
}

export const links = {
  email: 'aishwaryavollala007@gmail.com',
  github: 'https://github.com/aishwaryaV007',
  linkedin: 'https://www.linkedin.com/in/aishwarya-vollala-1a804535a/',
  instagram: 'https://www.instagram.com/_aishwarya_14_07_/',
}

// media.type: 'browser' (one or more screenshots) | 'phone-gallery' | 'phone-video'
export const projects = [
  {
    id: 'codevault',
    name: 'CodeVault',
    summary:
      'One dashboard for your LeetCode, Codeforces, CodeChef and HackerRank stats, with accepted solutions synced to GitHub automatically.',
    context: 'Co-founder · Patent applied · Jun 2026 to now',
    did: [
      'Owned the web backend: GitHub OAuth login, platform connections, stats aggregation, public profiles and the database schema.',
      'Made 170+ commits to the platform, which I co-founded and co-built.',
    ],
    stack: 'Node.js, Express, PostgreSQL, Redis, React, Docker',
    note: 'Code is private while the patent is pending, and the hosted app is offline right now.',
    media: {
      type: 'browser',
      images: [
        {
          src: '/projects/codevault-dashboard.webp',
          label: 'CodeVault · Dashboard',
          alt: 'CodeVault dashboard: total problems solved, contests and accuracy, with stats from LeetCode, Codeforces, CodeChef and HackerRank.',
          width: 1600,
          height: 916,
        },
        {
          src: '/projects/codevault-repositories.webp',
          label: 'CodeVault · Repositories',
          alt: 'CodeVault repositories page: each coding platform linked to a GitHub repository with its sync status.',
          width: 1600,
          height: 906,
        },
      ],
    },
  },
  {
    id: 'spotlet',
    name: 'SpotLet',
    summary: 'Find rental houses, PGs and flats on a live map and call the owner directly, with no broker in between.',
    context: 'Solo project · May 2026 to now',
    did: [
      'Put To-Let listings on a live Google Map with colour-coded pins for houses, PGs, flats and rooms.',
      'Built phone OTP login with Supabase Auth and Twilio, photo uploads and real-time availability.',
      'Shipped one codebase to Android, iOS and the web with Expo.',
    ],
    stack: 'React Native, Expo, TypeScript, Supabase, Google Maps API, Cloudinary, Twilio',
    // live: 'https://spot-let.vercel.app', // put back once the Supabase project is restored
    code: 'https://github.com/aishwaryaV007/SpotLet',
    note: 'The live demo is offline right now.',
    media: {
      type: 'phone-gallery',
      caption: 'Screens from a recording of SpotLet running on an Android phone.',
      images: [
        { src: '/projects/spotlet-feed.webp', alt: 'SpotLet home feed listing rooms with rent and filters for 1BHK, 2BHK and 3BHK.' },
        { src: '/projects/spotlet-map.webp', alt: 'SpotLet map view with rent price pins and a listing card.' },
        { src: '/projects/spotlet-details.webp', alt: 'SpotLet property details: rent, deposit, room type and furnishing.' },
      ],
    },
  },
  {
    id: 'examshield',
    name: 'ExamShield',
    summary: 'Grades scanned handwritten answer sheets offline and gives question-wise marks.',
    context: 'Team project · Jul 2026 to now',
    did: [
      'Built the React Native (Expo) mobile app to scan answer sheets and view graded results.',
      'Refactored the Python grading pipeline, which reads handwriting with TrOCR and marks answers with XGBoost.',
      'Fixed the GitHub Actions CI, and led competitor research and the pitch deck.',
    ],
    stack: 'Python, PyTorch, TrOCR, XGBoost, React Native, Expo',
    note: 'Code is private.',
    media: {
      type: 'phone-video',
      src: '/projects/examshield-app.mp4',
      caption: 'Screen recording of the ExamShield mobile app.',
    },
  },
  {
    id: 'sarathi',
    name: 'Sarathi',
    summary:
      'Describe a business in plain words and get the government approvals it needs, each linked to the law that requires it.',
    context: 'Smart India Hackathon 2026 · Team of 3 · Sep 2026',
    did: [
      'Laid the groundwork for the whole project: set up the Next.js app and its structure, and built the core pages (describe, checklist, apply, documents, dashboard).',
      'Connected Supabase for login, database and file storage.',
      'Added the AI step and a dataset of 30+ Indian business approvals with sources.',
      'Teammates then added the pricing page, multi-language support and further work on the rules engine.',
    ],
    stack: 'Next.js, TypeScript, Tailwind CSS, Supabase, Groq (Llama 3.3)',
    live: 'https://sarathi-lemon.vercel.app',
    code: 'https://github.com/aishwaryaV007/sarathi',
    media: {
      type: 'browser',
      images: [
        {
          src: '/projects/sarathi.webp',
          label: 'sarathi-lemon.vercel.app',
          alt: 'Sarathi home page: a business description turned into a list of required approvals with the law behind each one.',
          width: 1600,
          height: 1000,
        },
      ],
    },
  },
]

export const experience = [
  {
    role: 'Data Science Intern',
    org: 'Unlox',
    dates: 'Mar to May 2026',
    points: [
      'Completed the data science program (Python, SQL, Excel dashboards) through weekly assessments and mini projects.',
      'Built a Social Media Analytics dashboard in Streamlit on YouTube data: a Random Forest model to predict video reach, comment sentiment analysis, and t-test based A/B testing of title formats.',
    ],
  },
  {
    role: 'Data Science Intern',
    org: 'SkillCraft Technology',
    dates: 'May 2026',
    points: [
      'Cleaned and explored the Titanic dataset (missing values, survival by gender, class, age and fare) and visualised World Bank population data with Pandas, Matplotlib and Seaborn.',
    ],
  },
]

export const leadership = [
  { role: 'Board Member and Student Ambassador', org: 'IIC', detail: 'Manage the college innovation cell.', dates: 'Now' },
  { role: 'Data Guide', org: 'Infinitix', detail: 'Mentor students in Python, data analysis and visualisation.', dates: 'Mar 2026 to now' },
  { role: 'Team Leader', org: 'Smart India Hackathon 2025', detail: 'Led a 6-member team that cleared the internal round.', dates: 'Aug 2025' },
]

export const education = {
  degree: 'B.Tech, Computer Science and Engineering (Data Science)',
  college: 'Sreenidhi Institute of Science and Technology, Hyderabad',
  years: '2024 to 2028',
  cgpa: '9.06 / 10',
}

export const achievements = [
  { label: 'Patent', text: 'Patent application filed for CodeVault.' },
  {
    label: 'Hackathons',
    text: 'Smart India Hackathon 2025 (team leader, cleared the internal round) and 2026 (Sarathi), IEEE Hackathon, Hack The Matrix, CodeStorm.',
  },
  { label: 'Certifications', text: 'Microsoft Power BI. NPTEL Design and Analysis of Algorithms.' },
]

export const skills = [
  { group: 'Languages', items: 'Python, Java, C, SQL, HTML5, CSS3, JavaScript (basic)' },
  { group: 'Core CS', items: 'Data Structures and Algorithms, DBMS, Operating Systems' },
  { group: 'Frontend and mobile', items: 'React, React Native, Expo' },
  { group: 'Databases', items: 'PostgreSQL (Row-Level Security), MySQL, MongoDB, Redis, Supabase' },
  { group: 'AI, ML and data', items: 'PyTorch, Hugging Face, XGBoost, OpenCV, Pandas, NumPy, Power BI, Prompt Engineering' },
  {
    group: 'DevOps and tools',
    items: 'Git, GitHub Actions, Docker, Render, Vercel, EAS Build, Postman, LiveKit, Cloudinary, Twilio',
  },
]
