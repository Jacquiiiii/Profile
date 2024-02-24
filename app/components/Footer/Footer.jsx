import Link from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <hr className={styles.hr} />
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="https://www.linkedin.com/in/jacqui-k-434445204/" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn"
              className={styles.linkedIn}
            />
          </Link>
          <Link href="https://github.com/Jacquiiiii" target="_blank">
            <img
              src="https://www.shareicon.net/download/2015/09/15/101512_logo.ico"
              alt="Github"
              className={styles.gitHub}
            />
          </Link>
        </div>
        <span className={styles.j}>Jacqui Koroll | 2024</span>
      </div>
    </nav>
  )
}

export default Footer