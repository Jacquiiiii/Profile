import { Freehand, IBM_Plex_Mono } from 'next/font/google'
import styles from './About.module.css'

const cursive = IBM_Plex_Mono({ subsets: ["latin"], weight: ['400'] })

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.bio}>
        <h1 className={`${styles.h1} ${cursive.className}`}>Jacqui Koroll</h1>
        <span className={styles.span}>Full-stack web developer from Victoria, BC.</span>
      </div>
    </section>
  )
}

export default About