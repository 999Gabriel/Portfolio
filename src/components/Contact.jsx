const LINKS = [
  { label: 'Email', href: 'mailto:999gabriel.winkler@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/999Gabriel' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-winkler-44b705294/' },
  { label: 'X', href: 'https://x.com/The999GABRIEL' },
]

export default function Contact() {
  return (
    <section id="contact" className="wrap">
      <footer className="footer">
        <span className="footer-sign">Gabriel Winkler</span>
        <div className="footer-links">
          {LINKS.map((l) => (
            <a
              key={l.label}
              className="u"
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener"
            >
              {l.label}
            </a>
          ))}
        </div>
        <span className="footer-copy">© 2026 · Wattens, Austria</span>
      </footer>
    </section>
  )
}
