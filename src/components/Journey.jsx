import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ENTRIES = [
  {
    date: '2026 — 2027',
    role: 'Diplomarbeit: Feynman',
    org: 'HTL Anichstraße',
    desc: 'Building an adaptive AI learning agent with persistent memory. Co-authored with Rojat Camgöz. Python + FastAPI + Anthropic Claude API.',
  },
  {
    date: '2024 — Present',
    role: 'Founder',
    org: 'WinWare',
    desc: 'Custom software development, automation & IoT solutions for clients across Austria.',
  },
  {
    date: '2024 — Present',
    role: 'Co-Founder',
    org: 'CULINA Junior Company',
    desc: 'Restaurant-grade modular kitchen systems designed for home use. Product design, business development, sales.',
  },
  {
    date: '2024 — 2025',
    role: 'Software Engineer Intern',
    org: 'Raitec Innsbruck',
    desc: 'Professional software development, automation and system integration.',
  },
  {
    date: '2021 — 2027',
    role: 'Student',
    org: 'HTL Anichstraße',
    desc: 'Wirtschaftsingenieurwesen & Betriebsinformatik. Engineering meets business. Graduating with Matura 2027.',
  },
]

export default function Journey() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.j-row', {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.journey-list', start: 'top 82%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" className="section wrap" ref={sectionRef}>
      <div className="section-head">
        <div className="section-head-left">
          <span className="section-index">03</span>
          <h2 className="section-title">Journey</h2>
        </div>
        <span className="eyebrow">Career Path</span>
      </div>

      <div className="journey-list">
        {ENTRIES.map((e, i) => (
          <div className="j-row" key={i}>
            <span className="j-date">{e.date}</span>
            <div>
              <span className="j-role">{e.role}</span>
              <span className="j-org">{e.org}</span>
              <p className="j-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
