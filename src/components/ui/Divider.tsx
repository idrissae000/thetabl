type DividerProps = {
  className?: string
}

// Thin ornamental gold horizontal rule
export default function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-gold/25" />
      <div className="w-1 h-1 rounded-full bg-gold/50" />
      <div className="flex-1 h-px bg-gold/25" />
    </div>
  )
}
