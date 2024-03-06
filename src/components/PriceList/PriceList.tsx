import styles from "./PriceList.module.css"

interface PLProps {
  title: string
  price: string
  desc?: string
}

const PriceList: React.FC<PLProps> = ({ title, price, desc }) => {
  return (
    <div className={styles.item}>
      <div className={styles.line}>
        <span className={styles.job}>{title}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <span className={styles.info}>{desc}</span>
    </div>
  )
}

export default PriceList
