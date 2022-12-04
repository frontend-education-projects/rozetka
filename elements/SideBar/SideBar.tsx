import React from "react";
import styles from "./SideBar.module.sass";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faPaperPlane,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import AuthorSidebar from "elements/AuthorSidebar/AuthorSidebar";
import ApplicationStore from "elements/ApplicationStore/ApplicationStore";
import ModalWindow from "elements/ModalWindowReg/ModalWindow";
import { useState, useEffect } from "react";
import SocialsMain from "elements/Socials/SocialsMain";
import { SocialsLinks } from "@/pages/api/data/sidebarCategoiesMassive";
import FooterSidebar from "elements/FooterSidebarElements/FooterSidebar";
import FooterCopyright from "elements/FooterCopyright/FooterCopyright";

type sidebarLinks = {
  sidebarLinks: any;
};

type sidebarLinksInfo = {
  id: number;
  fontIcon: string;
  text: string;
  path: string;
};

export const SideBar = ({ sidebarLinks }: sidebarLinks) => {
  if (!sidebarLinks) {
    return null;
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />
      <div className={styles.main_page_sidebar}>
        {/* sidebar links products */}
        <div className={styles.sidebar}>
          <div className={styles.sidebar_wrapper}>
            <ul className={styles.sidebar_categories}>
              {sidebarLinks.map(
                ({ id, fontIcon, text, path }: sidebarLinksInfo) => (
                  <li className={styles.sidebar_items} key={id}>
                    <Link className={styles.sidebar_links} href={path}>
                      <span className={styles.links_icon}>
                        <i className={`fa-solid fa-${fontIcon}`}></i>
                      </span>
                      {text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        {/* Help Links */}
        <Link className={styles.links_help} href="/">
          <span className={styles.help_icon}>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </span>
          Довідковий центр
        </Link>

        <Link className={styles.links_help} href="/">
          <span className={styles.help_icon}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          Зв'язатися з нами
        </Link>

        <Link className={styles.links_help} href="/">
          <span className={styles.help_icon}>
            <FontAwesomeIcon icon={faShop} />
          </span>
          Точки видачі Rozetka
        </Link>

        {/* author */}
        <AuthorSidebar>
          <button
            onClick={() => setOpen(true)}
            type="button"
            className={styles.btn_auth}
          >
            Увійдіть в особистий кабінет
          </button>
        </AuthorSidebar>

        {/* apps */}
        <ApplicationStore />

        {/* socials */}
        <SocialsMain SocialsLinks={SocialsLinks} />

        {/* footer */}
        <FooterSidebar />

        {/* footer copyright */}
        <FooterCopyright />
      </div>
    </>
  );
};

export default SideBar;
