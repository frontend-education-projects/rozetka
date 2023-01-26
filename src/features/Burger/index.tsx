import { ModalWindow } from '@modules/ModalWindowReg/ModalWindow'
import React from 'react'
import { useState } from 'react'

import styles from './Burger.module.sass'
import { BurgerMenu } from './BurgerMenu'
import { BurgerModalWindowCity } from './BurgerModalWindowCity'

export const Burger = () => {
  const [open, setOpen] = useState(false)
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)
  const [openRemindePass, setOpenRemindePass] = useState(false)
  const [openRegestration, setOpenRegestration] = useState(false)
  const [openWindowCity, setOpenWindowCity] = useState(false)

  const handleOpenMenuBurger = () => {
    setOpenBurgerMenu(true)
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
      <BurgerMenu
        open={open}
        openBurgerMenu={openBurgerMenu}
        openRegestration={openRegestration}
        openRemindePass={openRemindePass}
        openWindowCity={openWindowCity}
        setOpen={setOpen}
        setOpenBurgerMenu={setOpenBurgerMenu}
        setOpenRegestration={setOpenRegestration}
        setOpenRemindePass={setOpenRemindePass}
        setOpenWindowCity={setOpenWindowCity}
      />

      <BurgerModalWindowCity openWindowCity={openWindowCity} setOpenWindowCity={setOpenWindowCity} />
      <button className={styles.icon__menu} onClick={handleOpenMenuBurger} type="button">
        <span></span>
      </button>
    </>
  )
}
