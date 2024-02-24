import styles from './Contact.module.css'
import Header from '../Header/Header'

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <Header heading="Get in touch" />
      <form action="/submit" method="post" className={styles.form}>
        <input className={styles.input} type="text" id="name" name="name" placeholder="Enter name" required />
        <input className={styles.input} type="email" id="email" name="email" placeholder="Enter email" required />
        <textarea className={styles.message} id="message" name="message" rows="4" required placeholder="Enter message"></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact