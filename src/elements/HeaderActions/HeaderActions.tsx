import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ModalWindow } from 'src/elements/ModalWindowReg/ModalWindow'

import styles from './HeaderActions.module.sass'

export const HeaderActions = () => {
  const [open, setOpen] = useState(false)
  const [openRemindePass, setOpenRemindePass] = useState(false)
  const [openRegestration, setOpenRegestration] = useState(false)

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
      <div className={styles.header_actions}>
        <div className={styles.header_actions_component}>
          <div className={styles.actions_lang}>
            <div className={styles.lang_item_ru}>
              <div className={styles.ru_text}>RU</div>
            </div>

            <div className={styles.lang_item_ua}>
              <div className={styles.image_icon}>
                <Image alt="ua" height={16} src="/Lang/ua.svg" width={24} />
              </div>
              <div className={styles.ua_text}>UA</div>
            </div>
          </div>
        </div>

        <div className={styles.header_actions_component}>
          <div className={styles.profile_inner}>
            <div className={styles.component_profile}>
              <button className={styles.btn_user} onClick={handlerOpenMainWindow}>
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>

            <div className={styles.component_cart}>
              <Link href="/shopCart/ShopCart">
                <button className={styles.btn_cart}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
