"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Les Anciens",
    year: "2019",
    type: "",
    image: "/images/posters/les-anciens.png",
    alt: "Les Anciens",
  },
  {
    id: 2,
    title: "Cibles Rouges",
    year: "2018",
    type: "",
    image: "/images/posters/cibles-rouges.png",
    alt: "Cibles Rouges",
  },
  {
    id: 3,
    title: "DysMorphia",
    year: "2017",
    type: "",
    image: "/images/posters/dysmorphia.png",
    alt: "DysMorphia",
  },
  {
    id: 4,
    title: "Oculus",
    year: "2016",
    type: "",
    image: "/images/posters/oculus.png",
    alt: "Oculus",
  },
  {
    id: 5,
    title: "Serie AR",
    year: "2014",
    type: "",
    image: "/images/posters/serie-ar.png",
    alt: "Serie AR",
  },
  {
    id: 6,
    title: "Joseph Rouleau",
    year: "2006",
    type: "",
    image: "/images/posters/joseph-rouleau.png",
    alt: "Joseph Rouleau",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollPosition = window.scrollY - sectionTop;

        // Update CSS variable for desktop parallax
        document.documentElement.style.setProperty(
          "--scroll-y",
          `${scrollPosition}`,
        );

        // Mobile: Direct transform application
        if (isMobile && cardsRef.current.length > 0) {
          const rotations = [-3, 2, -2, 3, -4, 2];
          const speeds = [0.1, 0.08, 0.09, 0.12, 0.07, 0.1];

          cardsRef.current.forEach((card, index) => {
            if (card) {
              const movement = scrollPosition * speeds[index];
              const rotation = rotations[index];
              card.style.transform = `rotate(${rotation}deg) translateY(${movement}px)`;
            }
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

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
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
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
                  <p className="project-meta">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
