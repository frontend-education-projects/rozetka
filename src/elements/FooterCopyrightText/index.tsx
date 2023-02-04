import { Typography } from '@elements/Typography'
import React from 'react'

import styles from './FooterCopyrightText.module.sass'

export const CopyrightText = () => {
  return (
    <>
      <Typography colorVariant={'gray'} component={'p'} variant={'subtitle2'}>
        ТМ використовується на підставі ліцензії правовласника RozetkaLTD.
      </Typography>
      <p className={styles.copyright_subtext}>© Інтернет-магазин «Розетка™»</p>
      <p className={styles.copyright_year}>2001–2022</p>
    </>
  )
}
