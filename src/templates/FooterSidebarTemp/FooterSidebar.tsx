import { AboutCompany } from '@elements/FooterSidebarElements/AboutCompany'
import { Help } from '@elements/FooterSidebarElements/Help'
import { Partners } from '@elements/FooterSidebarElements/Partners'
import { Servises } from '@elements/FooterSidebarElements/Servises'
import React from 'react'

import styles from './FooterSidebarTempStyle.module.sass'

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
