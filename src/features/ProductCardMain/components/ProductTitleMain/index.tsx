import Link from 'next/link'
import React from 'react'

import styles from './ProductTitleMain.module.sass'

type ProductTitleProps = {
  title: string
  pathUrl: string
}

export const ProductTitleMain = ({ title, pathUrl }: ProductTitleProps) => {
  return (
    <>
      <div className={styles.product_title_link}>
        <Link href={pathUrl}>
          <span className={styles.product_title}>{title}</span>
        </Link>
      </div>
    </>
  )
}
