import { Skill } from '../../types/Resume'
import './Skills.css'

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="skills-section">
      <h2>SKILLS / LANGUAGES / TECHNOLOGIES</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.category}>
            <strong>{skill.category}:</strong> {skill.items.join(', ')}
          </li>
        ))}
      </ul>
    </section>
  )
}