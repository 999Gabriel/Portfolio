import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="page wrap">
      <Link to="/" className="page-back u">← Back</Link>
      <h1 className="page-title">Work</h1>

      <div className="list" style={{ marginTop: 'clamp(2rem, 6vh, 4rem)' }}>
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
    </div>
  )
}
