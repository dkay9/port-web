import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ProjectsFullStack from '@/components/sections/ProjectsFullStack'
import ProjectsAIML from '@/components/sections/ProjectsAIML'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <ProjectsFullStack />
      <ProjectsAIML />
      <Skills />
      <Contact />
    </main>
  )
}
