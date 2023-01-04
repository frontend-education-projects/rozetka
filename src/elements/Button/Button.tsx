import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  component: ElementType
  variant?: 'text' | 'contained' | 'outlined'
  classVariant: string
  href?: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, component, variant, classVariant, href, onClick }) => {
  return createElement(
    component,
    {
      onClick,
      href,
      className: clsx(`${classVariant} ${variant || ''}`),
    },
    children,
  )
}
