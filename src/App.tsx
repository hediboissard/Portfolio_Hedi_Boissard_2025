import { Navbar, Footer } from '@/components/layout'
import { Home, About, Experience, Projects, Skills, CV, Contact } from '@/components/sections'
import { BackToTop } from '@/components/shared'
import { Plasma } from '@/components/effects'

function Divider() {
  return <div className="section-divider max-w-4xl mx-auto" aria-hidden />
}

function App() {
  return (
    <div className="min-h-screen text-[var(--fg)] relative">
      <div className="fixed inset-0 z-0 w-full h-full">
        <Plasma
          color="#5227FF"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive
        />
      </div>
      <div className="fixed inset-0 z-[1] bg-[var(--bg)]/55 pointer-events-none" aria-hidden />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <Divider />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <CV />
          <Divider />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  )
}

export default App
