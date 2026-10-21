// The visual for each project: a real screenshot, a real screen recording,
// or (for CodeVault, whose code is private) a diagram of the platforms it connects.
function ProjectMedia({ media, name }) {
  if (media.type === 'browser') {
    return (
      <figure className="media media-browser">
        <div className="browser-bar">
          <span className="browser-url">{media.url}</span>
        </div>
        <img src={media.src} alt={media.alt} loading="lazy" width="1600" height="1000" />
      </figure>
    )
  }

  if (media.type === 'phone-video') {
    return (
      <figure className="media media-phone">
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
            <div key={image.src} className="phone phone-small">
              <img src={image.src} alt={image.alt} loading="lazy" width="378" height="848" />
            </div>
          ))}
        </div>
        <figcaption>{media.caption}</figcaption>
      </figure>
    )
  }

  if (media.type === 'flow') {
    return (
      <figure className="media media-flow" aria-label={`How ${name} works`}>
        <ul className="flow-sources">
          {media.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
        <div className="flow-step" aria-hidden="true">
          ↓
        </div>
        <div className="flow-hub">{media.hub}</div>
        <div className="flow-step" aria-hidden="true">
          ↓
        </div>
        <div className="flow-target">Accepted solutions pushed to your {media.target}</div>
      </figure>
    )
  }

  return null
}

export default ProjectMedia
