import { Activity } from '../../types/Resume'
import './Activities.css'

interface ActivitiesProps {
  activities: Activity[];
}

export function Activities({ activities }: ActivitiesProps) {
  return (
    <section className="activities-section">
      <h2>VOLUNTEERING / CO-CURRICULAR</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.name} ({activity.period})
          </li>
        ))}
      </ul>
    </section>
  )
}