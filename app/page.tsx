import Hero from './components/Hero'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Expertise />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
