import Head from 'next/head'
import React from 'react'
import { MainSlider } from 'src/elements/MainSlider/MainSlider'
import { SideBar } from 'src/elements/SideBar/SideBar'

import { sidebarLinks } from './api/data/sidebarCategoiesMassive'
import styles from './index.module.sass'

export const Home = () => {
  return (
    <>
      <Head>
        <title>RozetkaUA-home-project</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.layout_with_sidebar}>
            <div className={styles.sidebar_main}>
              <SideBar sidebarLinks={sidebarLinks} />
            </div>

            <div className={styles.main_content}>
              <MainSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
