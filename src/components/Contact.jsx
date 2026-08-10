import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SocialLinks from './SocialLinks.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-eyebrow, .contact-title, .contact-email', {
        opacity: 0, y: 26, stagger: 0.1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact', start: 'top 78%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact wrap" ref={sectionRef}>
      <p className="contact-eyebrow eyebrow">Have something in mind?</p>
      <h2 className="contact-title">
        Let&apos;s<br /><em>build</em> it.
      </h2>

      <a href="mailto:999gabriel.winkler@gmail.com" className="contact-email">
        999gabriel.winkler@gmail.com
        <span className="arw">↗</span>
      </a>

      <footer className="footer">
        <span className="footer-brand">Gabriel Winkler</span>
        <SocialLinks variant="icon" />
        <span className="footer-copy">© 2026 — Innsbruck, Austria</span>
      </footer>
    </section>
  )
}
