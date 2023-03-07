import React from 'react'

import { ProductActionMain } from './components/ProductActionMain'
import { ProductImageMain } from './components/ProductImageMain'
import { ProductPriceMain } from './components/ProductPriceMain'
import { ProductTitleMain } from './components/ProductTitleMain'
import styles from './ProductCardMain.module.sass'

type ProductCardMainInfoProps = {
  id: number
  imageUrl: string
  pathUrl: string
  title: string
  old_price: number
  new_price: number
  currency: string
}

export const ProductCardMain = ({
  id,
  imageUrl,
  pathUrl,
  title,
  old_price,
  new_price,
  currency,
}: ProductCardMainInfoProps) => {
  return (
    <>
      <div className={styles.product_cell}>
        <div className={styles.product_tile}>
          <div className={styles.product_inner}>
            <ProductActionMain />
            <ProductImageMain imageUrl={imageUrl} pathUrl={pathUrl} />
            <ProductTitleMain pathUrl={pathUrl} title={title} />
            <ProductPriceMain currency={currency} new_price={new_price} old_price={old_price} />
          </div>
        </div>
      </div>
    </>
  )
}
