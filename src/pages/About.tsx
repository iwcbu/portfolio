import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
export function About() {
  return <main id="main">
    <PageHero label="About / Learn more" title="About Me" subtitle="An engineer who likes understanding how things work, whether that's an algorithm, a car, or the ocean." variant="about" />
    <div className="page-width page-section about-sections">
      <section className="about-grid about-story" aria-labelledby="story-heading">
        <div><p className="eyebrow">01 / The story</p><h2 id="story-heading">Curiosity.</h2>
          <img className="about-art" src="/images/curiosity.jpeg" alt="Portrait of Ian Campbell" width="2268" height="4032" loading="lazy" decoding="async" />
          <p>Growing up, I loved video games, especially ones that challenged me with new problems and puzzles. As I got older, a lot of games started to feel repetitive, and I gradually lost interest. I missed that feeling of encountering something unfamiliar and having to figure it out for myself.</p>
          <p>I've always been interested in technology, but I didn't discover programming until college. I originally attended the University of New Haven to study criminal justice, thinking I'd eventually become a police officer or FBI agent.</p>
          <p>That changed when I took an extracurricular web development class. Programming scratched an itch I didn't even know I still had. Every problem was different, there wasn't always an obvious answer, and I could experiment until I found something that worked. I enjoyed it enough to transfer to Boston University and pursue computer science.</p>
          <p>That curiosity is what drives a lot of my work today. Omen NE, a project I'm currently building around ocean data and local surf conditions, started with something I've been interested in for years: understanding the ocean. Now I'm using programming to explore how buoy observations can help make sense of the waves at my local breaks.</p>
          <p>In a way, programming gave me back what I loved about those games, new problems to solve and the tools to figure out how.</p>
          <Link className="text-link" to="/projects">See what I've been building ↗</Link>
        </div>
      </section>
    
      <section className="about-section-divider about-education" aria-labelledby="education-heading">
        <p className="eyebrow">02 / Education</p>
        <div className="edu-box">
          <div>
            <h2 id="education-heading">Boston University.</h2>
            <div><p><strong>BA in Computer Science</strong><br />Completed December 2025</p></div>
          </div>
          <div className="edu-rc-box">
            <p className="eyebrow edu-rc-heading">Relevant Coursework</p>
            <div className="edu-coursework-grid">
              <div>
                <h3>Software Engineering</h3>
                <ul>
                  <li>Data Structures & Algorithms</li>
                  <li>Distributed Systems</li>
                  <li>Software Engineering</li>
                  <li>Full Stack Development</li>
                  <li>Computer Systems</li>
                </ul>
              </div>
              <div>
                <h3>Data &amp; ML</h3>
                <ul>
                  <li>Database Systems</li>
                  <li>Applied Machine Learning</li>
                  <li>Data Science Tools</li>
                  <li>Geometric Algorithms</li>
                  <li>Probability in Computing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='edu-summary'>
          <p>I earned my degree in Computer Science from Boston University in just two and a half years. Beyond the classroom, some of the most valuable parts of my experience were the friendships I made and the professors who took the time to mentor me.</p>
          <p>I served on the executive board of BU's Automotive Club, where we organized a karting event for 100 people and two annual car shows that attracted over a 1000 attendees in total. I was also involved in Chess Club, where I played weekly, and AI Club, where we explored how neural networks work and learned to build them.</p>
          <p>Looking back, what I value most about my time at BU is the people I met, the things I got involved in, and the opportunities I had to explore my interests.</p>
        </div>
      </section>
      <section className="about-section-divider" aria-labelledby="experience-heading">
        <div><p className="eyebrow">03 / Experience</p><h2 id="experience-heading">BMW of Boston.</h2></div>
        <div>
          <p>One of my favorite parts of working at BMW of Boston was getting to learn about new technology and then share that knowledge with others. I enjoyed helping customers discover features they didn't know existed or figure out why something wasn't working the way they expected.</p>
          <p>BMW also changed the way I communicate with people. I learned that a conversation in sales isn't a test, it's an exchange. Customers give you their time to learn something, and in return, you gain a better understanding of the product and the people using it. Every interaction taught me something new; it could've been a hidden feature or a pattern in what customers were struggling with.</p>
          <p>Working in such a busy environment also taught me the importance of time management and organization. I went from being someone who generally went with the flow to someone who actively looks for ways to make things more efficient. When you're juggling several responsibilities at once, even small inefficiencies start to add up.</p>
          <p>That mindset eventually led to my inventory automation project. When a new Massachusetts pricing transparency requirement created a large amount of manual work for our team, I recognized an opportunity to use programming to solve a real problem. I built a tool that processed hundreds of vehicles in minutes, saving us hours of repetitive work. It was one of the first times I saw how my engineering skills could make an immediate difference outside the classroom.</p>
        </div>
      </section>
      <section className="interests-section" aria-labelledby="interests-heading">
        <p className="eyebrow">04 / Away from the screen</p><h2 id="interests-heading">The things that keep me curious.</h2>
        <div className="interests-grid">
          <article className="interest-card interest-card--surf">
            <p className="interest-label">01 / SURFING</p>
            <div className="interest-card-shell">
              <div className="interest-image">
                <img src="/images/surfing-the-wall.webp" alt="Surfer riding a breaking wave" width="3200" height="1998" loading="lazy" decoding="async" />
                <h3>Reading the ocean.</h3>
              </div>
              <div className="interest-description"><p>Surfing is a big part of why I'm interested in environmental data and forecasting.</p></div>
            </div>
          </article>
          <article className="interest-card interest-card--cars">
            <p className="interest-label">02 / MOTORSPORTS</p>
            <div className="interest-card-shell">
              <div className="interest-image">
                <img src="/images/car-racing.jpeg" alt="Race car competing at night" width="4118" height="3393" loading="lazy" decoding="async" />
                <h3>How things perform.</h3>
              </div>
              <div className="interest-description"><p>Cars and motorsports feed my interest in engineering, mechanics, and details.</p></div>
            </div>
          </article>
          <article className="interest-card interest-card--ski">
            <p className="interest-label">03 / SKIING</p>
            <div className="interest-card-shell">
              <div className="interest-image">
                <img src="/images/ski-trick.jpg" alt="Skier descending through deep snow" width="4702" height="3137" loading="lazy" decoding="async" />
                <h3>Chasing the powder.</h3>
              </div>
              <div className="interest-description"><p>Skiing is another reason I enjoy getting outside and paying attention to conditions.</p></div>
            </div>
          </article>
        </div>
      </section>
      <section id="connect" className="connect-section" aria-labelledby="connect-heading">
        <p className="eyebrow">05 / Connect</p><h2 id="connect-heading">Let's talk.</h2>
        <p>I'm interested in software engineering, backend development, and data engineering opportunities. Feel free to reach out about a project or just to say hello!</p>
        <a className="contact-email" href="mailto:iwc3@outlook.com">iwc3@outlook.com</a>
        <div className="contact-links">
          <a href="https://github.com/iwcbu" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/iwc3/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a
              href="/Ian_Campbell_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Resume ↗
            </a>
        </div>
      </section>
    </div>
  </main>;
}
