const ENTRIES = [
  {
    date: '2021 — 2027',
    role: 'Student',
    org: 'HTL Anichstraße — one of Austria’s most renowned technical colleges',
  },
  {
    date: '2024 — now',
    role: 'Founder',
    org: 'WinWare — on hold during school',
  },
  {
    date: 'Aug 2024 & 2025',
    role: 'Software engineer intern',
    org: 'Raitec Innsbruck — one month each summer',
  },
  {
    date: 'Oct 2025 — May 2026',
    role: 'Co-founder',
    org: 'CULINA Junior Company',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="wrap section-pad">
      <span className="slabel">Path</span>
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
