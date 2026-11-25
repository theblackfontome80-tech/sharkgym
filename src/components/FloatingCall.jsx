import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { site } from '../data/site'

/** Bouton d'appel flottant (mobile uniquement), visible après le hero. */
export default function FloatingCall() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={site.phone.href}
          aria-label={`Appeler Shark Gym : ${site.phone.display}`}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center bg-electric text-white shadow-[0_15px_40px_-10px_rgba(31,107,255,0.8)] md:hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <Phone className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
