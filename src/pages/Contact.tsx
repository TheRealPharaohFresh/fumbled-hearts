import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Create mailto link
    const mailtoLink = `mailto:fumbledhearts1@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    // Open mailto link
    window.location.href = mailtoLink

    // Reset form and show success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
    }, 500)
  }

  return (
    <div className="contact">
      <div className="contact__container">
        {/* Hero Section */}
        <section className="contact__hero">
          <h1 className="contact__title">Get in Touch</h1>
          <p className="contact__subtitle">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </section>

        {/* Two Column Layout */}
        <div className="contact__grid">
          {/* Contact Info */}
          <aside className="contact__info">
            <div className="contact__info-card">
              <h2 className="contact__info-title">Contact Information</h2>
              <p className="contact__info-text">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="contact__details">
                <div className="contact__detail">
                  <span className="contact__icon">📧</span>
                  <div>
                    <h3 className="contact__detail-label">Email</h3>
                    <a href="mailto:fumbledhearts1@gmail.com" className="contact__detail-value">
                      fumbledhearts1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact__detail">
                  <span className="contact__icon">💬</span>
                  <div>
                    <h3 className="contact__detail-label">Response Time</h3>
                    <p className="contact__detail-value">Within 24 hours</p>
                  </div>
                </div>

                <div className="contact__detail">
                  <span className="contact__icon">🌐</span>
                  <div>
                    <h3 className="contact__detail-label">Follow Us</h3>
                    <p className="contact__detail-value">@fumbledhearts</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="contact__form-section">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">
                  Full Name <span className="contact__required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">
                  Email Address <span className="contact__required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__label">
                  Subject <span className="contact__required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">
                  Message <span className="contact__required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="contact__success">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="contact__error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
