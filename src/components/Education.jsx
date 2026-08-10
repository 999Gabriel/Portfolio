const CERTS = [
  {
    name: 'Claude Code in Action',
    img: '/certs/claude-code-in-action.png',
    pdf: '/certs/claude-code-in-action.pdf',
  },
  {
    name: 'Claude 101',
    img: '/certs/claude-101.png',
    pdf: '/certs/claude-101.pdf',
  },
  {
    name: 'AI Fluency: Framework & Foundations',
    img: '/certs/ai-fluency.png',
    pdf: '/certs/ai-fluency.pdf',
  },
]

export default function Education() {
  return (
    <section id="education" className="wrap section-pad">
      <span className="slabel">Education</span>

      <div className="list">
        <div className="row">
          <div>
            <div className="row-name" style={{ fontFamily: 'var(--ff-serif)', textTransform: 'none', letterSpacing: 0, fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>
              HTL Anichstraße
            </div>
            <div className="row-note">Wirtschaftsingenieure · Informatik — currently attending</div>
          </div>
          <span className="row-year">Matura 2027</span>
        </div>
      </div>

      <span className="slabel sub">Anthropic Certifications</span>
      <div className="certs">
        {CERTS.map((c) => (
          <a className="cert" href={c.pdf} target="_blank" rel="noopener" key={c.pdf}>
            <img src={c.img} alt={`${c.name} — Anthropic certificate of completion`} />
            <div className="cert-name">{c.name}</div>
            <div className="cert-sub">Anthropic · Certificate of Completion</div>
          </a>
        ))}
      </div>
    </section>
  )
}
