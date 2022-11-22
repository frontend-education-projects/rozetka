import ModalWindow from 'elements/ModalWindowReg/ModalWindow'
import React from 'react'
import styles from './AuthorSidebar.module.sass'
import { useState } from 'react'

const AuthorSidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <ModalWindow open={open} setOpen={setOpen}/>
    <div className={styles.main_auth}>
        <div className={styles.auth_title}>Ласкаво просимо!</div>
        <div className={styles.auth_subtitle}>Увійдіть, щоб отримувати рекомендації,персональні бонуси і знижки.</div>

        <button onClick={() => setOpen(true)} type='button' className={styles.btn_auth}>Увійдіть в особистий кабінет</button>
    </div>
    </>
  )
}

export default AuthorSidebar