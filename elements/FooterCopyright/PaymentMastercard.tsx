import React, { useState } from "react";
import Image from "next/image";
import CopyrightModalWindow from "elements/FooterCopyrightModal/CopyrightModalWindow";

const PaymentMastercard = () => {
  const [openCard, setOpenCard] = useState(false);
  return (
    <>
      <CopyrightModalWindow
        text="MasterCard® SecureCode™"
        content="Content mastercard"
        openCard={openCard}
        setOpenCard={setOpenCard}
      />
      <li>
        <button onClick={() => setOpenCard(true)} className="payments_button">
          <Image
            width={72}
            height={32}
            src="/Payments/mastercard-logo.svg"
            alt="mastercard"
          />
        </button>
      </li>
    </>
  );
};

export default PaymentMastercard;
