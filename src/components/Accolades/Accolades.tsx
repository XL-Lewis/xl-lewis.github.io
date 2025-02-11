import { Accolade } from '../../types/Resume'
import './Accolades.css'

interface AccoladesProps {
  accolades: Accolade[];
}

export function Accolades({ accolades }: AccoladesProps) {
  return (
    <section className="accolades-section">
      <h2>ACCOLADES AND ACCOMPLISHMENTS</h2>
      <ul>
        {accolades.map((accolade, index) => (
          <li key={index}>
            {accolade.title} ({accolade.year})
          </li>
        ))}
      </ul>
    </section>
  )
}