import React from 'react'
import styles from './ApplicationStore.module.sass'
import Image from 'next/image'

const ApplicationStore = () => {
  return (
    <>
    <div className={styles.store_title}>Встановлюй наші додатки</div>
    <div className={styles.store_buttons}>
        <a target='_blank' href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion">
            <Image loading='lazy' width={102} height={32} src="/Applications/google.svg" alt='Google Play' title='Додаток для Андроїд' />
        </a>

        <a target='_blank' href="https://itunes.apple.com/app/apple-store/id740469631/?pt=3132803&ct=fullversion&at=1000l3MB&mt=8">
            <Image loading='lazy' width={102} height={32} src="/Applications/apple.svg" alt='Google Play' title='Додаток для Айфон' />
        </a>
    </div>
    </>
  )
}

export default ApplicationStore