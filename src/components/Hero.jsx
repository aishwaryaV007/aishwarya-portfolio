import { useEffect, useState } from 'react'
import { ArrowRight, Code2, Database, Layout, Sparkles } from 'lucide-react'

export default function Hero() {
  const roles = ['Full-Stack Developer', 'UI/UX Architect', 'Cloud Integrator', 'Problem Solver']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    let timer
    const currentFullRole = roles[currentRoleIndex]
    
    const tick = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentFullRole.substring(0, currentText.length + 1))
        
        if (currentText === currentFullRole) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500)
          return
        }
      } else {
        // Deleting
        setCurrentText(currentFullRole.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          return
        }
      }
      
      const speed = isDeleting ? 40 : 85
      timer = setTimeout(tick, speed)
    }

    timer = setTimeout(tick, 100)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex])

  const scrollToSection = (id) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[var(--accent-glow)] blur-[80px] -z-10 transition-all duration-300"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for new opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-heading)] leading-none">
            Hi, I'm <span className="gradient-text font-extrabold">Aishwarya</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-medium text-[var(--text-main)]">
              I am a <span className="text-purple-500 font-semibold typing-cursor pr-1">{currentText}</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
            I craft secure, high-performance web applications from concept to deployment. Specialized in React, modern backend frameworks, database architecture, and cloud deployment pipelines.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 rounded-lg font-semibold text-white gradient-bg shadow-lg hover:shadow-purple-500/25 hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 py-3 rounded-lg font-semibold border border-[var(--border-color)] text-[var(--text-heading)] hover:bg-[var(--border-color)] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Visual Graphic Section */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-[var(--border-color)] flex items-center justify-center animate-float">
            {/* Inner Ring */}
            <div className="w-[80%] h-[80%] rounded-full border border-dashed border-[var(--border-color)] absolute"></div>

            {/* Float Cards */}
            {/* Card 1: Frontend */}
            <div className="absolute top-0 left-1/4 glass px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-md border border-[var(--border-color)] hover:scale-105 transition-transform duration-200">
              <Layout className="w-5 h-5 text-indigo-500" />
              <div className="text-xs text-left">
                <p className="font-bold text-[var(--text-heading)]">Frontend</p>
                <p className="text-[var(--text-muted)]">React, Tailwind, Next.js</p>
              </div>
            </div>

            {/* Card 2: Backend */}
            <div className="absolute bottom-8 right-0 glass px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-md border border-[var(--border-color)] hover:scale-105 transition-transform duration-200">
              <Database className="w-5 h-5 text-purple-500" />
              <div className="text-xs text-left">
                <p className="font-bold text-[var(--text-heading)]">Backend</p>
                <p className="text-[var(--text-muted)]">Node, Express, PostgreSQL</p>
              </div>
            </div>

            {/* Card 3: Cloud & Devops */}
            <div className="absolute top-1/2 -left-12 glass px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-md border border-[var(--border-color)] hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5 text-pink-500" />
              <div className="text-xs text-left">
                <p className="font-bold text-[var(--text-heading)]">Engineering</p>
                <p className="text-[var(--text-muted)]">Clean Architecture</p>
              </div>
            </div>

            {/* Central Circle logo */}
            <div className="w-[50%] h-[50%] rounded-full gradient-bg p-0.5 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[var(--bg-secondary)] flex items-center justify-center">
                <span className="text-4xl font-extrabold gradient-text">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
