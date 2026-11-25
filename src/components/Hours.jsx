import { motion } from 'framer-motion'
import { hours } from '../data/site'
import { formatTime, toMinutes } from '../lib/hours'
import { useOpeningStatus } from '../hooks/useOpeningStatus'
import SectionLabel from './ui/SectionLabel'
import { MaskLines, Reveal, ease } from './ui/Reveal'

// Échelle de la frise : 06h → 24h
const START = 6 * 60
const END = 24 * 60
const pct = (min) => ((Math.min(Math.max(min, START), END) - START) / (END - START)) * 100
const ticks = [6, 9, 12, 15, 18, 21, 24]

export default function Hours() {
  const status = useOpeningStatus()

  return (
    <section id="horaires" className="relative overflow-hidden bg-ink py-28 md:py-40" aria-labelledby="hours-title">
      <div aria-hidden="true" className="absolute -left-[20%] bottom-[-30%] h-[60vw] w-[60vw] rounded-full bg-deep/40 blur-[140px]" />

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel index="06">Horaires</SectionLabel>
          </Reveal>
          <h2 id="hours-title" className="mt-8 font-display text-[clamp(3rem,6vw,5.5rem)] uppercase leading-[0.92]">
            <MaskLines lines={['Ouvert', <span className="text-electric">7 jours</span>, 'sur 7.']} />
          </h2>

          <Reveal delay={0.2} className="mt-12">
            <div className={`inline-flex items-center gap-4 px-5 py-4 ${status.isOpen ? 'bg-electric' : 'bg-graphite'}`} role="status">
              <span className="relative flex h-2.5 w-2.5">
                {status.isOpen && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.16em]">{status.label}</span>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">Heure de Tunisie</p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {hours.summary.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{row.label}</dt>
                  <dd className="whitespace-nowrap font-display text-lg tracking-wide">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Frise horaire */}
        <div className="lg:col-span-7 lg:col-start-6 lg:pt-28">
          <div className="relative ml-[5.5rem] hidden h-6 text-[10px] font-semibold tracking-[0.18em] text-white/35 sm:ml-32 sm:block" aria-hidden="true">
            {ticks.map((h) => (
              <span key={h} className="absolute -translate-x-1/2" style={{ left: `${pct(h * 60)}%` }}>
                {String(h).padStart(2, '0')}H
              </span>
            ))}
          </div>

          <ul className="space-y-2.5">
            {hours.days.map((d, i) => {
              const isToday = d.day === status.now.day
              const left = pct(toMinutes(d.open))
              const width = pct(toMinutes(d.close)) - left
              return (
                <li key={d.day} className="flex items-center gap-4">
                  <span className={`w-[4.5rem] shrink-0 text-xs font-bold uppercase tracking-[0.14em] sm:w-28 ${isToday ? 'text-white' : 'text-white/45'}`}>
                    {d.label}
                    {isToday && <span className="mt-1 block text-[9px] tracking-[0.2em] text-electric">Aujourd'hui</span>}
                  </span>
                  <div className={`relative h-12 flex-1 overflow-hidden ${isToday ? 'bg-white/[0.07]' : 'bg-white/[0.03]'}`}>
                    {ticks.slice(1, -1).map((h) => (
                      <span key={h} aria-hidden="true" className="absolute inset-y-0 w-px bg-white/[0.05]" style={{ left: `${pct(h * 60)}%` }} />
                    ))}
                    {!d.closed && (
                      <motion.div
                        className={`absolute inset-y-0 flex origin-left items-center justify-between px-3 text-[11px] font-bold tracking-[0.12em] sm:px-4 ${
                          isToday ? 'bg-electric text-white' : 'bg-white/[0.12] text-white/80'
                        }`}
                        style={{ left: `${left}%`, width: `${width}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1.2, delay: 0.1 + i * 0.07, ease }}
                      >
                        <span>{formatTime(d.open)}</span>
                        <span>{formatTime(d.close)}</span>
                      </motion.div>
                    )}
                    {isToday && status.now.minutes >= START && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 z-10 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                        style={{ left: `${pct(status.now.minutes)}%` }}
                      />
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
          <p className="mt-6 text-sm text-white/40">Horaires susceptibles d'évoluer les jours fériés — renseigne-toi auprès de la salle.</p>
        </div>
      </div>
    </section>
  )
}
