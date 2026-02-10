import heroImage from "../assets/IMG_7379.JPEG";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <section className="hero" id="home">
      <div
        className="hero__backdrop"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Fumbled Hearts</p>
        <h1 className="hero__title">Where stories get a second chance</h1>
        <p className="hero__subtitle">
          Fumbled Hearts was born from the pieces. From heartbreak, loss, and
          moments that could’ve broken us, we chose to build instead. Every
          piece represents the flip — turning pain into purpose, scars into
          style, and setbacks into statements. This isn’t just fashion; it’s
          proof that what you fumble doesn’t define you, what you create after
          does. Worn by those who’ve felt it, lost it, and still showed up
          stronger.
        </p>
        <div className="hero__actions">
          <a className="hero__button" href="#clothing">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
