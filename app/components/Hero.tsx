'use client'

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      {/* VIDÉO IMMERSIVE */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="color-strip strip-1"></div>
        <div className="color-strip strip-2"></div>
        <div className="color-strip strip-3"></div>
      </div>
      <div className="floating-shape shape-circle"></div>
      <div className="floating-shape shape-square"></div>
      <div className="hero-content">
        <h1 className="hero-title">JAXA</h1>
        <p className="hero-subtitle">Nous créons des expériences immersives où culture, humain et créativité rayonnent.</p>
        <p className="hero-tagline">Nos expériences touchent, inspirent et rassemblent.</p>
      </div>
    </section>
  )
}
