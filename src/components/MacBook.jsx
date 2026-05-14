import { useEffect, useRef } from 'react'

const LINES = [
  { type: 'prompt', text: '> feynman --start' },
  { type: 'dim', text: '  loading gabriel.json...' },
  { type: 'dim', text: '  ✓ memory: session_2026-05-10' },
  { type: 'empty', text: '' },
  { type: 'bright', text: '  hello, gabriel.' },
  { type: 'bright', text: '  where did we stop?' },
  { type: 'empty', text: '' },
  { type: 'prompt', text: '> quantum mechanics' },
  { type: 'dim', text: '  resuming last session...' },
  { type: 'empty', text: '' },
  { type: 'cursor', text: '' },
]

function KeyRow({ keys }) {
  return (
    <div className="mb-keys-row">
      {keys.map((k, i) => (
        <div key={i} className={`mb-key ${k}`} />
      ))}
    </div>
  )
}

export default function MacBook() {
  const linesRef = useRef([])

  useEffect(() => {
    linesRef.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      setTimeout(() => {
        if (el) el.style.opacity = '1'
        el.style.transition = 'opacity 0.3s ease'
      }, 600 + i * 160)
    })
  }, [])

  return (
    <div className="macbook-scene">
      <div className="macbook-wrapper">
        {/* Screen lid */}
        <div className="mb-screen">
          <div className="mb-screen-notch" />
          <div className="mb-display">
            {/* Terminal window chrome */}
            <div className="mb-terminal-header">
              <div className="mb-dot mb-dot-red" />
              <div className="mb-dot mb-dot-yellow" />
              <div className="mb-dot mb-dot-green" />
              <span className="mb-terminal-title">feynman — zsh</span>
            </div>

            {/* Terminal content */}
            <div className="mb-terminal">
              {LINES.map((line, i) => (
                <div
                  key={i}
                  ref={el => linesRef.current[i] = el}
                  style={{ opacity: 0 }}
                >
                  {line.type === 'cursor' ? (
                    <span>
                      <span className="mb-line-dim">{'  › '}</span>
                      <span className="mb-cursor" />
                    </span>
                  ) : line.type === 'empty' ? (
                    <>&nbsp;</>
                  ) : (
                    <span className={
                      line.type === 'prompt' ? 'mb-line' :
                      line.type === 'dim' ? 'mb-line-dim' :
                      'mb-line-bright'
                    }>
                      {line.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Base / keyboard */}
        <div className="mb-base">
          <div className="mb-keyboard">
            <KeyRow keys={['', '', '', '', '', '', '', '', '', '', '', '', 'wide']} />
            <KeyRow keys={['wide', '', '', '', '', '', '', '', '', '', '', '', '']} />
            <KeyRow keys={['wider', '', '', '', '', '', '', '', '', '', '', 'wider']} />
            <KeyRow keys={['wider', '', '', '', '', '', '', '', '', '', 'wider']} />
            <KeyRow keys={['wide', 'wide', 'space', 'wide', 'wide']} />
          </div>
          <div className="mb-trackpad" />
        </div>
      </div>
    </div>
  )
}
