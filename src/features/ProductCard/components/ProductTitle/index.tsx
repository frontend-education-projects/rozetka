import Link from 'next/link'
import React from 'react'

import styles from './ProductTitle.module.sass'

type ProductTitleProps = {
  title: string
  pathUrl: string
}

export const ProductTitle = ({ title, pathUrl }: ProductTitleProps) => {
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
