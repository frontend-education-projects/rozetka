import '@/styles/global.sass'
import '@/styles/globalReset.sass'
import '../elements/ModalWindowReg/ModalWindow.sass'
import { Layout } from 'elements/Layout/Layout'
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
