import React from 'react'
import {
  FaBox,
  FaWineBottle,
  FaNewspaper,
  FaCog,
  FaLeaf,
  FaRecycle,
  FaBolt,
  FaIndustry,
  FaTag,
  FaBook
} from 'react-icons/fa'
import styles from './Materials.module.scss'

interface Material {
  icon: React.ReactNode
  name: string
  color: string
}

interface FiveR {
  letter: string
  title: string
  description: string
}

const Materials: React.FC = () => {
  const materials: Material[] = [
    { icon: <FaBox />, name: 'Cartón', color: '#8D6E63' },
    { icon: <FaWineBottle />, name: 'Vidrio', color: '#4CAF50' },
    { icon: <FaNewspaper />, name: 'Periódico', color: '#2196F3' },
    { icon: <FaCog />, name: 'Metales', color: '#607D8B' },
    { icon: <FaLeaf />, name: 'Papel', color: '#FF9800' },
    { icon: <FaRecycle />, name: 'Plástico', color: '#9C27B0' },
    { icon: <FaBolt />, name: 'Plegadiza', color: '#3F51B5' },
    { icon: <FaIndustry />, name: 'HDPE', color: '#00BCD4' },
    { icon: <FaTag />, name: 'Chatarra', color: '#795548' },
    { icon: <FaBook />, name: 'Revistas', color: '#E91E63' }
  ]

  const fiveRs: FiveR[] = [
    {
      letter: 'R',
      title: 'Reemplazar',
      description: 'Sustituir por productos que den igual satisfacción'
    },
    {
      letter: 'R',
      title: 'Reutilizar',
      description: 'Utilizar de nuevo un objeto con la misma finalidad o con otra'
    },
    {
      letter: 'R',
      title: 'Recuperar',
      description: 'Volver a poner en servicio algo que ya estaba inservible'
    },
    {
      letter: 'R',
      title: 'Reducir',
      description: 'Comprar solo productos necesarios'
    },
    {
      letter: 'R',
      title: 'Reciclar',
      description:
        'Someter materiales usados a procesos de transformación para reutilización'
    }
  ]

  return (
    <section id="materials" className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__header__title">MATERIALES QUE COMERCIALIZAMOS</h2>
          <p className="section__header__subtitle">
            Trabajamos con diversos materiales reciclables para contribuir al cuidado del
            medio ambiente
          </p>
          <div className="section__header__divider"></div>
        </div>

        <div className={styles.materials__grid}>
          {materials.map((material, index) => (
            <div key={index} className={styles.materials__card}>
              <div
                className={styles.materials__cardIcon}
                style={{ color: material.color }}
              >
                {material.icon}
              </div>
              <h4 className={styles.materials__cardTitle}>{material.name}</h4>
            </div>
          ))}
        </div>

        <div className={styles.materials__fiveRs}>
          <h3 className={styles.materials__fiveRsTitle}>
            LAS 5 <span className="highlight">R</span> EN LA ECOLOGÍA
          </h3>
          <p className={styles.materials__fiveRsSubtitle}>
            En CODIPAPEL ayudamos a nuestro planeta a redirigirlo a su bienestar
          </p>

          <div className={styles.materials__fiveRsGrid}>
            {fiveRs.map((item, index) => (
              <div key={index} className={styles.materials__fiveRCard}>
                <div className={styles.materials__fiveRLetter}>{item.letter}</div>
                <h4 className={styles.materials__fiveRTitle}>{item.title}</h4>
                <p className={styles.materials__fiveRDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials
