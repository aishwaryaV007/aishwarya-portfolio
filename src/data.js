// All portfolio content lives here, so updating the site means editing this file only.
// The site is laid out like a programming contest: projects are "problems".

export const profile = {
  name: 'Aishwarya Vollala',
  role: 'Backend and mobile developer',
  intro:
    'Co-founder and backend developer of CodeVault (patent filed), owning authentication, coding-platform integrations and the PostgreSQL data layer. I also build ML projects with PyTorch and XGBoost, and mobile apps with React Native. Computer Science (Data Science) student at SNIST, Hyderabad.',
  resume: '/Aishwarya_Vollala_Resume.pdf',
  photo: '/aishwarya.webp',
  photoCaption: 'Contestant · Hyderabad',
}

export const links = {
  email: 'aishwaryavollala007@gmail.com',
  github: 'https://github.com/aishwaryaV007',
  linkedin: 'https://www.linkedin.com/in/aishwarya-vollala-1a804535a/',
  instagram: 'https://www.instagram.com/_aishwarya_14_07_/',
}

// The stats strip under the hero. Every number here is real.
export const stats = [
  { label: 'CGPA', value: '9.06' },
  { label: 'Projects', value: '4' },
  { label: 'CodeVault commits', value: '170+' },
  { label: 'Hackathons', value: '5' },
  { label: 'Patent filed', value: '1' },
]

