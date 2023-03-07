import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import React, { ReactNode } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react'

type SliderChildrenProps = {
  children: ReactNode
}

export const MainSlider = ({ children }: SliderChildrenProps) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        rewind={true}
        speed={1000}
      >
        {children}
      </Swiper>
    </>
  )
}
