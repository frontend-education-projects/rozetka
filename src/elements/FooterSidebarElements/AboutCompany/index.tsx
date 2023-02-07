import { Typography } from '@elements/Typography'
import Link from 'next/link'
import React from 'react'

import styles from './AboutCompanyStyle.module.sass'

export const AboutCompany = () => {
  return (
    <div className={styles.footer_sidebar_links}>
      <div className={styles.footer_sidebar_heading}>
        <Typography component="h3" variant="h6">
          Інформація про компанію
        </Typography>
      </div>
      <ul className={styles.footer_sidebar_list}>
        <li>
          <Link href="/">Про нас</Link>
        </li>
        <li>
          <Link href="/">Умови використання</Link>
        </li>
        <li>
          <Link href="/">Контакти</Link>
        </li>
        <li>
          <Link href="/">Усі категорії</Link>
        </li>
      </ul>
    </div>
  )
}
