import { profile, links, stats } from '../data'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-top">
          <div className="hero-text">
            <p className="kicker">Problem set · 2026</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a href="#problems" className="button button-primary">
                View problems
              </a>
              <a href={profile.resume} className="button button-secondary" download>
                Download resume (PDF)
              </a>
            </div>
          </div>

          <figure className="hero-photo">
            <img src={profile.photo} alt={`Photo of ${profile.name}`} width="640" height="800" />
            <figcaption className="mono">{profile.photoCaption}</figcaption>
          </figure>
        </div>

        <dl className="stats" aria-label="At a glance">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt className="stat-label">{s.label}</dt>
              <dd className="stat-value">{s.value}</dd>
            </div>
          ))}
        </dl>

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
