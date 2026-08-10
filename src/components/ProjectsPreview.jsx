import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPreview() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.list .row', {
        opacity: 0, y: 16, duration: 0.7, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="work" className="wrap" ref={ref}>
      <div className="list">
        {projects.map((p) => (
          <Link to={`/projects/${p.id}`} key={p.id} className="row">
            <div>
              <div className="row-name">{p.name}</div>
              <div className="row-note">{p.tagline}</div>
            </div>
            <span className="row-year">{p.year}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
