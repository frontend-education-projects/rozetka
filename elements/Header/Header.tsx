import { Burger } from 'elements/Burger/Burger'
import HeaderActions from 'elements/HeaderActions/HeaderActions'
import { Catalog } from 'elements/header_Catalog/Catalog'
import { Logo } from 'elements/Logo/Logo'
import { Input } from 'elements/Search-bar/Input'
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

export default Header
