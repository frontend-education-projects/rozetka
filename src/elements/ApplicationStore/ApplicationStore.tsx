import Image from 'next/image'
import React from 'react'

import styles from './ApplicationStore.module.sass'

type appStoreProp = {
  appClass?: string
}

export const ApplicationStore = ({ appClass }: appStoreProp) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={`apps_store ${appClass}`}>
      <div className={styles.store_title}>Встановлюй наші додатки</div>
      <div className={styles.store_buttons}>
        <a
          href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="Google Play"
            height={32}
            loading="lazy"
            src="/Applications/google.svg"
            title="Додаток для Андроїд"
            width={102}
          />
        </a>

        <a
          href="https://itunes.apple.com/app/apple-store/id740469631/?pt=3132803&ct=fullversion&at=1000l3MB&mt=8"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="Google Play"
            height={32}
            loading="lazy"
            src="/Applications/apple.svg"
            title="Додаток для Айфон"
            width={102}
          />
        </a>
      </div>
    </div>
  )
}
