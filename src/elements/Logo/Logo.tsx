import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './Logo.module.sass'

export const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <Image alt="Rozetka" height={40} placeholder="empty" priority={true} src="/Logo/logo.svg" width={240} />
        </Link>
      </div>
    </>
  )
}
