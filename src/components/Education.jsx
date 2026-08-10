const CERTS = [
  {
    name: 'Claude Code in Action',
    sub: 'Anthropic · Certificate of Completion',
    img: '/certs/claude-code-in-action.png',
    href: '/certs/claude-code-in-action.pdf',
  },
  {
    name: 'Claude 101',
    sub: 'Anthropic · Certificate of Completion',
    img: '/certs/claude-101.png',
    href: '/certs/claude-101.pdf',
  },
  {
    name: 'AI Fluency: Framework & Foundations',
    sub: 'Anthropic · Certificate of Completion',
    img: '/certs/ai-fluency.png',
    href: '/certs/ai-fluency.pdf',
  },
  {
    name: 'Project Management — pm basic',
    sub: 'pma · Projekt Management Austria',
    img: '/certs/pma-pm.jpeg',
    href: 'https://www.linkedin.com/in/gabriel-winkler-44b705294/overlay/Honor/615915229/treasury/?profileId=ACoAAEdLuDsB8DiglXHzdil66s113x2py4webrs',
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
            <div className="row-note">Wirtschaftsingenieure · Informatik — one of Austria’s most renowned technical colleges</div>
          </div>
          <span className="row-year">Matura 2027</span>
        </div>
      </div>

      <span className="slabel sub">Certifications</span>
      <div className="certs">
        {CERTS.map((c) => (
          <a className="cert" href={c.href} target="_blank" rel="noopener" key={c.name}>
            <div className="cert-thumb">
              <img src={c.img} alt={`${c.name} — certificate`} />
            </div>
            <div className="cert-name">{c.name}</div>
            <div className="cert-sub">{c.sub}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
