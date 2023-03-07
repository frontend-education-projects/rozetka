import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import styles from './ProductRating.module.sass'

type ProductRatingProps = {
  comments_amount: number
  pathUrl: string
  stars: string
}

export const ProductRaiting = ({ comments_amount, pathUrl, stars }: ProductRatingProps) => {
  return (
    <div className={styles.product_rating}>
      <Link href={pathUrl}>
        <div className={styles.product_stars}>
          {/* leave a review ============= */}
          {/* <i className={clsx(styles.product_review, 'fa-regular fa-comment')} /> */}
          {/* leave a review ============= */}

          <i className={clsx(styles.product_stars_icon, 'fa-solid fa-star')} />
          <i className={clsx(styles.product_stars_icon, 'fa-solid fa-star')} />
          <i className={clsx(styles.product_stars_icon, 'fa-solid fa-star')} />
          <i className={clsx(styles.product_stars_icon, 'fa-solid fa-star')} />
          <i className={clsx(styles.product_stars_icon, 'fa-solid fa-star-half')} />
        </div>

        <span>{comments_amount} відгуків</span>

        {/* leave a review ============= */}
        {/* <span>залишити відгук</span> */}
        {/* leave a review ============= */}
      </Link>
    </div>
  )
}
