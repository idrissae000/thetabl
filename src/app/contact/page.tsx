'use client'

import { useState } from 'react'
import Divider from '@/components/ui/Divider'
import { siteContent } from '@/data/site'

const inputBase =
  'w-full bg-transparent border border-border-gold text-text-cream placeholder-text-faint font-sans text-base px-4 py-3 outline-none transition-colors duration-200 focus:border-gold/60'

const labelBase =
  'block font-sans text-xs font-semibold tracking-ultra uppercase text-text-muted mb-2'

const INQUIRY_TYPES = [
  'General Inquiry',
  'Sponsorship & Partnerships',
  'Press & Media',
  'Membership Question',
  'Other',
]

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState('')
  const [message, setMessage] = useState('')
  // Formspree honeypot — any value submitted in `_gotcha` causes the
  // submission to be silently dropped server-side as likely spam.
  const [gotcha, setGotcha] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('submitting')

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _type: 'contact', name, email, inquiryType, message, _gotcha: gotcha }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 pb-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-ultra uppercase text-text-muted mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">Contact</h1>
          <Divider className="my-6" />
          <p className="font-sans text-base leading-[1.9] text-text-muted max-w-sm mx-auto">
            For sponsorship inquiries, press, or general questions. For membership, please use the{' '}
            <a href="/apply" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4 decoration-gold/30">application form</a>.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-12">
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-serif text-2xl text-gold mb-3">Message Received</p>
            <p className="font-sans text-base text-text-muted">We will be in touch shortly.</p>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Honeypot — hidden from humans, filled by bots. */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={gotcha}
              onChange={e => setGotcha(e.target.value)}
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelBase}>Name <span className="text-gold/50">*</span></label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required className={inputBase} />
              </div>
              <div>
                <label className={labelBase}>Email <span className="text-gold/50">*</span></label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required className={inputBase} />
              </div>
            </div>

            <div>
              <label className={labelBase}>Inquiry Type</label>
              <select value={inquiryType} onChange={e => setInquiryType(e.target.value)}
                className={`${inputBase} cursor-pointer appearance-none`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c0aa88' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  paddingRight: '40px',
                }}>
                <option value="" className="bg-surface text-text-muted">Select inquiry type</option>
                {INQUIRY_TYPES.map(t => <option key={t} value={t} className="bg-surface text-text-cream">{t}</option>)}
              </select>
            </div>

            <div>
              <label className={labelBase}>Message <span className="text-gold/50">*</span></label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="How can we help?" rows={5} required className={`${inputBase} resize-none`} />
            </div>

            {status === 'error' && <p className="font-sans text-xs text-red-400">Something went wrong. Please try again.</p>}

            <button type="submit" disabled={status === 'submitting'}
              className="w-full sm:w-auto border border-gold text-gold font-sans text-xs font-semibold tracking-ultra uppercase px-10 py-3.5 transition-all duration-300 hover:bg-gold hover:text-bg-primary disabled:opacity-40 disabled:cursor-not-allowed">
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}

        <div className="mt-14 pt-10 border-t border-border-gold flex items-center justify-center text-center">
          <a href={siteContent.footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-medium tracking-ultra uppercase text-text-muted hover:text-gold transition-colors duration-200">
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
