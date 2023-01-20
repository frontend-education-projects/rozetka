import { sidebarLinks } from '@api/sidebarCategoiesMassive'
import { SliderPhotoMassive, SliderPhotoProps } from '@api/SliderPhotosMassive'
import { MainSlider } from '@elements/MainSlider/MainSlider'
import { SideBar } from '@elements/SideBar/SideBar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

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
              <MainSlider>
                {SliderPhotoMassive.map(({ id, picture, pathPicture }: SliderPhotoProps) => (
                  <SwiperSlide key={id}>
                    <Link href={`${String(pathPicture)}`}>
                      <Image
                        alt="slide"
                        height={400}
                        placeholder="empty"
                        priority={true}
                        src={`/sliderImg/${String(picture)}.jpg`}
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
