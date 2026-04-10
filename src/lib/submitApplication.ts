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
  // Build the payload exactly as the original site did:
  // When city is "Other", include city_final with the user-typed value.
  const payload: Record<string, string> = {
    // Step 1
    fullName:  fields.fullName,
    age:       fields.age,
    instagram: fields.instagram,
    email:     fields.email,
    linkedin:  fields.linkedin,
    phone:     fields.phone,
    city:      fields.city,
    notes:     fields.notes,
    // Step 2
    roleIndustry:       fields.roleIndustry,
    whyJoin:            fields.whyJoin,
    currentlyBuilding:  fields.currentlyBuilding,
    whySelected:        fields.whySelected,
    referredBy:         fields.referredBy,
    interestedLocations: fields.interestedLocations.join(', '),
    howHeard:           fields.howHeard,
    hostingInterest:    fields.hostingInterest,
  }

  if (fields.city === 'Other' && fields.otherCity.trim()) {
    payload.city_final = fields.otherCity.trim()
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      return { ok: true }
    }

    return { ok: false, error: 'Something went wrong. Please try again.' }
  } catch {
    return { ok: false, error: 'Something went wrong. Please try again.' }
  }
}
