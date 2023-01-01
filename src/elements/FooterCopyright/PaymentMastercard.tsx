import Image from 'next/image'
import React, { useState } from 'react'
import { CopyrightModalWindow } from 'src/elements/FooterCopyrightModal/CopyrightModalWindow'

import styles from './FooterCopyright.module.sass'

export const PaymentMastercard = () => {
  const [openCard, setOpenCard] = useState(false)

  const handlerOpenCard = () => {
    setOpenCard(true)
  }
  return (
    <>
      <CopyrightModalWindow
        content="Content mastercard"
        openCard={openCard}
        setOpenCard={setOpenCard}
        text="MasterCard® SecureCode™"
      />
      <li>
        <button className={styles.payments_button} onClick={handlerOpenCard}>
          <Image alt="mastercard" height={32} src="/Payments/mastercard-logo.svg" width={72} />
        </button>
      </li>
    </>
  )
}
