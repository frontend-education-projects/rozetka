import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AllShareMain } from 'src/elements/AllShareMain/AllShareMain'
import { ButtonCustom } from 'src/elements/Button/ButtonCustom'
import { MainSlider } from 'src/elements/MainSlider/MainSlider'
import { SideBar } from 'src/elements/SideBar/SideBar'
import { TypographyCustom } from 'src/elements/Typography/TypographyCustom'
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
              <AllShareMain>
                <ButtonCustom
                  ButtonClass="all_shares_link"
                  ButtonPath="/"
                  ButtonText="Всі акції"
                  Buttontag="a"
                  Shares={133}
                />
              </AllShareMain>
              <ButtonCustom
                ButtonClass="button show_more_button"
                ButtonIcon="arrow-down"
                ButtonText="Показати ще"
                Buttontag="button"
              />
              <ButtonCustom
                ButtonClass="button product_buy_button"
                ButtonIcon="cart-shopping"
                ButtonText="Купити"
                Buttontag="button"
              />
              <ButtonCustom
                ButtonClass="button button_product_detail"
                ButtonText="Дізнатися більше"
                Buttontag="button"
              />
              <ButtonCustom ButtonClass="button product_credit" ButtonText="Купити в кредит" Buttontag="button" />
              <TypographyCustom tag="h2" typographyText="Більше товарів для вибору" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
