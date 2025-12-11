import React from 'react'
import { FaWhatsapp, FaFileInvoiceDollar } from 'react-icons/fa'
import styles from './FloatingButtons.module.scss'

const FloatingButtons: React.FC = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=573025137383"
        className={styles.floatingButton}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className={styles.floatingButton__icon} />
      </a>

      <a
        href="#contact"
        className={`${styles.floatingButton} ${styles.floatingButtonQuote}`}
        aria-label="Solicitar cotización"
      >
        <FaFileInvoiceDollar className={styles.floatingButton__icon} />
        <span className={styles.floatingButton__text}>Solicitar Cotización</span>
      </a>
    </>
  )
}

export default FloatingButtons
