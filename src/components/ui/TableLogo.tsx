// Clean, minimal candelabra mark. If the client provides their exact logo asset,
// swap this file for a simple <img> or inline the real SVG.
type TableLogoProps = {
  className?: string
}

export default function TableLogo({ className = '' }: TableLogoProps) {
  return (
    <svg
      viewBox="0 0 80 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Three candle flames */}
      <ellipse cx="26" cy="8"  rx="3" ry="5" fill="currentColor" opacity="0.55" />
      <ellipse cx="40" cy="5"  rx="3" ry="5.5" fill="currentColor" opacity="0.85" />
      <ellipse cx="54" cy="8"  rx="3" ry="5" fill="currentColor" opacity="0.55" />

      {/* Three candle sticks */}
      <rect x="24.5" y="12" width="3" height="16" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="38.5" y="10" width="3" height="18" rx="1.5" fill="currentColor" opacity="0.8" />
      <rect x="52.5" y="12" width="3" height="16" rx="1.5" fill="currentColor" opacity="0.6" />

      {/* Table top — clean horizontal bar */}
      <rect x="8" y="30" width="64" height="3.5" rx="1.5" fill="currentColor" />

      {/* Decorative curved supports */}
      <path
        d="M20 34 Q20 50, 30 50 Q35 50, 35 45"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.65"
      />
      <path
        d="M60 34 Q60 50, 50 50 Q45 50, 45 45"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.65"
      />

      {/* Center pedestal */}
      <line x1="40" y1="34" x2="40" y2="52" stroke="currentColor" strokeWidth="2" opacity="0.5" />

      {/* Base */}
      <rect x="28" y="52" width="24" height="2.5" rx="1" fill="currentColor" opacity="0.6" />

      {/* Ornamental lines below */}
      <line x1="24" y1="60" x2="56" y2="60" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
      <line x1="30" y1="64" x2="50" y2="64" stroke="currentColor" strokeWidth="0.6" opacity="0.15" />
    </svg>
  )
}
