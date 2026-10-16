import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectIcon } from '../components/ProjectIcon';
export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <main id="main" className="content-page page-width"><h1>Project not found.</h1><Link className="text-link" to="/projects">← Return to projects</Link></main>;
  return <main id="main" className="detail-page">
    <section className={`detail-hero detail-hero--${project.slug}`} aria-labelledby="project-title">
      <div className="detail-hero-atmosphere" aria-hidden="true" />
      <div className="detail-hero-symbol"><ProjectIcon slug={project.slug} /></div>
      <div className="detail-hero-content">
        <Link className="text-link back-link" to="/projects">← All projects</Link>
        <h1 id="project-title">{project.title}<span className="accent">.</span></h1>
        <p>{project.summary}</p>
      </div>
    </section>
    <div className="page-width detail-body">
      <p className="eyebrow">{project.category}: {project.year}{project.status && ` - ${project.status}`}</p>
      <h2 className="page-title">{project.detailTitle}</h2>
      <div className="detail-project-info" aria-label="Project information">
        <section>
          <h3>Highlights</h3>
          <ul>{project.highlights.map(point => <li key={point}>{point}</li>)}</ul>
        </section>
        <section className='tech-stack'>
          <div>
            <h3>Tech stack</h3>
            <div className="tags detail-tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
          </div>
          {project.href && <a className="text-link" href={project.href} target="_blank" rel="noreferrer">View repository ↗</a>}
        </section>
      </div>
      <div className="detail-description" aria-labelledby="project-description-heading">
        <h2 id="project-description-heading">The project</h2>
        <div className="detail-description-sections">
          {project.description.map((section, sectionIndex) => {
            const paragraphs = section.content.filter(paragraph => paragraph.trim().length > 0);

            if (paragraphs.length === 0) return null;

            return <section key={`${section.heading}-${sectionIndex}`}>
              {section.heading && <h3>{section.heading}</h3>}
              {paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${sectionIndex}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </section>;
          })}
        </div>
      </div>
      <div className="detail-bottom"><Link className="button button-outline" to="/projects#project-list">More projects →</Link></div>
    </div>
  </main>;
}
