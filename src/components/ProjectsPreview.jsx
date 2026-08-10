import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectsPreview() {
  const [active, setActive] = useState(0)

  return (
    <section id="work" className="wrap section-pad">
      <span className="slabel">Work</span>

      <div className="work-grid">
        <ul className="work-names">
          {projects.map((p, i) => (
            <li key={p.id}>
              <Link
                to={`/projects/${p.id}`}
                className="work-name"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="work-name-txt">{p.name}</span>
                <span className="work-name-year">{p.year}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="work-preview" aria-hidden="true">
          {projects.map((p, i) => (
            <div className={`work-shot ${i === active ? 'on' : ''}`} key={p.id}>
              {p.image
                ? <img src={p.image} alt="" />
                : <span className="work-shot-glyph">{p.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
