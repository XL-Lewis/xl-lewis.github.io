import { Experience as ExperienceType } from '../../types/Resume'
import { Section } from '../Section/Section'
import './Experience.css'

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <Section title="Experience">
      <ol className="jobs">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className="job">
            <div className="entry-header">
              <div>
                <h3 className="entry-title">{exp.title}</h3>
                <p className="entry-subtitle">{exp.company}</p>
              </div>
              <div className="entry-meta">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
            </div>

            <div className="job-groups">
              {exp.achievements && exp.achievements.length > 0 && (
                <div>
                  <h4>Projects &amp; Achievements</h4>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div>
                  <h4>Responsibilities</h4>
                  <ul>
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
