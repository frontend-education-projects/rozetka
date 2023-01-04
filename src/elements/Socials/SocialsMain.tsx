/* eslint-disable @typescript-eslint/restrict-template-expressions */

import {} from '@fortawesome/free-solid-svg-icons'
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
  socialsClass?: string
}

type SocialsLinksInfoProps = {
  id: number
  classSoc: string
  socIcon: string
  socPath: string
}

export const SocialsMain = ({ SocialsLinks, socialsClass }: SocialsLinksProps) => {
  if (!SocialsLinks) {
    return null
  }

  return (
    <div className={clsx(styles.socials_sidebar_block, styles[socialsClass || ''])}>
      <div className={styles.socials_sidebar_heading}>Ми в соціальних мережах</div>
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
