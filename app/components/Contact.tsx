'use client'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-main">
        <h2>CONTACT</h2>
        <div className="contact-item">
          <h3>Courriel</h3>
          <a href="mailto:virginiejaffredo@jaxa.ca">virginiejaffredo@jaxa.ca</a>
        </div>
        <div className="contact-item">
          <h3>Téléphone</h3>
          <a href="tel:+15148138788">+1 (514) 813-8788</a>
        </div>
        <div className="contact-item">
          <h3>Localisation</h3>
          <p>Montréal, Québec<br />Canada</p>
        </div>
      </div>
      <div className="contact-side">
        <h3>SUIVEZ NOTRE ACTUALITÉ</h3>
      </div>
    </section>
  )
}
