import { ArrowUpRight, Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { hours, site } from '../data/site'
import { LogoMark } from './Logo'
import Button from './ui/Button'
import InstagramIcon from './ui/InstagramIcon'
import SectionLabel from './ui/SectionLabel'
import { MaskLines, Reveal } from './ui/Reveal'

export default function Contact() {
  const rows = [
    { icon: MapPin, label: 'Adresse', value: `${site.address.street}, ${site.address.city}, ${site.address.country}`, href: site.maps.url },
    { icon: InstagramIcon, label: 'Instagram', value: site.instagram.handle, href: site.instagram.url },
    { icon: Clock, label: 'Horaires', value: `${hours.summary[0].value} · Dim. ${hours.summary[2].value}`, href: '#horaires' },
  ]

  return (
    <section id="contact" className="relative bg-coal py-28 md:py-40" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="07">Contact</SectionLabel>
          </Reveal>
          <h2 id="contact-title" className="mt-8 font-display text-[clamp(3rem,6vw,5.5rem)] uppercase leading-[0.92]">
            <MaskLines lines={['Rejoins la', <span className="text-electric">Shark Family.</span>]} />
          </h2>

          <Reveal delay={0.15} className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Appelle-nous</p>
            <a
              href={site.phone.href}
              className="group mt-3 inline-flex items-center gap-4 font-display text-[clamp(2.4rem,4.6vw,4.25rem)] leading-none transition-colors hover:text-electric"
            >
              {site.phone.display}
              <ArrowUpRight className="h-8 w-8 text-electric transition-transform duration-500 ease-shark group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {rows.map(({ icon: Icon, label, value, href }) => {
                const external = href.startsWith('http')
                return (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-5 py-5"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-electric" />
                      <span className="flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">{label}</span>
                        <span className="mt-1 block text-white/85 transition-colors group-hover:text-white">{value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-500 ease-shark group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.35} className="mt-10 flex flex-wrap gap-3">
            <Button href={site.phone.href} icon={Phone}>Appeler</Button>
            <Button href={site.instagram.url} variant="ghost" icon={InstagramIcon}>Instagram</Button>
            <Button href={site.maps.url} variant="ghost" icon={Navigation}>Itinéraire</Button>
          </Reveal>
        </div>

        {/* Carte */}
        <Reveal delay={0.1} className="relative min-h-[460px] overflow-hidden bg-graphite lg:col-span-7 lg:col-start-6 lg:min-h-[640px]">
          <iframe
            title="Carte Google Maps — Shark Gym Monastir"
            src={site.maps.embed}
            className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)_hue-rotate(180deg)_brightness(0.95)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-electric/10 mix-blend-color" />

          <div className="absolute bottom-0 left-0 right-0 m-4 flex flex-col gap-5 bg-ink p-6 sm:right-auto sm:m-6 sm:max-w-sm md:p-7">
            <div className="flex items-center gap-4">
              <LogoMark className="h-11 w-11" />
              <div>
                <p className="font-display text-2xl uppercase leading-none">{site.fullName}</p>
                <p className="mt-1.5 text-sm text-white/60">
                  {site.address.street}, {site.address.city}
                </p>
              </div>
            </div>
            <a
              href={site.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-electric"
            >
              Ouvrir dans Google Maps
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-shark group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
