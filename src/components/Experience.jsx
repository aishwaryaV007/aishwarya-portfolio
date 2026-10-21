import { history, hackathons } from '../data'

// "Submissions" table for internships and positions, plus a hackathon list.
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
