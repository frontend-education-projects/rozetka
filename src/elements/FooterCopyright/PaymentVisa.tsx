import { CopyrightModalWindow } from '@elements/FooterCopyrightModal/CopyrightModalWindow'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

import styles from './FooterCopyright.module.sass'

export const PaymentVisa = () => {
  const [openCard, setOpenCard] = useState(false)

  const handleOpenCard = () => {
    setOpenCard(true)
  }

  return (
    <>
      <CopyrightModalWindow
        content="Content Visa"
        openCard={openCard}
        setOpenCard={setOpenCard}
        text="Verified by Visa"
      />
      <li>
        <button className={clsx(styles.payments_button, styles.payments_space)} onClick={handleOpenCard}>
          <Image alt="mastercard" height={32} src="/Payments/visa-logo.svg" width={72} />
        </button>
      </li>
    </>
  )
}
