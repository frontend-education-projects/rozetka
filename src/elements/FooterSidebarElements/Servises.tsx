import Link from 'next/link'
import React from 'react'

import styles from './FooterSidebar.module.sass'

export const Servises = () => {
  return (
    <div className={styles.footer_sidebar_links}>
      <div className={styles.footer_sidebar_heading}>
        <div className={styles.footer_sidebar_title}>Сервіси</div>
      </div>
      <ul className={styles.footer_sidebar_list}>
        <li>
          <Link href="/">Бонусний рахунок</Link>
        </li>
        <li>
          <Link href="/">Rozetka Premium</Link>
        </li>
        <li>
          <Link href="/">Подарункові сертефікати</Link>
        </li>
        <li>
          <Link href="/">Rozetka обмін</Link>
        </li>
        <li>
          <Link href="/">Тури та відпочинок</Link>
        </li>
      </ul>
    </div>
  )
}
