'use client'

const expertiseItems = [
  {
    id: 1,
    number: '01',
    title: 'IDÉATION CRÉATION',
    description: 'Révélation du plein potentiel des créateurs et des entreprises grâce à des stratégies novatrices, adaptées et visionnaires.',
    items: ['Stratégies innovantes', 'Solutions adaptées', 'Vision à long terme'],
    className: 'expertise-1'
  },
  {
    id: 2,
    number: '02',
    title: 'ADMINISTRATION PROJET',
    description: 'Accompagnement complet des projets créatifs de la conception à la réalisation.',
    items: ['Gestion complète', 'Suivi personnalisé', 'Coordination d\'équipe'],
    className: 'expertise-2'
  },
  {
    id: 3,
    number: '03',
    title: 'EXPERTISE NUMÉRIQUE',
    description: 'Optimisation de la présence numérique pour maximiser l\'impact et la visibilité.',
    items: ['Stratégie digitale', 'Optimisation web', 'Analyse de performance'],
    className: 'expertise-3'
  }
]

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      {expertiseItems.map((item) => (
        <div key={item.id} className={`expertise-block ${item.className}`}>
          <div className="expertise-content">
            <div className="expertise-number">{item.number}</div>
            <h3 className="expertise-title">{item.title}</h3>
            <p className="expertise-description">{item.description}</p>
            <ul className="expertise-list">
              {item.items.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
