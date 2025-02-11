import { Education as EducationType } from '../../types/Resume'
import './Education.css'

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section className="education-section">
      <h2>EDUCATION</h2>
      {education.map((edu) => (
        <div key={`${edu.institution}-${edu.period}`} className="degree">
          <div className="degree-header">
            <h3>{edu.degree}</h3>
            <div className="institution">{edu.institution}</div>
            <div className="degree-period">{edu.period}</div>
            <div className="degree-location">{edu.location}</div>
          </div>
          <ul>
            {edu.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}