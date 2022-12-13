import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleQuestion,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AboutCompany from "elements/FooterSidebarElements/AboutCompany";
import Help from "elements/FooterSidebarElements/Help";
import ApplicationStore from "elements/ApplicationStore/ApplicationStore";
import SocialsMain from "elements/Socials/SocialsMain";
import { SocialsLinks } from "@/pages/api/data/sidebarCategoiesMassive";
import CustomAccordion from "elements/Accordion/CustomAccordion";

type BurgerProp = {
  openBurgerMenu: any;
  setOpenBurgreMenu: any;
  open: any;
  setOpen: any;
  openRemindePass: any;
  setOpenRemindePass: any;
  openRegestration: any;
  setOpenRegestration: any;
  openWindowCity: any;
  setOpenWindowCity: any;
};

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
        onClick={() => setOpenBurgreMenu(false)}
        className={`burger_holder animated_burger ${
          openBurgerMenu ? "show_burger" : ""
        } `}
      >
        <div className="burger_window" onClick={(e) => e.stopPropagation()}>
          <div className="burger_menu_header">
            <Link href="/">
              <Image
                className="burger_logo"
                width={144}
                height={24}
                src="/Logo/logo.svg"
                alt="Rozetka"
                placeholder="empty"
              />
            </Link>
            <button
              onClick={() => setOpenBurgreMenu(false)}
              className="burger_close"
            >
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
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenBurgreMenu(false);
                        setOpen(true);
                      }}
                      className="button auth_button"
                    >
                      Вхід
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenBurgreMenu(false);
                        setOpenRegestration(true);
                      }}
                      className="button auth_button"
                    >
                      Реєстрація
                    </button>
                  </div>
                  <p className="auth_caption">
                    Авторизуйтесь для отримання розширених можливостей
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://savelife.in.ua/donate/"
              className="burger_comeback"
            >
              <i className="comeback_shield fa-solid fa-shield-heart"></i>{" "}
              Повернись живим
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
                <Link
                  className="burger_menu_button"
                  onClick={() => setOpenBurgreMenu(false)}
                  href="/shopCart/ShopCart"
                >
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
                          <Image
                            className="lang_icon"
                            width={24}
                            height={16}
                            src="/Lang/ua.svg"
                            alt="ua"
                          />
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
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenWindowCity(true);
                        setOpenBurgreMenu(false);
                      }}
                      className="button city_toggle"
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
                <CustomAccordion accordionTitle={"Сервіси"}>
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
                <CustomAccordion accordionTitle={"Партнерам"}>
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
              <ApplicationStore appClass={"app_store_burger"} />
              <SocialsMain
                socialsClass={"socials_sidebar_block_burger"}
                SocialsLinks={SocialsLinks}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
