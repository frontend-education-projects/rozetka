import React from 'react'
import { useState } from 'react'
import ModalWindow from 'src/elements/ModalWindowReg/ModalWindow'

import styles from './Burger.module.sass'
import BurgerMenu from './BurgerMenu'
import BurgerModalWindowCity from './BurgerModalWindowCity'

export const Burger = () => {
  const [open, setOpen] = useState(false)
  const [openBurgerMenu, setOpenBurgreMenu] = useState(false)
  const [openRemindePass, setOpenRemindePass] = useState(false)
  const [openRegestration, setOpenRegestration] = useState(false)
  const [openWindowCity, setOpenWindowCity] = useState(false)

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
      <BurgerMenu
        open={open}
        openBurgerMenu={openBurgerMenu}
        openRegestration={openRegestration}
        openRemindePass={openRemindePass}
        openWindowCity={openWindowCity}
        setOpen={setOpen}
        setOpenBurgreMenu={setOpenBurgreMenu}
        setOpenRegestration={setOpenRegestration}
        setOpenRemindePass={setOpenRemindePass}
        setOpenWindowCity={setOpenWindowCity}
      />

      <BurgerModalWindowCity openWindowCity={openWindowCity} setOpenWindowCity={setOpenWindowCity} />
      <button className={styles.icon__menu} onClick={() => setOpenBurgreMenu(true)} type="button">
        <span></span>
      </button>
    </>
  )
}

export default Burger
