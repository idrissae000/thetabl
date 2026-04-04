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
        'text-muted':   '#8a7355',
        'text-faint':   '#5a4a35',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.35em',
        'wide-xl': '0.2em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e2c97e 50%, #c9a84c 100%)',
      },
    },
  },
  plugins: [],
}

export default config
