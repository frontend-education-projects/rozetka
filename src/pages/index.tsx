import { ProductCardMainInfo, ProductInfo } from '@data/ProductCardInfo'
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
  const productsCards =
    ProductCardMainInfo &&
    ProductCardMainInfo.map(
      (obj: {
        id: number
        imageUrl: string
        pathUrl: string
        title: string
        old_price: number
        new_price: number
        currency: string
      }) => <ProductCardMain key={obj.id} {...obj} />,
    )

  const productsCardsMain =
    ProductInfo &&
    ProductInfo.map(
      (obj: {
        id: number
        topSales: string
        imageUrl: string
        imageUrlHover: string
        pathUrl: string
        title: string
        comments_amount: number
        stars: string
        old_price: number
        new_price: number
        currency: string
        deliveryStatus: string
        description: string
        bonus: number
      }) => <ProductCard key={obj.id} {...obj} />,
    )

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
              {productsCards}
              {productsCardsMain}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
