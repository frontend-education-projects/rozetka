/* eslint-disable react/forbid-component-props */
import React, { ReactNode } from 'react'

type TypographyCustomProps = {
  children: ReactNode
  component: keyof JSX.IntrinsicElements
  variant: string
}

export const TypographyCustom = ({ children, component, variant }: TypographyCustomProps) => {
  const Component = component || 'h1'

  return (
    <>
      <Component className={`typography typography-${variant}`}>{children}</Component>
    </>
  )
}
