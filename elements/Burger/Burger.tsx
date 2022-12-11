import React from "react";
import styles from "./Burger.module.sass";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import ModalWindow from "elements/ModalWindowReg/ModalWindow";
import ModalWindowRegestration from "elements/ModalWindowReg/ModalWindowRegestration";
import BurgerModalWindowCity from "./BurgerModalWindowCity";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  const [openBurgerMenu, setOpenBurgreMenu] = useState(false);
  const [openRemindePass, setOpenRemindePass] = useState(false);
  const [openRegestration, setOpenRegestration] = useState(false);
  const [openWindowCity, setOpenWindowCity] = useState(false);

  return (
    <>
      <ModalWindow
        open={open}
        setOpen={setOpen}
        openRemindePass={openRemindePass}
        setOpenRemindePass={setOpenRemindePass}
        openRegestration={openRegestration}
        setOpenRegestration={setOpenRegestration}
      />
      <BurgerMenu
        openBurgerMenu={openBurgerMenu}
        setOpenBurgreMenu={setOpenBurgreMenu}
        open={open}
        setOpen={setOpen}
        openRemindePass={openRemindePass}
        setOpenRemindePass={setOpenRemindePass}
        openRegestration={openRegestration}
        setOpenRegestration={setOpenRegestration}
        openWindowCity={openWindowCity}
        setOpenWindowCity={setOpenWindowCity}
      />

      <BurgerModalWindowCity
        openWindowCity={openWindowCity}
        setOpenWindowCity={setOpenWindowCity}
      />
      <button
        onClick={() => setOpenBurgreMenu(true)}
        type="button"
        className={styles.icon__menu}
      >
        <span></span>
      </button>
    </>
  );
};

export default Burger;
