// All portfolio content lives here, so updating the site means editing this file only.

export const profile = {
  name: 'Aishwarya Vollala',
  headline: 'Computer Science (Data Science) student building backend systems, mobile apps and ML projects.',
  location: 'Hyderabad, India',
  college: 'Sreenidhi Institute of Science & Technology',
  degree: 'B.Tech in Computer Science and Engineering (Data Science)',
  years: '2024 – 2028 (Expected)',
  cgpa: '9.06 / 10',
  summary:
    'Strong foundation in Python, Java, C, DSA, DBMS and operating systems. Co-founder and backend developer of CodeVault (patent applied), owning authentication, coding-platform integrations and the PostgreSQL data layer across 170+ commits. I build ML and data projects with PyTorch, XGBoost and Pandas, and mobile apps with React Native.',
  resume: '/Aishwarya_Vollala_Resume.pdf',
}

export const links = {
  email: 'aishwaryavollala007@gmail.com',
  github: 'https://github.com/aishwaryaV007',
  linkedin: 'https://www.linkedin.com/in/aishwarya-vollala-1a804535a/',
  instagram: 'https://www.instagram.com/_aishwarya_14_07_/',
}

export const projects = [
  {
    name: 'CodeVault',
    tagline: 'Coding analytics & GitHub auto-sync platform',
    badge: 'Patent applied',
    dates: 'Jun 2026 – Present',
    role: 'Co-founder · Backend',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'React', 'Docker'],
    points: [
      'Co-founded and co-built a platform that unifies LeetCode, Codeforces, CodeChef and HackerRank stats into one dashboard and auto-syncs accepted solutions to GitHub; 170+ commits.',
      'Owned the web backend: GitHub OAuth login, platform connections, stats aggregation, public profiles and the database schema.',
    ],
    note: 'Code is private while the patent is pending.',
  },
  {
    name: 'ExamShield',
    tagline: 'AI handwritten answer-sheet evaluator',
    badge: 'Team project',
    dates: 'Jul 2026 – Present',
    role: 'Mobile app · ML pipeline · CI',
    stack: ['Python', 'PyTorch', 'TrOCR', 'XGBoost', 'React Native', 'Expo'],
    points: [
      'Offline AI system that auto-grades scanned handwritten answer sheets with question-wise marks, using TrOCR and XGBoost.',
      'Built the React Native (Expo) mobile app to scan answer sheets and view graded results.',
      'Refactored the Python grading pipeline, fixed the GitHub Actions CI, and led competitor research and the pitch deck.',
    ],
    note: 'Code is private.',
  },
  {
    name: 'SpotLet',
    tagline: 'Map-based rental discovery app',
    badge: 'Solo project',
    dates: 'May 2026 – Present',
    role: 'Built end to end',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Google Maps API', 'Cloudinary', 'Twilio'],
    points: [
      'Digitised “To-Let” boards onto a live Google Map with colour-coded pins for houses, PGs, flats and rooms.',
      'Implemented phone-OTP login with Supabase Auth and Twilio, photo uploads and real-time availability; shipped to Android, iOS and Web.',
    ],
    live: 'https://spot-let.vercel.app',
    code: 'https://github.com/aishwaryaV007/SpotLet',
  },
  {
    name: 'Sarathi',
    tagline: 'Plain-language guide to business approvals in India',
    badge: 'SIH 2026 · Team of 3',
    dates: 'Sep 2026',
    role: 'Laid the groundwork',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Groq (Llama 3.3)'],
    points: [
      'Laid the groundwork for the whole project: set up the Next.js app and its structure, and built the core pages (describe, checklist, apply, documents, dashboard).',
      'Connected Supabase for login, database and file storage, and added the AI step plus a dataset of 30+ Indian business approvals with sources.',
      'Teammates then added the pricing page, multi-language support and further work on the rules engine.',
    ],
    live: 'https://sarathi-lemon.vercel.app',
    code: 'https://github.com/aishwaryaV007/sarathi',
  },
]

export const experience = [
  {
    role: 'Data Science Intern',
    org: 'Unlox',
    dates: 'Mar 2026 – May 2026',
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
      'Cleaned and explored the Titanic dataset (missing values, survival by gender, class, age and fare) and visualised World Bank population data using Pandas, Matplotlib and Seaborn.',
    ],
  },
]

export const leadership = [
  { role: 'Board Member & Student Ambassador', org: 'IIC', detail: 'Manage the college innovation cell', dates: 'Present' },
  { role: 'Data Guide', org: 'Infinitix', detail: 'Mentor students in Python, data analysis and visualisation', dates: 'Mar 2026 – Present' },
  { role: 'Team Leader', org: 'Smart India Hackathon 2025', detail: 'Led a 6-member team that cleared the internal round', dates: 'Aug 2025' },
]

export const achievements = [
  { label: 'Patent', text: 'Patent application filed for CodeVault.' },
  {
    label: 'Hackathons',
    text: 'Smart India Hackathon 2025 (team leader, cleared internal round) and 2026 (Sarathi), IEEE Hackathon, Hack The Matrix, CodeStorm.',
  },
  { label: 'Certifications', text: 'Microsoft Power BI; NPTEL – Design and Analysis of Algorithms.' },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'C', 'SQL', 'JavaScript (basic)', 'HTML5', 'CSS3'] },
  { group: 'Core CS', items: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems'] },
  { group: 'Frontend & Mobile', items: ['React.js', 'React Native', 'Expo'] },
  { group: 'Databases', items: ['PostgreSQL (Row-Level Security)', 'MySQL', 'MongoDB', 'Redis', 'Supabase'] },
  {
    group: 'AI / ML & Data',
    items: ['PyTorch', 'Hugging Face', 'XGBoost', 'OpenCV', 'Pandas', 'NumPy', 'Power BI', 'Prompt Engineering'],
  },
  {
    group: 'DevOps & Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'Render', 'Vercel', 'EAS Build', 'Postman', 'LiveKit', 'Cloudinary', 'Twilio'],
  },
]
