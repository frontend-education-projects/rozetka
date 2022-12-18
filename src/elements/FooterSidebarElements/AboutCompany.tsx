import Link from 'next/link'
import React from 'react'

export const AboutCompany = () => {
  return (
    <div className="footer_sidebar_links">
      <div className="footer_sidebar_heading">
        <div className="footer_sidebar_title">Інформація про компанію</div>
      </div>
      <ul className="footer_sidebar_list">
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
