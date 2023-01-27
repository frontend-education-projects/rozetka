import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'

import styles from './typographyStyles.module.sass'

type TypographyProps = {
  children: ReactNode
  component?: ElementType
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2'
}

export const Typography: FC<TypographyProps> = ({ children, component = 'h1', variant = 'h1' }) => {
  return createElement(
    component,
    {
      className: clsx(styles.typography, styles[variant]),
    },
    children,
  )
}
