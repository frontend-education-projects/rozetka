import React from 'react'

import { CopyrightText } from './CopyrightText'
import styles from './FooterCopyright.module.sass'
import { PaymentMastercard } from './PaymentMastercard'
import { PaymentVisa } from './PaymentVisa'

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
