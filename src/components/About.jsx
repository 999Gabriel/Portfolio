import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import handPhoto from '../../assets/transition_hand.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-photo-wrap', {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-inner', start: 'top 78%' },
      })
      gsap.from('.about-content > *', {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-inner', start: 'top 78%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-photo-wrap">
          <img src={handPhoto} alt="" className="about-photo" style={{ objectPosition: 'center center' }} />
          <div className="about-photo-caption">
            <span>Gabriel Winkler · Innsbruck, 2026</span>
          </div>
        </div>
        <div className="about-content">
          <div className="about-label-row">
            <span className="section-num" style={{ color: 'var(--gray-3)' }}>02</span>
            <span className="label" style={{ color: 'var(--gray-3)' }}>About</span>
          </div>
          <h2 className="about-title">
            I build things<br />that <em>actually ship.</em>
          </h2>
          <p className="about-text">
            18. Innsbruck. 5th year at HTL Anichstraße, studying Industrial
            Engineering &amp; IT. I founded WinWare to build real software for
            real clients. Co-founded CULINA as a Junior Company. Now in the
            deep end of my Diplomarbeit — Feynman.
          </p>
          <p className="about-text">
            My work lives at the intersection of AI, full-stack engineering,
            and hardware. I believe software should be intentional, fast,
            and built to last.
          </p>
          <p className="about-text">
            Named after Richard Feynman because the principle applies to
            everything: if you can't explain it simply, you don't understand
            it yet.
          </p>
        </div>
      </div>
    </section>
  )
}
