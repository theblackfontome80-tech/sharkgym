import { hours } from '../data/site'

const toMinutes = (t) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

export const formatTime = (t) => t.replace(':', 'h')

const WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

/** Jour et minute actuels à l'heure de Tunisie, quel que soit le fuseau du visiteur. */
export function nowInGymTimezone(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: hours.timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type) => parts.find((p) => p.type === type)?.value
  return {
    day: WEEKDAYS[get('weekday')],
    minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')),
  }
}

export function getOpeningStatus(now = nowInGymTimezone()) {
  const byDay = (d) => hours.days.find((x) => x.day === d)
  const today = byDay(now.day)

  if (today && !today.closed) {
    const open = toMinutes(today.open)
    const close = toMinutes(today.close)
    if (now.minutes >= open && now.minutes < close) {
      return { isOpen: true, today, now, label: `Ouvert · ferme à ${formatTime(today.close)}` }
    }
    if (now.minutes < open) {
      return { isOpen: false, today, now, label: `Fermé · ouvre à ${formatTime(today.open)}` }
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = byDay((now.day + i) % 7)
    if (next && !next.closed) {
      const when = i === 1 ? 'demain' : next.label.toLowerCase()
      return { isOpen: false, today, now, label: `Fermé · ouvre ${when} à ${formatTime(next.open)}` }
    }
  }
  return { isOpen: false, today, now, label: 'Fermé' }
}

export { toMinutes }
