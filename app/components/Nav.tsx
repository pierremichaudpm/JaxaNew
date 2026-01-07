"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Smooth scroll for navigation links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); // Close menu after clicking a link on mobile
          }
        }
      }
    };

    // Sticky nav on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <div className="logo">JAXA</div>

      {/* Burger menu for mobile */}
      <button
        className="burger-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#accueil" className="nav-link">
            ACCUEIL
          </a>
        </li>
        <li>
          <a href="#projets" className="nav-link">
            PROJETS
          </a>
        </li>
        <li>
          <a href="#expertise" className="nav-link">
            EXPERTISE
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
