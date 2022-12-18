import React from 'react'
import { Burger } from 'src/elements/Burger/Burger'
import { Catalog } from 'src/elements/header_Catalog/Catalog'
import { HeaderActions } from 'src/elements/HeaderActions/HeaderActions'
import { Logo } from 'src/elements/Logo/Logo'
import { Input } from 'src/elements/Search-bar/Input'

import styles from './Header.module.sass'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Burger />
        <Logo />
        <Catalog />
        <Input />
        <HeaderActions />
      </div>
    </header>
  )
}
