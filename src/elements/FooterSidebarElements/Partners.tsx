import Link from 'next/link'
import React from 'react'

export const Partners = () => {
  return (
    <div className="footer_sidebar_links border_zero">
      <div className="footer_sidebar_heading">
        <div className="footer_sidebar_title">Інформація про компанію</div>
      </div>
      <ul className="footer_sidebar_list">
        <li>
          <Link href="/">Продавати на Розетці</Link>
        </li>
        <li>
          <Link href="/">Співпраця з нами</Link>
        </li>
        <li>
          <Link href="/">Франчайзинг</Link>
        </li>
        <li>
          <Link href="/">Оренда приміщень</Link>
        </li>
      </ul>
    </div>
  )
}
