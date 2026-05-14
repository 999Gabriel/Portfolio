import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.from('.projects-page-header > *', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.1,
      })
      gsap.from('.project-row', {
        opacity: 0,
        y: 16,
        stagger: 0.07,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.projects-list', start: 'top 85%' },
        delay: 0.3,
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="projects-page" ref={pageRef}>
      <div className="projects-page-inner">
        <header className="projects-page-header">
          <Link to="/" className="page-back">← Back to Home</Link>
          <h1 className="projects-page-title">ALL<br />PROJECTS</h1>
          <p className="projects-page-sub">
            Everything I've built, shipped, and learned from.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((p, i) => (
            <Link to={`/projects/${p.id}`} key={p.id} className="project-row">
              <span className="pr-num">{String(i + 1).padStart(2, '0')}</span>

              <div>
                <h2 className="pr-name">{p.name}</h2>
                <p className="pr-tagline">{p.tagline}</p>
                <div className="pr-stack">
                  {p.stack.slice(0, 5).map(t => (
                    <span className="pr-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="pr-meta">
                <span className="pr-year">{p.year}</span>
                <span className="pr-cat">{p.category}</span>
              </div>

              <div className="pr-actions">
                <span className="pr-detail-link">View Project →</span>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener"
                    className="pr-gh"
                    onClick={e => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '80px 0 40px' }}>
          <Link to="/" className="btn btn-outline">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  )
}
