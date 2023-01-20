import { EmptyCart } from '@elements/EmptyCart/EmptyCart'
import React from 'react'

import styles from './ShopCart.module.sass'

export const ShopCart = () => {
  return (
    <div className={styles.shop_cart}>
      <div className={styles.container}>
        <div className={styles.cart_title}>Кошик</div>

        <div className={styles.empty_cart_body}>
          <EmptyCart />
        </div>
      </div>
    </div>
  )
}

export default ShopCart
