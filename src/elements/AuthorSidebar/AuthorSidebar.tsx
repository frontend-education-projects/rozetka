import React from 'react'
import { ReactNode } from 'react'

import styles from './AuthorSidebar.module.sass'

type propAuth = {
  children: ReactNode
}

export const AuthorSidebar = ({ children }: propAuth) => {
  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.main_auth}>
        <div className={styles.auth_title}>Ласкаво просимо!</div>
        <div className={styles.auth_subtitle}>Увійдіть, щоб отримувати рекомендації,персональні бонуси і знижки.</div>
        {children}
      </div>
    </div>
  )
}
