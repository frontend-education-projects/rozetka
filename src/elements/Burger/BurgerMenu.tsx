import { faCartShopping, faCircleQuestion, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomAccordion } from 'src/elements/Accordion/CustomAccordion'
import { ApplicationStore } from 'src/elements/ApplicationStore/ApplicationStore'
import { AboutCompany } from 'src/elements/FooterSidebarElements/AboutCompany'
import { Help } from 'src/elements/FooterSidebarElements/Help'
import { SocialsMain } from 'src/elements/Socials/SocialsMain'

import { SocialsLinks } from '../../pages/api/data/sidebarCategoiesMassive'

type BurgerProp = {
  openBurgerMenu: boolean
  setOpenBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  openRemindePass: boolean
  setOpenRemindePass: React.Dispatch<React.SetStateAction<boolean>>
  openRegestration: boolean
  setOpenRegestration: React.Dispatch<React.SetStateAction<boolean>>
  openWindowCity: boolean
  setOpenWindowCity: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenu = ({
  openBurgerMenu,
  setOpenBurgerMenu,
  setOpen,
  setOpenRegestration,
  setOpenWindowCity,
}: BurgerProp) => {
  const handlerCloseBurgerMenu = () => {
    setOpenBurgerMenu(false)
  }

  const hendlerStopPropagationMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handlerCloseXBurgerMenu = () => {
    setOpenBurgerMenu(false)
  }

  const hendlerOpenModalWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenBurgerMenu(false)
    setOpen(true)
  }

  const hendlerOpenRegestrationWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenBurgerMenu(false)
    setOpenRegestration(true)
  }

  const hendlerOpenCityWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenWindowCity(true)
    setOpenBurgerMenu(false)
  }

  return (
    <>
      <div
        className={`burger_holder animated_burger ${openBurgerMenu ? 'show_burger' : ''} `}
        onClick={handlerCloseBurgerMenu}
      >
        <div className="burger_window" onClick={hendlerStopPropagationMenu}>
          <div className="burger_menu_header">
            <Link href="/" onClick={handlerCloseBurgerMenu}>
              <Image alt="Rozetka" height={24} placeholder="empty" src="/Logo/logo.svg" width={144} />
            </Link>
            <button className="burger_close" onClick={handlerCloseXBurgerMenu}>
              X
            </button>
          </div>

          <div className="burger_menu_body">
            <div className="burger_menu_auth">
              <div className="burger_menu_auth_block">
                <div className="burger_menu_avatar">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="burger_menu_auth_content">
                  <div className="burger_menu_auth_buttons">
                    <button className="button auth_button" onClick={hendlerOpenModalWindow}>
                      Вхід
                    </button>
                    <button className="button auth_button" onClick={hendlerOpenRegestrationWindow}>
                      Реєстрація
                    </button>
                  </div>
                  <p className="auth_caption">Авторизуйтесь для отримання розширених можливостей</p>
                </div>
              </div>
            </div>
            <a className="burger_comeback" href="https://savelife.in.ua/donate/">
              <i className="comeback_shield fa-solid fa-shield-heart"></i> Повернись живим
              <i className="comeback_arrow fa-solid fa-chevron-right"></i>
            </a>

            <ul className="burger_menu_list">
              <li className="burger_menu_item">
                <button className="burger_menu_button">
                  <span className="burger_menu_icon_button">
                    <GridViewOutlinedIcon sx={{ fontSize: 30 }} />
                  </span>
                  Каталог товарів
                </button>
              </li>
              <li className="burger_menu_item">
                <Link href="/">
                  <button className="burger_menu_button">
                    <span className="burger_menu_icon_button">
                      <FontAwesomeIcon icon={faCircleQuestion} />
                    </span>
                    Довідковий центр
                  </button>
                </Link>

                <a className="burger_menu_button chat_button" href="https://t.me/Rozetka_helpBot?start=src=hc">
                  <span className="burger_menu_icon_button">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  Чат з ROZETKA
                </a>
              </li>
              <li className="burger_menu_item border_zero">
                <Link href="/shopCart/ShopCart" onClick={handlerCloseBurgerMenu}>
                  <button className="burger_menu_button">
                    <span className="burger_menu_icon_button">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    Кошик
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="burger_menu_list">
              <li className="burger_menu_item">
                <div className="burger_menu_switch">
                  <p className="burger_menu_switch_label">Мова</p>
                  <div className="burger_lang_block">
                    <ul className="burger_lang_list">
                      <li className="burger_lang_item lang_link">
                        <Link href="/">RU</Link>
                      </li>
                      <li className="burger_lang_item lang_space lang_link lang_link_active">
                        <Link href="/">
                          <Image alt="ua" height={16} src="/Lang/ua.svg" width={24} />
                          UA
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="burger_menu_switch">
                  <p className="burger_menu_switch_label">Місто</p>
                  <div className="burger_menu_city_toggle">
                    <button className="button city_toggle" onClick={hendlerOpenCityWindow}>
                      <span className="city_toggle_text">Умань</span>
                      <i className="city_toggle_arrow fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </div>
              </li>
              <li className="burger_menu_item border_zero">
                <AboutCompany />
                <Help />
                <CustomAccordion accordionTitle={'Сервіси'}>
                  <ul className="footer_sidebar_list">
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
                  <ul className="footer_sidebar_list">
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
              <ApplicationStore appClass={'app_store_burger'} />
              <SocialsMain SocialsLinks={SocialsLinks} socialsClass={'socials_sidebar_block_burger'} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
