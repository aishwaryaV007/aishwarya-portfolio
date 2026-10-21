// Shared wrapper so every section has the same heading style and spacing.
function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section
