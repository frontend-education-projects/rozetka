import { ProductCardMainInfo, ProductCardMainInfoProps, ProductInfo, ProductInfoProps } from '@data/ProductCardInfo'
import { sidebarLinks } from '@data/SidebarCategoiesMassive'
import { SliderPhotoMassive, SliderPhotoProps } from '@data/SliderPhotosMassive'
import { ProductCard } from '@features/ProductCard'
import { ProductCardMain } from '@features/ProductCardMain'
import { SideBar } from '@features/SideBar'
import { MainSlider } from '@modules/MainSlider'
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
            <aside className={styles.sidebar_main}>
              <SideBar sidebarLinks={sidebarLinks} />
            </aside>

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
              <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {ProductCardMainInfo?.map(({ ...obj }: ProductCardMainInfoProps) => (
                  <ProductCardMain key={obj.id} {...obj} />
                ))}
              </ul>

              <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {ProductInfo?.map(({ ...obj }: ProductInfoProps) => (
                  <ProductCard key={obj.id} {...obj} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
