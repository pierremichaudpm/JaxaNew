"use client";

import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Simple mobile detection
  if (typeof window !== "undefined") {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    if (isMobile === false) {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav>
      <div className="logo">JAXA</div>

      {/* Burger menu for mobile */}
      <button
        className="burger-menu"
        onClick={toggleMenu}
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
      >
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {isMobile && (
          <li className="mobile-menu-header">
            <button
              className="mobile-close-btn"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <span className="close-line"></span>
              <span className="close-line"></span>
            </button>
          </li>
        )}
        <li>
          <a href="#accueil" className="nav-link" onClick={handleNavClick}>
            ACCUEIL
          </a>
        </li>
        <li>
          <a href="#projets" className="nav-link" onClick={handleNavClick}>
            PROJETS
          </a>
        </li>
        <li>
          <a href="#expertise" className="nav-link" onClick={handleNavClick}>
            EXPERTISE
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
