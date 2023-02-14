import clsx from 'clsx'
import React from 'react'

import styles from './ProductAction.module.sass'

export const ProductAction = () => {
  return (
    <div className={styles.product_action}>
      <div className={styles.wish_wrapper}>
        <button className={clsx('button', styles.wish_button)}>
          <i className={clsx(styles.wish_heart, 'fa-regular fa-heart')} />
        </button>
      </div>
      <div className={styles.wish_wrapper}>
        <button className={clsx('button', styles.wish_button)}>
          <i className={clsx(styles.compare, 'fa-solid fa-scale-unbalanced-flip')} />
        </button>
      </div>
    </div>
  )
}
