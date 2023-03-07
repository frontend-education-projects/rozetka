import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import styles from './ProductImage.module.sass'

//! useHover hook
type UseHoverType<T extends HTMLElement> = [React.RefObject<T>, boolean]

const useHover = <T extends HTMLElement>(): UseHoverType<T> => {
  const [hover, setHover] = useState(false)

  const ref = useRef<T>(null)

  const handleMouseOver = () => setHover(true)
  const handleMouseOut = () => setHover(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)

      return () => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return [ref, hover]
}

type ProductImageProps = {
  imageUrl: string
  imageUrlHover: string
  pathUrl: string
}

export const ProductImage = ({ imageUrl, imageUrlHover, pathUrl }: ProductImageProps) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()
  return (
    <>
      <div className={styles.product_image} ref={hoverRef}>
        <Link href={pathUrl}>
          <Image alt="Product" height={200} src={isHovered ? imageUrlHover : imageUrl} width={200} />
        </Link>
      </div>
    </>
  )
}
