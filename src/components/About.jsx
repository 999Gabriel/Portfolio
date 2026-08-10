import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait from '../../assets/hero_portrait.jpg'

gsap.registerPlugin(ScrollTrigger)

const STACK = ['Python', 'FastAPI', 'React', 'React Native', 'Node.js', 'TypeScript', 'Docker', 'PostgreSQL', 'Claude API', 'Arduino']

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-figure', {
        opacity: 0, y: 30, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-grid', start: 'top 78%' },
      })
      gsap.from('.about-content > *', {
        opacity: 0, y: 22, stagger: 0.09, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-grid', start: 'top 78%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="section wrap" ref={sectionRef}>
      <div className="section-head">
        <div className="section-head-left">
          <span className="section-index">02</span>
          <h2 className="section-title">About</h2>
        </div>
      </div>

      <div className="about-grid">
        <figure className="about-figure">
          <img src={portrait} alt="Gabriel Winkler" />
          <figcaption>Gabriel Winkler — Wattens, 2026</figcaption>
        </figure>

        <div className="about-content">
          <h3 className="about-title">
            I build things that <em>actually ship.</em>
          </h3>
          <p className="about-p">
            19, from Wattens. In my 5th year at <strong>HTL Anichstraße</strong>,
            studying Industrial Engineering &amp; IT — where engineering meets business.
            I founded <strong>WinWare</strong> to build real software for real clients and
            co-founded <strong>CULINA</strong> as a Junior Company.
          </p>
          <p className="about-p">
            My work lives at the intersection of AI, full-stack engineering, and hardware.
            Right now I&apos;m in the deep end of my Diplomarbeit — <strong>Feynman</strong>,
            an adaptive AI learning agent with persistent memory.
          </p>
          <p className="about-p">
            I believe software should be intentional, fast, and built to last. Named after
            Richard Feynman for a reason: if you can&apos;t explain it simply, you don&apos;t
            understand it yet.
          </p>
          <div className="about-stack">
            {STACK.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
