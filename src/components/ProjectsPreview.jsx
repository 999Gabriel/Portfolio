import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPreview() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-row', {
        opacity: 0,
        y: 22,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.work-list', start: 'top 82%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="work" className="section wrap" ref={sectionRef}>
      <div className="section-head">
        <div className="section-head-left">
          <span className="section-index">01</span>
          <h2 className="section-title">Selected Work</h2>
        </div>
        <span className="eyebrow">{projects.length} Projects</span>
      </div>

      <div className="work-list">
        {projects.map((p, i) => (
          <Link to={`/projects/${p.id}`} key={p.id} className="work-row">
            <span className="wr-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="wr-main">
              <h3 className="wr-name">{p.name}</h3>
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

      <div className="work-foot">
        <Link to="/projects" className="btn btn-line">Full Index →</Link>
      </div>
    </section>
  )
}
