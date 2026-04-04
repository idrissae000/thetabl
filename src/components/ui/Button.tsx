import Link from 'next/link'

type ButtonVariant = 'outline' | 'solid' | 'ghost'

type ButtonProps = {
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  outline:
    'border border-gold text-gold hover:bg-gold hover:text-bg-primary',
  solid:
    'bg-gold text-bg-primary hover:bg-gold-light',
  ghost:
    'border border-gold/40 text-text-muted hover:border-gold hover:text-gold',
}

const base =
  'inline-block font-sans text-[11px] font-medium tracking-ultra uppercase px-8 py-3 transition-all duration-300 cursor-pointer'

export default function Button({
  href,
  onClick,
  variant = 'outline',
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const styles = `${base} ${variantStyles[variant]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  )
}
