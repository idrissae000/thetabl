import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#0a0807',
        'gold':         '#c9a84c',
        'gold-light':   '#e2c97e',
        'gold-faint':   '#7a6030',
        'surface':      '#141008',
        'surface-2':    '#1e1812',
        'border-gold':  'rgba(201, 168, 76, 0.18)',
        'text-cream':   '#e8dcc8',
        'text-muted':   '#a08d6e',     // was #8a7355 — bumped for readability
        'text-faint':   '#6a5a42',     // was #5a4a35 — bumped for readability
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.18em',       // was 0.35em — reduced for readability
        'wide-xl': '0.12em',     // was 0.2em — reduced for readability
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e2c97e 50%, #c9a84c 100%)',
      },
    },
  },
  plugins: [],
}

export default config
