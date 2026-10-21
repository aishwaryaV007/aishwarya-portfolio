// The visual for each project: real screenshots or a real screen recording.
function ProjectMedia({ media, name }) {
  if (media.type === 'browser') {
    return (
      <div className={media.images.length > 1 ? 'media media-browsers media-stack reveal' : 'media media-browsers reveal'}>
        {media.images.map((image) => (
          <figure key={image.src} className="browser">
            <div className="browser-bar">
              <span className="browser-url">{image.label}</span>
            </div>
            <img src={image.src} alt={image.alt} loading="lazy" width={image.width} height={image.height} />
          </figure>
        ))}
      </div>
    )
  }

  if (media.type === 'phone-video') {
    return (
      <figure className="media media-phone reveal">
        <div className="phone">
          <video
            src={`${media.src}#t=0.5`}
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={`${name}: ${media.caption}`}
          />
        </div>
        <figcaption>{media.caption}</figcaption>
      </figure>
    )
  }

  if (media.type === 'phone-gallery') {
    return (
      <figure className="media media-gallery">
        <div className="gallery">
          {media.images.map((image) => (
            <div key={image.src} className="phone phone-small reveal">
              <img src={image.src} alt={image.alt} loading="lazy" width="378" height="848" />
            </div>
          ))}
        </div>
        <figcaption>{media.caption}</figcaption>
      </figure>
    )
  }

  return null
}

export default ProjectMedia
