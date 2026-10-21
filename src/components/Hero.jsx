import { Download, MapPin, Mail } from 'lucide-react'
import SocialIcon from './SocialIcons'
import { profile, links } from '../data'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow">Hi, I'm</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-headline">{profile.headline}</p>

        <div className="hero-facts">
          <span>{profile.degree}</span>
          <span>
            {profile.college} · {profile.years}
          </span>
          <span>
            CGPA <strong>{profile.cgpa}</strong>
          </span>
          <span className="with-icon">
            <MapPin size={16} /> {profile.location}
          </span>
        </div>

        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View projects
          </a>
          <a href={profile.resume} className="button button-outline" download>
            <Download size={18} /> Resume
          </a>
          <div className="hero-socials">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <SocialIcon name="github" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <SocialIcon name="linkedin" />
            </a>
            <a href={`mailto:${links.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
