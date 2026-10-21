import { experience, leadership } from '../data'

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>

        <div className="two-col">
          <div className="reveal">
            <h3 className="col-title">Internships</h3>
            {experience.map((job) => (
              <div key={job.org} className="entry">
                <p className="entry-head">
                  <span className="entry-title">
                    {job.role}, {job.org}
                  </span>
                  <span className="entry-date">{job.dates}</span>
                </p>
                <ul className="entry-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 className="col-title">Leadership</h3>
            {leadership.map((item) => (
              <div key={item.role} className="entry">
                <p className="entry-head">
                  <span className="entry-title">
                    {item.role}, {item.org}
                  </span>
                  <span className="entry-date">{item.dates}</span>
                </p>
                <p className="entry-text">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
