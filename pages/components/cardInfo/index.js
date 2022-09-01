import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

export default function CardInfo({hasImg = true, title, text, img,footer}){
  return(
  <div className={styles.cardInfo}>
    <div className={styles.cardInfoTitle}>
      <span>{title}</span>
    </div>
    <div className={styles.cardInfoBody}>
      <div className={styles.cardInfoBodyText}>
        {text?.length > 0 && text.split(/\n/).map((val, index)=>(
         <p key={val+index}>{val}</p>
       ))}
      </div>
      {hasImg && <div className={styles.cardInfoBodyImg}>
        <Image src={img} width='96' height='96'/>
      </div>}
    </div>
    <div className={styles.cardInfoFooter}>
      <span>{footer}</span>
    </div>
  </div>
  )
}