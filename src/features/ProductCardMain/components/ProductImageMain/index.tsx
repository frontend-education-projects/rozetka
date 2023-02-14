/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/forbid-component-props */
import Link from 'next/link'

import styles from './ProductImageMain.module.sass'

type ProductImageProps = {
  imageUrl: string
  pathUrl: string
}

export const ProductImageMain = ({ imageUrl, pathUrl }: ProductImageProps) => {
  return (
    <>
      <Link className={styles.product_image} href={pathUrl}>
        <img alt="Product" src={imageUrl} />
      </Link>
    </>
  )
}
