import React from 'react'
import {
  FaShieldAlt,
  FaTruckLoading,
  FaUserTie,
  FaTrashAlt,
  FaIndustry,
  FaCertificate
} from 'react-icons/fa'
import styles from './Services.module.scss'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FaShieldAlt />,
      title: 'Destrucción Segura de Archivo',
      description:
        'Destruimos documentos confidenciales, los convertimos en tiras irrecuperables con certificación.'
    },
    {
      icon: <FaTruckLoading />,
      title: 'Recolección a Domicilio',
      description:
        'Para su comodidad, recogemos su material reciclable directamente en sus instalaciones.'
    },
    {
      icon: <FaUserTie />,
      title: 'Consultoría Ambiental',
      description:
        'Diseño e implementación de planes de gestión integral de residuos sólidos.'
    },
    {
      icon: <FaTrashAlt />,
      title: 'Destrucción de Marca',
      description:
        'Destrucción confidencial de papelería, publicidad, tarjetas, banners, etc.'
    },
    {
      icon: <FaIndustry />,
      title: 'Gestión de Residuos',
      description:
        'Gestión integral adecuada de residuos aprovechables y capacitaciones ambientales.'
    },
    {
      icon: <FaCertificate />,
      title: 'Productos Ecoambientales',
      description: 'Ofrecemos productos sustentables para su empresa o negocio.'
    }
  ]

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__header__title">NUESTROS SERVICIOS NOS DIFERENCIAN</h2>
          <p className="section__header__subtitle">
            Somos una empresa comprometida con el medio ambiente
          </p>
          <div className="section__header__divider"></div>
        </div>

        <div className={styles.services__grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.services__card}>
              <div className={styles.services__cardIcon}>{service.icon}</div>
              <h3 className={styles.services__cardTitle}>{service.title}</h3>
              <p className={styles.services__cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.services__cta}>
          <a href="#contact" className="btn btn--primary btn--large">
            Solicitar Información
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