// media.type: 'browser' (one or more screenshots) | 'phone-gallery' | 'phone-video'
export const projects = [
  {
    id: 'codevault',
    letter: 'A',
    name: 'CodeVault',
    tagline: 'Coding analytics and GitHub auto-sync',
    tags: ['backend', 'oauth', 'postgres'],
    badge: 'Patent filed',
    role: 'Co-founder, web backend',
    dates: 'Jun 2026 to now',
    statement:
      'Competitive programmers solve problems on LeetCode, Codeforces, CodeChef and HackerRank, but their progress is split across four sites and their accepted solutions never reach GitHub.',
    constraints: ['Four platforms, each with its own profile and stats.', 'The code stays private while the patent is pending.'],
    approach: [
      'Owned the web backend: GitHub OAuth login, platform connections, stats aggregation, public profiles and the database schema.',
      'One dashboard brings every platform together, and accepted solutions are pushed to the user’s GitHub repositories.',
      'Made 170+ commits to the platform, which I co-founded and co-built.',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'React', 'Docker'],
    note: 'Hosted app is offline right now.',
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
    letter: 'B',
    name: 'SpotLet',
    tagline: 'Map-based rental discovery',
    tags: ['mobile', 'maps', 'auth'],
    badge: 'Solo build',
    role: 'Built end to end',
    dates: 'May 2026 to now',
    statement:
      'Finding a rented room in India usually means calling brokers, paying brokerage and visiting places whose location was described as “near the metro”.',
    constraints: ['One codebase for Android, iOS and the web.', 'Owners must be able to list a place in minutes.'],
    approach: [
      'Put To-Let listings on a live Google Map with colour-coded pins for houses, PGs, flats and rooms.',
      'Built phone OTP login with Supabase Auth and Twilio, photo uploads and real-time availability.',
      'Seekers call or WhatsApp the owner straight from the listing, with no broker in between.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Google Maps API', 'Cloudinary', 'Twilio'],
    // live: 'https://spot-let.vercel.app', // put back once the Supabase project is restored
    code: 'https://github.com/aishwaryaV007/SpotLet',
    note: 'Live demo is offline right now.',
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
    letter: 'C',
    name: 'ExamShield',
    tagline: 'AI handwritten answer-sheet evaluator',
    tags: ['ml', 'ocr', 'mobile'],
    badge: 'Team project',
    role: 'Mobile app, ML pipeline, CI',
    dates: 'Jul 2026 to now',
    statement: 'Teachers grade stacks of handwritten answer sheets by hand, one question at a time.',
    constraints: ['Runs fully offline after a one-time model download.', 'Marks must be question-wise, not just a total.'],
    approach: [
      'Built the React Native (Expo) mobile app to scan answer sheets and view graded results.',
      'Refactored the Python grading pipeline, which reads handwriting with TrOCR and marks answers with XGBoost.',
      'Fixed the GitHub Actions CI, and led competitor research and the pitch deck.',
    ],
    stack: ['Python', 'PyTorch', 'TrOCR', 'XGBoost', 'React Native', 'Expo'],
    note: 'Code is private.',
    media: {
      type: 'phone-video',
      src: '/projects/examshield-app.mp4',
      caption: 'Screen recording of the ExamShield mobile app.',
    },
  },
  {
    id: 'sarathi',
    letter: 'D',
    name: 'Sarathi',
    tagline: 'Plain-language guide to business approvals',
    tags: ['full stack', 'ai', 'hackathon'],
    badge: 'SIH 2026 · Team of 3',
    role: 'Laid the groundwork',
    dates: 'Sep 2026',
    statement:
      'Starting a business in India needs 8 to 15 government approvals, and the official portals assume you already know which ones apply to you.',
    constraints: [
      'Every approval shown must cite the law that requires it.',
      'The AI only turns the user’s words into facts; a rules engine decides the approvals.',
    ],
    approach: [
      'Laid the groundwork for the whole project: set up the Next.js app and its structure, and built the core pages (describe, checklist, apply, documents, dashboard).',
      'Connected Supabase for login, database and file storage.',
      'Added the AI step and a dataset of 30+ Indian business approvals with sources.',
      'Teammates then added the pricing page, multi-language support and further work on the rules engine.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Groq (Llama 3.3)'],
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

// "Submissions": internships and positions, newest first.
export const history = [
  { when: 'Mar 2026 to now', what: 'Data Guide', where: 'Infinitix', result: 'Mentor students in Python, data analysis and visualisation.' },
  { when: 'Now', what: 'Board Member and Student Ambassador', where: 'IIC', result: 'Manage the college innovation cell.' },
  {
    when: 'May 2026',
    what: 'Data Science Intern',
    where: 'SkillCraft Technology',
    result:
      'Cleaned and explored the Titanic dataset (missing values, survival by gender, class, age and fare) and visualised World Bank population data with Pandas, Matplotlib and Seaborn.',
  },
  {
    when: 'Mar to May 2026',
    what: 'Data Science Intern',
    where: 'Unlox',
    result:
      'Completed the data science program (Python, SQL, Excel dashboards) through weekly assessments and mini projects. Built a Social Media Analytics dashboard in Streamlit on YouTube data: a Random Forest model to predict video reach, comment sentiment analysis and t-test based A/B testing of title formats.',
  },
]

// Practice profiles. Numbers were read from the platforms on 22 Oct 2026; update them here when they grow.
export const codingProfiles = {
  asOf: 'Oct 2026',
  items: [
    {
      platform: 'LeetCode',
      handle: 'AishwaryaVollala',
      href: 'https://leetcode.com/u/AishwaryaVollala/',
      stats: [
        { value: '105', label: 'solved' },
        { value: '43', label: 'medium' },
        { value: '29', label: 'contests' },
      ],
    },
    { platform: 'Codeforces', handle: '24311a6798', href: 'https://codeforces.com/profile/24311a6798' },
    { platform: 'CodeChef', handle: 'aishwarya_070', href: 'https://www.codechef.com/users/aishwarya_070' },
  ],
}

export const hackathons = [
  { name: 'Smart India Hackathon 2026', result: 'Built Sarathi with a team of 3' },
  { name: 'Smart India Hackathon 2025', result: 'Team leader of 6, cleared the internal round' },
  { name: 'IEEE Hackathon', result: 'Participated' },
  { name: 'Hack The Matrix', result: 'Participated' },
  { name: 'CodeStorm', result: 'Participated' },
]

export const education = {
  degree: 'B.Tech, Computer Science and Engineering (Data Science)',
  college: 'Sreenidhi Institute of Science and Technology, Hyderabad',
  years: '2024 to 2028',
  cgpa: '9.06 / 10',
}

export const certifications = ['Microsoft Power BI', 'NPTEL Design and Analysis of Algorithms']

export const skills = [
  { group: 'Languages', items: 'Python, Java, C, SQL, HTML5, CSS3, JavaScript (basic)' },
  { group: 'Core CS', items: 'Data Structures and Algorithms, DBMS, Operating Systems' },
  { group: 'Frontend and mobile', items: 'React.js, React Native, Expo' },
  { group: 'Databases', items: 'PostgreSQL (Row-Level Security), MySQL, MongoDB, Redis, Supabase' },
  { group: 'AI, ML and data', items: 'PyTorch, Hugging Face, XGBoost, OpenCV, Pandas, NumPy, Power BI, Prompt Engineering' },
  {
    group: 'DevOps and tools',
    items: 'Git, GitHub Actions (CI/CD), Docker, Render, Vercel, EAS Build, Postman, LiveKit, Cloudinary, Twilio',
  },
]
