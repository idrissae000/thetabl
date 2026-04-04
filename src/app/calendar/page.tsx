import type { Metadata } from 'next'
import Link from 'next/link'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { calendarEvents } from '@/data/events'

export const metadata: Metadata = {
  title: 'Calendar — The Table',
  description: 'Upcoming Table dinners. Invite-only gatherings across major cities.',
}

const fallbackBg = 'radial-gradient(ellipse at 50% 60%, #2a1a08 0%, #0d0a06 70%)'

function CalendarCard({
  cityCode,
  cityName,
  dates,
  image,
}: {
  cityCode: string
  cityName: string
  dates: string[]
  image?: string
}) {
  return (
    <div className="group relative overflow-hidden border border-border-gold aspect-[4/3] flex flex-col justify-between p-5 cursor-default transition-all duration-300 hover:border-gold/50">
      {/* Background */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={
          image
            ? {
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : { background: fallbackBg }
        }
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-bg-primary/65 group-hover:bg-bg-primary/55 transition-colors duration-300" />

      {/* City code + name */}
      <div className="relative z-10">
        <div className="font-serif text-3xl text-gold leading-none tracking-wide">
          {cityCode}
        </div>
        <div className="font-sans text-[9px] tracking-ultra uppercase text-text-muted mt-1">
          {cityName}
        </div>
      </div>

      {/* Dates */}
      <div className="relative z-10 flex flex-col gap-0.5">
        {dates.map((date, i) => (
          <div key={i} className="font-serif text-xl text-text-cream italic">
            {date}
          </div>
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/25" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/25" />
    </div>
  )
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-14">
          <SectionHeading subtitle="Upcoming Dinners">
            Calendar
          </SectionHeading>
          <Divider className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {calendarEvents.map(event => (
            <CalendarCard key={event.id} {...event} />
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center">
          <p className="font-sans text-[10px] tracking-ultra uppercase text-text-muted mb-6">
            Additional dates to be announced. Be the first to know.
          </p>
          <Button href="/apply" variant="outline">
            Apply to Join
          </Button>
        </div>

      </div>
    </div>
  )
}
