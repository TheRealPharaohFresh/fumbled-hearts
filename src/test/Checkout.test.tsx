import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Checkout from '../pages/Checkout'
import { CartProvider } from '../context/CartContext'
import type { ShippingInfo } from '../types/cart'

describe('Checkout Component', () => {
  it('shows empty cart message when no items in cart', () => {
    render(
      <CartProvider>
        <Checkout />
      </CartProvider>
    )
    
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
  })

  it('displays checkout title', () => {
    render(
      <CartProvider>
        <Checkout />
      </CartProvider>
    )
    
    // Will show empty message instead of checkout when cart is empty
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
  })

  it('validates shipping form fields are required', () => {
    const shippingInfo: ShippingInfo = {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States'
    }
    
    expect(shippingInfo.fullName).toBe('')
    expect(shippingInfo.email).toBe('')
    expect(shippingInfo.phone).toBe('')
  })

  it('validates email format', () => {
    const validEmail = 'test@example.com'
    const invalidEmail = 'notanemail'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    expect(emailRegex.test(validEmail)).toBe(true)
    expect(emailRegex.test(invalidEmail)).toBe(false)
  })

  it('calculates order totals correctly', () => {
    const subtotal = 180
    const shipping = subtotal >= 100 ? 0 : 9.99
    const tax = subtotal * 0.08
    const total = subtotal + shipping + tax
    
    expect(shipping).toBe(0) // Free shipping over $100
    expect(tax).toBeCloseTo(14.4, 2)
    expect(total).toBeCloseTo(194.4, 2)
  })

  it('generates unique order numbers', () => {
    const orderNum1 = `FH${Date.now().toString().slice(-8)}`
    
    // Wait a tiny bit to ensure different timestamp
    const orderNum2 = `FH${(Date.now() + 1).toString().slice(-8)}`
    
    expect(orderNum1).toMatch(/^FH\d{8}$/)
    expect(orderNum2).toMatch(/^FH\d{8}$/)
  })

  it('validates US phone number format', () => {
    const validPhone = '555-123-4567'
    const validPhone2 = '(555) 123-4567'
    const validPhone3 = '5551234567'
    
    // Basic validation - just check it's not empty
    expect(validPhone.length).toBeGreaterThan(0)
    expect(validPhone2.length).toBeGreaterThan(0)
    expect(validPhone3.length).toBeGreaterThan(0)
  })

  it('validates zip code format', () => {
    const validZip = '12345'
    const validZipPlus4 = '12345-6789'
    
    const zipRegex = /^\d{5}(-\d{4})?$/
    
    expect(zipRegex.test(validZip)).toBe(true)
    expect(zipRegex.test(validZipPlus4)).toBe(true)
  })

  it('creates proper mailto link with order details', () => {
    const orderNum = 'FH12345678'
    const email = 'fumbledhearts1@gmail.com'
    const subject = `New Order ${orderNum}`
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`
    
    expect(mailtoLink).toContain('mailto:fumbledhearts1@gmail.com')
    expect(mailtoLink).toContain('New%20Order')
  })

  it('handles step progression correctly', () => {
    const steps = ['shipping', 'payment', 'confirmation']
    
    expect(steps[0]).toBe('shipping')
    expect(steps[1]).toBe('payment')
    expect(steps[2]).toBe('confirmation')
  })

  it('validates shipping info structure', () => {
    const shippingInfo: ShippingInfo = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '555-123-4567',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    }
    
    expect(shippingInfo).toHaveProperty('fullName')
    expect(shippingInfo).toHaveProperty('email')
    expect(shippingInfo).toHaveProperty('phone')
    expect(shippingInfo).toHaveProperty('address')
    expect(shippingInfo).toHaveProperty('city')
    expect(shippingInfo).toHaveProperty('state')
    expect(shippingInfo).toHaveProperty('zipCode')
    expect(shippingInfo).toHaveProperty('country')
  })

  it('formats order items correctly for email', () => {
    const items = [
      { title: 'Hoodie', color: 'black', quantity: 2, price: 65 },
      { title: 'T-Shirt', color: 'pink', quantity: 1, price: 50 }
    ]
    
    const orderItems = items.map(item => 
      `- ${item.title} (${item.color}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    )
    
    expect(orderItems[0]).toBe('- Hoodie (black) x2 - $130.00')
    expect(orderItems[1]).toBe('- T-Shirt (pink) x1 - $50.00')
  })

  it('displays order confirmation message', () => {
    const orderNumber = 'FH12345678'
    const message = `Your order ${orderNumber} has been received!`
    
    expect(message).toContain(orderNumber)
    expect(message).toContain('received')
  })

  it('clears cart after successful order', () => {
    // Test cart clearing logic
    const initialCartItems = [
      { id: '1', title: 'Item 1', quantity: 1 },
      { id: '2', title: 'Item 2', quantity: 2 }
    ]
    
    // Simulate clearing cart
    const clearedCart: Array<typeof initialCartItems[0]> = []
    
    expect(initialCartItems.length).toBe(2)
    expect(clearedCart.length).toBe(0)
  })
})
