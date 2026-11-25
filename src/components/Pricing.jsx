import { Check, Phone } from 'lucide-react'
import { pricing, site } from '../data/site'
import Button from './ui/Button'
import InstagramIcon from './ui/InstagramIcon'
import SectionLabel from './ui/SectionLabel'
import { MaskLines, Reveal } from './ui/Reveal'

function Price({ plan, featured }) {
  if (plan.price === null || plan.price === undefined) {
    return (
      <p className="font-display text-[clamp(2.4rem,3.4vw,3.25rem)] uppercase leading-none">
        Sur demande
      </p>
    )
  }
  return (
    <p className="flex items-baseline gap-2">
      <span className="font-display text-[clamp(3.5rem,5vw,5rem)] leading-none">{plan.price}</span>
      <span className="font-display text-2xl">{pricing.currency}</span>
      <span className={`text-sm ${featured ? 'text-white/60' : 'text-ink/50'}`}>{plan.period}</span>
    </p>
  )
}

export default function Pricing() {
  return (
    <section id="abonnements" className="relative overflow-hidden bg-paper py-28 text-ink md:py-40" aria-labelledby="pricing-title">
      <p
        aria-hidden="true"
        className="text-outline-thin pointer-events-none absolute -right-10 top-10 select-none font-display text-[18vw] uppercase leading-none text-ink/[0.07]"
      >
        Join
      </p>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="05" tone="dark">Abonnements</SectionLabel>
            </Reveal>
            <h2 id="pricing-title" className="mt-8 font-display text-[clamp(3rem,6.4vw,6rem)] uppercase leading-[0.92]">
              <MaskLines lines={['Choisis ta formule.', <span className="text-electric">Rejoins la meute.</span>]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-ink/65">
              Une formule pour chaque objectif. Contacte-nous pour connaître nos tarifs et les offres du moment.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20 grid border-y border-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {pricing.plans.map((plan, i) => {
            const featured = plan.highlight
            return (
              <article
                key={plan.id}
                className={`group relative flex flex-col justify-between gap-12 p-8 transition-colors duration-500 md:p-10 ${
                  featured
                    ? 'z-10 bg-ink text-white lg:-my-8 lg:py-16'
                    : 'border-ink/10 hover:bg-white max-lg:border-b md:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0'
                }`}
              >
                {featured && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-electric" />}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${featured ? 'text-electric' : 'text-ink/40'}`}>
                      0{i + 1} — {plan.duration}
                    </span>
                    {plan.badge && (
                      <span className="bg-electric px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">{plan.badge}</span>
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-[clamp(2.25rem,2.9vw,3rem)] uppercase leading-none">{plan.name}</h3>
                  <p className={`mt-2 text-sm ${featured ? 'text-white/60' : 'text-ink/55'}`}>{plan.tagline}</p>
                </div>

                <div>
                  <Price plan={plan} featured={featured} />
                  <ul className="mt-8 space-y-3">
                    {pricing.sharedFeatures.map((f) => (
                      <li key={f} className={`flex items-center gap-3 text-sm ${featured ? 'text-white/80' : 'text-ink/70'}`}>
                        <Check className="h-4 w-4 shrink-0 text-electric" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.phone.href}
                    className={`mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${featured ? 'text-white' : 'text-ink'}`}
                  >
                    <span className="relative">
                      Demander ce tarif
                      <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-electric transition-transform duration-500 ease-shark group-hover:scale-x-100" />
                    </span>
                    <Phone className="h-3.5 w-3.5 text-electric" />
                  </a>
                </div>
              </article>
            )
          })}
        </Reveal>

        <Reveal className="mt-20 flex flex-col items-start justify-between gap-8 bg-electric p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-display text-[clamp(2rem,3.4vw,3.25rem)] uppercase leading-none">Prêt à plonger ?</p>
            <p className="mt-3 max-w-lg text-white/80">{pricing.note}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.phone.href} variant="light" size="lg" icon={Phone}>
              Demander nos tarifs
            </Button>
            <Button href={site.instagram.url} variant="ghost" size="lg" icon={InstagramIcon} className="ring-white/40">
              Instagram
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
