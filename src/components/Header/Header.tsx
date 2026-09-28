import { SocialLink } from '../../types/Resume'
import './Header.css'

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}

export function Header({ name, title, email, phone, location, socialLinks }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-name">{name}</h1>
      <p className="header-title">{title}</p>
      <ul className="header-links">
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li><a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a></li>
        <li><span>{location}</span></li>
        {socialLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
