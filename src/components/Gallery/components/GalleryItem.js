import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({
  id,
  source,
  linkSrc,
  thumbnail,
  caption,
  description,
  position,
  toggleLightbox,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(id)
    },
    [id, toggleLightbox]
  )

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} alt="" />
      </a>

      <h3>
        <a href={linkSrc}>{caption}</a>
      </h3>
      <p>{description}</p>
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
