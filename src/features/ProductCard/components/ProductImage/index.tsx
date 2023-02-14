/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/forbid-component-props */
import Link from 'next/link'
import React, { useCallback, useRef, useState } from 'react'

import styles from './ProductImage.module.sass'

//! useHover hook
const useHover = <T extends HTMLElement>(): [(node?: T | null) => void, boolean] => {
  const [hover, setHover] = useState(false)
  const handleMouseOver = useCallback(() => setHover(true), [])
  const handleMouseOut = useCallback(() => setHover(false), [])
  const ref = useRef<T>()
  const callbackRef = useCallback<(node?: null | T) => void>(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver)
        ref.current.removeEventListener('mouseout', handleMouseOut)
      }

      ref.current = node || undefined

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver)
        ref.current.addEventListener('mouseout', handleMouseOut)
      }
    },
    [handleMouseOver, handleMouseOut],
  )

  return [callbackRef, hover]
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
      <div ref={hoverRef}>
        <Link className={styles.product_image} href={pathUrl}>
          <img alt="Product" src={isHovered ? imageUrlHover : imageUrl} />
        </Link>
      </div>
    </>
  )
}
