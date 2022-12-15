import { faCartShopping, faCircleQuestion, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomAccordion from 'src/elements/Accordion/CustomAccordion'
import ApplicationStore from 'src/elements/ApplicationStore/ApplicationStore'
import AboutCompany from 'src/elements/FooterSidebarElements/AboutCompany'
import Help from 'src/elements/FooterSidebarElements/Help'
import SocialsMain from 'src/elements/Socials/SocialsMain'

import { SocialsLinks } from '../../pages/api/data/sidebarCategoiesMassive'

type BurgerProp = {
  openBurgerMenu: any
  setOpenBurgreMenu: any
  open: any
  setOpen: any
  openRemindePass: any
  setOpenRemindePass: any
  openRegestration: any
  setOpenRegestration: any
  openWindowCity: any
  setOpenWindowCity: any
}

const BurgerMenu = ({
  openBurgerMenu,
  setOpenBurgreMenu,
  open,
  setOpen,
  openRemindePass,
  setOpenRemindePass,
  openRegestration,
  setOpenRegestration,
  openWindowCity,
  setOpenWindowCity,
}: BurgerProp) => {
  return (
    <>
      <div
        className={`burger_holder animated_burger ${openBurgerMenu ? 'show_burger' : ''} `}
        onClick={() => setOpenBurgreMenu(false)}
      >
        <div className="burger_window" onClick={(e) => e.stopPropagation()}>
          <div className="burger_menu_header">
            <Link href="/">
              <Image
                alt="Rozetka"
                className="burger_logo"
                height={24}
                placeholder="empty"
                src="/Logo/logo.svg"
                width={144}
              />
            </Link>
            <button className="burger_close" onClick={() => setOpenBurgreMenu(false)}>
              X
            </button>
          </div>

          <div className="burger_menu_body">
            <div className="burger_menu_auth">
              <div className="burger_menu_auth_block">
                <div className="burger_menu_avatar">
                  <FontAwesomeIcon className="avatar" icon={faUser} />
                </div>
                <div className="burger_menu_auth_content">
                  <div className="burger_menu_auth_buttons">
                    <button
                      className="button auth_button"
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenBurgreMenu(false)
                        setOpen(true)
                      }}
                    >
                      Вхід
                    </button>
                    <button
                      className="button auth_button"
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenBurgreMenu(false)
                        setOpenRegestration(true)
                      }}
                    >
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
                <a className="burger_menu_button">
                  <span className="burger_menu_icon_button">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </span>
                  Довідковий центр
                </a>

                <a className="burger_menu_button chat_button">
                  <span className="burger_menu_icon_button">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  Чат з ROZETKA
                </a>
              </li>
              <li className="burger_menu_item border_zero">
                <Link className="burger_menu_button" href="/shopCart/ShopCart" onClick={() => setOpenBurgreMenu(false)}>
                  <span className="burger_menu_icon_button">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                  Кошик
                </Link>
              </li>
            </ul>
            <ul className="burger_menu_list">
              <li className="burger_menu_item">
                <div className="burger_menu_switch">
                  <p className="burger_menu_switch_label">Мова</p>
                  <div className="burger_lang_block">
                    <ul className="burger_lang_list">
                      <li className="burger_lang_item">
                        <a className="lang_link" href="/">
                          RU
                        </a>
                      </li>
                      <li className="burger_lang_item lang_space">
                        <a className="lang_link lang_link_active" href="/">
                          <Image alt="ua" className="lang_icon" height={16} src="/Lang/ua.svg" width={24} />
                          UA
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="burger_menu_switch">
                  <p className="burger_menu_switch_label">Місто</p>
                  <div className="burger_menu_city_toggle">
                    <button
                      className="button city_toggle"
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenWindowCity(true)
                        setOpenBurgreMenu(false)
                      }}
                    >
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
                      <a href="/">Бонусний рахунок</a>
                    </li>
                    <li>
                      <a href="/">Rozetka Premium</a>
                    </li>
                    <li>
                      <a href="/">Подарункові сертефікати</a>
                    </li>
                    <li>
                      <a href="/">Rozetka обмін</a>
                    </li>
                    <li>
                      <a href="/">Тури та відпочинок</a>
                    </li>
                  </ul>
                </CustomAccordion>
                <CustomAccordion accordionTitle={'Партнерам'}>
                  <ul className="footer_sidebar_list">
                    <li>
                      <a href="/">Продавати на Розетці</a>
                    </li>
                    <li>
                      <a href="/">Співпраця з нами</a>
                    </li>
                    <li>
                      <a href="/">Франчайзинг</a>
                    </li>
                    <li>
                      <a href="/">Оренда приміщень</a>
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

export default BurgerMenu
