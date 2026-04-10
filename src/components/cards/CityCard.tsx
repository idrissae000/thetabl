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
      <div className="absolute inset-0 bg-bg-primary/40 group-hover:bg-bg-primary/25 transition-colors duration-500" />

      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-0.5">
        <div className="font-serif text-2xl sm:text-3xl text-gold leading-none tracking-wide drop-shadow-lg">{code}</div>
      </div>

      <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-0.5">
        <div className="font-sans text-xs font-medium tracking-wide uppercase text-text-cream drop-shadow-md">{name}</div>
        <div className="font-sans text-[10px] tracking-wide uppercase text-text-muted mt-0.5">{state}</div>
      </div>

      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/30 transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:border-gold/50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/30 transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:border-gold/50" />
    </div>
  )
}

export function ComingSoonCityCard({ code, name, state, image }: City) {
  return (
    <div className="group relative overflow-hidden border border-border-gold/50 aspect-[4/3] flex flex-col justify-between p-4 sm:p-5 cursor-default transition-all duration-500 hover:border-border-gold">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        style={
          image
            ? { backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { background: 'linear-gradient(135deg, #0f0c08 0%, #0a0807 100%)' }
        }
      />
      <div className="absolute inset-0 bg-bg-primary/60 group-hover:bg-bg-primary/50 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="font-serif text-2xl text-gold/70 leading-none tracking-wide drop-shadow-lg">{code}</div>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-1.5">
        <div className="font-sans text-xs font-medium tracking-wide uppercase text-text-cream/70">{name}</div>
        <div className="font-sans text-[9px] font-semibold tracking-ultra uppercase text-gold/60 border border-gold/30 px-2.5 py-0.5">
          Coming Soon
        </div>
      </div>
    </div>
  )
}
