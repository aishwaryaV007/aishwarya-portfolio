import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { profile } from './data'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Leadership />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}

export default App
