import { useState } from 'react'
import type { FormEvent } from 'react'
import { useCart } from '../context/CartContext'
import type { ShippingInfo } from '../types/cart'
import '../styles/Checkout.css'

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping')
  const [orderNumber, setOrderNumber] = useState<string>('')

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  })

  const shipping = subtotal >= 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleShippingSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Generate order number
    const orderNum = `FH${Date.now().toString().slice(-8)}`
    setOrderNumber(orderNum)

    // Create mailto link with order details
    const emailBody = `
New Order: ${orderNum}

CUSTOMER INFORMATION:
Name: ${shippingInfo.fullName}
Email: ${shippingInfo.email}
Phone: ${shippingInfo.phone}

SHIPPING ADDRESS:
${shippingInfo.address}
${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zipCode}
${shippingInfo.country}

ORDER ITEMS:
${items.map((item) => `- ${item.title} (${item.color}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}

ORDER SUMMARY:
Subtotal: $${subtotal.toFixed(2)}
Shipping: ${shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
Tax: $${tax.toFixed(2)}
Total: $${total.toFixed(2)}

Please process this order and send payment instructions.
`

    const mailtoLink = `mailto:fumbledhearts1@gmail.com?subject=New Order ${orderNum}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    // Clear cart and show confirmation
    clearCart()
    setStep('confirmation')
  }

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="checkout">
        <div className="checkout__container">
          <div className="checkout__empty">
            <span className="checkout__empty-icon">🛒</span>
            <h2 className="checkout__empty-title">Your cart is empty</h2>
            <p className="checkout__empty-text">Add some items to your cart to checkout</p>
            <a href="#clothing" className="checkout__empty-btn">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="checkout__container">
        <h1 className="checkout__title">Checkout</h1>

        <div className="checkout__progress">
          <div className={`checkout__step ${step === 'shipping' ? 'is-active' : step === 'payment' || step === 'confirmation' ? 'is-complete' : ''}`}>
            <span className="checkout__step-number">1</span>
            <span className="checkout__step-label">Shipping</span>
          </div>
          <div className="checkout__step-line" />
          <div className={`checkout__step ${step === 'payment' ? 'is-active' : step === 'confirmation' ? 'is-complete' : ''}`}>
            <span className="checkout__step-number">2</span>
            <span className="checkout__step-label">Payment</span>
          </div>
          <div className="checkout__step-line" />
          <div className={`checkout__step ${step === 'confirmation' ? 'is-active' : ''}`}>
            <span className="checkout__step-number">3</span>
            <span className="checkout__step-label">Confirmation</span>
          </div>
        </div>

        <div className="checkout__grid">
          <div className="checkout__main">
            {step === 'shipping' && (
              <form className="checkout__form" onSubmit={handleShippingSubmit}>
                <h2 className="checkout__form-title">Shipping Information</h2>

                <div className="checkout__form-group">
                  <label htmlFor="fullName" className="checkout__label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={shippingInfo.fullName}
                    onChange={handleShippingChange}
                    className="checkout__input"
                    required
                  />
                </div>

                <div className="checkout__form-row">
                  <div className="checkout__form-group">
                    <label htmlFor="email" className="checkout__label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      className="checkout__input"
                      required
                    />
                  </div>

                  <div className="checkout__form-group">
                    <label htmlFor="phone" className="checkout__label">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      className="checkout__input"
                      required
                    />
                  </div>
                </div>

                <div className="checkout__form-group">
                  <label htmlFor="address" className="checkout__label">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    className="checkout__input"
                    required
                  />
                </div>

                <div className="checkout__form-row">
                  <div className="checkout__form-group">
                    <label htmlFor="city" className="checkout__label">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      className="checkout__input"
                      required
                    />
                  </div>

                  <div className="checkout__form-group">
                    <label htmlFor="state" className="checkout__label">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      className="checkout__input"
                      required
                    />
                  </div>

                  <div className="checkout__form-group">
                    <label htmlFor="zipCode" className="checkout__label">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleShippingChange}
                      className="checkout__input"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="checkout__submit">
                  Continue to Payment
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form className="checkout__form" onSubmit={handlePaymentSubmit}>
                <h2 className="checkout__form-title">Payment Method</h2>

                <div className="checkout__payment-notice">
                  <span className="checkout__payment-icon">📧</span>
                  <div>
                    <h3 className="checkout__payment-notice-title">Email Order Confirmation</h3>
                    <p className="checkout__payment-notice-text">
                      Click "Place Order" to send your order details via email. We'll reply with payment instructions and shipping confirmation within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="checkout__summary-card">
                  <h3>Shipping To:</h3>
                  <p className="checkout__summary-text">
                    {shippingInfo.fullName}<br />
                    {shippingInfo.address}<br />
                    {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br />
                    {shippingInfo.email}
                  </p>
                </div>

                <div className="checkout__form-actions">
                  <button
                    type="button"
                    className="checkout__back"
                    onClick={() => setStep('shipping')}
                  >
                    ← Back
                  </button>
                  <button type="submit" className="checkout__submit">
                    Place Order
                  </button>
                </div>
              </form>
            )}

            {step === 'confirmation' && (
              <div className="checkout__confirmation">
                <div className="checkout__confirmation-icon">✓</div>
                <h2 className="checkout__confirmation-title">Order Placed Successfully!</h2>
                <p className="checkout__confirmation-order">
                  Order Number: <strong>{orderNumber}</strong>
                </p>
                <p className="checkout__confirmation-text">
                  Thank you for your order! We've sent the order details to your email.
                  You'll receive payment instructions and shipping confirmation within 24 hours.
                </p>
                <a href="#home" className="checkout__confirmation-btn">
                  Continue Shopping
                </a>
              </div>
            )}
          </div>

          {step !== 'confirmation' && (
            <aside className="checkout__sidebar">
              <div className="checkout__order-summary">
                <h3 className="checkout__order-title">Order Summary</h3>

                <div className="checkout__order-items">
                  {items.map((item) => (
                    <div key={item.id} className="checkout__order-item">
                      <img src={item.image} alt={item.title} className="checkout__order-img" />
                      <div className="checkout__order-info">
                        <p className="checkout__order-name">{item.title}</p>
                        <p className="checkout__order-details">
                          {item.color} • Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="checkout__order-price">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="checkout__order-totals">
                  <div className="checkout__order-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="checkout__order-row">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="checkout__order-row">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="checkout__order-row checkout__order-row--total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
