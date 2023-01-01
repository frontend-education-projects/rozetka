import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MainSlider } from 'src/elements/MainSlider/MainSlider'
import { SideBar } from 'src/elements/SideBar/SideBar'
import { SwiperSlide } from 'swiper/react'

import { sidebarLinks } from './api/data/sidebarCategoiesMassive'
import { SliderPhotoMassive } from './api/data/SliderPhotosMassive'
import styles from './index.module.sass'

type SliderPhotoProp = {
  id: number
  picture: string
  pathPicture: string
}

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
              <MainSlider>
                {SliderPhotoMassive.map(({ id, picture, pathPicture }: SliderPhotoProp) => (
                  <SwiperSlide key={id}>
                    <Link href={`${pathPicture}`}>
                      <Image
                        alt="slide"
                        height={400}
                        placeholder="empty"
                        priority={true}
                        src={`/sliderImg/${picture}.jpg`}
                        width={1200}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </MainSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
