import { useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { gallery, site } from '../data/site'
import Button from './ui/Button'
import Img from './ui/Img'
import InstagramIcon from './ui/InstagramIcon'
import SectionLabel from './ui/SectionLabel'
import Lightbox from './Lightbox'
import { MaskLines, Reveal, ease } from './ui/Reveal'

export default function Gallery() {
  const [index, setIndex] = useState(null)

  return (
    <section id="galerie" className="relative bg-ink py-28 md:py-40" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="04">Galerie</SectionLabel>
            </Reveal>
            <h2 id="gallery-title" className="mt-8 font-display text-[clamp(3rem,6.4vw,6rem)] uppercase leading-[0.92]">
              <MaskLines lines={["L'énergie Shark,", <span className="text-electric">en images.</span>]} />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <Button href={site.instagram.url} variant="ghost" icon={InstagramIcon}>
              {site.instagram.handle}
            </Button>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-2 sm:auto-rows-[200px] md:mt-20 md:grid-cols-4 md:gap-3 lg:auto-rows-[250px]">
          {gallery.map((item, i) => (
            <motion.li
              key={item.src + i}
              className={`relative overflow-hidden bg-graphite ${item.span}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, delay: (i % 4) * 0.08, ease }}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group absolute inset-0 h-full w-full cursor-zoom-in"
                aria-label={`Agrandir la photo : ${item.alt}`}
              >
                <Img
                  src={item.src}
                  alt={item.alt}
                  sizes={item.span.includes('col-span-2') ? '(min-width:768px) 50vw, 100vw' : '(min-width:768px) 25vw, 50vw'}
                  width={1000}
                  className="photo h-full w-full object-cover transition-transform duration-[1400ms] ease-shark group-hover:scale-110"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-electric/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-electric/35" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 flex h-10 w-10 scale-75 items-center justify-center bg-white text-ink opacity-0 transition-all duration-500 ease-shark group-hover:scale-100 group-hover:opacity-100"
                >
                  <Maximize2 className="h-4 w-4" />
                </span>
                <span className="absolute bottom-4 left-4 translate-y-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 ease-shark group-hover:translate-y-0 group-hover:opacity-100">
                  {String(i + 1).padStart(2, '0')} — {item.alt}
                </span>
              </button>
            </motion.li>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="max-w-xl text-white/60">
            Entraînements, transformations, ambiance : suis le quotidien de la salle sur notre compte Instagram officiel.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 font-display text-3xl uppercase transition-colors hover:text-electric md:text-4xl"
          >
            <InstagramIcon className="h-7 w-7" />
            Suivre la salle
            <span className="block h-[3px] w-10 bg-electric transition-all duration-500 ease-shark group-hover:w-16" aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      <Lightbox items={gallery} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
    </section>
  )
}
