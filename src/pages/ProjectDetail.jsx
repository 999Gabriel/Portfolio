import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects.js'
import feynmanScreenshot from '../../assets/feynman_screenshot.png'

function Visual({ project }) {
  if (project.id === 'feynman') {
    return <div className="detail-visual"><img src={feynmanScreenshot} alt="Feynman" /></div>
  }
  if (project.images && project.images.length) {
    return (
      <div className="detail-gallery">
        {project.images.map((src, i) => (
          <div className="detail-visual" key={i}><img src={src} alt={`${project.name} ${i + 1}`} /></div>
        ))}
      </div>
    )
  }
  if (project.image) {
    return <div className="detail-visual"><img src={project.image} alt={project.name} /></div>
  }
  return <div className="detail-visual"><div className="detail-visual-glyph">{project.name}</div></div>
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

  if (!project) return null

  return (
    <div className="page wrap">
      <Link to="/projects" className="detail-back u">← Work</Link>

      <h1 className="detail-name">{project.name}</h1>
      <p className="detail-tagline">{project.tagline}</p>
      <div className="detail-meta">
        <span>{project.year}</span>
        <span>{project.category}</span>
      </div>

      <Visual project={project} />

      <div className="detail-body">
        <p>{project.description}</p>
        {project.longDescription && <p>{project.longDescription}</p>}
      </div>

      <div className="detail-stack">
        {project.stack.map((t) => <span key={t}>{t}</span>)}
      </div>

      {(project.github || project.url) && (
        <div className="detail-links">
          {project.github && <a className="u" href={project.github} target="_blank" rel="noopener">GitHub ↗</a>}
          {project.url && <a className="u" href={project.url} target="_blank" rel="noopener">Live ↗</a>}
        </div>
      )}

      <nav className="detail-nav">
        {prev ? <Link to={`/projects/${prev.id}`} className="u">← {prev.name}</Link> : <span />}
        {next ? <Link to={`/projects/${next.id}`} className="u">{next.name} →</Link> : <span />}
      </nav>
    </div>
  )
}
