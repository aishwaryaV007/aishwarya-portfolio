import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import { profile } from './data'

function App() {
  return (
    <>
      <a href="#work" className="skip-link">
        Skip to projects
      </a>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>This site uses no cookies, tracking or analytics.</span>
        </div>
      </footer>
    </>
  )
}

export default App
