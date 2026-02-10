import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ClothingStore from '../pages/ClothingStore'
import { CartProvider } from '../context/CartContext'

describe('ClothingStore Page', () => {
  it('renders the store heading', () => {
    render(
      <CartProvider>
        <ClothingStore />
      </CartProvider>
    )
    
    const heading = screen.getByRole('heading', { name: /Fumbled Hearts Collection/i })
    expect(heading).toBeInTheDocument()
  })

  it('displays multiple product cards', () => {
    render(
      <CartProvider>
        <ClothingStore />
      </CartProvider>
    )
    
    // Check for product titles
    expect(screen.getByText(/Fumbled Hearts Jacket/i)).toBeInTheDocument()
    expect(screen.getByText(/Fumbled Hearts Track \(Women\)/i)).toBeInTheDocument()
    expect(screen.getByText(/Fumbled Hearts T-Shirts/i)).toBeInTheDocument()
  })

  it('renders hoodies products', () => {
    render(
      <CartProvider>
        <ClothingStore />
      </CartProvider>
    )
    
    expect(screen.getByText('Fumbled Hearts Hoodies')).toBeInTheDocument()
    expect(screen.getByText('Fumbled Hearts Hoodies Volume 2')).toBeInTheDocument()
  })

  it('displays product prices correctly', () => {
    render(
      <CartProvider>
        <ClothingStore />
      </CartProvider>
    )
    
    // Check if prices are displayed
    const prices = screen.getAllByText(/\$\d+\.?\d*/i)
    expect(prices.length).toBeGreaterThan(0)
  })

  it('renders the store with background image', () => {
    const { container } = render(
      <CartProvider>
        <ClothingStore />
      </CartProvider>
    )
    
    const backdrop = container.querySelector('.store__backdrop')
    expect(backdrop).toBeInTheDocument()
  })

  it('contains the store grid layout', () => {
    const { container } = render(
      <CartProvider>
        <ClothingStore />
      </CartProvider>
    )
    
    const grid = container.querySelector('.store__grid')
    expect(grid).toBeInTheDocument()
  })
})
