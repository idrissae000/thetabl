import Link from 'next/link'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import EventCard from '@/components/cards/EventCard'
import TableLogo from '@/components/ui/TableLogo'
import { siteContent } from '@/data/site'
import { upcomingEvents } from '@/data/events'
import { sponsors } from '@/data/sponsors'

export default function HomePage() {
  const { hero, about, exclusivity } = siteContent

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        aria-label="Hero"
      >
        {/* Background: dark cinematic gradient — replace src="/images/hero.jpg" once assets are available */}
        <div
          className="absolute inset-0 bg-bg-primary"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 40%, #2a1a08 0%, #140e06 35%, #0a0807 70%)',
          }}
        />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">

          {/* Logo mark */}
          <TableLogo className="w-16 h-16 text-gold opacity-80" />

          {/* Brand name */}
          <div>
            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-gold tracking-widest uppercase leading-none"
              style={{ letterSpacing: '0.18em' }}
            >
              {hero.heading}
            </h1>
            <div className="mt-1 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold/30" />
              <span className="font-sans text-[10px] tracking-ultra uppercase text-text-muted">
                ({hero.byline})
              </span>
              <div className="h-px w-10 bg-gold/30" />
            </div>
          </div>

          {/* Ornamental divider */}
          <Divider className="w-32" />

          {/* Tagline */}
          <p className="font-serif text-lg md:text-xl italic text-text-cream/80 leading-snug">
            {hero.tagline}
          </p>

          {/* CTA buttons */}
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

          <p className="mt-10 text-center font-sans text-[10px] tracking-ultra uppercase text-text-muted">
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
                  className="font-sans text-sm tracking-wide uppercase text-text-muted hover:text-gold transition-colors duration-200 cursor-default"
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

            <p className="font-sans text-sm leading-loose text-text-cream/75 mb-10">
              {about.body}
            </p>

            <blockquote className="border-l border-gold/40 pl-5">
              <p className="font-serif text-xl italic text-text-cream/80 leading-snug mb-2">
                &ldquo;{about.quote}&rdquo;
              </p>
              <cite className="font-sans text-[10px] tracking-ultra uppercase text-text-muted not-italic">
                — {about.quoteAttribution}
              </cite>
            </blockquote>
          </div>

          {/* Image column — replace with actual asset */}
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none">
            <div
              className="w-full h-full border border-border-gold"
              style={{
                background:
                  'radial-gradient(ellipse at 40% 60%, #2a1a08 0%, #0d0a06 60%)',
              }}
              aria-label="Candlelit dinner setting"
            />
            {/* Placeholder label — remove once real image is placed at /images/about-dinner.jpg */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-sans text-[9px] tracking-ultra uppercase text-text-faint text-center px-4">
                Place hero image at<br />/public/images/about-dinner.jpg
              </p>
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40" />
          </div>
        </div>
      </section>

      {/* ─── EXCLUSIVITY & QUALITY ─────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border-gold" aria-label="Exclusivity and Quality">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading className="mb-8">Exclusivity &amp; Quality</SectionHeading>

          <p className="font-sans text-sm leading-loose text-text-cream/70 mb-10">
            We maintain a{' '}
            <em className="font-serif italic text-text-cream not-italic font-semibold">selective</em>{' '}
            {exclusivity.body.replace('We maintain a selective ', '')}
          </p>

          {/* Partner / member logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {sponsors.map((sponsor) => (
              <span
                key={sponsor.id}
                className="font-sans text-xs tracking-wide uppercase text-text-muted/60"
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
