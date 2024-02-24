import styles from './ThemeToggle.module.css'

// TODO: Add light / dark mode functionality
const ThemeToggle = () => {
  return (
    <div className={styles.toggle}>
      <input type="checkbox" className={styles.input} />
    </div>
  )
}

export default ThemeToggle