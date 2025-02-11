import './App.css'

function App() {
  return (
    <div className="resume">
      <title> Lewis Hyman - Software Engineer </title>

      <header className="header">
        <h1>Lewis Hyman - Software Engineer</h1>
        <div className="contact-info">
          <a href="mailto:LewisHymanPersonal@gmail.com">LewisHymanPersonal@gmail.com</a> - (+61) 405 178 301 - Sydney, NSW
        </div>

        <div className="social-links">
          <a href="https://github.com/XL-Lewis" target="_blank" rel="noopener noreferrer">Github.com/XL-Lewis</a> |{' '}
          <a href="https://linkedin.com/in/xl-lewis" target="_blank" rel="noopener noreferrer">linkedin.com/in/xl-lewis</a>
        </div>
      </header>

      <section>
        <h2>SKILLS / LANGUAGES / TECHNOLOGIES</h2>
        <ul>
          <li><strong>Languages:</strong> Rust, Ruby, Python, Javascript</li>
          <li><strong>Frameworks:</strong> Ruby on Rails, React</li>
          <li><strong>Infrastructure:</strong> Docker, Kubernetes, OpenSearch, Git/Github, AWS (+ EKS)</li>
        </ul>
      </section>

      <section>
        <h2>EXPERIENCE</h2>
        
        <div className="job">
          <div className="job-header">
            <h3>Software Developer</h3>
            <div>Master Communications (Radio Telecom)</div>
            <div className="job-period">Aug 2021 – Mar 2024 / Oct 2024 - Present</div>
            <div className="job-location">Sydney, NSW</div>
          </div>
          
          <div>
            <h4>Specific Projects / Achievements</h4>
            <ul>
              <li>Reduced cluster operation costs for OpenSearch by over 50% implementing an automated storage tiering system</li>
              <li>Reduced code and deployment complexity for internal data translation pipelines by 85%</li>
              <li>Designed and implemented a Rust websocket server to manage Vehicle charging for EV Buses</li>
              <li>Refactored API communication with backend services via protocol buffers</li>
            </ul>
          </div>

          <div>
            <h4>General Responsibilities</h4>
            <ul>
              <li>Write, test, and deploy maintainable code via Github</li>
              <li>Review pull requests and refactor existing code</li>
              <li>Engage with clients to gather requirements (via BDD) and manage project timelines</li>
              <li>Collaborate with team members in an Agile workplace with daily scrum meetings</li>
              <li>Manage deployments via AWS Cloud & Kubernetes</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>IT / Operations Consultant</h3>
            <div>Process / Automation Consulting</div>
            <div className="job-period">May 2024 – Oct 2024</div>
            <div className="job-location">Sydney, NSW</div>
          </div>
          <ul>
            <li>Identify, document and propose efficiency improvements to internal workflows</li>
            <li>Assist with migration of project management software</li>
            <li>Improve process automation w/ Microsoft Power Platform</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>QA / Maintenance Engineer (Mechatronics)</h3>
            <div>Concourse Technology</div>
            <div className="job-period">Dec 2020 – Dec 2021</div>
            <div className="job-location">Sydney, NSW</div>
          </div>
          <ul>
            <li>Diagnose and repair issues with motor-driven bluetooth controlled wheels</li>
            <li>Design and implement fixes where possible to improve the quality of future manufacturing</li>
            <li>Assist with mechanical and electrical design of upcoming products</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>EDUCATION</h2>
        <div className="job">
          <div className="job-header">
            <h3>Bachelor of Engineering (Mechatronics) with Bachelor of Science (Computing)</h3>
            <div>Macquarie University</div>
            <div className="job-period">April 2022</div>
            <div className="job-location">Sydney, NSW</div>
          </div>
          <ul>
            <li>Second Class, Division 1 Honors</li>
            <li>International Placement in Indonesia, partnered with Taman Pintar</li>
            <li>Thesis project: 'Drone Mounted Magnetometer-Based Meteorite Detection System'</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>ACCOLADES AND ACCOMPLISHMENTS</h2>
        <ul>
          <li>Finalist - ITS Australia Young Professional of the Year (2022)</li>
          <li>Silver Duke of Edinburgh (2016)</li>
        </ul>
      </section>

      <section>
        <h2>VOLUNTEERING / CO-CURRICULAR</h2>
        <ul>
          <li>Inala Charity Lunch Volunteer (2012-2024)</li>
          <li>AV Technician / Technical Director with Macquarie Musical and Drama Societies (2018-2022)</li>
          <li>Macquarie University Hockey (2021-2024)</li>
        </ul>
      </section>

      <footer className="references">
        <p>REFERENCES AVAILABLE ON REQUEST</p>
      </footer>
    </div>
  )
}

export default App
