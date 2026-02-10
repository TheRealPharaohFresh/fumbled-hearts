import { useCart } from '../context/CartContext'
import '../styles/Cart.css'

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, subtotal } = useCart()

  if (!isOpen) return null

  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 9.99) : 0
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <aside className="cart">
        <div className="cart__header">
          <h2 className="cart__title">
            Shopping Cart <span className="cart__count">({itemCount})</span>
          </h2>
          <button className="cart__close" onClick={closeCart} aria-label="Close cart">
            ✕
          </button>
        </div>

        <div className="cart__body">
          {items.length === 0 ? (
            <div className="cart__empty">
              <span className="cart__empty-icon">🛒</span>
              <p className="cart__empty-text">Your cart is empty</p>
              <button className="cart__empty-btn" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart__items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item__img" />
                  <div className="cart-item__info">
                    <h3 className="cart-item__title">{item.title}</h3>
                    <p className="cart-item__color">{item.color}</p>
                    <p className="cart-item__price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item__actions">
                    <div className="cart-item__quantity">
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="cart-item__qty">{item.quantity}</span>
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart__footer">
            <div className="cart__summary">
              <div className="cart__summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cart__summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="cart__summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="cart__summary-row cart__summary-row--total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            {subtotal < 100 && subtotal > 0 && (
              <p className="cart__free-shipping">
                Add ${(100 - subtotal).toFixed(2)} more for FREE shipping!
              </p>
            )}
            <a href="#checkout" className="cart__checkout" onClick={closeCart}>
              Proceed to Checkout
            </a>
          </div>
        )}
      </aside>
    </>
  )
}
