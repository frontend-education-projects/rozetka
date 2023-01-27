import { HeaderActions } from '@elements/HeaderActions'
import { Catalog } from '@elements/HeaderCatalog'
import { Logo } from '@elements/Logo'
import { Input } from '@elements/Search-bar'
import { Burger } from '@features/Burger'
import React from 'react'

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
