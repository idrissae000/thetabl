import type { NextConfig } from 'next'

// Content-Security-Policy sized to the current app:
// - scripts/styles: self + 'unsafe-inline' (Next.js App Router hydration
//   requires inline scripts; moving to nonce-based CSP is a larger refactor).
// - style-src: Google Fonts stylesheet + inline React style props + data: SVGs.
// - font-src:  Google Fonts font files.
// - img-src:   self + data: URIs used for inline SVG backgrounds.
// - connect-src/form-action: Formspree is the only external POST target.
// - frame-ancestors/object-src/base-uri tightened as defense-in-depth.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' https://fonts.gstatic.com data:",
  "connect-src 'self' https://formspree.io",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thetablebybb.carrd.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
