import Link from 'next/link'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import EventCard from '@/components/cards/EventCard'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import TableLogo from '@/components/ui/TableLogo'
import { siteContent } from '@/data/site'
import { upcomingEvents } from '@/data/events'
import { sponsors } from '@/data/sponsors'

const HERO_IMAGE = 'https://thetablebybb.carrd.co/assets/images/image02.jpg?v=1da90e90'
const ABOUT_IMAGE = 'https://thetablebybb.carrd.co/assets/images/image01.jpg?v=1da90e90'

export default function HomePage() {
  const { hero, about, exclusivity } = siteContent

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(0,0,0,0.55) 100%)' }} />

        <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 max-w-xl mx-auto w-full">
          <div className="hero-fade">
            <TableLogo className="w-48 sm:w-64 md:w-80 h-auto" />
          </div>

          <div className="hero-fade-delayed">
            <Divider className="w-24 sm:w-32" />
          </div>

          <p className="hero-fade-delayed font-serif text-xl sm:text-2xl md:text-3xl italic text-text-cream leading-snug px-2">
            {hero.tagline}
          </p>

          <div className="hero-fade-late flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
            <Button href={hero.cta.primary.href} variant="outline">
              {hero.cta.primary.label}
            </Button>
            <Button href={hero.cta.secondary.href} variant="ghost">
              {hero.cta.secondary.label}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-float">
          <div className="w-px h-8 bg-gold" />
          <div className="w-1 h-1 rounded-full bg-gold" />
        </div>
      </section>

      {/* ─── UPCOMING TABLES ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-t border-border-gold">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <SectionHeading className="mb-8 sm:mb-12">Upcoming Tables</SectionHeading>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((event, i) => (
              <AnimateOnScroll key={event.id} delay={i * 100}>
                <EventCard {...event} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <p className="mt-8 sm:mt-10 text-center font-sans text-xs font-medium tracking-ultra uppercase text-text-muted">
              Additional dates to be announced.{' '}
              <Link href="/apply" className="text-gold hover:text-gold-light transition-colors duration-300 underline underline-offset-4 decoration-gold/30">
                Be the first to know — Apply to join
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── PARTNERS & SPONSORS ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border-gold">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <SectionHeading className="mb-8 sm:mb-10">Partners &amp; Sponsors</SectionHeading>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6">
              {sponsors.map((sponsor) => (
                <span
                  key={sponsor.id}
                  className="font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase text-text-muted hover:text-gold transition-colors duration-300 cursor-default"
                >
                  {sponsor.name}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── WELCOME / ABOUT ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-t border-border-gold">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimateOnScroll>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold leading-tight mb-3">
                {about.heading}
              </h2>
              <p className="font-serif text-lg sm:text-xl italic text-text-cream/80 mb-6 sm:mb-8">
                {about.subheading}
              </p>

              <Divider className="mb-6 sm:mb-8" />

              <p className="font-sans text-sm sm:text-base leading-[1.8] sm:leading-[1.9] text-text-cream/90 mb-8 sm:mb-10">
                {about.body}
              </p>

              <blockquote className="border-l-2 border-gold/50 pl-4 sm:pl-5">
                <p className="font-serif text-lg sm:text-xl italic text-text-cream/90 leading-snug mb-2">
                  &ldquo;{about.quote}&rdquo;
                </p>
                <cite className="font-sans text-xs font-medium tracking-ultra uppercase text-text-muted not-italic">
                  — {about.quoteAttribution}
                </cite>
              </blockquote>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ABOUT_IMAGE} alt="People in conversation around a table at The Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold/40" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── EXCLUSIVITY & QUALITY ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-t border-border-gold">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <SectionHeading className="mb-6 sm:mb-8">Exclusivity &amp; Quality</SectionHeading>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-sans text-sm sm:text-base leading-[1.8] sm:leading-[1.9] text-text-cream/85 mb-8 sm:mb-10">
              We maintain a{' '}
              <em className="font-serif italic text-text-cream not-italic font-semibold">selective</em>{' '}
              {exclusivity.body.replace('We maintain a selective ', '')}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
              {sponsors.map((sponsor) => (
                <span key={sponsor.id} className="font-sans text-xs sm:text-sm font-medium tracking-wide uppercase text-text-muted/80">
                  {sponsor.name}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
