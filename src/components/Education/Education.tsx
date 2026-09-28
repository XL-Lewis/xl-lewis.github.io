import { Education as EducationType } from '../../types/Resume'
import { Section } from '../Section/Section'

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <Section title="Education">
      {education.map((edu) => (
        <div key={`${edu.institution}-${edu.period}`}>
          <div className="entry-header">
            <div>
              <h3 className="entry-title">{edu.degree}</h3>
              <p className="entry-subtitle">{edu.institution}</p>
            </div>
            <div className="entry-meta">
              <span>{edu.period}</span>
              <span>{edu.location}</span>
            </div>
          </div>
          <ul>
            {edu.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
