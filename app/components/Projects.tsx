'use client'

import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Les Anciens',
    year: '2019',
    type: 'Production Aquatique',
    image: '/images/posters/les-anciens.png',
    alt: 'Les Anciens'
  },
  {
    id: 2,
    title: 'Cibles Rouges',
    year: '2018',
    type: 'Production Aquatique',
    image: '/images/posters/cibles-rouges.png',
    alt: 'Cibles Rouges'
  },
  {
    id: 3,
    title: 'DysMorphia',
    year: '2017',
    type: 'Production Aquatique',
    image: '/images/posters/dysmorphia.png',
    alt: 'DysMorphia'
  },
  {
    id: 4,
    title: 'Oculus',
    year: '2016',
    type: 'Production Aquatique',
    image: '/images/posters/oculus.png',
    alt: 'Oculus'
  },
  {
    id: 5,
    title: 'Serie AR',
    year: '2014',
    type: 'Production Aquatique',
    image: '/images/posters/serie-ar.png',
    alt: 'Serie AR'
  },
  {
    id: 6,
    title: 'Joseph Rouleau',
    year: '2006',
    type: 'Production Aquatique',
    image: '/images/posters/joseph-rouleau.png',
    alt: 'Joseph Rouleau'
  }
]

export default function Projects() {
  return (
    <section className="projects-section" id="projets">
      <div className="projects-title-vertical">PROJETS</div>
      <div className="section-header-projects">
        <h2 className="section-title-projects">PROJETS</h2>
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="project-number">{String(project.id).padStart(2, '0')}</div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-meta">{project.year} • {project.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
