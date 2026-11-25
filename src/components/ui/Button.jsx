import { ArrowRight } from 'lucide-react'

const sizes = {
  sm: 'h-11 px-5 text-[11px] gap-2.5',
  md: 'h-14 px-7 text-[12px] gap-3',
  lg: 'h-16 px-9 text-[13px] gap-4',
}

const variants = {
  primary: { base: 'bg-electric text-white clip-bite', fill: 'bg-white', hoverText: 'group-hover:text-ink' },
  light: { base: 'bg-white text-ink clip-bite', fill: 'bg-electric', hoverText: 'group-hover:text-white' },
  dark: { base: 'bg-ink text-white clip-bite', fill: 'bg-electric', hoverText: 'group-hover:text-white' },
  ghost: { base: 'text-white ring-1 ring-inset ring-white/25 hover:ring-white', fill: 'bg-white', hoverText: 'group-hover:text-ink' },
  ghostDark: { base: 'text-ink ring-1 ring-inset ring-ink/20 hover:ring-ink', fill: 'bg-ink', hoverText: 'group-hover:text-white' },
}

/**
 * Bouton principal du site : remplissage qui balaie au survol,
 * flèche animée, coin « mordu » façon aileron.
 */
export default function Button({ href, children, variant = 'primary', size = 'md', icon: Icon = ArrowRight, className = '', ...props }) {
  const v = variants[variant]
  const Comp = href ? 'a' : 'button'
  const external = href?.startsWith('http')
  return (
    <Comp
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group relative inline-flex shrink-0 items-center justify-center overflow-hidden font-semibold uppercase tracking-[0.16em] ${sizes[size]} ${v.base} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-[101%] transition-transform duration-500 ease-snap group-hover:translate-x-0 ${v.fill}`}
      />
      <span className={`relative z-10 transition-colors duration-500 ${v.hoverText}`}>{children}</span>
      {Icon && (
        <span className={`relative z-10 flex h-4 w-4 overflow-hidden transition-colors duration-500 ${v.hoverText}`} aria-hidden="true">
          <Icon className="h-4 w-4 shrink-0 transition-transform duration-500 ease-snap group-hover:translate-x-full" strokeWidth={2.2} />
          <Icon className="h-4 w-4 shrink-0 -translate-x-[200%] transition-transform duration-500 ease-snap group-hover:-translate-x-full" strokeWidth={2.2} />
        </span>
      )}
    </Comp>
  )
}
