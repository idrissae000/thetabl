import type { DinnerEvent } from '@/data/events'

type EventCardProps = DinnerEvent

const statusLabel: Record<DinnerEvent['status'], string> = {
  'invite-only': 'INVITE ONLY',
  'open': 'OPEN',
  'sold-out': 'SOLD OUT',
}

export default function EventCard({ city, cityFull, date, status }: EventCardProps) {
  return (
    <div className="group relative flex flex-col items-center justify-between gap-5 border border-border-gold bg-surface px-6 py-8 text-center transition-all duration-500 ease-out hover:border-gold/40 hover:bg-surface-2 glow-hover">
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/30 transition-all duration-500 group-hover:w-5 group-hover:h-5 group-hover:border-gold/50" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/30 transition-all duration-500 group-hover:w-5 group-hover:h-5 group-hover:border-gold/50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/30 transition-all duration-500 group-hover:w-5 group-hover:h-5 group-hover:border-gold/50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/30 transition-all duration-500 group-hover:w-5 group-hover:h-5 group-hover:border-gold/50" />

      <div className="transition-transform duration-500 group-hover:-translate-y-0.5">
        <div className="font-serif text-3xl text-gold leading-none mb-1">
          {city}
        </div>
        <div className="font-sans text-xs font-medium tracking-ultra uppercase text-text-muted">
          {cityFull}
        </div>
      </div>

      <div className="font-serif text-lg text-text-cream italic transition-colors duration-300 group-hover:text-gold-light">
        {date}
      </div>

      <div className="border border-gold/30 px-4 py-1.5 font-sans text-[11px] font-semibold tracking-ultra uppercase text-text-muted transition-all duration-400 group-hover:border-gold/50 group-hover:text-gold">
        {statusLabel[status]}
      </div>
    </div>
  )
}
