import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'

gsap.registerPlugin(ScrollTrigger)

const MARQUEE_ITEMS = [
  'React', 'TypeScript', 'Python', 'FastAPI', 'Docker',
  'PostgreSQL', 'Swift', 'Claude API', 'Arduino', 'n8n',
  'Linux', 'Node.js', 'React Native',
]

export default function ProjectsPreview() {
  const sectionRef = useRef(null)
  const feynman = projects.find(p => p.id === 'feynman')
  const rest = projects.filter(p => p.id !== 'feynman').slice(0, 3)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-featured-card', {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.project-featured-card', start: 'top 82%' },
      })
      gsap.from('.proj-card, .proj-card-more', {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.projects-grid-secondary', start: 'top 84%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Tech marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section id="work" className="projects-section" ref={sectionRef}>
        <div className="projects-inner">
          <div className="projects-head">
            <div>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--crimson)', letterSpacing: '0.18em', display: 'block', marginBottom: 8 }}>01</span>
              <h2 className="section-title">SELECTED<br />WORK</h2>
            </div>
            <Link to="/projects" className="view-all-link">
              View All Projects →
            </Link>
          </div>

          {/* Feynman featured card */}
          <Link to="/projects/feynman" className="project-featured-card">
            <div className="pf-left">
              <span className="pf-badge">Diplomarbeit 2025 / 26</span>
              <h3 className="pf-name">{feynman.name}</h3>
              <p className="pf-tagline">{feynman.tagline}</p>
              <p className="pf-desc">{feynman.description}</p>
              <div className="pf-tags">
                {feynman.stack.map(t => <span className="pf-tag" key={t}>{t}</span>)}
              </div>
              <div className="pf-links">
                <span className="btn btn-dark" style={{ pointerEvents: 'none' }}>View Project →</span>
                <a
                  href={feynman.github}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline"
                  onClick={e => e.stopPropagation()}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="pf-right" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg)',
              padding: 48,
              borderLeft: '1.5px solid var(--black)',
            }}>
              {feynman.image && (
                <img
                  src={feynman.image}
                  alt="Feynman"
                  style={{ width: '72%', maxWidth: 260, opacity: 0.9 }}
                />
              )}
            </div>
          </Link>

          {/* Secondary cards */}
          <div className="projects-grid-secondary">
            {rest.map((p, i) => (
              <Link to={`/projects/${p.id}`} key={p.id} className="proj-card">
                <span className="proj-card-num">0{i + 2}</span>
                {p.image && (
                  <img src={p.image} alt={p.name} className="proj-card-img" />
                )}
                <h3 className="proj-card-name">{p.name}</h3>
                <p className="proj-card-tagline">{p.tagline}</p>
                <span className="proj-card-cat">{p.category}</span>
              </Link>
            ))}

            <Link to="/projects" className="proj-card-more">
              <span className="proj-card-more-num">+{projects.length - 4}</span>
              <span className="proj-card-more-label">More Projects →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
