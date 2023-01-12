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
        <div className={styles.auth_title}>Ласкаво просимо!</div>
        <div className={styles.auth_subtitle}>Увійдіть, щоб отримувати рекомендації,персональні бонуси і знижки.</div>
        <button className={styles.btn_auth} onClick={handleOpenMainWindow} type="button">
          Увійдіть в особистий кабінет
        </button>
      </div>
    </div>
  )
}
