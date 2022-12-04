import React from 'react'
import styles from './Input.module.sass'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

export const Input = () => {
  return (
    <div className={styles.input_body}>
        <form action="#" className={styles.input_form}>
            <div className={styles.input_form_inner}>
        <SearchOutlinedIcon fontSize='large' className={styles.icon_search} />
            <input className={styles.input_search} autoComplete='off' type="text" name='form[]' placeholder='Я шукаю...' />
            <button className={styles.btn_icon_microphone}>
            <MicOutlinedIcon className={styles.icon_microphone} />
            </button>
            </div>
        </form>
        <button type='submit' className={styles.btn_search}>Знайти</button>
    </div>
  )
}

export default Input
