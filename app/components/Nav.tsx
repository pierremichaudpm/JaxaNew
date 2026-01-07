'use client'

import { useEffect } from 'react'

export default function Nav() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href) {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <nav>
      <div className="logo">JAXA</div>
      <ul className="nav-links">
        <li><a href="#accueil" className="nav-link">ACCUEIL</a></li>
        <li><a href="#projets" className="nav-link">PROJETS</a></li>
        <li><a href="#expertise" className="nav-link">EXPERTISE</a></li>
        <li><a href="#contact" className="nav-link">CONTACT</a></li>
      </ul>
    </nav>
  )
}
