// The Table logo — round pedestal table with 3 candles, 3/4 perspective view
type TableLogoProps = {
  className?: string
}

export default function TableLogo({ className = '' }: TableLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Candle flames */}
      <ellipse cx="36" cy="14" rx="2.8" ry="5" fill="currentColor" opacity="0.6" />
      <ellipse cx="50" cy="10" rx="3" ry="5.5" fill="currentColor" opacity="0.85" />
      <ellipse cx="64" cy="14" rx="2.8" ry="5" fill="currentColor" opacity="0.6" />

      {/* Candle sticks */}
      <rect x="34.5" y="18" width="3" height="18" rx="1.5" fill="currentColor" opacity="0.7" />
      <rect x="48.5" y="15" width="3" height="21" rx="1.5" fill="currentColor" opacity="0.85" />
      <rect x="62.5" y="18" width="3" height="18" rx="1.5" fill="currentColor" opacity="0.7" />

      {/* Table top — elliptical perspective */}
      <ellipse cx="50" cy="38" rx="34" ry="8" stroke="currentColor" strokeWidth="2.2" fill="none" />

      {/* Table top surface fill for depth */}
      <ellipse cx="50" cy="38" rx="34" ry="8" fill="currentColor" opacity="0.08" />

      {/* Center pedestal column */}
      <path
        d="M46 46 L46 72 Q46 74 48 74 L52 74 Q54 74 54 72 L54 46"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Pedestal base — elliptical */}
      <ellipse cx="50" cy="78" rx="22" ry="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="50" cy="78" rx="22" ry="5.5" fill="currentColor" opacity="0.06" />

      {/* Base foot detail */}
      <ellipse cx="50" cy="82" rx="16" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" />

      {/* Subtle decorative ring on pedestal */}
      <ellipse cx="50" cy="56" rx="5" ry="1.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  )
}
