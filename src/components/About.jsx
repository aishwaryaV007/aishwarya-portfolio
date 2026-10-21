import { education, certifications, skills } from '../data'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="mono section-index">03</span> About
        </h2>

        <div className="two-col">
          <div className="reveal">
            <h3 className="col-title mono">Education</h3>
            <div className="entry">
              <p className="entry-title">{education.degree}</p>
              <p className="muted">{education.college}</p>
              <p className="muted">
                {education.years} · CGPA <strong className="mono">{education.cgpa}</strong>
              </p>
            </div>

            <h3 className="col-title mono col-title-spaced">Patent</h3>
            <div className="entry">
              <p className="muted">Patent application filed for CodeVault.</p>
            </div>

            <h3 className="col-title mono col-title-spaced">Certifications</h3>
            {certifications.map((c) => (
              <div key={c} className="entry">
                <p className="muted">{c}</p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 className="col-title mono">Toolkit</h3>
            <dl className="skills">
              {skills.map((group) => (
                <div key={group.group} className="skill-row">
                  <dt>{group.group}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
