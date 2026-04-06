type TableLogoProps = {
  className?: string
}

export default function TableLogo({ className = '' }: TableLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="The Table by BB"
      className={className}
    />
  )
}
