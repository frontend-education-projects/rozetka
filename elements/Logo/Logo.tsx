import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.sass'

export const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
        <Image width={240} height={40} src="/Logo/logo.svg" alt='Rozetka' placeholder='empty' />
    </Link>
  )
}

export default Logo
