import React from 'react'

import styles from '../../ProductCard.module.sass'

type ProductDescriptionProp = {
  description: string
}

export const ProductDescription = ({ description }: ProductDescriptionProp) => {
  return (
    <>
      <div className={styles.hidden_description_holder}>
        <div className={styles.hidden_description}>
          <p className={styles.product_description}>{description}</p>
        </div>
      </div>
    </>
  )
}
