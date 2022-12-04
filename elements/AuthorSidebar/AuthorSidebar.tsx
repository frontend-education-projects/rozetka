import ModalWindow from 'elements/ModalWindowReg/ModalWindow'
import React from 'react'
import styles from './AuthorSidebar.module.sass'
import { useState } from 'react'
import { ReactNode } from 'react'

type propAuth = {
  children: ReactNode
}

const AuthorSidebar = ({children}:propAuth) => {
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

export default AuthorSidebar