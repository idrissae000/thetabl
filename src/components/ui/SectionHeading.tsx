type SectionHeadingProps = {
  children: React.ReactNode
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  children,
  subtitle,
  className = '',
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-gold/40 font-serif text-lg">—</span>
        <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-wide">
          {children}
        </h2>
        <span className="text-gold/40 font-serif text-lg">—</span>
      </div>
      {subtitle && (
        <p className="mt-2 font-sans text-[11px] tracking-ultra uppercase text-text-muted">
          {subtitle}
        </p>
      )}
    </div>
  )
}
