import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SocialLinks from './SocialLinks.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-pre, .contact-title, .contact-email-link', {
        opacity: 0,
        y: 28,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-inner', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-inner">
        <p className="contact-pre">Have a project in mind?</p>
        <h2 className="contact-title">LET'S<br />BUILD IT.</h2>

        <a href="mailto:999gabriel.winkler@gmail.com" className="contact-email-link">
          999gabriel.winkler@gmail.com
          <span style={{ color: 'var(--crimson)', fontSize: 22 }}>→</span>
        </a>

        <div className="contact-divider" />

        <div className="footer-row">
          <span className="footer-brand">GABRIEL WINKLER</span>
          <SocialLinks variant="icon" />
          <span className="footer-copy">© 2026 · Innsbruck, Austria</span>
        </div>
      </div>
    </section>
  )
}
