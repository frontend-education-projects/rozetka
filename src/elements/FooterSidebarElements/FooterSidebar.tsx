import React from 'react'

import { AboutCompany } from './AboutCompany'
import styles from './FooterSidebar.module.sass'
import { Help } from './Help'
import { Partners } from './Partners'
import { Servises } from './Servises'

export const FooterSidebar = () => {
  return (
    <div className={styles.footer_sidebar_block}>
      <AboutCompany />
      <Help />
      <Servises />
      <Partners />
    </div>
  )
}
