import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { family } from '../data/site'
import Img from './ui/Img'
import SectionLabel from './ui/SectionLabel'
import { MaskLines, Reveal } from './ui/Reveal'

export default function Family() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const backY = useTransform(scrollYProgress, [0, 1], ['30%', '-40%'])
  const frontY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const smallY = useTransform(scrollYProgress, [0, 1], ['50%', '-50%'])
  const titleX = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  const [a, b, c] = family.images

  return (
    <section ref={ref} id="shark-family" className="grain relative overflow-hidden bg-abyss py-32 md:py-48" aria-labelledby="family-title">
      <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute inset-[-12%_0]">
        <Img src={family.background.src} alt="" width={1920} className="photo h-full w-full object-cover opacity-30" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-deep/50 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-coal to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <SectionLabel index="03">La Shark Family</SectionLabel>
        </Reveal>

        <div className="relative mt-10">
          {/* Photo derrière le titre */}
          <motion.div style={{ y: backY }} className="absolute right-[3%] top-[-10%] z-0 hidden w-[24%] md:block">
            <Img src={a.src} alt={a.alt} sizes="25vw" width={900} className="photo aspect-[3/4] w-full object-cover" />
          </motion.div>

          <motion.h2
            id="family-title"
            style={{ x: titleX }}
            className="relative z-10 font-display text-[clamp(4rem,15vw,15.5rem)] uppercase leading-[0.84]"
          >
            <MaskLines lines={['Stronger', <span className="text-outline text-white">together.</span>]} stagger={0.15} />
          </motion.h2>
        </div>

        <div className="relative mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-10">
          <motion.div style={{ y: frontY }} className="relative z-20 self-start lg:col-span-5">
            <Img src={b.src} alt={b.alt} sizes="(min-width:1024px) 38vw, 100vw" width={1200} className="photo aspect-[4/5] w-full object-cover" />
            <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-24 w-24 border-b-[3px] border-r-[3px] border-electric" />
          </motion.div>

          <div className="flex flex-col justify-between gap-14 lg:col-span-6 lg:col-start-7 lg:pt-24">
            <Reveal>
              <p className="font-display text-[clamp(1.9rem,3.2vw,3rem)] uppercase leading-[1.05] text-white">
                {family.text}
              </p>
            </Reveal>

            <dl className="grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {family.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-none text-electric">{s.value}</span>
                    <span className="mt-3 block text-[11px] font-semibold uppercase leading-snug tracking-[0.18em] text-white/60">{s.label}</span>
                  </dd>
                </Reveal>
              ))}
            </dl>

            <motion.div style={{ y: smallY }} className="ml-auto w-[60%] md:w-[48%]">
              <Img src={c.src} alt={c.alt} sizes="30vw" width={900} className="photo aspect-[16/11] w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
