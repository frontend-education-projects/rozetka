import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import React from 'react'

import styles from './Input.module.sass'

export const Input = () => {
  return (
    <div className={styles.input_body}>
      <form action="#" className={styles.input_form}>
        <div className={styles.input_form_inner}>
          <div className={styles.icon_search}>
            <SearchOutlinedIcon fontSize="large" />
          </div>
          <input
            autoComplete="off"
            className={styles.input_search}
            name="form[]"
            placeholder="Я шукаю..."
            type="text"
          />
          <button className={styles.btn_icon_microphone}>
            <MicOutlinedIcon />
          </button>
        </div>
      </form>
      <button className={styles.btn_search} type="submit">
        Знайти
      </button>
    </div>
  )
}
