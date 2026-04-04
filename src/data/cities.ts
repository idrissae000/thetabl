// City data for the Cities page.
// To connect a CMS later, replace this array with an API fetch.

export type CityStatus = 'active' | 'coming-soon'

export type City = {
  id: string
  code: string       // Short display code, e.g. "NYC"
  name: string       // Full city name, e.g. "New York"
  label: string      // City label shown under code, e.g. "New York"
  state?: string     // Optional state label shown under name
  status: CityStatus
  image?: string     // Path to city background image
}

export const cities: City[] = [
  // Active cities
  {
    id: 'nyc',
    code: 'NYC',
    name: 'New York',
    label: 'New York',
    state: 'New York',
    status: 'active',
    image: '/images/cities/nyc.jpg',
  },
  {
    id: 'htx',
    code: 'HTX',
    name: 'Houston',
    label: 'Houston',
    state: 'Houston',
    status: 'active',
    image: '/images/cities/houston.jpg',
  },
  {
    id: 'dtx',
    code: 'DTX',
    name: 'Dallas',
    label: 'Dallas',
    state: 'Dallas',
    status: 'active',
    image: '/images/cities/dallas.jpg',
  },
  {
    id: 'austin',
    code: 'Austin',
    name: 'Austin',
    label: 'Austin',
    state: 'Austin',
    status: 'active',
    image: '/images/cities/austin.jpg',
  },
  {
    id: 'sf',
    code: 'SF',
    name: 'San Francisco',
    label: 'Chicago',   // As shown in reference image — verify with client
    state: 'Chicago',
    status: 'active',
    image: '/images/cities/sf.jpg',
  },
  // Coming soon cities
  {
    id: 'dc',
    code: 'DC',
    name: 'Washington D.C.',
    label: 'Washington D.C.',
    status: 'coming-soon',
  },
  {
    id: 'la',
    code: 'LA',
    name: 'Los Angeles',
    label: 'Los Angeles',
    status: 'coming-soon',
  },
  {
    id: 'det',
    code: 'DET',
    name: 'Detroit',
    label: 'Detroit',
    status: 'coming-soon',
  },
  {
    id: 'london',
    code: 'London',
    name: 'London',
    label: 'London',
    status: 'coming-soon',
  },
  {
    id: 'dubai',
    code: 'Dubai',
    name: 'Dubai',
    label: 'Dubai',
    status: 'coming-soon',
  },
]

export const activeCities = cities.filter(c => c.status === 'active')
export const comingSoonCities = cities.filter(c => c.status === 'coming-soon')
