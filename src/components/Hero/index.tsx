import React from 'react'
import { FaRecycle, FaShieldAlt, FaTruck, FaLeaf } from 'react-icons/fa'
import styles from './Hero.module.scss'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const Hero: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FaRecycle />,
      title: '30+ Años',
      description: 'de experiencia en el sector'
    },
    {
      icon: <FaTruck />,
      title: 'Recolección',
      description: 'a domicilio'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Tecnología',
      description: 'de punta'
    },
    {
      icon: <FaLeaf />,
      title: 'Confidencialidad',
      description: 'garantizada'
    }
  ]

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            <span className="highlight">SALVEMOS EL PLANETA</span>
            <br />
            <span className={styles.hero__subtitle}>
              Por el futuro de nuestro planeta reciclemos
            </span>
          </h1>

          <p className={styles.hero__description}>
            Equilibrando los procesos productivos del planeta con sus recursos naturales
          </p>

          <div className={styles.hero__buttons}>
            <a href="#contact" className="btn btn--primary">
              Solicitar Servicio
            </a>
            <a href="#services" className="btn btn--secondary">
              Ver Servicios
            </a>
          </div>
        </div>

        <div className={styles.hero__features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.hero__feature}>
              <div className={styles.hero__featureIcon}>{feature.icon}</div>
              <h3 className={styles.hero__featureTitle}>{feature.title}</h3>
              <p className={styles.hero__featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
