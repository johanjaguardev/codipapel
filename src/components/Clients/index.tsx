import React from 'react'
import styles from './Clients.module.scss'

interface Client {
  name: string
  logo: string
}

const Clients: React.FC = () => {
  const clients: Client[] = [
    {
      name: 'Kimberly-Clark',
      logo: 'https://via.placeholder.com/150x80/FFF/333?text=Kimberly'
    },
    { name: 'Familia', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Familia' },
    { name: 'Drypers', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Drypers' },
    { name: 'Ekored', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Ekored' },
    { name: 'Empacor', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Empacor' },
    { name: 'Data', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Data' },
    { name: 'Arturo', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Arturo' },
    { name: 'Unilago', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Unilago' },
    { name: 'Iserra', logo: 'https://via.placeholder.com/150x80/FFF/333?text=Iserra' }
  ]

  return (
    <section id="clients" className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__header__title">NUESTROS CLIENTES</h2>
          <p className="section__header__subtitle">
            Empresas que confían en nuestros servicios
          </p>
          <div className="section__header__divider"></div>
        </div>

        <div className={styles.clients__grid}>
          {clients.map((client, index) => (
            <div key={index} className={styles.clients__client}>
              <img
                src={client.logo}
                alt={`Logo de ${client.name}`}
                className={styles.clients__logo}
                loading="lazy"
              />
              <p className={styles.clients__name}>{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
