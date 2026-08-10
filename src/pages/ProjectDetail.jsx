import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { projects } from '../data/projects.js'
import feynmanScreenshot from '../../assets/feynman_screenshot.png'

function ProjectVisual({ project }) {
  if (project.id === 'feynman') {
    return (
      <div className="detail-visual">
        <div className="detail-browserbar">
          <span className="d" /><span className="d" /><span className="d" />
          <span className="u">localhost:8000 — feynman</span>
        </div>
        <img src={feynmanScreenshot} alt="Feynman interface" style={{ maxHeight: 620, objectFit: 'cover', objectPosition: 'top' }} />
      </div>
    )
  }
  if (project.image) {
    return (
      <div className="detail-visual">
        <img src={project.image} alt={project.name} />
      </div>
    )
  }
  return (
    <div className="detail-visual">
      <div className="detail-visual-glyph">{project.name}</div>
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)
  const idx = projects.findIndex((p) => p.id === id)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!project) navigate('/projects')
  }, [id])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.detail-head > *', {
        opacity: 0, y: 22, stagger: 0.09, duration: 0.7, ease: 'power2.out', delay: 0.1,
      })
      gsap.from('.detail-visual', { opacity: 0, y: 26, duration: 0.8, ease: 'power2.out', delay: 0.35 })
    })
    return () => ctx.revert()
  }, [id])

  if (!project) return null

  return (
    <div className="detail wrap">
      <Link to="/projects" className="detail-back">← All Projects</Link>

      <div className="detail-head">
        <div>
          <p className="detail-cat eyebrow">{project.category}</p>
          <h1 className="detail-name">{project.name}</h1>
          <p className="detail-tagline">{project.tagline}</p>
        </div>
        <div className="detail-metacol">
          <span className="detail-year">{project.year.split('—')[0].trim()}</span>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" className="btn btn-solid">GitHub ↗</a>
          )}
        </div>
      </div>

      <ProjectVisual project={project} />

      <div className="detail-body">
        <div>
          <p className="detail-desc">{project.description}</p>
          {project.longDescription && <p className="detail-desc">{project.longDescription}</p>}
        </div>

        <aside className="detail-side">
          <span className="side-label">Tech Stack</span>
          <div className="stack-list">
            {project.stack.map((t) => <span className="stack-item" key={t}>{t}</span>)}
          </div>

          {(project.github || project.url) && (
            <>
              <span className="side-label mt">Links</span>
              <div className="detail-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener" className="btn btn-solid" style={{ justifyContent: 'center' }}>
                    View on GitHub ↗
                  </a>
                )}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener" className="btn btn-line" style={{ justifyContent: 'center' }}>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </>
          )}
        </aside>
      </div>

      <nav className="detail-nav">
        {prev ? <Link to={`/projects/${prev.id}`}>← {prev.name}</Link> : <span />}
        <Link to="/projects" className="center">Index</Link>
        {next ? <Link to={`/projects/${next.id}`}>{next.name} →</Link> : <span />}
      </nav>
    </div>
  )
}
