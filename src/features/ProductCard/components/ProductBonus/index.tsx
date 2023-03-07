import React from 'react'

import styles from './ProductBonus.module.sass'

type ProductBonusProps = {
  bonus: number
  currency: string
}

export const ProductBonus = ({ bonus, currency }: ProductBonusProps) => {
  return (
    <div className={styles.product_bonus}>
      <span className={styles.bonus_icon}>Б</span> <span>+{bonus} бонусних</span> <span>{currency}</span>
    </div>
  )
}
