import { PaymentMastercard } from '@elements/FooterCopyrightPayments/PaymentMastercard'
import { PaymentVisa } from '@elements/FooterCopyrightPayments/PaymentVisa'
import { CopyrightText } from '@elements/FooterCopyrightText'
import React from 'react'

import styles from './FooterCopyrightTemp.module.sass'

export const FooterCopyright = () => {
  return (
    <>
      <div className={styles.copyright_block}>
        <div className={styles.copyright_payments}>
          <ul className={styles.payments_buttons}>
            <PaymentMastercard />
            <PaymentVisa />
          </ul>
        </div>
        <CopyrightText />
      </div>
    </>
  )
}
