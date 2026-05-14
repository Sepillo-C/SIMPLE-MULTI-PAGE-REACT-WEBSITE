import { Link } from 'react-router-dom'
import './Page.css'

function Contact() {
  return (
    <div className="page contact-page">
      <div className="page-content">
        <h1>Contact Us 📬</h1>
        <p>This is the <strong>Contact</strong> page. Please don't reach out!</p>

        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Your message... (Please don't reach out ;-;)" />
          </div>
          <button className="btn" type="button">Send Message</button>
        </div>

        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  )
}

export default Contact
