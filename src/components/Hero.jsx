import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import profilePhoto from '../../assets/Original-23226210.jpg'

export default function Hero() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero > *', {
        opacity: 0, y: 14, duration: 1.1, stagger: 0.14, ease: 'power2.out', delay: 0.1,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={rootRef}>
      <h1 className="hero-name">Gabriel Winkler</h1>
      <p className="hero-caption">
        Full-stack engineer &amp; founder<br />
        Wattens, Austria
      </p>
      <img className="hero-portrait" src={profilePhoto} alt="Gabriel Winkler" />
    </section>
  )
}
