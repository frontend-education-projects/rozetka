import React from 'react'

import styles from './ProductPriceMain.module.sass'

type ProductPriceProps = {
  old_price: number
  new_price: number
  currency: string
}

export const ProductPriceMain = ({ old_price, new_price, currency }: ProductPriceProps) => {
  return (
    <div className={styles.product_price}>
      <div className={styles.product_old_price}>
        {old_price} <span>{currency}</span>
      </div>
      <div className={styles.product_new_price}>
        <div className={styles.new_price}>
          {new_price}
          <span>{currency}</span>
        </div>
      </div>
    </div>
  )
}
