import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { hero, site } from '../data/site'
import { useOpeningStatus } from '../hooks/useOpeningStatus'
import Button from './ui/Button'
import Img from './ui/Img'
import Fin from './ui/Fin'
import InstagramIcon from './ui/InstagramIcon'
import { MaskLines, ease } from './ui/Reveal'

export default function Hero() {
  const ref = useRef(null)
  const status = useOpeningStatus()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section id="accueil" ref={ref} className="grain relative h-[100svh] min-h-[680px] overflow-hidden bg-ink" aria-labelledby="hero-title">
      {/* Photo immersive + parallaxe */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 will-change-transform">
        <Img src={hero.image.src} alt={hero.image.alt} priority width={1920} className="photo h-full w-full object-cover" />
      </motion.div>

      {/* Éclairage bleu et profondeur */}
      <div aria-hidden="true" className="absolute inset-0 bg-deep/55 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,11,0.94)_0%,rgba(5,7,11,0.6)_48%,rgba(5,7,11,0.2)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink to-transparent" />
      <div aria-hidden="true" className="absolute -right-[15%] -top-[25%] h-[70vw] w-[70vw] rounded-full bg-electric/20 blur-[140px]" />

      {/* Coordonnées verticales */}
      <div aria-hidden="true" className="absolute right-10 top-1/2 hidden -translate-y-1/2 xl:block">
        <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-white/35 [writing-mode:vertical-rl]">
          {site.address.coordinates} &nbsp;·&nbsp; Monastir — Tunisie
        </p>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-32 md:px-10 md:pb-36"
      >
        <motion.p
          className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/70"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <Fin className="h-2.5 w-3 text-electric" />
          {hero.eyebrow}
        </motion.p>

        <h1 id="hero-title" className="font-display text-[clamp(3.6rem,12.5vw,12.5rem)] uppercase leading-[0.86] tracking-[-0.005em]">
          <MaskLines
            onMount
            delay={0.3}
            lines={[
              'No limits.',
              <>
                <span className="text-outline text-white">Just</span> <span className="text-electric">results.</span>
              </>,
            ]}
          />
          <span className="sr-only"> — Shark Gym, salle de musculation à Monastir</span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,34rem)_auto] md:items-end md:justify-between">
          <motion.p
            className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease }}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease }}
          >
            <Button href="#la-salle" size="lg">Découvrir la salle</Button>
            <Button href="#contact" size="lg" variant="ghost">Nous contacter</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Barre d'informations */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] md:grid-cols-3 md:px-10">
          <a href="#horaires" className="flex items-center gap-3 text-white/70 transition-colors hover:text-white">
            <span className="relative flex h-2 w-2">
              {status.isOpen && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />}
              <span className={`relative inline-flex h-2 w-2 rounded-full ${status.isOpen ? 'bg-electric' : 'bg-white/40'}`} />
            </span>
            {status.label}
          </a>
          <a href="#la-salle" className="hidden items-center justify-center gap-3 text-white/50 transition-colors hover:text-white md:flex" aria-label="Défiler vers la suite">
            Scroll
            <span className="relative block h-8 w-px overflow-hidden bg-white/15">
              <motion.span
                className="absolute left-0 top-0 block h-3 w-px bg-electric"
                animate={{ y: [-12, 32] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </a>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end gap-2 text-white/70 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{site.instagram.handle}</span>
            <span className="sm:hidden">Instagram</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
