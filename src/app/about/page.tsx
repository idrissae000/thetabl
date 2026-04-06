import type { Metadata } from 'next'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { siteContent } from '@/data/site'

export const metadata: Metadata = {
  title: 'About — The Table',
  description: 'The Table is a private room for exceptional individuals.',
}

const ABOUT_IMAGE = 'https://thetablebybb.carrd.co/assets/images/image03.jpg?v=1da90e90'

const pillars = [
  {
    id: 'who-we-are',
    heading: 'Who We Are',
    body: 'The Table is a small, intentional team dedicated to creating spaces for genuine dialogue. We are not a networking event. We are not a conference. We are a room — carefully constructed so that the people inside it can speak freely, think clearly, and connect meaningfully.',
  },
  {
    id: 'who-its-for',
    heading: "Who It's For",
    body: 'Builders, founders, artists, operators, students, and professionals who are serious about their work and hungry for authentic connection. Our members span tech, finance, law, media, culture, and beyond. What they share is not an industry — it is a standard.',
  },
  {
    id: 'why-it-exists',
    heading: 'Why It Exists',
    body: 'Most rooms worth being in are closed. The Table was built to open one — city by city, dinner by dinner. We believe quality community should not be a function of who you already know. It should be a function of who you are.',
  },
]

export default function AboutPage() {
  const { about } = siteContent

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-medium tracking-ultra uppercase text-text-muted mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold mb-4 leading-tight">{about.heading}</h1>
          <p className="font-serif text-xl italic text-text-cream/80">{about.subheading}</p>
          <Divider className="mt-8 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <p className="font-sans text-base leading-[1.9] text-text-cream/90 mb-10">{about.body}</p>
            <blockquote className="border-l-2 border-gold/50 pl-5">
              <p className="font-serif text-xl italic text-text-cream/90 leading-snug mb-2">
                &ldquo;{about.quote}&rdquo;
              </p>
              <cite className="font-sans text-xs font-medium tracking-ultra uppercase text-text-muted not-italic">
                — {about.quoteAttribution}
              </cite>
            </blockquote>
          </div>

          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ABOUT_IMAGE} alt="Guests mingling during a Table session" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold/40" />
          </div>
        </div>

        <Divider className="mb-16" />

        <div className="mb-16">
          <SectionHeading className="mb-12">Inside The Table</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map(pillar => (
              <div key={pillar.id} className="border border-border-gold p-8 relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/30" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/30" />
                <h3 className="font-serif text-xl text-gold mb-4">{pillar.heading}</h3>
                <p className="font-sans text-sm leading-[1.8] text-text-muted">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button href="/apply" variant="outline">Apply to Join</Button>
        </div>
      </div>
    </div>
  )
}
