import logo from '../assets/FumbledHearts Website Logo.png'
import '../styles/Navbar.css'
import { useCart } from '../hooks/useCart'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'New Arrivals', href: '#clothing' },
  // { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { toggleCart, itemCount } = useCart()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <nav className="navbar__links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} className="navbar__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button 
          className="navbar__cart" 
          onClick={toggleCart}
          aria-label={`Shopping cart with ${itemCount} items`}
        >
          🛒
          {itemCount > 0 && <span className="navbar__cart-badge">{itemCount}</span>}
        </button>

        <div className="navbar__logo" aria-label="Fumbled Hearts logo">
          <img src={logo} alt="Fumbled Hearts logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Fumbled Hearts</span>
        </div>
      </div>
    </header>
  )
}
