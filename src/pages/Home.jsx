import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Education from '../components/Education.jsx'
import ProjectsPreview from '../components/ProjectsPreview.jsx'
import Journey from '../components/Journey.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <ProjectsPreview />
      <Journey />
      <Contact />
    </main>
  )
}
