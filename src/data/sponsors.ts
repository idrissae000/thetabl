// Sponsor and partner data.
// To connect a CMS later, replace this array with an API fetch.

export type Sponsor = {
  id: string
  name: string        // Display name
  logo?: string       // Optional path to logo image; falls back to text display
  url?: string        // Optional external link
  displayStyle?: 'text' | 'image'  // How to render — text-based logos vs image
}

export const sponsors: Sponsor[] = [
  {
    id: '500',
    name: '500',
    displayStyle: 'text',
  },
  {
    id: 'lvmh',
    name: 'LVMH',
    displayStyle: 'text',
  },
  {
    id: 'tiger-global',
    name: 'TIGER GLOBAL',
    displayStyle: 'text',
  },
  {
    id: 'ycombinator',
    name: 'Y Combinator',
    displayStyle: 'text',
  },
  {
    id: 'gutter-house',
    name: 'Gutter House',
    displayStyle: 'text',
  },
]
