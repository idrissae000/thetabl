// Formspree submission logic — isolated here so the endpoint and field contract
// never need to change when the form UI is restyled or the CMS is added.
//
// DO NOT change FORMSPREE_ENDPOINT — it is tied to the client's Formspree account.

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqpwkaq'

export type ApplicationFields = {
  fullName: string
  age: string
  instagram: string
  email: string
  linkedin: string
  phone: string
  city: string
  otherCity: string   // only sent when city === 'Other'
  notes: string
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
    fullName:  fields.fullName,
    age:       fields.age,
    instagram: fields.instagram,
    email:     fields.email,
    linkedin:  fields.linkedin,
    phone:     fields.phone,
    city:      fields.city,
    notes:     fields.notes,
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
