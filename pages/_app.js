import styles from '../styles/Home.module.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
       <div className={styles.titleInstitution}>
         <h1>GETSÊMANI</h1>
         <Component {...pageProps} />
      </div>
    </div>
    
  )
}

export default MyApp
