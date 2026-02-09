import heroImage from '../assets/IMG_7379.JPEG'
import '../styles/HomePage.css'

export default function HomePage() {
  return (
    <section className="hero" id="home">
      <div className="hero__backdrop" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Fumbled Hearts</p>
        <h1 className="hero__title">Where stories get a second chance</h1>
        <p className="hero__subtitle">
          At Fumbled Hearts, we believe in challenging the status quo and pushing boundaries. Our mission is clear: to
          redefine the fashion industry and create a brand that resonates with the modern generation. We strive to embody
          the spirit of entrepreneurship, embracing the limitless possibilities that the digital age offers.
        </p>
        <div className="hero__actions">
          <a className="hero__button" href="#clothing">Shop Now</a>
        </div>
      </div>
    </section>
  )
}
