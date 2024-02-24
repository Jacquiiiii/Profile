import { useState } from 'react'
import Header from '../Header/Header'
import styles from './Projects.module.css'

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState(false)

  const handleMouseEnter = () => setProjectDetails(true)
  const handleMouseLeave = () => setProjectDetails(false)

  return (
    <section className={styles.projects} id="projects">
      <Header heading="Projects" />
      <div className={styles.projectsContainer}>
        <div className={styles.project} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href="https://admin-dashboard-books.vercel.app/">
            {!projectDetails && <img className={styles.image} src="/admin_dashboard.png" />}
            {projectDetails &&
              <div className={styles.projectDetails}>
                <span className={styles.details}>Admin Dashboard</span>
                <span className={styles.details}>Admin dashboard is a single page application built with Next.js that acts as a central place for authorized users to view and interact with data.</span>
              </div>
            }
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects