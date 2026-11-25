import { ArrowUp } from 'lucide-react'
import { hours, navigation, site } from '../data/site'
import Logo from './Logo'
import InstagramIcon from './ui/InstagramIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-black pt-24" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">Informations Shark Gym Monastir</h2>
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-8 max-w-xs font-display text-2xl uppercase leading-tight text-white/90">{site.slogan}</p>
        </div>

        <nav aria-label="Navigation du pied de page" className="lg:col-span-2 lg:col-start-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-electric">Navigation</p>
          <ul className="mt-6 space-y-3">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-white/60 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-electric">Coordonnées</p>
          <address className="mt-6 space-y-3 not-italic text-white/60">
            <p>{site.fullName}</p>
            <p>
              {site.address.street}, {site.address.city}, {site.address.country}
            </p>
            <p>
              <a href={site.phone.href} className="transition-colors hover:text-white">{site.phone.display}</a>
            </p>
            <p>
              <a href={site.maps.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                Itinéraire Google Maps
              </a>
            </p>
          </address>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-electric">Horaires</p>
          <dl className="mt-6 space-y-3 text-white/60">
            {hours.summary.map((r) => (
              <div key={r.label}>
                <dt className="text-xs uppercase tracking-[0.14em] text-white/35">{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Shark Gym Monastir sur Instagram"
            className="mt-8 flex h-12 w-12 items-center justify-center text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-electric hover:ring-electric"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <p aria-hidden="true" className="text-outline-thin mt-20 select-none whitespace-nowrap text-center font-display text-[21vw] uppercase leading-[0.8] text-white/[0.09]">
        Shark Gym
      </p>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center md:px-10">
          <p>© {year} {site.fullName}. Tous droits réservés.</p>
          <p className="uppercase tracking-[0.24em]">Monastir · Tunisie</p>
          <a href="#accueil" className="group flex items-center gap-2 uppercase tracking-[0.2em] transition-colors hover:text-white">
            Haut de page
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
