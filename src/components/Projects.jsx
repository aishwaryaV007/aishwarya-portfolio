import { ExternalLink, Lock } from 'lucide-react'
import Section from './Section'
import SocialIcon from './SocialIcons'
import { projects } from '../data'

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="card-top">
        <div>
          <h3 className="card-title">{project.name}</h3>
          <p className="card-subtitle">{project.tagline}</p>
        </div>
        <span className="badge">{project.badge}</span>
      </div>

      <p className="card-meta">
        {project.role} · {project.dates}
      </p>

      <ul className="points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="tags">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="card-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            <ExternalLink size={16} /> Live site
          </a>
        )}
        {project.code && (
          <a href={project.code} target="_blank" rel="noreferrer">
            <SocialIcon name="github" size={16} /> Code
          </a>
        )}
        {project.note && (
          <span className="card-note">
            <Lock size={14} /> {project.note}
          </span>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
