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
      <h1>{name} - {title}</h1>
      <div className="contact-info">
        <a href={`mailto:${email}`}>{email}</a> - {phone} - {location}
      </div>

      <div className="social-links">
        {socialLinks.map((link, index) => (
          <span key={link.url}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
            {index < socialLinks.length - 1 && ' | '}
          </span>
        ))}
      </div>
    </header>
  )
}