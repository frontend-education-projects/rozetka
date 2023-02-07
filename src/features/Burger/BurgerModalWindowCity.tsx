import { Typography } from '@elements/Typography'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import styles from './BurgerModalWindowCityStyle.module.sass'

type ModalWindowCityProps = {
  openWindowCity: boolean
  setOpenWindowCity: (isOpenWindowCity: boolean) => void
}

export const BurgerModalWindowCity = ({ openWindowCity, setOpenWindowCity }: ModalWindowCityProps) => {
  const handleCloseCityWindow = () => {
    setOpenWindowCity(false)
  }

  const handleCloseCityWindowAccept = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenWindowCity(false)
  }
  return (
    <>
      <div
        className={clsx(styles.modal_city_holder, styles.animated_city, openWindowCity ? styles.show_city : '')}
        onClick={handleCloseCityWindow}
      ></div>
      <div className={clsx(styles.modal_city_window, openWindowCity ? styles.show_city_window : '')}>
        <div className={styles.modal_city_header}>
          <Typography component="h3" variant="h3">
            Виберіть своє місто
          </Typography>
          <button className={styles.modal_city_close} onClick={handleCloseCityWindow}>
            X
          </button>
        </div>
        <div className={styles.modal_city_content}>
          <p className={styles.header_location_intro}>
            <i className={clsx(styles.intro_icon, 'fa-sharp', 'fa-solid', 'fa-truck-fast')} />
            Доставляємо замовлення по всій Україні!
          </p>
          <ul className={styles.header_location_popular}>
            <li className={styles.header_location_popular_item}>
              <button className={clsx('button', styles.header_location_popular_link)}>Київ</button>
            </li>
            <li className={styles.header_location_popular_item}>
              <button className={clsx('button', styles.header_location_popular_link)}>Харків</button>
            </li>
            <li className={styles.header_location_popular_item}>
              <button className={clsx('button', styles.header_location_popular_link)}>Одеса</button>
            </li>
            <li className={styles.header_location_popular_item}>
              <button className={clsx('button', styles.header_location_popular_link)}>Дніпро</button>
            </li>
            <li className={styles.header_location_popular_item}>
              <button className={clsx('button', styles.header_location_popular_link)}>Запоріжжя</button>
            </li>
            <li className={styles.header_location_popular_item}>
              <button className={clsx('button', styles.header_location_popular_link)}>Львів</button>
            </li>
          </ul>
          <form className={styles.header_location_search}>
            <fieldset className={styles.header_form_row}>
              <label className={styles.form_label}>Вкажіть населенний пункт України</label>
              <div className={styles.header_location_search_input}>
                <div className={styles.autocomplete}>
                  <input className={styles.input_location} placeholder="Виберіть своє місто" type="text" />
                  <ul className={styles.autocomplete_list}></ul>
                </div>
              </div>
            </fieldset>
            <p className={styles.header_location__search_example}>
              Наприклад,
              <button className={clsx('button', styles.header_location_example_link)}>Котюжини</button>
            </p>
          </form>
          <div className={styles.header_location_footer}>
            <Link href="/" onClick={handleCloseCityWindow}>
              Перейти на головну сторінку
            </Link>
            <button
              className={clsx('button', styles.location_footer_applybutton)}
              onClick={handleCloseCityWindowAccept}
            >
              Застосувати
            </button>
          </div>
          <p className={styles.header_location_caption}>
            Вибір міста допоможе надати актуальну інформацію про наявність товару, його ціни та методів доставки у
            вашому місті! Це допоможе зберегти більше вільного часу для вас!
          </p>
        </div>
      </div>
    </>
  )
}
