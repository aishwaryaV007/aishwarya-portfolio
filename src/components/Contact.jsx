import { links, profile } from '../data'

const profiles = [
  { label: 'LinkedIn', handle: 'aishwarya-vollala', href: links.linkedin },
  { label: 'GitHub', handle: 'aishwaryaV007', href: links.github },
  { label: 'Instagram', handle: '_aishwarya_14_07_', href: links.instagram },
]

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-lead">Email is the fastest way to reach me.</p>
        <a href={`mailto:${links.email}`} className="contact-email">
          {links.email}
        </a>

        <ul className="contact-profiles">
          {profiles.map((p) => (
            <li key={p.label}>
              <a href={p.href} target="_blank" rel="noreferrer">
                <span className="contact-label">{p.label}</span>
                <span className="contact-handle">{p.handle}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href={profile.resume} className="button button-primary" download>
          Download resume (PDF)
        </a>
      </div>
    </section>
  )
}

export default Contact
