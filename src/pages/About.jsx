import { Link } from 'react-router-dom'
import './Page.css'

function About() {
  return (
    <div className="page about-page">
      <div className="page-content">
        <h1>About Me 👋</h1>
        <p>This is the <strong>About</strong> page... Well I guess...</p>
        <p>
          This app uses <code>BrowserRouter</code>, <code>Routes</code>, <code>Route</code>,
          and <code>Link</code> from <strong>react-router-dom</strong> for client-side navigation. (Quite proud of this btw).
        </p>
        <Link to="/contact" className="btn">Contact Me, Brochacho!</Link>
      </div>
    </div>
  )
}

export default About
