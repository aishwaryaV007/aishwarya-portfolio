import { profile, links } from '../data'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a href="#work" className="button button-primary">
            See my work
          </a>
          <a href={profile.resume} className="button button-secondary" download>
            Download resume (PDF)
          </a>
        </div>

        <ul className="hero-links" aria-label="Profiles">
          <li>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${links.email}`}>{links.email}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
