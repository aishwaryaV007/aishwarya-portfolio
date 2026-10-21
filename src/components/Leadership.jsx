import Section from './Section'
import { leadership, achievements } from '../data'

function Leadership() {
  return (
    <Section id="leadership" title="Leadership & Achievements">
      <div className="grid-2">
        <div className="card">
          <h3 className="card-heading">Positions of responsibility</h3>
          {leadership.map((item) => (
            <div key={item.role} className="list-row">
              <div className="row-between">
                <p className="item-title">
                  {item.role}, <span className="accent">{item.org}</span>
                </p>
                <span className="date">{item.dates}</span>
              </div>
              <p className="muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 className="card-heading">Achievements & certifications</h3>
          {achievements.map((item) => (
            <div key={item.label} className="list-row">
              <p className="item-title">{item.label}</p>
              <p className="muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Leadership
