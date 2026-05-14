import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ENTRIES = [
  {
    date: '2025 – 2026',
    role: 'DIPLOMARBEIT: FEYNMAN',
    org: 'HTL Anichstraße',
    desc: 'Building an adaptive AI learning agent with persistent memory. Co-authored with Rojat Camgöz. Python + FastAPI + Anthropic Claude API.',
  },
  {
    date: '2024 – Present',
    role: 'FOUNDER',
    org: 'WinWare',
    desc: 'Custom software development, automation & IoT solutions for clients across Austria.',
  },
  {
    date: '2024 – Present',
    role: 'CO-FOUNDER',
    org: 'CULINA Junior Company',
    desc: 'Restaurant-grade modular kitchen systems designed for home use. Product design, business development, sales.',
  },
  {
    date: '2024 – 2025',
    role: 'SOFTWARE ENGINEER INTERN',
    org: 'Raitec Innsbruck',
    desc: 'Professional software development, automation and system integration.',
  },
  {
    date: '2021 – 2027',
    role: 'STUDENT',
    org: 'HTL Anichstraße',
    desc: 'Wirtschaftsingenieurwesen und Betriebsinformatik. Engineering meets business. Graduating with Matura 2027.',
  },
]

export default function Journey() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.timeline', start: 'top 82%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" className="journey-section" ref={sectionRef}>
      <div className="journey-inner">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">JOURNEY</h2>
        </div>
        <div className="timeline">
          {ENTRIES.map((e, i) => (
            <div className="timeline-item" key={i}>
              <span className="timeline-date">{e.date}</span>
              <div>
                <div className="timeline-role">{e.role}</div>
                <span className="timeline-org">{e.org}</span>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
