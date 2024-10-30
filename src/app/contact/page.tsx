
import styles from "../style/Contact.module.css"

function Contact() {
  return (
    <div id="contact">
      <section className={styles['text-gray-600']}>
        <div className={styles.container}>
          {/* Map Section */}
          <div className={styles['map-wrapper']}>
            <iframe
              className={styles['map-iframe']}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57895.56157347923!2d66.9588930717477!3d24.91596529024737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ffda278b04d%3A0xd522a3bf5b449fc3!2sMetroville%20Orangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727986364062!5m2!1sen!2s"
            />
          </div>

          {/* Contact Form Section */}
          <div className={styles['contact-wrapper']}>
            <h2 className={styles['contact-title']}>Contact</h2>

            <div className={styles['form-group']}>
              <label htmlFor="name" className={styles['form-label']}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles['form-input']}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="email" className={styles['form-label']}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles['form-input']}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="message" className={styles['form-label']}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles['form-textarea']}
              />
            </div>
            <button className={styles['contact-button']}>Send Message</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
