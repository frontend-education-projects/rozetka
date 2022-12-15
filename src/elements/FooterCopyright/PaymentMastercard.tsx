import Image from 'next/image'
import React, { useState } from 'react'
import CopyrightModalWindow from 'src/elements/FooterCopyrightModal/CopyrightModalWindow'

const PaymentMastercard = () => {
  const [openCard, setOpenCard] = useState(false)
  return (
    <>
      <CopyrightModalWindow
        content="Content mastercard"
        openCard={openCard}
        setOpenCard={setOpenCard}
        text="MasterCard® SecureCode™"
      />
      <li>
        <button className="payments_button" onClick={() => setOpenCard(true)}>
          <Image alt="mastercard" height={32} src="/Payments/mastercard-logo.svg" width={72} />
        </button>
      </li>
    </>
  )
}

export default PaymentMastercard
