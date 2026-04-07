// Homepage and shared site content.
// To connect a CMS later, replace these values with API fetches in a lib/cms.ts wrapper
// and import from there instead of directly from this file.

export const siteContent = {
  brand: {
    name: 'THE TABLE',
    byline: 'by BB',
    tagline: 'Curated Conversations. Exclusive Access.',
  },

  nav: {
    links: [
      { label: 'Home',      href: '/' },
      { label: 'About',     href: '/about' },
      { label: 'Cities',    href: '/cities' },
      { label: 'Calendar',  href: '/calendar' },
      { label: 'Sponsors',  href: '/sponsors' },
      { label: 'Apply',     href: '/apply' },
      { label: 'Contact',   href: '/contact' },
    ],
  },

  hero: {
    heading: 'THE TABLE',
    byline: 'by BB',
    tagline: 'Curated Conversations. Exclusive Access.',
    cta: {
      primary: { label: 'APPLY NOW',        href: '/apply' },
      secondary: { label: 'REQUEST CONTACT', href: '/contact' },
    },
  },

  about: {
    heading: 'Welcome to The Table',
    subheading: 'A private room for exceptional individuals.',
    body: 'At The Table, we curate exclusive, invite-only gatherings where industry leaders, innovators, and tastemakers can engage in thoughtful, off-the-record conversations. Our dinners are designed to foster meaningful connections in an intimate setting, providing a rare opportunity to engage with like-minded individuals across major industries, including tech, finance, law, media, and beyond.',
    quote: 'An invite to The Table is an invite to a room worth being in.',
    quoteAttribution: 'Founder — BB',
  },

  exclusivity: {
    heading: 'Exclusivity & Quality',
    body: 'We maintain a selective admission process to ensure each gathering upholds our standard of excellence. Members include founders, operators, creatives, and professionals across major industries.',
  },

  footer: {
    instagramUrl: 'https://www.instagram.com/thetablebyb.b/?utm_source=ig_web_button_share_sheet',
    contactHref: '/contact',
    applyHref: '/apply',
    sponsorsHref: '/sponsors',
  },
}
