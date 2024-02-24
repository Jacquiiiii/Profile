'use client'

import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button 
      onClick={handleScrollToTop} 
      className={styles.button}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dfcdc3">
        <path d="m12 6.414 7.293 7.293 1.414-1.414L12 3.586l-8.707 8.707 1.414 1.414L12 6.414z"/>
        <path d="m3.293 18.293 1.414 1.414L12 12.414l7.293 7.293 1.414-1.414L12 9.586l-8.707 8.707z"/>
      </svg>
    </button>
  )
}

export default ScrollToTop