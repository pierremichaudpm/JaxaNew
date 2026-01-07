"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Les Anciens",
    year: "2019",
    type: "Production Aquatique",
    image: "/images/posters/les-anciens.png",
    alt: "Les Anciens",
  },
  {
    id: 2,
    title: "Cibles Rouges",
    year: "2018",
    type: "Production Aquatique",
    image: "/images/posters/cibles-rouges.png",
    alt: "Cibles Rouges",
  },
  {
    id: 3,
    title: "DysMorphia",
    year: "2017",
    type: "Production Aquatique",
    image: "/images/posters/dysmorphia.png",
    alt: "DysMorphia",
  },
  {
    id: 4,
    title: "Oculus",
    year: "2016",
    type: "Production Aquatique",
    image: "/images/posters/oculus.png",
    alt: "Oculus",
  },
  {
    id: 5,
    title: "Serie AR",
    year: "2014",
    type: "Production Aquatique",
    image: "/images/posters/serie-ar.png",
    alt: "Serie AR",
  },
  {
    id: 6,
    title: "Joseph Rouleau",
    year: "2006",
    type: "Production Aquatique",
    image: "/images/posters/joseph-rouleau.png",
    alt: "Joseph Rouleau",
  },
];

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY - rect.top;
        setScrollY(scrollPosition);

        // Update CSS variable for parallax effect
        document.documentElement.style.setProperty(
          "--scroll-y",
          `${scrollPosition}px`,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="projects-section" id="projets" ref={sectionRef}>
      <div className="projects-title-vertical">PROJETS</div>
      <div className="section-header-projects">
        <h2 className="section-title-projects">PROJETS</h2>
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card parallax-${index + 1}`}
            >
              <div className="project-image">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={project.id <= 2}
                  />
                </div>
                <div className="project-number">
                  {String(project.id).padStart(2, "0")}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-meta">
                    {project.year} • {project.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
