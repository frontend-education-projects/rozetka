import Image from 'next/image'
import React from 'react'

import styles from '../../pages/shopCart/ShopCart.module.sass'

export const EmptyCart = () => {
  return (
    <div className={styles.empty_cart}>
      <div className={styles.empty_cart_img}>
        <Image alt="empty cart" height={240} placeholder="empty" src="/Cart/cartimg.svg" width={240} />
      </div>
      <div className={styles.empty_text}>Кошик порожній</div>
      <div className={styles.empty_subtext}>Але це ніколи не пізно виправити :)</div>
    </div>
  )
}
