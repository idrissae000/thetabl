'use client'

import { useRef, useState } from 'react'
import { submitApplication, type ApplicationFields } from '@/lib/submitApplication'
import { cities } from '@/data/cities'

// Location options derived from site-wide city data
const LOCATION_OPTIONS = cities.map(c => `${c.name}, ${c.state}`)

// City select options — preserved exactly from the original site
const CITY_OPTIONS = [
  'Austin, TX',
  'Dallas, TX',
  'Chicago, IL',
  'Houston, TX',
  'San Francisco, CA',
  'Los Angeles, CA',
  'New York City, NY',
  'Washington D.C.',
  'Detroit, MI',
  'Other',
]

// ── Validation ──────────────────────────────────────────────────────

type FieldErrors = Partial<Record<keyof ApplicationFields, string>>

function validateStep1(f: ApplicationFields): FieldErrors {
  const errors: FieldErrors = {}

  if (!f.fullName.trim()) errors.fullName = 'Full name is required.'

  const age = parseInt(f.age, 10)
  if (!f.age || isNaN(age) || age < 13 || age > 99)
    errors.age = 'Please enter a valid age between 13 and 99.'

  if (!/^@[A-Za-z0-9._]{1,30}$/.test(f.instagram))
    errors.instagram = 'Enter a valid Instagram handle starting with @.'

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    errors.email = 'Enter a valid email address.'

  if (f.linkedin && !f.linkedin.startsWith('http://') && !f.linkedin.startsWith('https://'))
    errors.linkedin = 'LinkedIn URL must start with http:// or https://'

  if (!f.city) errors.city = 'Please select a city.'

  if (f.city === 'Other' && !f.otherCity.trim())
    errors.otherCity = 'Please enter your city.'

  return errors
}

function validateStep2(f: ApplicationFields): FieldErrors {
  const errors: FieldErrors = {}

  if (!f.roleIndustry.trim()) errors.roleIndustry = 'This field is required.'
  if (!f.whyJoin.trim()) errors.whyJoin = 'This field is required.'
  if (!f.currentlyBuilding.trim()) errors.currentlyBuilding = 'This field is required.'
  if (!f.whySelected.trim()) errors.whySelected = 'This field is required.'
  if (f.interestedLocations.length === 0) errors.interestedLocations = 'Select at least one location.'
  if (!f.howHeard.trim()) errors.howHeard = 'This field is required.'

  return errors
}

// ── Shared UI primitives ────────────────────────────────────────────

const inputBase =
  'w-full bg-transparent border border-border-gold text-text-cream placeholder-text-faint font-sans text-base px-4 py-3 outline-none transition-colors duration-200 focus:border-gold/60 focus:ring-0'

const labelBase =
  'block font-sans text-xs font-semibold tracking-ultra uppercase text-text-muted mb-2'

const errorBase = 'mt-1 font-sans text-xs text-red-400'

const btnBase =
  'border border-gold text-gold font-sans text-xs font-semibold tracking-ultra uppercase px-10 py-3.5 transition-all duration-300 hover:bg-gold hover:text-bg-primary disabled:opacity-40 disabled:cursor-not-allowed'

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className={labelBase}>
        {label}
        {required && <span className="text-gold/50 ml-1">*</span>}
      </label>
      {children}
      {error && <p className={errorBase}>{error}</p>}
    </div>
  )
}

// ── Empty state ─────────────────────────────────────────────────────

const empty: ApplicationFields = {
  fullName: '',
  age: '',
  instagram: '',
  email: '',
  linkedin: '',
  phone: '',
  city: '',
  otherCity: '',
  notes: '',
  roleIndustry: '',
  whyJoin: '',
  currentlyBuilding: '',
  whySelected: '',
  referredBy: '',
  interestedLocations: [],
  howHeard: '',
  hostingInterest: '',
}

// ── Main Component ──────────────────────────────────────────────────

