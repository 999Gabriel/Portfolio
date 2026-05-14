import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Journey from '../components/Journey.jsx'
import ProjectsPreview from '../components/ProjectsPreview.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsPreview />
      <About />
      <Journey />
      <Contact />
    </main>
  )
}
