/* eslint-disable react/forbid-component-props */
import clsx from 'clsx'
import React, { ReactNode } from 'react'

type TypographyCustomProps = {
  children: ReactNode
  component: keyof JSX.IntrinsicElements
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2'
}

export const TypographyCustom = ({ children, component, variant }: TypographyCustomProps) => {
  const typographyStyle = clsx(`typography typography-${variant}`)

  const Component = component || 'h1'

  return (
    <>
      <Component className={typographyStyle}>{children}</Component>
    </>
  )
}
