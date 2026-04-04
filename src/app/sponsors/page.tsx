import type { Metadata } from 'next'
import Divider from '@/components/ui/Divider'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { sponsors } from '@/data/sponsors'

export const metadata: Metadata = {
  title: 'Sponsors — The Table',
  description: 'Partner with The Table. Sponsor exclusive dinners for industry leaders and tastemakers.',
}

export default function SponsorsPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-14">
          <SectionHeading subtitle="Partners & Sponsors">
            Sponsors
          </SectionHeading>
          <Divider className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Current partners */}
        <div className="mb-16">
          <p className="font-sans text-[9px] tracking-ultra uppercase text-text-faint text-center mb-8">
            Current Partners
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-border-gold">
            {sponsors.map(sponsor => (
              <div
                key={sponsor.id}
                className="flex items-center justify-center p-8 border-border-gold hover:bg-surface transition-colors duration-200 cursor-default"
                style={{ borderRight: '1px solid rgba(201,168,76,0.18)', borderBottom: '1px solid rgba(201,168,76,0.18)' }}
              >
                {sponsor.displayStyle === 'image' && sponsor.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-7 opacity-50 hover:opacity-75 transition-opacity grayscale"
                  />
                ) : (
                  <span
                    className="font-sans text-sm text-text-muted hover:text-gold transition-colors duration-200"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {sponsor.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <Divider className="mb-14" />

        {/* Sponsorship inquiry */}
        <div className="text-center">
          <h2 className="font-serif text-3xl text-gold mb-4">
            Become a Partner
          </h2>
          <p className="font-sans text-sm leading-loose text-text-muted max-w-md mx-auto mb-8">
            The Table offers select sponsorship opportunities for brands aligned with our
            values of excellence, discretion, and meaningful conversation. We work with
            partners across finance, hospitality, technology, and culture.
          </p>
          <p className="font-sans text-sm leading-loose text-text-muted max-w-md mx-auto mb-10">
            Sponsorship positions are limited per city and per season. Inquire below
            to learn about availability and partnership structures.
          </p>
          <Button href="/contact" variant="outline">
            Inquire About Sponsorship
          </Button>
        </div>

      </div>
    </div>
  )
}
