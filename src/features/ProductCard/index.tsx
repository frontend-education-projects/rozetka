import React from 'react'

import { DeliveryStatus } from './components/DeliveryStatus'
import { ProductAction } from './components/ProductAction'
import { ProductDescription } from './components/ProductDescription'
// import { ProductBonus } from './components/ProductBonus'
import { ProductImage } from './components/ProductImage'
import { ProductPrice } from './components/ProductPrice'
import { ProductRaiting } from './components/ProductRating'
import { ProductTitle } from './components/ProductTitle'
import { TopSales } from './components/TopSales'
import styles from './ProductCard.module.sass'

type ProductInfoProps = {
  id: number
  topSales: string
  imageUrl: string
  imageUrlHover: string
  pathUrl: string
  title: string
  comments_amount: number
  stars: string
  old_price: number
  new_price: number
  currency: string
  deliveryStatus: string
  description: string
  bonus: number
}

export const ProductCard = ({
  id,
  topSales,
  imageUrl,
  imageUrlHover,
  pathUrl,
  title,
  comments_amount,
  stars,
  old_price,
  new_price,
  currency,
  bonus,
  deliveryStatus,
  description,
}: ProductInfoProps) => {
  return (
    <>
      <div className={styles.product_cell}>
        <div className={styles.product_tile}>
          <div className={styles.product_inner}>
            <TopSales topSales={topSales} />
            <ProductAction />
            <ProductImage imageUrl={imageUrl} imageUrlHover={imageUrlHover} pathUrl={pathUrl} />
            <div className={styles.product_color}></div>
            <ProductTitle pathUrl={pathUrl} title={title} />
            <ProductRaiting comments_amount={comments_amount} pathUrl={pathUrl} stars={stars} />
            <ProductPrice currency={currency} new_price={new_price} old_price={old_price} />
            {/* <ProductBonus bonus={bonus} currency={currency} /> */}
            <DeliveryStatus deliveryStatus={deliveryStatus} />
            <ProductDescription description={description} />
          </div>
        </div>
      </div>
    </>
  )
}
