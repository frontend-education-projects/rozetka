import { Typography } from '@elements/Typography'
import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'

import styles from './Accordion.module.sass'

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
        <Typography component="h3" variant="h6">
          {accordionTitle}
        </Typography>
        <button className={clsx('button', styles.accordion_icon)} onClick={toggleHendler}>
          <i aria-expanded={openAccordion} className={clsx(styles.accordion_arrow, 'fa-solid', 'fa-chevron-down')} />
        </button>
      </div>
      <div aria-expanded={!openAccordion} className={clsx(styles.accordion_content)}>
        {children}
      </div>
    </div>
  )
}
