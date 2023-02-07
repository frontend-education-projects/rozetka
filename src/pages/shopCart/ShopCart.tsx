import { EmptyCart } from '@elements/EmptyCart'
import { Typography } from '@elements/Typography'
import React from 'react'

import styles from './ShopCart.module.sass'

export const ShopCart = () => {
  return (
    <div className={styles.shop_cart}>
      <div className={styles.container}>
        <Typography component="h1" marginBottom="mb-24" variant="h4">
          Кошик
        </Typography>

        <div className={styles.empty_cart_body}>
          <EmptyCart />
        </div>
      </div>
    </div>
  )
}

export default ShopCart
