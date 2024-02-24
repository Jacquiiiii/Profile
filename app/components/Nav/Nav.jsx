import Link from "next/link"
import styles from "./Nav.module.css"
import ThemeToggle from "./ThemeToggle/ThemeToggle"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="#about" className={styles.link}>Home</Link>
          <Link href="#experience" className={styles.link}>Skills</Link>
          <Link href="#projects" className={styles.link}>Projects</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
        </div>
        <ThemeToggle />
      </div>
      <hr className={styles.hr} />
    </nav>
  )
}

export default Nav