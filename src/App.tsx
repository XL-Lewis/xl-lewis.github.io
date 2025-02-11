import './App.css'
import { Header } from './components/Header/Header'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Education } from './components/Education/Education'
import { Accolades } from './components/Accolades/Accolades'
import { Activities } from './components/Activities/Activities'
import {
  personalInfo,
  socialLinks,
  skills,
  experiences,
  education,
  accolades,
  activities
} from './data/resumeData'

function App() {
  return (
    <div className="resume">
     <Header
        name={personalInfo.name}
        title={personalInfo.title}
        email={personalInfo.email}
        phone={personalInfo.phone}
        location={personalInfo.location}
        socialLinks={socialLinks}
      />

      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <Accolades accolades={accolades} />
      <Activities activities={activities} />

      <footer className="references">
        <p>REFERENCES AVAILABLE ON REQUEST</p>
      </footer>
    </div>
  )
}

export default App
