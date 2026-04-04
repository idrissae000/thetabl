import Link from 'next/link'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import EventCard from '@/components/cards/EventCard'
import TableLogo from '@/components/ui/TableLogo'
import { siteContent } from '@/data/site'
import { upcomingEvents } from '@/data/events'
import { sponsors } from '@/data/sponsors'

// Real images from the current live site
const HERO_IMAGE = 'https://thetablebybb.carrd.co/assets/images/image02.jpg?v=1da90e90'
const ABOUT_IMAGE = 'https://thetablebybb.carrd.co/assets/images/image01.jpg?v=1da90e90'

export default function HomePage() {
  const { hero, about, exclusivity } = siteContent

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        aria-label="Hero"
      >
        {/* Background: real photo from current site */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(0,0,0,0.6) 100%)',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">

          <TableLogo className="w-16 h-16 text-gold opacity-80" />

          <div>
            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-gold tracking-widest uppercase leading-none"
              style={{ letterSpacing: '0.18em' }}
            >
              {hero.heading}
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[11px] tracking-ultra uppercase text-text-muted">
                ({hero.byline})
              </span>
              <div className="h-px w-10 bg-gold/30" />
            </div>
          </div>

          <Divider className="w-32" />

          <p className="font-serif text-xl md:text-2xl italic text-text-cream/90 leading-snug">
            {hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button href={hero.cta.primary.href} variant="outline">
              {hero.cta.primary.label}
            </Button>
            <Button href={hero.cta.secondary.href} variant="ghost">
              {hero.cta.secondary.label}
            </Button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-8 bg-gold" />
          <div className="w-1 h-1 rounded-full bg-gold" />
        </div>
      </section>

      {/* ─── UPCOMING TABLES ───────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border-gold" aria-label="Upcoming Tables">
        <div className="max-w-5xl mx-auto">
          <SectionHeading className="mb-12">Upcoming Tables</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <p className="mt-10 text-center font-sans text-[11px] tracking-ultra uppercase text-text-muted">
            Additional dates to be announced.{' '}
            <Link href="/apply" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4 decoration-gold/30">
              Be the first to know — Apply to join
            </Link>
          </p>
        </div>
      </section>

      {/* ─── PARTNERS & SPONSORS ───────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-border-gold" aria-label="Partners and Sponsors">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="mb-10">Partners &amp; Sponsors</SectionHeading>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {sponsors.map((sponsor) => (
              sponsor.displayStyle === 'text' ? (
                <span
                  key={sponsor.id}
                  className="font-sans text-sm font-medium tracking-wide uppercase text-text-muted hover:text-gold transition-colors duration-200 cursor-default"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {sponsor.name}
                </span>
              ) : (
                sponsor.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={sponsor.id}
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-6 opacity-50 hover:opacity-80 transition-opacity duration-200 grayscale"
                  />
                )
              )
            ))}
          </div>
        </div>
      </section>

      {/* ─── WELCOME / ABOUT ───────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border-gold" aria-label="About The Table">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gold leading-tight mb-3">
              {about.heading}
            </h2>
            <p className="font-serif text-xl italic text-text-cream/70 mb-8">
              {about.subheading}
            </p>

            <Divider className="mb-8" />

            <p className="font-sans text-[15px] leading-[1.85] text-text-cream/85 mb-10">
              {about.body}
            </p>

            <blockquote className="border-l-2 border-gold/40 pl-5">
              <p className="font-serif text-xl italic text-text-cream/85 leading-snug mb-2">
                &ldquo;{about.quote}&rdquo;
              </p>
              <cite className="font-sans text-[11px] tracking-ultra uppercase text-text-muted not-italic">
                — {about.quoteAttribution}
              </cite>
            </blockquote>
          </div>

          {/* Image column — real photo from current site */}
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ABOUT_IMAGE}
              alt="People in conversation around a table at The Table"
              className="w-full h-full object-cover"
            />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold/40" />
          </div>
        </div>
      </section>

      {/* ─── EXCLUSIVITY & QUALITY ─────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border-gold" aria-label="Exclusivity and Quality">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading className="mb-8">Exclusivity &amp; Quality</SectionHeading>

          <p className="font-sans text-[15px] leading-[1.85] text-text-cream/80 mb-10">
            We maintain a{' '}
            <em className="font-serif italic text-text-cream not-italic font-semibold">selective</em>{' '}
            {exclusivity.body.replace('We maintain a selective ', '')}
          </p>

          {/* Partner logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {sponsors.map((sponsor) => (
              <span
                key={sponsor.id}
                className="font-sans text-xs font-medium tracking-wide uppercase text-text-muted/70"
                style={{ letterSpacing: '0.08em' }}
              >
                {sponsor.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
