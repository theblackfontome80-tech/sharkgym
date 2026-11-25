import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Dumbbell, Flame, Snowflake, Users } from 'lucide-react'
import { about } from '../data/site'
import Img from './ui/Img'
import SectionLabel from './ui/SectionLabel'
import { MaskLines, Reveal } from './ui/Reveal'

const icons = { users: Users, snowflake: Snowflake, dumbbell: Dumbbell, flame: Flame }

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const mainY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const smallY = useTransform(scrollYProgress, [0, 1], ['18%', '-18%'])
  const blockY = useTransform(scrollYProgress, [0, 1], ['-10%', '15%'])
  const wordX = useTransform(scrollYProgress, [0, 1], ['10%', '-25%'])

  return (
    <section id="la-salle" ref={ref} className="relative overflow-hidden bg-ink pb-28 pt-32 md:pb-40 md:pt-44" aria-labelledby="about-title">
      {/* Mot géant en filigrane */}
      <motion.p
        aria-hidden="true"
        style={{ x: wordX }}
        className="text-outline-thin pointer-events-none absolute left-0 top-24 whitespace-nowrap font-display text-[22vw] uppercase leading-none text-white/[0.05]"
      >
        Shark Family
      </motion.p>

      <div className="relative mx-auto grid max-w-[1440px] gap-20 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-10">
          <Reveal>
            <SectionLabel index="01">La salle</SectionLabel>
          </Reveal>
          <h2 id="about-title" className="mt-8 font-display text-[clamp(3rem,6.4vw,6rem)] uppercase leading-[0.92]">
            <MaskLines lines={["Plus qu'une", 'salle.', <span className="text-electric">Une communauté.</span>]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-lg text-lg leading-relaxed text-white/70">{about.text}</p>
          </Reveal>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {about.features.map((f, i) => {
              const Icon = icons[f.icon]
              return (
                <Reveal as="li" key={f.title} delay={0.1 + i * 0.08} className="group border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-electric transition-transform duration-500 ease-shark group-hover:-translate-y-1" strokeWidth={1.6} />
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-white/30">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold uppercase tracking-wide">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{f.text}</p>
                </Reveal>
              )
            })}
          </ul>
        </div>

        {/* Composition photo superposée */}
        <div className="relative lg:col-span-7 lg:col-start-6">
          <motion.div
            aria-hidden="true"
            style={{ y: blockY }}
            className="absolute -top-8 left-[8%] hidden h-[55%] w-[38%] bg-electric md:block"
          />
          <motion.div style={{ y: mainY }} className="relative ml-auto w-full overflow-hidden md:w-[80%]">
            <Reveal y={0} initial={{ clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
              <Img
                src={about.images.main.src}
                alt={about.images.main.alt}
                sizes="(min-width:1024px) 45vw, 100vw"
                className="photo aspect-[4/5] w-full object-cover"
              />
            </Reveal>
          </motion.div>
          <motion.div
            style={{ y: smallY }}
            className="relative -mt-24 w-[58%] border-[10px] border-ink md:absolute md:bottom-[-8%] md:left-0 md:mt-0 md:w-[42%]"
          >
            <Img
              src={about.images.secondary.src}
              alt={about.images.secondary.alt}
              sizes="(min-width:1024px) 25vw, 60vw"
              width={900}
              className="photo aspect-square w-full object-cover"
            />
          </motion.div>
          <p className="absolute bottom-6 right-6 hidden text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70 md:block">
            Every rep counts
          </p>
        </div>
      </div>
    </section>
  )
}
