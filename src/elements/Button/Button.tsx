import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'

import styles from './Button.module.sass'

type ButtonProps = {
  children: ReactNode
  component: ElementType
  variant?: 'primary' | 'secondary' | 'tertiary' | 'href' | 'href_'
  classVariant: string
  href?: string
  onClick?: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  component,
  variant = 'primary',
  classVariant,
  href,
  type = 'button',
  disabled,
  onClick,
}) => {
  return createElement(
    component,
    {
      onClick,
      href,
      type,
      disabled,
      className: clsx(styles.button, styles[classVariant], styles[variant]),
    },
    children,
  )
}
