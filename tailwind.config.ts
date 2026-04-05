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
        'bg-primary':   '#0c0a07',
        'bg-warm':      '#110e0a',
        'gold':         '#c9a84c',
        'gold-light':   '#e2c97e',
        'gold-faint':   '#7a6030',
        'surface':      '#151008',
        'surface-2':    '#1e1812',
        'border-gold':  'rgba(201, 168, 76, 0.2)',
        'text-cream':   '#f0e8da',     // near-white warm cream — very readable
        'text-muted':   '#c0aa88',     // clearly visible warm tan
        'text-faint':   '#8a7a60',     // visible even as secondary text
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.12em',
        'wide-xl': '0.08em',
      },
    },
  },
  plugins: [],
}

export default config
