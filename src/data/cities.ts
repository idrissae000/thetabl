// City data for the Cities page.
// To connect a CMS later, replace this array with an API fetch.

export type CityStatus = 'active' | 'coming-soon'

export type City = {
  id: string
  code: string       // Short display code, e.g. "NYC"
  name: string       // Full city name, e.g. "New York"
  state: string      // State or country, e.g. "New York"
  status: CityStatus
  image?: string     // Path to city background image
}

export const cities: City[] = [
  // Active cities
  {
    id: 'nyc',
    code: 'NYC',
    name: 'New York',
    state: 'New York',
    status: 'active',
    image: '/images/cities/nyc.jpg',
  },
  {
    id: 'htx',
    code: 'HTX',
    name: 'Houston',
    state: 'Texas',
    status: 'active',
    image: '/images/cities/houston.jpg',
  },
  {
    id: 'dtx',
    code: 'DTX',
    name: 'Dallas',
    state: 'Texas',
    status: 'active',
    image: '/images/cities/dallas.jpg',
  },
  {
    id: 'atx',
    code: 'ATX',
    name: 'Austin',
    state: 'Texas',
    status: 'active',
    image: '/images/cities/austin.jpg',
  },
  {
    id: 'chi',
    code: 'CHI',
    name: 'Chicago',
    state: 'Illinois',
    status: 'active',
    image: '/images/cities/sf.jpg',
  },
  // Coming soon cities
  {
    id: 'dc',
    code: 'DC',
    name: 'Washington',
    state: 'D.C.',
    status: 'coming-soon',
  },
  {
    id: 'la',
    code: 'LA',
    name: 'Los Angeles',
    state: 'California',
    status: 'coming-soon',
  },
  {
    id: 'det',
    code: 'DET',
    name: 'Detroit',
    state: 'Michigan',
    status: 'coming-soon',
  },
  {
    id: 'sf',
    code: 'SF',
    name: 'San Francisco',
    state: 'California',
    status: 'coming-soon',
  },
  {
    id: 'london',
    code: 'LDN',
    name: 'London',
    state: 'United Kingdom',
    status: 'coming-soon',
  },
  {
    id: 'dubai',
    code: 'DXB',
    name: 'Dubai',
    state: 'UAE',
    status: 'coming-soon',
  },
]

export const activeCities = cities.filter(c => c.status === 'active')
export const comingSoonCities = cities.filter(c => c.status === 'coming-soon')
