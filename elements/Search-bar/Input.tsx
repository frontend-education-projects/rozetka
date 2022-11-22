import React from 'react'
import styles from './Input.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Input = () => {
  return (
    <div className={styles.input_body}>
        <form action="#" className={styles.input_form}>
            <div className={styles.input_form_inner}>
        <FontAwesomeIcon className={styles.icon_search} icon={faSearch} />
            <input className={styles.input_search} autoComplete='off' type="text" name='form[]' placeholder='Я шукаю...' />
            <button className={styles.btn_icon_microphone}>
            <FontAwesomeIcon className={styles.icon_microphone} icon={faMicrophone} />
            </button>
            </div>
        </form>
        <button type='submit' className={styles.btn_search}>Знайти</button>
    </div>
  )
}

export default Input
