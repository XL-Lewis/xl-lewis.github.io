import { Accolade } from '../../types/Resume'
import { Section } from '../Section/Section'

interface AccoladesProps {
  accolades: Accolade[];
}

export function Accolades({ accolades }: AccoladesProps) {
  return (
    <Section title="Accolades and Accomplishments">
      <ul className="dated-list">
        {accolades.map((accolade) => (
          <li key={accolade.title}>
            <span>{accolade.title}</span>
            <span className="dated-list-date">{accolade.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
