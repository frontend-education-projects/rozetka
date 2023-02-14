import React from 'react'

import styles from './TopSales.module.sass'

type TopSalesProp = {
  topSales: string
}

export const TopSales = ({ topSales }: TopSalesProp) => {
  return <span className={styles.top_sales}>{topSales}</span>
}
