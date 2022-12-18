import Link from 'next/link'
import React from 'react'

export const Help = () => {
  return (
    <div className="footer_sidebar_links">
      <div className="footer_sidebar_heading">
        <div className="footer_sidebar_title">Допомога</div>
      </div>
      <ul className="footer_sidebar_list">
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
