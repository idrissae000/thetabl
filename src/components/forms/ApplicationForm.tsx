'use client'

import { useState } from 'react'
import { submitApplication, type ApplicationFields } from '@/lib/submitApplication'

// City options — preserved exactly from the original site
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

// Validation — preserved exactly from the original site
function validate(fields: ApplicationFields): Partial<Record<keyof ApplicationFields, string>> {
  const errors: Partial<Record<keyof ApplicationFields, string>> = {}

  if (!fields.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  }

  const age = parseInt(fields.age, 10)
  if (!fields.age || isNaN(age) || age < 13 || age > 99) {
    errors.age = 'Please enter a valid age between 13 and 99.'
  }

  const instagramPattern = /^@[A-Za-z0-9._]{1,30}$/
  if (!instagramPattern.test(fields.instagram)) {
    errors.instagram = 'Enter a valid Instagram handle starting with @.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(fields.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (fields.linkedin && !fields.linkedin.startsWith('http://') && !fields.linkedin.startsWith('https://')) {
    errors.linkedin = 'LinkedIn URL must start with http:// or https://'
  }

  if (!fields.city) {
    errors.city = 'Please select a city.'
  }

  if (fields.city === 'Other' && !fields.otherCity.trim()) {
    errors.otherCity = 'Please enter your city.'
  }

  return errors
}

type FieldErrors = Partial<Record<keyof ApplicationFields, string>>

const inputBase =
  'w-full bg-transparent border border-border-gold text-text-cream placeholder-text-faint font-sans text-base px-4 py-3 outline-none transition-colors duration-200 focus:border-gold/60 focus:ring-0'

const labelBase =
  'block font-sans text-xs font-semibold tracking-ultra uppercase text-text-muted mb-2'

const errorBase = 'mt-1 font-sans text-xs text-red-400'

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
}

export default function ApplicationForm() {
  const [fields, setFields] = useState<ApplicationFields>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  function set(key: keyof ApplicationFields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields(prev => ({ ...prev, [key]: e.target.value }))
      // Clear field error on change
      if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
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

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

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

      {/* Submit error */}
      {status === 'error' && (
        <p className="font-sans text-xs text-red-400/80">{submitError}</p>
      )}

      {/* Submit button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto border border-gold text-gold font-sans text-xs font-semibold tracking-ultra uppercase px-10 py-3.5 transition-all duration-300 hover:bg-gold hover:text-bg-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
