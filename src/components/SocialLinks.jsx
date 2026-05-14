const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/999Gabriel',
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" width="17" height="17" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-winkler-44b705294/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/The999GABRIEL',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:999gabriel.winkler@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
]

/* variant: 'icon' (square boxes) | 'text' (mono text links) | 'overlay' (large overlay links) */
export default function SocialLinks({ variant = 'icon', invert = false }) {
  if (variant === 'text') {
    return (
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        {SOCIALS.map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener"
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: invert ? 'rgba(247,244,239,0.4)' : 'var(--gray-2)',
              transition: 'color 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--crimson)'}
            onMouseLeave={e => e.currentTarget.style.color = invert ? 'rgba(247,244,239,0.4)' : 'var(--gray-2)'}
          >
            {s.icon}
            {s.label}
          </a>
        ))}
      </div>
    )
  }

  if (variant === 'overlay') {
    return (
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {SOCIALS.map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener"
            className="nav-overlay-foot-link"
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(247,244,239,0.35)',
              transition: 'color 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--crimson)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,244,239,0.35)'}
          >
            {s.icon}
            {s.label}
          </a>
        ))}
      </div>
    )
  }

  // Default: icon boxes
  return (
    <div style={{ display: 'flex', gap: 6 }}>
      {SOCIALS.map(s => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener"
          title={s.label}
          style={{
            width: 40,
            height: 40,
            border: `1.5px solid ${invert ? 'rgba(247,244,239,0.15)' : 'var(--gray-4)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: invert ? 'rgba(247,244,239,0.5)' : 'var(--gray-2)',
            transition: 'border-color 0.15s ease, color 0.15s ease, background 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--crimson)'
            e.currentTarget.style.color = 'var(--crimson)'
            e.currentTarget.style.background = 'var(--crimson-bg)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = invert ? 'rgba(247,244,239,0.15)' : 'var(--gray-4)'
            e.currentTarget.style.color = invert ? 'rgba(247,244,239,0.5)' : 'var(--gray-2)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}
