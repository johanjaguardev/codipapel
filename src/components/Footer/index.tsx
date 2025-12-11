import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>CODIPAPEL</h4>
            <p className={styles.footer__text}>
              Somos una empresa comprometida con el medio ambiente, brindando apoyo,
              estímulo y bienestar a todos los que deciden participar en la noble
              actividad del reciclaje.
            </p>
          </div>

          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>Servicios</h4>
            <ul className={styles.footer__list}>
              <li className={styles.footer__listItem}>
                Destrucción de archivo confidencial
              </li>
              <li className={styles.footer__listItem}>Compra de material reciclable</li>
              <li className={styles.footer__listItem}>Recolección a domicilio</li>
              <li className={styles.footer__listItem}>Consultoría ambiental</li>
              <li className={styles.footer__listItem}>Destrucción de marca</li>
            </ul>
          </div>

          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>Materiales</h4>
            <ul className={styles.footer__list}>
              <li className={styles.footer__listItem}>Cartón</li>
              <li className={styles.footer__listItem}>Vidrio</li>
              <li className={styles.footer__listItem}>Plástico</li>
              <li className={styles.footer__listItem}>Metales</li>
              <li className={styles.footer__listItem}>Papel y periódico</li>
            </ul>
          </div>

          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>Contacto</h4>
            <p className={styles.footer__text}>
              Carrera 34A 10 97
              <br />
              Bogotá D.C., Colombia
              <br />
              Tel: (+57) 302 513 7383
              <br />
              Email: codipapel@yahoo.com.ar
            </p>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            &copy; {currentYear} CODIPAPEL - Todos los derechos reservados
            <br />
            Diseñado y Desarrollado por <span className="highlight">SDS Ltda</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
