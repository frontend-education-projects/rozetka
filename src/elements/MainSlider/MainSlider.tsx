import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderPhotoMassive } from '../../pages/api/data/SliderPhotosMassive'

type SliderPhotoProp = {
  id: number
  picture: string
  pathPicture: string
}

export const MainSlider = () => {
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
      </Swiper>
    </>
  )
}
