import { SocialsLinks } from '@data/SidebarCategoiesMassive'
import { ApplicationStore } from '@elements/ApplicationStore/ApplicationStore'
import { AuthorSidebar } from '@elements/AuthorSidebar/AuthorSidebar'
import { FooterCopyright } from '@elements/FooterCopyright/FooterCopyright'
import { FooterSidebar } from '@elements/FooterSidebarElements/FooterSidebar'
import { ModalWindow } from '@elements/ModalWindowReg/ModalWindow'
import { SocialsMain } from '@elements/Socials/SocialsMain'
import { faCircleQuestion, faPaperPlane, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

import styles from './SIdeBar.module.sass'

type LinksSidebarProps = {
  id: number
  fontIcon: string
  text: string
  path: string
}

type sidebarLinksProps = {
  sidebarLinks: LinksSidebarProps[]
}

type sidebarLinksInfo = {
  id: number
  fontIcon: string
  text: string
  path: string
}

export const SideBar = ({ sidebarLinks }: sidebarLinksProps) => {
  const [open, setOpen] = useState(false)
  const [openRemindePass, setOpenRemindePass] = useState(false)
  const [openRegestration, setOpenRegestration] = useState(false)

  if (!sidebarLinks) {
    return null
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
        <AuthorSidebar setOpen={setOpen} />

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
