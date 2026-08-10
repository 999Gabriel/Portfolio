import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'

export default function Navbar() {
  const navRef = useRef(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return
      navRef.current.classList.toggle('scrolled', window.scrollY > 24)
    }
    onScroll()
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
      setTimeout(() => scrollToSection(section), 280)
    } else {
      scrollToSection(section)
    }
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const items = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'journey' },
  ]

  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">Gabriel Winkler</Link>

          <div className="nav-links">
            {items.map((i) => (
              <button key={i.id} className="nav-link" onClick={() => go(i.id)}>{i.label}</button>
            ))}
            <Link to="/projects" className="nav-link">Projects</Link>
            <a href="mailto:999gabriel.winkler@gmail.com" className="nav-link">Contact</a>
          </div>

          <button
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
            <span style={open ? { opacity: 0 } : {}} />
            <span style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${open ? 'open' : ''}`}>
        <div className="nav-overlay-links">
          {items.map((item, i) => (
            <button key={item.id} className="nav-overlay-link" onClick={() => go(item.id)}>
              <span className="ol-num">0{i + 1}</span>{item.label}
            </button>
          ))}
          <Link to="/projects" className="nav-overlay-link">
            <span className="ol-num">04</span>Projects
          </Link>
          <a href="mailto:999gabriel.winkler@gmail.com" className="nav-overlay-link">
            <span className="ol-num">05</span>Contact
          </a>
        </div>
        <div className="nav-overlay-foot">
          <SocialLinks variant="overlay" />
        </div>
      </div>
    </>
  )
}
