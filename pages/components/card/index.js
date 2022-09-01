import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

export default function Card({title, buttonText, linkTo, icon, hasButton, additonalInformation}){
  return(
  <div className={styles.card}>
    <div className={styles.cardIcon}>
      <Image src={icon} width='24' height='24' alt='icon'/>
    </div>
    <div className={styles.cardTitle}>
       {title?.length > 0 && title.split(/\n/).map((val, index)=>(
         <p key={val+index}>{val}</p>
       ))}
    </div>
    {additonalInformation}
    {hasButton !== false && linkTo.length > 0 && <div className={styles.cardButton}>
      {linkTo.length > 0 && <Link href={linkTo}>{buttonText}</Link>}
      {linkTo.length === 0 && {buttonText}}
    </div>}
  </div>
  )
}