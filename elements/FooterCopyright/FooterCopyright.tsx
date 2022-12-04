import CopyrightModalWindow from "elements/FooterCopyrightModal/CopyrightModalWindow";
import React from "react";
import CopyrightText from "./CopyrightText";
import PaymentMastercard from "./PaymentMastercard";
import PaymentVisa from "./PaymentVisa";
import { useState } from "react";

const FooterCopyright = () => {
  const [openCard, setOpenCard] = useState(false);
  return (
    <>
      <div className="copyright_block">
        <div className="copyright_payments">
          <ul className="payments_buttons">
            <PaymentMastercard />
            <PaymentVisa />
          </ul>
        </div>
        <CopyrightText />
      </div>
    </>
  );
};

export default FooterCopyright;
