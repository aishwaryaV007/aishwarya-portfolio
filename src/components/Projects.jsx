import ProjectMedia from './ProjectMedia'
import { projects } from '../data'

function layoutFor(project, sideIndex) {
  if (!project.media) return 'project project-text'
  // A row of phone screens needs the full width, so it sits below the text.
  if (project.media.type === 'phone-gallery') return 'project project-stacked'
  // Otherwise alternate the side the visual sits on.
  return sideIndex % 2 === 1 ? 'project project-flip' : 'project'
}

function Project({ project, sideIndex }) {
  const hasMedia = Boolean(project.media)
  const layout = layoutFor(project, sideIndex)

  return (
    <article id={project.id} className={layout}>
      <div className="project-body reveal">
        <p className="project-context">{project.context}</p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-summary">{project.summary}</p>

        <h4 className="label">What I did</h4>
        <ul className="project-did">
          {project.did.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4 className="label">Built with</h4>
        <p className="project-stack">{project.stack}</p>

        <div className="project-links">
          {project.live && (
            <a href={project.live} className="button button-primary" target="_blank" rel="noreferrer">
              Open live app
            </a>
          )}
          {project.code && (
            <a href={project.code} className="button button-secondary" target="_blank" rel="noreferrer">
              View code on GitHub
            </a>
          )}
          {project.note && <p className="project-note">{project.note}</p>}
        </div>
      </div>

      {hasMedia && <ProjectMedia media={project.media} name={project.name} />}
    </article>
  )
}

function Projects() {
  // Count only side-by-side projects when alternating, so the pattern stays even.
  let sideCount = 0
  const items = projects.map((project) => {
    const isSide = project.media && project.media.type !== 'phone-gallery'
    const sideIndex = isSide ? sideCount++ : 0
    return { project, sideIndex }
  })

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title reveal">Selected work</h2>
        {items.map(({ project, sideIndex }) => (
          <Project key={project.id} project={project} sideIndex={sideIndex} />
        ))}
      </div>
    </section>
  )
}

export default Projects
