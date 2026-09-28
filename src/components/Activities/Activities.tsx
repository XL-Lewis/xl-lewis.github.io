import { Activity } from '../../types/Resume'
import { Section } from '../Section/Section'

interface ActivitiesProps {
  activities: Activity[];
}

export function Activities({ activities }: ActivitiesProps) {
  return (
    <Section title="Volunteering / Co-curricular">
      <ul className="dated-list">
        {activities.map((activity) => (
          <li key={activity.name}>
            <span>{activity.name}</span>
            <span className="dated-list-date">{activity.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
