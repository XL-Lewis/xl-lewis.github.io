import { Experience as ExperienceType } from '../../types/Resume'
import './Experience.css'

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="experience-section">
      <h2>EXPERIENCE</h2>
      {experiences.map((exp, index) => (
        <div key={`${exp.company}-${exp.period}`} className="job">
          <div className="job-header">
            <h3>{exp.title}</h3>
            <div className="company">{exp.company}</div>
            <div className="job-period">{exp.period}</div>
            <div className="job-location">{exp.location}</div>
          </div>

          {exp.achievements && exp.achievements.length > 0 && (
            <div className="achievements">
              <h4>Specific Projects / Achievements</h4>
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {exp.responsibilities && exp.responsibilities.length > 0 && (
            <div className="responsibilities">
              <h4>General Responsibilities</h4>
              <ul>
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}