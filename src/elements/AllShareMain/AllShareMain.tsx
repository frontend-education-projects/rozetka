import React, { ReactNode } from 'react'

import styles from '../AllShareMain/AllShare.module.sass'

type ChildreProp = {
  children: ReactNode
}

export const AllShareMain = ({ children }: ChildreProp) => {
  return <div className={styles.all_share_body}>{children}</div>
}
