import React, { ReactNode, useState } from 'react'

import styles from '../FooterSidebarElements/FooterSidebar.module.sass'

type CustomAccordionProps = {
  accordionTitle: string
  children: ReactNode
}

export const CustomAccordion = ({ accordionTitle, children }: CustomAccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleHendler = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <div className={styles.footer_sidebar_links}>
      <div className={styles.footer_sidebar_heading}>
        <div className={styles.footer_sidebar_title}>{accordionTitle}</div>
        <button className={'button accordion_icon'} onClick={toggleHendler}>
          <i aria-expanded={openAccordion} className="accordion_arrow fa-solid fa-chevron-down" />
        </button>
      </div>
      <div aria-expanded={!openAccordion} className="accordion_content">
        {children}
      </div>
    </div>
  )
}
