import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.scss'

interface MenuItem {
  name: string
  href: string
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menuItems: MenuItem[] = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Materiales', href: '#materials' },
    { name: 'Quiénes Somos', href: '#about' },
    { name: 'Clientes', href: '#clients' },
    { name: 'Contacto', href: '#contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      {/* Barra superior de contacto */}
      <div className={styles.header__topbar}>
        <div className="container">
          <div className={styles.header__contact}>
            <div className={styles.header__contactItem}>
              <FaPhone className={styles.header__contactIcon} />
              <span className={styles.header__contactText}>
                (+57) 302 513 7383 - (+57) 310 346 6271
              </span>
            </div>
            <div className={styles.header__contactItem}>
              <FaEnvelope className={styles.header__contactIcon} />
              <span className={styles.header__contactText}>codipapel@yahoo.com.ar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className={styles.header__nav}>
        <div className="container">
          <div className={styles.header__logo}>
            <img
              src="https://via.placeholder.com/200x60/2E7D32/FFFFFF?text=CODIPAPEL"
              alt="CODIPAPEL Logo"
              className={styles.header__logoImage}
            />
          </div>

          <button
            className={styles.header__menuToggle}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={`${styles.header__menu} ${isMenuOpen ? styles.header__menuOpen : ''}`}
          >
            {menuItems.map((item) => (
              <li key={item.name} className={styles.header__menuItem}>
                <a
                  href={item.href}
                  className={styles.header__menuLink}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
