import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CV from './components/CV'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import Plasma from './components/Plasma'
import CustomCursor from './components/CustomCursor'

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
        <CustomCursor />
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <CV />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </div>
  )
}

export default App
