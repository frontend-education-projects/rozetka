import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'

import styles from './typographyStyles.module.sass'

type TypographyProps = {
  children: ReactNode
  component?: ElementType
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2'
  marginBottom?: 'mb-24' | 'mb-16' | 'mb-12' | 'mb-8'
  colorVariant?: 'gray'
}

export const Typography: FC<TypographyProps> = ({
  children,
  component = 'h1',
  variant = 'h1',
  marginBottom = '',
  colorVariant = '',
}) => {
  return createElement(
    component,
    {
      className: clsx(styles.typography, styles[variant], styles[marginBottom], styles[colorVariant]),
    },
    children,
  )
}
