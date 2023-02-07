/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Typography } from '@elements/Typography'
import clsx from 'clsx'
import React from 'react'

import styles from './SocialsMain.module.sass'

type MassiveSocialsLinksProps = {
  id: number
  classSoc: string
  socIcon: string
  socPath: string
}

type SocialsLinksProps = {
  SocialsLinks: MassiveSocialsLinksProps[]
  socialsClassName?: string
}

type SocialsLinksInfoProps = {
  id: number
  classSoc: string
  socIcon: string
  socPath: string
}

export const SocialsMain = ({ SocialsLinks, socialsClassName }: SocialsLinksProps) => {
  if (!SocialsLinks) {
    return null
  }

  return (
    <div className={clsx(styles.socials_sidebar_block, styles[socialsClassName || ''])}>
      <Typography component="h4" marginBottom="mb-12" variant="h6">
        Ми в соціальних мережах
      </Typography>
      <ul className={styles.socials_list}>
        {SocialsLinks.map(({ id, classSoc, socIcon, socPath }: SocialsLinksInfoProps) => (
          <li className={styles.socials_list_item} key={id}>
            <a className={clsx(styles.socials_link, styles[classSoc])} href={socPath} rel="noreferrer" target="_blank">
              <i className={`fa-brands fa-${socIcon}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
