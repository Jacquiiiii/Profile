import styles from './Header.module.css'

const Header = ({ heading }) => {
  return (
    <div className={styles.header}>
      <span className={styles.heading}>{heading}</span>
    </div>
  )
}

export default Header