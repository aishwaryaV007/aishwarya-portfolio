import { education, achievements, skills } from '../data'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">About</h2>

        <div className="two-col">
          <div className="reveal">
            <h3 className="col-title">Education</h3>
            <div className="entry">
              <p className="entry-title">{education.degree}</p>
              <p className="entry-text">{education.college}</p>
              <p className="entry-text">
                {education.years} · CGPA <strong>{education.cgpa}</strong>
              </p>
            </div>

            <h3 className="col-title col-title-spaced">Achievements</h3>
            {achievements.map((item) => (
              <div key={item.label} className="entry">
                <p className="entry-title">{item.label}</p>
                <p className="entry-text">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 className="col-title">Skills</h3>
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
