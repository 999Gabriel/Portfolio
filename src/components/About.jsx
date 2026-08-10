import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.block p', {
        opacity: 0, y: 16, duration: 0.9, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="wrap" ref={ref}>
      <div className="block">
        <p className="lead">
          19, from Wattens. In my fifth year at HTL Anichstraße, studying
          industrial engineering and IT.
        </p>
        <p className="dim">I founded WinWare and co-founded CULINA.</p>
        <p className="dim">
          Right now I&apos;m building Feynman — an adaptive AI learning agent — as
          my Diplomarbeit.
        </p>
      </div>
    </section>
  )
}
