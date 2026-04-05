import Link from 'next/link'
import { siteContent } from '@/data/site'

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="22" height="16" rx="2" />
      <polyline points="1,1 12,10 23,1" />
    </svg>
  )
}

export default function Footer() {
  const { footer } = siteContent

  return (
    <footer className="border-t border-border-gold bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-5">
        <div className="flex items-center gap-6">
          <a
            href={footer.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-gold transition-colors duration-200"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={`mailto:${footer.emailAddress}`}
            className="text-text-muted hover:text-gold transition-colors duration-200"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>

        <div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-ultra uppercase text-text-muted">
          <Link href={footer.applyHref} className="hover:text-gold transition-colors duration-200">
            Apply
          </Link>
          <span className="text-text-faint">|</span>
          <Link href={footer.sponsorsHref} className="hover:text-gold transition-colors duration-200">
            Sponsors
          </Link>
        </div>
      </div>
    </footer>
  )
}
