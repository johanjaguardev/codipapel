import React, { useState, type FormEvent } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
import styles from './Contact.module.scss'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const services = [
    'Destrucción de archivo',
    'Recolección a domicilio',
    'Compra de material reciclable',
    'Consultoría ambiental',
    'Destrucción de marca',
    'Otro servicio'
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por contactarnos! Nos pondremos en contacto pronto.')

    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__header__title">CONTÁCTENOS</h2>
          <p className="section__header__subtitle">
            Empecemos a reciclar ahora. Un asesor experto lo guiará en el proceso.
          </p>
          <div className="section__header__divider"></div>
        </div>

        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <h3 className={styles.contact__infoTitle}>Información de Contacto</h3>

            <div className={styles.contact__infoItem}>
              <div className={styles.contact__infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.contact__infoText}>
                <h4 className={styles.contact__infoLabel}>Dirección</h4>
                <p className={styles.contact__infoValue}>Carrera 34A 10 97 Bogotá D.C.</p>
              </div>
            </div>

            <div className={styles.contact__infoItem}>
              <div className={styles.contact__infoIcon}>
                <FaPhone />
              </div>
              <div className={styles.contact__infoText}>
                <h4 className={styles.contact__infoLabel}>Teléfonos</h4>
                <p className={styles.contact__infoValue}>(+57) 302 513 7383</p>
                <p className={styles.contact__infoValue}>(+57) 310 346 6271</p>
              </div>
            </div>

            <div className={styles.contact__infoItem}>
              <div className={styles.contact__infoIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.contact__infoText}>
                <h4 className={styles.contact__infoLabel}>Email</h4>
                <p className={styles.contact__infoValue}>codipapel@yahoo.com.ar</p>
              </div>
            </div>

            <div className={styles.contact__social}>
              <h4 className={styles.contact__socialTitle}>Síguenos en redes sociales</h4>
              <div className={styles.contact__socialIcons}>
                <a
                  href="https://facebook.com/codipapelltda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contact__socialLink}
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com/codipapelltda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contact__socialLink}
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/codipapelltda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contact__socialLink}
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contact__form}>
            <h3 className={styles.contact__formTitle}>
              Solicitar Información o Cotización
            </h3>
            <form onSubmit={handleSubmit} className={styles.contact__formElement}>
              <div className={styles.contact__formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.contact__input}
                />
              </div>

              <div className={styles.contact__formRow}>
                <div className={styles.contact__formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.contact__input}
                  />
                </div>

                <div className={styles.contact__formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.contact__input}
                  />
                </div>
              </div>

              <div className={styles.contact__formGroup}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={styles.contact__select}
                >
                  <option value="">Seleccione un servicio *</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.contact__formGroup}>
                <textarea
                  name="message"
                  placeholder="Mensaje o detalles adicionales"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={styles.contact__textarea}
                ></textarea>
              </div>

              <button type="submit" className="btn btn--primary">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
