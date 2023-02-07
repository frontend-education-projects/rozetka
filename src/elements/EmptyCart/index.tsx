import { Typography } from '@elements/Typography'
import styles from '@pages/shopCart/ShopCart.module.sass'
import Image from 'next/image'
import React from 'react'

export const EmptyCart = () => {
  return (
    <div className={styles.empty_cart}>
      <div className={styles.empty_cart_img}>
        <Image alt="empty cart" height={240} placeholder="empty" src="/Cart/cartimg.svg" width={240} />
      </div>
      <Typography component="h4" marginBottom="mb-16" variant="h4">
        Кошик порожній
      </Typography>
      <Typography colorVariant="gray" component="p" variant="subtitle1">
        Але це ніколи не пізно виправити :)
      </Typography>
    </div>
  )
}
