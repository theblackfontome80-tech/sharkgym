export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" fill="#1f6bff" />
      <path d="M7 29 C11 21 17 12 29 6 C25 13 25 21 31 29 Z" fill="#fff" />
      <path d="M4 33 q4 -2.5 8 0 t8 0 t8 0 t8 0" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="leading-none">
        <span className="block font-display text-[22px] tracking-[0.06em] text-white">SHARK GYM</span>
        <span className="mt-1 block text-[9px] font-semibold tracking-[0.5em] text-white/55">MONASTIR</span>
      </span>
    </span>
  )
}
