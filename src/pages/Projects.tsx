import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectIcon } from '../components/ProjectIcon';


export function Projects() {
  return <main id="main">
    <header className="projects-intro page-width editorial-content-width">
      <p className="eyebrow">Portfolio / Projects</p>
      <h1>Projects<span className="accent">.</span></h1>
      <p>Backend software, data projects, and tools I built to solve problems I've personally come across.</p>
    </header>
    <div id="project-list" className="projects-content page-width editorial-content-width">
      <div className="project-list">{projects.map((project, index) => <Link className="project-row" key={project.slug} to={`/projects/${project.slug}`}><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div><h2>{project.title}</h2><p>{project.summary}</p><div className="tags">{project.stack.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div></div><ProjectIcon slug={project.slug} /><span className="project-arrow" aria-hidden="true">↗</span></Link>)}</div>
      <div className="page-end-link"><p>Want to know more about the person behind the projects?</p><Link className="button button-outline" to="/about">About me ↗</Link></div>
    </div>
  </main>;
  
}
