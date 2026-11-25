import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { spaces } from '../data/site'
import Img from './ui/Img'
import SectionLabel from './ui/SectionLabel'
import { MaskLines, Reveal, ease } from './ui/Reveal'

export default function Spaces() {
  const [active, setActive] = useState(0)

  return (
    <section id="equipements" className="relative bg-coal py-28 md:py-40" aria-labelledby="spaces-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="02">Nos espaces</SectionLabel>
            </Reveal>
            <h2 id="spaces-title" className="mt-8 font-display text-[clamp(3rem,6.4vw,6rem)] uppercase leading-[0.92]">
              <MaskLines lines={['Un espace pensé', <>pour la <span className="text-electric">performance.</span></>]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-white/65">
              Musculation, cardio, machines guidées et zone d'entraînement : chaque espace a été pensé pour t'aider à progresser.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Ordinateur : panneaux en accordéon */}
      <Reveal className="mx-auto mt-20 hidden h-[78vh] max-h-[760px] min-h-[540px] max-w-[1440px] gap-2 px-10 lg:flex">
        {spaces.map((space, i) => {
          const isActive = active === i
          return (
            <button
              key={space.title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              aria-label={space.title}
              className="group relative h-full overflow-hidden text-left transition-[flex-grow] duration-[900ms] ease-shark"
              style={{ flexGrow: isActive ? 4.2 : 1, flexBasis: 0 }}
            >
              <Img
                src={space.image.src}
                alt={space.image.alt}
                sizes="60vw"
                className={`photo absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-shark ${isActive ? 'scale-100' : 'scale-125'}`}
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 transition-colors duration-700 ${isActive ? 'bg-ink/20' : 'bg-abyss/75 group-hover:bg-abyss/60'}`}
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/95 to-transparent" />

              <span className="absolute left-6 top-6 font-display text-2xl text-white/90">0{i + 1}</span>

              {/* Titre vertical (panneau fermé) */}
              <span
                className={`absolute bottom-8 left-6 font-display text-3xl uppercase whitespace-nowrap transition-opacity duration-500 [writing-mode:vertical-rl] rotate-180 ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {space.title}
              </span>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.8, delay: 0.25, ease }}
                  >
                    <span className="mb-5 block h-[3px] w-14 bg-electric" />
                    <h3 className="font-display text-[clamp(2.5rem,4vw,4.25rem)] uppercase leading-[0.95]">{space.title}</h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">{space.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </Reveal>

      {/* Mobile / tablette : carrousel à défilement */}
      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:px-10 lg:hidden" role="list">
        {spaces.map((space, i) => (
          <article key={space.title} role="listitem" className="relative aspect-[3/4] w-[82%] shrink-0 snap-start overflow-hidden sm:w-[46%]">
            <Img src={space.image.src} alt={space.image.alt} sizes="(min-width:640px) 46vw, 82vw" width={900} className="photo absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <span className="absolute left-5 top-5 font-display text-xl">0{i + 1}</span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="mb-4 block h-[3px] w-10 bg-electric" />
              <h3 className="font-display text-3xl uppercase leading-none">{space.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{space.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
