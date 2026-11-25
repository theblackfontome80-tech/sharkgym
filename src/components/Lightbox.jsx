import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { imageUrl } from '../lib/image'
import { ease } from './ui/Reveal'

/** Visionneuse plein écran : clavier (← → Échap), glisser sur mobile, focus géré. */
export default function Lightbox({ items, index, onChange, onClose }) {
  const open = index !== null
  const closeRef = useRef(null)
  const lastFocus = useRef(null)

  const go = useCallback(
    (dir) => onChange((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length, onChange],
  )

  const handlers = useRef({ go, onClose })
  handlers.current = { go, onClose }

  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') handlers.current.onClose()
      if (e.key === 'ArrowRight') handlers.current.go(1)
      if (e.key === 'ArrowLeft') handlers.current.go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      lastFocus.current?.focus?.({ preventScroll: true })
    }
  }, [open])

  const item = open ? items[index] : null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse de photos"
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-5 md:px-10" onClick={(e) => e.stopPropagation()}>
            <p className="font-display text-2xl tracking-wide" aria-live="polite">
              {String(index + 1).padStart(2, '0')}
              <span className="text-white/30"> / {String(items.length).padStart(2, '0')}</span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer la visionneuse"
              className="flex h-12 w-12 items-center justify-center bg-white text-ink transition-colors hover:bg-electric hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-24">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={index}
                src={imageUrl(item.src, 2000, 80)}
                alt={item.alt}
                className="max-h-[78vh] max-w-full cursor-grab select-none object-contain active:cursor-grabbing"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1)
                  else if (info.offset.x > 80) go(-1)
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              aria-label="Photo précédente"
              className="absolute left-3 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white hover:text-ink md:flex md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              aria-label="Photo suivante"
              className="absolute right-3 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white hover:text-ink md:flex md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 px-5 py-6 md:px-10" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm text-white/60">{item.alt}</p>
            <div className="flex gap-2 md:hidden">
              <button type="button" onClick={() => go(-1)} aria-label="Photo précédente" className="flex h-11 w-11 items-center justify-center ring-1 ring-inset ring-white/20">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Photo suivante" className="flex h-11 w-11 items-center justify-center ring-1 ring-inset ring-white/20">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
