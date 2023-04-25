import React from 'react'
import styles from "../NotFoundBlock/NotFoundBlock.module.scss"

const NotFoundBlock = () => {
  return (
   <div className={styles.root}>
    <h1>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
    <p className={styles.dexription}>
      К сожалении данная страница отсутствует в нашем интернет-магазине
    </p>
   </div>
  )
}

export default NotFoundBlock