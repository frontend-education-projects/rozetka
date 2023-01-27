import { SocialsLinks } from '@data/SidebarCategoiesMassive'
import { ApplicationStore } from '@elements/ApplicationStore'
import { AboutCompany } from '@elements/FooterSidebarElements/AboutCompany'
import { Help } from '@elements/FooterSidebarElements/Help'
import { SocialsMain } from '@features/Socials'
import { faCartShopping, faCircleQuestion, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomAccordion } from '@modules/Accordion'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './BurgerMenu.module.sass'

type BurgerMenuProps = {
  openBurgerMenu: boolean
  setOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void
  open: boolean
  setOpen: (isOpen: boolean) => void
  openRemindePass: boolean
  setOpenRemindePass: (isOpenRemindePass: boolean) => void
  openRegestration: boolean
  setOpenRegestration: (isOpenRegestration: boolean) => void
  openWindowCity: boolean
  setOpenWindowCity: (isOpenWindowCity: boolean) => void
}

export const BurgerMenu = ({
  openBurgerMenu,
  setOpenBurgerMenu,
  setOpen,
  setOpenRegestration,
  setOpenWindowCity,
}: BurgerMenuProps) => {
  const handleCloseBurgerMenu = () => {
    setOpenBurgerMenu(false)
  }

  const handleOpenModalWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenBurgerMenu(false)
    setOpen(true)
  }

  const handleOpenRegestrationWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenBurgerMenu(false)
    setOpenRegestration(true)
  }

  const handleOpenCityWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenWindowCity(true)
    setOpenBurgerMenu(false)
  }

  return (
    <>
      <div
        className={clsx(styles.burger_holder, openBurgerMenu ? styles.show_burger : '')}
        onClick={handleCloseBurgerMenu}
      ></div>
      <div className={clsx(styles.burger_window, openBurgerMenu ? styles.burger_window_show : '')}>
        <div className={styles.burger_menu_header}>
          <Link href="/" onClick={handleCloseBurgerMenu}>
            <Image alt="Rozetka" height={24} placeholder="empty" src="/Logo/logo.svg" width={144} />
          </Link>
          <button className={styles.burger_close} onClick={handleCloseBurgerMenu}>
            X
          </button>
        </div>

        <div className={styles.burger_menu_body}>
          <div className={styles.burger_menu_auth}>
            <div className={styles.burger_menu_auth_block}>
              <div className={styles.burger_menu_avatar}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.burger_menu_auth_content}>
                <div className={styles.burger_menu_auth_buttons}>
                  <button className={clsx('button', styles.auth_button)} onClick={handleOpenModalWindow}>
                    Вхід
                  </button>
                  <button className={clsx('button', styles.auth_button)} onClick={handleOpenRegestrationWindow}>
                    Реєстрація
                  </button>
                </div>
                <p className={styles.auth_caption}>Авторизуйтесь для отримання розширених можливостей</p>
              </div>
            </div>
          </div>
          <a className={styles.burger_comeback} href="https://savelife.in.ua/donate/">
            <i className={clsx(styles.comeback_shield, 'fa-solid', 'fa-shield-heart')} />
            Повернись живим
            <i className={clsx(styles.comeback_arrow, 'fa-solid', 'fa-chevron-right')} />
          </a>

          <ul className={styles.burger_menu_list}>
            <li className={styles.burger_menu_item}>
              <button className={styles.burger_menu_button}>
                <span className={styles.burger_menu_icon_button}>
                  <GridViewOutlinedIcon sx={{ fontSize: 30 }} />
                </span>
                Каталог товарів
              </button>
            </li>
            <li className={styles.burger_menu_item}>
              <Link href="/">
                <button className={styles.burger_menu_button}>
                  <span className={styles.burger_menu_icon_button}>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </span>
                  Довідковий центр
                </button>
              </Link>

              <a
                className={clsx(styles.burger_menu_button, styles.chat_button)}
                href="https://t.me/Rozetka_helpBot?start=src=hc"
              >
                <span className={styles.burger_menu_icon_button}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
                Чат з ROZETKA
              </a>
            </li>
            <li className={clsx(styles.burger_menu_item, styles.border_zero)}>
              <Link href="/shopCart/ShopCart" onClick={handleCloseBurgerMenu}>
                <button className={styles.burger_menu_button}>
                  <span className={styles.burger_menu_icon_button}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                  Кошик
                </button>
              </Link>
            </li>
          </ul>
          <ul className={styles.burger_menu_list}>
            <li className={styles.burger_menu_item}>
              <div className={styles.burger_menu_switch}>
                <p className={styles.burger_menu_switch_label}>Мова</p>
                <div className={styles.burger_lang_block}>
                  <ul className={styles.burger_lang_list}>
                    <li className={clsx(styles.burger_lang_item, styles.lang_link)}>
                      <Link href="/">RU</Link>
                    </li>
                    <li
                      className={clsx(
                        styles.burger_lang_item,
                        styles.lang_space,
                        styles.lang_link,
                        styles.lang_link_active,
                      )}
                    >
                      <Link href="/">
                        <Image alt="ua" height={16} src="/Lang/ua.svg" width={24} />
                        UA
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.burger_menu_switch}>
                <p className={styles.burger_menu_switch_label}>Місто</p>
                <div className={styles.burger_menu_city_toggle}>
                  <button className={clsx('button', styles.city_toggle)} onClick={handleOpenCityWindow}>
                    <span className={styles.city_toggle_text}>Умань</span>
                    <i className={clsx(styles.city_toggle_arrow, 'fa-solid', 'fa-chevron-down')}></i>
                  </button>
                </div>
              </div>
            </li>
            <li className={clsx(styles.burger_menu_item, styles.border_zero)}>
              <AboutCompany />
              <Help />
              <CustomAccordion accordionTitle={'Сервіси'}>
                <ul className={styles.footer_sidebar_list}>
                  <li>
                    <Link href="/">Бонусний рахунок</Link>
                  </li>
                  <li>
                    <Link href="/">Rozetka Premium</Link>
                  </li>
                  <li>
                    <Link href="/">Подарункові сертефікати</Link>
                  </li>
                  <li>
                    <Link href="/">Rozetka обмін</Link>
                  </li>
                  <li>
                    <Link href="/">Тури та відпочинок</Link>
                  </li>
                </ul>
              </CustomAccordion>
              <CustomAccordion accordionTitle={'Партнерам'}>
                <ul className={styles.footer_sidebar_list}>
                  <li>
                    <Link href="/">Продавати на Розетці</Link>
                  </li>
                  <li>
                    <Link href="/">Співпраця з нами</Link>
                  </li>
                  <li>
                    <Link href="/">Франчайзинг</Link>
                  </li>
                  <li>
                    <Link href="/">Оренда приміщень</Link>
                  </li>
                </ul>
              </CustomAccordion>
            </li>
            <ApplicationStore appClassName={'app_store_burger'} />
            <SocialsMain SocialsLinks={SocialsLinks} socialsClassName={'socials_sidebar_block_burger'} />
          </ul>
        </div>
      </div>
    </>
  )
}
