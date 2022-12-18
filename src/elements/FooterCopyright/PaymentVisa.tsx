import Image from 'next/image'
import React, { useState } from 'react'
import { CopyrightModalWindow } from 'src/elements/FooterCopyrightModal/CopyrightModalWindow'

export const PaymentVisa = () => {
  const [openCard, setOpenCard] = useState(false)

  const handlerOpenCard = () => {
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
        <button className="payments_button payments_space" onClick={handlerOpenCard}>
          <Image alt="mastercard" height={32} src="/Payments/visa-logo.svg" width={72} />
        </button>
      </li>
    </>
  )
}
