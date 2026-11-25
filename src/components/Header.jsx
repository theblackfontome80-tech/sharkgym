import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { navigation, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import Logo from './Logo'
import Button from './ui/Button'
import InstagramIcon from './ui/InstagramIcon'
import { ease } from './ui/Reveal'

const sectionIds = navigation.map((n) => n.id)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const close = () => mq.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding,backdrop-filter] duration-500 ${
          solid ? 'border-white/[0.06] bg-ink/85 py-3 backdrop-blur-xl' : 'border-transparent bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
          <a href="#accueil" aria-label="Shark Gym Monastir — retour à l'accueil" onClick={() => setOpen(false)} className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Navigation principale" className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={`group relative block whitespace-nowrap py-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 hover:text-white ${
                        isActive ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-electric transition-transform duration-500 ease-shark group-hover:scale-x-100 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block">
              <Button href="#abonnements" size="sm">
                Rejoindre Shark Family
              </Button>
            </span>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="flex h-11 w-11 items-center justify-center text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white hover:text-ink xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-24 xl:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
          >
            <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-5 md:px-10">
              <ul>
                {navigation.map((item, i) => (
                  <li key={item.id} className="overflow-hidden border-b border-white/[0.07]">
                    <motion.a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 font-display text-[clamp(2.4rem,10vw,4rem)] uppercase leading-none text-white transition-colors hover:text-electric"
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease }}
                    >
                      {item.label}
                      <span className="font-sans text-xs font-semibold tracking-[0.2em] text-white/30">0{i + 1}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="flex flex-wrap items-center gap-3 border-t border-white/10 px-5 py-6 md:px-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button href={site.phone.href} size="sm" icon={Phone}>
                {site.phone.display}
              </Button>
              <Button href={site.instagram.url} size="sm" variant="ghost" icon={null}>
                <span className="flex items-center gap-2">
                  <InstagramIcon className="h-4 w-4" /> Instagram
                </span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
