import 'swiper/css'
import 'swiper/css/navigation'

import React, { ReactNode } from 'react'
import { Autoplay, Navigation } from 'swiper'
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
        modules={[Navigation, Autoplay]}
        navigation={true}
        rewind={true}
        speed={1000}
      >
        {children}
      </Swiper>
    </>
  )
}
