import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import profilePhoto from '../../assets/Original-23226210.jpg'

export default function Hero() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-name .ln > span', { yPercent: 110, duration: 1.05, stagger: 0.08 }, 0.05)
        .from('.hero-eyebrow', { opacity: 0, y: 12, duration: 0.6 }, 0.1)
        .from(['.hero-role', '.hero-meta', '.hero-actions'], { opacity: 0, y: 16, duration: 0.7, stagger: 0.09 }, '-=0.5')
        .from('.hero-portrait', { opacity: 0, y: 24, duration: 0.9 }, '-=0.7')
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.3')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero wrap" ref={rootRef}>
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow eyebrow">
            <span className="dot" />
            <span>Portfolio — Wattens, 2026</span>
          </div>

          <h1 className="hero-name">
            <span className="ln"><span>Gabriel</span></span>
            <span className="ln"><span>Winkler</span></span>
          </h1>

          <div className="hero-sub">
            <span className="hero-role">Full-stack engineer &amp; founder</span>
            <span className="hero-meta">
              <span>19</span><span className="sep">/</span>
              <span>HTL Anichstraße</span><span className="sep">/</span>
              <span>Matura 2027</span>
            </span>
          </div>

          <div className="hero-actions">
            <button className="btn btn-solid" onClick={scrollToWork}>Selected Work</button>
            <Link to="/projects" className="btn btn-line">All Projects</Link>
            <a href="/Gabriel_Winkler_Resume.pdf" download className="btn-text">Résumé ↓</a>
          </div>
        </div>

        <figure className="hero-portrait">
          <img src={profilePhoto} alt="Gabriel Winkler" />
          <figcaption>
            <span>G. Winkler</span>
            <span>Est. 2007</span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </section>
  )
}
