import React from 'react' // TODO: create eslint rule to forbid React import

import styles from './AuthorSidebar.module.sass'

type OpenModalWindowProp = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthorSidebar = ({ setOpen }: OpenModalWindowProp) => {
  const handlerOpenMainWindow = () => {
    setOpen(true)
  }

  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.main_auth}>
        <div className={styles.auth_title}>Ласкаво просимо!</div>
        <div className={styles.auth_subtitle}>Увійдіть, щоб отримувати рекомендації,персональні бонуси і знижки.</div>
        <button className={styles.btn_auth} onClick={handlerOpenMainWindow} type="button">
          Увійдіть в особистий кабінет
        </button>
      </div>
    </div>
  )
}
