import { useState, useEffect } from 'react'
import { Mail, Send, CheckCircle, AlertCircle, Trash2, Database } from 'lucide-react'
import { Github, Linkedin, Twitter } from './Icons'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [savedMessages, setSavedMessages] = useState([])

  // Load saved local mockup messages
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_messages')
    if (saved) {
      setSavedMessages(JSON.parse(saved))
    }
  }, [])

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid'
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required'
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for that field when editing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate backend API database insertion latency
    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleString()
      }
      
      const updatedMessages = [newMessage, ...savedMessages]
      setSavedMessages(updatedMessages)
      localStorage.setItem('portfolio_messages', JSON.stringify(updatedMessages))

      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Auto clear success indicator
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1200)
  }

  const deleteMessage = (id) => {
    const updated = savedMessages.filter(m => m.id !== id)
    setSavedMessages(updated)
    localStorage.setItem('portfolio_messages', JSON.stringify(updated))
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-heading)]">Get In Touch</h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            Submit a message through the form below. Local storage is used to mock a server-side database!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass border border-[var(--border-color)] rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-[var(--text-heading)]">Contact Information</h3>
              <p className="text-sm text-[var(--text-main)] leading-relaxed">
                Whether you have an exciting project, a role opportunity, or just want to chat, feel free to drop a message!
              </p>
              
              <div className="space-y-3 pt-2">
                <a href="mailto:aishwarya@developer.io" className="flex items-center gap-3 text-sm text-[var(--text-main)] hover:text-purple-500 transition-colors">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span>aishwarya@developer.io</span>
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="glass border border-[var(--border-color)] rounded-xl p-6 space-y-4">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[var(--text-muted)]">Connect Everywhere</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-[var(--border-color)] hover:bg-purple-500/20 hover:text-purple-500 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-[var(--border-color)] hover:bg-purple-500/20 hover:text-purple-500 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-[var(--border-color)] hover:bg-purple-500/20 hover:text-purple-500 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 glass border border-[var(--border-color)] rounded-xl p-6 sm:p-8 text-left space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-heading)]">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[var(--text-heading)]">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2.5 rounded-lg border text-sm bg-[var(--bg-primary)] text-[var(--text-heading)] focus:outline-none focus:border-purple-500 transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-[var(--border-color)]'
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[var(--text-heading)]">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2.5 rounded-lg border text-sm bg-[var(--bg-primary)] text-[var(--text-heading)] focus:outline-none focus:border-purple-500 transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-[var(--border-color)]'
                    }`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-[var(--text-heading)]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-2.5 rounded-lg border text-sm bg-[var(--bg-primary)] text-[var(--text-heading)] focus:outline-none focus:border-purple-500 transition-colors ${
                    errors.subject ? 'border-red-500/50' : 'border-[var(--border-color)]'
                  }`}
                  placeholder="Collaboration Project"
                />
                {errors.subject && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[var(--text-heading)]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2.5 rounded-lg border text-sm bg-[var(--bg-primary)] text-[var(--text-heading)] focus:outline-none focus:border-purple-500 transition-colors ${
                    errors.message ? 'border-red-500/50' : 'border-[var(--border-color)]'
                  }`}
                  placeholder="Hey, let's discuss details of..."
                />
                {errors.message && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
              </div>

              {/* Action Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-semibold text-white gradient-bg hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-55 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                    <span>Processing Database Entry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </>
                )}
              </button>

              {/* Success Notification Alert */}
              {isSuccess && (
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm animate-fade-in">
                  <CheckCircle className="w-5 h-5" />
                  <span>Success! Your mock message was appended to the database below.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Local Storage Database Dashboard View */}
        {savedMessages.length > 0 && (
          <div className="mt-16 text-left space-y-4 animate-fade-in">
            <div className="flex items-center gap-2 text-[var(--text-heading)]">
              <Database className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-bold">Local SQLite Mock Console (Stored Messages)</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedMessages.map((msg) => (
                <div key={msg.id} className="glass border border-[var(--border-color)] rounded-lg p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-sm text-[var(--text-heading)]">{msg.subject}</h4>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-[var(--text-muted)] hover:text-red-500 p-1 rounded hover:bg-[var(--border-color)] transition-colors cursor-pointer"
                        title="Delete entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-purple-500">From: {msg.name} ({msg.email})</p>
                    <p className="text-xs text-[var(--text-muted)]">{msg.date}</p>
                  </div>
                  <p className="text-xs text-[var(--text-main)] italic border-l-2 border-purple-500/30 pl-2">
                    "{msg.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
