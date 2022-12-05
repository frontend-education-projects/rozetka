import React, { useState } from "react";
import styles from "./HeaderActions.module.sass";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ModalWindow from "elements/ModalWindowReg/ModalWindow";

export const HeaderActions = () => {
  const [open, setOpen] = useState(false);
  const [openRemindePass, setOpenRemindePass] = useState(false);
  const [openRegetration, setOpenRegestration] = useState(false);

  return (
    <>
      <ModalWindow
        open={open}
        setOpen={setOpen}
        openRemindePass={openRemindePass}
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
                <Image width={24} height={16} src="/Lang/ua.svg" alt="ua" />
              </div>
              <div className={styles.ua_text}>UA</div>
            </div>
          </div>
        </div>

        <div className={styles.header_actions_component}>
          <div className={styles.profile_inner}>
            <div className={styles.component_profile}>
              <button onClick={() => setOpen(true)} className={styles.btn_user}>
                <FontAwesomeIcon className={styles.icon_user} icon={faUser} />
              </button>
            </div>

            <div className={styles.component_cart}>
              <Link href="/shopCart/ShopCart">
                <button className={styles.btn_cart}>
                  <FontAwesomeIcon
                    className={styles.icon_cart}
                    icon={faCartShopping}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderActions;
