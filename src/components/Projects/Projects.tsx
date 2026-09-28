import { Project } from '../../types/Resume'
import { Section } from '../Section/Section'
import './Projects.css'

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section title="Personal Projects">
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.url}>
            <a className="project-row" href={project.url} target="_blank" rel="noopener noreferrer">
              <span className="project-name">{project.name}</span>
              <span className="project-language">{project.language}</span>
              <span className="project-url">{project.url.replace(/^https?:\/\//, '')} ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
