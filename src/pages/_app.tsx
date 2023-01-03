// TODO: move styles to the appropriate components
import '../styles/global.sass'
import '../styles/globalButtonsStyle.sass'
import '../styles/globalReset.sass'
import '../styles/globalModalWindowStyles.sass'
import '../elements/Burger/BurgerMenu.sass'
import '../elements/Accordion/AccordionStyle.sass'
import '../elements/MainSlider/MainSliderStyle.sass'

import type { AppProps } from 'next/app'
import React from 'react'
import { Layout } from 'src/elements/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
