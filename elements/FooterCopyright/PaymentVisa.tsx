import React, { useState } from "react";
import Image from "next/image";
import CopyrightModalWindow from "elements/FooterCopyrightModal/CopyrightModalWindow";

const PaymentVisa = () => {
  const [openCard, setOpenCard] = useState(false);
  return (
    <>
      <CopyrightModalWindow
        text="Verified by Visa"
        content="Content Visa"
        openCard={openCard}
        setOpenCard={setOpenCard}
      />
      <li>
        <button
          onClick={() => setOpenCard(true)}
          className="payments_button payments_space"
        >
          <Image
            width={72}
            height={32}
            src="/Payments/visa-logo.svg"
            alt="mastercard"
          />
        </button>
      </li>
    </>
  );
};

export default PaymentVisa;
