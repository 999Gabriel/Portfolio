const ENTRIES = [
  { date: '2026 — 2027', role: 'Diplomarbeit — Feynman', org: 'HTL Anichstraße' },
  { date: '2024 — now',  role: 'Founder', org: 'WinWare' },
  { date: '2024 — now',  role: 'Co-founder', org: 'CULINA Junior Company' },
  { date: '2024 — 2025', role: 'Software engineer intern', org: 'Raitec Innsbruck' },
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
