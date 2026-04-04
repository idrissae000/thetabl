// Stylized table with three candles — matches the visual mark from the reference images
type TableLogoProps = {
  className?: string
}

export default function TableLogo({ className = '' }: TableLogoProps) {
  return (
    <svg
      viewBox="0 0 60 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Candle flames */}
      <ellipse cx="18" cy="6" rx="2.5" ry="3.5" fill="currentColor" opacity="0.5" />
      <ellipse cx="30" cy="3" rx="2.5" ry="3.5" fill="currentColor" opacity="0.9" />
      <ellipse cx="42" cy="6" rx="2.5" ry="3.5" fill="currentColor" opacity="0.5" />

      {/* Candle sticks */}
      <rect x="16.5" y="9" width="3" height="10" rx="0.5" fill="currentColor" opacity="0.7" />
      <rect x="28.5" y="6" width="3" height="13" rx="0.5" fill="currentColor" />
      <rect x="40.5" y="9" width="3" height="10" rx="0.5" fill="currentColor" opacity="0.7" />

      {/* Table surface */}
      <rect x="6" y="20" width="48" height="4" rx="1" fill="currentColor" />

      {/* Table legs */}
      <rect x="13" y="24" width="3" height="18" rx="0.5" fill="currentColor" opacity="0.8" />
      <rect x="44" y="24" width="3" height="18" rx="0.5" fill="currentColor" opacity="0.8" />

      {/* Table feet */}
      <rect x="8"  y="42" width="11" height="2.5" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="41" y="42" width="11" height="2.5" rx="1" fill="currentColor" opacity="0.7" />
    </svg>
  )
}
