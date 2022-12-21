// TODO: move styles to the appropriate components
import '../styles/global.sass'
import '../styles/globalReset.sass'
import '../elements/ModalWindowReg/ModalWindow.sass'
import '../elements/Socials/SocialsMain.sass'
import '../elements/FooterSidebarElements/FooterSidebar.sass'
import '../elements/FooterCopyright/FooterCopyright.sass'
import '../elements/FooterCopyrightModal/CopyrightModalWindow.sass'
import '../elements/Burger/BurgerMenu.sass'
import '../elements/Burger/BurgerModalWindowCityStyle.sass'
import '../elements/Accordion/AccordionStyle.sass'
import '../elements/MainSlider/MainSliderStyle.sass'
import '../elements/Typography/Typography.sass'

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
