import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/HomePage'

describe('HomePage Component', () => {
  it('renders the home page without crashing', () => {
    render(<HomePage />)
    
    // Check for heading instead of role since section doesn't have accessible role
    const heading = screen.getByRole('heading', { name: /Where stories get a second chance/i })
    expect(heading).toBeInTheDocument()
  })

  it('displays the main heading or welcome message', () => {
    render(<HomePage />)
    
    // Check for any heading on the page
    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders with proper semantic HTML structure', () => {
    const { container } = render(<HomePage />)
    
    // Check for semantic elements - HomePage uses section instead of main
    const section = container.querySelector('section')
    expect(section).toBeTruthy()
  })

  it('displays brand content', () => {
    render(<HomePage />)
    
    // Look for Fumbled Hearts brand mention - there are multiple
    const brandMentions = screen.getAllByText(/Fumbled Hearts/i)
    expect(brandMentions.length).toBeGreaterThan(0)
  })

  it('renders without errors', () => {
    const { container } = render(<HomePage />)
    expect(container.firstChild).toBeTruthy()
  })
})
