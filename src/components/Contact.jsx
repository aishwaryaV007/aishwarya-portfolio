import { Mail, Download } from 'lucide-react'
import Section from './Section'
import SocialIcon from './SocialIcons'
import { links, profile } from '../data'

const contacts = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}`, icon: <Mail size={20} /> },
  { label: 'LinkedIn', value: 'aishwarya-vollala', href: links.linkedin, icon: <SocialIcon name="linkedin" /> },
  { label: 'GitHub', value: 'aishwaryaV007', href: links.github, icon: <SocialIcon name="github" /> },
  { label: 'Instagram', value: '_aishwarya_14_07_', href: links.instagram, icon: <SocialIcon name="instagram" /> },
]

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="contact-intro">
        I'm open to internships and project collaborations. The quickest way to reach me is email.
      </p>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="card contact-card"
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
          >
            <span className="contact-icon">{c.icon}</span>
            <span>
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </span>
          </a>
        ))}
      </div>
      <a href={profile.resume} className="button button-primary contact-resume" download>
        <Download size={18} /> Download resume
      </a>
    </Section>
  )
}

export default Contact
