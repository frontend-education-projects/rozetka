import React from 'react'
import { FC, ReactNode } from 'react'
import { Header } from 'src/elements/Header/Header'

type layoutProps = {
  children: ReactNode
}

export const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
