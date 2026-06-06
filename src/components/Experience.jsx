import { Briefcase, Calendar, CheckSquare } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Lead Software Architect',
      company: 'TechVantage Solutions',
      period: '2024 - Present',
      bullets: [
        'Orchestrated microservice migrations, lowering infrastructure costs by 22%.',
        'Built automated CI/CD deployment pipelines on AWS, accelerating release speed.',
        'Mentored junior engineers and instituted code hygiene checklists and lint rules.'
      ]
    },
    {
      id: 2,
      role: 'Full-Stack Software Engineer',
      company: 'PixelPulse Studios',
      period: '2022 - 2024',
      bullets: [
        'Developed client SaaS dashboard frontends with React, reducing page render times by 35%.',
        'Implemented Redis database cache layers, boosting API responsiveness.',
        'Managed PostgreSQL tables and schema migrations with zero-downtime deployments.'
      ]
    },
    {
      id: 3,
      role: 'Associate Backend Developer',
      company: 'CloudScale Tech',
      period: '2020 - 2022',
      bullets: [
        'Wrote secure REST API endpoints in Node.js/Express, supporting 50k+ daily transactions.',
        'Authored robust test suites using Jest, raising line coverage to 92%.',
        'Optimized slow SQL queries and structured relational table indexes.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 border-t border-[var(--border-color)] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-heading)]">Professional Journey</h2>
          <p className="text-[var(--text-muted)] text-base">
            A chronological timeline of my industry roles, system architectures, and technical contributions.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[var(--border-color)] ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group text-left">
              
              {/* Indicator Dot */}
              <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[var(--bg-secondary)] border-2 border-purple-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500 transition-all duration-300">
                <Briefcase className="w-3 h-3 text-purple-500 group-hover:text-white transition-colors" />
              </div>

              {/* Milestone Details */}
              <div className="glass border border-[var(--border-color)] rounded-xl p-6 hover:shadow-lg hover:border-purple-500/20 transition-all duration-300 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)]">{exp.role}</h3>
                    <p className="text-purple-500 font-semibold text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] bg-[var(--border-color)] px-2.5 py-1 rounded-full font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-[var(--text-main)] flex items-start gap-2.5 leading-relaxed">
                      <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
