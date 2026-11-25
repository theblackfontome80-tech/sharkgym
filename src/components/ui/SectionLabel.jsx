import Fin from './Fin'

export default function SectionLabel({ index, children, tone = 'light', className = '' }) {
  const light = tone === 'light'
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${light ? 'text-white/60' : 'text-ink/60'} ${className}`}>
      <Fin className="h-2.5 w-3 text-electric" />
      {index && <span className="text-electric">{index}</span>}
      <span className={`h-px w-8 ${light ? 'bg-white/25' : 'bg-ink/25'}`} aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
