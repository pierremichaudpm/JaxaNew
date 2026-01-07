"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Sticky nav on scroll - desktop only
    const handleScroll = () => {
      if (window.innerWidth > 1024 && window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIfMobile);

    // Initial checks
    checkIfMobile();
    handleScroll();

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isSticky && !isMobile ? "sticky" : ""}>
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
        <li>
          <a
            href="#accueil"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            ACCUEIL
          </a>
        </li>
        <li>
          <a
            href="#projets"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            PROJETS
          </a>
        </li>
        <li>
          <a
            href="#expertise"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            EXPERTISE
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
