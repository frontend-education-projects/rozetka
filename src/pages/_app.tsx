import '@styles/global.sass'
import '@styles/globalReset.sass'
import '@styles/globalModalWindowStyles.sass'
import '../modules/MainSlider/MainSliderStyle.sass'

import { Layout } from '@layout/Layout'
import type { AppProps } from 'next/app'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
