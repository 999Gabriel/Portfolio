import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { projects } from '../data/projects.js'
import feynmanScreenshot from '../../assets/feynman_screenshot.png'

// Unique visual block per project
function ProjectVisual({ project }) {
  if (project.id === 'feynman') {
    return (
      <div className="detail-visual" style={{ background: 'var(--bg-1)', padding: 0, overflow: 'hidden' }}>
        <div style={{
          background: '#EBEBEB',
          borderBottom: '1px solid #D0D0D0',
          padding: '9px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
          <span style={{
            fontFamily: 'var(--ff-mono)', fontSize: 11, color: '#888',
            marginLeft: 12, background: '#FFF', padding: '2px 12px',
            borderRadius: 4, letterSpacing: '0.04em',
          }}>
            localhost:8000 — feynman
          </span>
        </div>
        <img
          src={feynmanScreenshot}
          alt="Feynman interface"
          style={{ width: '100%', display: 'block', maxHeight: 600, objectFit: 'cover', objectPosition: 'top' }}
        />
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
    <div className="detail-visual" style={{ padding: '64px 40px', background: 'var(--bg-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--ff-display)', fontSize: 96, color: 'var(--gray-4)', letterSpacing: '0.04em' }}>
        {project.name.toUpperCase()}
      </span>
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)
  const idx = projects.findIndex(p => p.id === id)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!project) navigate('/projects')
  }, [id])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.detail-hero > .detail-inner > *', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.1,
      })
    })
    return () => ctx.revert()
  }, [id])

  if (!project) return null

  return (
    <div className="detail-page">
      {/* Hero */}
      <div className="detail-hero">
        <div className="detail-inner">
          <Link to="/projects" className="detail-back">
            ← All Projects
          </Link>

          <div className="detail-header-grid">
            <div>
              <p className="detail-category">{project.category}</p>
              <h1 className="detail-name">{project.name.toUpperCase()}</h1>
              <p className="detail-tagline">{project.tagline}</p>
            </div>
            <div className="detail-meta">
              <span className="detail-year">{project.year.split('–')[0].trim()}</span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-dark"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Visual */}
      <div className="detail-inner" style={{ paddingTop: 48, paddingBottom: 0 }}>
        <ProjectVisual project={project} />
      </div>

      {/* Body */}
      <div className="detail-body">
        <div className="detail-inner">
          <div className="detail-body-grid">
            <div>
              <p className="detail-desc">{project.description}</p>
              {project.longDescription && (
                <p className="detail-desc">{project.longDescription}</p>
              )}
            </div>

            <div className="detail-sidebar">
              <span className="detail-sidebar-label">Tech Stack</span>
              <div className="detail-stack-list">
                {project.stack.map(t => (
                  <span className="detail-stack-tag" key={t}>{t}</span>
                ))}
              </div>

              {(project.github || project.url) && (
                <>
                  <span className="detail-sidebar-label">Links</span>
                  <div className="detail-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-dark"
                        style={{ justifyContent: 'center' }}
                      >
                        View on GitHub ↗
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-outline"
                        style={{ justifyContent: 'center' }}
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project navigation */}
      <div
        className="detail-inner"
        style={{
          paddingTop: 64,
          paddingBottom: 80,
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1.5px solid var(--black)',
          marginTop: 48,
          gap: 20,
        }}
      >
        {prev ? (
          <Link
            to={`/projects/${prev.id}`}
            className="btn btn-ghost"
            style={{ maxWidth: '45%' }}
          >
            ← {prev.name}
          </Link>
        ) : <span />}
        <Link to="/projects" className="btn btn-ghost">All Projects</Link>
        {next ? (
          <Link
            to={`/projects/${next.id}`}
            className="btn btn-ghost"
            style={{ maxWidth: '45%' }}
          >
            {next.name} →
          </Link>
        ) : <span />}
      </div>
    </div>
  )
}
