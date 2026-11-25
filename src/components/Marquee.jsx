import { marquee } from '../data/site'
import Fin from './ui/Fin'

function Track({ words, outline = false }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className={`px-8 font-display text-[clamp(2rem,4.5vw,3.75rem)] uppercase leading-none ${outline ? 'text-outline-thin text-white/70' : ''}`}>
            {w}
          </span>
          <Fin className={`h-5 w-6 ${outline ? 'text-electric' : 'text-ink'}`} />
        </span>
      ))}
    </div>
  )
  return (
    <>
      {row}
      {row}
    </>
  )
}

/** Bandes croisées défilantes — transition entre le hero et la suite. */
export default function Marquee() {
  return (
    <div aria-hidden="true" className="relative z-20 -my-10 overflow-x-clip py-14">
      <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[2deg] bg-graphite py-4">
        <div className="flex w-max animate-marquee-reverse">
          <Track words={[...marquee].reverse()} outline />
        </div>
      </div>
      <div className="relative -mx-[5%] -rotate-[1.5deg] bg-electric py-4 text-white shadow-[0_30px_60px_-20px_rgba(31,107,255,0.45)]">
        <div className="flex w-max animate-marquee">
          <Track words={marquee} />
        </div>
      </div>
    </div>
  )
}
