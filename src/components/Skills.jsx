import Section from './Section'
import { skills } from '../data'

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((group) => (
          <div key={group.group} className="skill-row">
            <h3 className="skill-group">{group.group}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
