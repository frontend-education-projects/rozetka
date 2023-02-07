import { Typography } from '@elements/Typography'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './ApplicationStore.module.sass'

type AppStoreProp = {
  appClassName?: string
}

export const ApplicationStore = ({ appClassName }: AppStoreProp) => {
  return (
    <div className={clsx(styles.apps_store, styles[appClassName || ''])}>
      <Typography component="h4" marginBottom="mb-12" variant="h6">
        Встановлюй наші додатки
      </Typography>
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
