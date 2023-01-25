import { CopyrightModalWindow } from '@elements/FooterCopyrightModal/CopyrightModalWindow'
import Image from 'next/image'
import React, { useState } from 'react'

import styles from './FooterCopyright.module.sass'

export const PaymentMastercard = () => {
  const [openCard, setOpenCard] = useState(false)

  const handleOpenCard = () => {
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
        <button className={styles.payments_button} onClick={handleOpenCard}>
          <Image alt="mastercard" height={32} src="/Payments/mastercard-logo.svg" width={72} />
        </button>
      </li>
    </>
  )
}
