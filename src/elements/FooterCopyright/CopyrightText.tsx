import React from 'react'

import styles from './FooterCopyright.module.sass'

export const CopyrightText = () => {
  return (
    <>
      <p className={styles.copyright_copyright_text}>
        ТМ використовується на підставі ліцензії правовласника RozetkaLTD.
      </p>
      <p className={styles.copyright_subtext}>© Інтернет-магазин «Розетка™»</p>
      <p className={styles.copyright_year}>2001–2022</p>
    </>
  )
}
