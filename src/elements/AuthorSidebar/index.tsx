import { Typography } from '@elements/Typography'
import React from 'react'

import styles from './AuthorSidebar.module.sass'

type AuthorSidebarProps = {
  setOpen: (isOpen: boolean) => void
}

export const AuthorSidebar = ({ setOpen }: AuthorSidebarProps) => {
  const handleOpenMainWindow = () => {
    setOpen(true)
  }

  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.main_auth}>
        <Typography component={'h3'} marginBottom={'mb-8'} variant={'h4'}>
          Ласкаво просимо!
        </Typography>
        <Typography component={'p'} marginBottom={'mb-12'} variant={'subtitle2'}>
          Увійдіть, щоб отримувати рекомендації,персональні бонуси і знижки.
        </Typography>
        <div className={styles.auth_subtitle}></div>
        <button className={styles.btn_auth} onClick={handleOpenMainWindow} type="button">
          Увійдіть в особистий кабінет
        </button>
      </div>
    </div>
  )
}
