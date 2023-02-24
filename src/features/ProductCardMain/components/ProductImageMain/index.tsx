import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductImageMain.module.sass'

type ProductImageProps = {
  imageUrl: string
  pathUrl: string
}

export const ProductImageMain = ({ imageUrl, pathUrl }: ProductImageProps) => {
  return (
    <>
      <div className={styles.product_image}>
        <Link href={pathUrl}>
          <Image alt="Product" height={140} src={imageUrl} width={140} />
        </Link>
      </div>
    </>
  )
}
