import clsx from 'clsx'
import { createElement, FC, ReactNode } from 'react'

import styles from './Button.module.sass'

type ButtonProps = {
  children: ReactNode
  component: 'button' | 'a'
  variant: 'primary' | 'secondary' | 'tertiary' | 'link' | 'linkUnderline'
  classNameStyles: string
  href?: string
  onClick?: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  component,
  variant = 'primary',
  classNameStyles,
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
      className: clsx(styles.button, styles[classNameStyles], styles[variant]),
    },
    children,
  )
}
