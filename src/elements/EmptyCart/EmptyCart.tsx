import React from 'react'
import Image from 'next/image'
import styles from '../../pages/shopCart/ShopCart.module.sass'

export const EmptyCart = () => {
  return (
    <div className={styles.empty_cart}>
    <div className={styles.empty_cart_img}>
        <Image className={styles.empty_cart_illustration} width={240} height={240} src='/Cart/cartimg.svg' alt='empty cart' placeholder='empty' />
    </div>
    <div className={styles.empty_text}>Кошик порожній</div>
    <div className={styles.empty_subtext}>Але це ніколи не пізно виправити :)</div>
    </div>
  )
}

export default EmptyCart