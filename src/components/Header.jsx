import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          Aishwarya Vollala
        </a>

        <button
          className="menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? 'nav nav-open' : 'nav'}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
