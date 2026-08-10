import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ENTRIES = [
  { date: '2026 — 2027', role: 'Diplomarbeit — Feynman', org: 'HTL Anichstraße' },
  { date: '2024 — now',  role: 'Founder', org: 'WinWare' },
  { date: '2024 — now',  role: 'Co-founder', org: 'CULINA Junior Company' },
  { date: '2024 — 2025', role: 'Software engineer intern', org: 'Raitec Innsbruck' },
  { date: '2021 — 2027', role: 'Student', org: 'HTL Anichstraße' },
]

export default function Journey() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.path .row', {
        opacity: 0, y: 14, duration: 0.6, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 82%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" className="wrap" ref={ref}>
      <div className="list path">
        {ENTRIES.map((e, i) => (
          <div className="row" key={i}>
            <div>
              <div className="row-name">{e.role}</div>
              <div className="row-note">{e.org}</div>
            </div>
            <span className="row-year">{e.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
