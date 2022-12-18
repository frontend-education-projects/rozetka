import { faCircleQuestion, faPaperPlane, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { ApplicationStore } from 'src/elements/ApplicationStore/ApplicationStore'
import { AuthorSidebar } from 'src/elements/AuthorSidebar/AuthorSidebar'
import { FooterCopyright } from 'src/elements/FooterCopyright/FooterCopyright'
import { FooterSidebar } from 'src/elements/FooterSidebarElements/FooterSidebar'
import { ModalWindow } from 'src/elements/ModalWindowReg/ModalWindow'
import { SocialsMain } from 'src/elements/Socials/SocialsMain'

import { SocialsLinks } from '../../pages/api/data/sidebarCategoiesMassive'
import styles from './SIdeBar.module.sass'

type LinksSidebarProps = {
  id: number
  fontIcon: string
  text: string
  path: string
}

type sidebarLinks = {
  sidebarLinks: LinksSidebarProps[]
}

type sidebarLinksInfo = {
  id: number
  fontIcon: string
  text: string
  path: string
}

export const SideBar = ({ sidebarLinks }: sidebarLinks) => {
  const [open, setOpen] = useState(false)
  const [openRemindePass, setOpenRemindePass] = useState(false)
  const [openRegestration, setOpenRegestration] = useState(false)

  if (!sidebarLinks) {
    return null
  }

  const handlerOpenMainWindow = () => {
    setOpen(true)
  }

  return (
    <>
      <ModalWindow
        open={open}
        openRegestration={openRegestration}
        openRemindePass={openRemindePass}
        setOpen={setOpen}
        setOpenRegestration={setOpenRegestration}
        setOpenRemindePass={setOpenRemindePass}
      />
      <div className={styles.main_page_sidebar}>
        {/* sidebar links products */}
        <div className={styles.sidebar}>
          <div className={styles.sidebar_wrapper}>
            <ul className={styles.sidebar_categories}>
              {sidebarLinks.map(({ id, fontIcon, text, path }: sidebarLinksInfo) => (
                <li className={styles.sidebar_items} key={id}>
                  <Link href={path}>
                    <span className={styles.links_icon}>
                      <i className={`fa-solid fa-${fontIcon}`}></i>
                    </span>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Help Links */}
        <div className={styles.links_help}>
          <Link href="/">
            <span className={styles.help_icon}>
              <FontAwesomeIcon icon={faCircleQuestion} />
            </span>
            Довідковий центр
          </Link>
        </div>

        <div className={styles.chat_rozetka}>
          <a href="https://t.me/Rozetka_helpBot?start=src=hc">
            <span className={styles.chat_icon}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            Чат з ROZETKA
          </a>
        </div>

        <div className={styles.links_help}>
          <Link href="/">
            <span className={styles.help_icon}>
              <FontAwesomeIcon icon={faShop} />
            </span>
            Точки видачі Rozetka
          </Link>
        </div>

        {/* author */}
        <AuthorSidebar>
          <button className={styles.btn_auth} onClick={handlerOpenMainWindow} type="button">
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
  )
}
