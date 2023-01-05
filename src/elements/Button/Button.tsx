import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  component: ElementType
  variant?: 'green' | 'linkButton' | 'outlined'
  classVariant: string
  href?: string
  onClick?: () => void
  type?: 'submit'
  disabled?: 'isValid' | boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  component,
  variant,
  classVariant,
  href,
  type,
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
      className: clsx(`${classVariant} ${variant || ''}`),
    },
    children,
  )
}
