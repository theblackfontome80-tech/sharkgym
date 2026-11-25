import { imageSrcSet, imageUrl } from '../../lib/image'

/** Image optimisée : srcset responsive, chargement différé, décodage asynchrone. */
export default function Img({ src, alt = '', sizes = '100vw', width = 1600, priority = false, className = '', ...rest }) {
  return (
    <img
      src={imageUrl(src, width)}
      srcSet={imageSrcSet(src)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable="false"
      className={className}
      {...rest}
    />
  )
}
