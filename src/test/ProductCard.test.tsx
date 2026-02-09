import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../components/ProductCard'

describe('ProductCard Component', () => {
  const mockImagesByColor = {
    'black': '/images/black.png',
    'pink': '/images/pink.png',
    'blue': '/images/blue.png',
  }

  it('renders product card with title and price', () => {
    render(
      <ProductCard
        title="Test Product"
        price={50.00}
        imagesByColor={mockImagesByColor}
      />
    )

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$50.00')).toBeInTheDocument()
  })

  it('displays the selected color image', () => {
    render(
      <ProductCard
        title="Test Product"
        price={50.00}
        imagesByColor={mockImagesByColor}
      />
    )

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', expect.stringContaining('Test Product'))
  })

  it('shows out of stock when no image available for selected color', () => {
    render(
      <ProductCard
        title="Test Product"
        price={50.00}
        imagesByColor={{ 'red': undefined }}
      />
    )

    expect(screen.getByText('Out of stock')).toBeInTheDocument()
  })

  it('changes color when swatch is clicked', () => {
    render(
      <ProductCard
        title="Test Product"
        price={50.00}
        imagesByColor={mockImagesByColor}
      />
    )

    const pinkButton = screen.getByLabelText('Pink')
    fireEvent.click(pinkButton)
    
    expect(pinkButton).toHaveAttribute('aria-pressed', 'true')
  })

  it('calls onAddToCart when add to cart button is clicked', () => {
    const handleAddToCart = vi.fn()
    
    render(
      <ProductCard
        title="Test Product"
        price={50.00}
        imagesByColor={mockImagesByColor}
        onAddToCart={handleAddToCart}
      />
    )

    const addButton = screen.getByRole('button', { name: /Add to cart/i })
    fireEvent.click(addButton)

    expect(handleAddToCart).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Test Product',
        price: 50.00,
        color: expect.any(String),
      })
    )
  })

  it('disables add to cart button when out of stock', () => {
    render(
      <ProductCard
        title="Test Product"
        price={50.00}
        imagesByColor={{ 'red': undefined }}
      />
    )

    const addButton = screen.getByRole('button', { name: /Add to cart/i })
    expect(addButton).toBeDisabled()
  })
})
