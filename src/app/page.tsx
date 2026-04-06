import Link from 'next/link'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import EventCard from '@/components/cards/EventCard'
import ApplicationForm from '@/components/forms/ApplicationForm'
import { siteContent } from '@/data/site'
import { upcomingEvents } from '@/data/events'
import { sponsors } from '@/data/sponsors'

const ABOUT_IMAGE = 'https://thetablebybb.carrd.co/assets/images/image01.jpg?v=1da90e90'

export default function HomePage() {
  const { about, exclusivity } = siteContent

  return (
    <>
      {/* ─── WELCOME / ABOUT (first section) ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gold leading-tight mb-3">
              {about.heading}
            </h2>
            <p className="font-serif text-xl italic text-text-cream/80 mb-8">
              {about.subheading}
            </p>

            <Divider className="mb-8" />

            <p className="font-sans text-base leading-[1.9] text-text-cream/90 mb-10">
              {about.body}
            </p>

            <blockquote className="border-l-2 border-gold/50 pl-5">
              <p className="font-serif text-xl italic text-text-cream/90 leading-snug mb-2">
                &ldquo;{about.quote}&rdquo;
              </p>
              <cite className="font-sans text-xs font-medium tracking-ultra uppercase text-text-muted not-italic">
                — {about.quoteAttribution}
              </cite>
            </blockquote>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ABOUT_IMAGE} alt="People in conversation around a table at The Table" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold/40" />
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ─── */}
      <section className="py-20 px-6 border-t border-border-gold">
        <div className="max-w-2xl mx-auto">
          <SectionHeading className="mb-4">Apply to Join</SectionHeading>
          <p className="text-center font-sans text-sm text-text-muted mb-10">
            Request an invitation to an upcoming dinner.
          </p>
          <ApplicationForm />
        </div>
      </section>

      {/* ─── UPCOMING TABLES ─── */}
      <section className="py-20 px-6 border-t border-border-gold">
        <div className="max-w-5xl mx-auto">
          <SectionHeading className="mb-12">Upcoming Tables</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <p className="mt-10 text-center font-sans text-xs font-medium tracking-ultra uppercase text-text-muted">
            Additional dates to be announced.{' '}
            <Link href="/apply" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4 decoration-gold/30">
              Be the first to know — Apply to join
            </Link>
          </p>
        </div>
      </section>

      {/* ─── PARTNERS & SPONSORS ─── */}
      <section className="py-16 px-6 border-t border-border-gold">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="mb-10">Partners &amp; Sponsors</SectionHeading>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {sponsors.map((sponsor) => (
              <span
                key={sponsor.id}
                className="font-sans text-sm font-semibold tracking-wide uppercase text-text-muted hover:text-gold transition-colors duration-200 cursor-default"
              >
                {sponsor.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXCLUSIVITY & QUALITY ─── */}
      <section className="py-20 px-6 border-t border-border-gold">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading className="mb-8">Exclusivity &amp; Quality</SectionHeading>

          <p className="font-sans text-base leading-[1.9] text-text-cream/85 mb-10">
            We maintain a{' '}
            <em className="font-serif italic text-text-cream not-italic font-semibold">selective</em>{' '}
            {exclusivity.body.replace('We maintain a selective ', '')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {sponsors.map((sponsor) => (
              <span key={sponsor.id} className="font-sans text-sm font-medium tracking-wide uppercase text-text-muted/80">
                {sponsor.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
