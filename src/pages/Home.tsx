import { Link } from 'react-router-dom';
import { ProjectIcon } from '../components/ProjectIcon';
import { projects } from '../data/projects';

const skillGroups = [
  { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Go', 'Java'] },
  { title: 'Frameworks & Libraries', items: ['React', 'FastAPI', 'Django', 'Flask', 'pandas', 'NumPy', 'scikit-learn'] },
  { title: 'Tools & Infrastructure', items: ['Git', 'Docker', 'PostgreSQL', 'SQLite', 'AWS S3', 'Vercel'] },
];

export function Home() {
  const omen = projects.find((project) => project.slug === 'omen-ne');

  return <main id="main">
    <section className="home-intro page-width editorial-content-width" aria-labelledby="home-heading">
      <div className="home-profile-layout">
        <div className="home-profile">
          <div className='hp-box'>
            <div className="profile-photo" role="img" aria-label="Profile photo" />
            <span>
              <p className="eyebrow">Software Engineer</p>
              <h1 id="home-heading">Ian Campbell<span className="accent">.</span></h1>
              <p className="profile-location">Boston, MA</p>
            </span>
          </div>
          <p className="profile-introduction">I'm a Boston University computer science graduate interested in backend engineering, data engineering, and practical problem solving. I enjoy building software that turns complex data and repetitive work into clear, useful tools.</p>
          <nav className="intro-links" aria-label="Homepage sections">
            <Link to="/projects">Projects</Link>
            <a href="#technologies">Technologies</a>
            <Link to="/about">About Me</Link>
            <a
              href="/Ian_Campbell_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Resume
            </a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <aside className="professional-snapshot" aria-labelledby="snapshot-heading">
          <p className="eyebrow">Professional Snapshot</p>
          <h2 id="snapshot-heading">At a glance.</h2>
          <div className="snapshot-sections">
            <section>
              <h3>Education</h3>
              <p>Boston University, BA in Computer Science, December 2025.</p>
            </section>
            <section>
              <h3>Experience</h3>
              <p>Lead BMW Genius at BMW of Boston. Technical troubleshooting, customer support, and inventory automation.</p>
            </section>
            <section>
              <h3>Currently building</h3>
              <p><Link to="/projects/omen-ne">Omen NE</Link>, a platform for processing NOAA ocean observations and exploring local surf conditions.</p>
            </section>
          </div>
        </aside>
      </div>
    </section>
    <section className="home-preview page-width editorial-content-width" aria-labelledby="featured-heading">
      <div className="section-heading"><div><p className="eyebrow">02 / work</p><h2 id="featured-heading">Featured Projects</h2></div><Link className="text-link" to="/projects">All projects →</Link></div>
      <div className="preview-grid">
        {projects.slice(0, 3).map((project) => (
          <Link
            to={`/projects/${project.slug}`}
            className="preview-card"
            key={project.slug}
          >

            <span>
              <ProjectIcon className='home-project-icon' slug={project.slug} />
              <h3>{project.title}</h3>
            </span>


            <div className="preview-info">
              <p>{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="home-section home-impact page-width editorial-content-width" aria-labelledby="impact-heading">
      <p className="eyebrow">03 / Experience &amp; Impact</p>
      <h2 id="impact-heading">The numbers behind the work.</h2>
      <div className="impact-grid">
        <article><strong>2155</strong><p>Estimated minutes saved from automating a manual data entry task at BMW of Boston.</p></article>
        <article><strong>80<span>%</span></strong><p>Reduction in MyChessBot search time, from 10ms to 2ms at depth five in my benchmark.</p></article>
        <article><strong>1,433</strong><p>Apartment listings collected and analyzed with a partner for BURE.</p></article>
      </div>
    </section>

    <section className="home-section home-current page-width editorial-content-width" aria-labelledby="current-heading">
      <p className="eyebrow">04 / Current &amp; Future Work</p>
      <h2 id="current-heading">What's next.</h2>
      <div className="current-work-grid">
        {omen && <article className="current-project">
          <div>
            <div className="project-status"><span aria-hidden="true" />In Progress</div>
            <h3>{omen.title}</h3>
            <p>I'm building a surf conditions platform for New Hampshire and Maine. I've completed a Python ETL pipeline for collecting, cleaning, and storing historical NOAA buoy observations, and I'm now working on understanding relationships between offshore and nearshore measurements.</p>
            <Link className="text-link" to={`/projects/${omen.slug}`}>Follow the project →</Link>
          </div>
        </article>}
        <aside className="coming-up" aria-labelledby="coming-up-heading">
          <p className="eyebrow">Coming Up</p>
          <h3 id="coming-up-heading">From observations to a clearer view.</h3>
          <p>My next goal is to align observations across buoys and explore models that predict conditions at other stations. Eventually, I want to connect those predictions to local surf conditions and create 3D visualizations of what the waves might look like at individual beaches.</p>
        </aside>
      </div>
    </section>

    <section id="technologies" className="home-section home-tools page-width editorial-content-width" aria-labelledby="tools-heading">
      <p className="eyebrow">05 / Tools &amp; Technologies</p>
      <h2 id="tools-heading">What I work with.</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => <article key={group.title}>
          <h3>{group.title}</h3>
          <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </div>
    </section>

    <section className="home-section home-beyond page-width editorial-content-width" aria-labelledby="beyond-heading">
      <div className="beyond-image">
        <img src="/images/surfing-the-wall.webp" alt="Surfer riding along a breaking wave" width="3200" height="1998" loading="lazy" decoding="async" />
      </div>
      <div className="beyond-copy">
        <p className="eyebrow">06 / Beyond the Code</p>
        <h2 id="beyond-heading">More than software.</h2>
        <p>Outside of programming, you'll usually find me following motorsports, looking for waves, or heading to the mountains. I enjoy understanding how things work, whether that's software, cars, or the ocean.</p>
        <Link className="text-link" to="/about">More about me →</Link>
      </div>
    </section>

    <section id="contact" className="home-section home-contact page-width editorial-content-width" aria-labelledby="home-contact-heading">
      <p className="eyebrow">07 / Get in Touch</p>
      <h2 id="home-contact-heading">Let's connect.</h2>
      <p>I'm interested in software engineering, backend development, and data engineering opportunities.</p>
      <nav className="home-contact-links" aria-label="Contact links">
        <a href="mailto:iwc3@outlook.com">Email</a>
        <a href="https://github.com/iwcbu" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/iwc3/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a
            href="/Ian_Campbell_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Resume
          </a>
      </nav>
    </section>
  </main>;
}
