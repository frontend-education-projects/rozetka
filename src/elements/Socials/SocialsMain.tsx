/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

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
    <div className={`socials_sidebar_block ${socialsClass}`}>
      <div className="socials_sidebar_heading">Ми в соціальних мережах</div>
      <ul className="socials_list">
        {SocialsLinks.map(({ id, classSoc, socIcon, socPath }: SocialsLinksInfoProps) => (
          <li className="socials_list_item" key={id}>
            <a className={`socials_link socials_${classSoc}`} href={socPath} rel="noreferrer" target="_blank">
              <i className={`fa-brands fa-${socIcon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
