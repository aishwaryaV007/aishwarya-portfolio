import { useState } from 'react'
import { Layout, Server, Database, Cpu, CheckCircle } from 'lucide-react'

export default function Skills() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Web',
      icon: Layout,
      description: 'Crafting responsive, high-performance interfaces with modern frameworks and state managers.',
      skills: [
        { name: 'React / React Native', level: 95 },
        { name: 'TypeScript / JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 85 },
        { name: 'HTML5 / CSS3 / Sass', level: 95 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Systems',
      icon: Server,
      description: 'Designing reliable server architectures, robust REST/GraphQL APIs, and middleware logic.',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'REST APIs & WebSockets', level: 95 },
        { name: 'GraphQL & Apollo Client', level: 80 },
        { name: 'Python / FastAPI', level: 75 },
        { name: 'Authentication (JWT, OAuth)', level: 90 }
      ]
    },
    {
      id: 'database',
      title: 'Databases & Cache',
      icon: Database,
      description: 'Modeling schemas, indexing queries, and managing caching strategies for high traffic.',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis Caching', level: 80 },
        { name: 'SQL Query Optimization', level: 85 },
        { name: 'Firebase Firestore', level: 90 }
      ]
    },
    {
      id: 'devops',
      title: 'Cloud & DevOps',
      icon: Cpu,
      description: 'Automating deployment pipelines, containerizing applications, and hosting on robust clouds.',
      skills: [
        { name: 'Docker Containers', level: 80 },
        { name: 'Git & Advanced GitHub Flows', level: 95 },
        { name: 'AWS (S3, EC2, IAM)', level: 82 },
        { name: 'CI/CD Pipelines (GitHub Actions)', level: 78 },
        { name: 'Vercel / Netlify / Heroku', level: 90 }
      ]
    }
  ]

  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section id="skills" className="py-20 px-4 md:px-8 border-t border-[var(--border-color)] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-heading)]">My Technical Arsenal</h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            Explore my tech stack through the categories below. Click on a category card to see granular skill stats and descriptions.
          </p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Category Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory.id === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 cursor-pointer hover:translate-x-1 ${
                    isActive
                      ? 'glass border-purple-500/50 shadow-md shadow-purple-500/5 bg-purple-500/5'
                      : 'border-[var(--border-color)] hover:bg-[var(--border-color)]'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${isActive ? 'gradient-bg text-white' : 'bg-[var(--border-color)] text-[var(--text-muted)]'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-heading)] text-lg">{category.title}</h3>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-1">{category.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Detailed Skill Cards & Graph display */}
          <div className="lg:col-span-7 glass border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
            <div className="space-y-6">
              {/* Category Info */}
              <div className="space-y-2 border-b border-[var(--border-color)] pb-4">
                <div className="flex items-center gap-2 text-purple-500">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Active view</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-heading)]">{activeCategory.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{activeCategory.description}</p>
              </div>

              {/* Progress bars list */}
              <div className="space-y-5">
                {activeCategory.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-[var(--text-heading)]">{skill.name}</span>
                      <span className="font-mono text-purple-500">{skill.level}%</span>
                    </div>
                    {/* Bar container */}
                    <div className="w-full h-2.5 rounded-full bg-[var(--border-color)] overflow-hidden">
                      {/* Interactive Progress fill with smooth transition */}
                      <div
                        className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-Interaction Footer */}
            <div className="mt-8 pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] flex items-center justify-between">
              <span>Updated quarterly based on project experience</span>
              <span className="font-mono text-purple-400">active: {activeCategory.id}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
