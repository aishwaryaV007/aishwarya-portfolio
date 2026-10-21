import ProjectMedia from './ProjectMedia'
import { projects } from '../data'

// The contest-style overview table: one row per problem, linking to its section.
function ProblemList() {
  return (
    <table className="problem-list reveal">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Problem</th>
          <th scope="col" className="hide-sm">
            Tags
          </th>
          <th scope="col">Verdict</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr key={p.id}>
            <td className="mono">{p.letter}</td>
            <td>
              <a href={`#${p.id}`} className="problem-link">
                {p.name}
              </a>
              <span className="problem-sub">{p.tagline}</span>
            </td>
            <td className="hide-sm">
              <span className="tag-list mono">{p.tags.join(', ')}</span>
            </td>
            <td>
              <span className="verdict-chip mono">Accepted</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Field({ label, children }) {
  return (
    <div className="field">
      <h4 className="field-label mono">{label}</h4>
      {children}
    </div>
  )
}

function Problem({ project }) {
  const stacked = project.media.type === 'phone-gallery'

  return (
    <article id={project.id} className={stacked ? 'problem problem-stacked' : 'problem'}>
      <header className="problem-head reveal">
        <span className="problem-letter mono" aria-hidden="true">
          {project.letter}
        </span>
        <div>
          <p className="problem-meta mono">
            <span>Problem {project.letter}</span>
            <span>{project.badge}</span>
            <span>{project.dates}</span>
          </p>
          <h3 className="problem-name">{project.name}</h3>
          <p className="problem-tagline">{project.tagline}</p>
        </div>
      </header>

      <div className="problem-grid">
        <div className="problem-body reveal">
          <Field label="Statement">
            <p className="statement">{project.statement}</p>
          </Field>

          <Field label="Constraints">
            <ul className="constraints">
              {project.constraints.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Field>

          <Field label={`My part · ${project.role}`}>
            <ol className="approach">
              {project.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
          </Field>

          <Field label="Stack">
            <ul className="stack mono">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Field>
        </div>

        <ProjectMedia media={project.media} name={project.name} />
      </div>

      <div className="verdict-bar reveal">
        <span className="verdict mono">
          <span className="sr-only">Verdict: Accepted</span>
          <span className="verdict-judging" aria-hidden="true">
            Judging…
          </span>
          <span className="verdict-accepted" aria-hidden="true">
            ● Accepted
          </span>
        </span>

        <div className="verdict-links">
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
          {project.note && <span className="verdict-note">{project.note}</span>}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="problems" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="mono section-index">01</span> Problems
        </h2>
        <ProblemList />
        {projects.map((project) => (
          <Problem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
