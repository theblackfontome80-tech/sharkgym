import { motion } from 'framer-motion'

export const ease = [0.16, 1, 0.3, 1]

/** Apparition douce au défilement. */
export function Reveal({ children, delay = 0, y = 36, className = '', as = 'div', ...rest }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Titres révélés ligne par ligne derrière un masque. */
// L'observation se fait sur le conteneur visible (les lignes masquées
// par overflow:hidden ne seraient jamais détectées « dans la vue »).
const lineVariants = {
  hidden: { y: '110%' },
  shown: (custom) => ({ y: '0%', transition: { duration: 1.1, delay: custom, ease } }),
}

export function MaskLines({ lines, className = '', delay = 0, onMount = false, stagger = 0.11 }) {
  return (
    <motion.span
      className={`block ${className}`}
      initial="hidden"
      {...(onMount ? { animate: 'shown' } : { whileInView: 'shown', viewport: { once: true, margin: '-40px' } })}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.04em]">
          <motion.span className="block" variants={lineVariants} custom={delay + i * stagger}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
