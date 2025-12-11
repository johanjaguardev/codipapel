import React from 'react'
import { FaHistory, FaBullseye, FaEye, FaHandsHelping } from 'react-icons/fa'
import styles from './About.module.scss'

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

const About: React.FC = () => {
  const values: Value[] = [
    {
      icon: <FaHistory />,
      title: 'Más de 30 años',
      description: 'de experiencia en el sector del reciclaje'
    },
    {
      icon: <FaBullseye />,
      title: 'Compromiso ambiental',
      description: 'Protección de especies en peligro de extinción'
    },
    {
      icon: <FaEye />,
      title: 'Visión integral',
      description: 'Más que reciclaje, generamos impactos ambientales positivos'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Apoyo constante',
      description: 'Estimulo y bienestar para todos los que participan en el reciclaje'
    }
  ]

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <h2 className="section__header__title">QUIÉNES SOMOS</h2>
          <p className="section__header__subtitle">Procesos que nos diferencian</p>
          <div className="section__header__divider"></div>
        </div>

        <div className={styles.about__content}>
          <div className={styles.about__text}>
            <h3 className={styles.about__title}>
              No somos solo una empresa de reciclaje
            </h3>

            <div className={styles.about__description}>
              <p>
                Somos una empresa Colombiana comprometida con la conservación del medio
                ambiente y la protección de las especies en peligro de extinción. Queremos
                contribuir y generar impactos ambientales positivos que ayuden
                considerablemente al planeta, influyendo en las empresas y la normatividad
                vigente.
              </p>

              <p>
                Nuestra misión es equilibrar los procesos productivos del planeta con sus
                recursos naturales, brindando apoyo, estímulo y bienestar a todos los que
                deciden participar en la noble actividad del reciclaje.
              </p>
            </div>

            <div className={styles.about__values}>
              {values.map((value, index) => (
                <div key={index} className={styles.about__value}>
                  <div className={styles.about__valueIcon}>{value.icon}</div>
                  <div className={styles.about__valueContent}>
                    <h4 className={styles.about__valueTitle}>{value.title}</h4>
                    <p className={styles.about__valueDescription}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.about__image}>
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Proceso de reciclaje en CODIPAPEL"
              className={styles.about__imageElement}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
