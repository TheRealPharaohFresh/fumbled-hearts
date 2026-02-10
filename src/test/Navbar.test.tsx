import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'
import { CartProvider } from '../context/CartContext'

// Mock window.location
Object.defineProperty(window, 'location', {
  writable: true,
  value: { pathname: '/' },
})

describe('Navbar Component', () => {
  it('renders the Fumbled Hearts logo/brand', () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    )
    
    const brandElement = screen.getByText(/Fumbled Hearts/i)
    expect(brandElement).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    )
    
    // Check for common navigation items
    const homeLink = screen.getByRole('link', { name: /home/i })
    const arrivalsLink = screen.getByRole('link', { name: /new arrivals/i })
    
    expect(homeLink).toBeInTheDocument()
    expect(arrivalsLink).toBeInTheDocument()
  })

  it('displays navigation links with correct href attributes', () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    )
    
    const homeLink = screen.getByRole('link', { name: /home/i })
    const arrivalsLink = screen.getByRole('link', { name: /new arrivals/i })
    
    expect(homeLink).toHaveAttribute('href', '#home')
    expect(arrivalsLink).toHaveAttribute('href', '#clothing')
  })

  it('renders the navbar with proper structure', () => {
    const { container } = render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    )
    
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })

  it('contains contact and testimonials links', () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    )
    
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /testimonials/i })).toBeInTheDocument()
  })
})
