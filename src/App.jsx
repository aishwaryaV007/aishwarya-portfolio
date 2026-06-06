import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer Area */}
      <footer className="border-t border-[var(--border-color)] py-8 mt-12 bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Aishwarya. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
