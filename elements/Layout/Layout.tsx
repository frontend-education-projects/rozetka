import { Header } from 'elements/Header/Header'
import React from 'react'
import { FC, ReactNode } from 'react'

type layoutProps = {
    children:ReactNode
}

export const Layout:FC<layoutProps> = ({children}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default Layout
