import { history, hackathons, codingProfiles } from '../data'

// Practice profiles: LeetCode shows real numbers, the others link to the profile.
function CodingProfiles() {
  return (
    <>
      <h3 className="col-title mono col-title-spaced reveal">Practice · coding profiles</h3>
      <ul className="profiles reveal">
        {codingProfiles.items.map((p) => (
          <li key={p.platform} className={p.stats ? 'profile profile-main' : 'profile'}>
            <div className="profile-head">
              <span className="entry-title">{p.platform}</span>
              <a href={p.href} target="_blank" rel="noreferrer" className="profile-link mono">
                {p.handle}
              </a>
            </div>
            {p.stats ? (
              <dl className="profile-stats">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd className="mono">{s.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <a href={p.href} target="_blank" rel="noreferrer" className="profile-open">
                View profile
              </a>
            )}
          </li>
        ))}
      </ul>
      <p className="profiles-note muted mono reveal">Numbers as of {codingProfiles.asOf}.</p>
    </>
  )
}

// "Submissions" table for internships and positions, practice profiles and hackathons.
function Experience() {
  return (
    <section id="history" className="section section-alt">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="mono section-index">02</span> History
        </h2>

        <h3 className="col-title mono reveal">Submissions · internships and roles</h3>
        <table className="submissions reveal">
          <thead>
            <tr>
              <th scope="col">When</th>
              <th scope="col">Role</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {history.map((row) => (
              <tr key={row.what + row.where}>
                <td className="mono when">{row.when}</td>
                <td>
                  <span className="entry-title">{row.what}</span>
                  <span className="entry-org">{row.where}</span>
                </td>
                <td className="muted">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <CodingProfiles />

        <h3 className="col-title mono col-title-spaced reveal">Contests · hackathons</h3>
        <ul className="contests reveal">
          {hackathons.map((h) => (
            <li key={h.name}>
              <span className="entry-title">{h.name}</span>
              <span className="muted">{h.result}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
