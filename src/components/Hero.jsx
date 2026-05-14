import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import profilePhoto from '../../assets/Original-23226210.jpg'
import SocialLinks from './SocialLinks.jsx'

export default function Hero() {
  const containerRef = useRef(null)
  const photoRef = useRef(null)
  const separatorRef = useRef(null)

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (!photoRef.current) return
      const scroll = window.scrollY
      photoRef.current.style.transform = `translateY(${scroll * 0.25}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.05 })

      tl.to('.hero-firstname span, .hero-lastname span', {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 1,
        ease: 'power3.out',
      })

      tl.to('.hero-separator', {
        width: '100%',
        duration: 0.7,
        ease: 'power2.inOut',
      }, '-=0.4')

      tl.from(['.hero-meta', '.hero-school', '.hero-tagline'], {
        opacity: 0,
        y: 18,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')

      tl.from('.hero-actions', {
        opacity: 0,
        y: 14,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2')

      tl.from('.hero-scroll-indicator', {
        opacity: 0,
        duration: 0.6,
      }, '-=0.2')

      tl.from('.hero-photo-badge', {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'back.out(1.5)',
      }, '-=0.8')
    }, containerRef)

    return () => {
      window.removeEventListener('scroll', onScroll)
      ctx.revert()
    }
  }, [])

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={containerRef}>
      {/* Left: text */}
      <div className="hero-text">
        <span className="hero-eyebrow">Portfolio · 2026</span>

        <div className="hero-name">
          <span className="hero-firstname"><span>GABRIEL</span></span>
          <span className="hero-lastname"><span>WINKLER</span></span>
        </div>

        <div className="hero-separator" />

        <div className="hero-meta">
          <span className="hero-meta-item">18</span>
          <span className="hero-meta-sep">·</span>
          <span className="hero-meta-item">Innsbruck, Austria</span>
          <span className="hero-meta-sep">·</span>
          <span className="hero-meta-item">Full-Stack Engineer</span>
        </div>

        <div className="hero-school">
          <span className="hero-school-name">HTL Anichstraße</span>
          <span className="hero-school-dept">Wirtschaftsingenieurwesen &amp; Betriebsinformatik</span>
          <span className="hero-school-matura">Matura 2027</span>
        </div>

        <p className="hero-tagline">
          Building software that thinks,<br />adapts, and ships.
        </p>

        <div className="hero-actions">
          <button className="btn btn-dark" onClick={scrollToWork}>
            See My Work
          </button>
          <Link to="/projects" className="btn btn-outline">
            All Projects ↗
          </Link>
          <a href="/Gabriel_Winkler_Resume.pdf" download className="btn btn-ghost">
            Resume ↓
          </a>
        </div>

        <div style={{ marginBottom: 32 }}>
          <SocialLinks variant="text" />
        </div>

        <div className="hero-scroll-indicator">
          <span className="hero-scroll-text">scroll</span>
          <div className="hero-scroll-bar" />
        </div>
      </div>

      {/* Right: photo */}
      <div className="hero-photo-col">
        <img
          src={profilePhoto}
          alt="Gabriel Winkler"
          ref={photoRef}
        />
        <div className="hero-photo-badge">
          18
          <span className="hero-photo-badge-sub">Innsbruck</span>
        </div>
      </div>
    </section>
  )
}
