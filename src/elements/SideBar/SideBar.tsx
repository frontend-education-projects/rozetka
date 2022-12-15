import { faCircleQuestion, faPaperPlane, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import ApplicationStore from 'src/elements/ApplicationStore/ApplicationStore'
import AuthorSidebar from 'src/elements/AuthorSidebar/AuthorSidebar'
import FooterCopyright from 'src/elements/FooterCopyright/FooterCopyright'
import FooterSidebar from 'src/elements/FooterSidebarElements/FooterSidebar'
import ModalWindow from 'src/elements/ModalWindowReg/ModalWindow'
import SocialsMain from 'src/elements/Socials/SocialsMain'

import { SocialsLinks } from '../../pages/api/data/sidebarCategoiesMassive'
import styles from './SIdeBar.module.sass'

type sidebarLinks = {
  sidebarLinks: any
}

type sidebarLinksInfo = {
  id: number
  fontIcon: string
  text: string
  path: string
}

export const SideBar = ({ sidebarLinks }: sidebarLinks) => {
  if (!sidebarLinks) {
    return null
  }

  const [open, setOpen] = useState(false)
  const [openRemindePass, setOpenRemindePass] = useState(false)
  const [openRegestration, setOpenRegestration] = useState(false)

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
                  <Link className={styles.sidebar_links} href={path}>
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
        <Link className={styles.links_help} href="/">
          <span className={styles.help_icon}>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </span>
          Довідковий центр
        </Link>

        <Link className={styles.chat_rozetka} href="/">
          <span className={styles.chat_icon}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          Чат з ROZETKA
        </Link>

        <Link className={styles.links_help} href="/">
          <span className={styles.help_icon}>
            <FontAwesomeIcon icon={faShop} />
          </span>
          Точки видачі Rozetka
        </Link>

        {/* author */}
        <AuthorSidebar>
          <button className={styles.btn_auth} onClick={() => setOpen(true)} type="button">
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

export default SideBar
