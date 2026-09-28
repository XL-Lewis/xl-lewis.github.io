import { Project } from '../../types/Resume'
import './Projects.css'

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="projects-section">
      <h2>PERSONAL PROJECTS</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.url}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>{' '}
            ({project.language})
          </li>
        ))}
      </ul>
    </section>
  )
}
