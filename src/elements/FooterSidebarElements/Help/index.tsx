import { Typography } from '@elements/Typography'
import Link from 'next/link'
import React from 'react'

import styles from './HelpStyle.module.sass'

export const Help = () => {
  return (
    <div className={styles.footer_sidebar_links}>
      <div className={styles.footer_sidebar_heading}>
        <Typography component={'h3'} variant={'h6'}>
          Допомога
        </Typography>
      </div>
      <ul className={styles.footer_sidebar_list}>
        <li>
          <Link href="/">Доставка та оплата</Link>
        </li>
        <li>
          <Link href="/">Кредит</Link>
        </li>
        <li>
          <Link href="/">Гарантія</Link>
        </li>
        <li>
          <Link href="/">Повернення товару</Link>
        </li>
        <li>
          <Link href="/">Сервісні центри</Link>
        </li>
      </ul>
    </div>
  )
}
