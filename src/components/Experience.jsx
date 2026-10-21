import Section from './Section'
import { experience } from '../data'

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.org} className="timeline-item">
            <div className="row-between">
              <h3 className="item-title">
                {job.role}, <span className="accent">{job.org}</span>
              </h3>
              <span className="date">{job.dates}</span>
            </div>
            <ul className="points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
