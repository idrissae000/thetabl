'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { siteContent } from '@/data/site'
import TableLogo from '@/components/ui/TableLogo'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-gold bg-bg-primary/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group">
          <TableLogo className="h-14 sm:h-16 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {siteContent.nav.links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-xs font-medium tracking-ultra uppercase transition-colors duration-300 ${
                  active
                    ? 'text-gold'
                    : 'text-text-muted hover:text-gold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-gold transition-colors duration-300 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-3.5 relative flex flex-col justify-between">
            <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`} />
            <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
            <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="border-t border-border-gold bg-bg-primary/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5">
          {siteContent.nav.links.map((link, i) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-sans text-sm font-medium tracking-ultra uppercase transition-all duration-300 ${
                  active ? 'text-gold' : 'text-text-muted hover:text-gold'
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
