import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const go = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 280)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav">
      <button className="u" onClick={() => go('work')}>Work</button>
      <button className="u" onClick={() => go('about')}>About</button>
      <a className="u" href="mailto:999gabriel.winkler@gmail.com">Contact</a>
    </nav>
  )
}
