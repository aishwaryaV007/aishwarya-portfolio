import { useState } from 'react'
import { ExternalLink, Layers, X, Globe, Code } from 'lucide-react'
import { Github } from './Icons'

export default function Projects() {
  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend']

  const projects = [
    {
      id: 1,
      title: 'SpotLet - Location Sharing & Rental Platform',
      category: 'Full-Stack',
      description: 'A map-based web/mobile application to locate, rent, and host private parking spaces, event zones, and creative studios.',
      longDescription: 'SpotLet lets property owners lease unused spaces while offering customers real-time booking, map routing, dynamic pricing, and Cloudinary media uploads. Built using clean architectural layers to keep clients decoupled from APIs.',
      tech: ['React Native', 'Expo', 'Cloudinary', 'Express.js', 'MongoDB', 'Google Maps API'],
      liveUrl: 'https://spotlet-preview.vercel.app',
      gitUrl: 'https://github.com/aishwarya/spotlet',
      features: ['Interactive Google Maps markers', 'Secure JWT authentication', 'Cloudinary image uploads', 'Real-time booking confirmations']
    },
    {
      id: 2,
      title: 'Zenith - Kanban & Productivity Workspace',
      category: 'Frontend',
      description: 'A sleek, SaaS-like dashboard managing task boards, columns, cards, and deadlines with fully responsive responsive design.',
      longDescription: 'Zenith helps developers organize workflows using a Kanban dashboard. Features drag-and-drop layouts, interactive tag labels, quick tasks search, dark mode sync, and offline client state preservation.',
      tech: ['React.js', 'Tailwind CSS', 'Lucide Icons', 'Vite', 'Local Storage Sync'],
      liveUrl: 'https://zenith-workspace.vercel.app',
      gitUrl: 'https://github.com/aishwarya/zenith-dashboard',
      features: ['Drag-and-drop workspace cards', 'Filtering by tag and due date', 'Responsive layouts for iPads/phones', 'Custom color theme pickers']
    },
    {
      id: 3,
      title: 'Helix - Secure Microservices Gateway',
      category: 'Backend',
      description: 'An enterprise-ready backend proxy managing authentication, Redis caching, query rate-limiting, and microservices.',
      longDescription: 'Helix acts as the entry point for app services. Implements dynamic API rate-limiting via Token Bucket algorithms, request/response caching via Redis, database migration management, and unit tests using Jest.',
      tech: ['Node.js', 'Redis Cache', 'PostgreSQL', 'Docker Compose', 'Jest Testing', 'Morgan Logger'],
      liveUrl: 'https://helix-gateway.herokuapp.com',
      gitUrl: 'https://github.com/aishwarya/helix-gateway',
      features: ['Rate-limiting (100 reqs/min per IP)', 'Redis cache layer (reducing queries by 45%)', 'JWT authorization layers', 'Detailed system logs']
    },
    {
      id: 4,
      title: 'FitTrack - Real-Time Fitness Analytics',
      category: 'Full-Stack',
      description: 'An interactive workout tracking app enabling users to plot workout schedules, track weights, and view health charts.',
      longDescription: 'FitTrack allows fitness enthusiasts to log training sessions, define personalized split templates, and render historical trends with responsive graphs using Chart.js. Fully responsive layout optimized for all screens.',
      tech: ['React.js', 'FastAPI', 'PostgreSQL', 'Chart.js', 'Tailwind CSS', 'SQLAlchemy'],
      liveUrl: 'https://fittrack-analytics.vercel.app',
      gitUrl: 'https://github.com/aishwarya/fittrack',
      features: ['Interactive analytics line graphs', 'Custom routines template builders', 'Export reports in PDF/CSV format', 'Secured FastAPI REST routing']
    }
  ]

  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 md:px-8 border-t border-[var(--border-color)] relative bg-[var(--bg-secondary)]/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-heading)]">Featured Creations</h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            A hand-picked selection of full-stack, frontend, and backend projects demonstrating clean code and interactive UX design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 cursor-pointer ${
                activeFilter === cat
                  ? 'gradient-bg text-white shadow-md'
                  : 'border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--border-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass border border-[var(--border-color)] rounded-xl overflow-hidden flex flex-col justify-between hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 group transition-all duration-300 cursor-pointer text-left"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/25">
                    {project.category}
                  </span>
                  <Layers className="w-4 h-4 text-[var(--text-muted)] group-hover:text-purple-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-heading)] group-hover:text-purple-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-xs bg-[var(--border-color)] text-[var(--text-main)] px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs text-purple-400 font-mono self-center pl-1">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="border-t border-[var(--border-color)] pt-4 flex items-center justify-between text-xs text-purple-500 font-semibold">
                  <span>Explore details</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay / Details Popup */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="glass border border-[var(--border-color)] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative animate-scale-up text-left">
              {/* Modal Header */}
              <div className="p-6 border-b border-[var(--border-color)] flex justify-between items-start">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/25">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--text-heading)] mt-2">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-full hover:bg-[var(--border-color)] text-[var(--text-main)] cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[var(--text-heading)] flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-purple-500" />
                    Overview
                  </h4>
                  <p className="text-sm text-[var(--text-main)] leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[var(--text-heading)] flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-500" />
                    Key Capabilities & Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="text-xs text-[var(--text-main)] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0"></div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[var(--text-heading)] flex items-center gap-1.5">
                    <Code className="w-4 h-4 text-purple-500" />
                    Tech Stack Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="text-xs bg-[var(--border-color)] text-[var(--text-heading)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="p-6 border-t border-[var(--border-color)] flex justify-end gap-4">
                <a
                  href={selectedProject.gitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-[var(--border-color)] text-sm font-semibold text-[var(--text-heading)] hover:bg-[var(--border-color)] flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white gradient-bg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
