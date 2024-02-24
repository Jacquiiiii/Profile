import Header from '../Header/Header'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <Header heading="Skills" />
      <div className={styles.skillsContainer}>
        <div className={styles.skillsRow}>
          <div className={styles.skill}>Javascript</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>PostgreSQL</div>
        </div>
        <div className={styles.skillsRow}>
          <div className={styles.skill}>Node.js</div>
          <div className={styles.skill}>React</div>
          <div className={styles.skill}>Next.js</div>
          <div className={styles.skill}>Redux</div>
        </div>
        <div className={styles.skillsRow}>
          <div className={styles.skill}>Git</div>
          <div className={styles.skill}>Jest</div>
          <div className={styles.skill}>Cypress</div>
          <div className={styles.skill}>Storybook</div>
        </div>
      </div>
    </section>
  )
}

export default Experience