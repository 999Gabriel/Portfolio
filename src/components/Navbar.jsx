import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'

export default function Navbar() {
  const progressRef = useRef(null)
  const navRef = useRef(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      if (!progressRef.current) return
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const pct = height > 0 ? (scrolled / height) * 100 : 0
      progressRef.current.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => setOpen(false), [location])

  const go = (section) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(section), 250)
    } else {
      scrollToSection(section)
    }
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const ham = [
    { label: 'WORK', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'JOURNEY', id: 'journey' },
  ]

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="nav-progress" ref={progressRef} />
        <div className="nav-inner">
          <Link to="/" className="nav-logo">GABRIEL WINKLER</Link>

          <div className="nav-links">
            <button className="nav-link" onClick={() => go('work')}>Work</button>
            <button className="nav-link" onClick={() => go('about')}>About</button>
            <button className="nav-link" onClick={() => go('journey')}>Journey</button>
            <Link to="/projects" className="nav-link">Projects</Link>
          </div>

          <a href="mailto:999gabriel.winkler@gmail.com" className="nav-contact-btn">
            Contact
          </a>

          <button
            className="nav-hamburger"
            onClick={() => setOpen(v => !v)}
            aria-label="menu"
          >
            <span style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
            <span style={open ? { opacity: 0 } : {}} />
            <span style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${open ? 'open' : ''}`}>
        <div className="nav-overlay-links">
          {ham.map((item, i) => (
            <button key={item.id} className="nav-overlay-link" onClick={() => go(item.id)}>
              <span className="ol-num">0{i + 1}</span>
              {item.label}
            </button>
          ))}
          <Link to="/projects" className="nav-overlay-link" style={{ display: 'flex' }}>
            <span className="ol-num">04</span> PROJECTS
          </Link>
          <a href="mailto:999gabriel.winkler@gmail.com" className="nav-overlay-link" style={{ display: 'flex' }}>
            <span className="ol-num">05</span> CONTACT
          </a>
        </div>
        <div className="nav-overlay-foot">
          <SocialLinks variant="overlay" />
        </div>
      </div>
    </>
  )
}
