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
      gsap.from('.projects-head > *', {
        opacity: 0, y: 22, stagger: 0.1, duration: 0.7, ease: 'power2.out', delay: 0.1,
      })
      gsap.from('.work-row', {
        opacity: 0, y: 18, stagger: 0.06, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: '.work-list', start: 'top 88%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="page wrap" ref={pageRef}>
      <header className="projects-head">
        <Link to="/" className="page-back">← Back to Home</Link>
        <h1 className="page-title">Index</h1>
        <p className="page-sub">Everything I&apos;ve built, shipped, and learned from.</p>
      </header>

      <div className="work-list" style={{ marginTop: 'clamp(3rem, 7vw, 5rem)' }}>
        {projects.map((p, i) => (
          <Link to={`/projects/${p.id}`} key={p.id} className="work-row">
            <span className="wr-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="wr-main">
              <h2 className="wr-name">{p.name}</h2>
              <p className="wr-tagline">{p.tagline}</p>
              <div className="wr-stack">
                {p.stack.slice(0, 5).map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="wr-meta">
              <div>{p.year}</div>
              <div className="wr-cat">{p.category}</div>
            </div>
            <span className="wr-arrow">↗</span>
          </Link>
        ))}
      </div>

      <div className="page-outro">
        <Link to="/" className="btn btn-line">← Back to Portfolio</Link>
      </div>
    </div>
  )
}
