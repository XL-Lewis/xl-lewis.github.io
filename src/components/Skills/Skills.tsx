import { Skill } from '../../types/Resume'
import { Section } from '../Section/Section'
import './Skills.css'

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Skills / Languages / Technologies">
      <dl className="skills">
        {skills.map((skill) => (
          <div key={skill.category} className="skill-row">
            <dt>{skill.category}</dt>
            <dd>
              <ul className="skill-tags">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
