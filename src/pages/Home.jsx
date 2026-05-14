import { Link } from 'react-router-dom'
import './Page.css'

function Home() {
  return (
    <div className="page home-page">
      <div className="page-content">
        <h1>Welcome Home 🏠</h1>
        <p>This is the <strong>Home</strong> page of this website.</p>
        <p>There's also a <strong>very</strong> useful navigation bar above.</p>
        <div className="page-actions">
          <Link to="/about" className="btn">More About Me</Link>
          <Link to="/contact" className="btn btn-outline">Get In Touch... I guess?</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
