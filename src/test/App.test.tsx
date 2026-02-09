import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('renders the main application structure', () => {
    const { container } = render(<App />)
    
    // Check that the app has content
    expect(container.firstChild).toBeTruthy()
  })

  it('includes the Navbar component', () => {
    const { container } = render(<App />)
    
    // Look for nav element
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders the application layout', () => {
    const { container } = render(<App />)
    
    // Verify the root structure exists
    expect(container.querySelector('#root, .app, main')).toBeTruthy()
  })

  it('mounts successfully', () => {
    const { unmount } = render(<App />)
    
    // Should unmount without errors
    expect(() => unmount()).not.toThrow()
  })
})
