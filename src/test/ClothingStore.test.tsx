import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ClothingStore from '../pages/ClothingStore'

describe('ClothingStore Page', () => {
  it('renders the store heading', () => {
    render(<ClothingStore />)
    
    const heading = screen.getByRole('heading', { name: /Fumbled Hearts Collection/i })
    expect(heading).toBeInTheDocument()
  })

  it('displays multiple product cards', () => {
    render(<ClothingStore />)
    
    // Check for product titles
    expect(screen.getByText(/Fumbled Hearts Jacket/i)).toBeInTheDocument()
    expect(screen.getByText(/Fumbled Hearts Track \(Women\)/i)).toBeInTheDocument()
    expect(screen.getByText(/Fumbled Hearts T-Shirts/i)).toBeInTheDocument()
  })

  it('renders hoodies products', () => {
    render(<ClothingStore />)
    
    expect(screen.getByText('Fumbled Hearts Hoodies')).toBeInTheDocument()
    expect(screen.getByText('Fumbled Hearts Hoodies Volume 2')).toBeInTheDocument()
  })

  it('displays product prices correctly', () => {
    render(<ClothingStore />)
    
    // Check if prices are displayed
    const prices = screen.getAllByText(/\$\d+\.?\d*/i)
    expect(prices.length).toBeGreaterThan(0)
  })

  it('renders the store with background image', () => {
    const { container } = render(<ClothingStore />)
    
    const backdrop = container.querySelector('.store__backdrop')
    expect(backdrop).toBeInTheDocument()
  })

  it('contains the store grid layout', () => {
    const { container } = render(<ClothingStore />)
    
    const grid = container.querySelector('.store__grid')
    expect(grid).toBeInTheDocument()
  })
})
