import type { Metadata } from 'next'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import { ActiveCityCard, ComingSoonCityCard } from '@/components/cards/CityCard'
import { activeCities, comingSoonCities } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Cities — The Table',
  description: 'The Table operates across major cities. Current and upcoming locations.',
}

export default function CitiesPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeading subtitle="Current & Upcoming Cities">Cities</SectionHeading>
          <Divider className="mt-6 max-w-xs mx-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {activeCities.map(city => <ActiveCityCard key={city.id} {...city} />)}
        </div>
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border-gold" />
          <span className="font-sans text-xs font-semibold tracking-ultra uppercase text-text-faint">Coming Soon</span>
          <div className="flex-1 h-px bg-border-gold" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {comingSoonCities.map(city => <ComingSoonCityCard key={city.id} {...city} />)}
        </div>
      </div>
    </div>
  )
}
