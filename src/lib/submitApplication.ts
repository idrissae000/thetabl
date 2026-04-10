// Formspree submission logic — isolated here so the endpoint and field contract
// never need to change when the form UI is restyled or the CMS is added.
//
// Set NEXT_PUBLIC_FORMSPREE_ID in your .env.local file.

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

export type ApplicationFields = {
  // Step 1 — original fields
  fullName: string
  age: string
  instagram: string
  email: string
  linkedin: string
  phone: string
  city: string
  otherCity: string   // only sent when city === 'Other'
  notes: string
  // Step 2 — extended questions
  roleIndustry: string
  whyJoin: string
  currentlyBuilding: string
  whySelected: string
  referredBy: string
  interestedLocations: string[]
  howHeard: string
  hostingInterest: string
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string }

export async function submitApplication(
  fields: ApplicationFields,
): Promise<SubmitResult> {
  if (!FORMSPREE_ID) {
    return { ok: false, error: 'Form configuration error — the submission endpoint is not set. Please contact the site owner.' }
  }

  // Build the payload with clean, human-readable field labels for
  // the Formspree/email output. Internal state keys stay camelCase
  // in code; only the submitted JSON keys are relabeled here.
  const payload: Record<string, string> = {
    // Step 1
    'Full Name':      fields.fullName,
    'Age':            fields.age,
    'Instagram':      fields.instagram,
    'Email':          fields.email,
    'LinkedIn':       fields.linkedin,
    'Phone Number':   fields.phone,
    'City':           fields.city,
    'Notes':          fields.notes,
    // Step 2
    'Current Role / Occupation / Industry':             fields.roleIndustry,
    'Why do you want to join The Table?':                fields.whyJoin,
    'What are you currently building or working towards?': fields.currentlyBuilding,
    'Why do you think you should be selected?':          fields.whySelected,
    'Referred to The Table by':                          fields.referredBy,
    'Table location(s) interested in':                   fields.interestedLocations.join(', '),
    'How did you hear about us?':                        fields.howHeard,
    'Interest in hosting a table':                       fields.hostingInterest,
  }

  if (fields.city === 'Other' && fields.otherCity.trim()) {
    payload['City (Other)'] = fields.otherCity.trim()
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      return { ok: true }
    }

    // Surface the real Formspree error instead of a generic message
    try {
      const body = await res.json()
      const msg = body?.error || body?.errors?.map((e: { message?: string }) => e.message).join(', ')
      if (msg) {
        return { ok: false, error: `Submission failed: ${msg}` }
      }
    } catch {
      // Response wasn't JSON — fall through to status-based message
    }

    if (res.status === 429) {
      return { ok: false, error: 'Too many submissions. Please wait a few minutes and try again.' }
    }
    if (res.status === 403) {
      return { ok: false, error: 'Submission was blocked. Please ensure you are not using a VPN or ad-blocker that interferes with form submissions.' }
    }
    if (res.status >= 500) {
      return { ok: false, error: 'The submission service is temporarily unavailable. Please try again in a few minutes.' }
    }

    return { ok: false, error: `Submission failed (status ${res.status}). Please review your answers and try again.` }
  } catch (err) {
    // Network error — no response received at all
    const message = err instanceof Error ? err.message : 'Unknown error'
    if (message.includes('Failed to fetch') || message.includes('NetworkError')) {
      return { ok: false, error: 'Network error — please check your internet connection and try again.' }
    }
    return { ok: false, error: `Could not reach the submission service: ${message}` }
  }
}