export default function ApplicationForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [fields, setFields] = useState<ApplicationFields>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  const formRef = useRef<HTMLDivElement>(null)

  function set(key: keyof ApplicationFields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields(prev => ({ ...prev, [key]: e.target.value }))
      if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
    }
  }

  function toggleLocation(loc: string) {
    setFields(prev => ({
      ...prev,
      interestedLocations: prev.interestedLocations.includes(loc)
        ? prev.interestedLocations.filter(l => l !== loc)
        : [...prev.interestedLocations, loc],
    }))
    if (errors.interestedLocations) setErrors(prev => ({ ...prev, interestedLocations: undefined }))
  }

  function scrollToTop() {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleNext() {
    const errs = validateStep1(fields)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStep(2)
    setTimeout(scrollToTop, 50)
  }

  function handleBack() {
    setErrors({})
    setStep(1)
    setTimeout(scrollToTop, 50)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateStep2(fields)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('submitting')
    const result = await submitApplication(fields)

    if (result.ok) {
      setStatus('success')
      setFields(empty)
      setErrors({})
    } else {
      setStatus('error')
      setSubmitError(result.error)
    }
  }

  // ── Success state ───────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-12 h-px bg-gold mx-auto mb-6" />
        <p className="font-serif text-2xl text-gold mb-3">Application Submitted</p>
        <p className="font-sans text-sm text-text-muted">
          Thank you. We will be in touch if there is a fit.
        </p>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>
    )
  }

  // ── Step indicator ──────────────────────────────────────────────

  const stepIndicator = (
    <div className="flex items-center justify-center gap-3 mb-10">
      <div className={`flex items-center gap-2 ${step === 1 ? 'text-gold' : 'text-text-faint'}`}>
        <span className={`w-6 h-6 flex items-center justify-center border text-[10px] font-sans font-semibold ${step === 1 ? 'border-gold text-gold' : 'border-text-faint/40 text-text-faint'}`}>1</span>
        <span className="font-sans text-[10px] font-semibold tracking-ultra uppercase hidden sm:inline">About You</span>
      </div>
      <div className="w-8 h-px bg-border-gold" />
      <div className={`flex items-center gap-2 ${step === 2 ? 'text-gold' : 'text-text-faint'}`}>
        <span className={`w-6 h-6 flex items-center justify-center border text-[10px] font-sans font-semibold ${step === 2 ? 'border-gold text-gold' : 'border-text-faint/40 text-text-faint'}`}>2</span>
        <span className="font-sans text-[10px] font-semibold tracking-ultra uppercase hidden sm:inline">Your Interest</span>
      </div>
    </div>
  )

  // ── Render ──────────────────────────────────────────────────────

  return (
    <div ref={formRef}>
      {stepIndicator}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">

        {/* ═══════════ STEP 1 ═══════════ */}
        <div className={step === 1 ? undefined : 'hidden'}>
          <div className="space-y-6">

            {/* Row: Full Name + Age */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2">
                <Field label="Full Name" required error={errors.fullName}>
                  <input
                    type="text"
                    name="fullName"
                    value={fields.fullName}
                    onChange={set('fullName')}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={inputBase}
                  />
                </Field>
              </div>
              <div>
                <Field label="Age" required error={errors.age}>
                  <input
                    type="number"
                    name="age"
                    value={fields.age}
                    onChange={set('age')}
                    placeholder="Age"
                    min={13}
                    max={99}
                    className={inputBase}
                  />
                </Field>
              </div>
            </div>

            {/* Row: Instagram + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Instagram Handle" required error={errors.instagram}>
                <input
                  type="text"
                  name="instagram"
                  value={fields.instagram}
                  onChange={set('instagram')}
                  placeholder="@yourhandle"
                  autoComplete="off"
                  className={inputBase}
                />
              </Field>
              <Field label="Email" required error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={set('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={inputBase}
                />
              </Field>
            </div>

            {/* Row: LinkedIn + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="LinkedIn URL" error={errors.linkedin}>
                <input
                  type="text"
                  name="linkedin"
                  value={fields.linkedin}
                  onChange={set('linkedin')}
                  placeholder="https://linkedin.com/in/..."
                  autoComplete="off"
                  className={inputBase}
                />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  name="phone"
                  value={fields.phone}
                  onChange={set('phone')}
                  placeholder="+1 (555) 000-0000"
                  autoComplete="tel"
                  className={inputBase}
                />
              </Field>
            </div>

            {/* City */}
            <Field label="City" required error={errors.city}>
              <select
                name="city"
                value={fields.city}
                onChange={set('city')}
                className={`${inputBase} cursor-pointer appearance-none`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a7355' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  paddingRight: '40px',
                }}
              >
                <option value="" disabled className="bg-surface text-text-muted">
                  Select your city
                </option>
                {CITY_OPTIONS.map(option => (
                  <option key={option} value={option} className="bg-surface text-text-cream">
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            {/* Other City — conditional */}
            {fields.city === 'Other' && (
              <Field label="Your City" required error={errors.otherCity}>
                <input
                  type="text"
                  name="otherCity"
                  value={fields.otherCity}
                  onChange={set('otherCity')}
                  placeholder="Enter your city"
                  className={inputBase}
                />
              </Field>
            )}

            {/* Notes */}
            <Field label="Anything else you'd like us to know" error={errors.notes}>
              <textarea
                name="notes"
                value={fields.notes}
                onChange={set('notes')}
                placeholder="Optional — share any context, industry, or why you're applying."
                rows={4}
                className={`${inputBase} resize-none`}
              />
            </Field>

            {/* Next button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleNext}
                className={`w-full sm:w-auto ${btnBase}`}
              >
                Next — Step 2
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════ STEP 2 ═══════════ */}
        <div className={step === 2 ? undefined : 'hidden'}>
          <div className="space-y-6">

            {/* Current Role */}
            <Field label="Current Role / Occupation / Industry" required error={errors.roleIndustry}>
              <input
                type="text"
                name="roleIndustry"
                value={fields.roleIndustry}
                onChange={set('roleIndustry')}
                placeholder="e.g. Founder, Tech — SaaS"
                className={inputBase}
              />
            </Field>

            {/* Why Join */}
            <Field label="Why do you want to join The Table?" required error={errors.whyJoin}>
              <textarea
                name="whyJoin"
                value={fields.whyJoin}
                onChange={set('whyJoin')}
                placeholder="What draws you to The Table and what do you hope to gain?"
                rows={4}
                className={`${inputBase} resize-none`}
              />
            </Field>

            {/* Currently Building */}
            <Field label="What are you currently building or working towards?" required error={errors.currentlyBuilding}>
              <textarea
                name="currentlyBuilding"
                value={fields.currentlyBuilding}
                onChange={set('currentlyBuilding')}
                placeholder="Tell us about your current focus or venture."
                rows={4}
                className={`${inputBase} resize-none`}
              />
            </Field>

            {/* Why Selected */}
            <Field label="Why do you think you should be selected?" required error={errors.whySelected}>
              <textarea
                name="whySelected"
                value={fields.whySelected}
                onChange={set('whySelected')}
                placeholder="What makes you a strong fit for The Table?"
                rows={4}
                className={`${inputBase} resize-none`}
              />
            </Field>

            {/* Referred By */}
            <Field label="Referred to The Table by (if applicable)">
              <input
                type="text"
                name="referredBy"
                value={fields.referredBy}
                onChange={set('referredBy')}
                placeholder="Name of the person who referred you"
                className={inputBase}
              />
            </Field>

            {/* Interested Locations — checkbox group */}
            <Field label="What Table location(s) would you be interested in attending?" required error={errors.interestedLocations}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {LOCATION_OPTIONS.map(loc => {
                  const checked = fields.interestedLocations.includes(loc)
                  return (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => toggleLocation(loc)}
                      className={`border px-3 py-2 font-sans text-xs tracking-wide transition-all duration-200 text-left ${
                        checked
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-border-gold text-text-muted hover:border-gold/50 hover:text-text-cream'
                      }`}
                    >
                      {loc}
                    </button>
                  )
                })}
              </div>
            </Field>

            {/* How Heard */}
            <Field label="How did you hear about us?" required error={errors.howHeard}>
              <input
                type="text"
                name="howHeard"
                value={fields.howHeard}
                onChange={set('howHeard')}
                placeholder="e.g. Instagram, a friend, LinkedIn"
                className={inputBase}
              />
            </Field>

            {/* Hosting Interest */}
            <Field label="Would you ever be interested in hosting a table? (be specific on what kind and where)">
              <textarea
                name="hostingInterest"
                value={fields.hostingInterest}
                onChange={set('hostingInterest')}
                placeholder="Optional — describe the kind of table and city."
                rows={3}
                className={`${inputBase} resize-none`}
              />
            </Field>

            {/* Submit error */}
            {status === 'error' && (
              <p className="font-sans text-xs text-red-400/80">{submitError}</p>
            )}

            {/* Back + Submit */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto border border-border-gold text-text-muted font-sans text-xs font-semibold tracking-ultra uppercase px-10 py-3.5 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full sm:w-auto ${btnBase}`}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}
