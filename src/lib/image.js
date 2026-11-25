/* Génère des URLs optimisées (format auto, recadrage, qualité) pour les photos
   Unsplash. Les images locales (/images/...) sont renvoyées telles quelles. */
const isUnsplash = (src) => src.startsWith('https://images.unsplash.com')

export function imageUrl(src, width = 1600, quality = 72) {
  if (!isUnsplash(src)) return src
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality}`
}

export function imageSrcSet(src, widths = [480, 768, 1080, 1440, 1920]) {
  if (!isUnsplash(src)) return undefined
  return widths.map((w) => `${imageUrl(src, w)} ${w}w`).join(', ')
}
