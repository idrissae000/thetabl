import type { City } from '@/data/cities'

const fallbackBg =
  'radial-gradient(ellipse at 50% 60%, #2a1a08 0%, #0d0a06 70%)'

export function ActiveCityCard({ code, name, state, image }: City) {
  return (
    <div className="group relative overflow-hidden border border-border-gold aspect-[4/3] flex flex-col justify-between p-4 sm:p-5 cursor-default transition-all duration-500 ease-out hover:border-gold/50 glow-hover">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={
          image
            ? { backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { background: fallbackBg }
        }
      />
      <div className="absolute inset-0 bg-bg-primary/60 group-hover:bg-bg-primary/45 transition-colors duration-500" />

      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-0.5">
        <div className="font-serif text-2xl sm:text-3xl text-gold leading-none tracking-wide">{code}</div>
      </div>

      <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-0.5">
        <div className="font-sans text-xs font-medium tracking-wide uppercase text-text-cream">{name}</div>
        <div className="font-sans text-[10px] tracking-wide uppercase text-text-muted mt-0.5">{state}</div>
      </div>

      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/25 transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:border-gold/40" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/25 transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:border-gold/40" />
    </div>
  )
}

export function ComingSoonCityCard({ code, name }: City) {
  return (
    <div
      className="relative overflow-hidden border border-border-gold/50 aspect-[4/3] flex flex-col items-center justify-center gap-2 cursor-default transition-all duration-500 hover:border-border-gold"
      style={{ background: 'linear-gradient(135deg, #0f0c08 0%, #0a0807 100%)' }}
    >
      <div className="font-serif text-2xl text-text-faint leading-none tracking-wide">{code}</div>
      <div className="font-sans text-[10px] tracking-wide uppercase text-text-faint/60">{name}</div>
      <div className="font-sans text-[10px] font-semibold tracking-ultra uppercase text-text-faint/80 border border-text-faint/25 px-3 py-1 mt-1">
        Coming Soon
      </div>
    </div>
  )
}
