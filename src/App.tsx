import './styles/App.css'
import Navbar from './components/Navbar'
import ClothingStore from './pages/ClothingStore'
import HomePage from './pages/HomePage'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'

function App() {
  const [route, setRoute] = useState<string>(() => (window.location.hash || '#home').replace('#', ''))

  useEffect(() => {
    const onHashChange = () => setRoute((window.location.hash || '#home').replace('#', ''))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Navbar />
      <main className="app-shell">
        {route === 'clothing' ? (
          <ClothingStore />
        ) : route === 'testimonials' ? (
          <Testimonials />
        ) : route === 'contact' ? (
          <Contact />
        ) : (
          <HomePage />
        )}
      </main>
    </>
  )
}

export default App
