import type { Metadata } from 'next'
import Divider from '@/components/ui/Divider'
import ApplicationForm from '@/components/forms/ApplicationForm'

export const metadata: Metadata = {
  title: 'Apply — The Table',
  description: 'Apply to join The Table. An invite-only dinner series for exceptional individuals.',
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-ultra uppercase text-text-muted mb-4">
            Membership
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">
            Apply to The Table
          </h1>
          <Divider className="my-6" />
          <p className="font-sans text-[15px] leading-[1.85] text-text-muted max-w-md mx-auto">
            We review every application personally. If there is a fit,
            you will hear from us before the next dinner in your city.
          </p>
        </div>

        <ApplicationForm />

      </div>
    </div>
  )
}
